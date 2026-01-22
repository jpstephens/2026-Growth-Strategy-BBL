export interface KPI {
  metric: string
  target: string | number
  frequency: string
  how: string
  owner: string
}

export const salesKPIs: KPI[] = [
  {
    metric: 'Dials',
    target: '200/week per rep',
    frequency: 'Daily',
    how: 'HubSpot call logging',
    owner: 'Patrick/Chris',
  },
  {
    metric: 'Conversations',
    target: '35-40/week',
    frequency: 'Daily',
    how: 'HubSpot calls with notes',
    owner: 'Patrick/Chris',
  },
  {
    metric: 'Qualified Prospects',
    target: '8-10/week',
    frequency: 'Weekly',
    how: 'Deals in Qualified stage',
    owner: 'Chris',
  },
  {
    metric: 'New Customers',
    target: '4-6/month',
    frequency: 'Monthly',
    how: 'Deals moved to Won',
    owner: 'Chris',
  },
  {
    metric: 'Pipeline Value',
    target: 'Growing',
    frequency: 'Weekly',
    how: 'HubSpot pipeline report',
    owner: 'Chris',
  },
  {
    metric: 'Email Reply Rate',
    target: '>3%',
    frequency: 'Weekly',
    how: 'Instantly.ai dashboard',
    owner: 'Patrick',
  },
  {
    metric: 'Quote-to-Close Rate',
    target: '>40%',
    frequency: 'Monthly',
    how: 'HubSpot stage conversion',
    owner: 'Chris',
  },
]

export const operationsKPIs: KPI[] = [
  {
    metric: 'On-Time Pickup',
    target: '>95%',
    frequency: 'Weekly',
    how: 'Alvys + Trucker Tools',
    owner: 'David/Vin',
  },
  {
    metric: 'On-Time Delivery',
    target: '>95%',
    frequency: 'Weekly',
    how: 'Alvys + Trucker Tools',
    owner: 'David/Vin',
  },
  {
    metric: 'Margin per Load',
    target: '>$200',
    frequency: 'Weekly',
    how: 'Alvys margin report',
    owner: 'Vin',
  },
  {
    metric: 'Issue Resolution Time',
    target: '<2 hrs critical, <4 hrs standard',
    frequency: 'Weekly',
    how: 'Alvys note timestamps',
    owner: 'David/Vin',
  },
  {
    metric: 'Direct Carrier %',
    target: '>35% Q2, >50% Q4',
    frequency: 'Monthly',
    how: 'Carrier tagging in Alvys',
    owner: 'David/Vin',
  },
  {
    metric: 'Repeat Carrier Rate',
    target: 'Track and grow',
    frequency: 'Monthly',
    how: 'Carrier ID analysis',
    owner: 'David/Vin',
  },
  {
    metric: 'Customer Complaints',
    target: '<2% of loads',
    frequency: 'Monthly',
    how: 'HubSpot or separate log',
    owner: 'Vin',
  },
]

export const businessKPIs: KPI[] = [
  {
    metric: 'Monthly Gross Margin',
    target: 'Growing → $100K',
    frequency: 'Monthly',
    how: 'Alvys + accounting',
    owner: 'Jason',
  },
  {
    metric: 'Monthly Net Profit',
    target: 'Growing → $100K',
    frequency: 'Monthly',
    how: 'P&L',
    owner: 'Jason',
  },
  {
    metric: 'Active Customers',
    target: 'Growing → 65-70',
    frequency: 'Monthly',
    how: 'HubSpot + Alvys',
    owner: 'Chris',
  },
  {
    metric: 'Customer Churn Rate',
    target: '<15% annual',
    frequency: 'Quarterly',
    how: 'Customer retention analysis',
    owner: 'Chris',
  },
  {
    metric: 'Customer Concentration',
    target: 'No customer >15%',
    frequency: 'Monthly',
    how: 'By-customer margin report',
    owner: 'Jason',
  },
  {
    metric: 'Average Loads per Customer',
    target: 'Growing → 15-20',
    frequency: 'Monthly',
    how: 'Alvys by-customer report',
    owner: 'Vin',
  },
]

export const dashboardImplementation = [
  {
    option: 'HubSpot Dashboards',
    cost: 'Free (included)',
    pros: 'Sales data native, easy setup',
    cons: 'Ops data needs manual entry',
  },
  {
    option: 'Google Sheets + Looker Studio',
    cost: 'Free',
    pros: 'Flexible, can combine sources',
    cons: 'Requires manual data sync',
  },
  {
    option: 'Databox',
    cost: '$50-100/month',
    pros: 'Professional, combines sources',
    cons: 'Monthly cost',
  },
  {
    option: 'Custom Build',
    cost: 'Variable',
    pros: 'Exactly what you want',
    cons: 'Time investment, maintenance',
  },
]
