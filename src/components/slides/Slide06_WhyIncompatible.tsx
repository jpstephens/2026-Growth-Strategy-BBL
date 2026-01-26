import Slide from '../layout/Slide'

export default function Slide06_WhyIncompatible() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            You Can't Be Great at Both
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-electric-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-2xl mx-auto">
            Operations and sales need different people. Here's why.
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
                  <p className="font-semibold mb-sm text-lg">When Things Go Wrong</p>
                  <p className="text-sm text-bb-burgundy-50 leading-relaxed">When urgent things happen (loads, carrier issues), they have to jump. They stop selling.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">The Reality</p>
                  <p className="text-sm text-bb-burgundy-50 leading-relaxed">Crises are predictable. The ringing phone and the email will always be there.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">The Cost</p>
                  <p className="text-sm text-bb-burgundy-50 leading-relaxed">Sales momentum dies. Prospect calls don't get made. Pipeline dries up.</p>
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
                  <p className="font-semibold mb-sm text-lg">What They Need</p>
                  <p className="text-sm text-bb-emerald-50 leading-relaxed">Hours of focus to build relationships and call prospects.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">What Kills It</p>
                  <p className="text-sm text-bb-emerald-50 leading-relaxed">Interruptions. Context switching destroys momentum.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-lg border border-white/20">
                  <p className="font-semibold mb-sm text-lg">The Result</p>
                  <p className="text-sm text-bb-emerald-50 leading-relaxed">No consistent outreach. Deals don't close. Growth stalls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="bg-white rounded-2xl p-2xl shadow-lg border-2 border-bb-slate-200">
          <p className="text-lg text-bb-slate-700 leading-relaxed">
            <span className="font-bold text-bb-navy-900">The Bottom Line:</span> You can't be great at both. Pick one. Right now, we're trying to do both with one person. That's the problem.
          </p>
        </div>
      </div>
    </Slide>
  )
}
