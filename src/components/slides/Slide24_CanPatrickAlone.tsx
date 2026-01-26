import Slide from '../layout/Slide'

export default function Slide24_CanPatrickAlone() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Hero Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Can One Person Hit $100K Monthly Profit?
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-slate-700">Let's do the math</p>
        </div>

        {/* Scenario Comparison */}
        <div className="grid grid-cols-2 gap-lg">
          {/* Scenario 1: Misses Goal */}
          <div className="bg-gradient-to-br from-bb-slate-800 to-bb-charcoal-800 rounded-xl p-md shadow-lg border-2 border-bb-charcoal-500">
            <div className="mb-sm">
              <span className="px-sm py-xs bg-bb-charcoal-500 rounded-full text-white font-bold text-xs">
                One Person Alone
              </span>
            </div>
            <h2 className="text-lg font-bold text-white mb-sm">
              Patrick Alone: Tops Out at $69K/month
            </h2>
            <p className="text-sm text-bb-slate-300 mb-md">
              Even with perfect execution, one person has limits.
            </p>
            <div className="grid grid-cols-2 gap-sm mb-md">
              <div className="bg-bb-charcoal-700 rounded-lg p-sm text-center">
                <p className="text-lg font-bold text-white">200</p>
                <p className="text-xs text-bb-slate-400">Calls/Week</p>
              </div>
              <div className="bg-bb-charcoal-700 rounded-lg p-sm text-center">
                <p className="text-lg font-bold text-white">4-5</p>
                <p className="text-xs text-bb-slate-400">New Customers/Mo</p>
              </div>
              <div className="bg-bb-charcoal-700 rounded-lg p-sm text-center">
                <p className="text-lg font-bold text-white">350</p>
                <p className="text-xs text-bb-slate-400">Loads/Month</p>
              </div>
              <div className="bg-bb-charcoal-700 rounded-lg p-sm text-center">
                <p className="text-lg font-bold text-white">$69K</p>
                <p className="text-xs text-bb-slate-400">Monthly Profit</p>
              </div>
            </div>
            <div className="border-t border-bb-slate-700 pt-sm">
              <p className="text-sm font-bold text-bb-charcoal-300">Short by $31K/month</p>
            </div>
          </div>

          {/* Scenario 2: Hits Goal */}
          <div className="bg-gradient-to-br from-bb-slate-800 to-bb-charcoal-800 rounded-xl p-md shadow-lg border-2 border-bb-forest-500">
            <div className="mb-sm">
              <span className="px-sm py-xs bg-bb-forest-500 rounded-full text-white font-bold text-xs">
                The Right Path
              </span>
            </div>
            <h2 className="text-lg font-bold text-white mb-sm">
              Patrick + Two More Reps: $102K/month
            </h2>
            <p className="text-sm text-bb-slate-300 mb-md">
              Three people doing what Patrick does = we hit the goal.
            </p>
            <div className="grid grid-cols-2 gap-sm mb-md">
              <div className="bg-bb-forest-900/50 rounded-lg p-sm text-center border border-bb-forest-500">
                <p className="text-lg font-bold text-bb-forest-300">400+</p>
                <p className="text-xs text-bb-slate-400">Calls/Week</p>
              </div>
              <div className="bg-bb-forest-900/50 rounded-lg p-sm text-center border border-bb-forest-500">
                <p className="text-lg font-bold text-bb-forest-300">8-10</p>
                <p className="text-xs text-bb-slate-400">New Customers/Mo</p>
              </div>
              <div className="bg-bb-forest-900/50 rounded-lg p-sm text-center border border-bb-forest-500">
                <p className="text-lg font-bold text-bb-forest-300">480+</p>
                <p className="text-xs text-bb-slate-400">Loads/Month</p>
              </div>
              <div className="bg-bb-forest-900/50 rounded-lg p-sm text-center border border-bb-forest-500">
                <p className="text-lg font-bold text-bb-forest-300">$102K</p>
                <p className="text-xs text-bb-slate-400">Monthly Profit</p>
              </div>
            </div>
            <div className="border-t border-bb-slate-700 pt-sm">
              <p className="text-sm font-bold text-bb-forest-300">Exceeding by $2K/month</p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-white text-center">
            <span className="font-bold text-bb-amber-200">Bottom Line:</span> We need to hire. But we hire only after Patrick proves the system works.
          </p>
        </div>
      </div>
    </Slide>
  )
}
