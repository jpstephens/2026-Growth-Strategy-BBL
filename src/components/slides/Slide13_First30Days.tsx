import Slide from '../layout/Slide'

export default function Slide13_First30Days() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        <div className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-sm">First 30 Days</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Week-by-week action plan</p>
        </div>

        <div className="grid grid-cols-3 gap-md">
          {/* Week 1-2 */}
          <div className="bg-gradient-to-br from-bb-amber-50 to-white border-2 border-bb-amber-300 rounded-xl p-md shadow-sm">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 bg-bb-amber-500 rounded-lg flex items-center justify-center text-white font-bold">1-2</div>
              <h3 className="text-base font-bold text-bb-charcoal-800">Foundation</h3>
            </div>
            <ul className="space-y-xs text-sm text-bb-charcoal-700">
              <li className="flex items-start gap-xs">
                <span className="text-bb-amber-600 font-bold">✓</span>
                <span>Leadership commits to strategy</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-amber-600 font-bold">✓</span>
                <span>HubSpot pipeline setup</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-amber-600 font-bold">✓</span>
                <span>Target customer profile defined</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-amber-600 font-bold">✓</span>
                <span>Sales collateral ready</span>
              </li>
            </ul>
          </div>

          {/* Week 2-3 */}
          <div className="bg-white border-2 border-bb-steel-300 rounded-xl p-md shadow-sm">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 bg-bb-steel-500 rounded-lg flex items-center justify-center text-white font-bold">2-3</div>
              <h3 className="text-base font-bold text-bb-charcoal-800">Sales Launch</h3>
            </div>
            <ul className="space-y-xs text-sm text-bb-charcoal-700">
              <li className="flex items-start gap-xs">
                <span className="text-bb-steel-600 font-bold">✓</span>
                <span>Begin outreach (50+ dials/week)</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-steel-600 font-bold">✓</span>
                <span>Schedule discovery calls</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-steel-600 font-bold">✓</span>
                <span>Weekly accountability (Mon)</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-steel-600 font-bold">✓</span>
                <span>Close first 2-3 customers</span>
              </li>
            </ul>
          </div>

          {/* Week 3-4 */}
          <div className="bg-gradient-to-br from-bb-forest-50 to-white border-2 border-bb-forest-300 rounded-xl p-md shadow-sm">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 bg-bb-forest-500 rounded-lg flex items-center justify-center text-white font-bold">3-4</div>
              <h3 className="text-base font-bold text-bb-charcoal-800">Momentum</h3>
            </div>
            <ul className="space-y-xs text-sm text-bb-charcoal-700">
              <li className="flex items-start gap-xs">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span>Scale to 100+ dials/week</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span>Onboard first customers</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span>Review metrics, adjust</span>
              </li>
              <li className="flex items-start gap-xs">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span className="font-semibold">Goal: 4-5 new customers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Metric */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-lg shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">January Success Metric:</span>
            {' '}5+ new customers signed, pipeline visible in HubSpot, system discipline established.
          </p>
        </div>
      </div>
    </Slide>
  )
}
