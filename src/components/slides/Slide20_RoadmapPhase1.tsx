import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide20_RoadmapPhase1() {
  const phase = phases[0]

  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Roadmap: Phase 1</h2>
        <p className="text-xl text-bb-cyan font-semibold text-center mb-sm">{phase.period}</p>
        <p className="text-lg text-bb-dark-gray text-center mb-lg italic">"{phase.goal}"</p>

        <Callout variant="info" title="Key Objectives">
          <ul className="space-y-sm">
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">1.</span>
              <span>Free Patrick from operations—he goes 100% to sales</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">2.</span>
              <span>David owns 100% load execution—no hand-holding</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">3.</span>
              <span>Establish sales rhythm: 40+ dials/day, pipeline tracking live</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">4.</span>
              <span>Warm up Instantly.ai email domains for Q2 campaign</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-md">5.</span>
              <span>Close 12-15 new customers—prove the model scales</span>
            </li>
          </ul>
        </Callout>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border space-y-sm">
          <p className="font-semibold text-bb-black">Phase 1 End State (March 31):</p>
          <div className="grid grid-cols-2 gap-md text-sm">
            <div>
              <p className="text-bb-dark-gray">Active Customers:</p>
              <p className="font-bold text-bb-black">22-25</p>
            </div>
            <div>
              <p className="text-bb-dark-gray">Monthly Profit:</p>
              <p className="font-bold text-bb-black">~$20-25K</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
