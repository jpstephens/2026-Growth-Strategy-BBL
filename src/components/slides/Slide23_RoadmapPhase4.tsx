import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { phases } from '../../data/roadmap'

export default function Slide23_RoadmapPhase4() {
  const phase = phases[3]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-900 mb-md">
            Roadmap: Phase 4
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-forest-500 to-bb-amber-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 font-semibold mb-sm">{phase.period}</p>
          <p className="text-lg text-bb-slate-600 italic max-w-2xl mx-auto">"{phase.goal}"</p>
        </div>

        {/* Final Push to Target */}
        <Callout variant="success" title="Final Push to Target" size="lg">
          <div className="space-y-lg">
            {[
              'Rep #4 (if needed)—demand-driven, fully validated sales process',
              '3-4 sales reps combining for 12+ customers/month',
              'Direct carrier % >50%—network is mature and efficient',
              'Close 18-20 new customers in Q4—full team at velocity',
              'Reach $100K+ monthly profit—GOAL ACHIEVED',
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-lg">
                <div className="w-8 h-8 rounded-full bg-bb-forest-500 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                  {idx + 1}
                </div>
                <span className={`text-base leading-relaxed pt-1 ${
                  idx === 4 ? 'font-bold text-bb-forest-900' : 'text-bb-slate-700'
                }`}>
                  {objective}
                </span>
              </div>
            ))}
          </div>
        </Callout>

        {/* Phase End State - GOAL ACHIEVED */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-2xl border-2 border-bb-forest-500 p-3xl shadow-2xl text-white">
          <h3 className="text-2xl font-bold mb-xl text-center">Phase 4 End State (December 31) — 🎯 GOAL ACHIEVED</h3>
          <div className="grid grid-cols-2 gap-2xl">
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-lg">
              <p className="text-sm font-semibold text-bb-forest-50 mb-md">Active Customers</p>
              <p className="text-4xl font-black font-display">65-70</p>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-lg">
              <p className="text-sm font-semibold text-bb-forest-50 mb-md">Monthly Profit</p>
              <p className="text-4xl font-black font-display">$100K+</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
