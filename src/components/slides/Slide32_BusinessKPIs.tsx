import Slide from '../layout/Slide'

export default function Slide32_BusinessKPIs() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">Business KPIs</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-charcoal-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Revenue, profit, growth, and sustainability.</p>
        </div>

        {/* KPI Grid - 2 rows */}
        <div className="grid grid-cols-2 gap-md">
          {/* Financial Performance */}
          <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-3 h-3 bg-bb-forest-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-bb-forest-700">Financial Performance</h3>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="text-center p-sm bg-white rounded-lg border border-bb-forest-200">
                <p className="text-2xl font-bold text-bb-forest-600">$100K</p>
                <p className="text-xs text-bb-charcoal-700 font-semibold">Monthly Gross Margin</p>
                <p className="text-xs text-bb-charcoal-500">By Dec 2026</p>
              </div>
              <div className="text-center p-sm bg-white rounded-lg border border-bb-forest-200">
                <p className="text-2xl font-bold text-bb-forest-600">$75K+</p>
                <p className="text-xs text-bb-charcoal-700 font-semibold">Monthly Net Profit</p>
                <p className="text-xs text-bb-charcoal-500">By Dec 2026</p>
              </div>
            </div>
          </div>

          {/* Growth Metrics */}
          <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-3 h-3 bg-bb-steel-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-bb-steel-700">Growth Metrics</h3>
            </div>
            <div className="grid grid-cols-3 gap-sm">
              <div className="text-center p-sm bg-white rounded-lg border border-bb-steel-200">
                <p className="text-xl font-bold text-bb-steel-600">65-70</p>
                <p className="text-xs text-bb-charcoal-700 font-semibold">Customers</p>
              </div>
              <div className="text-center p-sm bg-white rounded-lg border border-bb-steel-200">
                <p className="text-xl font-bold text-bb-steel-600">4+</p>
                <p className="text-xs text-bb-charcoal-700 font-semibold">Loads/Customer</p>
              </div>
              <div className="text-center p-sm bg-white rounded-lg border border-bb-steel-200">
                <p className="text-xl font-bold text-bb-steel-600">&lt;15%</p>
                <p className="text-xs text-bb-charcoal-700 font-semibold">Churn Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk & Tracking */}
        <div className="grid grid-cols-2 gap-md">
          {/* Risk Management */}
          <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-3 h-3 bg-bb-amber-500 rounded-full"></div>
              <h3 className="text-sm font-bold text-bb-amber-700">Risk Management</h3>
            </div>
            <div className="flex items-center gap-md">
              <div className="text-center p-sm bg-white rounded-lg border border-bb-amber-200 flex-1">
                <p className="text-xl font-bold text-bb-amber-600">&lt;12%</p>
                <p className="text-xs text-bb-charcoal-700 font-semibold">Customer Concentration</p>
              </div>
              <p className="text-xs text-bb-charcoal-600 flex-1">
                No single customer should exceed 12% of revenue. Diversification protects the business.
              </p>
            </div>
          </div>

          {/* Tracking */}
          <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Tracking Infrastructure</h3>
            <div className="grid grid-cols-4 gap-xs">
              <div className="bg-bb-slate-50 rounded-lg p-xs text-center">
                <p className="text-xs font-semibold text-bb-charcoal-700">P&L</p>
                <p className="text-xs text-bb-charcoal-500">Monthly</p>
              </div>
              <div className="bg-bb-slate-50 rounded-lg p-xs text-center">
                <p className="text-xs font-semibold text-bb-charcoal-700">Concentration</p>
                <p className="text-xs text-bb-charcoal-500">Monthly</p>
              </div>
              <div className="bg-bb-slate-50 rounded-lg p-xs text-center">
                <p className="text-xs font-semibold text-bb-charcoal-700">Churn</p>
                <p className="text-xs text-bb-charcoal-500">Quarterly</p>
              </div>
              <div className="bg-bb-slate-50 rounded-lg p-xs text-center">
                <p className="text-xs font-semibold text-bb-charcoal-700">Dashboard</p>
                <p className="text-xs text-bb-charcoal-500">All-hands</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why These Matter */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <h4 className="text-sm font-bold text-white mb-sm text-center">Why These Metrics Matter</h4>
          <div className="grid grid-cols-3 gap-md">
            <div className="text-center">
              <p className="text-sm font-semibold text-bb-amber-200">Gross Margin</p>
              <p className="text-xs text-bb-forest-100">Core health metric</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-bb-amber-200">Active Customers</p>
              <p className="text-xs text-bb-forest-100">Predictable revenue</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-bb-amber-200">Churn Rate</p>
              <p className="text-xs text-bb-forest-100">Customer loyalty</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
