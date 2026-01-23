import Slide from '../layout/Slide'
import { scenario1 } from '../../data/financialProjections'

export default function Slide15_FinancialProjection_Scenario1() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Financial Projections: Conservative</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Current team only. No additional hires.</p>

        <div className="overflow-x-auto mb-2xl">
          <table className="w-full text-sm">
            <thead className="bg-bb-navy-900 text-white">
              <tr>
                <th className="px-lg py-sm text-left font-semibold">Month</th>
                <th className="px-lg py-sm text-center font-semibold">New Customers</th>
                <th className="px-lg py-sm text-center font-semibold">Total Active</th>
                <th className="px-lg py-sm text-center font-semibold">Est. Loads</th>
                <th className="px-lg py-sm text-center font-semibold">Gross Margin</th>
                <th className="px-lg py-sm text-center font-semibold">Net Profit</th>
              </tr>
            </thead>
            <tbody>
              {scenario1.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-white'}`}
                >
                  <td className="px-lg py-sm font-semibold text-bb-navy-900">{row.month}</td>
                  <td className="px-lg py-sm text-center text-bb-slate-700">{row.newCustomers}</td>
                  <td className="px-lg py-sm text-center text-bb-slate-700">{row.totalActive}</td>
                  <td className="px-lg py-sm text-center text-bb-slate-700">{row.estLoads}</td>
                  <td className="px-lg py-sm text-center font-semibold text-bb-electric-700">${row.grossMargin.toLocaleString()}</td>
                  <td className="px-lg py-sm text-center font-bold text-bb-green">${row.estNetProfit.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl p-lg border-2 border-bb-slate-300 shadow-lg">
          <p className="text-sm text-bb-slate-700">
            <strong>Scenario 1 (Conservative):</strong> Patrick continues at 4-5 customers/month. No sales hires until confirmed production. No ops coordinator hire. Reaches $48k final active customers, $69k monthly profit by December.
          </p>
          <p className="text-xs text-bb-slate-700 mt-sm italic">
            This scenario prioritizes certainty and controlled growth. Feasible with current team structure.
          </p>
        </div>
      </div>
    </Slide>
  )
}
