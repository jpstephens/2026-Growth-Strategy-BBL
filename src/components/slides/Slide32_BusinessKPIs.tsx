import Slide from '../layout/Slide'
import { businessKPIs } from '../../data/kpis'

export default function Slide32_BusinessKPIs() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Business KPIs</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Revenue, profit, growth, and sustainability.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bb-green text-white">
              <tr>
                <th className="px-lg py-sm text-left font-semibold">Metric</th>
                <th className="px-lg py-sm text-center font-semibold">Target</th>
                <th className="px-lg py-sm text-center font-semibold">Frequency</th>
                <th className="px-lg py-sm text-left font-semibold">Measurement</th>
                <th className="px-lg py-sm text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              {businessKPIs.map((kpi, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-green-50'}`}
                >
                  <td className="px-lg py-sm font-semibold text-bb-black">{kpi.metric}</td>
                  <td className="px-lg py-sm text-center text-bb-dark-gray">{kpi.target}</td>
                  <td className="px-lg py-sm text-center text-bb-dark-gray">{kpi.frequency}</td>
                  <td className="px-lg py-sm text-bb-dark-gray">{kpi.how}</td>
                  <td className="px-lg py-sm text-bb-dark-gray">{kpi.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-lg bg-green-50 rounded-lg p-lg border-2 border-bb-green">
          <p className="text-sm text-bb-dark-gray">
            <strong>Tracking:</strong> P&L statement monthly. Customer concentration report monthly. Churn analysis quarterly. All metrics consolidated in monthly all-hands dashboard review.
          </p>
        </div>
      </div>
    </Slide>
  )
}
