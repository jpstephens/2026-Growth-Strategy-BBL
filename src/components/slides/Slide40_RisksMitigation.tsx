import { useState } from 'react'
import Slide from '../layout/Slide'

// Risks with likelihood and impact scores for matrix
const risks = [
  {
    id: 1,
    title: "Patrick doesn't sustain production",
    risk: 'Sales system doesn\'t prove repeatable. Rep #2 hire delayed.',
    mitigation: 'Coaching from Chris. Daily activity tracking. Swap messaging/lists if conversion is low. Assess fit by April 30.',
    likelihood: 3, // 1-5 scale
    impact: 5, // 1-5 scale
    category: 'Sales',
    mitigationStrength: 80,
  },
  {
    id: 2,
    title: 'Clearway or Frontier Door relationship weakens',
    risk: 'Major customer loss = crisis. Concentration risk materializes.',
    mitigation: 'Accelerate customer diversification. Target 65-70 by December. By month 6-7, no single customer exceeds 12%.',
    likelihood: 2,
    impact: 5,
    category: 'Customer',
    mitigationStrength: 65,
  },
  {
    id: 3,
    title: 'David becomes bottleneck at 150+ loads/month',
    risk: 'Ops capacity limits growth. Customer experience degrades.',
    mitigation: 'Ops Coordinator hired when loads >120/month. Handoff protocol strict to prevent Patrick involvement. Monitor David\'s bandwidth monthly.',
    likelihood: 4,
    impact: 3,
    category: 'Operations',
    mitigationStrength: 90,
  },
  {
    id: 4,
    title: 'Margin compression from pricing pressure',
    risk: 'Larger customers demand lower rates. Unit economics deteriorate.',
    mitigation: 'Strict $200+ margin target on all new customers. Avoid WA/OR→Vernon CA lanes. Build direct carrier network to improve cost basis. Monthly margin review.',
    likelihood: 3,
    impact: 4,
    category: 'Financial',
    mitigationStrength: 75,
  },
]

// Calculate severity score (likelihood * impact)
const getSeverity = (likelihood: number, impact: number) => likelihood * impact

// Get color based on severity
const getSeverityColor = (severity: number) => {
  if (severity >= 15) return { bg: 'bg-bb-charcoal-500', text: 'text-bb-charcoal-700', light: 'bg-bb-charcoal-100' }
  if (severity >= 10) return { bg: 'bg-bb-amber-500', text: 'text-bb-amber-700', light: 'bg-bb-amber-100' }
  return { bg: 'bg-bb-steel-500', text: 'text-bb-steel-700', light: 'bg-bb-steel-100' }
}

