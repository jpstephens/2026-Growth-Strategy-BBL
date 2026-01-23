import Slide from '../layout/Slide'
import TableCard from './TableCard'
import Callout from '../content/Callout'
import { destructiveLanes } from '../../data/currentState'

export default function Slide08_DestructiveLanes() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Destructive Lanes</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-lg">Lanes to avoid or reprice</p>

        <TableCard
          headers={['Lane', 'Loads', 'Avg Margin', 'Action Required']}
          rows={destructiveLanes.map(l => [
            l.lane,
            l.loads,
            `$${l.avgMargin}`,
            l.action,
          ])}
          highlight={false}
        />

        <Callout variant="critical" title="Critical Lane Rule">
          <p className="font-bold text-lg mb-sm">
            DO NOT BOOK Woodland WA → Vernon CA or Ridgefield WA → Vernon CA at current market rates.
          </p>
          <p className="mb-sm">
            These lanes consistently produce $30-32 margins—essentially unprofitable. When customers request these lanes:
          </p>
          <ul className="space-y-xs font-semibold">
            <li>• Quote $250+ higher than market rate</li>
            <li>• Or politely decline the load</li>
            <li>• Do not accept low margins to keep a customer happy</li>
          </ul>
          <p className="mt-sm text-sm italic">
            Bad volume kills good volume. Protect margins at all costs.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
