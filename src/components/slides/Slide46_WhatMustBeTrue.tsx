import Slide from '../layout/Slide'

// Define assumptions with status and confidence
const assumptions = [
  {
    id: 1,
    category: 'Market',
    statement: 'Freight demand exists in our target lanes',
    detail: 'Building products, metal fabrication, industrial equipment, and automotive JIT have freight volume we can capture',
    status: 'verified',
    confidence: 85,
  },
  {
    id: 2,
    category: 'Market',
    statement: 'Our margin stays above $200/load minimum',
    detail: "We don't chase bad volume. Every customer must support $200+ average margin",
    status: 'verified',
    confidence: 90,
  },
  {
    id: 3,
    category: 'Operations',
    statement: 'Sales activity stays consistent',
    detail: 'Protected calling time is protected. 200+ dials/week happens. Conversion rates hold',
    status: 'dependent',
    confidence: 70,
  },
  {
    id: 4,
    category: 'Operations',
    statement: 'David operates without sales interruptions',
    detail: "Operations owner has full autonomy on existing accounts. Decisions don't wait for Patrick",
    status: 'verified',
    confidence: 85,
  },
  {
    id: 5,
    category: 'Financial',
    statement: 'Churn stays below 5% monthly',
    detail: 'Customer retention improves with dedicated operations management',
    status: 'external',
    confidence: 65,
  },
  {
    id: 6,
    category: 'Financial',
    statement: 'No major customer loss (Clearway, Frontier stable)',
    detail: 'Top 2 accounts remain stable. Diversification reduces concentration risk',
    status: 'external',
    confidence: 75,
  },
]

const statusConfig = {
  verified: { label: 'Verified', icon: '✓', bgColor: 'bg-bb-forest-100', textColor: 'text-bb-forest-700' },
  dependent: { label: 'Dependent', icon: '⚡', bgColor: 'bg-bb-amber-100', textColor: 'text-bb-amber-700' },
  external: { label: 'External', icon: '⚠', bgColor: 'bg-bb-charcoal-100', textColor: 'text-bb-charcoal-700' },
}

export default function Slide46_WhatMustBeTrue() {
  const verifiedCount = assumptions.filter(a => a.status === 'verified').length
  const dependentCount = assumptions.filter(a => a.status === 'dependent').length
  const externalCount = assumptions.filter(a => a.status === 'external').length

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-900 font-display mb-sm">Assumptions & Dependencies</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-slate-600">The core assumptions behind this plan</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-md">
          <div className="bg-gradient-to-br from-bb-forest-50 to-white border-2 border-bb-forest-300 rounded-xl p-sm text-center shadow-sm">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-5 h-5 bg-bb-forest-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <p className="text-xs font-semibold text-bb-forest-600 uppercase">Verified</p>
            </div>
            <p className="text-2xl font-bold text-bb-charcoal-900">{verifiedCount}</p>
          </div>
          <div className="bg-gradient-to-br from-bb-amber-50 to-white border-2 border-bb-amber-300 rounded-xl p-sm text-center shadow-sm">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-5 h-5 bg-bb-amber-500 rounded-full flex items-center justify-center text-white text-xs">⚡</span>
              <p className="text-xs font-semibold text-bb-amber-600 uppercase">Dependent</p>
            </div>
            <p className="text-2xl font-bold text-bb-charcoal-900">{dependentCount}</p>
          </div>
          <div className="bg-gradient-to-br from-bb-charcoal-50 to-white border-2 border-bb-charcoal-300 rounded-xl p-sm text-center shadow-sm">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-5 h-5 bg-bb-charcoal-500 rounded-full flex items-center justify-center text-white text-xs">⚠</span>
              <p className="text-xs font-semibold text-bb-charcoal-600 uppercase">External</p>
            </div>
            <p className="text-2xl font-bold text-bb-charcoal-900">{externalCount}</p>
          </div>
        </div>

        {/* Assumption List - Always Visible */}
        <div className="grid grid-cols-2 gap-sm">
          {assumptions.map((assumption) => {
            const status = statusConfig[assumption.status as keyof typeof statusConfig]
            return (
              <div key={assumption.id} className="bg-white rounded-lg border-2 border-bb-slate-200 p-sm shadow-sm">
                <div className="flex items-start gap-sm">
                  <div className={`w-6 h-6 ${status.bgColor} rounded flex items-center justify-center ${status.textColor} font-bold text-xs shrink-0`}>
                    {status.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-xs mb-xs">
                      <span className="text-xs font-semibold text-bb-slate-500">{assumption.category}</span>
                      <span className={`px-xs py-0.5 rounded text-[10px] font-semibold ${status.bgColor} ${status.textColor}`}>
                        {assumption.confidence}%
                      </span>
                    </div>
                    <p className="font-semibold text-bb-charcoal-900 text-sm mb-xs">{assumption.statement}</p>
                    <p className="text-xs text-bb-charcoal-600">{assumption.detail}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">These assumptions are testable.</span> We'll know within 60 days if they hold. If they don't, we pivot.
          </p>
        </div>
      </div>
    </Slide>
  )
}