export default function Slide40_RisksMitigation() {
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null)

  // Calculate summary metrics
  const totalRisks = risks.length
  const highPriorityRisks = risks.filter(r => getSeverity(r.likelihood, r.impact) >= 12).length
  const avgMitigationStrength = Math.round(risks.reduce((acc, r) => acc + r.mitigationStrength, 0) / risks.length)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-5xl font-bold text-bb-charcoal-900 mb-md">
            Risk Assessment & Mitigation
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-charcoal-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-lg text-bb-slate-600">
            What could go wrong and how we'll handle it
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-md mb-lg">
          <div className="bg-white border-2 border-bb-slate-200 rounded-xl p-md text-center shadow-sm">
            <p className="text-xs font-semibold text-bb-slate-600 uppercase tracking-wide mb-xs">Total Risks</p>
            <p className="text-3xl font-bold text-bb-charcoal-900">{totalRisks}</p>
            <p className="text-xs text-bb-slate-500">Identified & tracked</p>
          </div>
          <div className="bg-gradient-to-br from-bb-charcoal-50 to-white border-2 border-bb-charcoal-300 rounded-xl p-md text-center shadow-sm">
            <p className="text-xs font-semibold text-bb-charcoal-600 uppercase tracking-wide mb-xs">High Priority</p>
            <p className="text-3xl font-bold text-bb-charcoal-700">{highPriorityRisks}</p>
            <p className="text-xs text-bb-slate-500">Require active monitoring</p>
          </div>
          <div className="bg-gradient-to-br from-bb-forest-50 to-white border-2 border-bb-forest-300 rounded-xl p-md text-center shadow-sm">
            <p className="text-xs font-semibold text-bb-forest-600 uppercase tracking-wide mb-xs">Avg. Mitigation</p>
            <p className="text-3xl font-bold text-bb-forest-700">{avgMitigationStrength}%</p>
            <p className="text-xs text-bb-slate-500">Coverage strength</p>
          </div>
        </div>

        {/* Risk Matrix Visualization */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md mb-lg shadow-md">
          <div className="flex items-center justify-between mb-md">
            <h3 className="text-lg font-bold text-bb-charcoal-900">Risk Matrix</h3>
            <div className="flex gap-md text-xs">
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-bb-charcoal-500"></span> High</span>
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-bb-amber-500"></span> Medium</span>
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-bb-steel-500"></span> Low</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="relative">
            {/* Y-axis label */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold text-bb-slate-500 whitespace-nowrap">
              IMPACT
            </div>

            <div className="ml-4">
              {/* Grid with risks plotted */}
              <div className="grid grid-cols-5 gap-px bg-bb-slate-200 rounded-lg overflow-hidden">
                {/* Create 5x5 grid (impact rows, likelihood columns) */}
                {[5, 4, 3, 2, 1].map((impactRow) => (
                  [1, 2, 3, 4, 5].map((likelihoodCol) => {
                    const cellRisks = risks.filter(r => r.impact === impactRow && r.likelihood === likelihoodCol)
                    const isHighZone = impactRow >= 4 && likelihoodCol >= 3
                    const isMediumZone = (impactRow >= 3 && likelihoodCol >= 2) || (impactRow >= 4 && likelihoodCol >= 2)

                    return (
                      <div
                        key={`${impactRow}-${likelihoodCol}`}
                        className={`h-12 flex items-center justify-center ${
                          isHighZone ? 'bg-bb-charcoal-50' :
                          isMediumZone ? 'bg-bb-amber-50' :
                          'bg-white'
                        }`}
                      >
                        {cellRisks.map((risk) => {
                          const severity = getSeverity(risk.likelihood, risk.impact)
                          const colors = getSeverityColor(severity)
                          return (
                            <button
                              key={risk.id}
                              onClick={() => setExpandedRisk(expandedRisk === risk.id ? null : risk.id)}
                              className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform cursor-pointer`}
                              title={risk.title}
                              aria-label={`Risk ${risk.id}: ${risk.title}. Severity ${severity} of 25. Click to view details.`}
                              aria-expanded={expandedRisk === risk.id}
                            >
                              {risk.id}
                            </button>
                          )
                        })}
                      </div>
                    )
                  })
                ))}
              </div>

              {/* X-axis label */}
              <p className="text-xs font-semibold text-bb-slate-500 text-center mt-sm">LIKELIHOOD →</p>
            </div>
          </div>
        </div>

        {/* Expandable Risk Detail Cards */}
        <div className="space-y-sm">
          {risks.map((item) => {
            const severity = getSeverity(item.likelihood, item.impact)
            const colors = getSeverityColor(severity)

            return (
              <div
                key={item.id}
                className={`rounded-xl border-2 transition-all overflow-hidden ${
                  expandedRisk === item.id
                    ? `${colors.light} border-current shadow-lg`
                    : 'bg-white border-bb-slate-200 hover:border-bb-slate-300 shadow-sm'
                }`}
                style={expandedRisk === item.id ? { borderColor: severity >= 15 ? '#881337' : severity >= 10 ? '#ea580c' : '#0284c7' } : {}}
              >
                <div
                  className="p-md flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedRisk(expandedRisk === item.id ? null : item.id)}
                >
                  <div className="flex items-center gap-md">
                    <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center text-white font-bold shadow-sm`}>
                      {item.id}
                    </div>
                    <div>
                      <p className="font-bold text-bb-charcoal-900 text-sm">{item.title}</p>
                      <div className="flex items-center gap-sm mt-xs">
                        <span className={`px-xs py-0.5 rounded text-[10px] font-semibold ${colors.light} ${colors.text}`}>
                          {item.category}
                        </span>
                        <span className="text-xs text-bb-slate-500">
                          Severity: {severity}/25
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-md">
                    {/* Mitigation strength indicator */}
                    <div className="w-24">
                      <div className="flex items-center justify-between text-xs mb-xs">
                        <span className="text-bb-slate-500">Mitigation</span>
                        <span className="font-semibold text-bb-forest-600">{item.mitigationStrength}%</span>
                      </div>
                      <div className="h-1.5 bg-bb-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-bb-forest-500 rounded-full"
                          style={{ width: `${item.mitigationStrength}%` }}
                        ></div>
                      </div>
                    </div>
                    <svg className={`w-5 h-5 text-bb-slate-400 transition-transform ${expandedRisk === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expanded content */}
                {expandedRisk === item.id && (
                  <div className="px-md pb-md border-t border-bb-slate-200">
                    <div className="grid grid-cols-2 gap-md mt-md">
                      {/* Risk Description */}
                      <div className="bg-bb-charcoal-50 rounded-lg p-sm border-l-4 border-bb-charcoal-500">
                        <p className="text-xs font-semibold text-bb-charcoal-600 mb-xs">RISK</p>
                        <p className="text-sm text-bb-charcoal-900">{item.risk}</p>
                      </div>
                      {/* Mitigation Plan */}
                      <div className="bg-bb-forest-50 rounded-lg p-sm border-l-4 border-bb-forest-500">
                        <p className="text-xs font-semibold text-bb-forest-600 mb-xs">MITIGATION PLAN</p>
                        <p className="text-sm text-bb-charcoal-900">{item.mitigation}</p>
                      </div>
                    </div>

                    {/* Risk Scores */}
                    <div className="flex gap-md mt-md">
                      <div className="flex items-center gap-sm bg-white rounded-lg px-sm py-xs border border-bb-slate-200">
                        <span className="text-xs text-bb-slate-500">Likelihood:</span>
                        <div className="flex gap-px">
                          {[1,2,3,4,5].map(n => (
                            <div key={n} className={`w-3 h-3 rounded-sm ${n <= item.likelihood ? 'bg-bb-amber-500' : 'bg-bb-slate-200'}`}></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-sm bg-white rounded-lg px-sm py-xs border border-bb-slate-200">
                        <span className="text-xs text-bb-slate-500">Impact:</span>
                        <div className="flex gap-px">
                          {[1,2,3,4,5].map(n => (
                            <div key={n} className={`w-3 h-3 rounded-sm ${n <= item.impact ? 'bg-bb-charcoal-500' : 'bg-bb-slate-200'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  )
}
