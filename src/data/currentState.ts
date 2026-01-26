export const overallPerformance = {
  totalRevenue: 1068130,
  totalGrossMargin: 160939,
  loadsAnalyzed: 774,
  avgMarginPerLoad: 208,
  avgMarginPercentage: 15.1,
  currentMonthlyRunRate: 71,
  currentMonthlyProfit: 12000,
}

export const januarySnapshot = {
  totalLoads: 75,
  revenue: 127705,
  grossMargin: 17846,
  marginPerLoad: 238,
  activeCustomers: 7,
}

export const topCustomers = [
  {
    name: 'Vibra Screw',
    loads: 22,
    totalMargin: 9152,
    avgMargin: 416,
    assessment: 'Ideal profile—high margin, consistent',
    whyIdeal: 'High margin ($416/load), predictable volume, relationship-driven',
  },
  {
    name: 'Radiant Logistics',
    loads: 29,
    totalMargin: 8207,
    avgMargin: 283,
    assessment: 'Strong performer',
    whyIdeal: 'Good margin ($283/load), steady freight, low-maintenance',
  },
  {
    name: 'Frontier Door',
    loads: 75,
    totalMargin: 18825,
    avgMargin: 251,
    assessment: 'Core customer—volume + margin',
    whyIdeal: 'High volume (75 loads), solid margin ($251/load), reliable lanes',
  },
  {
    name: 'Clearway',
    loads: 75,
    totalMargin: 15000,
    avgMargin: 200,
    assessment: 'Core customer—scale opportunity',
    whyIdeal: 'High volume (75 loads), $200+ margin, growth potential',
  },
  {
    name: 'AMP',
    loads: 40,
    totalMargin: 9600,
    avgMargin: 240,
    assessment: 'Steady and reliable',
    whyIdeal: 'Consistent 40 loads/mo, $240/load margin, predictable schedule',
  },
  {
    name: 'ReWorld',
    loads: 35,
    totalMargin: 7700,
    avgMargin: 220,
    assessment: 'Growing account',
    whyIdeal: 'Growing volume, $220/load margin, expansion opportunity',
  },
]

export const terminatedAccounts = [
  {
    customer: 'DH Companies',
    historicalLoads: 21,
    avgMargin: 355,
    status: 'TERMINATED',
    reason: 'Litigation',
  },
  {
    customer: 'Dessin Haus',
    historicalLoads: 9,
    avgMargin: 359,
    status: 'TERMINATED',
    reason: 'Litigation',
  },
  {
    customer: 'Aetna',
    historicalLoads: 15,
    avgMargin: 200,
    status: 'TERMINATED',
    reason: 'Litigation',
  },
  {
    customer: 'BlackBridge Recycling',
    historicalLoads: 37,
    avgMargin: 87,
    status: 'INTERNAL',
    reason: 'Deprioritize—margin too low',
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
