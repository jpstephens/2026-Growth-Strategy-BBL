import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide21_RoadmapPhase2() {
  const phase = phases[1]

  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Roadmap: Phase 2</h2>
        <p className="text-xl text-bb-cyan font-semibold text-center mb-sm">{phase.period}</p>
        <p className="text-lg text-bb-dark-gray text-center mb-lg italic">"{phase.goal}"</p>

        <Callout variant="info" title="Key Objectives">
          <ul className="space-y-sm">
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">1.</span>
              <span>Patrick sustains 4+ customers/month consistently—triggers Rep #2 hire</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">2.</span>
              <span>Rep #2 onboarded and ramping through May-June</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">3.</span>
              <span>Instantly.ai campaign optimized—3%+ reply rate</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">4.</span>
              <span>Direct carrier network {'>'}25%—operational efficiency</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">5.</span>
              <span>Close 15-18 new customers—now with two sales reps</span>
            </li>
          </ul>
        </Callout>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border space-y-sm">
          <p className="font-semibold text-bb-black">Phase 2 End State (June 30):</p>
          <div className="grid grid-cols-2 gap-md text-sm">
            <div>
              <p className="text-bb-dark-gray">Active Customers:</p>
              <p className="font-bold text-bb-black">35{'–'}40</p>
            </div>
            <div>
              <p className="text-bb-dark-gray">Monthly Profit:</p>
              <p className="font-bold text-bb-black">$30-35K</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
