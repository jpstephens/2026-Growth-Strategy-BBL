import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide06_WhyIncompatible() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            Specialization Drives Productivity
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600 max-w-2xl mx-auto">
            Sales and operations require different mindsets.
            Separating them lets each person excel.
          </p>
        </motion.div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-2 gap-lg">
          {/* Operations Side */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-md shadow-sm border-2 border-bb-steel-300">
            <div className="flex items-center gap-md mb-sm">
              <div className="w-12 h-12 bg-bb-steel-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h2 className="font-display text-h2 font-bold text-bb-steel-700">Operations Mode</h2>
            </div>

            <div className="space-y-md">
              <div className="bg-bb-slate-50 rounded-xl p-lg border border-bb-slate-200">
                <p className="font-semibold text-bb-charcoal-800 mb-xs">Reactive by Nature</p>
                <p className="text-sm text-bb-charcoal-600 leading-relaxed">
                  Carrier issues, customer updates, load tracking—
                  these need immediate response.
                </p>
              </div>
              <div className="bg-bb-slate-50 rounded-xl p-lg border border-bb-slate-200">
                <p className="font-semibold text-bb-charcoal-800 mb-xs">Short Attention Cycles</p>
                <p className="text-sm text-bb-charcoal-600 leading-relaxed">
                  Success means handling many small tasks quickly.
                  Context switching is the job.
                </p>
              </div>
              <div className="bg-bb-slate-50 rounded-xl p-lg border border-bb-slate-200">
                <p className="font-semibold text-bb-charcoal-800 mb-xs">Urgent Wins</p>
                <p className="text-sm text-bb-charcoal-600 leading-relaxed">
                  When a load needs coverage NOW, everything else stops.
                  That's appropriate for ops.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sales Side */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-md shadow-sm border-2 border-bb-amber-300">
            <div className="flex items-center gap-md mb-sm">
              <div className="w-12 h-12 bg-bb-amber-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h2 className="font-display text-h2 font-bold text-bb-amber-700">Sales Mode</h2>
            </div>

            <div className="space-y-md">
              <div className="bg-bb-slate-50 rounded-xl p-lg border border-bb-slate-200">
                <p className="font-semibold text-bb-charcoal-800 mb-xs">Proactive by Nature</p>
                <p className="text-sm text-bb-charcoal-600 leading-relaxed">
                  Outreach, follow-ups, relationship building—
                  these require initiating, not responding.
                </p>
              </div>
              <div className="bg-bb-slate-50 rounded-xl p-lg border border-bb-slate-200">
                <p className="font-semibold text-bb-charcoal-800 mb-xs">Deep Focus Blocks</p>
                <p className="text-sm text-bb-charcoal-600 leading-relaxed">
                  200 calls/week needs 4-hour uninterrupted blocks.
                  Every interruption resets momentum.
                </p>
              </div>
              <div className="bg-bb-slate-50 rounded-xl p-lg border border-bb-slate-200">
                <p className="font-semibold text-bb-charcoal-800 mb-xs">Important Wins</p>
                <p className="text-sm text-bb-charcoal-600 leading-relaxed">
                  Prospecting feels less urgent than ops fires,
                  but it's what drives growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom explanation */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl p-md border-2 border-bb-forest-300">
          <p className="text-base text-bb-charcoal-700 leading-relaxed">
            <span className="font-bold text-bb-forest-700">The Opportunity:</span>
            {' '}With clear boundaries, Patrick can make 200+ calls/week.
            David can own ops without distraction.
            Both become more productive—not because they work harder,
            but because the structure supports focus.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
