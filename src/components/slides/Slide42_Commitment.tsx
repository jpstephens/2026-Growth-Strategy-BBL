import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide42_Commitment() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Here's What We're Committing To
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full" />
        </div>

        {/* What We Will Do */}
        <Callout variant="info" title="Personal Commitments" size="lg">
          <div className="space-y-md">
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">→</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Patrick: 200+ calls/week, no exceptions</p>
                <p className="text-bb-slate-600">This is the foundation of everything.</p>
              </div>
            </div>
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">→</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">David: Operations runs at 95%+ on-time, zero excuses</p>
                <p className="text-bb-slate-600">Patrick can't sell if operations doesn't execute.</p>
              </div>
            </div>
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">→</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Everyone: Daily tracking, weekly reviews, monthly truth-telling</p>
                <p className="text-bb-slate-600">Visibility drives accountability and fast pivots.</p>
              </div>
            </div>
            <div className="flex items-start gap-lg">
              <div className="w-10 h-10 rounded-full bg-bb-electric-500 text-white flex items-center justify-center shrink-0 font-bold">→</div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs">Leadership: We pivot fast if numbers don't hit</p>
                <p className="text-bb-slate-600">If we're off by 10%+, we adjust immediately. No excuses, no delay.</p>
              </div>
            </div>
          </div>
        </Callout>

        {/* What Success Looks Like */}
        <Callout variant="success" title="By December 31: Here's What We Win" size="lg">
          <div className="grid grid-cols-2 gap-lg mb-lg">
            <div className="flex items-start gap-md">
              <span className="text-2xl font-bold text-bb-emerald-600">•</span>
              <div>
                <p className="font-semibold text-bb-navy-900">65-70 customers</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl font-bold text-bb-emerald-600">•</span>
              <div>
                <p className="font-semibold text-bb-navy-900">$100K monthly profit</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl font-bold text-bb-emerald-600">•</span>
              <div>
                <p className="font-semibold text-bb-navy-900">Sustainable team</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <span className="text-2xl font-bold text-bb-emerald-600">•</span>
              <div>
                <p className="font-semibold text-bb-navy-900">Proven system</p>
              </div>
            </div>
          </div>
          <p className="text-bb-slate-700 italic">That's the entire goal.</p>
        </Callout>

        {/* Closing Statement */}
        <div className="bg-gradient-to-br from-bb-navy-600 to-bb-navy-700 rounded-2xl p-3xl shadow-2xl border-2 border-bb-navy-500 text-white text-center">
          <p className="text-2xl font-bold mb-lg leading-relaxed">
            This is doable. The math works. The systems are built. It's on us to execute.
          </p>
          <div className="h-px bg-white/20 my-lg" />
          <p className="text-lg text-bb-slate-100 italic">
            We do this together. 2026 is our year.
          </p>
        </div>
      </div>
    </Slide>
  )
}
