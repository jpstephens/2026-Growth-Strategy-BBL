import Slide from '../layout/Slide'
import { salesKPIs } from '../../data/kpis'

export default function Slide30_SalesKPIs() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Sales KPIs</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Tracked daily. Reviewed weekly. Essential to execution.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bb-cyan text-white">
              <tr>
                <th className="px-lg py-sm text-left font-semibold">Metric</th>
                <th className="px-lg py-sm text-center font-semibold">Target</th>
                <th className="px-lg py-sm text-center font-semibold">Frequency</th>
                <th className="px-lg py-sm text-left font-semibold">Measurement</th>
                <th className="px-lg py-sm text-left font-semibold">Owner</th>
              </tr>
            </thead>
            <tbody>
              {salesKPIs.map((kpi, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
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

        <div className="mt-lg bg-blue-50 rounded-lg p-lg border-2 border-bb-cyan">
          <p className="text-sm text-bb-dark-gray">
            <strong>Tracking:</strong> Dials logged daily in HubSpot. Conversations tracked with call notes. Deals tracked by stage. Email performance on Instantly.ai dashboard. Weekly review with Chris. Monthly dashboard to full team.
          </p>
        </div>
      </div>
    </Slide>
  )
}
