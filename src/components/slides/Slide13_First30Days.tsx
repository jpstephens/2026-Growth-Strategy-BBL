import Slide from '../layout/Slide'

export default function Slide13_First30Days() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-2xl text-center">First 30 Days</h2>
        <p className="text-2xl text-bb-dark-gray mb-2xl text-center">Week-by-week action plan</p>

        <div className="space-y-lg">
          {/* Week 1 */}
          <div className="bg-bb-light-gray border-2 border-bb-border rounded-lg p-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-md">Week 1-2: Foundation</h3>
            <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
              <li>✓ Commit as leadership to this strategy</li>
              <li>✓ Set up HubSpot pipeline & lead qualification forms</li>
              <li>✓ Define target customer profile & top 50 prospects</li>
              <li>✓ Create sales collateral & pitch deck</li>
            </ul>
          </div>

          {/* Week 2-3 */}
          <div className="bg-bb-light-gray border-2 border-bb-border rounded-lg p-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-md">Week 2-3: Sales Launch</h3>
            <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
              <li>✓ Begin outreach (50+ dials/week minimum)</li>
              <li>✓ Schedule discovery calls with top prospects</li>
              <li>✓ Establish weekly sales accountability (Monday reviews)</li>
              <li>✓ Close first 2-3 new customers</li>
            </ul>
          </div>

          {/* Week 3-4 */}
          <div className="bg-bb-cyan/10 border-2 border-bb-cyan rounded-lg p-lg">
            <h3 className="text-2xl font-bold text-bb-cyan mb-md">Week 3-4: Momentum</h3>
            <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
              <li>✓ Scale dials to 100+/week</li>
              <li>✓ Onboard first new customers</li>
              <li>✓ Review metrics: dials, conversations, conversion</li>
              <li>✓ Course correct if needed</li>
              <li className="text-lg font-semibold">Goal: 4-5 new customers signed by month-end</li>
            </ul>
          </div>
        </div>

        <div className="mt-2xl p-lg bg-bb-light-gray border-2 border-bb-border rounded-lg">
          <p className="text-lg text-bb-dark-gray text-center">
            <strong>Success metric for January:</strong> 5+ new customers, pipeline visible in HubSpot, system discipline established.
          </p>
        </div>
      </div>
    </Slide>
  )
}
