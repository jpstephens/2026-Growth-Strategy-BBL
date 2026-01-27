import { NextRequest, NextResponse } from 'next/server';
import {
  searchCallsByDateRange,
  calculateDials,
  calculateConversations,
  calculateQuoteToCloseRate,
  getStartOfDay,
  getStartOfWeek,
  getAllDeals,
  getBBLPipeline,
  searchDealsClosedInRange,
  getStartOfMonth,
  getEndOfMonth,
  getCarrierMetrics,
} from '@/lib/hubspot';
import {
  getCampaigns,
  getAllCampaignAnalytics,
  calculateEmailMetrics,
} from '@/lib/instantly';
import {
  searchLoads,
  searchTripsByLoadNumbers,
  calculateOnTimePickup,
  calculateOnTimeDelivery,
  calculateAverageMargin,
  calculateTotalMargin,
  calculateDirectCarrierPercent,
  calculateRepeatCarrierMetrics,
  calculateAvgLoadsPerCustomer,
  getCustomerConcentration,
  getLoadsThisMonth,
} from '@/lib/alvys';
import { getRandomizedMockData } from '@/lib/mock-data';
import { SalesMetrics, OpsMetrics, BusinessMetrics, TARGETS, PIPELINE_STAGES, PipelineStage } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Check if we should use mock data
function useMockData(): boolean {
  return process.env.USE_MOCK_DATA === 'true' ||
         (!process.env.HUBSPOT_ACCESS_TOKEN && !process.env.ALVYS_CLIENT_ID);
}

async function fetchSalesMetrics(ownerId?: string): Promise<SalesMetrics> {
  // HubSpot data
  const startOfDay = getStartOfDay();
  const startOfWeek = getStartOfWeek();
  const [callsToday, callsThisWeek, allDeals, pipeline] = await Promise.all([
    searchCallsByDateRange(startOfDay, undefined, ownerId),
    searchCallsByDateRange(startOfWeek, undefined, ownerId),
    getAllDeals(ownerId),
    getBBLPipeline(),
  ]);

  const dialsToday = calculateDials(callsToday);
  const dialsThisWeek = calculateDials(callsThisWeek);
  const conversations = calculateConversations(callsThisWeek);

  // Build stage map
  const stageMap = new Map<string, { label: string; order: number }>();
  if (pipeline) {
    for (const stage of pipeline.stages) {
      stageMap.set(stage.id, { label: stage.label, order: stage.displayOrder });
    }
  }

  // Group deals by stage
  const dealsByStage: Record<string, { count: number; value: number }> = {};
  let pipelineValue = 0;

  for (const deal of allDeals) {
    const stageId = deal.properties.dealstage;
    const amount = parseFloat(deal.properties.amount || '0');

    if (!dealsByStage[stageId]) {
      dealsByStage[stageId] = { count: 0, value: 0 };
    }
    dealsByStage[stageId].count++;
    dealsByStage[stageId].value += amount;

    const stageInfo = stageMap.get(stageId);
    if (stageInfo && !stageInfo.label.toLowerCase().includes('won') && !stageInfo.label.toLowerCase().includes('lost')) {
      pipelineValue += amount;
    }
  }

  // Build pipeline stages array
  const pipelineByStage: PipelineStage[] = [];
  for (const [stageId, data] of Object.entries(dealsByStage)) {
    const stageInfo = stageMap.get(stageId);
    const stageDef = PIPELINE_STAGES.find(s => stageInfo?.label.includes(s.name));

    pipelineByStage.push({
      stageId,
      stage: stageInfo?.label || `Stage ${stageId}`,
      count: data.count,
      value: data.value,
      maxDays: stageDef?.maxDays ?? null,
    });
  }

  pipelineByStage.sort((a, b) => {
    const orderA = stageMap.get(a.stageId)?.order ?? 999;
    const orderB = stageMap.get(b.stageId)?.order ?? 999;
    return orderA - orderB;
  });

  // New customers MTD
  const wonStage = pipeline?.stages.find(s => s.label.toLowerCase().includes('won'));
  let newCustomersMTD = 0;
  if (wonStage) {
    const startOfMonth = getStartOfMonth();
    const endOfMonth = getEndOfMonth();
    const wonDeals = await searchDealsClosedInRange(startOfMonth, endOfMonth, wonStage.id);
    newCustomersMTD = wonDeals.length;
  }

  // Qualified prospects
  const qualifiedStages = pipeline?.stages.filter(s => s.displayOrder >= 3).map(s => s.id) || [];
  const qualifiedProspects = allDeals.filter(d => qualifiedStages.includes(d.properties.dealstage)).length;

  // Quote-to-Close rate
  const quoteToCloseRate = calculateQuoteToCloseRate(allDeals, pipeline);

  // Instantly data
  const [campaigns, analytics] = await Promise.all([
    getCampaigns(),
    getAllCampaignAnalytics(),
  ]);
  const emailMetrics = calculateEmailMetrics(analytics);

  return {
    dialsToday,
    dialsDailyTarget: TARGETS.dialsPerDay,
    dialsThisWeek,
    dialsWeeklyTarget: TARGETS.dialsPerWeek,
    conversationsThisWeek: conversations,
    conversationsTarget: TARGETS.conversationsPerWeek,
    qualifiedProspects,
    qualifiedTarget: TARGETS.qualifiedPerWeek,
    newCustomersMTD,
    newCustomersTarget: TARGETS.newCustomersPerMonth,
    pipelineValue,
    pipelineByStage,
    emailsSent: emailMetrics.emailsSent,
    emailReplyRate: Math.round(emailMetrics.replyRate * 100) / 100,
    replyRateTarget: TARGETS.emailReplyRate,
    quoteToCloseRate: Math.round(quoteToCloseRate * 10) / 10,
    quoteToCloseTarget: TARGETS.quoteToCloseRate,
    lastUpdated: new Date(),
  };
}

