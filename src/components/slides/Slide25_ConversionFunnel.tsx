import Slide from '../layout/Slide'
import { conversionFunnel } from '../../data/salesSystem'

export default function Slide25_ConversionFunnel() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Sales Conversion Funnel</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">From 800 dials to 4-5 new customers monthly</p>

        <div className="space-y-md">
          {conversionFunnel.map((stage, idx) => (
            <div
              key={idx}
              className={`rounded-lg border-2 p-lg ${
                idx === 0
                  ? 'border-bb-cyan bg-blue-50'
                  : idx === conversionFunnel.length - 1
                    ? 'border-bb-green bg-green-50'
                    : 'border-bb-border bg-bb-light-gray'
              }`}
            >
              <div className="flex items-start justify-between mb-sm">
                <p className="font-bold text-bb-black text-lg">{stage.metric}</p>
                {stage.rate && <p className="text-sm font-semibold text-bb-cyan bg-white px-sm py-xs rounded">{stage.rate}</p>}
              </div>
              <div className="grid grid-cols-2 gap-md text-sm">
                <div>
                  <p className="text-xs text-bb-dark-gray font-semibold">Weekly:</p>
                  <p className="text-bb-black font-semibold">{stage.weeklyResult}</p>
                </div>
                <div>
                  <p className="text-xs text-bb-dark-gray font-semibold">Monthly:</p>
                  <p className="text-bb-black font-semibold">{stage.monthlyResult}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-lg bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-lg border-2 border-bb-cyan">
          <p className="text-sm text-bb-dark-gray font-semibold mb-sm">
            The Math: 200 dials/week → 30-40 conversations → 8-10 qualified → 4-5 customers
          </p>
          <p className="text-xs text-bb-dark-gray">
            This assumes Patrick hits activity targets and stays disciplined with qualification. Rep #2 and #3 follow the same funnel—more reps = more customers.
          </p>
        </div>
      </div>
    </Slide>
  )
}
