import Slide from '../layout/Slide'
import MetricGrid from './MetricGrid'
import Callout from '../content/Callout'
import { activityTargets } from '../../data/salesSystem'

export default function Slide24_SalesActivityTargets() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Sales Activity Targets</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">The engine that drives growth</p>

        <MetricGrid
          metrics={[
            { label: 'Per Day', value: activityTargets.dialsPerDay, unit: 'minimum dials', highlight: true, icon: '☎️' },
            { label: 'Per Week', value: activityTargets.dialsPerWeek, unit: 'minimum dials', highlight: true, icon: '📱' },
            { label: 'Per Month', value: activityTargets.dialsPerMonth, unit: 'minimum dials', highlight: false, icon: '📊' },
          ]}
          columns={3}
        />

        <Callout variant="critical" title="The Non-Negotiable">
          <p className="mb-sm font-bold">
            These are minimums, not goals. Top performers exceed them.
          </p>
          <p className="mb-sm">
            Without activity, there are no conversations. Without conversations, there are no customers. Without customers, there is no growth.
          </p>
          <p className="text-sm italic">
            This is the single most important metric. Everything else flows from this.
          </p>
        </Callout>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="text-sm text-bb-dark-gray">
            <strong>Enforcement:</strong> Daily call logging in HubSpot. Weekly reviews with Chris. Monthly dashboard. Consistency {'>'} intensity.
          </p>
        </div>
      </div>
    </Slide>
  )
}
