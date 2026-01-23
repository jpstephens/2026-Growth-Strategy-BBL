import Slide from '../layout/Slide'

export default function Slide10_FourPillars() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-lg">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-sm">Four Pillars of Growth</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-2xl" />
        </div>

        <div className="grid grid-cols-2 gap-xl">
          {/* Pillar 1 */}
          <div className="bg-gradient-to-br from-bb-electric-50 to-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg text-center">
            <div className="text-5xl mb-md">📞</div>
            <h3 className="text-2xl font-bold text-bb-navy-900 mb-md">Sales System</h3>
            <p className="text-base text-bb-slate-700">
              200 dials/week, structured qualification, aggressive targeting. Own the funnel.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg text-center">
            <div className="text-5xl mb-md">📊</div>
            <h3 className="text-2xl font-bold text-bb-navy-900 mb-md">Financial Model</h3>
            <p className="text-base text-bb-slate-700">
              Real-time metrics. Know your unit economics. Price with confidence.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg text-center">
            <div className="text-5xl mb-md">🚚</div>
            <h3 className="text-2xl font-bold text-bb-electric-700 mb-md">Carrier Development</h3>
            <p className="text-base text-bb-slate-700">
              Build capacity in high-margin lanes. Remove the capacity ceiling.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg text-center">
            <div className="text-5xl mb-md">👥</div>
            <h3 className="text-2xl font-bold text-bb-electric-700 mb-md">Customer Operations</h3>
            <p className="text-base text-bb-slate-700">
              Smooth onboarding. On-time delivery. Margin protection at scale.
            </p>
          </div>
        </div>

        <p className="text-lg text-bb-slate-700 text-center mt-2xl">
          All four pillars must be strong. Weakness in any one will slow growth.
        </p>
      </div>
    </Slide>
  )
}
