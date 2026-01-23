import Slide from '../layout/Slide'

export default function Slide12_Roadmap() {
  const quarters = [
    {
      quarter: 'Q1',
      months: 'Jan - Mar',
      color: 'electric',
      bgFrom: 'from-bb-electric-50',
      border: 'border-bb-electric-400',
      items: [
        'Establish sales system (HubSpot pipeline, CRM discipline)',
        'Hire/empower first dedicated sales rep',
        'Add 12-15 new customers',
        'Reach 17-20 active customers total',
      ],
    },
    {
      quarter: 'Q2',
      months: 'Apr - Jun',
      color: 'sunset',
      bgFrom: 'from-bb-sunset-50',
      border: 'border-bb-sunset-400',
      items: [
        'Build carrier network in high-margin lanes',
        'Refine pricing model (margin target: $210+/load)',
        'Add 15-18 new customers',
        'Reach 32-35 active customers total',
      ],
    },
    {
      quarter: 'Q3',
      months: 'Jul - Sep',
      color: 'emerald',
      bgFrom: 'from-bb-emerald-50',
      border: 'border-bb-emerald-400',
      items: [
        'Scale sales (consider 2nd rep)',
        'Add 18-20 new customers',
        'Reach 50-55 total',
      ],
    },
    {
      quarter: 'Q4',
      months: 'Oct - Dec',
      color: 'navy',
      bgFrom: 'from-bb-navy-50',
      border: 'border-bb-navy-400',
      items: [
        'Push to $100K monthly profit',
        'Add 18-20 new customers',
        'Reach 65-70 total customers',
      ],
    },
  ]

  const colorMap = {
    electric: { text: 'text-bb-electric-700', arrow: 'text-bb-electric-500', badge: 'bg-bb-electric-100 text-bb-electric-700' },
    sunset: { text: 'text-bb-sunset-700', arrow: 'text-bb-sunset-500', badge: 'bg-bb-sunset-100 text-bb-sunset-700' },
    emerald: { text: 'text-bb-emerald-700', arrow: 'text-bb-emerald-500', badge: 'bg-bb-emerald-100 text-bb-emerald-700' },
    navy: { text: 'text-bb-navy-700', arrow: 'text-bb-navy-500', badge: 'bg-bb-navy-100 text-bb-navy-700' },
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            2026 Roadmap
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-sunset-500 to-bb-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Full Width Q1 & Q2 */}
        <div className="grid grid-cols-2 gap-2xl">
          {quarters.slice(0, 2).map((q, idx) => {
            const colors = colorMap[q.color as keyof typeof colorMap]
            return (
              <div key={idx} className={`rounded-2xl border-2 ${q.border} ${q.bgFrom} to-white p-2xl shadow-lg hover:shadow-xl transition-all`}>
                <div className="flex items-baseline gap-md mb-xl">
                  <h3 className={`text-4xl font-black font-display ${colors.text}`}>{q.quarter}</h3>
                  <p className="text-lg text-bb-slate-600">({q.months})</p>
                </div>
                <ul className="space-y-lg">
                  {q.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-md">
                      <span className={`${colors.arrow} font-bold text-xl shrink-0`}>→</span>
                      <span className="text-base text-bb-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Q3 & Q4 */}
        <div className="grid grid-cols-2 gap-2xl">
          {quarters.slice(2).map((q, idx) => {
            const colors = colorMap[q.color as keyof typeof colorMap]
            const isQ4 = idx === 1
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 ${q.border} ${q.bgFrom} to-white p-2xl shadow-lg hover:shadow-xl transition-all ${
                  isQ4 ? 'ring-2 ring-offset-2 ring-bb-emerald-400' : ''
                }`}
              >
                <div className="flex items-baseline gap-md mb-xl">
                  <h3 className={`text-4xl font-black font-display ${colors.text}`}>{q.quarter}</h3>
                  <p className="text-lg text-bb-slate-600">({q.months})</p>
                  {isQ4 && <div className="ml-auto badge badge-success">🎯 GOAL</div>}
                </div>
                <ul className="space-y-lg">
                  {q.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-md">
                      <span className={`${colors.arrow} font-bold text-xl shrink-0`}>→</span>
                      <span className={`text-base leading-relaxed ${isQ4 ? 'font-semibold text-bb-navy-900' : 'text-bb-slate-700'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  )
}
