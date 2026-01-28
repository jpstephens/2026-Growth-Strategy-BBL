/**
 * Script to verify January 2026 data from Alvys API - FIXED with all statuses
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
    PageSize: 500,
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
  console.log('\n=== Alvys January 2026 Data Verification (FIXED) ===\n');

  const startDate = new Date('2026-01-01T00:00:00Z');
  const endDate = new Date('2026-01-31T23:59:59Z');

  console.log(`Date range: ${startDate.toISOString()} to ${endDate.toISOString()}\n`);

  try {
    const token = await getAccessToken();

    // FIXED: Include ALL relevant statuses including Invoiced and Queued
    const statuses = ['Covered', 'Dispatched', 'Delivered', 'Invoiced', 'Queued', 'In Transit', 'At Pickup', 'At Delivery'];

    console.log('Fetching loads by status...');
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

    console.log(`\nTotal unique loads: ${uniqueLoads.length}`);

    // Filter to January 2026
    const januaryLoads = uniqueLoads.filter(load => {
      if (!load.ScheduledPickupAt) return false;
      const loadDate = new Date(load.ScheduledPickupAt);
      return loadDate >= startDate && loadDate <= endDate;
    });

    console.log(`January 2026 loads: ${januaryLoads.length}`);

    // Get trips for carrier costs
    const loadNumbers = januaryLoads.map(l => l.LoadNumber);
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

    // Calculate metrics
    let totalRevenue = 0;
    let totalCarrierCost = 0;
    const customerLoads = new Map<string, { name: string; loads: number; revenue: number; cost: number }>();
    const statusCounts = new Map<string, number>();

    for (const load of januaryLoads) {
      const revenue = load.CustomerRate?.Amount || 0;
      const carrierCost = carrierCostByLoad.get(load.LoadNumber) || 0;

      totalRevenue += revenue;
      totalCarrierCost += carrierCost;

      // Track status counts
      statusCounts.set(load.Status, (statusCounts.get(load.Status) || 0) + 1);

      const customerId = load.CustomerId;
      const existing = customerLoads.get(customerId) || { name: load.CustomerName, loads: 0, revenue: 0, cost: 0 };
      existing.loads += 1;
      existing.revenue += revenue;
      existing.cost += carrierCost;
      customerLoads.set(customerId, existing);
    }

    const totalMargin = totalRevenue - totalCarrierCost;
    const avgMarginPerLoad = januaryLoads.length > 0 ? totalMargin / januaryLoads.length : 0;
    const uniqueCustomers = customerLoads.size;

    // Print results
    console.log('\n=== JANUARY 2026 RESULTS (API - FIXED) ===\n');
    console.log(`Total Loads:        ${januaryLoads.length}`);
    console.log(`Total Revenue:      $${totalRevenue.toLocaleString()}`);
    console.log(`Total Carrier Cost: $${totalCarrierCost.toLocaleString()}`);
    console.log(`Gross Margin:       $${totalMargin.toLocaleString()}`);
    console.log(`Margin/Load:        $${avgMarginPerLoad.toFixed(2)}`);
    console.log(`Active Customers:   ${uniqueCustomers}`);

    console.log('\nLoads by Status:');
    for (const [status, count] of Array.from(statusCounts.entries()).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${status}: ${count}`);
    }

    console.log('\n=== COMPARISON ===\n');
    console.log('                    Presentation    Team Export    API (Fixed)');
    console.log('                    ------------    -----------    -----------');
    console.log(`Loads               75              70             ${januaryLoads.length}`);
    console.log(`Revenue             $127,705        $123,165       $${totalRevenue.toLocaleString()}`);
    console.log(`Gross Margin        $17,846         $10,587        $${totalMargin.toLocaleString()}`);
    console.log(`Margin/Load         $238            $151           $${avgMarginPerLoad.toFixed(0)}`);
    console.log(`Customers           7               6              ${uniqueCustomers}`);

    console.log('\n=== CUSTOMERS BY LOADS (API) ===\n');
    const sortedCustomers = Array.from(customerLoads.values())
      .sort((a, b) => b.loads - a.loads);

    for (const customer of sortedCustomers) {
      const margin = customer.revenue - customer.cost;
      const marginPerLoad = customer.loads > 0 ? margin / customer.loads : 0;
      console.log(`${customer.name}: ${customer.loads} loads, $${margin.toLocaleString()} margin ($${marginPerLoad.toFixed(0)}/load)`);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

main();
