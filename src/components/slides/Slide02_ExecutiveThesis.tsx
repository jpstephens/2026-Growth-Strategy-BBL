import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide02_ExecutiveThesis() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">We Have Proven Product-Market Fit</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">The business model works. The constraint isn't the market—it's sales capacity.</p>

        <div className="space-y-xl">
          <Callout variant="success" title="The Foundation We've Built">
            <p className="text-lg">
              BlackBridge has shipped 774 loads with $160K in gross margin. We have real customers, real revenue, and real margins. The unit economics work: $200+ profit per load. We're not experimenting. We're scaling what already works.
            </p>
          </Callout>

          <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg border-2 border-bb-cyan p-xl">
            <h3 className="text-2xl font-bold text-bb-black mb-lg">What We Know Works</h3>
            <ul className="space-y-md">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Profitable Unit Economics</p>
                  <p className="text-sm text-bb-dark-gray mt-xs">$200+ margin per load proven across 774 loads</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Repeatable Sales Process</p>
                  <p className="text-sm text-bb-dark-gray mt-xs">Patrick converts prospects to customers consistently</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Scalable Operations</p>
                  <p className="text-sm text-bb-dark-gray mt-xs">David executes load delivery and carrier management reliably</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-xl">
            <p className="text-base text-bb-dark-gray text-center mb-sm">
              <span className="font-semibold text-bb-black">The Problem:</span> We're doing 75 loads/month with 7 customers because <span className="font-semibold text-orange-700">Patrick does both sales AND operations</span>. That role conflict limits growth.
            </p>
            <p className="text-base text-bb-dark-gray text-center">
              <span className="font-semibold text-bb-black">The Solution:</span> Fix the structural constraint. Separate roles. Run the system at full capacity.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
