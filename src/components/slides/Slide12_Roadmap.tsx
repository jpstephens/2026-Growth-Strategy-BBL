import Slide from '../layout/Slide'

export default function Slide12_Roadmap() {
  const quarters = [
    {
      quarter: 'Q1',
      title: 'Prove It Works',
      months: 'Jan - Mar',
      color: 'electric',
      bgFrom: 'from-bb-amber-50',
      border: 'border-bb-amber-400',
      items: [
        'Patrick runs the new system',
        'Do we hit 4-5 new customers?',
      ],
    },
    {
      quarter: 'Q2',
      title: 'Hire The Second Rep',
      months: 'Apr - Jun',
      color: 'sunset',
      bgFrom: 'from-bb-steel-50',
      border: 'border-bb-steel-400',
      items: [
        'If Patrick hits his targets, we hire Rep #2',
        'Two people selling = double the results',
      ],
    },
    {
      quarter: 'Q3',
      title: 'Scale It',
      months: 'Jul - Sep',
      color: 'emerald',
      bgFrom: 'from-bb-forest-50',
      border: 'border-bb-forest-400',
      items: [
        'Two reps are crushing it',
        'Hire Rep #3. Ops team grows to handle volume',
      ],
    },
    {
      quarter: 'Q4',
      title: 'Win',
      months: 'Oct - Dec',
      color: 'navy',
      bgFrom: 'from-bb-charcoal-50',
      border: 'border-bb-charcoal-400',
      items: [
        'Four sales reps',
        '65-70 customers',
        '$100K monthly profit',
        'GOAL ACHIEVED',
      ],
    },
  ]

  const colorMap = {
    electric: { text: 'text-bb-amber-700', arrow: 'text-bb-amber-500', badge: 'bg-bb-amber-100 text-bb-amber-700' },
    sunset: { text: 'text-bb-steel-700', arrow: 'text-bb-steel-500', badge: 'bg-bb-steel-100 text-bb-steel-700' },
    emerald: { text: 'text-bb-forest-700', arrow: 'text-bb-forest-500', badge: 'bg-bb-forest-100 text-bb-forest-700' },
    navy: { text: 'text-bb-charcoal-700', arrow: 'text-bb-charcoal-500', badge: 'bg-bb-charcoal-100 text-bb-charcoal-700' },
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-900 mb-md">
            2026 Roadmap
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-amber-500 via-bb-steel-500 to-bb-forest-500 mx-auto rounded-full" />
        </div>

        {/* Full Width Q1 & Q2 */}
        <div className="grid grid-cols-2 gap-2xl">
          {quarters.slice(0, 2).map((q, idx) => {
            const colors = colorMap[q.color as keyof typeof colorMap]
            return (
              <div key={idx} className={`rounded-2xl border-2 ${q.border} ${q.bgFrom} to-white p-2xl shadow-lg hover:shadow-xl transition-all`}>
                <div className="flex items-baseline gap-md mb-xl">
                  <h3 className={`text-4xl font-black font-display ${colors.text}`}>{q.quarter}:</h3>
                  <h4 className="text-2xl font-bold text-bb-charcoal-900">{(q as any).title}</h4>
                </div>
                <p className="text-lg text-bb-slate-600 mb-xl">({q.months})</p>
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
                  isQ4 ? 'ring-2 ring-offset-2 ring-bb-forest-400' : ''
                }`}
              >
                <div className="flex items-baseline gap-md mb-xl">
                  <h3 className={`text-4xl font-black font-display ${colors.text}`}>{q.quarter}:</h3>
                  <h4 className="text-2xl font-bold text-bb-charcoal-900">{(q as any).title}</h4>
                  {isQ4 && <div className="ml-auto badge badge-success">🎯 GOAL</div>}
                </div>
                <p className="text-lg text-bb-slate-600 mb-xl">({q.months})</p>
                <ul className="space-y-lg">
                  {q.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-md">
                      <span className={`${colors.arrow} font-bold text-xl shrink-0`}>→</span>
                      <span className={`text-base leading-relaxed ${isQ4 ? 'font-semibold text-bb-charcoal-900' : 'text-bb-slate-700'}`}>
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
