import Slide from '../layout/Slide'
import { scenario2 } from '../../data/financialProjections'

export default function Slide16_FinancialProjection_Scenario2() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Financial Projections: Aggressive</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">With planned hires: Rep #2 (May), Rep #3 (Aug), Ops support (June-Aug)</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bb-cyan text-white">
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
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
                >
                  <td className="px-lg py-sm font-semibold text-bb-black">{row.month}</td>
                  <td className="px-lg py-sm text-center">{row.newCustomers}</td>
                  <td className="px-lg py-sm text-center font-semibold">{row.totalActive}</td>
                  <td className="px-lg py-sm text-center font-semibold">{row.estLoads}</td>
                  <td className="px-lg py-sm text-center font-bold text-bb-cyan">${row.grossMargin.toLocaleString()}</td>
                  <td className="px-lg py-sm text-center font-bold text-bb-green">${row.estNetProfit.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-lg bg-blue-50 rounded-lg p-lg border-2 border-bb-cyan">
          <p className="text-sm text-bb-dark-gray">
            <strong>Scenario 2 (Aggressive):</strong> Execute hires on schedule. Rep #2 ramps to 3+ customers/month by August. Rep #3 brought on when pipeline requires it. Ops support added to unblock David. Reaches 88 active customers, $102k monthly profit by December.
          </p>
          <p className="text-xs text-bb-dark-gray mt-sm italic">
            This scenario requires disciplined hiring and strong sales execution. Higher upside but requires commitment to growth investments.
          </p>
        </div>
      </div>
    </Slide>
  )
}
