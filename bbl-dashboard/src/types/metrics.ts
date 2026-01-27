// Sales Metrics (from HubSpot + Instantly)
export interface SalesMetrics {
  dialsToday: number;
  dialsDailyTarget: number; // 40
  dialsThisWeek: number;
  dialsWeeklyTarget: number; // 200
  conversationsThisWeek: number;
  conversationsTarget: number; // 35-40
  qualifiedProspects: number;
  qualifiedTarget: number; // 8-10
  newCustomersMTD: number;
  newCustomersTarget: number; // 4-5
  pipelineValue: number;
  pipelineByStage: PipelineStage[];
  emailsSent: number;
  emailReplyRate: number;
  replyRateTarget: number; // 3%
  quoteToCloseRate: number;
  quoteToCloseTarget: number; // 40%
  lastUpdated: Date;
}

export interface PipelineStage {
  stage: string;
  stageId: string;
  count: number;
  value: number;
  maxDays: number | null;
}

// Operations Metrics (from Alvys + HubSpot)
export interface OpsMetrics {
  onTimePickup: number; // percentage
  onTimeDelivery: number; // percentage
  avgMarginPerLoad: number;
  loadsThisMonth: number;
  openIssues: number;
  directCarrierPercent: number;
  repeatCarrierRate: number;
  totalCarriersUsed: number;
  repeatCarriers: number;
  // Carrier tracking (from HubSpot)
  newCarriersThisMonth: number;
  carriersInPipeline: number;
  activeCarrierCount: number;
  lastUpdated: Date;
}

// Business Metrics (aggregated)
export interface BusinessMetrics {
  monthlyGrossMargin: number;
  monthlyGrossMarginTarget: number; // $100K
  activeCustomers: number;
  activeCustomersTarget: number; // 65-70
  customerConcentration: CustomerConcentration[];
  maxConcentrationTarget: number; // 12%
  churnRate: number;
  churnRateTarget: number; // <15%
  avgLoadsPerCustomer: number;
  avgLoadsPerCustomerTarget: number; // 15-20
  lastUpdated: Date;
}

export interface CustomerConcentration {
  customer: string;
  percent: number;
  revenue: number;
}

// Combined Dashboard Data
export interface DashboardData {
  sales: SalesMetrics;
  ops: OpsMetrics;
  business: BusinessMetrics;
  lastUpdated: Date;
}

// HubSpot Types
export interface HubSpotCall {
  id: string;
  properties: {
    hs_call_status: string;
    hs_call_duration: string;
    hs_timestamp: string;
    hs_call_body?: string;
    hubspot_owner_id?: string;
  };
}

export interface HubSpotDeal {
  id: string;
  properties: {
    dealstage: string;
    amount: string;
    closedate: string;
    pipeline: string;
    dealname?: string;
    hubspot_owner_id?: string;
  };
}

export interface HubSpotOwner {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface HubSpotCompany {
  id: string;
  properties: {
    name: string;
    company_type?: string;
    date_added?: string;
    createdate?: string;
    mc_number?: string;
    dot_number?: string;
    equipment_types?: string;
    is_direct_carrier?: string;
    carrier_rating?: string;
    hubspot_owner_id?: string;
  };
}

export interface HubSpotPipeline {
  id: string;
  label: string;
  stages: HubSpotPipelineStage[];
}

export interface HubSpotPipelineStage {
  id: string;
  label: string;
  displayOrder: number;
}

// Instantly Types
export interface InstantlyCampaign {
  id: string;
  name: string;
  status: string;
}

export interface InstantlyCampaignAnalytics {
  campaign_id: string;
  emails_sent: number;
  unique_opens: number;
  replies: number;
  bounces: number;
}

export interface InstantlyOverview {
  total_emails_sent: number;
  total_opens: number;
  total_replies: number;
  total_bounces: number;
}

// Alvys Types - matches actual API response
export interface AlvysLoad {
  Id: string;
  LoadNumber: string;
  Status: string;
  CustomerId: string;
  CustomerName: string;
  CustomerRate?: {
    Amount: number;
    Currency: number;
  };
  Linehaul?: {
    Amount: number;
    Currency: number;
  };
  ScheduledPickupAt?: string;
  ScheduledDeliveryAt?: string;
  Stops?: Array<{
    StopType: string;
    Status: string;
    StopWindow?: {
      Begin: string;
      End: string;
    };
  }>;
  CarrierId?: string;
  CarrierName?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
}

export interface AlvysSearchResponse {
  Page: number;
  PageSize: number;
  Total: number;
  Items: AlvysLoad[];
}

// Alvys Trip - contains carrier assignment and carrier cost
export interface AlvysTrip {
  Id: string;
  TripNumber: string;
  LoadNumber: string;
  Status: string;
  TripValue?: {
    Amount: number;
    Currency: number;
  };
  Carrier?: {
    Id: string;
    Linehaul?: {
      Amount: number;
      Currency: number;
    };
    Accessorials?: {
      Amount: number;
      Currency: number;
    };
    TotalPayable?: {
      Amount: number;
      Currency: number;
    };
  };
  Driver1?: {
    Id: string;
    Name: string;
  };
  PickupDate?: string;
  DeliveryDate?: string;
}

export interface AlvysTripSearchResponse {
  Page: number;
  PageSize: number;
  Total: number;
  Items: AlvysTrip[];
}

export interface AlvysCustomer {
  Id: string;
  Name: string;
  Status?: string;
}

// Pipeline Stage Configuration (from plan)
export const PIPELINE_STAGES = [
  { id: '1', name: 'New Lead', maxDays: 2, definition: 'Contact identified, not yet engaged' },
  { id: '2', name: 'Contacted', maxDays: 14, definition: 'Outreach attempted (call/email)' },
  { id: '3', name: 'Engaged', maxDays: 7, definition: 'Two-way conversation occurred' },
  { id: '4', name: 'Qualified', maxDays: 7, definition: 'Has freight, authority, timeline' },
  { id: '5', name: 'Quote Sent', maxDays: 14, definition: 'Pricing delivered to prospect' },
  { id: '6', name: 'Negotiating', maxDays: 14, definition: 'Active discussion on terms/rates' },
  { id: '7', name: 'First Load Booked', maxDays: 14, definition: 'Trial shipment scheduled' },
  { id: '8', name: 'Won – Active Customer', maxDays: null, definition: 'Repeat business confirmed' },
] as const;

// Targets from the plan
export const TARGETS = {
  dialsPerDay: 40, // 200/week ÷ 5 days
  dialsPerWeek: 200,
  conversationsPerWeek: 40, // 35-40, using upper bound
  qualifiedPerWeek: 10, // 8-10, using upper bound
  newCustomersPerMonth: 5, // 4-5, using upper bound
  emailReplyRate: 3, // >3%
  quoteToCloseRate: 40, // >40%
  onTimePickup: 95, // >95%
  onTimeDelivery: 95, // >95%
  avgMarginPerLoad: 200, // >$200
  monthlyGrossMargin: 100000, // $100K
  activeCustomers: 70, // 65-70, using upper bound
  maxCustomerConcentration: 12, // No customer >12%
  maxChurnRate: 15, // <15% annual
  directCarrierQ2: 35, // >35% Q2
  directCarrierQ4: 50, // >50% Q4
  avgLoadsPerCustomer: 15, // 15-20, using lower bound
  newCarriersPerMonth: 5, // Target for carrier recruiting
} as const;
