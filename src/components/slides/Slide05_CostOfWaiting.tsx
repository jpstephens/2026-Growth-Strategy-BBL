import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide05_CostOfWaiting() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            The Cost of Waiting
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-emerald-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto">
            Early customer acquisition has massive impact. Timing matters.
          </p>
        </div>

        {/* Scenario Comparison */}
        <div className="grid grid-cols-2 gap-2xl">
          {/* Current Pace - Burgundy/Negative */}
          <div className="rounded-2xl border-2 border-bb-burgundy-400 bg-gradient-to-br from-bb-burgundy-50 to-white p-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-burgundy-700 mb-lg">
              End of 2026: Current Pace
            </h3>
            <p className="text-lg text-bb-slate-600 mb-xl font-semibold">
              75 loads/month (no changes)
            </p>
            <div className="grid grid-cols-3 gap-lg mb-xl">
              <StatCard label="Monthly Profit" value="$12K" size="xl" variant="light" color="navy" />
              <StatCard label="Customers" value="7-9" size="xl" variant="light" color="navy" />
              <StatCard label="Annual Profit" value="$144K" size="xl" variant="light" color="navy" />
            </div>
          </div>

          {/* With Strategy - Emerald/Positive */}
          <div className="rounded-2xl border-2 border-bb-emerald-400 bg-gradient-to-br from-bb-emerald-50 to-white p-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-emerald-700 mb-lg">
              End of 2026: With This Strategy
            </h3>
            <p className="text-lg text-bb-slate-600 mb-xl font-semibold">
              420 loads/month (proven system)
            </p>
            <div className="grid grid-cols-3 gap-lg mb-xl">
              <StatCard label="Monthly Profit" value="$87K" size="xl" variant="light" highlight color="emerald" />
              <StatCard label="Customers" value="65-70" size="xl" variant="light" highlight color="emerald" />
              <StatCard label="Annual Profit" value="$1.04M" size="xl" variant="light" highlight color="emerald" />
            </div>
          </div>
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-bb-burgundy-500 to-bb-sunset-500 rounded-2xl p-3xl shadow-2xl border-2 border-bb-sunset-400 text-white text-center">
          <p className="text-3xl font-bold mb-lg">
            Delta: $900K in annual profit
          </p>
          <p className="text-xl opacity-95 leading-relaxed">
            Every month we wait, we miss <span className="font-bold text-bb-sunset-200">$75K</span> in unrealized profit.
          </p>
        </div>
      </div>
    </Slide>
  )
}
