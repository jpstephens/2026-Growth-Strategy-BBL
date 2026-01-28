/**
 * Script to get ALL historical data from Alvys for presentation accuracy
 */

import * as fs from 'fs';
import * as path from 'path';

// Load .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    const value = valueParts.join('=');
    process.env[key] = value;
  }
}

const ALVYS_AUTH_BASE = 'https://integrations.alvys.com/api/authentication';
const ALVYS_API_BASE = 'https://api.alvys.com/api/p/v1.0';

interface AlvysLoad {
  Id: string;
  LoadNumber: string;
  Status: string;
  CustomerId: string;
  CustomerName: string;
  CustomerRate?: { Amount: number };
  ScheduledPickupAt?: string;
}

interface AlvysTrip {
  Id: string;
  LoadNumber: string;
  Carrier?: {
    Id: string;
    Name: string;
    Linehaul?: { Amount: number };
  };
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.ALVYS_CLIENT_ID;
  const clientSecret = process.env.ALVYS_CLIENT_SECRET;
  const companyCode = process.env.ALVYS_COMPANY_CODE;

  const authUrl = `${ALVYS_AUTH_BASE}/${companyCode}/token`;
  const response = await fetch(authUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }),
  });

  const data = await response.json();
  return data.access_token;
}

async function alvysFetch<T>(token: string, endpoint: string, body?: object): Promise<T> {
  const companyCode = process.env.ALVYS_COMPANY_CODE!;
  const response = await fetch(`${ALVYS_API_BASE}${endpoint}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'CompanyCode': companyCode,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return response.json();
}

async function searchLoadsByStatus(token: string, status: string): Promise<AlvysLoad[]> {
  const response = await alvysFetch<{ Items: AlvysLoad[] }>(token, '/loads/search', {
    PageSize: 1000,
    Status: [status],
  });
  return response.Items || [];
}

async function searchTripsByLoadNumbers(token: string, loadNumbers: string[]): Promise<AlvysTrip[]> {
  if (loadNumbers.length === 0) return [];

  const batchSize = 50;
  const allTrips: AlvysTrip[] = [];

  for (let i = 0; i < loadNumbers.length; i += batchSize) {
    const batch = loadNumbers.slice(i, i + batchSize);
    const response = await alvysFetch<{ Items: AlvysTrip[] }>(token, '/trips/search', {
      PageSize: 500,
      LoadNumbers: batch,
    });
    allTrips.push(...(response.Items || []));
  }

  return allTrips;
}

async function main() {
  console.log('\n=== Getting ALL Historical Data from Alvys ===\n');

  try {
    const token = await getAccessToken();

    // Get ALL loads with all statuses
    const statuses = ['Covered', 'Dispatched', 'Delivered', 'Invoiced', 'Queued', 'In Transit', 'At Pickup', 'At Delivery', 'Cancelled'];

    console.log('Fetching all loads by status...');
    const loadArrays = await Promise.all(
      statuses.map(async status => {
        const loads = await searchLoadsByStatus(token, status);
        console.log(`  ${status}: ${loads.length} loads`);
        return loads;
      })
    );

    const allLoads = loadArrays.flat();
    const uniqueLoads = Array.from(
      new Map(allLoads.map(load => [load.Id, load])).values()
    );

    console.log(`\nTotal unique loads in system: ${uniqueLoads.length}`);

    // Get trips for all loads
    const loadNumbers = uniqueLoads.map(l => l.LoadNumber);
    console.log(`\nFetching trips for ${loadNumbers.length} loads...`);
    const trips = await searchTripsByLoadNumbers(token, loadNumbers);
    console.log(`Trips found: ${trips.length}`);

    // Build carrier cost map
    const carrierCostByLoad = new Map<string, number>();
    for (const trip of trips) {
      if (trip.LoadNumber && trip.Carrier?.Linehaul?.Amount) {
        const existing = carrierCostByLoad.get(trip.LoadNumber) || 0;
        carrierCostByLoad.set(trip.LoadNumber, existing + trip.Carrier.Linehaul.Amount);
      }
    }

    // Group by month
    const monthlyData = new Map<string, { loads: number; revenue: number; cost: number; customers: Set<string> }>();
    const customerTotals = new Map<string, { name: string; loads: number; revenue: number; cost: number }>();

    for (const load of uniqueLoads) {
      if (!load.ScheduledPickupAt) continue;

      const date = new Date(load.ScheduledPickupAt);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

      const revenue = load.CustomerRate?.Amount || 0;
      const cost = carrierCostByLoad.get(load.LoadNumber) || 0;

      // Monthly aggregation
      if (!monthlyData.has(monthKey)) {
        monthlyData.set(monthKey, { loads: 0, revenue: 0, cost: 0, customers: new Set() });
      }
      const month = monthlyData.get(monthKey)!;
      month.loads += 1;
      month.revenue += revenue;
      month.cost += cost;
      month.customers.add(load.CustomerId);

      // Customer aggregation
      if (!customerTotals.has(load.CustomerId)) {
        customerTotals.set(load.CustomerId, { name: load.CustomerName, loads: 0, revenue: 0, cost: 0 });
      }
      const customer = customerTotals.get(load.CustomerId)!;
      customer.loads += 1;
      customer.revenue += revenue;
      customer.cost += cost;
    }

    // Calculate overall totals
    let totalLoads = 0;
    let totalRevenue = 0;
    let totalCost = 0;

    console.log('\n=== MONTHLY BREAKDOWN ===\n');
    const sortedMonths = Array.from(monthlyData.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [month, data] of sortedMonths) {
      const margin = data.revenue - data.cost;
      const marginPerLoad = data.loads > 0 ? margin / data.loads : 0;
      console.log(`${month}: ${data.loads} loads, $${data.revenue.toLocaleString()} rev, $${margin.toLocaleString()} margin ($${marginPerLoad.toFixed(0)}/load), ${data.customers.size} customers`);

      totalLoads += data.loads;
      totalRevenue += data.revenue;
      totalCost += data.cost;
    }

    const totalMargin = totalRevenue - totalCost;
    const avgMarginPerLoad = totalLoads > 0 ? totalMargin / totalLoads : 0;
    const marginRate = totalRevenue > 0 ? (totalMargin / totalRevenue) * 100 : 0;

    console.log('\n=== OVERALL TOTALS ===\n');
    console.log(`Total Loads:        ${totalLoads}`);
    console.log(`Total Revenue:      $${totalRevenue.toLocaleString()}`);
    console.log(`Total Carrier Cost: $${totalCost.toLocaleString()}`);
    console.log(`Total Gross Margin: $${totalMargin.toLocaleString()}`);
    console.log(`Avg Margin/Load:    $${avgMarginPerLoad.toFixed(0)}`);
    console.log(`Margin Rate:        ${marginRate.toFixed(1)}%`);

    // January 2026 specific
    const jan2026 = monthlyData.get('2026-01');
    if (jan2026) {
      const janMargin = jan2026.revenue - jan2026.cost;
      const janMarginPerLoad = jan2026.loads > 0 ? janMargin / jan2026.loads : 0;
      console.log('\n=== JANUARY 2026 ===\n');
      console.log(`Loads:           ${jan2026.loads}`);
      console.log(`Revenue:         $${jan2026.revenue.toLocaleString()}`);
      console.log(`Gross Margin:    $${janMargin.toLocaleString()}`);
      console.log(`Margin/Load:     $${janMarginPerLoad.toFixed(0)}`);
      console.log(`Active Customers: ${jan2026.customers.size}`);
    }

    // Top customers
    console.log('\n=== TOP CUSTOMERS (All Time) ===\n');
    const sortedCustomers = Array.from(customerTotals.values())
      .sort((a, b) => (b.revenue - b.cost) - (a.revenue - a.cost))
      .slice(0, 10);

    for (const customer of sortedCustomers) {
      const margin = customer.revenue - customer.cost;
      const marginPerLoad = customer.loads > 0 ? margin / customer.loads : 0;
      console.log(`${customer.name}: ${customer.loads} loads, $${margin.toLocaleString()} total margin ($${marginPerLoad.toFixed(0)}/load)`);
    }

    // Output data for updating presentation
    console.log('\n\n=== DATA FOR PRESENTATION UPDATE ===\n');
    console.log('// Copy this to src/data/currentState.ts\n');

    console.log(`export const overallPerformance = {
  totalRevenue: ${Math.round(totalRevenue)},
  totalGrossMargin: ${Math.round(totalMargin)},
  loadsAnalyzed: ${totalLoads},
  avgMarginPerLoad: ${Math.round(avgMarginPerLoad)},
  avgMarginPercentage: ${marginRate.toFixed(1)},
  currentMonthlyRunRate: ${jan2026?.loads || 0},
  currentMonthlyProfit: ${jan2026 ? Math.round(jan2026.revenue - jan2026.cost) : 0},
}`);

    if (jan2026) {
      const janMargin = jan2026.revenue - jan2026.cost;
      console.log(`\nexport const januarySnapshot = {
  totalLoads: ${jan2026.loads},
  revenue: ${Math.round(jan2026.revenue)},
  grossMargin: ${Math.round(janMargin)},
  marginPerLoad: ${Math.round(janMargin / jan2026.loads)},
  activeCustomers: ${jan2026.customers.size},
}`);
    }

    console.log('\nexport const topCustomers = [');
    for (const customer of sortedCustomers.slice(0, 6)) {
      const margin = customer.revenue - customer.cost;
      const marginPerLoad = customer.loads > 0 ? margin / customer.loads : 0;
      console.log(`  {
    name: '${customer.name.replace(/'/g, "\\'")}',
    loads: ${customer.loads},
    totalMargin: ${Math.round(margin)},
    avgMargin: ${Math.round(marginPerLoad)},
    assessment: 'Data from Alvys',
    whyIdeal: 'Verified via API',
  },`);
    }
    console.log(']');

  } catch (error) {
    console.error('Error:', error);
  }
}

main();
