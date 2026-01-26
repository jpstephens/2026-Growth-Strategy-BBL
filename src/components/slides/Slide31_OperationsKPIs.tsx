import Slide from '../layout/Slide'
import { operationsKPIs } from '../../data/kpis'

export default function Slide31_OperationsKPIs() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">Operations KPIs</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Load execution. Carrier network. Quality assurance.</p>
        </div>

        {/* KPI Grid - Compact 2 rows */}
        <div className="grid grid-cols-3 gap-md">
          {/* Service Quality */}
          <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-3 h-3 bg-bb-forest-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-bb-forest-700">Service Quality</h3>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-center">
                <span className="text-xs text-bb-charcoal-600">On-Time Pickup</span>
                <span className="text-sm font-bold text-bb-forest-600">&gt;95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-bb-charcoal-600">On-Time Delivery</span>
                <span className="text-sm font-bold text-bb-forest-600">&gt;95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-bb-charcoal-600">Issue Resolution</span>
                <span className="text-sm font-bold text-bb-forest-600">&lt;2hrs</span>
              </div>
            </div>
          </div>

          {/* Efficiency */}
          <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-3 h-3 bg-bb-steel-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-bb-steel-700">Efficiency</h3>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-center">
                <span className="text-xs text-bb-charcoal-600">Margin/Load</span>
                <span className="text-sm font-bold text-bb-steel-600">$200+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-bb-charcoal-600">Direct Carrier %</span>
                <span className="text-sm font-bold text-bb-steel-600">&gt;35%</span>
              </div>
            </div>
          </div>

          {/* Reliability */}
          <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-3 h-3 bg-bb-amber-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-bb-amber-700">Reliability</h3>
            </div>
            <div className="space-y-sm">
              <div className="flex justify-between items-center">
                <span className="text-xs text-bb-charcoal-600">Repeat Carrier Rate</span>
                <span className="text-sm font-bold text-bb-amber-600">Track</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-bb-charcoal-600">Customer Complaints</span>
                <span className="text-sm font-bold text-bb-amber-600">&lt;2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Dashboard - API Integration */}
        <div className="bg-gradient-to-r from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md shadow-sm">
          <div className="flex items-center gap-sm mb-sm">
            <div className="w-8 h-8 bg-bb-forest-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">API</div>
            <div>
              <h4 className="text-sm font-bold text-bb-charcoal-800">Custom Live Dashboard</h4>
              <p className="text-xs text-bb-charcoal-500">Real-time ops data via API integration</p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-sm">
            <div className="bg-white rounded-lg p-sm text-center border border-bb-forest-200">
              <p className="text-xs font-bold text-bb-forest-600">Alvys API</p>
              <p className="text-xs text-bb-charcoal-600">Load status</p>
            </div>
            <div className="bg-white rounded-lg p-sm text-center border border-bb-forest-200">
              <p className="text-xs font-bold text-bb-forest-600">Trucker Tools</p>
              <p className="text-xs text-bb-charcoal-600">GPS tracking</p>
            </div>
            <div className="bg-white rounded-lg p-sm text-center border border-bb-forest-200">
              <p className="text-xs font-bold text-bb-forest-600">Auto-Calc</p>
              <p className="text-xs text-bb-charcoal-600">Live margins</p>
            </div>
            <div className="bg-white rounded-lg p-sm text-center border border-bb-forest-200">
              <p className="text-xs font-bold text-bb-forest-600">Carrier Tags</p>
              <p className="text-xs text-bb-charcoal-600">Performance</p>
            </div>
            <div className="bg-white rounded-lg p-sm text-center border border-bb-forest-200">
              <p className="text-xs font-bold text-bb-forest-600">Issue Log</p>
              <p className="text-xs text-bb-charcoal-600">Auto-tracked</p>
            </div>
          </div>
        </div>

        {/* Full KPI Table - Compact */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm overflow-hidden">
          <h4 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Complete KPI Reference</h4>
          <table className="w-full text-xs">
            <thead className="bg-bb-forest-600 text-white">
              <tr>
                <th className="px-sm py-xs text-left font-semibold">Metric</th>
                <th className="px-sm py-xs text-center font-semibold">Target</th>
                <th className="px-sm py-xs text-center font-semibold">Frequency</th>
                <th className="px-sm py-xs text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              {operationsKPIs.map((kpi, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'}>
                  <td className="px-sm py-xs font-semibold text-bb-charcoal-700">{kpi.metric}</td>
                  <td className="px-sm py-xs text-center">
                    <span className="bg-bb-forest-100 text-bb-forest-700 px-xs py-0.5 rounded text-xs font-semibold">
                      {kpi.target}
                    </span>
                  </td>
                  <td className="px-sm py-xs text-center text-bb-charcoal-600">{kpi.frequency}</td>
                  <td className="px-sm py-xs text-bb-charcoal-600">{kpi.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Slide>
  )
}
