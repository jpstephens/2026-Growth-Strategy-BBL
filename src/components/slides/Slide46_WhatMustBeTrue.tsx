import { useState } from 'react'
import Slide from '../layout/Slide'

// Define assumptions with status and confidence
const assumptions = [
  // Market
  {
    id: 1,
    category: 'Market',
    statement: 'Freight demand exists in our target lanes',
    detail: 'Building products, metal fabrication, plastics, and automotive JIT have freight volume we can capture',
    status: 'verified',
    confidence: 85,
    impact: 'Critical - determines addressable market size',
  },
  {
    id: 2,
    category: 'Market',
    statement: 'Our margin stays above $200/load minimum',
    detail: "We don't chase bad volume. Every customer must support $200+ average margin",
    status: 'verified',
    confidence: 90,
    impact: 'Critical - determines unit economics viability',
  },
  {
    id: 3,
    category: 'Market',
    statement: 'Carriers remain reliable and available',
    detail: "Carrier relationships don't deteriorate with volume growth. Tiering system scales support",
    status: 'dependent',
    confidence: 75,
    impact: 'High - affects service quality and capacity',
  },
  // Operations
  {
    id: 4,
    category: 'Operations',
    statement: 'Patrick executes with discipline',
    detail: 'Protected calling time is protected. 200+ dials/week happens. Conversion rates hold',
    status: 'dependent',
    confidence: 70,
    impact: 'Critical - entire sales system depends on this',
  },
  {
    id: 5,
    category: 'Operations',
    statement: 'David operates without sales interruptions',
    detail: "Operations owner has full autonomy on existing accounts. Decisions don't wait for Patrick",
    status: 'verified',
    confidence: 85,
    impact: 'High - prevents bottlenecks and context switching',
  },
  {
    id: 6,
    category: 'Operations',
    statement: 'Additional hires happen when triggered',
    detail: 'Rep #2 hired in Q2 if Patrick hits 4+ customers/month. Rep #3 if system scales',
    status: 'dependent',
    confidence: 80,
    impact: 'Medium - affects scaling timeline',
  },
  // Financial
  {
    id: 7,
    category: 'Financial',
    statement: 'Churn stays below 5% monthly',
    detail: 'Customer retention improves with dedicated operations management',
    status: 'external',
    confidence: 65,
    impact: 'High - compounds over time, affects net growth',
  },
  {
    id: 8,
    category: 'Financial',
    statement: 'No major customer loss (Clearway, Frontier stable)',
    detail: 'Top 2 accounts remain stable. Diversification reduces concentration risk',
    status: 'external',
    confidence: 75,
    impact: 'Critical - losing either is a crisis scenario',
  },
]

const categories = [
  { id: 'Market', color: 'bb-electric', icon: '📊' },
  { id: 'Operations', color: 'bb-emerald', icon: '⚙️' },
  { id: 'Financial', color: 'bb-sunset', icon: '💰' },
]

const statusConfig = {
  verified: { label: 'Verified', icon: '✓', color: 'bb-emerald', bgColor: 'bg-bb-emerald-100', textColor: 'text-bb-emerald-700' },
  dependent: { label: 'Dependent', icon: '⚡', color: 'bb-sunset', bgColor: 'bg-bb-sunset-100', textColor: 'text-bb-sunset-700' },
  external: { label: 'External', icon: '⚠', color: 'bb-burgundy', bgColor: 'bg-bb-burgundy-100', textColor: 'text-bb-burgundy-700' },
}

