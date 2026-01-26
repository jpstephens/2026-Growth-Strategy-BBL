import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide24_CanPatrickAlone() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            Can One Person Hit $100K Monthly Profit?
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-700 max-w-2xl mx-auto">
            Let's do the math
          </p>
        </div>

        {/* Scenario Comparison */}
        <div className="grid grid-cols-2 gap-2xl">
          {/* Scenario 1: Misses Goal */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-bb-charcoal-600 to-bb-charcoal-500 rounded-2xl blur opacity-50" />
            <div className="relative bg-gradient-to-br from-bb-slate-800 to-bb-charcoal-800 rounded-2xl p-3xl shadow-2xl border-2 border-bb-charcoal-500">
              <div className="flex items-start justify-between mb-2xl">
                <div>
                  <div className="inline-block px-lg py-sm bg-bb-charcoal-500 rounded-full text-white font-bold text-sm mb-md">
                    One Person Alone
                  </div>
                  <h2 className="font-display text-h1 font-bold text-white">
                    Patrick Alone: Tops Out at $69K/month
                  </h2>
                </div>
              </div>

              <p className="text-lg text-bb-slate-300 mb-2xl leading-relaxed">
                Even with perfect execution, one person has limits.
              </p>

              <div className="grid grid-cols-2 gap-lg mb-2xl">
                <StatCard label="Calls/Week" value="200" size="xl" variant="dark" />
                <StatCard label="New Customers/Month" value="4-5" size="xl" variant="dark" />
                <StatCard label="Loads/Month" value="350" size="xl" variant="dark" />
                <StatCard label="Monthly Profit" value="$69K" size="xl" variant="dark" />
              </div>

              <div className="h-px bg-bb-slate-700 mb-2xl" />

              <p className="text-lg font-bold text-bb-charcoal-300">
                Short by $31K/month
              </p>
            </div>
          </div>

          {/* Scenario 2: Hits Goal */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-bb-forest-600 to-bb-forest-500 rounded-2xl blur opacity-50" />
            <div className="relative bg-gradient-to-br from-bb-slate-800 to-bb-charcoal-800 rounded-2xl p-3xl shadow-2xl border-2 border-bb-forest-500">
              <div className="flex items-start justify-between mb-2xl">
                <div>
                  <div className="inline-block px-lg py-sm bg-bb-forest-500 rounded-full text-white font-bold text-sm mb-md">
                    The Right Path
                  </div>
                  <h2 className="font-display text-h1 font-bold text-white">
                    Patrick + Two More Reps: $102K/month
                  </h2>
                </div>
              </div>

              <p className="text-lg text-bb-slate-300 mb-2xl leading-relaxed">
                Three people doing what Patrick does = we hit the goal.
              </p>

              <div className="grid grid-cols-2 gap-lg mb-2xl">
                <StatCard label="Calls/Week" value="400+" size="xl" variant="dark" highlight color="emerald" />
                <StatCard label="New Customers/Month" value="8-10" size="xl" variant="dark" highlight color="emerald" />
                <StatCard label="Loads/Month" value="480+" size="xl" variant="dark" highlight color="emerald" />
                <StatCard label="Monthly Profit" value="$102K" size="xl" variant="dark" highlight color="emerald" />
              </div>

              <div className="h-px bg-bb-slate-700 mb-2xl" />

              <p className="text-lg font-bold text-bb-forest-300">
                Exceeding by $2K/month
              </p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-bb-steel-500/10 to-bb-amber-500/10 rounded-2xl p-2xl shadow-lg border-2 border-bb-steel-400/30">
          <p className="text-lg text-bb-slate-100 leading-relaxed">
            <span className="font-bold text-white">Bottom Line:</span> We need to hire. But we hire only after Patrick proves the system works.
          </p>
        </div>
      </div>
    </Slide>
  )
}
