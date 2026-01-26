import Slide from '../layout/Slide'
import TimeSeriesChart from '../charts/TimeSeriesChart'
import MetricCardEnhanced from '../content/MetricCardEnhanced'
import { scenario2 } from '../../data/financialProjections'

export default function Slide16_FinancialProjection_Scenario2() {
  // Transform data for TimeSeriesChart
  const chartData = scenario2.map(row => ({
    name: row.month,
    value: row.estNetProfit,
    grossMargin: row.grossMargin,
    loads: row.estLoads,
    customers: row.totalActive,
  }))

  // Year-end metrics (December)
  const yearEnd = scenario2[scenario2.length - 1]
  const yearStart = scenario2[0]

  // Calculate annual totals
  const annualProfit = scenario2.reduce((sum, row) => sum + row.estNetProfit, 0)
  const annualMargin = scenario2.reduce((sum, row) => sum + row.grossMargin, 0)
  const totalNewCustomers = scenario2.reduce((sum, row) => sum + row.newCustomers, 0)

  // Hiring event annotations
  const annotations = [
    { month: 'May', label: 'Rep #2 Starts', color: '#f97316' },
    { month: 'Aug', label: 'Rep #3 Starts', color: '#10b981' },
  ]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-display font-bold text-bb-charcoal-800 mb-md">Financial Projections: Aggressive</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-700">With planned hires: Rep #2 (May), Rep #3 (Aug), Ops support (June-Aug)</p>
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

        {/* Profit Trajectory Chart with Annotations */}
        <TimeSeriesChart
          data={chartData}
          dataKey="value"
          title="Net Profit Trajectory (Aggressive)"
          yAxisLabel="Net Profit ($)"
          annotations={annotations}
          height={280}
          gradient={{ from: '#0891b2', to: '#e0f7ff' }}
          showLegend={false}
        />

        {/* What This Requires Section */}
        <div className="bg-gradient-to-r from-bb-steel-50 to-bb-forest-50 rounded-2xl p-xl border-2 border-bb-steel-300 shadow-md">
          <h4 className="text-lg font-bold text-bb-charcoal-800 mb-lg">What This Scenario Requires</h4>
          <div className="grid grid-cols-3 gap-xl">
            <div className="bg-white rounded-xl p-lg border border-bb-amber-300">
              <div className="flex items-center gap-sm mb-md">
                <div className="w-8 h-8 rounded-lg bg-bb-amber-500 text-white flex items-center justify-center text-sm font-bold">1</div>
                <p className="font-semibold text-bb-charcoal-800">Hiring Timeline</p>
              </div>
              <ul className="text-sm text-bb-slate-700 space-y-xs">
                <li>• <span className="font-semibold text-bb-amber-600">May:</span> Rep #2 starts</li>
                <li>• <span className="font-semibold text-bb-steel-600">Jun-Aug:</span> Ops support added</li>
                <li>• <span className="font-semibold text-bb-forest-600">Aug:</span> Rep #3 starts</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-lg border border-bb-steel-300">
              <div className="flex items-center gap-sm mb-md">
                <div className="w-8 h-8 rounded-lg bg-bb-steel-500 text-white flex items-center justify-center text-sm font-bold">2</div>
                <p className="font-semibold text-bb-charcoal-800">Sales Execution</p>
              </div>
              <ul className="text-sm text-bb-slate-700 space-y-xs">
                <li>• Rep #2 ramps to 3+ customers/month by Aug</li>
                <li>• Rep #3 brought on when pipeline requires</li>
                <li>• 12-15 new customers/month by Q4</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-lg border border-bb-forest-300">
              <div className="flex items-center gap-sm mb-md">
                <div className="w-8 h-8 rounded-lg bg-bb-forest-500 text-white flex items-center justify-center text-sm font-bold">3</div>
                <p className="font-semibold text-bb-charcoal-800">Operations Scale</p>
              </div>
              <ul className="text-sm text-bb-slate-700 space-y-xs">
                <li>• Ops support unblocks David</li>
                <li>• Handle 720 loads/month by Dec</li>
                <li>• 88 active customers managed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scenario Context */}
        <div className="bg-white rounded-2xl p-lg border-2 border-bb-steel-400 shadow-md">
          <div className="flex items-start gap-lg">
            <div className="bg-bb-steel-500 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0 font-bold">
              S2
            </div>
            <div>
              <h4 className="text-lg font-bold text-bb-charcoal-800 mb-sm">Scenario 2: Aggressive Growth</h4>
              <p className="text-sm text-bb-slate-700">
                This scenario requires disciplined hiring and strong sales execution. Higher upside but requires commitment to growth investments. Reaches 88 active customers and $102K monthly profit by December.
              </p>
            </div>
          </div>
        </div>

        {/* Expandable Full Table */}
        <details className="group">
          <summary className="cursor-pointer text-bb-steel-600 font-semibold hover:text-bb-steel-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Complete Monthly Projection Table (12 months)
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-bb-steel-600 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-semibold">Month</th>
                  <th className="px-lg py-md text-center font-semibold">New Customers</th>
                  <th className="px-lg py-md text-center font-semibold">Total Active</th>
                  <th className="px-lg py-md text-center font-semibold">Est. Loads</th>
                  <th className="px-lg py-md text-center font-semibold">Gross Margin</th>
                  <th className="px-lg py-md text-center font-semibold">Net Profit</th>
                  <th className="px-lg py-md text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {scenario2.map((row, idx) => {
                  let note = ''
                  if (row.month === 'May') note = 'Rep #2 ramping'
                  if (row.month === 'Aug') note = 'Rep #3 ramping'
                  if (row.month === 'Jun') note = 'Ops support added'

                  return (
                    <tr
                      key={idx}
                      className={`border-t transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'} hover:bg-bb-steel-50`}
                    >
                      <td className="px-lg py-md font-semibold text-bb-charcoal-800">{row.month}</td>
                      <td className="px-lg py-md text-center text-bb-slate-700">{row.newCustomers}</td>
                      <td className="px-lg py-md text-center font-semibold text-bb-slate-700">{row.totalActive}</td>
                      <td className="px-lg py-md text-center font-semibold text-bb-slate-700">{row.estLoads}</td>
                      <td className="px-lg py-md text-center font-bold text-bb-steel-700">${row.grossMargin.toLocaleString()}</td>
                      <td className="px-lg py-md text-center font-bold text-bb-forest-600">${row.estNetProfit.toLocaleString()}</td>
                      <td className="px-lg py-md text-bb-amber-600 text-xs font-semibold">{note}</td>
                    </tr>
                  )
                })}
                {/* Totals Row */}
                <tr className="border-t-2 border-bb-steel-300 bg-bb-steel-50 font-bold">
                  <td className="px-lg py-md text-bb-charcoal-800">TOTAL</td>
                  <td className="px-lg py-md text-center text-bb-charcoal-800">{totalNewCustomers}</td>
                  <td className="px-lg py-md text-center text-bb-slate-600">—</td>
                  <td className="px-lg py-md text-center text-bb-slate-600">—</td>
                  <td className="px-lg py-md text-center text-bb-steel-700">${annualMargin.toLocaleString()}</td>
                  <td className="px-lg py-md text-center text-bb-forest-600">${annualProfit.toLocaleString()}</td>
                  <td className="px-lg py-md"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </Slide>
  )
}
