import Slide from '../layout/Slide'
import HorizontalBarChart from '../charts/HorizontalBarChart'
import { topCustomers } from '../../data/currentState'

export default function Slide06_TopCustomers() {
  // Prepare data for charts
  const loadsData = topCustomers.map(c => ({
    name: c.name,
    value: c.loads,
    status: c.avgMargin >= 300 ? 'good' as const : c.avgMargin >= 200 ? 'warning' as const : 'critical' as const,
  }))

  const marginData = topCustomers.map(c => ({
    name: c.name,
    value: c.avgMargin,
    status: c.avgMargin >= 300 ? 'good' as const : c.avgMargin >= 200 ? 'warning' as const : 'critical' as const,
  }))

  // Calculate totals
  const totalMargin = topCustomers.reduce((sum, c) => sum + c.totalMargin, 0)
  const totalLoads = topCustomers.reduce((sum, c) => sum + c.loads, 0)
  const avgMarginOverall = Math.round(totalMargin / totalLoads)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm font-display">Top Performing Customers</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-md"></div>
          <p className="text-xl text-bb-slate-700">By margin contribution and consistency</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-lg">
          <div className="bg-gradient-to-br from-bb-emerald-50 to-white rounded-xl p-lg border-2 border-bb-emerald-300 shadow-md">
            <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Total Margin</p>
            <p className="text-3xl font-display font-black text-bb-emerald-600">${totalMargin.toLocaleString()}</p>
            <p className="text-xs text-bb-slate-600 mt-xs">from top 5 customers</p>
          </div>
          <div className="bg-gradient-to-br from-bb-electric-50 to-white rounded-xl p-lg border-2 border-bb-electric-300 shadow-md">
            <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Total Loads</p>
            <p className="text-3xl font-display font-black text-bb-electric-600">{totalLoads}</p>
            <p className="text-xs text-bb-slate-600 mt-xs">across portfolio</p>
          </div>
          <div className="bg-gradient-to-br from-bb-sunset-50 to-white rounded-xl p-lg border-2 border-bb-sunset-300 shadow-md">
            <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Avg Margin/Load</p>
            <p className="text-3xl font-display font-black text-bb-sunset-600">${avgMarginOverall}</p>
            <p className="text-xs text-bb-slate-600 mt-xs">weighted average</p>
          </div>
          <div className="bg-gradient-to-br from-bb-navy-50 to-white rounded-xl p-lg border-2 border-bb-navy-300 shadow-md">
            <p className="text-xs font-semibold text-bb-slate-600 uppercase mb-xs">Template Customer</p>
            <p className="text-2xl font-display font-black text-bb-navy-600">Vibra Screw</p>
            <p className="text-xs text-bb-slate-600 mt-xs">$372 avg margin</p>
          </div>
        </div>

        {/* Two Charts Side by Side */}
        <div className="grid grid-cols-2 gap-2xl">
          <HorizontalBarChart
            data={loadsData}
            title="Load Volume by Customer"
            height={220}
            format="number"
            showValue={false}
          />
          <HorizontalBarChart
            data={marginData}
            title="Average Margin per Load"
            height={220}
            format="currency"
            showValue={false}
          />
        </div>

        {/* Customer Health Matrix */}
        <div className="bg-white rounded-2xl border-2 border-bb-slate-200 p-xl shadow-md">
          <h3 className="text-lg font-semibold text-bb-navy-900 mb-lg">Customer Health Matrix</h3>
          <div className="grid grid-cols-5 gap-md">
            {topCustomers.map((customer, idx) => {
              const healthColor = customer.avgMargin >= 300
                ? 'border-bb-emerald-400 bg-bb-emerald-50'
                : customer.avgMargin >= 200
                ? 'border-bb-sunset-400 bg-bb-sunset-50'
                : 'border-bb-burgundy-400 bg-bb-burgundy-50'
              const healthBadge = customer.avgMargin >= 300
                ? { text: 'Ideal', bg: 'bg-bb-emerald-500' }
                : customer.avgMargin >= 200
                ? { text: 'Good', bg: 'bg-bb-sunset-500' }
                : { text: 'Watch', bg: 'bg-bb-burgundy-500' }

              return (
                <div key={idx} className={`rounded-xl p-lg border-2 ${healthColor} relative`}>
                  <div className={`absolute -top-2 -right-2 ${healthBadge.bg} text-white text-xs font-bold px-sm py-xs rounded-full`}>
                    {healthBadge.text}
                  </div>
                  <p className="font-semibold text-bb-navy-900 text-sm mb-sm truncate">{customer.name}</p>
                  <div className="space-y-xs">
                    <div className="flex justify-between text-xs">
                      <span className="text-bb-slate-600">Loads:</span>
                      <span className="font-semibold text-bb-navy-900">{customer.loads}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-bb-slate-600">Avg Margin:</span>
                      <span className="font-semibold text-bb-navy-900">${customer.avgMargin}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-bb-slate-600">Total:</span>
                      <span className="font-semibold text-bb-emerald-600">${customer.totalMargin.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Profile Criteria Callout */}
        <div className="bg-gradient-to-r from-bb-electric-50 to-bb-emerald-50 rounded-2xl p-xl border-2 border-bb-electric-300 shadow-md">
          <div className="flex items-start gap-xl">
            <div className="bg-bb-electric-500 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0">
              *
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-bb-navy-900 mb-md">What Makes an Ideal Customer?</h4>
              <div className="grid grid-cols-4 gap-lg">
                <div className="flex items-center gap-sm">
                  <div className="w-2 h-2 rounded-full bg-bb-emerald-500"></div>
                  <span className="text-sm text-bb-slate-700">High margin ($200+/load)</span>
                </div>
                <div className="flex items-center gap-sm">
                  <div className="w-2 h-2 rounded-full bg-bb-emerald-500"></div>
                  <span className="text-sm text-bb-slate-700">Consistent volume</span>
                </div>
                <div className="flex items-center gap-sm">
                  <div className="w-2 h-2 rounded-full bg-bb-emerald-500"></div>
                  <span className="text-sm text-bb-slate-700">Reasonable requirements</span>
                </div>
                <div className="flex items-center gap-sm">
                  <div className="w-2 h-2 rounded-full bg-bb-emerald-500"></div>
                  <span className="text-sm text-bb-slate-700">Reliable payments</span>
                </div>
              </div>
              <p className="mt-md text-sm text-bb-slate-600 italic">
                Vibra Screw is the template: $372 avg margin, consistent deliveries, easy to work with. Find more like them.
              </p>
            </div>
          </div>
        </div>

        {/* Expandable Full Table */}
        <details className="group">
          <summary className="cursor-pointer text-bb-electric-600 font-semibold hover:text-bb-electric-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Complete Customer Data Table
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-bb-navy-900 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-semibold">Customer</th>
                  <th className="px-lg py-md text-center font-semibold">Loads</th>
                  <th className="px-lg py-md text-center font-semibold">Total Margin</th>
                  <th className="px-lg py-md text-center font-semibold">Avg Margin</th>
                  <th className="px-lg py-md text-left font-semibold">Assessment</th>
                </tr>
              </thead>
              <tbody>
                {topCustomers.map((c, idx) => (
                  <tr key={idx} className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'}`}>
                    <td className="px-lg py-md font-semibold text-bb-navy-900">{c.name}</td>
                    <td className="px-lg py-md text-center text-bb-slate-700">{c.loads}</td>
                    <td className="px-lg py-md text-center font-semibold text-bb-emerald-600">${c.totalMargin.toLocaleString()}</td>
                    <td className="px-lg py-md text-center font-semibold text-bb-electric-600">${c.avgMargin}</td>
                    <td className="px-lg py-md text-bb-slate-700">{c.assessment}</td>
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
