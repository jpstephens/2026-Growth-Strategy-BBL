import Slide from '../layout/Slide'
import TableCard from './TableCard'
import Callout from '../content/Callout'
import { topCustomers } from '../../data/currentState'

export default function Slide06_TopCustomers() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Top Performing Customers</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">By margin contribution and consistency</p>

        <TableCard
          headers={['Customer', 'Loads', 'Total Margin', 'Avg Margin', 'Assessment']}
          rows={topCustomers.map(c => [
            c.name,
            c.loads,
            `$${c.totalMargin.toLocaleString()}`,
            `$${c.avgMargin}`,
            c.assessment,
          ])}
          highlight
        />

        <Callout variant="info" title="Customer Profile Analysis">
          <p className="mb-sm">
            <strong>What makes a top customer?</strong>
          </p>
          <ul className="space-y-xs">
            <li>• High margin per load ($200+)</li>
            <li>• Consistent volume (multiple loads monthly)</li>
            <li>• Reasonable service requirements</li>
            <li>• Reliable payment history</li>
          </ul>
          <p className="mt-sm text-sm italic">
            Vibra Screw is the template: $416 avg margin, consistent deliveries, easy to work with. Find more like them.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
