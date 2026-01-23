import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide02_ExecutiveThesis() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-xl text-center">Executive Thesis</h2>

        <div className="space-y-xl">
          <Callout variant="info" title="The Opportunity">
            <p className="text-lg">
              BlackBridge has built a profitable freight brokerage with real customers, real revenue, and real margins. The fundamental business model works. The 2026 growth strategy is NOT about proving the model—it's about scaling what already works.
            </p>
          </Callout>

          <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg border-2 border-bb-cyan p-xl">
            <h3 className="text-2xl font-bold text-bb-black mb-lg">Core Thesis</h3>
            <ul className="space-y-md">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">1.</span>
                <div>
                  <p className="font-semibold text-bb-black">Profitable Unit Economics</p>
                  <p className="text-sm text-bb-dark-gray mt-xs">$200+ margin per load with proven customers</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">2.</span>
                <div>
                  <p className="font-semibold text-bb-black">Repeatable Sales System</p>
                  <p className="text-sm text-bb-dark-gray mt-xs">Patrick's outbound process converts consistently</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">3.</span>
                <div>
                  <p className="font-semibold text-bb-black">Scalable Operations</p>
                  <p className="text-sm text-bb-dark-gray mt-xs">David manages load execution; support required as volume grows</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">4.</span>
                <div>
                  <p className="font-semibold text-bb-black">Capital Available</p>
                  <p className="text-sm text-bb-dark-gray mt-xs">Jason available to fund growth without external capital</p>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-center text-bb-dark-gray italic">
            Success in 2026 = executing what we know works, at scale, with discipline.
          </p>
        </div>
      </div>
    </Slide>
  )
}
