import Slide from '../layout/Slide'
import { hiringStrategy, hireCosts } from '../../data/teamStructure'

export default function Slide18_HiringStrategy() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Hiring Plan</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Performance-triggered. Cost-justified. Timeline contingent on execution.</p>

        <div className="space-y-md mb-lg">
          {hiringStrategy.map((hire, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-border bg-white p-lg">
              <div className="flex items-start justify-between mb-sm">
                <p className="font-bold text-bb-black text-lg">{hire.position}</p>
                <p className="text-xs font-semibold bg-bb-light-gray px-sm py-xs rounded text-bb-dark-gray">
                  {hire.expectedTimeline}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-md text-sm mb-sm">
                <div>
                  <p className="text-xs text-bb-dark-gray font-semibold">Trigger:</p>
                  <p className="text-sm text-bb-black">{hire.triggerMetric}</p>
                </div>
                <div>
                  <p className="text-xs text-bb-dark-gray font-semibold">Cost:</p>
                  <p className="text-sm text-bb-black font-bold">{hire.costPerMonth}/mo</p>
                </div>
              </div>
              <div className="pt-sm border-t border-bb-border space-y-xs text-sm">
                <p><strong>What It Proves:</strong> {hire.whatItProves}</p>
                <p className="text-bb-dark-gray">Break-even: {hire.breakEvenProduction}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="font-semibold text-bb-black mb-sm">Cost Structure:</p>
          {hireCosts.map((cost, idx) => (
            <div key={idx} className="text-sm text-bb-dark-gray mb-sm last:mb-0">
              <p className="font-semibold">{cost.role}</p>
              <p className="ml-sm">Base: ${cost.baseSalary.toLocaleString()} | Commission: ${cost.commission.toLocaleString()} | Total: ${cost.totalMonth.toLocaleString()}/mo</p>
              <p className="ml-sm text-xs italic">{cost.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
