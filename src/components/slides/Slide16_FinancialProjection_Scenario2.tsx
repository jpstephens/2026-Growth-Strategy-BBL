import Slide from '../layout/Slide'
import { scenario2 } from '../../data/financialProjections'

export default function Slide16_FinancialProjection_Scenario2() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Financial Projections: Aggressive</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">With planned hires: Rep #2 (May), Rep #3 (Aug), Ops support (June-Aug)</p>

        <div className="overflow-x-auto mb-2xl">
          <table className="w-full text-sm">
            <thead className="bg-bb-electric-600 text-white">
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
              {scenario2.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-white'}`}
                >
                  <td className="px-lg py-sm font-semibold text-bb-navy-900">{row.month}</td>
                  <td className="px-lg py-sm text-center text-bb-slate-700">{row.newCustomers}</td>
                  <td className="px-lg py-sm text-center font-semibold text-bb-slate-700">{row.totalActive}</td>
                  <td className="px-lg py-sm text-center font-semibold text-bb-slate-700">{row.estLoads}</td>
                  <td className="px-lg py-sm text-center font-bold text-bb-electric-700">${row.grossMargin.toLocaleString()}</td>
                  <td className="px-lg py-sm text-center font-bold text-bb-green">${row.estNetProfit.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl p-lg border-2 border-bb-electric-400 shadow-lg">
          <p className="text-sm text-bb-slate-700">
            <strong>Scenario 2 (Aggressive):</strong> Execute hires on schedule. Rep #2 ramps to 3+ customers/month by August. Rep #3 brought on when pipeline requires it. Ops support added to unblock David. Reaches 88 active customers, $102k monthly profit by December.
          </p>
          <p className="text-xs text-bb-slate-700 mt-sm italic">
            This scenario requires disciplined hiring and strong sales execution. Higher upside but requires commitment to growth investments.
          </p>
        </div>
      </div>
    </Slide>
  )
}
