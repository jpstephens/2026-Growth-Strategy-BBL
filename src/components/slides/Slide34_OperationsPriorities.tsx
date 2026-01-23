import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { priorityFramework } from '../../data/operations'

export default function Slide34_OperationsPriorities() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Operations: Priority Framework</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Clear hierarchy. Prevents chaos. Keeps customers happy.</p>

        <div className="space-y-md">
          {priorityFramework.map((priority, idx) => (
            <div key={idx} className={`rounded-lg border-2 p-lg ${
              idx === 0
                ? 'border-red-500 bg-red-50'
                : idx === 1
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-yellow-500 bg-yellow-50'
            }`}>
              <div className="flex items-start gap-md mb-sm">
                <p className="text-3xl">{priority.icon}</p>
                <div className="flex-grow">
                  <p className="font-bold text-bb-black text-lg">{priority.priority}</p>
                  <p className="text-xs font-semibold text-bb-dark-gray mt-xs italic">{priority.note}</p>
                </div>
              </div>
              <ul className="space-y-xs">
                {priority.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-bb-dark-gray flex items-start">
                    <span className="mr-sm">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Callout variant="critical" title="No Flexibility Here">
          <p>
            This hierarchy is NON-NEGOTIABLE. An active load in trouble takes precedence over everything—new bookings, planning, admin. Happy customers = more referrals. Upset customers = churn.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
