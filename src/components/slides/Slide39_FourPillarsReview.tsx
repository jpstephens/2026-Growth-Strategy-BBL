import Slide from '../layout/Slide'

export default function Slide39_FourPillarsReview() {
  const pillars = [
    {
      name: 'Sales',
      color: 'bb-amber',
      icon: '💼',
      items: ['40+ dials/day per rep', '200+ dials/week', '4-5 new customers/month', 'Precise funnel tracking'],
      goal: '12+ customers/month with 3-4 reps',
    },
    {
      name: 'Operations',
      color: 'bb-forest',
      icon: '⚙️',
      items: ['>95% on-time pickup/delivery', '<2hr critical issue resolution', 'Direct carrier network >50%', 'Carrier tier system'],
      goal: 'Handle 600+ monthly loads',
    },
    {
      name: 'Team',
      color: 'bb-steel',
      icon: '👥',
      items: ['Start: 5 people (current)', 'Add Rep #2 in Q2', 'Add Ops Coordinator Q2-Q3', 'Add Rep #3 in Q3'],
      goal: '8-10 people by year end',
    },
    {
      name: 'Systems',
      color: 'bb-charcoal',
      icon: '📊',
      items: ['HubSpot pipeline tracking', 'Alvys load management', 'KPI dashboard (monthly)', 'Weekly + monthly reviews'],
      goal: 'Full visibility into business health',
    },
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string; light: string }> = {
    'bb-amber': { bg: 'bg-bb-amber-500', border: 'border-bb-amber-300', text: 'text-bb-amber-700', light: 'bg-bb-amber-50' },
    'bb-forest': { bg: 'bg-bb-forest-500', border: 'border-bb-forest-300', text: 'text-bb-forest-700', light: 'bg-bb-forest-50' },
    'bb-steel': { bg: 'bg-bb-steel-500', border: 'border-bb-steel-300', text: 'text-bb-steel-700', light: 'bg-bb-steel-50' },
    'bb-charcoal': { bg: 'bg-bb-charcoal-500', border: 'border-bb-charcoal-300', text: 'text-bb-charcoal-700', light: 'bg-bb-charcoal-50' },
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Four Pillars of Growth
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-amber-500 via-bb-steel-500 to-bb-forest-500 mx-auto rounded-full" />
        </div>

        {/* Four Pillar Grid - 2x2 compact */}
        <div className="grid grid-cols-2 gap-md">
          {pillars.map((pillar, idx) => {
            const colors = colorMap[pillar.color]
            return (
              <div key={idx} className={`rounded-xl border-2 ${colors.border} ${colors.light} p-md shadow-sm`}>
                <div className="flex items-center gap-sm mb-sm">
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center text-white text-base`}>
                    {pillar.icon}
                  </div>
                  <h3 className={`text-base font-bold ${colors.text}`}>{pillar.name}</h3>
                </div>
                <ul className="space-y-xs mb-sm">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-xs">
                      <span className={`${colors.text} font-bold text-xs mt-0.5`}>•</span>
                      <span className="text-xs text-bb-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-sm border-t border-bb-slate-200">
                  <p className={`text-xs font-bold ${colors.text}`}>Goal: {pillar.goal}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Interconnection Message */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg text-center">
          <p className="text-base text-white">
            These four pillars are interconnected. <span className="font-bold text-bb-amber-200">Strong sales needs strong operations.</span>{' '}
            Strong operations needs strong team. <span className="font-bold text-bb-amber-200">Everything needs visibility through systems.</span>
          </p>
        </div>
      </div>
    </Slide>
  )
}
