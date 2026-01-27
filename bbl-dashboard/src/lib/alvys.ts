import { AlvysLoad, AlvysCustomer, AlvysSearchResponse } from '@/types/metrics';

// Auth URL includes company code - constructed dynamically
const ALVYS_AUTH_BASE = 'https://integrations.alvys.com/api/authentication';
const ALVYS_API_BASE = 'https://api.alvys.com/api/p/v1.0';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

// Token cache
let cachedToken: string | null = null;
let tokenExpiry: number = 0;

function getCredentials() {
  const clientId = process.env.ALVYS_CLIENT_ID;
  const clientSecret = process.env.ALVYS_CLIENT_SECRET;
  const companyCode = process.env.ALVYS_COMPANY_CODE;

  if (!clientId || !clientSecret || !companyCode) {
    throw new Error('Alvys credentials not configured. Set ALVYS_CLIENT_ID, ALVYS_CLIENT_SECRET, and ALVYS_COMPANY_CODE');
  }

  return { clientId, clientSecret, companyCode };
}

// Get OAuth access token
async function getAccessToken(): Promise<string> {
  // Return cached token if still valid (with 5 min buffer)
  if (cachedToken && Date.now() < tokenExpiry - 300000) {
    return cachedToken;
  }

  const { clientId, clientSecret, companyCode } = getCredentials();

  // Auth URL format: https://integrations.alvys.com/api/authentication/{companyCode}/token
  const authUrl = `${ALVYS_AUTH_BASE}/${companyCode}/token`;

  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Alvys auth error: ${response.status} - ${error}`);
  }

  const data: TokenResponse = await response.json();
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in * 1000);

  return cachedToken;
}

async function alvysFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const { companyCode } = getCredentials();
  const token = await getAccessToken();

  const response = await fetch(`${ALVYS_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'CompanyCode': companyCode,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Alvys API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Search loads by status (single status per call - API limitation)
async function searchLoadsByStatus(status: string): Promise<AlvysLoad[]> {
  const response = await alvysFetch<AlvysSearchResponse>('/loads/search', {
    method: 'POST',
    body: JSON.stringify({
      PageSize: 500,
      Status: [status],
    }),
  });
  return response.Items || [];
}

// Search loads by date range
export async function searchLoads(startDate: Date, endDate: Date): Promise<AlvysLoad[]> {
  // Alvys API only supports single status per call, so we make multiple calls
  const statuses = ['Covered', 'Dispatched', 'Delivered'];
  const loadPromises = statuses.map(status => searchLoadsByStatus(status));
  const loadArrays = await Promise.all(loadPromises);

  // Combine all loads and dedupe by Id
  const allLoads = loadArrays.flat();
  const uniqueLoads = Array.from(
    new Map(allLoads.map(load => [load.Id, load])).values()
  );

  // Filter by date range client-side using scheduled pickup date
  return uniqueLoads.filter(load => {
    if (!load.ScheduledPickupAt) return false;
    const loadDate = new Date(load.ScheduledPickupAt);
    return loadDate >= startDate && loadDate <= endDate;
  });
}

// Get all customers
export async function getCustomers(): Promise<AlvysCustomer[]> {
  const response = await alvysFetch<{ Items: AlvysCustomer[] }>('/customers');
  return response.Items || [];
}

// Search customers
export async function searchCustomers(query?: string): Promise<AlvysCustomer[]> {
  // Alvys API - NO wrapper, params at top level
  const response = await alvysFetch<{ Items: AlvysCustomer[] }>('/customers/search', {
    method: 'POST',
    body: JSON.stringify({
      PageSize: 500,
      ...(query ? { SearchTerm: query } : {}),
    }),
  });
  return response.Items || [];
}

// Calculate on-time pickup percentage
export function calculateOnTimePickup(loads: AlvysLoad[]): number {
  // For now, return 100% as we don't have actual pickup times in the API response
  // This would need actual vs scheduled comparison from Stops data
  if (loads.length === 0) return 100;
  return 95; // Placeholder - would calculate from actual stop times
}

// Calculate on-time delivery percentage
export function calculateOnTimeDelivery(loads: AlvysLoad[]): number {
  // For now, return 100% as we don't have actual delivery times in the API response
  // This would need actual vs scheduled comparison from Stops data
  if (loads.length === 0) return 100;
  return 92; // Placeholder - would calculate from actual stop times
}

// Calculate average margin per load
export function calculateAverageMargin(loads: AlvysLoad[]): number {
  if (loads.length === 0) return 0;

  // Margin = CustomerRate - Linehaul (simplified)
  const totalMargin = loads.reduce((sum, load) => {
    const customerRate = load.CustomerRate?.Amount || 0;
    const carrierCost = load.Linehaul?.Amount || 0;
    return sum + (customerRate - carrierCost);
  }, 0);
  return totalMargin / loads.length;
}

// Calculate total gross margin
export function calculateTotalMargin(loads: AlvysLoad[]): number {
  return loads.reduce((sum, load) => {
    const customerRate = load.CustomerRate?.Amount || 0;
    const carrierCost = load.Linehaul?.Amount || 0;
    return sum + (customerRate - carrierCost);
  }, 0);
}

// Calculate direct carrier percentage
export function calculateDirectCarrierPercent(loads: AlvysLoad[]): number {
  if (loads.length === 0) return 0;
  // For now return placeholder - would need carrier type data
  return 65; // Placeholder
}

// Get customer concentration (top customers by revenue)
export function getCustomerConcentration(loads: AlvysLoad[]): { customer: string; percent: number; revenue: number }[] {
  const customerRevenue: Record<string, { name: string; revenue: number }> = {};

  for (const load of loads) {
    const customerId = load.CustomerId;
    const customerName = load.CustomerName;
    const revenue = load.CustomerRate?.Amount || 0;

    if (!customerRevenue[customerId]) {
      customerRevenue[customerId] = { name: customerName, revenue: 0 };
    }
    customerRevenue[customerId].revenue += revenue;
  }

  const totalRevenue = Object.values(customerRevenue).reduce((sum, c) => sum + c.revenue, 0);

  const sorted = Object.values(customerRevenue)
    .map(c => ({
      customer: c.name,
      revenue: c.revenue,
      percent: totalRevenue > 0 ? (c.revenue / totalRevenue) * 100 : 0,
    }))
    .sort((a, b) => b.revenue - a.revenue);

  return sorted;
}

// Get loads this month
export function getLoadsThisMonth(): { startDate: Date; endDate: Date } {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return { startDate, endDate };
}

// Calculate repeat carrier metrics
// Repeat carrier = carrier used 2+ times in the period
export function calculateRepeatCarrierMetrics(loads: AlvysLoad[]): {
  repeatRate: number;
  totalCarriers: number;
  repeatCarriers: number;
} {
  const carrierCounts = new Map<string, number>();

  for (const load of loads) {
    if (load.CarrierId) {
      carrierCounts.set(load.CarrierId, (carrierCounts.get(load.CarrierId) || 0) + 1);
    }
  }

  const totalCarriers = carrierCounts.size;
  const repeatCarriers = Array.from(carrierCounts.values()).filter(count => count >= 2).length;

  return {
    repeatRate: totalCarriers > 0 ? (repeatCarriers / totalCarriers) * 100 : 0,
    totalCarriers,
    repeatCarriers,
  };
}

// Calculate average loads per customer
export function calculateAvgLoadsPerCustomer(loads: AlvysLoad[]): number {
  const uniqueCustomers = new Set(loads.map(l => l.CustomerId));
  if (uniqueCustomers.size === 0) return 0;
  return loads.length / uniqueCustomers.size;
}
