// Data verified from Alvys API on 2026-01-28

export const overallPerformance = {
  totalRevenue: 1128350,
  totalGrossMargin: 216247,
  loadsAnalyzed: 819,
  avgMarginPerLoad: 208,
  avgMarginPercentage: 19.2,
  currentMonthlyRunRate: 71,
  currentMonthlyProfit: 11007,
}

export const januarySnapshot = {
  totalLoads: 71,
  revenue: 124815,
  grossMargin: 11007,
  marginPerLoad: 155,
  activeCustomers: 6,
}

export const topCustomers = [
  {
    name: 'Dessin Haus Collective',
    loads: 93,
    totalMargin: 43600,
    avgMargin: 469,
    assessment: 'Historical top performer - litigation terminated',
    whyIdeal: 'High margin ($469/load) - TERMINATED',
  },
  {
    name: 'Vibra Screw Inc',
    loads: 20,
    totalMargin: 7445,
    avgMargin: 372,
    assessment: 'Ideal profile—high margin, consistent',
    whyIdeal: 'High margin ($372/load), predictable volume',
  },
  {
    name: 'DH Companies',
    loads: 39,
    totalMargin: 15010,
    avgMargin: 385,
    assessment: 'Historical performer - litigation terminated',
    whyIdeal: 'High margin ($385/load) - TERMINATED',
  },
  {
    name: 'Radiant Logistics',
    loads: 24,
    totalMargin: 5275,
    avgMargin: 220,
    assessment: 'Strong performer',
    whyIdeal: 'Good margin ($220/load), steady freight',
  },
  {
    name: 'Frontier Door',
    loads: 59,
    totalMargin: 11245,
    avgMargin: 191,
    assessment: 'Core customer—volume + margin',
    whyIdeal: 'High volume (59 loads), solid margin ($191/load)',
  },
  {
    name: 'ReWorld Solutions',
    loads: 134,
    totalMargin: 18250,
    avgMargin: 136,
    assessment: 'Volume customer—largest account',
    whyIdeal: 'Highest volume (134 loads), growing margin',
  },
]

export const terminatedAccounts = [
  {
    customer: 'DH Companies',
    historicalLoads: 39,
    avgMargin: 385,
    status: 'TERMINATED',
    reason: 'Litigation',
  },
  {
    customer: 'Dessin Haus',
    historicalLoads: 93,
    avgMargin: 469,
    status: 'TERMINATED',
    reason: 'Litigation',
  },
]

export const highMarginLanes = [
  {
    lane: 'Tacoma WA → El Paso TX',
    loads: 7,
    avgMargin: 620,
    opportunity: 'Target customers with similar lanes',
  },
  {
    lane: 'Chicago IL (Local)',
    loads: 8,
    avgMargin: 422,
    opportunity: 'Build carrier density for local work',
  },
  {
    lane: 'Commerce CA → Saginaw MI',
    loads: 5,
    avgMargin: 375,
    opportunity: 'Long-haul with good rate',
  },
  {
    lane: 'Various FL lanes',
    loads: 12,
    avgMargin: 310,
    opportunity: 'Strong market for us',
  },
]

export const destructiveLanes = [
  {
    lane: 'Woodland WA → Vernon CA',
    loads: 8,
    avgMargin: 32,
    action: 'DO NOT BOOK at current rates',
  },
  {
    lane: 'Ridgefield WA → Vernon CA',
    loads: 5,
    avgMargin: 30,
    action: 'DO NOT BOOK at current rates',
  },
]
