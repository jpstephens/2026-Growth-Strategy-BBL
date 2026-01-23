import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide42_Commitment() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Our Commitment
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full" />
        </div>

        {/* What We Will Do */}
        <Callout variant="info" title="What We Will Do" size="lg">
          <div className="space-y-md">
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">✓</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Execute with discipline.</p>
                <p className="text-bb-slate-600">This plan is not optional—it's our roadmap. Every person owns their piece.</p>
              </div>
            </div>
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">✓</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Track everything.</p>
                <p className="text-bb-slate-600">Daily dials, weekly pipeline, monthly P&L. Visibility drives accountability.</p>
              </div>
            </div>
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">✓</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Adjust fast.</p>
                <p className="text-bb-slate-600">If we miss targets by 10%+, we troubleshoot and pivot immediately—no excuses.</p>
              </div>
            </div>
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">✓</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Support our team.</p>
                <p className="text-bb-slate-600">Clear roles. Protected time. Tools they need. Compensation tied to results.</p>
              </div>
            </div>
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">✓</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Protect margins.</p>
                <p className="text-bb-slate-600">We don't chase bad volume. Every customer must clear $200+ per load.</p>
              </div>
            </div>
          </div>
        </Callout>

        {/* What Success Looks Like */}
        <Callout variant="success" title="What Success Looks Like" size="lg">
          <p className="text-bb-slate-700 font-semibold mb-lg">December 31, 2026:</p>
          <div className="grid grid-cols-2 gap-lg">
            <div className="flex items-start gap-md">
              <span className="text-2xl">→</span>
              <div>
                <p className="font-semibold text-bb-navy-900">65-70 active customers</p>
                <p className="text-sm text-bb-slate-600">Distributed across 4 industries</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl">→</span>
              <div>
                <p className="font-semibold text-bb-navy-900">420+ loads per month</p>
                <p className="text-sm text-bb-slate-600">Consistent, predictable volume</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl">→</span>
              <div>
                <p className="font-semibold text-bb-navy-900">$87K monthly gross margin</p>
                <p className="text-sm text-bb-slate-600">Strong unit economics</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl">→</span>
              <div>
                <p className="font-semibold text-bb-navy-900">$69K+ monthly net profit</p>
                <p className="text-sm text-bb-slate-600">Exceeding the goal</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl">→</span>
              <div>
                <p className="font-semibold text-bb-navy-900">Sustainable team structure</p>
                <p className="text-sm text-bb-slate-600">Built to scale</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl">→</span>
              <div>
                <p className="font-semibold text-bb-navy-900">Predictable, repeatable system</p>
                <p className="text-sm text-bb-slate-600">Proven and documented</p>
              </div>
            </div>
          </div>
        </Callout>

        {/* Closing Statement */}
        <div className="bg-gradient-to-br from-bb-navy-600 to-bb-navy-700 rounded-2xl p-3xl shadow-2xl border-2 border-bb-navy-500 text-white text-center">
          <p className="text-2xl font-bold mb-lg leading-relaxed">
            This is possible. The data shows it. The plan is clear. Execution wins.
          </p>
          <div className="h-px bg-white/20 my-lg" />
          <p className="text-lg text-bb-slate-100 italic">
            Let's build BlackBridge into a real business. 2026 is our year.
          </p>
        </div>
      </div>
    </Slide>
  )
}
