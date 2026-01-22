export const successMetrics = [
  {
    metric: 'On-Time Pickup',
    target: '>95%',
    whyMatters: 'First impression with carrier/customer',
    howToMeasure: 'Alvys + Trucker Tools tracking',
  },
  {
    metric: 'On-Time Delivery',
    target: '>95%',
    whyMatters: 'Customers judge reliability on delivery',
    howToMeasure: 'Alvys + Trucker Tools tracking',
  },
  {
    metric: 'Issue Resolution Time',
    target: '<2 hrs critical, <4 hrs standard',
    whyMatters: 'Speed defines service quality',
    howToMeasure: 'Timestamp logging in Alvys',
  },
  {
    metric: 'Direct Carrier %',
    target: '>35% Q2, >50% Q4',
    whyMatters: 'Better margins and reliability',
    howToMeasure: 'Carrier tagging at booking',
  },
  {
    metric: 'Repeat Carrier Rate',
    target: 'Track and grow',
    whyMatters: 'Good carriers = good service',
    howToMeasure: 'Carrier ID tracking',
  },
  {
    metric: 'Customer Complaints',
    target: '<2% of loads',
    whyMatters: 'Measures overall service quality',
    howToMeasure: 'HubSpot or separate log',
  },
]

export const priorityFramework = [
  {
    priority: 'Priority 1: Active Load Management',
    icon: '🔴',
    items: [
      'Monitor all in-transit loads via Trucker Tools and Alvys',
      'Respond to customer inquiries immediately',
      'Resolve issues—this takes precedence over everything else',
      'Proactive check-ins with carriers on hot loads',
    ],
    note: 'Always First',
  },
  {
    priority: 'Priority 2: Load Booking and Dispatch',
    icon: '🟠',
    items: [
      'Book new loads from existing customers',
      'Source carriers—check preferred list first, then proven, then load boards',
      'Confirm appointments, verify carrier compliance',
      'Update tracking information',
    ],
    note: 'Second',
  },
  {
    priority: 'Priority 3: Carrier Development',
    icon: '🟡',
    items: [
      'Build relationships with good performing carriers',
      'Source direct carriers for high-volume lanes',
      'Update carrier performance ratings',
      'Identify candidates for preferred tier promotion',
    ],
    note: 'When Possible',
  },
]

export const handoffWhoBooks = [
  {
    scenario: 'New customer\'s FIRST load',
    whoBooks: 'Patrick',
    why: 'He made the promise, he delivers on it. Customer trust transfers with successful first load.',
  },
  {
    scenario: 'New customer\'s SECOND+ loads',
    whoBooks: 'David',
    why: 'Handoff complete after first success. David owns all ongoing operations.',
  },
  {
    scenario: 'Existing customer\'s loads',
    whoBooks: 'David',
    why: 'He owns the relationship operationally. No exceptions.',
  },
  {
    scenario: 'Urgent same-day from new prospect',
    whoBooks: 'Patrick (directly)',
    why: 'Can\'t wait—speed wins the trial. Patrick books it immediately.',
  },
  {
    scenario: 'High-value strategic load (new)',
    whoBooks: 'Patrick + David',
    why: 'Critical loads where relationship + execution both matter.',
  },
]

export const escalationPaths = [
  {
    issue: 'Late pickup/delivery',
    firstResponse: 'David',
    escalateTo: 'Vin',
    finalAuthority: 'Vin',
  },
  {
    issue: 'Carrier no-show',
    firstResponse: 'David',
    escalateTo: 'Vin',
    finalAuthority: 'Vin',
  },
  {
    issue: 'Customer complaint (service)',
    firstResponse: 'David',
    escalateTo: 'Vin → Chris',
    finalAuthority: 'Chris',
  },
  {
    issue: 'Customer complaint (relationship)',
    firstResponse: 'David',
    escalateTo: 'Chris',
    finalAuthority: 'Chris',
  },
  {
    issue: 'Cargo damage/claim',
    firstResponse: 'David',
    escalateTo: 'Vin',
    finalAuthority: 'Jason',
  },
  {
    issue: 'Payment/collections (carrier)',
    firstResponse: 'David',
    escalateTo: 'Vin',
    finalAuthority: 'Vin',
  },
  {
    issue: 'Payment/collections (customer)',
    firstResponse: 'David',
    escalateTo: 'Vin',
    finalAuthority: 'Jason',
  },
]

export const carrierTiers = [
  {
    tier: 'Preferred',
    criteria: '5+ loads, <2% issues, reliable communication',
    treatment: 'First call for matching lanes, best rates we can offer',
    action: 'Maintain relationship, check in monthly',
  },
  {
    tier: 'Proven',
    criteria: '3-5 loads, consistent performance',
    treatment: 'Regular consideration for loads',
    action: 'Track for promotion to Preferred',
  },
  {
    tier: 'Trial',
    criteria: '1-2 loads, evaluating',
    treatment: 'Monitor closely, detailed feedback',
    action: 'Decision point: promote or remove',
  },
  {
    tier: 'Do Not Use',
    criteria: 'Major issues, safety concerns, no-shows',
    treatment: 'Blocked in system, no exceptions',
    action: 'Document reason, review quarterly',
  },
]
