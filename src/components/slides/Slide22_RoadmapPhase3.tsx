import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide22_RoadmapPhase3() {
  const phase = phases[2]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Roadmap: Phase 3
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-emerald-500 to-bb-navy-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 font-semibold mb-sm">{phase.period}</p>
          <p className="text-lg text-bb-slate-600 italic max-w-2xl mx-auto">"{phase.goal}"</p>
        </div>

        {/* Key Objectives */}
        <Callout variant="success" title="Key Objectives" size="lg">
          <div className="space-y-lg">
            {[
              'Rep #2 reaches full productivity: 3+ customers/month',
              'Rep #3 hired—pipeline overflowing, can\'t handle with 2 reps',
              'Ops manager/coordinator added—David needs support at 300+ loads/month',
              'Direct carrier % >35%—strong network effects',
              'Close 18-20 new customers—three sales reps operating',
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-lg">
                <div className="w-8 h-8 rounded-full bg-bb-emerald-500 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                  {idx + 1}
                </div>
                <span className="text-base text-bb-slate-700 leading-relaxed pt-1">{objective}</span>
              </div>
            ))}
          </div>
        </Callout>

        {/* Phase End State */}
        <div className="bg-white rounded-2xl border-2 border-bb-navy-200 p-2xl shadow-lg">
          <h3 className="text-xl font-bold text-bb-navy-900 mb-xl">Phase 3 End State (September 30)</h3>
          <div className="grid grid-cols-2 gap-2xl">
            <div className="rounded-xl bg-gradient-to-br from-bb-emerald-50 to-white border-2 border-bb-emerald-200 p-lg">
              <p className="text-sm text-bb-slate-600 font-semibold mb-md">Active Customers</p>
              <p className="text-4xl font-black font-display text-bb-emerald-700">50-55</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-bb-navy-50 to-white border-2 border-bb-navy-200 p-lg">
              <p className="text-sm text-bb-slate-600 font-semibold mb-md">Monthly Profit</p>
              <p className="text-4xl font-black font-display text-bb-navy-700">$60-65K</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
