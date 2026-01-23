import Slide from '../layout/Slide'

export default function Slide10_FourPillars() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-3xl text-center">Four Pillars of Growth</h2>

        <div className="grid grid-cols-2 gap-xl">
          {/* Pillar 1 */}
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg text-center">
            <div className="text-5xl mb-md">📞</div>
            <h3 className="text-2xl font-bold text-bb-black mb-md">Sales System</h3>
            <p className="text-base text-bb-dark-gray">
              200 dials/week, structured qualification, aggressive targeting. Own the funnel.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg text-center">
            <div className="text-5xl mb-md">📊</div>
            <h3 className="text-2xl font-bold text-bb-black mb-md">Financial Model</h3>
            <p className="text-base text-bb-dark-gray">
              Real-time metrics. Know your unit economics. Price with confidence.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg text-center">
            <div className="text-5xl mb-md">🚚</div>
            <h3 className="text-2xl font-bold text-bb-cyan mb-md">Carrier Development</h3>
            <p className="text-base text-bb-dark-gray">
              Build capacity in high-margin lanes. Remove the capacity ceiling.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg text-center">
            <div className="text-5xl mb-md">👥</div>
            <h3 className="text-2xl font-bold text-bb-cyan mb-md">Customer Operations</h3>
            <p className="text-base text-bb-dark-gray">
              Smooth onboarding. On-time delivery. Margin protection at scale.
            </p>
          </div>
        </div>

        <p className="text-lg text-bb-dark-gray text-center mt-2xl">
          All four pillars must be strong. Weakness in any one will slow growth.
        </p>
      </div>
    </Slide>
  )
}
