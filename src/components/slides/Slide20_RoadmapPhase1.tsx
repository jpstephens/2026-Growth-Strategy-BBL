import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide20_RoadmapPhase1() {
  const phase = phases[0]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Roadmap: Phase 1
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 font-semibold mb-sm">{phase.period}</p>
          <p className="text-lg text-bb-slate-600 italic max-w-2xl mx-auto">"{phase.goal}"</p>
        </div>

        {/* Key Objectives */}
        <Callout variant="info" title="Key Objectives" size="lg">
          <div className="space-y-lg">
            {[
              'Free Patrick from operations—he goes 100% to sales',
              'David owns 100% load execution—no hand-holding',
              'Establish sales rhythm: 40+ dials/day, pipeline tracking live',
              'Warm up Instantly.ai email domains for Q2 campaign',
              'Close 12-15 new customers—prove the model scales',
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-lg">
                <div className="w-8 h-8 rounded-full bg-bb-electric-500 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                  {idx + 1}
                </div>
                <span className="text-base text-bb-slate-700 leading-relaxed pt-1">{objective}</span>
              </div>
            ))}
          </div>
        </Callout>

        {/* Phase End State */}
        <div className="bg-white rounded-2xl border-2 border-bb-navy-200 p-2xl shadow-lg">
          <h3 className="text-xl font-bold text-bb-navy-900 mb-xl">Phase 1 End State (March 31)</h3>
          <div className="grid grid-cols-2 gap-2xl">
            <div className="rounded-xl bg-gradient-to-br from-bb-electric-50 to-white border-2 border-bb-electric-200 p-lg">
              <p className="text-sm text-bb-slate-600 font-semibold mb-md">Active Customers</p>
              <p className="text-4xl font-black font-display text-bb-electric-700">22-25</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-bb-sunset-50 to-white border-2 border-bb-sunset-200 p-lg">
              <p className="text-sm text-bb-slate-600 font-semibold mb-md">Monthly Profit</p>
              <p className="text-4xl font-black font-display text-bb-sunset-700">$20-25K</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
