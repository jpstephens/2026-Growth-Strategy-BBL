import Slide from '../layout/Slide'

export default function Slide13_First30Days() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-lg">
          <h2 className="text-5xl font-display font-bold text-bb-charcoal-900 mb-sm">First 30 Days</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-2xl text-bb-slate-600 mb-2xl text-center">Week-by-week action plan</p>

        <div className="space-y-lg">
          {/* Week 1 */}
          <div className="bg-gradient-to-br from-bb-amber-50 to-white border-2 border-bb-amber-600 rounded-2xl p-lg shadow-lg">
            <h3 className="text-2xl font-bold text-bb-charcoal-900 mb-md">Week 1-2: Foundation</h3>
            <ul className="space-y-sm text-base text-bb-slate-700 ml-lg">
              <li>✓ Commit as leadership to this strategy</li>
              <li>✓ Set up HubSpot pipeline & lead qualification forms</li>
              <li>✓ Define target customer profile & top 50 prospects</li>
              <li>✓ Create sales collateral & pitch deck</li>
            </ul>
          </div>

          {/* Week 2-3 */}
          <div className="bg-white border-2 border-bb-amber-600 rounded-2xl p-lg shadow-lg">
            <h3 className="text-2xl font-bold text-bb-charcoal-900 mb-md">Week 2-3: Sales Launch</h3>
            <ul className="space-y-sm text-base text-bb-slate-700 ml-lg">
              <li>✓ Begin outreach (50+ dials/week minimum)</li>
              <li>✓ Schedule discovery calls with top prospects</li>
              <li>✓ Establish weekly sales accountability (Monday reviews)</li>
              <li>✓ Close first 2-3 new customers</li>
            </ul>
          </div>

          {/* Week 3-4 */}
          <div className="bg-white border-2 border-bb-amber-600 rounded-2xl p-lg shadow-lg">
            <h3 className="text-2xl font-bold text-bb-amber-700 mb-md">Week 3-4: Momentum</h3>
            <ul className="space-y-sm text-base text-bb-slate-700 ml-lg">
              <li>✓ Scale dials to 100+/week</li>
              <li>✓ Onboard first new customers</li>
              <li>✓ Review metrics: dials, conversations, conversion</li>
              <li>✓ Course correct if needed</li>
              <li className="text-lg font-semibold">Goal: 4-5 new customers signed by month-end</li>
            </ul>
          </div>
        </div>

        <div className="mt-2xl p-lg bg-gradient-to-br from-bb-amber-50 to-white border-2 border-bb-amber-600 rounded-2xl shadow-lg">
          <p className="text-lg text-bb-slate-700 text-center">
            <strong>Success metric for January:</strong> 5+ new customers, pipeline visible in HubSpot, system discipline established.
          </p>
        </div>
      </div>
    </Slide>
  )
}
