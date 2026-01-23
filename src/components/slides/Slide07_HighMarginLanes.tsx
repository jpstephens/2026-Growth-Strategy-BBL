import Slide from '../layout/Slide'
import TableCard from './TableCard'
import Callout from '../content/Callout'
import { highMarginLanes } from '../../data/currentState'

export default function Slide07_HighMarginLanes() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">High-Margin Lanes</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Lanes to prioritize and expand</p>

        <TableCard
          headers={['Lane', 'Loads', 'Avg Margin', 'Opportunity']}
          rows={highMarginLanes.map(l => [
            l.lane,
            l.loads,
            `$${l.avgMargin}`,
            l.opportunity,
          ])}
          highlight
        />

        <Callout variant="success" title="Lane Strategy">
          <p className="mb-sm">
            These lanes demonstrate strong margins and represent growth opportunities:
          </p>
          <ul className="space-y-xs">
            <li>• <strong>Tacoma WA → El Paso TX:</strong> $620 avg—long haul with premium rates</li>
            <li>• <strong>Chicago Local:</strong> $422 avg—build carrier density for efficiency</li>
            <li>• <strong>FL Lanes:</strong> $310 avg—strong regional market with repeat demand</li>
          </ul>
          <p className="mt-sm text-sm">
            New customer acquisition should prioritize companies with these lane profiles.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
