import Slide from '../layout/Slide'

const hires = [
  {
    position: 'Sales Rep #2',
    trigger: 'Patrick closes 4+ accounts/month for 2 consecutive months',
    proves: 'Sales system works and can be replicated',
    timeline: 'Q2 (Apr-May)',
    cost: '$6K/mo',
    color: 'amber',
  },
  {
    position: 'Ops Coordinator',
    trigger: 'David managing 120+ loads/month',
    proves: 'Volume requires dedicated support',
    timeline: 'Q2-Q3',
    cost: '$3.5K/mo',
    color: 'steel',
  },
  {
    position: 'Sales Rep #3',
    trigger: 'Rep #2 reaches 3+ accounts/month consistently',
    proves: 'System scales beyond one person',
    timeline: 'Q3 (Aug)',
    cost: '$6K/mo',
    color: 'forest',
  },
  {
    position: 'Sales Rep #4',
    trigger: 'Team hitting 12+ combined accounts/month',
    proves: 'Sustained scale, final push to target',
    timeline: 'Q4 (if needed)',
    cost: '$6K/mo',
    color: 'charcoal',
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  amber: { bg: 'bg-bb-amber-50', border: 'border-bb-amber-300', text: 'text-bb-amber-700', badge: 'bg-bb-amber-500' },
  steel: { bg: 'bg-bb-steel-50', border: 'border-bb-steel-300', text: 'text-bb-steel-700', badge: 'bg-bb-steel-500' },
  forest: { bg: 'bg-bb-forest-50', border: 'border-bb-forest-300', text: 'text-bb-forest-700', badge: 'bg-bb-forest-500' },
  charcoal: { bg: 'bg-bb-charcoal-50', border: 'border-bb-charcoal-200', text: 'text-bb-charcoal-700', badge: 'bg-bb-charcoal-500' },
}

export default function Slide_HiringTriggers() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">Hiring Triggers</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">We hire when metrics prove we're ready, not before</p>
        </div>

        {/* Hiring Cards - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-md">
          {hires.map((hire, idx) => {
            const colors = colorMap[hire.color]
            return (
              <div key={idx} className={`${colors.bg} rounded-xl border-2 ${colors.border} p-md shadow-sm`}>
                <div className="flex items-start justify-between mb-sm">
                  <div className="flex items-center gap-sm">
                    <div className={`w-10 h-10 ${colors.badge} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-bb-charcoal-800">{hire.position}</p>
                      <p className={`text-xs font-semibold ${colors.text}`}>{hire.timeline}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-bb-charcoal-700 bg-white px-sm py-xs rounded">{hire.cost}</span>
                </div>

                <div className="space-y-xs">
                  <div className="bg-white rounded-lg p-sm border border-bb-slate-200">
                    <p className="text-xs font-semibold text-bb-charcoal-500 uppercase mb-xs">Trigger</p>
                    <p className="text-sm text-bb-charcoal-800 font-medium">{hire.trigger}</p>
                  </div>
                  <div className="bg-white rounded-lg p-sm border border-bb-slate-200">
                    <p className="text-xs font-semibold text-bb-charcoal-500 uppercase mb-xs">What It Proves</p>
                    <p className="text-xs text-bb-charcoal-700">{hire.proves}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Key Principle */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">No speculative hiring.</span> Each hire is triggered by proven performance. We invest in what's working.
          </p>
        </div>
      </div>
    </Slide>
  )
}
