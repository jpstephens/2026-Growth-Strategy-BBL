import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide24_CanPatrickAlone() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Can Patrick Alone Hit $100K Monthly Profit?
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-700 max-w-2xl mx-auto">
            Let's do the math
          </p>
        </div>

        {/* Scenario Comparison */}
        <div className="grid grid-cols-2 gap-2xl">
          {/* Scenario 1: Misses Goal */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-bb-burgundy-600 to-bb-burgundy-500 rounded-2xl blur opacity-50" />
            <div className="relative bg-gradient-to-br from-bb-slate-800 to-bb-navy-900 rounded-2xl p-3xl shadow-2xl border-2 border-bb-burgundy-500">
              <div className="flex items-start justify-between mb-2xl">
                <div>
                  <div className="inline-block px-lg py-sm bg-bb-burgundy-500 rounded-full text-white font-bold text-sm mb-md">
                    ❌ MISSES GOAL
                  </div>
                  <h2 className="font-display text-h1 font-bold text-white">
                    Scenario 1: Patrick Alone
                  </h2>
                </div>
              </div>

              <p className="text-lg text-bb-slate-300 mb-2xl leading-relaxed">
                Even with the three structural changes, Patrick has limits. One person can only make so many calls, close so many deals, and manage so many accounts.
              </p>

              <div className="grid grid-cols-2 gap-lg mb-2xl">
                <StatCard label="Calls/Week" value="200" size="xl" variant="dark" />
                <StatCard label="New Customers/Month" value="4-5" size="xl" variant="dark" />
                <StatCard label="Loads/Month" value="350" size="xl" variant="dark" />
                <StatCard label="Monthly Profit" value="$69K" size="xl" variant="dark" />
              </div>

              <div className="h-px bg-bb-slate-700 mb-2xl" />

              <p className="text-lg font-bold text-bb-burgundy-300">
                Missing by $31K/month
              </p>
            </div>
          </div>

          {/* Scenario 2: Hits Goal */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-bb-emerald-600 to-bb-emerald-500 rounded-2xl blur opacity-50" />
            <div className="relative bg-gradient-to-br from-bb-slate-800 to-bb-navy-900 rounded-2xl p-3xl shadow-2xl border-2 border-bb-emerald-500">
              <div className="flex items-start justify-between mb-2xl">
                <div>
                  <div className="inline-block px-lg py-sm bg-bb-emerald-500 rounded-full text-white font-bold text-sm mb-md">
                    ✅ EXCEEDS GOAL
                  </div>
                  <h2 className="font-display text-h1 font-bold text-white">
                    Scenario 2: With Strategic Hires
                  </h2>
                </div>
              </div>

              <p className="text-lg text-bb-slate-300 mb-2xl leading-relaxed">
                We hire Rep #2 when Patrick proves the system works (4+ customers/month for 2 consecutive months). Then Rep #3 if needed. Ops coordinator supports volume.
              </p>

              <div className="grid grid-cols-2 gap-lg mb-2xl">
                <StatCard label="Calls/Week" value="400+" size="xl" variant="dark" highlight color="emerald" />
                <StatCard label="New Customers/Month" value="8-10" size="xl" variant="dark" highlight color="emerald" />
                <StatCard label="Loads/Month" value="480+" size="xl" variant="dark" highlight color="emerald" />
                <StatCard label="Monthly Profit" value="$102K" size="xl" variant="dark" highlight color="emerald" />
              </div>

              <div className="h-px bg-bb-slate-700 mb-2xl" />

              <p className="text-lg font-bold text-bb-emerald-300">
                Exceeding by $2K/month
              </p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-bb-electric-500/10 to-bb-sunset-500/10 rounded-2xl p-2xl shadow-lg border-2 border-bb-electric-400/30">
          <p className="text-lg text-bb-slate-100 leading-relaxed">
            <span className="font-bold text-white">Key Insight:</span> The system Patrick builds in Q1 is repeatable. Once we prove it works, we scale it by adding salespeople. We don't hire based on projection—we hire based on proven results.
          </p>
        </div>
      </div>
    </Slide>
  )
}
