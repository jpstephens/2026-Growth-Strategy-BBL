import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide21_RoadmapPhase2() {
  const phase = phases[1]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Roadmap: Phase 2
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-sunset-500 to-bb-emerald-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 font-semibold mb-sm">{phase.period}</p>
          <p className="text-lg text-bb-slate-600 italic max-w-2xl mx-auto">"{phase.goal}"</p>
        </div>

        {/* Key Objectives */}
        <Callout variant="warning" title="Key Objectives" size="lg">
          <div className="space-y-lg">
            {[
              'Patrick sustains 4+ customers/month consistently—triggers Rep #2 hire',
              'Rep #2 onboarded and ramping through May-June',
              'Instantly.ai campaign optimized—3%+ reply rate',
              'Direct carrier network >25%—operational efficiency',
              'Close 15-18 new customers—now with two sales reps',
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-lg">
                <div className="w-8 h-8 rounded-full bg-bb-sunset-500 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                  {idx + 1}
                </div>
                <span className="text-base text-bb-slate-700 leading-relaxed pt-1">{objective}</span>
              </div>
            ))}
          </div>
        </Callout>

        {/* Phase End State */}
        <div className="bg-white rounded-2xl border-2 border-bb-navy-200 p-2xl shadow-lg">
          <h3 className="text-xl font-bold text-bb-navy-900 mb-xl">Phase 2 End State (June 30)</h3>
          <div className="grid grid-cols-2 gap-2xl">
            <div className="rounded-xl bg-gradient-to-br from-bb-sunset-50 to-white border-2 border-bb-sunset-200 p-lg">
              <p className="text-sm text-bb-slate-600 font-semibold mb-md">Active Customers</p>
              <p className="text-4xl font-black font-display text-bb-sunset-700">35–40</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-bb-emerald-50 to-white border-2 border-bb-emerald-200 p-lg">
              <p className="text-sm text-bb-slate-600 font-semibold mb-md">Monthly Profit</p>
              <p className="text-4xl font-black font-display text-bb-emerald-700">$30-35K</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
