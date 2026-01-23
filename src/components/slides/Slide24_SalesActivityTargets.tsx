import Slide from '../layout/Slide'
import MetricGrid from './MetricGrid'
import Callout from '../content/Callout'
import { activityTargets } from '../../data/salesSystem'

export default function Slide24_SalesActivityTargets() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Sales Activity Targets</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">The engine that drives growth</p>

        <div className="mb-2xl">
          <MetricGrid
            metrics={[
              { label: 'Per Day', value: activityTargets.dialsPerDay, unit: 'minimum dials', highlight: true, icon: '☎️' },
              { label: 'Per Week', value: activityTargets.dialsPerWeek, unit: 'minimum dials', highlight: true, icon: '📱' },
              { label: 'Per Month', value: activityTargets.dialsPerMonth, unit: 'minimum dials', highlight: false, icon: '📊' },
            ]}
            columns={3}
          />
        </div>

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

        <div className="mt-lg bg-white rounded-2xl p-lg border-2 border-bb-slate-300 shadow-lg">
          <p className="text-sm text-bb-slate-700">
            <strong>Enforcement:</strong> Daily call logging in HubSpot. Weekly reviews with Chris. Monthly dashboard. Consistency {'>'} intensity.
          </p>
        </div>
      </div>
    </Slide>
  )
}
