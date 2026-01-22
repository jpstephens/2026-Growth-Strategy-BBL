export interface Milestone {
  name: string
  targetDate: string
  successMetric: string
}

export interface Phase {
  name: string
  period: string
  goal: string
  milestones: Milestone[]
}

export const phases: Phase[] = [
  {
    name: 'Phase 1: Foundation',
    period: 'January – March',
    goal: 'Free Patrick from operations. Establish consistent sales activity. Prove the model works.',
    milestones: [
      {
        name: 'Patrick making 40+ dials/day',
        targetDate: 'End of January',
        successMetric: 'Logged in HubSpot daily',
      },
      {
        name: 'David owns 100% of operations',
        targetDate: 'End of January',
        successMetric: 'Patrick handling zero ops',
      },
      {
        name: 'Instantly.ai domains warmed up',
        targetDate: 'Mid-February',
        successMetric: 'Sending at full velocity',
      },
      {
        name: 'First Instantly.ai customers',
        targetDate: 'End of February',
        successMetric: '2-3 customers from email',
      },
      {
        name: 'HubSpot pipeline tracking live',
        targetDate: 'End of January',
        successMetric: 'All deals in stages',
      },
      {
        name: 'Carrier tagging implemented',
        targetDate: 'End of February',
        successMetric: 'Every load tagged',
      },
      {
        name: 'KPI dashboard v1.0 live',
        targetDate: 'End of February',
        successMetric: 'Team can see metrics',
      },
      {
        name: '12-15 new customers closed',
        targetDate: 'End of Q1',
        successMetric: 'HubSpot deals won',
      },
      {
        name: '22-25 active customers',
        targetDate: 'End of Q1',
        successMetric: 'Combined HubSpot + Alvys',
      },
    ],
  },
  {
    name: 'Phase 2: Validation',
    period: 'April – June',
    goal: 'Prove Patrick can sustain production. Add leverage through additional sales hire. Scale ops support if needed.',
    milestones: [
      {
        name: 'Patrick at 4+ customers/month for 2 months',
        targetDate: 'End of April',
        successMetric: 'Triggers Rep #2 hire',
      },
      {
        name: 'Sales Rep #2 hired and onboarding',
        targetDate: 'May',
        successMetric: 'Started and in training',
      },
      {
        name: 'Ops Coordinator hired (if volume triggers)',
        targetDate: 'June',
        successMetric: 'Based on load count',
      },
      {
        name: 'Instantly.ai fully optimized',
        targetDate: 'April',
        successMetric: '3%+ reply rate',
      },
      {
        name: 'Direct carrier % >25%',
        targetDate: 'End of Q2',
        successMetric: 'Carrier tracking data',
      },
      {
        name: '15-18 new customers closed',
        targetDate: 'End of Q2',
        successMetric: 'HubSpot deals won',
      },
      {
        name: '35-40 active customers',
        targetDate: 'End of Q2',
        successMetric: 'Combined count',
      },
      {
        name: 'Monthly profit >$30K',
        targetDate: 'June',
        successMetric: 'P&L',
      },
    ],
  },
  {
    name: 'Phase 3: Scale',
    period: 'July – September',
    goal: 'Add ops capacity. Add Sales Rep #3. Push toward 50+ customers and $50K+ monthly profit.',
    milestones: [
      {
        name: 'Rep #2 at full productivity (3+ customers/month)',
        targetDate: 'July',
        successMetric: 'Performance tracking',
      },
      {
        name: 'Sales Rep #3 hired',
        targetDate: 'August',
        successMetric: 'Based on pipeline overflow',
      },
      {
        name: 'Ops Manager/Coordinator in place',
        targetDate: 'August-September',
        successMetric: 'Based on volume',
      },
      {
        name: 'Direct carrier % >35%',
        targetDate: 'End of Q3',
        successMetric: 'Carrier tracking',
      },
      {
        name: '18-20 new customers closed',
        targetDate: 'End of Q3',
        successMetric: 'HubSpot deals won',
      },
      {
        name: '50-55 active customers',
        targetDate: 'End of Q3',
        successMetric: 'Combined count',
      },
      {
        name: 'Monthly profit >$60K',
        targetDate: 'September',
        successMetric: 'P&L',
      },
    ],
  },
  {
    name: 'Phase 4: Push to Target',
    period: 'October – December',
    goal: 'Reach $100K monthly profit. Full team structure in place. Systems running smoothly.',
    milestones: [
      {
        name: 'Sales Rep #4 (if needed based on demand)',
        targetDate: 'October',
        successMetric: 'Performance-triggered',
      },
      {
        name: '3-4 sales reps at full productivity',
        targetDate: 'October',
        successMetric: '12+ combined customers/month',
      },
      {
        name: 'Direct carrier % >50%',
        targetDate: 'End of Q4',
        successMetric: 'Carrier tracking',
      },
      {
        name: '18-20 new customers closed',
        targetDate: 'End of Q4',
        successMetric: 'HubSpot deals won',
      },
      {
        name: '65-70 active customers',
        targetDate: 'End of Q4',
        successMetric: 'Combined count',
      },
      {
        name: 'Monthly profit $100K+',
        targetDate: 'December',
        successMetric: 'GOAL ACHIEVED',
      },
    ],
  },
]
