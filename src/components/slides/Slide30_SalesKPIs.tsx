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

        {/* Tracking Infrastructure */}
        <div className="bg-gradient-to-r from-bb-steel-50 to-white rounded-xl p-md border-2 border-bb-steel-300 shadow-sm">
          <h4 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Tracking Infrastructure</h4>
          <div className="grid grid-cols-4 gap-md">
            <div className="bg-white rounded-lg p-sm border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600">Daily</p>
              <p className="text-xs text-bb-charcoal-600">Dials in HubSpot</p>
            </div>
            <div className="bg-white rounded-lg p-sm border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600">Per Call</p>
              <p className="text-xs text-bb-charcoal-600">Conversations tracked</p>
            </div>
            <div className="bg-white rounded-lg p-sm border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600">By Stage</p>
              <p className="text-xs text-bb-charcoal-600">Deals in HubSpot</p>
            </div>
            <div className="bg-white rounded-lg p-sm border border-bb-slate-200 text-center">
              <p className="text-xs font-semibold text-bb-slate-600">Email</p>
              <p className="text-xs text-bb-charcoal-600">Instantly.ai dashboard</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Weekly review with Chris.</span>
            {' '}Monthly dashboard to full team. Numbers don't lie—we track everything.
          </p>
        </div>
      </div>
    </Slide>
  )
}
