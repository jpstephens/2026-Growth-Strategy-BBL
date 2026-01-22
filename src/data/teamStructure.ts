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
