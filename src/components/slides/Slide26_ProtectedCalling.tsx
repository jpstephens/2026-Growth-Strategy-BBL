import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { dailySchedule, protectedTimeRule } from '../../data/salesSystem'

export default function Slide26_ProtectedCalling() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Protected Calling Blocks</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">No interruptions. 40+ dials daily. Non-negotiable.</p>

        <div className="space-y-sm mb-lg">
          {dailySchedule.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-lg border-2 p-md flex items-start gap-lg ${
                item.protectedTime
                  ? 'border-bb-cyan bg-blue-50'
                  : 'border-bb-border bg-bb-light-gray'
              }`}
            >
              <div className="flex-shrink-0 w-24">
                <p className="font-mono font-bold text-bb-black">{item.time}</p>
                <p className="text-xs text-bb-dark-gray">{item.duration}</p>
              </div>
              <div className="flex-grow">
                <p className={`font-semibold ${item.protectedTime ? 'text-bb-cyan' : 'text-bb-black'}`}>
                  {item.activity}
                </p>
                <p className="text-sm text-bb-dark-gray">{item.notes}</p>
              </div>
            </div>
          ))}
        </div>

        <Callout variant="critical" title="Protected Time Rules">
          <ul className="space-y-xs text-sm">
            {protectedTimeRule.map((rule, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Callout>

        <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-lg border-2 border-bb-cyan">
          <p className="text-sm text-bb-dark-gray">
            <strong>Why This Matters:</strong> One protected calling block costs nothing but yields 10-20 dials and 2-3 conversations. Interruptions kill momentum and destroy daily production. These 4.25 hours daily = 40+ dials weekly = customer pipeline.
          </p>
        </div>
      </div>
    </Slide>
  )
}
