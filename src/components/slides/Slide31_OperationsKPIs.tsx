import Slide from '../layout/Slide'
import MetricCardEnhanced from '../content/MetricCardEnhanced'
import { operationsKPIs } from '../../data/kpis'

export default function Slide31_OperationsKPIs() {
  // Group KPIs by category
  const serviceQuality = operationsKPIs.filter(k =>
    k.metric === 'On-Time Pickup' || k.metric === 'On-Time Delivery' || k.metric === 'Issue Resolution Time'
  )
  const efficiency = operationsKPIs.filter(k =>
    k.metric === 'Margin per Load' || k.metric === 'Direct Carrier %'
  )
  const reliability = operationsKPIs.filter(k =>
    k.metric === 'Repeat Carrier Rate' || k.metric === 'Customer Complaints'
  )

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Operations KPIs</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-sunset-500 to-bb-emerald-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-600">Load execution. Carrier network. Quality assurance.</p>
        </div>

        {/* Service Quality KPIs */}
        <div>
          <h3 className="text-sm font-semibold text-bb-emerald-600 uppercase tracking-wide mb-lg flex items-center gap-sm">
            <div className="w-3 h-3 bg-bb-emerald-500 rounded-full"></div>
            Service Quality
          </h3>
          <div className="grid grid-cols-3 gap-lg">
            {serviceQuality.map((kpi, idx) => (
              <MetricCardEnhanced
                key={idx}
                label={kpi.metric}
                value={kpi.target}
                size="sm"
                color="emerald"
                owner={kpi.owner}
                frequency={kpi.frequency}
              />
            ))}
          </div>
        </div>

        {/* Efficiency KPIs */}
        <div>
          <h3 className="text-sm font-semibold text-bb-electric-600 uppercase tracking-wide mb-lg flex items-center gap-sm">
            <div className="w-3 h-3 bg-bb-electric-500 rounded-full"></div>
            Efficiency
          </h3>
          <div className="grid grid-cols-2 gap-lg">
            {efficiency.map((kpi, idx) => (
              <MetricCardEnhanced
                key={idx}
                label={kpi.metric}
                value={kpi.target}
                size="md"
                color="electric"
                owner={kpi.owner}
                frequency={kpi.frequency}
              />
            ))}
          </div>
        </div>

        {/* Reliability KPIs */}
        <div>
          <h3 className="text-sm font-semibold text-bb-sunset-600 uppercase tracking-wide mb-lg flex items-center gap-sm">
            <div className="w-3 h-3 bg-bb-sunset-500 rounded-full"></div>
            Reliability & Network
          </h3>
          <div className="grid grid-cols-2 gap-lg">
            {reliability.map((kpi, idx) => (
              <MetricCardEnhanced
                key={idx}
                label={kpi.metric}
                value={kpi.target}
                size="sm"
                color="sunset"
                owner={kpi.owner}
                frequency={kpi.frequency}
              />
            ))}
          </div>
        </div>

        {/* Tracking Infrastructure */}
        <div className="bg-gradient-to-r from-bb-sunset-50 to-bb-emerald-50 rounded-2xl p-xl border-2 border-bb-sunset-300 shadow-md">
          <h4 className="text-lg font-bold text-bb-navy-900 mb-lg">Tracking Infrastructure</h4>
          <div className="grid grid-cols-5 gap-md">
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Pickups</p>
              <p className="text-sm text-bb-slate-700">Alvys + Trucker Tools</p>
            </div>
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Deliveries</p>
              <p className="text-sm text-bb-slate-700">Alvys + Trucker Tools</p>
            </div>
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Margin</p>
              <p className="text-sm text-bb-slate-700">Calculated weekly</p>
            </div>
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Carriers</p>
              <p className="text-sm text-bb-slate-700">Tagged per load</p>
            </div>
            <div className="bg-white rounded-xl p-md border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Complaints</p>
              <p className="text-sm text-bb-slate-700">Log maintained</p>
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
              <thead className="bg-gradient-to-r from-bb-sunset-500 to-bb-emerald-500 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-bold">Metric</th>
                  <th className="px-lg py-md text-center font-bold">Target</th>
                  <th className="px-lg py-md text-center font-bold">Frequency</th>
                  <th className="px-lg py-md text-left font-bold">Measurement</th>
                  <th className="px-lg py-md text-left font-bold">Owner</th>
                </tr>
              </thead>
              <tbody>
                {operationsKPIs.map((kpi, idx) => (
                  <tr
                    key={idx}
                    className={`border-t transition-colors ${idx % 2 === 0 ? 'bg-white hover:bg-bb-sunset-50' : 'bg-bb-slate-50 hover:bg-bb-sunset-50'}`}
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
