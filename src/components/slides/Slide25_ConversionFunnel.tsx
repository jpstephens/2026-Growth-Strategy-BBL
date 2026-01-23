import Slide from '../layout/Slide'
import { conversionFunnel } from '../../data/salesSystem'

export default function Slide25_ConversionFunnel() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Sales Conversion Funnel
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-emerald-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">
            From 800 dials to 4-5 new customers monthly
          </p>
        </div>

        {/* Funnel Stages */}
        <div className="space-y-md">
          {conversionFunnel.map((stage, idx) => {
            const isFirst = idx === 0
            const isLast = idx === conversionFunnel.length - 1
            const colorClass = isFirst
              ? 'border-bb-electric-500 bg-gradient-to-r from-bb-electric-50 to-white'
              : isLast
              ? 'border-bb-emerald-500 bg-gradient-to-r from-bb-emerald-50 to-white'
              : 'border-bb-slate-300 bg-white'

            return (
              <div key={idx} className={`rounded-xl border-2 p-xl shadow-md hover:shadow-lg transition-all ${colorClass}`}>
                <div className="flex items-start justify-between mb-md">
                  <p className="font-bold text-bb-navy-900 text-xl">{stage.metric}</p>
                  {stage.rate && (
                    <div className={`text-sm font-semibold px-lg py-xs rounded-full ${
                      isFirst ? 'bg-bb-electric-100 text-bb-electric-700' : 'bg-bb-emerald-100 text-bb-emerald-700'
                    }`}>
                      {stage.rate}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-lg text-sm">
                  <div>
                    <p className="text-xs text-bb-slate-600 font-semibold mb-xs">Weekly:</p>
                    <p className="text-bb-navy-900 font-bold text-lg">{stage.weeklyResult}</p>
                  </div>
                  <div>
                    <p className="text-xs text-bb-slate-600 font-semibold mb-xs">Monthly:</p>
                    <p className="text-bb-navy-900 font-bold text-lg">{stage.monthlyResult}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Box */}
        <div className="bg-gradient-to-r from-bb-electric-500/10 to-bb-emerald-500/10 rounded-2xl p-2xl border-2 border-bb-electric-300/50 shadow-lg">
          <p className="text-lg font-bold text-bb-navy-900 mb-md">
            The Math: 200 dials/week → 30-40 conversations → 8-10 qualified → 4-5 customers
          </p>
          <p className="text-bb-slate-600">
            This assumes Patrick hits activity targets and stays disciplined with qualification. Rep #2 and #3 follow the same funnel—more reps = more customers.
          </p>
        </div>
      </div>
    </Slide>
  )
}
