import Slide from '../layout/Slide'

export default function Slide17_Commitment() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-3xl text-center">Commitment</h2>

        <div className="space-y-lg">
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-md">CEO/Founder Asks You To</h3>
            <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">✓</span>
                <span>Commit to this growth strategy for 12 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">✓</span>
                <span>Own your assigned responsibilities with full accountability</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">✓</span>
                <span>Hit weekly metrics (dials, qualified leads, customer closes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">✓</span>
                <span>Participate in weekly reviews and course-correct as needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">✓</span>
                <span>Push toward $100K monthly profit target</span>
              </li>
            </ul>
          </div>

          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-cyan mb-md">In Return, You Can Expect</h3>
            <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Clear role definition and decision authority</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Resources (tools, training, support) to succeed</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Transparent metrics and accountability</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Growth in your role as the company scales</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Alignment on compensation if we hit growth targets</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-lg">
            <p className="text-xl font-semibold text-bb-black">
              We cannot achieve $100K monthly profit without this commitment.
            </p>
            <p className="text-lg text-bb-dark-gray mt-md">
              Everything in this presentation depends on you owning your role completely.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
