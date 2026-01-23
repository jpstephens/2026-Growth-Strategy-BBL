import Slide from '../layout/Slide'

export default function Slide39_FourPillarsReview() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-lg text-center">Four Pillars of Growth</h2>

        <div className="grid grid-cols-2 gap-lg">
          {/* Sales */}
          <div className="rounded-lg border-2 border-bb-cyan bg-blue-50 p-lg">
            <p className="text-2xl font-bold text-bb-cyan mb-md">💼 Sales</p>
            <ul className="space-y-xs text-sm text-bb-dark-gray">
              <li>• 40+ dials/day per rep</li>
              <li>• 200+ dials/week target</li>
              <li>• 4-5 new customers/month</li>
              <li>• Precise funnel tracking</li>
              <li>• Protected calling blocks</li>
            </ul>
            <p className="text-xs font-semibold text-bb-cyan mt-md">Goal: 12+ customers/month with 3-4 reps</p>
          </div>

          {/* Operations */}
          <div className="rounded-lg border-2 border-bb-dark-gray bg-bb-light-gray p-lg">
            <p className="text-2xl font-bold text-bb-black mb-md">⚙️ Operations</p>
            <ul className="space-y-xs text-sm text-bb-dark-gray">
              <li>• {'>'}95% on-time pickup/delivery</li>
              <li>• {'<'}2hr critical issue resolution</li>
              <li>• Direct carrier network {'>'}50%</li>
              <li>• Carrier tier system</li>
              <li>• Clear escalation paths</li>
            </ul>
            <p className="text-xs font-semibold text-bb-black mt-md">Goal: Handle 600+ monthly loads with David + support</p>
          </div>

          {/* Team */}
          <div className="rounded-lg border-2 border-bb-border bg-bb-white p-lg border-2 border-bb-dark-gray">
            <p className="text-2xl font-bold text-bb-black mb-md">👥 Team</p>
            <ul className="space-y-xs text-sm text-bb-dark-gray">
              <li>• Start: 5 people (current)</li>
              <li>• Add Rep #2 in Q2</li>
              <li>• Add Ops Coordinator Q2-Q3</li>
              <li>• Add Rep #3 in Q3</li>
              <li>• Performance-triggered hiring</li>
            </ul>
            <p className="text-xs font-semibold text-bb-black mt-md">Goal: 8-10 people by year end</p>
          </div>

          {/* Systems */}
          <div className="rounded-lg border-2 border-bb-green bg-green-50 p-lg">
            <p className="text-2xl font-bold text-bb-green mb-md">📊 Systems</p>
            <ul className="space-y-xs text-sm text-bb-dark-gray">
              <li>• HubSpot pipeline tracking</li>
              <li>• Alvys load management</li>
              <li>• KPI dashboard (monthly)</li>
              <li>• Carrier tagging system</li>
              <li>• Weekly + monthly reviews</li>
            </ul>
            <p className="text-xs font-semibold text-bb-green mt-md">Goal: Full visibility into business health</p>
          </div>
        </div>

        <div className="mt-lg bg-gradient-to-r from-blue-50 via-bb-light-gray to-green-50 rounded-lg p-lg border-2 border-bb-cyan text-center">
          <p className="text-sm text-bb-dark-gray font-semibold">
            These four pillars are interconnected. Strong sales needs strong operations. Strong operations needs strong team. Everything needs visibility through systems.
          </p>
        </div>
      </div>
    </Slide>
  )
}
