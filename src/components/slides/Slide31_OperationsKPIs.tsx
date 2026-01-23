import Slide from '../layout/Slide'
import { operationsKPIs } from '../../data/kpis'

export default function Slide31_OperationsKPIs() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Operations KPIs</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Load execution. Carrier network. Quality assurance.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bb-dark-gray text-white">
              <tr>
                <th className="px-lg py-sm text-left font-semibold">Metric</th>
                <th className="px-lg py-sm text-center font-semibold">Target</th>
                <th className="px-lg py-sm text-center font-semibold">Frequency</th>
                <th className="px-lg py-sm text-left font-semibold">Measurement</th>
                <th className="px-lg py-sm text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              {operationsKPIs.map((kpi, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-light-gray'}`}
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

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="text-sm text-bb-dark-gray">
            <strong>Tracking:</strong> Pickups and deliveries tracked in Alvys and Trucker Tools. Margin calculated weekly. Carrier tagging on every load. Customer complaint log maintained. Direct carrier percentage calculated monthly.
          </p>
        </div>
      </div>
    </Slide>
  )
}
