import Slide from '../layout/Slide'

export default function Slide40_RisksMitigation() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Key Risks & Mitigation</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">What could go wrong and how we'll handle it</p>

        <div className="space-y-md">
          {/* Risk 1 */}
          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-lg">
            <div className="flex items-start gap-md mb-sm">
              <p className="text-2xl">⚠️</p>
              <div>
                <p className="font-bold text-bb-black text-lg">Patrick doesn't sustain production</p>
                <p className="text-sm text-bb-dark-gray mt-xs">
                  <strong>Risk:</strong> Sales system doesn't prove repeatable. Rep #2 hire delayed.
                </p>
                <p className="text-sm text-bb-green font-semibold mt-xs">
                  <strong>Mitigation:</strong> Coaching from Chris. Daily activity tracking. Swap messaging/lists if conversion is low. Assess fit by April 30.
                </p>
              </div>
            </div>
          </div>

          {/* Risk 2 */}
          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-lg">
            <div className="flex items-start gap-md mb-sm">
              <p className="text-2xl">⚠️</p>
              <div>
                <p className="font-bold text-bb-black text-lg">Clearway or Frontier Door relationship weakens</p>
                <p className="text-sm text-bb-dark-gray mt-xs">
                  <strong>Risk:</strong> Major customer loss = crisis. Concentration risk materializes.
                </p>
                <p className="text-sm text-bb-green font-semibold mt-xs">
                  <strong>Mitigation:</strong> Accelerate customer diversification. Target 65-70 by December. By month 6-7, no single customer exceeds 12%.
                </p>
              </div>
            </div>
          </div>

          {/* Risk 3 */}
          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-lg">
            <div className="flex items-start gap-md mb-sm">
              <p className="text-2xl">⚠️</p>
              <div>
                <p className="font-bold text-bb-black text-lg">David becomes bottleneck at 150+ loads/month</p>
                <p className="text-sm text-bb-dark-gray mt-xs">
                  <strong>Risk:</strong> Ops capacity limits growth. Customer experience degrades.
                </p>
                <p className="text-sm text-bb-green font-semibold mt-xs">
                  <strong>Mitigation:</strong> Ops Coordinator hired when loads {'>'}120/month. Handoff protocol strict to prevent Patrick involvement. Monitor David's bandwidth monthly.
                </p>
              </div>
            </div>
          </div>

          {/* Risk 4 */}
          <div className="rounded-lg border-2 border-red-500 bg-red-50 p-lg">
            <div className="flex items-start gap-md mb-sm">
              <p className="text-2xl">⚠️</p>
              <div>
                <p className="font-bold text-bb-black text-lg">Margin compression from pricing pressure</p>
                <p className="text-sm text-bb-dark-gray mt-xs">
                  <strong>Risk:</strong> Larger customers demand lower rates. Unit economics deteriorate.
                </p>
                <p className="text-sm text-bb-green font-semibold mt-xs">
                  <strong>Mitigation:</strong> Strict $200+ margin target on all new customers. Avoid WA/OR→Vernon CA lanes. Build direct carrier network to improve cost basis. Monthly margin review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
