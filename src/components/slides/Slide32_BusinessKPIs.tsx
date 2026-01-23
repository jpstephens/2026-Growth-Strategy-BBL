import Slide from '../layout/Slide'
import { businessKPIs } from '../../data/kpis'

export default function Slide32_BusinessKPIs() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Business KPIs</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">Revenue, profit, growth, and sustainability.</p>
        </div>

        {/* KPI Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border-2 border-bb-slate-300">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-bb-electric-500 to-bb-electric-600 text-white">
              <tr>
                <th className="px-lg py-md text-left font-bold">Metric</th>
                <th className="px-lg py-md text-center font-bold">Target</th>
                <th className="px-lg py-md text-center font-bold">Frequency</th>
                <th className="px-lg py-md text-left font-bold">Measurement</th>
                <th className="px-lg py-md text-left font-bold">Owner</th>
              </tr>
            </thead>
            <tbody>
              {businessKPIs.map((kpi, idx) => (
                <tr
                  key={idx}
                  className={`border-t transition-colors ${idx % 2 === 0 ? 'bg-white hover:bg-bb-electric-50' : 'bg-bb-slate-50 hover:bg-bb-electric-50'}`}
                >
                  <td className="px-lg py-md font-semibold text-bb-navy-900">{kpi.metric}</td>
                  <td className="px-lg py-md text-center text-bb-slate-700 font-medium">{kpi.target}</td>
                  <td className="px-lg py-md text-center text-bb-slate-700">{kpi.frequency}</td>
                  <td className="px-lg py-md text-bb-slate-700">{kpi.how}</td>
                  <td className="px-lg py-md text-bb-slate-700">{kpi.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tracking Note */}
        <div className="bg-gradient-to-r from-bb-electric-50 to-white rounded-2xl p-2xl border-2 border-bb-electric-300 shadow-lg">
          <p className="text-base text-bb-slate-700 leading-relaxed">
            <span className="font-bold text-bb-navy-900">Tracking:</span> P&L statement monthly. Customer concentration report monthly. Churn analysis quarterly. All metrics consolidated in monthly all-hands dashboard review.
          </p>
        </div>
      </div>
    </Slide>
  )
}
