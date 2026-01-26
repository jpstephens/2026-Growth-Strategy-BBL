import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide41_SuccessCriteria() {
  const milestones = [
    {
      timeline: 'Week 2',
      title: 'Patrick hits 200+ dials/week',
      color: 'electric',
      isKey: true,
    },
    {
      timeline: 'By March 31',
      title: 'First 4-5 new customers close',
      color: 'electric',
      isKey: true,
    },
    {
      timeline: 'All Quarter',
      title: 'No major customer relationship breaks (Clearway, Frontier stable)',
      color: 'slate',
    },
    {
      timeline: 'By June 30',
      title: 'David runs ops flawlessly, Patrick sells full-time',
      color: 'sunset',
    },
    {
      timeline: 'By September 30',
      title: 'Rep #2 is ramping, team is executing',
      color: 'emerald',
    },
    {
      timeline: 'By December 31',
      title: '65-70 customers, $100K monthly profit',
      color: 'navy',
      isKey: true,
    },
  ]

  const colorStyles = {
    electric: 'border-bb-electric-400 bg-bb-electric-50',
    sunset: 'border-bb-sunset-400 bg-bb-sunset-50',
    emerald: 'border-bb-emerald-400 bg-bb-emerald-50',
    navy: 'border-bb-navy-400 bg-bb-navy-50',
    slate: 'border-bb-slate-300 bg-bb-slate-50',
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Clear Wins We Can Track</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Concrete milestones. No ambiguity.</p>

        <div className="space-y-md">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border-2 ${colorStyles[milestone.color as keyof typeof colorStyles]} shadow-lg p-lg ${
                milestone.isKey ? 'ring-2 ring-offset-2 ring-bb-electric-300' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-lg">
                <div className="flex-1">
                  <p className="text-sm font-bold text-bb-slate-600 uppercase tracking-wide mb-xs">{milestone.timeline}</p>
                  <p className="text-lg font-bold text-bb-navy-900">{milestone.title}</p>
                </div>
                {milestone.isKey && (
                  <div className="shrink-0 px-lg py-sm bg-bb-electric-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                    KEY WIN
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Callout variant="critical" title="The Commitment" className="mt-2xl">
          <p>
            These milestones are how we know if the plan is working. We track them obsessively. If we're off by 10%+, we adjust immediately. No excuses. No delay. This is how we win.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
