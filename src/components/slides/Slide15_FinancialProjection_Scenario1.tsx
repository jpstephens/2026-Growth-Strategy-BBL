import Slide from '../layout/Slide'
import { scenario1 } from '../../data/financialProjections'

export default function Slide15_FinancialProjection_Scenario1() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Financial Projections: Conservative</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Current team only. No additional hires.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bb-dark-gray text-white">
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
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-light-gray'}`}
                >
                  <td className="px-lg py-sm font-semibold text-bb-black">{row.month}</td>
                  <td className="px-lg py-sm text-center">{row.newCustomers}</td>
                  <td className="px-lg py-sm text-center">{row.totalActive}</td>
                  <td className="px-lg py-sm text-center">{row.estLoads}</td>
                  <td className="px-lg py-sm text-center font-semibold text-bb-cyan">${row.grossMargin.toLocaleString()}</td>
                  <td className="px-lg py-sm text-center font-bold text-bb-green">${row.estNetProfit.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="text-sm text-bb-dark-gray">
            <strong>Scenario 1 (Conservative):</strong> Patrick continues at 4-5 customers/month. No sales hires until confirmed production. No ops coordinator hire. Reaches $48k final active customers, $69k monthly profit by December.
          </p>
          <p className="text-xs text-bb-dark-gray mt-sm italic">
            This scenario prioritizes certainty and controlled growth. Feasible with current team structure.
          </p>
        </div>
      </div>
    </Slide>
  )
}
