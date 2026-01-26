import Slide from '../layout/Slide'
import MetricCardEnhanced from '../content/MetricCardEnhanced'
import { salesKPIs } from '../../data/kpis'

export default function Slide30_SalesKPIs() {
  // Secondary KPIs
  const secondaryKPIs = salesKPIs.filter(k =>
    k.metric === 'Conversations' || k.metric === 'Qualified Prospects' || k.metric === 'Quote-to-Close Rate'
  )
  // Pipeline KPIs
  const pipelineKPIs = salesKPIs.filter(k =>
    k.metric === 'Pipeline Value' || k.metric === 'Email Reply Rate'
  )

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Sales KPIs
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-600">
            Tracked daily. Reviewed weekly. Essential to execution.
          </p>
        </div>

        {/* Primary KPIs (Hero Cards) */}
        <div className="grid grid-cols-2 gap-2xl">
          <MetricCardEnhanced
            label="Dials"
            value="200/week"
            size="lg"
            color="electric"
            owner="Patrick/Chris"
            frequency="Daily"
            icon={<span>P</span>}
          />
          <MetricCardEnhanced
            label="New Customers"
            value="4-6/month"
            size="lg"
            color="emerald"
            owner="Chris"
            frequency="Monthly"
            icon={<span>+</span>}
          />
        </div>

        {/* Secondary KPIs */}
        <div>
          <h3 className="text-sm font-semibold text-bb-slate-600 uppercase tracking-wide mb-lg">Activity Metrics</h3>
          <div className="grid grid-cols-3 gap-lg">
            {secondaryKPIs.map((kpi, idx) => (
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

        {/* Pipeline KPIs */}
        <div>
          <h3 className="text-sm font-semibold text-bb-slate-600 uppercase tracking-wide mb-lg">Pipeline Metrics</h3>
          <div className="grid grid-cols-2 gap-lg">
            {pipelineKPIs.map((kpi, idx) => (
              <MetricCardEnhanced
                key={idx}
                label={kpi.metric}
                value={kpi.target}
                size="sm"
                color={idx === 0 ? 'emerald' : 'sunset'}
                owner={kpi.owner}
                frequency={kpi.frequency}
              />
            ))}
          </div>
        </div>

        {/* Tracking Infrastructure */}
        <div className="bg-gradient-to-r from-bb-electric-50 to-white rounded-2xl p-xl border-2 border-bb-electric-300 shadow-md">
          <h4 className="text-lg font-bold text-bb-navy-900 mb-lg">Tracking Infrastructure</h4>
          <div className="grid grid-cols-4 gap-lg">
            <div className="bg-white rounded-xl p-lg border border-bb-slate-200">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Daily</p>
              <p className="text-sm text-bb-slate-700">Dials logged in HubSpot</p>
            </div>
            <div className="bg-white rounded-xl p-lg border border-bb-slate-200">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Per Call</p>
              <p className="text-sm text-bb-slate-700">Conversations tracked with notes</p>
            </div>
            <div className="bg-white rounded-xl p-lg border border-bb-slate-200">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">By Stage</p>
              <p className="text-sm text-bb-slate-700">Deals tracked in HubSpot</p>
            </div>
            <div className="bg-white rounded-xl p-lg border border-bb-slate-200">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Email</p>
              <p className="text-sm text-bb-slate-700">Instantly.ai dashboard</p>
            </div>
          </div>
          <p className="text-sm text-bb-slate-600 mt-lg italic">
            Weekly review with Chris. Monthly dashboard to full team.
          </p>
        </div>

        {/* Expandable Full Table */}
        <details className="group">
          <summary className="cursor-pointer text-bb-electric-600 font-semibold hover:text-bb-electric-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Complete KPI Reference Table
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-bb-electric-500 to-bb-electric-600 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-bold">Metric</th>
                  <th className="px-lg py-md text-center font-bold">Target</th>
                  <th className="px-lg py-md text-center font-bold">Frequency</th>
                  <th className="px-lg py-md text-left font-bold">Measurement</th>
                  <th className="px-lg py-md text-left font-bold">Owner</th>
                </tr>
              </thead>
              <tbody>
                {salesKPIs.map((kpi, idx) => (
                  <tr
                    key={idx}
                    className={`border-t transition-colors ${
                      idx % 2 === 0 ? 'bg-white hover:bg-bb-electric-50' : 'bg-bb-slate-50 hover:bg-bb-electric-50'
                    }`}
                  >
                    <td className="px-lg py-md font-semibold text-bb-navy-900">{kpi.metric}</td>
                    <td className="px-lg py-md text-center">
                      <span className="bg-bb-electric-100 text-bb-electric-700 px-md py-xs rounded-full font-semibold text-xs">
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
