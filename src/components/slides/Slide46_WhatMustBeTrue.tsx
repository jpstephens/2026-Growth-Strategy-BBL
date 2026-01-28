import Slide from '../layout/Slide'

// Key assumptions (condensed from 6 to 4)
const assumptions = [
  {
    id: 1,
    statement: 'Freight demand exists in target lanes',
    status: 'verified',
    confidence: 85,
  },
  {
    id: 2,
    statement: 'Margin stays above $200/load',
    status: 'verified',
    confidence: 90,
  },
  {
    id: 3,
    statement: 'Sales activity stays consistent (200 dials/week)',
    status: 'dependent',
    confidence: 70,
  },
  {
    id: 4,
    statement: 'Customer churn stays below 5%',
    status: 'external',
    confidence: 65,
  },
]

// Key risks with mitigations
const risks = [
  {
    id: 1,
    title: "Patrick doesn't sustain production",
    mitigation: 'Daily tracking, Chris coaching, assess fit by April',
    mitigationStrength: 80,
  },
  {
    id: 2,
    title: 'Major customer loss (Clearway/Frontier)',
    mitigation: 'Accelerate diversification, target 65-70 customers',
    mitigationStrength: 65,
  },
  {
    id: 3,
    title: 'David becomes bottleneck at 150+ loads',
    mitigation: 'Ops Coordinator hired at 120 loads/month',
    mitigationStrength: 90,
  },
  {
    id: 4,
    title: 'Margin compression from pricing pressure',
    mitigation: 'Strict $200+ floor, build direct carrier network',
    mitigationStrength: 75,
  },
]

const statusConfig = {
  verified: { label: 'Verified', icon: '✓', bgColor: 'bg-bb-forest-100', textColor: 'text-bb-forest-700' },
  dependent: { label: 'Dependent', icon: '⚡', bgColor: 'bg-bb-amber-100', textColor: 'text-bb-amber-700' },
  external: { label: 'External', icon: '⚠', bgColor: 'bg-bb-charcoal-100', textColor: 'text-bb-charcoal-700' },
}

export default function Slide46_WhatMustBeTrue() {
  const avgMitigationStrength = Math.round(risks.reduce((acc, r) => acc + r.mitigationStrength, 0) / risks.length)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-900 font-display mb-sm">Assumptions & Risks</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-slate-600">What must be true, and what could go wrong</p>
        </div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Key Assumptions */}
          <div className="space-y-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 flex items-center gap-sm">
              <span className="w-6 h-6 bg-bb-forest-500 rounded flex items-center justify-center text-white text-xs">✓</span>
              Key Assumptions
            </h3>
            {assumptions.map((assumption) => {
              const status = statusConfig[assumption.status as keyof typeof statusConfig]
              return (
                <div key={assumption.id} className="bg-white rounded-lg border-2 border-bb-slate-200 p-sm shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-sm">
                      <div className={`w-5 h-5 ${status.bgColor} rounded flex items-center justify-center ${status.textColor} font-bold text-xs shrink-0`}>
                        {status.icon}
                      </div>
                      <p className="font-semibold text-bb-charcoal-900 text-sm">{assumption.statement}</p>
                    </div>
                    <span className={`px-xs py-0.5 rounded text-xs font-semibold ${status.bgColor} ${status.textColor}`}>
                      {assumption.confidence}%
                    </span>
                  </div>
                </div>
              )
            })}
            <div className="flex items-center gap-md text-xs pt-sm">
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded bg-bb-forest-500"></span> Verified</span>
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded bg-bb-amber-500"></span> Dependent</span>
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded bg-bb-charcoal-500"></span> External</span>
            </div>
          </div>

          {/* Right: Key Risks */}
          <div className="space-y-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 flex items-center gap-sm">
              <span className="w-6 h-6 bg-bb-charcoal-500 rounded flex items-center justify-center text-white text-xs">⚠</span>
              Key Risks
              <span className="text-xs font-normal text-bb-charcoal-500 ml-auto">Avg mitigation: {avgMitigationStrength}%</span>
            </h3>
            {risks.map((risk) => (
              <div key={risk.id} className="bg-white rounded-lg border-2 border-bb-slate-200 p-sm shadow-sm">
                <div className="flex items-start justify-between mb-xs">
                  <p className="font-semibold text-bb-charcoal-900 text-sm">{risk.title}</p>
                  <div className="text-right shrink-0 ml-sm">
                    <p className="text-xs font-bold text-bb-forest-600">{risk.mitigationStrength}%</p>
                    <div className="w-12 h-1 bg-bb-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-bb-forest-500 rounded-full" style={{ width: `${risk.mitigationStrength}%` }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-bb-charcoal-600">{risk.mitigation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Assumptions are testable. Risks are manageable.</span> We'll know within 60 days if the plan is working.
          </p>
        </div>
      </div>
    </Slide>
  )
}
