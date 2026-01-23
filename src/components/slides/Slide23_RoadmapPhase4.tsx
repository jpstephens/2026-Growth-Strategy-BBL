import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide23_RoadmapPhase4() {
  const phase = phases[3]

  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Roadmap: Phase 4</h2>
        <p className="text-xl text-bb-green font-semibold text-center mb-sm">{phase.period}</p>
        <p className="text-lg text-bb-dark-gray text-center mb-lg italic">"{phase.goal}"</p>

        <Callout variant="success" title="Final Push to Target">
          <ul className="space-y-sm">
            <li className="flex items-start">
              <span className="text-bb-green font-bold mr-md">1.</span>
              <span>Rep #4 (if needed)—demand-driven, fully validated sales process</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-green font-bold mr-md">2.</span>
              <span>3-4 sales reps combining for 12+ customers/month</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-green font-bold mr-md">3.</span>
              <span>Direct carrier % {'>'}50%—network is mature and efficient</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-green font-bold mr-md">4.</span>
              <span>Close 18-20 new customers in Q4—full team at velocity</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-green font-bold mr-md">5.</span>
              <span>Reach $100K+ monthly profit—GOAL ACHIEVED</span>
            </li>
          </ul>
        </Callout>

        <div className="mt-lg bg-green-50 rounded-lg p-lg border-2 border-bb-green space-y-sm">
          <p className="font-semibold text-bb-black">Phase 4 End State (December 31):</p>
          <div className="grid grid-cols-2 gap-md text-sm">
            <div>
              <p className="text-bb-dark-gray">Active Customers:</p>
              <p className="font-bold text-bb-black">65-70</p>
            </div>
            <div>
              <p className="text-bb-dark-gray">Monthly Profit:</p>
              <p className="font-bold text-bb-green text-lg">$100K+</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
