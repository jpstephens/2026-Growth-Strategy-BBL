import Slide from '../layout/Slide'

export default function Slide16_ThreeSolutionChanges() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Here's Exactly What We're Doing
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-2xl mx-auto">
            Three moves that move the needle
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
                <h3 className="text-xl font-bold text-bb-navy-900 mb-lg">Free Patrick To Sell</h3>
                <p className="text-sm text-bb-slate-600 mb-lg leading-relaxed">
                  David takes 100% of operations. Patrick sells and only sells.
                </p>
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
                <h3 className="text-xl font-bold text-bb-navy-900 mb-lg">200+ Calls Per Week</h3>
                <p className="text-sm text-bb-slate-600 mb-lg leading-relaxed">
                  40 dials a day. No interruptions. This is how you build a pipeline.
                </p>
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
                <h3 className="text-xl font-bold text-bb-navy-900 mb-lg">Warm Up The List</h3>
                <p className="text-sm text-bb-slate-600 mb-lg leading-relaxed">
                  5,000 warm leads from email. Patrick calls people who are already interested. 4x better than cold calling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-bb-navy-600 to-bb-navy-700 rounded-2xl p-2xl shadow-xl border-2 border-bb-navy-500 text-white">
          <p className="text-lg text-center leading-relaxed">
            <span className="font-bold">The Result:</span> These three things move Patrick from 0 sales/month to 4-5 sales/month. That's the whole game.
          </p>
        </div>
      </div>
    </Slide>
  )
}
