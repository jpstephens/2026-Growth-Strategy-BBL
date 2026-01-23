import Slide from '../layout/Slide'
import TableCard from './TableCard'
import Callout from '../content/Callout'
import { topCustomers } from '../../data/currentState'

export default function Slide06_TopCustomers() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Top Performing Customers</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">By margin contribution and consistency</p>

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
