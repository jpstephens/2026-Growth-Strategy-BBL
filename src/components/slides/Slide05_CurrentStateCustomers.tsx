import Slide from '../layout/Slide'
import MetricGrid from './MetricGrid'
import Callout from '../content/Callout'
import { januarySnapshot } from '../../data/currentState'

export default function Slide05_CurrentStateCustomers() {
  return (
    <Slide>
      <div className="w-full max-w-6xl space-y-lg">
        <div>
          <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Current State: January 2026</h2>
          <p className="text-xl text-bb-dark-gray text-center">Most recent complete month baseline</p>
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
