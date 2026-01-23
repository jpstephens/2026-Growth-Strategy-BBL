import Slide from '../layout/Slide'
import MetricGrid from './MetricGrid'
import Callout from '../content/Callout'

export default function Slide10_TargetIndustries() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Target Industries</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Four verticals. One target list.</p>

        <MetricGrid
          metrics={[
            { label: 'Building Products', value: '25%', unit: '375 contacts', highlight: true, icon: '🏗️' },
            { label: 'Metal Fabrication', value: '30%', unit: '450 contacts', highlight: true, icon: '⚙️' },
            { label: 'Plastics & Packaging', value: '25%', unit: '375 contacts', highlight: false, icon: '📦' },
            { label: 'Automotive JIT', value: '20%', unit: '300 contacts', highlight: false, icon: '🚗' },
          ]}
          columns={2}
        />

        <Callout variant="info" title="Why These Industries?">
          <p className="mb-sm">
            Each vertical selected for:
          </p>
          <ul className="space-y-xs">
            <li>• <strong>Consistent freight needs:</strong> Predictable shipping patterns</li>
            <li>• <strong>Reasonable margins:</strong> Not ultra-low pricing, not premium niche</li>
            <li>• <strong>Volume potential:</strong> Companies with 5-30+ loads monthly</li>
            <li>• <strong>Decision clarity:</strong> Shipping is important but not core competency</li>
            <li>• <strong>Regional concentration:</strong> Allows carrier network efficiency</li>
          </ul>
          <p className="mt-sm text-sm font-semibold">
            Total addressable list: 1,500 qualified prospects
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
