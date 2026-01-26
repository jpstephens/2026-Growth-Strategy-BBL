import Slide from '../layout/Slide'
import TimeSeriesChart from '../charts/TimeSeriesChart'
import MetricCardEnhanced from '../content/MetricCardEnhanced'
import { scenario1 } from '../../data/financialProjections'

export default function Slide15_FinancialProjection_Scenario1() {
  // Transform data for TimeSeriesChart
  const chartData = scenario1.map(row => ({
    name: row.month,
    value: row.estNetProfit,
    grossMargin: row.grossMargin,
    loads: row.estLoads,
    customers: row.totalActive,
  }))

  // Year-end metrics (December)
  const yearEnd = scenario1[scenario1.length - 1]
  const yearStart = scenario1[0]

  // Calculate annual totals
  const annualProfit = scenario1.reduce((sum, row) => sum + row.estNetProfit, 0)
  const annualMargin = scenario1.reduce((sum, row) => sum + row.grossMargin, 0)
  const totalNewCustomers = scenario1.reduce((sum, row) => sum + row.newCustomers, 0)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Financial Projections: Conservative</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-navy-500 to-bb-electric-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-700">Current team only. No additional hires.</p>
        </div>

        {/* Year-End Summary Cards */}
        <div className="grid grid-cols-4 gap-lg">
          <MetricCardEnhanced
            label="December Net Profit"
            value={`$${(yearEnd.estNetProfit / 1000).toFixed(0)}K`}
            size="sm"
            color="emerald"
            delta={{
              value: yearEnd.estNetProfit - yearStart.estNetProfit,
              period: 'vs Jan',
              direction: 'up',
            }}
          />
          <MetricCardEnhanced
            label="Active Customers"
            value={yearEnd.totalActive}
            size="sm"
            color="electric"
            target={{ value: 70, unit: 'absolute' }}
          />
          <MetricCardEnhanced
            label="Monthly Loads"
            value={yearEnd.estLoads}
            size="sm"
            color="sunset"
            delta={{
              value: yearEnd.estLoads - yearStart.estLoads,
              period: 'vs Jan',
              direction: 'up',
            }}
          />
          <MetricCardEnhanced
            label="Annual Net Profit"
            value={`$${(annualProfit / 1000).toFixed(0)}K`}
            size="sm"
            color="navy"
          />
        </div>

        {/* Profit Trajectory Chart */}
        <TimeSeriesChart
          data={chartData}
          dataKey="value"
          title="Net Profit Trajectory (Conservative)"
          yAxisLabel="Net Profit ($)"
          targetLine={87000}
          targetLabel="Aggressive Target ($87K)"
          height={280}
          gradient={{ from: '#1e3a8a', to: '#e6f0ff' }}
          showLegend={false}
        />

        {/* Scenario Context */}
        <div className="bg-gradient-to-r from-bb-navy-50 to-white rounded-2xl p-xl border-2 border-bb-navy-300 shadow-md">
          <div className="flex items-start gap-lg">
            <div className="bg-bb-navy-500 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0 font-bold">
              S1
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-bb-navy-900 mb-sm">Scenario 1: Conservative Growth</h4>
              <div className="grid grid-cols-3 gap-xl">
                <div>
                  <p className="text-sm font-semibold text-bb-slate-600 mb-xs">Approach</p>
                  <p className="text-sm text-bb-slate-700">Patrick continues at 4-5 customers/month. No sales hires until confirmed production.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-bb-slate-600 mb-xs">Key Assumptions</p>
                  <ul className="text-sm text-bb-slate-700 space-y-xs">
                    <li>• No ops coordinator hire</li>
                    <li>• Current team only</li>
                    <li>• Steady 5 new customers/month</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-bb-slate-600 mb-xs">Why This Works</p>
                  <p className="text-sm text-bb-slate-700">Prioritizes certainty and controlled growth. Feasible with current team structure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Full Table */}
        <details className="group">
          <summary className="cursor-pointer text-bb-electric-600 font-semibold hover:text-bb-electric-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Complete Monthly Projection Table (12 months)
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-bb-navy-900 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-semibold">Month</th>
                  <th className="px-lg py-md text-center font-semibold">New Customers</th>
                  <th className="px-lg py-md text-center font-semibold">Total Active</th>
                  <th className="px-lg py-md text-center font-semibold">Est. Loads</th>
                  <th className="px-lg py-md text-center font-semibold">Gross Margin</th>
                  <th className="px-lg py-md text-center font-semibold">Net Profit</th>
                </tr>
              </thead>
              <tbody>
                {scenario1.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'} hover:bg-bb-electric-50`}
                  >
                    <td className="px-lg py-md font-semibold text-bb-navy-900">{row.month}</td>
                    <td className="px-lg py-md text-center text-bb-slate-700">{row.newCustomers}</td>
                    <td className="px-lg py-md text-center text-bb-slate-700">{row.totalActive}</td>
                    <td className="px-lg py-md text-center text-bb-slate-700">{row.estLoads}</td>
                    <td className="px-lg py-md text-center font-semibold text-bb-electric-700">${row.grossMargin.toLocaleString()}</td>
                    <td className="px-lg py-md text-center font-bold text-bb-emerald-600">${row.estNetProfit.toLocaleString()}</td>
                  </tr>
                ))}
                {/* Totals Row */}
                <tr className="border-t-2 border-bb-navy-300 bg-bb-navy-50 font-bold">
                  <td className="px-lg py-md text-bb-navy-900">TOTAL</td>
                  <td className="px-lg py-md text-center text-bb-navy-900">{totalNewCustomers}</td>
                  <td className="px-lg py-md text-center text-bb-slate-600">—</td>
                  <td className="px-lg py-md text-center text-bb-slate-600">—</td>
                  <td className="px-lg py-md text-center text-bb-electric-700">${annualMargin.toLocaleString()}</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600">${annualProfit.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </Slide>
  )
}
