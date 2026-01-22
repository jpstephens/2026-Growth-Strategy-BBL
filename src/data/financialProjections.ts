export interface MonthlyProjection {
  month: string
  newCustomers: number
  totalActive: number
  estLoads: number
  grossMargin: number
  estNetProfit: number
}

export const scenario1: MonthlyProjection[] = [
  { month: 'Jan', newCustomers: 2, totalActive: 9, estLoads: 75, grossMargin: 15600, estNetProfit: 12000 },
  { month: 'Feb', newCustomers: 4, totalActive: 13, estLoads: 95, grossMargin: 19760, estNetProfit: 15000 },
  { month: 'Mar', newCustomers: 5, totalActive: 17, estLoads: 120, grossMargin: 24960, estNetProfit: 19000 },
  { month: 'Apr', newCustomers: 5, totalActive: 21, estLoads: 155, grossMargin: 32240, estNetProfit: 25000 },
  { month: 'May', newCustomers: 5, totalActive: 25, estLoads: 185, grossMargin: 38480, estNetProfit: 30000 },
  { month: 'Jun', newCustomers: 5, totalActive: 29, estLoads: 230, grossMargin: 47840, estNetProfit: 38000 },
  { month: 'Jul', newCustomers: 5, totalActive: 33, estLoads: 275, grossMargin: 57200, estNetProfit: 45000 },
  { month: 'Aug', newCustomers: 5, totalActive: 37, estLoads: 315, grossMargin: 65520, estNetProfit: 52000 },
  { month: 'Sep', newCustomers: 5, totalActive: 40, estLoads: 345, grossMargin: 71760, estNetProfit: 57000 },
  { month: 'Oct', newCustomers: 5, totalActive: 43, estLoads: 375, grossMargin: 78000, estNetProfit: 62000 },
  { month: 'Nov', newCustomers: 5, totalActive: 46, estLoads: 400, grossMargin: 83200, estNetProfit: 66000 },
  { month: 'Dec', newCustomers: 5, totalActive: 48, estLoads: 420, grossMargin: 87360, estNetProfit: 69000 },
]

export const scenario2: MonthlyProjection[] = [
  { month: 'Jan', newCustomers: 2, totalActive: 9, estLoads: 75, grossMargin: 15600, estNetProfit: 12000 },
  { month: 'Feb', newCustomers: 4, totalActive: 13, estLoads: 95, grossMargin: 19760, estNetProfit: 15000 },
  { month: 'Mar', newCustomers: 5, totalActive: 17, estLoads: 120, grossMargin: 24960, estNetProfit: 19000 },
  { month: 'Apr', newCustomers: 5, totalActive: 21, estLoads: 155, grossMargin: 32240, estNetProfit: 25000 },
  { month: 'May', newCustomers: 6, totalActive: 26, estLoads: 190, grossMargin: 39520, estNetProfit: 29000 }, // Rep 2 ramping
  { month: 'Jun', newCustomers: 7, totalActive: 32, estLoads: 240, grossMargin: 49920, estNetProfit: 35000 },
  { month: 'Jul', newCustomers: 9, totalActive: 40, estLoads: 320, grossMargin: 66560, estNetProfit: 45000 },
  { month: 'Aug', newCustomers: 10, totalActive: 47, estLoads: 375, grossMargin: 78000, estNetProfit: 55000 }, // Rep 3 ramping
  { month: 'Sep', newCustomers: 12, totalActive: 56, estLoads: 445, grossMargin: 92560, estNetProfit: 65000 },
  { month: 'Oct', newCustomers: 14, totalActive: 67, estLoads: 545, grossMargin: 113560, estNetProfit: 80000 },
  { month: 'Nov', newCustomers: 15, totalActive: 79, estLoads: 640, grossMargin: 133120, estNetProfit: 92000 },
  { month: 'Dec', newCustomers: 15, totalActive: 88, estLoads: 720, grossMargin: 149760, estNetProfit: 102000 },
]

export const customerRamp = [
  { month: 1, loadsPerMonth: 1.5, marginPerMonth: 312, cumulative: 312 },
  { month: 2, loadsPerMonth: 5, marginPerMonth: 1040, cumulative: 1352 },
  { month: 3, loadsPerMonth: 10, marginPerMonth: 2080, cumulative: 3432 },
  { month: 4, loadsPerMonth: 12, marginPerMonth: 2496, cumulative: 5928 },
  { month: 5, loadsPerMonth: 15, marginPerMonth: 3120, cumulative: 9048 },
  { month: 6, loadsPerMonth: 18, marginPerMonth: 3744, cumulative: 12792 },
  { month: 7, loadsPerMonth: 20, marginPerMonth: 4160, cumulative: 16952 },
  { month: 8, loadsPerMonth: 20, marginPerMonth: 4160, cumulative: 21112 },
  { month: 9, loadsPerMonth: 20, marginPerMonth: 4160, cumulative: 25272 },
  { month: 10, loadsPerMonth: 20, marginPerMonth: 4160, cumulative: 29432 },
  { month: 11, loadsPerMonth: 20, marginPerMonth: 4160, cumulative: 33592 },
  { month: 12, loadsPerMonth: 20, marginPerMonth: 4160, cumulative: 37752 },
]

export const quarterlyAcquisition = [
  { quarter: 'Q1', newCustomersNeeded: { min: 12, max: 15 }, cumulativeActive: { min: 22, max: 25 }, monthlyRunRate: { min: 4, max: 5 } },
  { quarter: 'Q2', newCustomersNeeded: { min: 15, max: 18 }, cumulativeActive: { min: 35, max: 40 }, monthlyRunRate: { min: 5, max: 6 } },
  { quarter: 'Q3', newCustomersNeeded: { min: 18, max: 20 }, cumulativeActive: { min: 50, max: 55 }, monthlyRunRate: { min: 6, max: 7 } },
  { quarter: 'Q4', newCustomersNeeded: { min: 18, max: 20 }, cumulativeActive: { min: 65, max: 70 }, monthlyRunRate: { min: 6, max: 7 } },
]
