import Slide from '../layout/Slide'

export default function Slide12_Roadmap() {
  const quarters = [
    {
      quarter: 'Q1',
      title: 'Prove It',
      months: 'Jan-Mar',
      color: 'amber',
      items: ['Patrick runs new system', '4-5 new customers?'],
    },
    {
      quarter: 'Q2',
      title: 'Hire Rep #2',
      months: 'Apr-Jun',
      color: 'steel',
      items: ['If Patrick hits targets', 'Two people selling'],
    },
    {
      quarter: 'Q3',
      title: 'Scale',
      months: 'Jul-Sep',
      color: 'forest',
      items: ['Two reps crushing it', 'Hire Rep #3, ops grows'],
    },
    {
      quarter: 'Q4',
      title: 'Win',
      months: 'Oct-Dec',
      color: 'charcoal',
      items: ['4 sales reps', '65-70 customers', '$100K profit'],
      isGoal: true,
    },
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    amber: { bg: 'bg-bb-amber-50', border: 'border-bb-amber-300', text: 'text-bb-amber-700', badge: 'bg-bb-amber-500' },
    steel: { bg: 'bg-bb-steel-50', border: 'border-bb-steel-300', text: 'text-bb-steel-700', badge: 'bg-bb-steel-500' },
    forest: { bg: 'bg-bb-forest-50', border: 'border-bb-forest-300', text: 'text-bb-forest-700', badge: 'bg-bb-forest-500' },
    charcoal: { bg: 'bg-bb-charcoal-50', border: 'border-bb-charcoal-300', text: 'text-bb-charcoal-700', badge: 'bg-bb-charcoal-500' },
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            2026 Roadmap
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-amber-500 via-bb-steel-500 to-bb-forest-500 mx-auto rounded-full" />
        </div>

        {/* Quarters Grid - 4 columns */}
        <div className="grid grid-cols-4 gap-md">
          {quarters.map((q, idx) => {
            const colors = colorMap[q.color]
            return (
              <div
                key={idx}
                className={`rounded-xl border-2 ${colors.border} ${colors.bg} p-md shadow-sm ${
                  q.isGoal ? 'ring-2 ring-offset-2 ring-bb-forest-400' : ''
                }`}
              >
                <div className="flex items-center gap-sm mb-sm">
                  <div className={`${colors.badge} text-white text-lg font-bold rounded-lg w-10 h-10 flex items-center justify-center`}>
                    {q.quarter}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${colors.text}`}>{q.title}</p>
                    <p className="text-xs text-bb-charcoal-500">{q.months}</p>
                  </div>
                </div>
                <ul className="space-y-xs">
                  {q.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-xs">
                      <span className={`${colors.text} font-bold text-xs mt-0.5`}>→</span>
                      <span className={`text-xs ${q.isGoal ? 'font-semibold text-bb-charcoal-800' : 'text-bb-charcoal-600'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {q.isGoal && (
                  <div className="mt-sm pt-sm border-t border-bb-charcoal-200">
                    <p className="text-xs font-bold text-bb-forest-600 text-center">GOAL ACHIEVED</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Conditional Hiring Path */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">Conditional Hiring Path</h3>
          <div className="flex items-center justify-center gap-sm">
            <div className="text-center p-sm bg-bb-amber-50 rounded-lg border border-bb-amber-200 flex-1">
              <p className="text-xs font-bold text-bb-amber-700">Q1: Patrick Proves</p>
              <p className="text-xs text-bb-charcoal-500">Hits 4-5 customers</p>
            </div>
            <span className="text-bb-charcoal-400 font-bold">→</span>
            <div className="text-center p-sm bg-bb-steel-50 rounded-lg border border-bb-steel-200 flex-1">
              <p className="text-xs font-bold text-bb-steel-700">Q2: Rep #2 Hired</p>
              <p className="text-xs text-bb-charcoal-500">Double capacity</p>
            </div>
            <span className="text-bb-charcoal-400 font-bold">→</span>
            <div className="text-center p-sm bg-bb-forest-50 rounded-lg border border-bb-forest-200 flex-1">
              <p className="text-xs font-bold text-bb-forest-700">Q3: Rep #3 Hired</p>
              <p className="text-xs text-bb-charcoal-500">Scale continues</p>
            </div>
            <span className="text-bb-charcoal-400 font-bold">→</span>
            <div className="text-center p-sm bg-bb-charcoal-50 rounded-lg border border-bb-charcoal-200 flex-1">
              <p className="text-xs font-bold text-bb-charcoal-700">Q4: Rep #4</p>
              <p className="text-xs text-bb-charcoal-500">Full team</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-lg shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Each quarter builds on the last.</span>
            {' '}Miss Q1? We adjust. But we don't stop. The goal is $100K/month profit by December.
          </p>
        </div>
      </div>
    </Slide>
  )
}
