import Slide from '../layout/Slide'

const risks = [
  {
    id: 1,
    title: "Patrick doesn't sustain production",
    risk: 'Sales system doesn\'t prove repeatable. Rep #2 hire delayed.',
    mitigation: 'Coaching from Chris. Daily activity tracking. Assess fit by April 30.',
    category: 'Sales',
    mitigationStrength: 80,
  },
  {
    id: 2,
    title: 'Clearway or Frontier relationship weakens',
    risk: 'Major customer loss = crisis. Concentration risk materializes.',
    mitigation: 'Accelerate diversification. Target 65-70 customers. No single customer >12%.',
    category: 'Customer',
    mitigationStrength: 65,
  },
  {
    id: 3,
    title: 'David becomes bottleneck at 150+ loads/month',
    risk: 'Ops capacity limits growth. Customer experience degrades.',
    mitigation: 'Ops Coordinator hired when loads >120/month. Strict handoff protocol.',
    category: 'Operations',
    mitigationStrength: 90,
  },
  {
    id: 4,
    title: 'Margin compression from pricing pressure',
    risk: 'Larger customers demand lower rates. Unit economics deteriorate.',
    mitigation: 'Strict $200+ margin floor. Build direct carrier network. Monthly margin review.',
    category: 'Financial',
    mitigationStrength: 75,
  },
]

const categoryColors: Record<string, { bg: string; text: string; light: string }> = {
  Sales: { bg: 'bg-bb-amber-500', text: 'text-bb-amber-700', light: 'bg-bb-amber-50' },
  Customer: { bg: 'bg-bb-charcoal-500', text: 'text-bb-charcoal-700', light: 'bg-bb-charcoal-50' },
  Operations: { bg: 'bg-bb-steel-500', text: 'text-bb-steel-700', light: 'bg-bb-steel-50' },
  Financial: { bg: 'bg-bb-forest-500', text: 'text-bb-forest-700', light: 'bg-bb-forest-50' },
}

export default function Slide40_RisksMitigation() {
  const avgMitigationStrength = Math.round(risks.reduce((acc, r) => acc + r.mitigationStrength, 0) / risks.length)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-900 mb-sm">
            Risk Assessment & Mitigation
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-charcoal-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-slate-600">What could go wrong and how we'll handle it</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-md">
          <div className="bg-white border-2 border-bb-slate-200 rounded-xl p-sm text-center shadow-sm">
            <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Total Risks</p>
            <p className="text-2xl font-bold text-bb-charcoal-900">{risks.length}</p>
          </div>
          <div className="bg-gradient-to-br from-bb-charcoal-50 to-white border-2 border-bb-charcoal-300 rounded-xl p-sm text-center shadow-sm">
            <p className="text-xs font-semibold text-bb-charcoal-600 uppercase mb-xs">High Priority</p>
            <p className="text-2xl font-bold text-bb-charcoal-700">2</p>
          </div>
          <div className="bg-gradient-to-br from-bb-forest-50 to-white border-2 border-bb-forest-300 rounded-xl p-sm text-center shadow-sm">
            <p className="text-xs font-semibold text-bb-forest-600 uppercase mb-xs">Avg. Mitigation</p>
            <p className="text-2xl font-bold text-bb-forest-700">{avgMitigationStrength}%</p>
          </div>
        </div>

        {/* Risk Cards - Always Expanded */}
        <div className="grid grid-cols-2 gap-md">
          {risks.map((item) => {
            const colors = categoryColors[item.category]
            return (
              <div key={item.id} className={`rounded-xl border-2 border-bb-slate-200 ${colors.light} p-md shadow-sm`}>
                <div className="flex items-start gap-sm mb-sm">
                  <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {item.id}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-bb-charcoal-900 text-sm">{item.title}</p>
                    <span className={`px-xs py-0.5 rounded text-[10px] font-semibold ${colors.light} ${colors.text} border border-current`}>
                      {item.category}
                    </span>
                  </div>
                  {/* Mitigation strength */}
                  <div className="w-16 text-right">
                    <p className="text-xs font-bold text-bb-forest-600">{item.mitigationStrength}%</p>
                    <div className="h-1 bg-bb-slate-200 rounded-full overflow-hidden mt-xs">
                      <div className="h-full bg-bb-forest-500 rounded-full" style={{ width: `${item.mitigationStrength}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-sm">
                  <div className="bg-white rounded-lg p-sm border border-bb-charcoal-200">
                    <p className="text-xs font-semibold text-bb-charcoal-600 mb-xs">RISK</p>
                    <p className="text-xs text-bb-charcoal-800">{item.risk}</p>
                  </div>
                  <div className="bg-white rounded-lg p-sm border border-bb-forest-200">
                    <p className="text-xs font-semibold text-bb-forest-600 mb-xs">MITIGATION</p>
                    <p className="text-xs text-bb-charcoal-800">{item.mitigation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Risks are manageable.</span> Every risk has a mitigation plan. We monitor weekly and adjust as needed.
          </p>
        </div>
      </div>
    </Slide>
  )
}