async function fetchOpsMetrics(): Promise<OpsMetrics> {
  const { startDate, endDate } = getLoadsThisMonth();

  // First fetch loads
  const [loads, carrierMetrics] = await Promise.all([
    searchLoads(startDate, endDate),
    getCarrierMetrics(),
  ]);

  // Then fetch trips by load numbers - this is how carrier cost data is retrieved
  const loadNumbers = loads.map(l => l.LoadNumber);
  const trips = await searchTripsByLoadNumbers(loadNumbers);

  // Use trips for carrier-related metrics (carrier data is on trips, not loads)
  const repeatCarrierMetrics = calculateRepeatCarrierMetrics(trips);

  return {
    onTimePickup: Math.round(calculateOnTimePickup(loads) * 10) / 10,
    onTimeDelivery: Math.round(calculateOnTimeDelivery(loads) * 10) / 10,
    // Pass trips to margin calculations - trips have carrier cost data
    avgMarginPerLoad: Math.round(calculateAverageMargin(loads, trips) * 100) / 100,
    loadsThisMonth: loads.length,
    openIssues: 0, // Would need specific API for this
    directCarrierPercent: Math.round(calculateDirectCarrierPercent(loads) * 10) / 10,
    repeatCarrierRate: Math.round(repeatCarrierMetrics.repeatRate * 10) / 10,
    totalCarriersUsed: repeatCarrierMetrics.totalCarriers,
    repeatCarriers: repeatCarrierMetrics.repeatCarriers,
    // Carrier tracking from HubSpot
    newCarriersThisMonth: carrierMetrics.newCarriersThisMonth,
    carriersInPipeline: carrierMetrics.carriersInPipeline,
    activeCarrierCount: carrierMetrics.activeCarrierCount,
    lastUpdated: new Date(),
  };
}

async function fetchBusinessMetrics(): Promise<BusinessMetrics> {
  const { startDate, endDate } = getLoadsThisMonth();

  // First fetch loads
  const loads = await searchLoads(startDate, endDate);

  // Then fetch trips by load numbers - this is how carrier cost data is retrieved
  const loadNumbers = loads.map(l => l.LoadNumber);
  const trips = await searchTripsByLoadNumbers(loadNumbers);

  const concentration = getCustomerConcentration(loads);
  const totalMargin = calculateTotalMargin(loads, trips);
  const avgLoadsPerCustomer = calculateAvgLoadsPerCustomer(loads);

  return {
    monthlyGrossMargin: Math.round(totalMargin * 100) / 100,
    monthlyGrossMarginTarget: TARGETS.monthlyGrossMargin,
    activeCustomers: concentration.length,
    activeCustomersTarget: TARGETS.activeCustomers,
    customerConcentration: concentration.slice(0, 5),
    maxConcentrationTarget: TARGETS.maxCustomerConcentration,
    churnRate: 0, // Would need historical data
    churnRateTarget: TARGETS.maxChurnRate,
    avgLoadsPerCustomer: Math.round(avgLoadsPerCustomer * 10) / 10,
    avgLoadsPerCustomerTarget: TARGETS.avgLoadsPerCustomer,
    lastUpdated: new Date(),
  };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ownerId = searchParams.get('ownerId') || undefined;

  // Return mock data if enabled or no API credentials configured
  if (useMockData()) {
    const mockData = getRandomizedMockData();
    return NextResponse.json({
      success: true,
      data: {
        sales: mockData.sales,
        ops: mockData.ops,
        business: mockData.business,
        lastUpdated: new Date().toISOString(),
      },
      mock: true, // Flag to indicate this is mock data
    });
  }

  const errors: string[] = [];
  let sales: SalesMetrics | null = null;
  let ops: OpsMetrics | null = null;
  let business: BusinessMetrics | null = null;

  // Fetch all metrics, capturing errors for each
  try {
    sales = await fetchSalesMetrics(ownerId);
  } catch (error) {
    errors.push(`Sales: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  try {
    ops = await fetchOpsMetrics();
  } catch (error) {
    errors.push(`Ops: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  try {
    business = await fetchBusinessMetrics();
  } catch (error) {
    errors.push(`Business: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }

  // Return partial data even if some sources fail
  return NextResponse.json({
    success: errors.length === 0,
    data: {
      sales,
      ops,
      business,
      lastUpdated: new Date().toISOString(),
    },
    errors: errors.length > 0 ? errors : undefined,
  });
}
