import { useState } from 'react'
import Slide from '../layout/Slide'
import { hiringStrategy, hireCosts } from '../../data/teamStructure'

// Timeline data with cumulative costs and revenue impact
const timelineData = [
  { month: 'Jan', label: 'Patrick (Current)', hire: 'Patrick', cost: 6000, cumCost: 6000, revenue: 8000, cumRevenue: 8000, customers: 2 },
  { month: 'Feb', label: '', hire: null, cost: 6000, cumCost: 12000, revenue: 16000, cumRevenue: 24000, customers: 4 },
  { month: 'Mar', label: '', hire: null, cost: 6000, cumCost: 18000, revenue: 28000, cumRevenue: 52000, customers: 7 },
  { month: 'Apr', label: 'Rep #2 Hired', hire: 'Rep #2', cost: 12000, cumCost: 30000, revenue: 40000, cumRevenue: 92000, customers: 10 },
  { month: 'May', label: '', hire: null, cost: 12000, cumCost: 42000, revenue: 56000, cumRevenue: 148000, customers: 14 },
  { month: 'Jun', label: 'Ops Coord', hire: 'Ops Coord', cost: 15500, cumCost: 57500, revenue: 72000, cumRevenue: 220000, customers: 18 },
  { month: 'Jul', label: '', hire: null, cost: 15500, cumCost: 73000, revenue: 92000, cumRevenue: 312000, customers: 23 },
  { month: 'Aug', label: 'Rep #3 Hired', hire: 'Rep #3', cost: 21500, cumCost: 94500, revenue: 116000, cumRevenue: 428000, customers: 29 },
  { month: 'Sep', label: '', hire: null, cost: 21500, cumCost: 116000, revenue: 144000, cumRevenue: 572000, customers: 36 },
  { month: 'Oct', label: 'Rep #4 Hired', hire: 'Rep #4', cost: 27500, cumCost: 143500, revenue: 176000, cumRevenue: 748000, customers: 44 },
  { month: 'Nov', label: '', hire: null, cost: 27500, cumCost: 171000, revenue: 216000, cumRevenue: 964000, customers: 54 },
  { month: 'Dec', label: 'Target: 65', hire: null, cost: 27500, cumCost: 198500, revenue: 260000, cumRevenue: 1224000, customers: 65 },
]

