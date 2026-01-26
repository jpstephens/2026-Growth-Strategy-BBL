import Slide from '../layout/Slide'
import { salesKPIs } from '../../data/kpis'

export default function Slide30_SalesKPIs() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Sales KPIs
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            Tracked daily. Reviewed weekly. Essential to execution.
          </p>
        </div>

        {/* Primary KPIs - Compact */}
        <div className="grid grid-cols-2 gap-lg">
          <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md shadow-sm">
            <p className="text-xs font-semibold text-bb-amber-600 uppercase tracking-wide mb-xs">Primary Metric</p>
            <p className="text-3xl font-display font-black text-bb-amber-600">200/week</p>
            <p className="text-base font-bold text-bb-charcoal-800">Dials</p>
            <p className="text-xs text-bb-charcoal-500 mt-xs">Owner: Patrick/Chris | Daily tracking</p>
          </div>
          <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md shadow-sm">
            <p className="text-xs font-semibold text-bb-forest-600 uppercase tracking-wide mb-xs">Primary Metric</p>
            <p className="text-3xl font-display font-black text-bb-forest-600">4-5/month</p>
            <p className="text-base font-bold text-bb-charcoal-800">New Customers</p>
            <p className="text-xs text-bb-charcoal-500 mt-xs">Owner: Chris | Monthly review</p>
          </div>
        </div>

        {/* Secondary KPIs - Grid */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Activity & Pipeline Metrics</h3>
          <div className="grid grid-cols-5 gap-md">
            {salesKPIs.slice(0, 5).map((kpi, idx) => (
              <div key={idx} className="text-center p-sm bg-bb-slate-50 rounded-lg">
                <p className="text-lg font-bold text-bb-steel-600">{kpi.target}</p>
                <p className="text-xs text-bb-charcoal-700 font-semibold">{kpi.metric}</p>
                <p className="text-xs text-bb-charcoal-500">{kpi.frequency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Dashboard - API Integration */}
        <div className="bg-gradient-to-r from-bb-steel-50 to-white rounded-xl p-md border-2 border-bb-steel-300 shadow-sm">
          <div className="flex items-center gap-sm mb-sm">
            <div className="w-8 h-8 bg-bb-steel-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">API</div>
            <div>
              <h4 className="text-sm font-bold text-bb-charcoal-800">Custom Live Dashboard</h4>
              <p className="text-xs text-bb-charcoal-500">Real-time data via API integration</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-sm">
            <div className="bg-white rounded-lg p-sm border border-bb-steel-200 text-center">
              <p className="text-xs font-bold text-bb-steel-600">HubSpot API</p>
              <p className="text-xs text-bb-charcoal-600">Dials, deals, pipeline</p>
            </div>
            <div className="bg-white rounded-lg p-sm border border-bb-steel-200 text-center">
              <p className="text-xs font-bold text-bb-steel-600">Instantly.ai API</p>
              <p className="text-xs text-bb-charcoal-600">Email metrics</p>
            </div>
            <div className="bg-white rounded-lg p-sm border border-bb-steel-200 text-center">
              <p className="text-xs font-bold text-bb-steel-600">Auto-Refresh</p>
              <p className="text-xs text-bb-charcoal-600">Live updates</p>
            </div>
            <div className="bg-white rounded-lg p-sm border border-bb-steel-200 text-center">
              <p className="text-xs font-bold text-bb-steel-600">Single View</p>
              <p className="text-xs text-bb-charcoal-600">All metrics unified</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">One dashboard. Live data. No manual tracking.</span>
            {' '}API integrations pull activity in real-time so we always know where we stand.
          </p>
        </div>
      </div>
    </Slide>
  )
}
