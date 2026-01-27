import { HubSpotCall, HubSpotDeal, HubSpotPipeline, HubSpotOwner, HubSpotCompany } from '@/types/metrics';

const HUBSPOT_API_BASE = 'https://api.hubapi.com';

function getAccessToken(): string {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    throw new Error('HUBSPOT_ACCESS_TOKEN environment variable is not set');
  }
  return token;
}

async function hubspotFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${HUBSPOT_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`HubSpot API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Get all HubSpot owners (sales reps)
export async function getOwners(): Promise<HubSpotOwner[]> {
  const response = await hubspotFetch<{ results: HubSpotOwner[] }>('/crm/v3/owners');
  return response.results;
}

// Get all calls with pagination
export async function getCalls(after?: string): Promise<{ results: HubSpotCall[]; paging?: { next?: { after: string } } }> {
  const params = new URLSearchParams({
    limit: '100',
    properties: 'hs_call_status,hs_call_duration,hs_timestamp,hs_call_body,hubspot_owner_id',
  });
  if (after) {
    params.set('after', after);
  }

  return hubspotFetch(`/crm/v3/objects/calls?${params}`);
}

// Search calls by date range (for weekly count), optionally filtered by owner
export async function searchCallsByDateRange(startDate: Date, endDate?: Date, ownerId?: string): Promise<HubSpotCall[]> {
  const filters: Array<{ propertyName: string; operator: string; value: string }> = [
    {
      propertyName: 'hs_timestamp',
      operator: 'GTE',
      value: startDate.getTime().toString(),
    },
  ];

  if (endDate) {
    filters.push({
      propertyName: 'hs_timestamp',
      operator: 'LTE',
      value: endDate.getTime().toString(),
    });
  }

  if (ownerId) {
    filters.push({
      propertyName: 'hubspot_owner_id',
      operator: 'EQ',
      value: ownerId,
    });
  }

  const response = await hubspotFetch<{ results: HubSpotCall[]; total: number }>('/crm/v3/objects/calls/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [{ filters }],
      properties: ['hs_call_status', 'hs_call_duration', 'hs_call_body', 'hs_timestamp', 'hubspot_owner_id'],
      limit: 100,
    }),
  });

  return response.results;
}

// Get all deals with pagination
export async function getDeals(after?: string): Promise<{ results: HubSpotDeal[]; paging?: { next?: { after: string } } }> {
  const params = new URLSearchParams({
    limit: '100',
    properties: 'dealstage,amount,closedate,pipeline,dealname,hubspot_owner_id',
  });
  if (after) {
    params.set('after', after);
  }

  return hubspotFetch(`/crm/v3/objects/deals?${params}`);
}

// Get all deals (handles pagination), optionally filtered by owner
export async function getAllDeals(ownerId?: string): Promise<HubSpotDeal[]> {
  if (ownerId) {
    // Use search API to filter by owner
    const response = await hubspotFetch<{ results: HubSpotDeal[]; total: number }>('/crm/v3/objects/deals/search', {
      method: 'POST',
      body: JSON.stringify({
        filterGroups: [{
          filters: [{
            propertyName: 'hubspot_owner_id',
            operator: 'EQ',
            value: ownerId,
          }],
        }],
        properties: ['dealstage', 'amount', 'closedate', 'pipeline', 'dealname', 'hubspot_owner_id'],
        limit: 100,
      }),
    });
    return response.results;
  }

  // No filter - get all deals with pagination
  const allDeals: HubSpotDeal[] = [];
  let after: string | undefined;

  do {
    const response = await getDeals(after);
    allDeals.push(...response.results);
    after = response.paging?.next?.after;
  } while (after);

  return allDeals;
}

// Get pipeline configuration
export async function getPipelines(): Promise<HubSpotPipeline[]> {
  const response = await hubspotFetch<{ results: HubSpotPipeline[] }>('/crm/v3/pipelines/deals');
  return response.results;
}

// Get the BBL Sales Pipeline specifically
export async function getBBLPipeline(): Promise<HubSpotPipeline | null> {
  const pipelines = await getPipelines();
  return pipelines.find(p => p.label === 'BBL Sales Pipeline') || pipelines[0] || null;
}

// Search deals by stage
export async function searchDealsByStage(stageId: string): Promise<HubSpotDeal[]> {
  const response = await hubspotFetch<{ results: HubSpotDeal[] }>('/crm/v3/objects/deals/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [{
        filters: [{
          propertyName: 'dealstage',
          operator: 'EQ',
          value: stageId,
        }],
      }],
      properties: ['dealstage', 'amount', 'closedate', 'pipeline', 'dealname'],
      limit: 100,
    }),
  });

  return response.results;
}

// Search deals closed in a date range (for MTD new customers)
export async function searchDealsClosedInRange(startDate: Date, endDate: Date, wonStageId: string): Promise<HubSpotDeal[]> {
  const response = await hubspotFetch<{ results: HubSpotDeal[] }>('/crm/v3/objects/deals/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [{
        filters: [
          {
            propertyName: 'dealstage',
            operator: 'EQ',
            value: wonStageId,
          },
          {
            propertyName: 'closedate',
            operator: 'GTE',
            value: startDate.getTime().toString(),
          },
          {
            propertyName: 'closedate',
            operator: 'LTE',
            value: endDate.getTime().toString(),
          },
        ],
      }],
      properties: ['dealstage', 'amount', 'closedate', 'pipeline', 'dealname'],
      limit: 100,
    }),
  });

  return response.results;
}

// Calculate dial count (completed calls)
export function calculateDials(calls: HubSpotCall[]): number {
  return calls.filter(call => call.properties.hs_call_status === 'COMPLETED').length;
}

// Calculate conversations (calls with duration > 60s OR has notes)
export function calculateConversations(calls: HubSpotCall[]): number {
  return calls.filter(call => {
    const duration = parseInt(call.properties.hs_call_duration || '0', 10);
    const hasNotes = !!call.properties.hs_call_body && call.properties.hs_call_body.trim().length > 0;
    return duration > 60 || hasNotes;
  }).length;
}

// Get start of today
export function getStartOfDay(): Date {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
}

// Get start of current week (Monday)
export function getStartOfWeek(): Date {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
  const monday = new Date(now.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

// Get start of current month
export function getStartOfMonth(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

// Get end of current month
export function getEndOfMonth(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
}

// Calculate Quote-to-Close Rate
// Measures: Deals that reached Won / Deals that reached Quote Sent stage or beyond
export function calculateQuoteToCloseRate(deals: HubSpotDeal[], pipeline: HubSpotPipeline | null): number {
  if (!pipeline) return 0;

  // Find "Quote Sent" and "Won" stage IDs
  const quoteSentStage = pipeline.stages.find(s => s.label.toLowerCase().includes('quote'));
  const wonStage = pipeline.stages.find(s => s.label.toLowerCase().includes('won'));

  if (!quoteSentStage || !wonStage) return 0;

  // Get stage order to identify deals at or past Quote Sent
  const quoteSentOrder = quoteSentStage.displayOrder;

  // Count deals that reached Quote Sent stage or beyond (excluding Lost)
  const dealsAtOrPastQuote = deals.filter(d => {
    const stage = pipeline.stages.find(s => s.id === d.properties.dealstage);
    if (!stage) return false;
    // Exclude lost deals from the denominator
    if (stage.label.toLowerCase().includes('lost')) return false;
    return stage.displayOrder >= quoteSentOrder;
  });

  // Count deals that reached Won
  const wonDeals = deals.filter(d => d.properties.dealstage === wonStage.id);

  if (dealsAtOrPastQuote.length === 0) return 0;
  return (wonDeals.length / dealsAtOrPastQuote.length) * 100;
}

// ============================================
// Carrier Company Functions
// ============================================

// Search for carrier companies added this month
export async function searchCarrierCompaniesThisMonth(): Promise<HubSpotCompany[]> {
  const startOfMonth = getStartOfMonth();

  const response = await hubspotFetch<{ results: HubSpotCompany[]; total: number }>('/crm/v3/objects/companies/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [{
        filters: [
          {
            propertyName: 'company_type',
            operator: 'EQ',
            value: 'Carrier',
          },
          {
            propertyName: 'createdate',
            operator: 'GTE',
            value: startOfMonth.getTime().toString(),
          },
        ],
      }],
      properties: ['name', 'company_type', 'date_added', 'createdate', 'mc_number', 'dot_number', 'equipment_types', 'is_direct_carrier', 'carrier_rating', 'hubspot_owner_id'],
      limit: 100,
    }),
  });

  return response.results;
}

// Get all carrier companies (Company Type = Carrier)
export async function getAllCarrierCompanies(): Promise<HubSpotCompany[]> {
  const response = await hubspotFetch<{ results: HubSpotCompany[]; total: number }>('/crm/v3/objects/companies/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [{
        filters: [
          {
            propertyName: 'company_type',
            operator: 'EQ',
            value: 'Carrier',
          },
        ],
      }],
      properties: ['name', 'company_type', 'date_added', 'createdate', 'mc_number', 'dot_number', 'equipment_types', 'is_direct_carrier', 'carrier_rating', 'hubspot_owner_id'],
      limit: 100,
    }),
  });

  return response.results;
}

// Get the Carrier Onboarding Pipeline
export async function getCarrierOnboardingPipeline(): Promise<HubSpotPipeline | null> {
  const pipelines = await getPipelines();
  return pipelines.find(p => p.label === 'Carrier Onboarding') || null;
}

// Get deals in the Carrier Onboarding pipeline (carriers in onboarding process)
export async function getCarrierPipelineDeals(): Promise<HubSpotDeal[]> {
  const pipeline = await getCarrierOnboardingPipeline();
  if (!pipeline) return [];

  const response = await hubspotFetch<{ results: HubSpotDeal[]; total: number }>('/crm/v3/objects/deals/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [{
        filters: [
          {
            propertyName: 'pipeline',
            operator: 'EQ',
            value: pipeline.id,
          },
        ],
      }],
      properties: ['dealstage', 'amount', 'closedate', 'pipeline', 'dealname', 'hubspot_owner_id'],
      limit: 100,
    }),
  });

  return response.results;
}

// Get count of active carriers (those in "Active" stage of Carrier Onboarding pipeline)
export async function getActiveCarrierCount(): Promise<number> {
  const pipeline = await getCarrierOnboardingPipeline();
  if (!pipeline) return 0;

  const activeStage = pipeline.stages.find(s => s.label.toLowerCase() === 'active');
  if (!activeStage) return 0;

  const response = await hubspotFetch<{ results: HubSpotDeal[]; total: number }>('/crm/v3/objects/deals/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [{
        filters: [
          {
            propertyName: 'pipeline',
            operator: 'EQ',
            value: pipeline.id,
          },
          {
            propertyName: 'dealstage',
            operator: 'EQ',
            value: activeStage.id,
          },
        ],
      }],
      properties: ['dealstage', 'dealname'],
      limit: 100,
    }),
  });

  return response.total;
}

// Get carrier metrics for dashboard
export async function getCarrierMetrics(): Promise<{
  newCarriersThisMonth: number;
  carriersInPipeline: number;
  activeCarrierCount: number;
}> {
  try {
    const [newCarriers, pipelineDeals, activeCount] = await Promise.all([
      searchCarrierCompaniesThisMonth(),
      getCarrierPipelineDeals(),
      getActiveCarrierCount(),
    ]);

    // Count open deals (not in "Active" or "Inactive" stages) as "in pipeline"
    const pipeline = await getCarrierOnboardingPipeline();
    let carriersInPipeline = 0;

    if (pipeline) {
      const closedStages = pipeline.stages
        .filter(s => s.label.toLowerCase() === 'active' || s.label.toLowerCase() === 'inactive')
        .map(s => s.id);

      carriersInPipeline = pipelineDeals.filter(d => !closedStages.includes(d.properties.dealstage)).length;
    }

    return {
      newCarriersThisMonth: newCarriers.length,
      carriersInPipeline,
      activeCarrierCount: activeCount,
    };
  } catch (error) {
    // Return zeros if carrier tracking isn't set up yet in HubSpot
    console.warn('Carrier metrics not available:', error);
    return {
      newCarriersThisMonth: 0,
      carriersInPipeline: 0,
      activeCarrierCount: 0,
    };
  }
}
