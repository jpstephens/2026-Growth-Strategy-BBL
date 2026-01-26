export const currentTeam = [
  {
    name: 'Jason',
    role: 'President',
    responsibilities: 'Strategy, technology, major account decisions, capital allocation',
    location: 'West Palm Beach',
  },
  {
    name: 'Vin',
    role: 'Operations Lead',
    responsibilities: 'Strategy execution, ops management, David oversight, carrier strategy',
    location: 'Colorado',
  },
  {
    name: 'Chris',
    role: 'Sales Lead',
    responsibilities: 'Sales team management, Patrick oversight, customer relationships, pricing',
    location: 'NJ/NY',
  },
  {
    name: 'Patrick',
    role: 'Sales Rep',
    responsibilities: 'Outbound prospecting, lead qualification, closing new accounts',
    location: 'NJ/NY',
  },
  {
    name: 'David',
    role: 'Operations',
    responsibilities: 'Load execution, carrier management, customer service, tracking',
    location: 'NJ/NY',
  },
]

export const accountability = [
  {
    outcome: 'New customer acquisition',
    owner: 'Patrick',
    support: 'Chris (coaching), David (first load execution)',
  },
  {
    outcome: 'Load execution quality',
    owner: 'David',
    support: 'Vin (escalation), Patrick (relationship issues)',
  },
  {
    outcome: 'Sales team performance',
    owner: 'Chris',
    support: 'Jason (strategy)',
  },
  {
    outcome: 'Operations performance',
    owner: 'Vin',
    support: 'Jason (strategy)',
  },
  {
    outcome: 'Carrier network development',
    owner: 'David',
    support: 'Vin (strategy)',
  },
  {
    outcome: 'Overall business results',
    owner: 'Jason',
    support: 'Vin, Chris',
  },
]

export const hiringStrategy = [
  {
    position: 'Sales Rep #2',
    triggerMetric: 'Patrick closes 4+ accounts/month for 2 consecutive months',
    whatItProves: 'The sales system works and can be replicated',
    expectedTimeline: 'Q2 (Apr-May)',
    costPerMonth: '$6,000',
    breakEvenProduction: '3 customers/month',
  },
  {
    position: 'Ops Coordinator',
    triggerMetric: 'David managing 150+ loads/month',
    whatItProves: 'Volume requires support',
    expectedTimeline: 'Q2-Q3',
    costPerMonth: '$3,500',
    breakEvenProduction: '60 loads/month support',
  },
  {
    position: 'Sales Rep #3',
    triggerMetric: 'Rep #2 reaches 3+ accounts/month, pipeline overflowing',
    whatItProves: 'System scales beyond one person',
    expectedTimeline: 'Q3 (Aug)',
    costPerMonth: '$6,000',
    breakEvenProduction: '3 customers/month',
  },
  {
    position: 'Sales Rep #4',
    triggerMetric: 'Team hitting 12+ combined accounts/month',
    whatItProves: 'Sustained scale, final push to target',
    expectedTimeline: 'Q4 (if needed)',
    costPerMonth: '$6,000',
    breakEvenProduction: '3 customers/month',
  },
]

export const hireCosts = [
  {
    role: 'Sales Rep',
    baseSalary: 4000,
    commission: 2000,
    totalMonth: 6000,
    breakEvenCustomers: 3,
    notes: 'At target 4-5 customers/month, profitable within 60 days of ramping',
  },
  {
    role: 'Ops Coordinator',
    baseSalary: 3500,
    commission: 0,
    totalMonth: 3500,
    breakEvenCustomers: 60,
    notes: 'Break-even at 60 loads/month support, enables David to scale',
  },
]

export const leadershipCommitments = [
  {
    leader: 'Chris',
    role: 'Sales Lead',
    commitments: [
      'Weekly 1:1 coaching session with Patrick',
      'Available for deal support on any call within 2 hours',
      'Joint call with Patrick on any deal over $500/month margin',
      'Handle pricing strategy so Patrick can focus on relationships',
    ],
    measurement: 'Patrick rates coaching value monthly',
  },
  {
    leader: 'Vin',
    role: 'Operations Lead',
    commitments: [
      'Daily 15-min sync with David',
      'Initiate ops coordinator hire BEFORE David hits 120 loads/month',
      'Escalation response within 1 hour during business hours',
      'Shield David from non-essential requests',
    ],
    measurement: 'David rates support quality monthly',
  },
  {
    leader: 'Jason',
    role: 'President',
    commitments: [
      'Technology support and tool decisions within 48 hours',
      'Capital available when hiring triggers are met',
      'Strategic decisions within 48 hours of escalation',
      'Will NOT pull Patrick into operations during protected time for ANY reason',
    ],
    measurement: 'Hiring speed and decision response time',
  },
]

export const patrickGrowthPath = {
  currentRole: 'Sales Rep',
  focus: '100% new customer acquisition',
  protectedTime: '8am-12pm daily (no interruptions)',
  targets: {
    weekly: {
      dials: 200,
      conversations: 40,
      quotes: 4,
    },
    monthly: {
      newCustomers: 4,
    },
  },
  careerPath: 'Sales Lead if Rep #2 and Rep #3 are hired and performing',
  whatHeOwns: [
    'New customer acquisition',
    'First load relationship (books and monitors)',
    'Customer intro handoff to David',
    'His own call schedule and prioritization',
  ],
  whatHeDoesNot: [
    'Day-to-day operations after handoff',
    'Carrier issues',
    'Customer service escalations (unless relationship-critical)',
    'Quote requests from existing customers',
  ],
}

export const davidGrowthPath = {
  currentRole: 'Operations',
  focus: 'Load execution excellence and carrier network',
  domain: 'Complete ownership of day-to-day operations',
  targets: {
    onTimeRate: 95,
    carrierRetention: 80,
    customerSatisfaction: 90,
  },
  careerPath: 'Operations Manager with own team when volume hits 200+ loads/month',
  whatHeOwns: [
    'All load execution after handoff',
    'Carrier relationships and development',
    'Customer communication (day-to-day)',
    'Operational process improvements',
    'His priority framework and schedule',
  ],
  whatHeDoesNot: [
    'New customer acquisition',
    'Pricing decisions',
    'Sales calls or prospecting',
    'Strategic carrier negotiations (Vin supports)',
  ],
}

export const handoffProtocol = [
  {
    step: 1,
    action: 'Patrick books and monitors first load personally',
    reason: 'He made the promise, he delivers on it',
  },
  {
    step: 2,
    action: 'After successful first delivery, Patrick sends intro email',
    reason: 'Customer trust transfers with successful execution',
  },
  {
    step: 3,
    action: 'Patrick CCs David on the email',
    reason: 'Clear transition, David introduced as day-to-day contact',
  },
  {
    step: 4,
    action: 'David takes over ALL future booking, tracking, and communication',
    reason: 'One ops contact, no confusion, David can move fast',
  },
  {
    step: 5,
    action: 'Patrick stays available for relationship escalations ONLY',
    reason: 'David handles 95%+ on his own, Patrick stays on sales',
  },
  {
    step: 6,
    action: 'Customer profile and preferences documented in HubSpot',
    reason: 'Ensures clean handoff, no context loss',
  },
]
