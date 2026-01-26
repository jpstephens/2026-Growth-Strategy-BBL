import Slide from '../layout/Slide'
import { scenario2 } from '../../data/financialProjections'

export default function Slide16_FinancialProjection_Scenario2() {
  // Year-end metrics (December)
  const yearEnd = scenario2[scenario2.length - 1]
  const yearStart = scenario2[0]

  // Calculate annual totals
  const annualProfit = scenario2.reduce((sum, row) => sum + row.estNetProfit, 0)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-sm">Financial Projections</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-slate-700">With planned hires: Rep #2 (May), Rep #3 (Aug), Ops support (June-Aug)</p>
        </div>

        {/* Year-End Summary Cards */}
        <div className="grid grid-cols-4 gap-md">
          <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md text-center">
            <p className="text-2xl font-bold text-bb-forest-600">${(yearEnd.estNetProfit / 1000).toFixed(0)}K</p>
            <p className="text-xs font-semibold text-bb-charcoal-700">December Net Profit</p>
            <p className="text-xs text-bb-charcoal-500">+${((yearEnd.estNetProfit - yearStart.estNetProfit) / 1000).toFixed(0)}K vs Jan</p>
          </div>
          <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md text-center">
            <p className="text-2xl font-bold text-bb-steel-600">{yearEnd.totalActive}</p>
            <p className="text-xs font-semibold text-bb-charcoal-700">Active Customers</p>
            <p className="text-xs text-bb-charcoal-500">Target: 70</p>
          </div>
          <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md text-center">
            <p className="text-2xl font-bold text-bb-amber-600">{yearEnd.estLoads}</p>
            <p className="text-xs font-semibold text-bb-charcoal-700">Monthly Loads</p>
            <p className="text-xs text-bb-charcoal-500">+{yearEnd.estLoads - yearStart.estLoads} vs Jan</p>
          </div>
          <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md text-center">
            <p className="text-2xl font-bold text-bb-charcoal-800">${(annualProfit / 1000).toFixed(0)}K</p>
            <p className="text-xs font-semibold text-bb-charcoal-700">Annual Net Profit</p>
            <p className="text-xs text-bb-charcoal-500">Full year total</p>
          </div>
        </div>

        {/* What This Requires Section */}
        <div className="bg-white rounded-xl p-md border-2 border-bb-slate-200 shadow-sm">
          <h4 className="text-sm font-bold text-bb-charcoal-800 mb-sm">What This Scenario Requires</h4>
          <div className="grid grid-cols-3 gap-md">
            <div className="p-sm bg-bb-amber-50 rounded-lg border border-bb-amber-200">
              <div className="flex items-center gap-xs mb-xs">
                <div className="w-6 h-6 rounded bg-bb-amber-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-xs font-semibold text-bb-charcoal-800">Hiring Timeline</p>
              </div>
              <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                <li><span className="font-semibold text-bb-amber-600">May:</span> Rep #2 starts</li>
                <li><span className="font-semibold text-bb-steel-600">Jun-Aug:</span> Ops support</li>
                <li><span className="font-semibold text-bb-forest-600">Aug:</span> Rep #3 starts</li>
              </ul>
            </div>
            <div className="p-sm bg-bb-steel-50 rounded-lg border border-bb-steel-200">
              <div className="flex items-center gap-xs mb-xs">
                <div className="w-6 h-6 rounded bg-bb-steel-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-xs font-semibold text-bb-charcoal-800">Sales Execution</p>
              </div>
              <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                <li>Rep #2 ramps to 3+ customers/mo</li>
                <li>Rep #3 brought on as needed</li>
                <li>12-15 new customers/mo by Q4</li>
              </ul>
            </div>
            <div className="p-sm bg-bb-forest-50 rounded-lg border border-bb-forest-200">
              <div className="flex items-center gap-xs mb-xs">
                <div className="w-6 h-6 rounded bg-bb-forest-500 text-white flex items-center justify-center text-xs font-bold">3</div>
                <p className="text-xs font-semibold text-bb-charcoal-800">Operations Scale</p>
              </div>
              <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                <li>Ops support unblocks David</li>
                <li>Handle 720 loads/mo by Dec</li>
                <li>88 active customers managed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compact Monthly Table - All 12 months visible */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 shadow-sm overflow-hidden">
          <div className="bg-bb-steel-600 px-sm py-0.5">
            <h4 className="text-xs font-bold text-white">Monthly Projection</h4>
          </div>
          <table className="w-full text-xs">
            <thead className="bg-bb-slate-100">
              <tr>
                <th className="px-xs py-0.5 text-left text-bb-charcoal-700">Month</th>
                <th className="px-xs py-0.5 text-center text-bb-charcoal-700">New</th>
                <th className="px-xs py-0.5 text-center text-bb-charcoal-700">Active</th>
                <th className="px-xs py-0.5 text-center text-bb-charcoal-700">Loads</th>
                <th className="px-xs py-0.5 text-center text-bb-charcoal-700">Gross</th>
                <th className="px-xs py-0.5 text-center text-bb-charcoal-700">Net Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bb-slate-100">
              {scenario2.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'}>
                  <td className="px-xs py-0.5 font-semibold text-bb-charcoal-800">{row.month}</td>
                  <td className="px-xs py-0.5 text-center text-bb-charcoal-600">{row.newCustomers}</td>
                  <td className="px-xs py-0.5 text-center text-bb-charcoal-600">{row.totalActive}</td>
                  <td className="px-xs py-0.5 text-center text-bb-charcoal-600">{row.estLoads}</td>
                  <td className="px-xs py-0.5 text-center text-bb-steel-600">${(row.grossMargin / 1000).toFixed(0)}K</td>
                  <td className="px-xs py-0.5 text-center font-semibold text-bb-forest-600">${(row.estNetProfit / 1000).toFixed(0)}K</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Insight */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Aggressive Growth:</span> Reaches 88 active customers and $102K monthly profit by December with disciplined hiring and execution.
          </p>
        </div>
      </div>
    </Slide>
  )
}
