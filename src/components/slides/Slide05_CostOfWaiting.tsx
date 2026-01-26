import Slide from '../layout/Slide'
import ComparisonChart from '../charts/ComparisonChart'

export default function Slide05_CostOfWaiting() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            The Choice Is Clear
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-emerald-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto">
            Do nothing, or do this now. The difference is massive.
          </p>
        </div>

        {/* Hero Impact Banner */}
        <div className="bg-gradient-to-r from-bb-navy-900 to-bb-navy-800 rounded-2xl p-2xl shadow-2xl">
          <div className="flex items-center justify-center gap-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold text-bb-slate-400 uppercase tracking-wide mb-xs">Annual Profit Difference</p>
              <p className="text-6xl font-display font-black text-bb-emerald-400">$900K</p>
              <p className="text-sm text-bb-slate-400 mt-xs">left on the table without action</p>
            </div>
            <div className="h-24 w-px bg-bb-slate-600" />
            <div className="text-center">
              <p className="text-sm font-semibold text-bb-slate-400 uppercase tracking-wide mb-xs">Growth Multiple</p>
              <p className="text-6xl font-display font-black text-bb-electric-400">7.25x</p>
              <p className="text-sm text-bb-slate-400 mt-xs">profit increase potential</p>
            </div>
            <div className="h-24 w-px bg-bb-slate-600" />
            <div className="text-center">
              <p className="text-sm font-semibold text-bb-slate-400 uppercase tracking-wide mb-xs">Customer Growth</p>
              <p className="text-6xl font-display font-black text-bb-sunset-400">8x</p>
              <p className="text-sm text-bb-slate-400 mt-xs">more active customers</p>
            </div>
          </div>
        </div>

        {/* Side-by-Side Scenario Cards */}
        <div className="grid grid-cols-2 gap-2xl">
          {/* Current Pace - Burgundy/Negative */}
          <div className="rounded-2xl border-2 border-bb-burgundy-400 bg-gradient-to-br from-bb-burgundy-50 to-white p-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-bb-burgundy-500 text-white text-xs font-bold px-lg py-xs rounded-bl-lg">
              DO NOTHING
            </div>
            <h3 className="text-2xl font-bold text-bb-burgundy-700 mb-md mt-md">
              End of 2026: Current Pace
            </h3>
            <p className="text-base text-bb-slate-600 mb-xl">
              75 loads/month, 7-9 customers (no changes)
            </p>

            <div className="space-y-lg">
              <div className="flex items-center justify-between p-lg bg-white rounded-xl border border-bb-burgundy-200">
                <span className="text-bb-slate-700 font-medium">Monthly Profit</span>
                <span className="text-3xl font-display font-black text-bb-burgundy-600">$12K</span>
              </div>
              <div className="flex items-center justify-between p-lg bg-white rounded-xl border border-bb-burgundy-200">
                <span className="text-bb-slate-700 font-medium">Annual Profit</span>
                <span className="text-3xl font-display font-black text-bb-burgundy-600">$144K</span>
              </div>
              <div className="flex items-center justify-between p-lg bg-white rounded-xl border border-bb-burgundy-200">
                <span className="text-bb-slate-700 font-medium">Loads/Month</span>
                <span className="text-3xl font-display font-black text-bb-burgundy-600">75</span>
              </div>
            </div>
          </div>

          {/* With Strategy - Emerald/Positive */}
          <div className="rounded-2xl border-2 border-bb-emerald-400 bg-gradient-to-br from-bb-emerald-50 to-white p-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-bb-emerald-500 text-white text-xs font-bold px-lg py-xs rounded-bl-lg">
              WITH THIS STRATEGY
            </div>
            <h3 className="text-2xl font-bold text-bb-emerald-700 mb-md mt-md">
              End of 2026: Execute Plan
            </h3>
            <p className="text-base text-bb-slate-600 mb-xl">
              420 loads/month, 65-70 customers (proven system)
            </p>

            <div className="space-y-lg">
              <div className="flex items-center justify-between p-lg bg-white rounded-xl border border-bb-emerald-200">
                <span className="text-bb-slate-700 font-medium">Monthly Profit</span>
                <div className="flex items-center gap-md">
                  <span className="text-xs font-semibold text-bb-emerald-600 bg-bb-emerald-100 px-sm py-xs rounded">+625%</span>
                  <span className="text-3xl font-display font-black text-bb-emerald-600">$87K</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-lg bg-white rounded-xl border border-bb-emerald-200">
                <span className="text-bb-slate-700 font-medium">Annual Profit</span>
                <div className="flex items-center gap-md">
                  <span className="text-xs font-semibold text-bb-emerald-600 bg-bb-emerald-100 px-sm py-xs rounded">+$900K</span>
                  <span className="text-3xl font-display font-black text-bb-emerald-600">$1.04M</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-lg bg-white rounded-xl border border-bb-emerald-200">
                <span className="text-bb-slate-700 font-medium">Loads/Month</span>
                <div className="flex items-center gap-md">
                  <span className="text-xs font-semibold text-bb-emerald-600 bg-bb-emerald-100 px-sm py-xs rounded">+460%</span>
                  <span className="text-3xl font-display font-black text-bb-emerald-600">420</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Comparison Chart */}
        <ComparisonChart
          data={[
            { name: 'Monthly Profit ($K)', value1: 12, value2: 87 },
            { name: 'Annual Profit ($K)', value1: 144, value2: 1044 },
          ]}
          scenario1Label="Current Pace"
          scenario2Label="With Strategy"
          height={200}
          showDelta={false}
        />

        {/* Expandable Details */}
        <details className="group">
          <summary className="cursor-pointer text-bb-electric-600 font-semibold hover:text-bb-electric-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Detailed Comparison Data
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-bb-navy-900 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-semibold">Metric</th>
                  <th className="px-lg py-md text-center font-semibold">Current Pace</th>
                  <th className="px-lg py-md text-center font-semibold">With Strategy</th>
                  <th className="px-lg py-md text-center font-semibold">Delta</th>
                  <th className="px-lg py-md text-center font-semibold">% Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-white">
                  <td className="px-lg py-md font-semibold text-bb-navy-900">Monthly Profit</td>
                  <td className="px-lg py-md text-center text-bb-burgundy-600">$12,000</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-semibold">$87,000</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600">+$75,000</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-bold">+625%</td>
                </tr>
                <tr className="border-t bg-bb-slate-50">
                  <td className="px-lg py-md font-semibold text-bb-navy-900">Annual Profit</td>
                  <td className="px-lg py-md text-center text-bb-burgundy-600">$144,000</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-semibold">$1,044,000</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600">+$900,000</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-bold">+625%</td>
                </tr>
                <tr className="border-t bg-white">
                  <td className="px-lg py-md font-semibold text-bb-navy-900">Loads/Month</td>
                  <td className="px-lg py-md text-center text-bb-burgundy-600">75</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-semibold">420</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600">+345</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-bold">+460%</td>
                </tr>
                <tr className="border-t bg-bb-slate-50">
                  <td className="px-lg py-md font-semibold text-bb-navy-900">Active Customers</td>
                  <td className="px-lg py-md text-center text-bb-burgundy-600">7-9</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-semibold">65-70</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600">+58-61</td>
                  <td className="px-lg py-md text-center text-bb-emerald-600 font-bold">~8x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </Slide>
  )
}
