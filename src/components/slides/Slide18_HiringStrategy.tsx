import Slide from '../layout/Slide'
import { hiringStrategy, hireCosts } from '../../data/teamStructure'

export default function Slide18_HiringStrategy() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Hiring Plan</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Performance-triggered. Cost-justified. Timeline contingent on execution.</p>

        <div className="space-y-md mb-2xl">
          {hiringStrategy.map((hire, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-slate-300 bg-white p-lg shadow-lg">
              <div className="flex items-start justify-between mb-sm">
                <p className="font-bold text-bb-navy-900 text-lg">{hire.position}</p>
                <p className="text-xs font-semibold bg-white px-sm py-xs rounded border border-bb-slate-300 text-bb-slate-700">
                  {hire.expectedTimeline}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-md text-sm mb-sm">
                <div>
                  <p className="text-xs text-bb-slate-700 font-semibold">Trigger:</p>
                  <p className="text-sm text-bb-navy-900">{hire.triggerMetric}</p>
                </div>
                <div>
                  <p className="text-xs text-bb-slate-700 font-semibold">Cost:</p>
                  <p className="text-sm text-bb-navy-900 font-bold">{hire.costPerMonth}/mo</p>
                </div>
              </div>
              <div className="pt-sm border-t border-bb-slate-300 space-y-xs text-sm">
                <p className="text-bb-navy-900"><strong>What It Proves:</strong> {hire.whatItProves}</p>
                <p className="text-bb-slate-700">Break-even: {hire.breakEvenProduction}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-lg border-2 border-bb-slate-300 shadow-lg">
          <p className="font-semibold text-bb-navy-900 mb-sm">Cost Structure:</p>
          {hireCosts.map((cost, idx) => (
            <div key={idx} className="text-sm text-bb-slate-700 mb-sm last:mb-0">
              <p className="font-semibold text-bb-navy-900">{cost.role}</p>
              <p className="ml-sm text-bb-slate-700">Base: ${cost.baseSalary.toLocaleString()} | Commission: ${cost.commission.toLocaleString()} | Total: ${cost.totalMonth.toLocaleString()}/mo</p>
              <p className="ml-sm text-xs italic text-bb-slate-700">{cost.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
