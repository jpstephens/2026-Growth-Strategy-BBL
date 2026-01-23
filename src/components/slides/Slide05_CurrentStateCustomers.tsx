import Slide from '../layout/Slide'
import MetricGrid from './MetricGrid'
import Callout from '../content/Callout'
import { januarySnapshot } from '../../data/currentState'

export default function Slide05_CurrentStateCustomers() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        <div>
          <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Current State: January 2026</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
          <p className="text-xl text-bb-slate-700 text-center">Most recent complete month baseline</p>
        </div>

        <MetricGrid
          metrics={[
            { label: 'Total Loads', value: januarySnapshot.totalLoads, highlight: true, icon: '📦' },
            { label: 'Revenue', value: `$${(januarySnapshot.revenue / 1000).toFixed(1)}k`, highlight: false, icon: '💵' },
            { label: 'Gross Margin', value: `$${januarySnapshot.grossMargin.toLocaleString()}`, highlight: true, icon: '📊' },
            { label: 'Active Customers', value: januarySnapshot.activeCustomers, highlight: false, icon: '👥' },
          ]}
          columns={2}
        />

        <Callout variant="success" title="Positive Margin Trend">
          January's margin per load of $238 exceeds our $208 average—suggesting we're improving at pricing or customer selection. This momentum should be the foundation for 2026.
        </Callout>
      </div>
    </Slide>
  )
}
