import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide42_Commitment() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-lg text-center">Our Commitment</h2>

        <Callout variant="info" title="What We Will Do">
          <ul className="space-y-sm text-sm">
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">✓</span>
              <span><strong>Execute with discipline.</strong> This plan is not optional—it's our roadmap. Every person owns their piece.</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">✓</span>
              <span><strong>Track everything.</strong> Daily dials, weekly pipeline, monthly P&L. Visibility drives accountability.</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">✓</span>
              <span><strong>Adjust fast.</strong> If we miss targets by 10%+, we troubleshoot and pivot immediately—no excuses.</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">✓</span>
              <span><strong>Support our team.</strong> Clear roles. Protected time. Tools they need. Compensation tied to results.</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">✓</span>
              <span><strong>Protect margins.</strong> We don't chase bad volume. Every customer must clear $200+ per load.</span>
            </li>
          </ul>
        </Callout>

        <Callout variant="success" title="What Success Looks Like">
          <p className="mb-sm">
            December 31, 2026:
          </p>
          <ul className="space-y-xs text-sm font-semibold">
            <li>• 65-70 active customers (distributed across 4 industries)</li>
            <li>• 420+ loads per month</li>
            <li>• $87K monthly gross margin</li>
            <li>• $69K+ monthly net profit</li>
            <li>• Sustainable team structure in place</li>
            <li>• Predictable, repeatable sales system</li>
            <li>• Healthy, profitable, scalable business</li>
          </ul>
        </Callout>

        <div className="mt-lg bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-lg border-2 border-bb-cyan text-center">
          <p className="text-lg font-bold text-bb-black mb-sm">
            This is possible. The data shows it. The plan is clear. Execution wins.
          </p>
          <p className="text-sm text-bb-dark-gray italic">
            Let's build BlackBridge into a real business. 2026 is our year.
          </p>
        </div>
      </div>
    </Slide>
  )
}
