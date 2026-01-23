import Slide from '../layout/Slide'

export default function Slide06_WhyIncompatible() {
  return (
    <Slide>
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Why This Is Structurally Incompatible
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-electric-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-2xl mx-auto">
            Operations and sales require opposite mindsets
          </p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-2 gap-2xl">
          {/* Operations Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-bb-burgundy-500 to-bb-burgundy-600 rounded-2xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative bg-gradient-to-br from-bb-burgundy-500 to-bb-burgundy-600 rounded-2xl p-2xl shadow-2xl border-2 border-bb-burgundy-400">
              <div className="flex items-center gap-lg mb-xl">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <h2 className="font-display text-h2 font-bold text-white">Operations</h2>
              </div>

              <div className="space-y-lg text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">Mindset: Reactive</p>
                  <p className="text-sm text-bb-burgundy-50 leading-relaxed">Puts out fires, solves problems as they happen, handles exceptions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">Focus: Current customers</p>
                  <p className="text-sm text-bb-burgundy-50 leading-relaxed">Ensure loads run on time, carriers are happy, customers are served</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">Interruptions: Constant</p>
                  <p className="text-sm text-bb-burgundy-50 leading-relaxed">The phone rings, the email pings—urgent always wins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 rounded-2xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 rounded-2xl p-2xl shadow-2xl border-2 border-bb-emerald-400">
              <div className="flex items-center gap-lg mb-xl">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-4xl">📈</span>
                </div>
                <h2 className="font-display text-h2 font-bold text-white">Sales</h2>
              </div>

              <div className="space-y-lg text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">Mindset: Proactive</p>
                  <p className="text-sm text-bb-emerald-50 leading-relaxed">Builds funnels, plans outreach, creates momentum, thinks ahead</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">Focus: New customers</p>
                  <p className="text-sm text-bb-emerald-50 leading-relaxed">Prospect lists, cold calls, qualification, closing deals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">Interruptions: Death</p>
                  <p className="text-sm text-bb-emerald-50 leading-relaxed">Context switching destroys momentum and pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="bg-white rounded-2xl p-2xl shadow-lg border-2 border-bb-slate-200">
          <p className="text-lg text-bb-slate-700 leading-relaxed">
            <span className="font-bold text-bb-navy-900">The Problem:</span> When one person does both, the ringing phone always beats the prospect list. Urgent operations work interrupts proactive sales work. Result: Patrick becomes a firefighter who occasionally sells, not a salesman who occasionally handles ops.
          </p>
        </div>
      </div>
    </Slide>
  )
}
