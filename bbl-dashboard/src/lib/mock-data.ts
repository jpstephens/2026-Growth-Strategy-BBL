import { SalesMetrics, OpsMetrics, BusinessMetrics, TARGETS } from '@/types/metrics';

// Mock data that simulates realistic dashboard values
export const mockSalesMetrics: SalesMetrics = {
  dialsToday: 27,
  dialsDailyTarget: TARGETS.dialsPerDay,
  dialsThisWeek: 147,
  dialsWeeklyTarget: TARGETS.dialsPerWeek,
  conversationsThisWeek: 28,
  conversationsTarget: TARGETS.conversationsPerWeek,
  qualifiedProspects: 6,
  qualifiedTarget: TARGETS.qualifiedPerWeek,
  newCustomersMTD: 3,
  newCustomersTarget: TARGETS.newCustomersPerMonth,
  pipelineValue: 127500,
  pipelineByStage: [
    { stageId: '1', stage: 'New Lead', count: 23, value: 0, maxDays: 2 },
    { stageId: '2', stage: 'Contacted', count: 18, value: 0, maxDays: 14 },
    { stageId: '3', stage: 'Engaged', count: 12, value: 15000, maxDays: 7 },
    { stageId: '4', stage: 'Qualified', count: 8, value: 32000, maxDays: 7 },
    { stageId: '5', stage: 'Quote Sent', count: 6, value: 45000, maxDays: 14 },
    { stageId: '6', stage: 'Negotiating', count: 4, value: 28000, maxDays: 14 },
    { stageId: '7', stage: 'First Load Booked', count: 2, value: 7500, maxDays: 14 },
    { stageId: '8', stage: 'Won – Active Customer', count: 3, value: 0, maxDays: null },
  ],
  emailsSent: 1247,
  emailReplyRate: 2.8,
  replyRateTarget: TARGETS.emailReplyRate,
  quoteToCloseRate: 42.5,
  quoteToCloseTarget: TARGETS.quoteToCloseRate,
  lastUpdated: new Date(),
};

export const mockOpsMetrics: OpsMetrics = {
  onTimePickup: 94.2,
  onTimeDelivery: 96.1,
  avgMarginPerLoad: 218.50,
  loadsThisMonth: 156,
  openIssues: 2,
  directCarrierPercent: 32.5,
  repeatCarrierRate: 28.5,
  totalCarriersUsed: 35,
  repeatCarriers: 10,
  // Carrier tracking
  newCarriersThisMonth: 4,
  carriersInPipeline: 7,
  activeCarrierCount: 23,
  lastUpdated: new Date(),
};

export const mockBusinessMetrics: BusinessMetrics = {
  monthlyGrossMargin: 68500,
  monthlyGrossMarginTarget: TARGETS.monthlyGrossMargin,
  activeCustomers: 47,
  activeCustomersTarget: TARGETS.activeCustomers,
  customerConcentration: [
    { customer: 'Midwest Metal Works', percent: 14.2, revenue: 9730 },
    { customer: 'BuildRight Supply Co', percent: 11.8, revenue: 8083 },
    { customer: 'Atlas Industrial', percent: 9.4, revenue: 6439 },
    { customer: 'Premier Auto Parts', percent: 7.6, revenue: 5206 },
    { customer: 'Steel Dynamics Inc', percent: 6.9, revenue: 4727 },
  ],
  maxConcentrationTarget: TARGETS.maxCustomerConcentration,
  churnRate: 8.5,
  churnRateTarget: TARGETS.maxChurnRate,
  avgLoadsPerCustomer: 12.3,
  avgLoadsPerCustomerTarget: TARGETS.avgLoadsPerCustomer,
  lastUpdated: new Date(),
};

// Function to add some randomness to mock data (for realistic feel)
export function getRandomizedMockData() {
  const randomize = (value: number, variance: number) => {
    const change = (Math.random() - 0.5) * 2 * variance;
    return Math.round((value + change) * 10) / 10;
  };

  return {
    sales: {
      ...mockSalesMetrics,
      dialsToday: Math.round(randomize(mockSalesMetrics.dialsToday, 5)),
      dialsThisWeek: Math.round(randomize(mockSalesMetrics.dialsThisWeek, 10)),
      conversationsThisWeek: Math.round(randomize(mockSalesMetrics.conversationsThisWeek, 3)),
      emailReplyRate: randomize(mockSalesMetrics.emailReplyRate, 0.3),
      quoteToCloseRate: randomize(mockSalesMetrics.quoteToCloseRate, 5),
      lastUpdated: new Date(),
    },
    ops: {
      ...mockOpsMetrics,
      onTimePickup: randomize(mockOpsMetrics.onTimePickup, 2),
      onTimeDelivery: randomize(mockOpsMetrics.onTimeDelivery, 2),
      avgMarginPerLoad: randomize(mockOpsMetrics.avgMarginPerLoad, 15),
      repeatCarrierRate: randomize(mockOpsMetrics.repeatCarrierRate, 3),
      newCarriersThisMonth: Math.round(randomize(mockOpsMetrics.newCarriersThisMonth, 1)),
      carriersInPipeline: Math.round(randomize(mockOpsMetrics.carriersInPipeline, 2)),
      lastUpdated: new Date(),
    },
    business: {
      ...mockBusinessMetrics,
      monthlyGrossMargin: randomize(mockBusinessMetrics.monthlyGrossMargin, 2000),
      avgLoadsPerCustomer: randomize(mockBusinessMetrics.avgLoadsPerCustomer, 1.5),
      lastUpdated: new Date(),
    },
  };
}
