import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { dailySchedule, protectedTimeRule } from '../../data/salesSystem'

export default function Slide26_ProtectedCalling() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Protected Calling Blocks
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">
            No interruptions. 40+ dials daily. Non-negotiable.
          </p>
        </div>

        {/* Daily Schedule */}
        <div className="space-y-md">
          {dailySchedule.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl border-2 p-lg flex items-start gap-lg transition-all ${
                item.protectedTime
                  ? 'border-bb-electric-500 bg-gradient-to-r from-bb-electric-50 to-white shadow-md'
                  : 'border-bb-slate-300 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex-shrink-0 w-28">
                <p className="font-mono font-bold text-bb-navy-900 text-lg">{item.time}</p>
                <p className="text-xs text-bb-slate-600">{item.duration}</p>
              </div>
              <div className="flex-grow">
                <p className={`font-semibold text-lg ${item.protectedTime ? 'text-bb-electric-700' : 'text-bb-navy-900'}`}>
                  {item.activity}
                </p>
                <p className="text-sm text-bb-slate-600 mt-xs">{item.notes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rules Callout */}
        <Callout variant="critical" title="Protected Time Rules" size="lg">
          <ul className="space-y-md">
            {protectedTimeRule.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-md">
                <span className="text-bb-electric-500 font-bold text-lg mt-0.5">•</span>
                <span className="text-bb-slate-700">{rule}</span>
              </li>
            ))}
          </ul>
        </Callout>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-bb-electric-500/10 to-bb-sunset-500/10 rounded-2xl p-2xl border-2 border-bb-electric-300/50 shadow-lg">
          <p className="text-lg text-bb-slate-700">
            <strong className="text-bb-navy-900">Why This Matters:</strong> One protected calling block costs nothing but yields 10-20 dials and 2-3 conversations. Interruptions kill momentum and destroy daily production. These 4.25 hours daily = 40+ dials weekly = customer pipeline.
          </p>
        </div>
      </div>
    </Slide>
  )
}
