import Slide from '../layout/Slide'

const hiringTriggers = [
  {
    position: 'Sales Rep #2',
    trigger: 'Patrick closes 4+ accounts/month for 2 months',
    timeline: 'Q2',
    cost: '$6K/mo',
    color: 'amber',
  },
  {
    position: 'Ops Coordinator',
    trigger: 'David managing 120+ loads/month',
    timeline: 'Q2-Q3',
    cost: '$3.5K/mo',
    color: 'steel',
  },
  {
    position: 'Sales Rep #3',
    trigger: 'Rep #2 reaches 3+ accounts/month',
    timeline: 'Q3',
    cost: '$6K/mo',
    color: 'forest',
  },
  {
    position: 'Sales Rep #4',
    trigger: 'Team hitting 12+ combined accounts/month',
    timeline: 'Q4',
    cost: '$6K/mo',
    color: 'charcoal',
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  amber: { bg: 'bg-bb-amber-50', border: 'border-bb-amber-300', text: 'text-bb-amber-700' },
  steel: { bg: 'bg-bb-steel-50', border: 'border-bb-steel-300', text: 'text-bb-steel-700' },
  forest: { bg: 'bg-bb-forest-50', border: 'border-bb-forest-300', text: 'text-bb-forest-700' },
  charcoal: { bg: 'bg-bb-charcoal-50', border: 'border-bb-charcoal-200', text: 'text-bb-charcoal-700' },
}

export default function Slide24_CanPatrickAlone() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Hero Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Scaling Triggers
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-slate-700">Can one person hit $100K? No—and that's okay. We hire when metrics prove we're ready.</p>
        </div>

        {/* The Math - Compact */}
        <div className="grid grid-cols-2 gap-md">
          {/* Patrick Alone */}
          <div className="bg-gradient-to-br from-bb-slate-800 to-bb-charcoal-800 rounded-xl p-md shadow-lg border-2 border-bb-charcoal-500">
            <span className="px-sm py-xs bg-bb-charcoal-500 rounded-full text-white font-bold text-xs">
              Patrick Alone
            </span>
            <h2 className="text-lg font-bold text-white mt-sm mb-xs">
              Tops Out at $69K/month
            </h2>
            <div className="grid grid-cols-2 gap-xs mb-sm">
              <div className="bg-bb-charcoal-700 rounded-lg p-xs text-center">
                <p className="text-base font-bold text-white">200</p>
                <p className="text-[10px] text-bb-slate-400">Calls/Week</p>
              </div>
              <div className="bg-bb-charcoal-700 rounded-lg p-xs text-center">
                <p className="text-base font-bold text-white">4-5</p>
                <p className="text-[10px] text-bb-slate-400">Customers/Mo</p>
              </div>
            </div>
            <p className="text-sm font-bold text-bb-charcoal-300 border-t border-bb-slate-700 pt-xs">Short by $31K/month</p>
          </div>

          {/* With Team */}
          <div className="bg-gradient-to-br from-bb-slate-800 to-bb-charcoal-800 rounded-xl p-md shadow-lg border-2 border-bb-forest-500">
            <span className="px-sm py-xs bg-bb-forest-500 rounded-full text-white font-bold text-xs">
              Patrick + 2 Reps
            </span>
            <h2 className="text-lg font-bold text-white mt-sm mb-xs">
              Hits $102K/month Target
            </h2>
            <div className="grid grid-cols-2 gap-xs mb-sm">
              <div className="bg-bb-forest-900/50 rounded-lg p-xs text-center border border-bb-forest-500">
                <p className="text-base font-bold text-bb-forest-300">400+</p>
                <p className="text-[10px] text-bb-slate-400">Calls/Week</p>
              </div>
              <div className="bg-bb-forest-900/50 rounded-lg p-xs text-center border border-bb-forest-500">
                <p className="text-base font-bold text-bb-forest-300">8-10</p>
                <p className="text-[10px] text-bb-slate-400">Customers/Mo</p>
              </div>
            </div>
            <p className="text-sm font-bold text-bb-forest-300 border-t border-bb-slate-700 pt-xs">Exceeding by $2K/month</p>
          </div>
        </div>

        {/* Hiring Triggers - Compact Grid */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Hiring Triggers (Performance-Based)</h3>
          <div className="grid grid-cols-4 gap-sm">
            {hiringTriggers.map((hire, idx) => {
              const colors = colorMap[hire.color]
              return (
                <div key={idx} className={`${colors.bg} rounded-lg border ${colors.border} p-sm`}>
                  <div className="flex items-center justify-between mb-xs">
                    <p className={`text-xs font-bold ${colors.text}`}>{hire.position}</p>
                    <span className="text-[10px] text-bb-charcoal-500">{hire.timeline}</span>
                  </div>
                  <p className="text-xs text-bb-charcoal-700 mb-xs">{hire.trigger}</p>
                  <p className="text-xs font-semibold text-bb-charcoal-600">{hire.cost}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-white text-center">
            <span className="font-bold text-bb-amber-200">No speculative hiring.</span> Patrick proves the system works first. Then we replicate.
            <span className="text-bb-amber-200"> Each hire is triggered by proven performance.</span>
          </p>
        </div>
      </div>
    </Slide>
  )
}