export default function Slide18_HiringStrategy() {
  const [expandedHire, setExpandedHire] = useState<number | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  // Calculate summary metrics
  const totalInvestment = 198500
  const breakEvenMonth = 'April'
  const decemberROI = ((1224000 - 198500) / 198500 * 100).toFixed(0)

  // Find max values for chart scaling
  const maxRevenue = Math.max(...timelineData.map(d => d.cumRevenue))

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-lg">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Hiring Strategy & Timeline</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-sm" />
          <p className="text-lg text-bb-slate-600">Performance-triggered. Cost-justified. Timeline contingent on execution.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-md mb-lg">
          <div className="bg-gradient-to-br from-bb-electric-50 to-white border-2 border-bb-electric-400 rounded-xl p-md text-center shadow-md">
            <p className="text-xs font-semibold text-bb-electric-600 uppercase tracking-wide mb-xs">Total Investment</p>
            <p className="text-3xl font-bold text-bb-navy-900">${(totalInvestment / 1000).toFixed(0)}K</p>
            <p className="text-xs text-bb-slate-600">12-month team cost</p>
          </div>
          <div className="bg-gradient-to-br from-bb-emerald-50 to-white border-2 border-bb-emerald-400 rounded-xl p-md text-center shadow-md">
            <p className="text-xs font-semibold text-bb-emerald-600 uppercase tracking-wide mb-xs">Break-Even</p>
            <p className="text-3xl font-bold text-bb-navy-900">{breakEvenMonth}</p>
            <p className="text-xs text-bb-slate-600">Revenue exceeds cost</p>
          </div>
          <div className="bg-gradient-to-br from-bb-sunset-50 to-white border-2 border-bb-sunset-400 rounded-xl p-md text-center shadow-md">
            <p className="text-xs font-semibold text-bb-sunset-600 uppercase tracking-wide mb-xs">December ROI</p>
            <p className="text-3xl font-bold text-bb-navy-900">{decemberROI}%</p>
            <p className="text-xs text-bb-slate-600">Return on investment</p>
          </div>
        </div>

        {/* Visual Hiring Timeline */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md mb-lg shadow-md">
          <div className="flex items-center justify-between mb-md">
            <h3 className="text-lg font-bold text-bb-navy-900">Hiring Sequence Timeline</h3>
            <div className="flex gap-md text-xs">
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-bb-electric-500"></span> New Hire</span>
              <span className="flex items-center gap-xs"><span className="w-3 h-3 rounded-full bg-bb-slate-300"></span> Ramp Period</span>
            </div>
          </div>

          {/* Timeline Track */}
          <div className="relative">
            {/* Month labels and timeline */}
            <div className="flex justify-between mb-sm">
              {timelineData.map((d, i) => (
                <div key={i} className="flex-1 text-center">
                  <span className="text-xs font-medium text-bb-slate-600">{d.month}</span>
                </div>
              ))}
            </div>

            {/* Timeline bar */}
            <div className="relative h-12 flex items-center">
              <div className="absolute inset-x-0 h-2 bg-bb-slate-100 rounded-full"></div>
              {/* Hire markers */}
              {timelineData.map((d, i) => (
                d.hire && (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${(i / (timelineData.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md ${
                      d.hire === 'Patrick' ? 'bg-bb-navy-600' :
                      d.hire === 'Ops Coord' ? 'bg-bb-emerald-500' :
                      'bg-bb-electric-500'
                    }`}>
                      {d.hire === 'Patrick' ? 'P' : d.hire === 'Rep #2' ? '2' : d.hire === 'Rep #3' ? '3' : d.hire === 'Rep #4' ? '4' : 'O'}
                    </div>
                    <span className="text-[10px] font-medium text-bb-navy-900 mt-xs whitespace-nowrap">{d.hire}</span>
                  </div>
                )
              ))}
            </div>

            {/* Customer count row */}
            <div className="flex justify-between mt-sm pt-sm border-t border-bb-slate-100">
              {timelineData.map((d, i) => (
                <div key={i} className="flex-1 text-center">
                  <span className="text-xs text-bb-slate-500">{d.customers}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-bb-slate-500 text-center mt-xs">Cumulative Active Customers</p>
          </div>
        </div>

        {/* Cost vs Revenue Chart */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md mb-lg shadow-md">
          <div className="flex items-center justify-between mb-md">
            <h3 className="text-lg font-bold text-bb-navy-900">Investment vs Revenue Impact</h3>
            <div className="flex gap-md text-xs">
              <span className="flex items-center gap-xs"><span className="w-8 h-1 rounded bg-bb-burgundy-400"></span> Cumulative Cost</span>
              <span className="flex items-center gap-xs"><span className="w-8 h-1 rounded bg-bb-emerald-500"></span> Cumulative Revenue</span>
            </div>
          </div>

          {/* Simple dual bar chart */}
          <div className="h-32 flex items-end gap-1">
            {timelineData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-px">
                {/* Revenue bar (background) */}
                <div className="w-full flex justify-center gap-px">
                  <div
                    className="w-2 bg-bb-burgundy-300 rounded-t"
                    style={{ height: `${(d.cumCost / maxRevenue) * 100}px` }}
                  ></div>
                  <div
                    className="w-2 bg-bb-emerald-400 rounded-t"
                    style={{ height: `${(d.cumRevenue / maxRevenue) * 100}px` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Break-even marker */}
          <div className="flex justify-between mt-sm text-xs">
            {timelineData.map((_, i) => (
              <div key={i} className="flex-1 text-center">
                {i === 3 && <span className="text-bb-emerald-600 font-semibold">Break-even</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Hire Cards */}
        <div className="space-y-sm mb-md">
          {hiringStrategy.map((hire, idx) => (
            <div
              key={idx}
              className={`rounded-xl border-2 transition-all cursor-pointer ${
                expandedHire === idx
                  ? 'border-bb-electric-400 bg-gradient-to-r from-bb-electric-50 to-white shadow-lg'
                  : 'border-bb-slate-200 bg-white hover:border-bb-slate-300 shadow-sm'
              }`}
              onClick={() => setExpandedHire(expandedHire === idx ? null : idx)}
            >
              <div className="p-md flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
                    idx === 1 ? 'bg-bb-emerald-500' : 'bg-bb-electric-500'
                  }`}>
                    {idx === 0 ? '#2' : idx === 1 ? 'OC' : idx === 2 ? '#3' : '#4'}
                  </div>
                  <div>
                    <p className="font-bold text-bb-navy-900">{hire.position}</p>
                    <p className="text-xs text-bb-slate-600">{hire.expectedTimeline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-lg">
                  <div className="text-right">
                    <p className="font-bold text-bb-navy-900">{hire.costPerMonth}<span className="text-xs font-normal text-bb-slate-500">/mo</span></p>
                    <p className="text-xs text-bb-slate-600">Break-even: {hire.breakEvenProduction}</p>
                  </div>
                  <svg className={`w-5 h-5 text-bb-slate-400 transition-transform ${expandedHire === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expanded content */}
              {expandedHire === idx && (
                <div className="px-md pb-md pt-0 border-t border-bb-slate-100 mt-0">
                  <div className="grid grid-cols-2 gap-md mt-md">
                    <div className="bg-bb-slate-50 rounded-lg p-sm">
                      <p className="text-xs font-semibold text-bb-slate-600 mb-xs">Trigger Metric</p>
                      <p className="text-sm text-bb-navy-900">{hire.triggerMetric}</p>
                    </div>
                    <div className="bg-bb-electric-50 rounded-lg p-sm">
                      <p className="text-xs font-semibold text-bb-electric-600 mb-xs">What It Proves</p>
                      <p className="text-sm text-bb-navy-900">{hire.whatItProves}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show Details Toggle */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-center text-sm text-bb-electric-600 hover:text-bb-electric-700 font-medium py-sm"
        >
          {showDetails ? 'Hide Cost Details' : 'Show Cost Details'} {showDetails ? '▲' : '▼'}
        </button>

        {/* Original Cost Structure (Expandable) */}
        {showDetails && (
          <div className="bg-white rounded-xl p-md border-2 border-bb-slate-200 shadow-sm mt-sm">
            <p className="font-semibold text-bb-navy-900 mb-md text-sm">Detailed Cost Structure</p>
            <div className="grid grid-cols-2 gap-md">
              {hireCosts.map((cost, idx) => (
                <div key={idx} className="bg-bb-slate-50 rounded-lg p-sm">
                  <p className="font-semibold text-bb-navy-900 text-sm mb-xs">{cost.role}</p>
                  <div className="grid grid-cols-3 gap-sm text-xs mb-xs">
                    <div>
                      <span className="text-bb-slate-500">Base:</span>
                      <span className="font-medium text-bb-navy-900 ml-xs">${cost.baseSalary.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-bb-slate-500">Comm:</span>
                      <span className="font-medium text-bb-navy-900 ml-xs">${cost.commission.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-bb-slate-500">Total:</span>
                      <span className="font-bold text-bb-navy-900 ml-xs">${cost.totalMonth.toLocaleString()}/mo</span>
                    </div>
                  </div>
                  <p className="text-xs italic text-bb-slate-600">{cost.notes}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Slide>
  )
}
