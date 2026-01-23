import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { customerRamp } from '../../data/financialProjections'

export default function Slide38_CustomerRampCurve() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Customer Ramp Curve</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Months 1-12: How quickly a new customer ramps to full profitability</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bb-cyan text-white">
              <tr>
                <th className="px-lg py-sm text-center font-semibold">Month</th>
                <th className="px-lg py-sm text-center font-semibold">Loads/Month</th>
                <th className="px-lg py-sm text-center font-semibold">Margin/Month</th>
                <th className="px-lg py-sm text-center font-semibold">Cumulative Margin</th>
              </tr>
            </thead>
            <tbody>
              {customerRamp.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
                >
                  <td className="px-lg py-sm text-center font-semibold text-bb-black">M{row.month}</td>
                  <td className="px-lg py-sm text-center">{row.loadsPerMonth}</td>
                  <td className="px-lg py-sm text-center font-semibold text-bb-cyan">${row.marginPerMonth.toLocaleString()}</td>
                  <td className="px-lg py-sm text-center font-bold text-bb-green">${row.cumulative.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
    </Slide>
  )
}