export default function Slide46_WhatMustBeTrue() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [expandedAssumption, setExpandedAssumption] = useState<number | null>(null)

  // Filter assumptions by category
  const filteredAssumptions = activeCategory
    ? assumptions.filter(a => a.category === activeCategory)
    : assumptions

  // Calculate summary stats
  const verifiedCount = assumptions.filter(a => a.status === 'verified').length
  const dependentCount = assumptions.filter(a => a.status === 'dependent').length
  const externalCount = assumptions.filter(a => a.status === 'external').length
  const avgConfidence = Math.round(assumptions.reduce((acc, a) => acc + a.confidence, 0) / assumptions.length)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-lg">
          <h2 className="text-5xl font-bold text-bb-navy-900 mb-md font-display">Assumptions & Dependencies</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-sm"></div>
          <p className="text-lg text-bb-slate-600">The core assumptions behind this plan</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-md mb-lg">
          <div className="bg-gradient-to-br from-bb-emerald-50 to-white border-2 border-bb-emerald-300 rounded-xl p-md text-center shadow-sm">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-5 h-5 bg-bb-emerald-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
              <p className="text-xs font-semibold text-bb-emerald-600 uppercase">Verified</p>
            </div>
            <p className="text-2xl font-bold text-bb-navy-900">{verifiedCount}</p>
          </div>
          <div className="bg-gradient-to-br from-bb-sunset-50 to-white border-2 border-bb-sunset-300 rounded-xl p-md text-center shadow-sm">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-5 h-5 bg-bb-sunset-500 rounded-full flex items-center justify-center text-white text-xs">⚡</span>
              <p className="text-xs font-semibold text-bb-sunset-600 uppercase">Dependent</p>
            </div>
            <p className="text-2xl font-bold text-bb-navy-900">{dependentCount}</p>
          </div>
          <div className="bg-gradient-to-br from-bb-burgundy-50 to-white border-2 border-bb-burgundy-300 rounded-xl p-md text-center shadow-sm">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-5 h-5 bg-bb-burgundy-500 rounded-full flex items-center justify-center text-white text-xs">⚠</span>
              <p className="text-xs font-semibold text-bb-burgundy-600 uppercase">External</p>
            </div>
            <p className="text-2xl font-bold text-bb-navy-900">{externalCount}</p>
          </div>
          <div className="bg-white border-2 border-bb-slate-200 rounded-xl p-md text-center shadow-sm">
            <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Avg. Confidence</p>
            <p className="text-2xl font-bold text-bb-navy-900">{avgConfidence}%</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex gap-sm mb-md">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-md py-sm rounded-lg text-sm font-semibold transition-all ${
              activeCategory === null
                ? 'bg-bb-navy-600 text-white shadow-md'
                : 'bg-white text-bb-navy-900 border-2 border-bb-slate-200 hover:border-bb-slate-300'
            }`}
          >
            All ({assumptions.length})
          </button>
          {categories.map(cat => {
            const count = assumptions.filter(a => a.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-md py-sm rounded-lg text-sm font-semibold transition-all flex items-center gap-xs ${
                  activeCategory === cat.id
                    ? `bg-${cat.color}-500 text-white shadow-md`
                    : 'bg-white text-bb-navy-900 border-2 border-bb-slate-200 hover:border-bb-slate-300'
                }`}
                style={activeCategory === cat.id ? {
                  backgroundColor: cat.id === 'Market' ? '#0284c7' : cat.id === 'Operations' ? '#10b981' : '#f97316'
                } : {}}
              >
                <span>{cat.icon}</span>
                {cat.id} ({count})
              </button>
            )
          })}
        </div>

        {/* Assumption Checklist */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 shadow-md overflow-hidden">
          <div className="divide-y divide-bb-slate-100">
            {filteredAssumptions.map((assumption) => {
              const status = statusConfig[assumption.status as keyof typeof statusConfig]
              const categoryConfig = categories.find(c => c.id === assumption.category)

              return (
                <div
                  key={assumption.id}
                  className={`transition-all ${expandedAssumption === assumption.id ? 'bg-bb-slate-50' : 'hover:bg-bb-slate-50/50'}`}
                >
                  <div
                    className="p-md flex items-center gap-md cursor-pointer"
                    onClick={() => setExpandedAssumption(expandedAssumption === assumption.id ? null : assumption.id)}
                  >
                    {/* Status indicator */}
                    <div className={`w-8 h-8 ${status.bgColor} rounded-lg flex items-center justify-center ${status.textColor} font-bold shrink-0`}>
                      {status.icon}
                    </div>

                    {/* Assumption content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-sm mb-xs">
                        <span className="text-sm">{categoryConfig?.icon}</span>
                        <span className="text-xs font-semibold text-bb-slate-500 uppercase">{assumption.category}</span>
                        <span className={`px-xs py-0.5 rounded text-[10px] font-semibold ${status.bgColor} ${status.textColor}`}>
                          {status.label}
                        </span>
                      </div>
                      <p className="font-semibold text-bb-navy-900 text-sm">{assumption.statement}</p>
                    </div>

                    {/* Confidence meter */}
                    <div className="w-20 shrink-0">
                      <div className="flex items-center justify-between text-xs mb-xs">
                        <span className="text-bb-slate-500">Conf.</span>
                        <span className="font-semibold text-bb-navy-900">{assumption.confidence}%</span>
                      </div>
                      <div className="h-1.5 bg-bb-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            assumption.confidence >= 80 ? 'bg-bb-emerald-500' :
                            assumption.confidence >= 60 ? 'bg-bb-sunset-500' :
                            'bg-bb-burgundy-500'
                          }`}
                          style={{ width: `${assumption.confidence}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Expand icon */}
                    <svg className={`w-5 h-5 text-bb-slate-400 transition-transform shrink-0 ${expandedAssumption === assumption.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Expanded details */}
                  {expandedAssumption === assumption.id && (
                    <div className="px-md pb-md pt-0 ml-12">
                      <div className="bg-white rounded-lg p-sm border border-bb-slate-200 mb-sm">
                        <p className="text-xs font-semibold text-bb-slate-600 mb-xs">DETAIL</p>
                        <p className="text-sm text-bb-navy-900">{assumption.detail}</p>
                      </div>
                      <div className={`rounded-lg p-sm ${
                        assumption.impact.startsWith('Critical') ? 'bg-bb-burgundy-50 border-l-4 border-bb-burgundy-500' :
                        assumption.impact.startsWith('High') ? 'bg-bb-sunset-50 border-l-4 border-bb-sunset-500' :
                        'bg-bb-slate-50 border-l-4 border-bb-slate-400'
                      }`}>
                        <p className="text-xs font-semibold text-bb-slate-600 mb-xs">IMPACT IF WRONG</p>
                        <p className="text-sm text-bb-navy-900">{assumption.impact}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-md bg-gradient-to-r from-bb-electric-50 to-bb-electric-100/50 border-l-6 border-bb-electric-500 rounded-lg p-md shadow-sm">
          <div className="flex items-start gap-md">
            <div className="w-8 h-8 bg-bb-electric-500 rounded-lg flex items-center justify-center text-white text-lg shrink-0">i</div>
            <p className="text-sm text-bb-slate-700">
              <span className="font-semibold text-bb-navy-900">These assumptions are testable.</span> We'll know within 60 days if they hold. If they don't, we pivot.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
