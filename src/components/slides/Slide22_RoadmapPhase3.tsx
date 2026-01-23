import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide22_RoadmapPhase3() {
  const phase = phases[2]

  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Roadmap: Phase 3</h2>
        <p className="text-xl text-bb-cyan font-semibold text-center mb-sm">{phase.period}</p>
        <p className="text-lg text-bb-dark-gray text-center mb-lg italic">"{phase.goal}"</p>

        <Callout variant="success" title="Key Objectives">
          <ul className="space-y-sm">
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">1.</span>
              <span>Rep #2 reaches full productivity: 3+ customers/month</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">2.</span>
              <span>Rep #3 hired—pipeline overflowing, can't handle with 2 reps</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">3.</span>
              <span>Ops manager/coordinator added—David needs support at 300+ loads/month</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">4.</span>
              <span>Direct carrier % {'>'}35%—strong network effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">5.</span>
              <span>Close 18-20 new customers—three sales reps operating</span>
            </li>
          </ul>
        </Callout>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border space-y-sm">
          <p className="font-semibold text-bb-black">Phase 3 End State (September 30):</p>
          <div className="grid grid-cols-2 gap-md text-sm">
            <div>
              <p className="text-bb-dark-gray">Active Customers:</p>
              <p className="font-bold text-bb-black">50-55</p>
            </div>
            <div>
              <p className="text-bb-dark-gray">Monthly Profit:</p>
              <p className="font-bold text-bb-black">$60-65K</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
