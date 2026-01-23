import Slide from '../layout/Slide'

export default function Slide17_Commitment() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Commitment</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-lg">
          <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-md">CEO/Founder Asks You To</h3>
            <ul className="space-y-sm text-base text-bb-slate-700 ml-lg">
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">✓</span>
                <span>Commit to this growth strategy for 12 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">✓</span>
                <span>Own your assigned responsibilities with full accountability</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">✓</span>
                <span>Hit weekly metrics (dials, qualified leads, customer closes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">✓</span>
                <span>Participate in weekly reviews and course-correct as needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">✓</span>
                <span>Push toward $100K monthly profit target</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-bb-electric-400 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-display font-bold text-bb-electric-700 mb-md">In Return, You Can Expect</h3>
            <ul className="space-y-sm text-base text-bb-slate-700 ml-lg">
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">→</span>
                <span>Clear role definition and decision authority</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">→</span>
                <span>Resources (tools, training, support) to succeed</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">→</span>
                <span>Transparent metrics and accountability</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">→</span>
                <span>Growth in your role as the company scales</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-sm">→</span>
                <span>Alignment on compensation if we hit growth targets</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-2xl">
            <p className="text-xl font-semibold text-bb-navy-900">
              We cannot achieve $100K monthly profit without this commitment.
            </p>
            <p className="text-lg text-bb-slate-700 mt-md">
              Everything in this presentation depends on you owning your role completely.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
