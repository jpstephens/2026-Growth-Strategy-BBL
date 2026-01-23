import Slide from '../layout/Slide'

export default function Slide16_ThreeSolutionChanges() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Three Structural Changes Fix This
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-2xl mx-auto">
            Here's exactly how we solve the problem
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-xl">
          {/* Change 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gradient-to-br from-bb-electric-50 to-white rounded-2xl p-2xl shadow-lg border-2 border-bb-electric-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 text-white text-4xl font-black mb-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-bb-navy-900 mb-lg">Free Patrick From Operations</h3>
                <p className="text-sm text-bb-slate-600 mb-lg leading-relaxed">
                  David owns 100% of operations for existing accounts. Patrick sells and only sells. No exceptions.
                </p>
                <div className="inline-block px-lg py-sm bg-bb-electric-500 text-white font-bold text-xs rounded-full">
                  SOLVES: Role confusion
                </div>
              </div>
            </div>
          </div>

          {/* Change 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gradient-to-br from-bb-sunset-50 to-white rounded-2xl p-2xl shadow-lg border-2 border-bb-sunset-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 text-white text-4xl font-black mb-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-bb-navy-900 mb-lg">Enforce Sales Activity</h3>
                <p className="text-sm text-bb-slate-600 mb-lg leading-relaxed">
                  200+ dials/week, measured daily, non-negotiable. Protected calling blocks. Activity generates results.
                </p>
                <div className="inline-block px-lg py-sm bg-bb-sunset-500 text-white font-bold text-xs rounded-full">
                  SOLVES: Low call volume
                </div>
              </div>
            </div>
          </div>

          {/* Change 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gradient-to-br from-bb-emerald-50 to-white rounded-2xl p-2xl shadow-lg border-2 border-bb-emerald-200 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 text-white text-4xl font-black mb-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-bb-navy-900 mb-lg">Cold Email Multiplier</h3>
                <p className="text-sm text-bb-slate-600 mb-lg leading-relaxed">
                  Instantly.ai warms 5,000 leads. Patrick calls warm prospects. 4x conversion vs. cold calling alone.
                </p>
                <div className="inline-block px-lg py-sm bg-bb-emerald-500 text-white font-bold text-xs rounded-full">
                  SOLVES: Low conversion
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-bb-navy-600 to-bb-navy-700 rounded-2xl p-2xl shadow-xl border-2 border-bb-navy-500 text-white">
          <p className="text-lg text-center leading-relaxed">
            <span className="font-bold">Impact:</span> These changes move Patrick from 0-50 calls/week to 200+ calls/week, with warm leads instead of cold calls. That's the difference between 1 customer/month and 4-5 customers/month.
          </p>
        </div>
      </div>
    </Slide>
  )
}
