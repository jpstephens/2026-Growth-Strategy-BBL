import Slide from '../layout/Slide'

export default function Slide41_SuccessCriteria() {
  const milestones = [
    { timeline: 'Week 2', title: 'Patrick hits 200+ dials/week', isKey: true, color: 'amber' },
    { timeline: 'March 31', title: 'First 4-5 new customers close', isKey: true, color: 'amber' },
    { timeline: 'Q1', title: 'No major customer relationship breaks', color: 'slate' },
    { timeline: 'June 30', title: 'David runs ops flawlessly, Patrick sells full-time', color: 'steel' },
    { timeline: 'Sept 30', title: 'Rep #2 is ramping, team executing', color: 'forest' },
    { timeline: 'Dec 31', title: '65-70 customers, $100K monthly profit', isKey: true, color: 'forest' },
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    amber: { bg: 'bg-bb-amber-50', border: 'border-bb-amber-300', text: 'text-bb-amber-700' },
    steel: { bg: 'bg-bb-steel-50', border: 'border-bb-steel-300', text: 'text-bb-steel-700' },
    forest: { bg: 'bg-bb-forest-50', border: 'border-bb-forest-300', text: 'text-bb-forest-700' },
    slate: { bg: 'bg-bb-slate-50', border: 'border-bb-slate-200', text: 'text-bb-charcoal-700' },
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        <div className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">Clear Wins We Can Track</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Concrete milestones. No ambiguity.</p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-2 gap-md">
          {milestones.map((milestone, idx) => {
            const colors = colorMap[milestone.color]
            return (
              <div
                key={idx}
                className={`rounded-xl border-2 ${colors.border} ${colors.bg} p-md shadow-sm ${
                  milestone.isKey ? 'ring-2 ring-offset-1 ring-bb-amber-300' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-xs font-bold ${colors.text} uppercase tracking-wide mb-xs`}>{milestone.timeline}</p>
                    <p className="text-sm font-bold text-bb-charcoal-800">{milestone.title}</p>
                  </div>
                  {milestone.isKey && (
                    <span className="px-sm py-xs bg-bb-amber-500 text-white text-xs font-bold rounded-full">KEY</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Commitment */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-lg shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">The Commitment:</span>
            {' '}These milestones are how we know if the plan is working. We track obsessively. If we're off by 10%+, we adjust immediately.
          </p>
        </div>
      </div>
    </Slide>
  )
}
