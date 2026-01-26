import Slide from '../layout/Slide'
import MetricCardEnhanced from '../content/MetricCardEnhanced'
import { businessKPIs } from '../../data/kpis'

export default function Slide32_BusinessKPIs() {
  // Hero KPIs (Revenue & Profit)
  const heroKPIs = businessKPIs.filter(k =>
    k.metric === 'Monthly Gross Margin' || k.metric === 'Monthly Net Profit'
  )
  // Growth KPIs
  const growthKPIs = businessKPIs.filter(k =>
    k.metric === 'Active Customers' || k.metric === 'Average Loads per Customer' || k.metric === 'Customer Churn Rate'
  )
  // Risk KPIs
  const riskKPIs = businessKPIs.filter(k =>
    k.metric === 'Customer Concentration'
  )

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Business KPIs</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-navy-500 to-bb-emerald-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-600">Revenue, profit, growth, and sustainability.</p>
        </div>

        {/* Hero KPIs (Revenue & Profit) */}
        <div>
          <h3 className="text-sm font-semibold text-bb-emerald-600 uppercase tracking-wide mb-lg flex items-center gap-sm">
            <div className="w-3 h-3 bg-bb-emerald-500 rounded-full"></div>
            Financial Performance
          </h3>
          <div className="grid grid-cols-2 gap-2xl">
            {heroKPIs.map((kpi, idx) => (
              <MetricCardEnhanced
                key={idx}
                label={kpi.metric}
                value={kpi.target}
                size="lg"
                color="emerald"
                owner={kpi.owner}
                frequency={kpi.frequency}
                icon={idx === 0 ? <span>$</span> : <span>%</span>}
              />
            ))}
          </div>
        </div>

        {/* Growth KPIs */}
        <div>
          <h3 className="text-sm font-semibold text-bb-electric-600 uppercase tracking-wide mb-lg flex items-center gap-sm">
            <div className="w-3 h-3 bg-bb-electric-500 rounded-full"></div>
            Growth Metrics
          </h3>
          <div className="grid grid-cols-3 gap-lg">
            {growthKPIs.map((kpi, idx) => (
              <MetricCardEnhanced
                key={idx}
                label={kpi.metric}
                value={kpi.target}
                size="sm"
                color={idx === 0 ? 'electric' : idx === 1 ? 'sunset' : 'navy'}
                owner={kpi.owner}
                frequency={kpi.frequency}
              />
            ))}
          </div>
        </div>

        {/* Risk KPIs */}
        <div>
          <h3 className="text-sm font-semibold text-bb-sunset-600 uppercase tracking-wide mb-lg flex items-center gap-sm">
            <div className="w-3 h-3 bg-bb-sunset-500 rounded-full"></div>
            Risk Management
          </h3>
          <div className="grid grid-cols-2 gap-lg">
            {riskKPIs.map((kpi, idx) => (
              <MetricCardEnhanced
                key={idx}
                label={kpi.metric}
                value={kpi.target}
                size="md"
                color="sunset"
                owner={kpi.owner}
                frequency={kpi.frequency}
              />
            ))}
            {/* Add context card for risk */}
            <div className="bg-gradient-to-br from-bb-sunset-50 to-white rounded-2xl p-2xl border-2 border-bb-sunset-300 shadow-md">
              <p className="text-sm font-semibold text-bb-sunset-700 mb-sm">Why This Matters</p>
              <p className="text-sm text-bb-slate-700">
                Customer concentration above 15% creates vulnerability. If one large customer leaves, it can devastate monthly numbers. Diversification protects the business.
              </p>
            </div>
          </div>
        </div>

        {/* Why These Metrics Matter */}
        <div className="bg-gradient-to-r from-bb-navy-900 to-bb-navy-800 rounded-2xl p-xl shadow-lg">
          <h4 className="text-lg font-bold text-white mb-lg">Why These Metrics Matter</h4>
          <div className="grid grid-cols-3 gap-xl">
            <div>
              <p className="text-sm font-semibold text-bb-emerald-400 mb-xs">Gross Margin</p>
              <p className="text-sm text-bb-slate-300">The core health metric. Growing margin = growing business value.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-bb-electric-400 mb-xs">Active Customers</p>
              <p className="text-sm text-bb-slate-300">The foundation. More customers = more predictable revenue streams.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-bb-sunset-400 mb-xs">Churn Rate</p>
              <p className="text-sm text-bb-slate-300">Below 15% means we're retaining customers and building loyalty.</p>
            </div>
          </div>
        </div>

        {/* Tracking Infrastructure */}
        <div className="bg-gradient-to-r from-bb-slate-50 to-white rounded-2xl p-xl border-2 border-bb-slate-300 shadow-md">
          <h4 className="text-lg font-bold text-bb-navy-900 mb-lg">Tracking Infrastructure</h4>
          <div className="grid grid-cols-4 gap-lg">
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">P&L</p>
              <p className="text-sm text-bb-slate-700">Monthly statement</p>
            </div>
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Concentration</p>
              <p className="text-sm text-bb-slate-700">Monthly report</p>
            </div>
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Churn</p>
              <p className="text-sm text-bb-slate-700">Quarterly analysis</p>
            </div>
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">All Metrics</p>
              <p className="text-sm text-bb-slate-700">All-hands dashboard</p>
            </div>
          </div>
        </div>

        {/* Expandable Full Table */}
        <details className="group">
          <summary className="cursor-pointer text-bb-electric-600 font-semibold hover:text-bb-electric-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Complete KPI Reference Table
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-bb-navy-500 to-bb-emerald-500 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-bold">Metric</th>
                  <th className="px-lg py-md text-center font-bold">Target</th>
                  <th className="px-lg py-md text-center font-bold">Frequency</th>
                  <th className="px-lg py-md text-left font-bold">Measurement</th>
                  <th className="px-lg py-md text-left font-bold">Owner</th>
                </tr>
              </thead>
              <tbody>
                {businessKPIs.map((kpi, idx) => (
                  <tr
                    key={idx}
                    className={`border-t transition-colors ${idx % 2 === 0 ? 'bg-white hover:bg-bb-emerald-50' : 'bg-bb-slate-50 hover:bg-bb-emerald-50'}`}
                  >
                    <td className="px-lg py-md font-semibold text-bb-navy-900">{kpi.metric}</td>
                    <td className="px-lg py-md text-center">
                      <span className="bg-bb-emerald-100 text-bb-emerald-700 px-md py-xs rounded-full font-semibold text-xs">
                        {kpi.target}
                      </span>
                    </td>
                    <td className="px-lg py-md text-center text-bb-slate-700">{kpi.frequency}</td>
                    <td className="px-lg py-md text-bb-slate-700">{kpi.how}</td>
                    <td className="px-lg py-md text-bb-slate-700">{kpi.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </Slide>
  )
}
