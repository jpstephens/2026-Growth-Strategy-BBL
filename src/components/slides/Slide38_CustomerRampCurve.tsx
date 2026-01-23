import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { customerRamp } from '../../data/financialProjections'

export default function Slide38_CustomerRampCurve() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Customer Ramp Curve</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">Months 1-12: How quickly a new customer ramps to full profitability</p>
        </div>

        {/* Ramp Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border-2 border-bb-slate-300">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-bb-electric-500 to-bb-electric-600 text-white">
              <tr>
                <th className="px-lg py-md text-center font-bold">Month</th>
                <th className="px-lg py-md text-center font-bold">Loads/Month</th>
                <th className="px-lg py-md text-center font-bold">Margin/Month</th>
                <th className="px-lg py-md text-center font-bold">Cumulative Margin</th>
              </tr>
            </thead>
            <tbody>
              {customerRamp.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t transition-colors ${idx % 2 === 0 ? 'bg-white hover:bg-bb-electric-50' : 'bg-bb-slate-50 hover:bg-bb-electric-50'}`}
                >
                  <td className="px-lg py-md text-center font-semibold text-bb-navy-900">M{row.month}</td>
                  <td className="px-lg py-md text-center text-bb-slate-700">{row.loadsPerMonth}</td>
                  <td className="px-lg py-md text-center font-semibold text-bb-electric-700">${row.marginPerMonth.toLocaleString()}</td>
                  <td className="px-lg py-md text-center font-bold text-bb-green">${row.cumulative.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout */}
        <div className="mb-2xl">
          <Callout variant="success" title="The Ramp Pattern">
            <p className="mb-sm">
              New customers follow a predictable ramp:
            </p>
            <ul className="space-y-xs text-sm">
              <li>• <strong>Month 1-2:</strong> Trial phase—low volume (1.5-5 loads)</li>
              <li>• <strong>Month 3-5:</strong> Growing confidence—accelerating volume</li>
              <li>• <strong>Month 6+:</strong> Maturity—20+ loads/month consistent</li>
              <li>• <strong>12-month LTV:</strong> ~$37,750 margin per customer acquired</li>
            </ul>
            <p className="mt-sm text-sm italic">
              This is why we need 65-70 customers—a full portfolio at various maturity stages equals predictable revenue.
            </p>
          </Callout>
        </div>
      </div>
    </Slide>
  )
}
