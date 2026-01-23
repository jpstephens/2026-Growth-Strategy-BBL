import Slide from '../layout/Slide'

export default function Slide06_WhyIncompatible() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-xl text-center">Why This Is Structurally Incompatible</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">Operations and sales require opposite mindsets</p>

        <div className="grid grid-cols-2 gap-lg">
          {/* Operations Side */}
          <div className="bg-red-50 border-2 border-red-300 p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-red-700 mb-md flex items-center gap-md">
              <span className="text-3xl">🔥</span>
              Operations
            </h3>
            <div className="space-y-md">
              <div>
                <p className="font-semibold text-bb-black mb-xs">Mindset: Reactive</p>
                <p className="text-sm text-bb-dark-gray">Puts out fires, solves problems as they happen, handles exceptions</p>
              </div>
              <div>
                <p className="font-semibold text-bb-black mb-xs">Focus: Current customers</p>
                <p className="text-sm text-bb-dark-gray">Ensure loads run on time, carriers are happy, customers are served</p>
              </div>
              <div>
                <p className="font-semibold text-bb-black mb-xs">Interruptions: Constant</p>
                <p className="text-sm text-bb-dark-gray">The phone rings, the email pings—urgent always wins</p>
              </div>
            </div>
          </div>

          {/* Sales Side */}
          <div className="bg-green-50 border-2 border-green-300 p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-md flex items-center gap-md">
              <span className="text-3xl">📈</span>
              Sales
            </h3>
            <div className="space-y-md">
              <div>
                <p className="font-semibold text-bb-black mb-xs">Mindset: Proactive</p>
                <p className="text-sm text-bb-dark-gray">Builds funnels, plans outreach, creates momentum, thinks ahead</p>
              </div>
              <div>
                <p className="font-semibold text-bb-black mb-xs">Focus: New customers</p>
                <p className="text-sm text-bb-dark-gray">Prospect lists, cold calls, qualification, closing deals</p>
              </div>
              <div>
                <p className="font-semibold text-bb-black mb-xs">Interruptions: Death</p>
                <p className="text-sm text-bb-dark-gray">Context switching destroys momentum and pipeline</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-xl bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
          <p className="text-lg text-bb-dark-gray">
            <span className="font-semibold text-bb-black">The Problem:</span> When one person does both, the ringing phone always beats the prospect list. Urgent operations work interrupts proactive sales work. Result: Patrick becomes a firefighter who occasionally sells, not a salesman who occasionally handles ops.
          </p>
        </div>
      </div>
    </Slide>
  )
}
