import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const priorities = [
  {
    level: 1,
    name: 'Active Load Issues',
    icon: '🔴',
    examples: ['Driver broke down', 'Late delivery risk', 'Customer complaint'],
    rule: 'Drop everything. These impact customers NOW.',
  },
  {
    level: 2,
    name: 'Upcoming Pickups',
    icon: '🟡',
    examples: ['Confirm carriers', 'Send BOLs', 'Check appointments'],
    rule: 'Handle before end of day. Prevents tomorrow\'s fires.',
  },
  {
    level: 3,
    name: 'Admin & Planning',
    icon: '🟢',
    examples: ['Invoicing', 'Carrier vetting', 'Process updates'],
    rule: 'Schedule during quiet hours. Important but not urgent.',
  },
]

export default function Slide34_OperationsPriorities() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-xs">David's Priority Framework</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">A simple system to know what to work on first</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Why This Framework */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Why We Need This</h3>
            <div className="space-y-sm">
              <div className="p-sm bg-bb-slate-50 rounded-lg">
                <p className="text-xs font-semibold text-bb-charcoal-700 mb-xs">The Problem It Solves:</p>
                <p className="text-xs text-bb-charcoal-600">When everything feels urgent, you end up fighting fires all day and important work gets pushed. This framework gives David a clear decision tree.</p>
              </div>
              <div className="p-sm bg-bb-slate-50 rounded-lg">
                <p className="text-xs font-semibold text-bb-charcoal-700 mb-xs">What It Prevents:</p>
                <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                  <li>• Missed pickups because you were doing invoicing</li>
                  <li>• Angry customers from unresolved issues</li>
                  <li>• Decision paralysis when inbox is full</li>
                </ul>
              </div>
              <div className="p-sm bg-bb-forest-50 rounded-lg border border-bb-forest-200">
                <p className="text-xs font-semibold text-bb-forest-700 mb-xs">What It Enables:</p>
                <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                  <li>• Confidence you're working on the right thing</li>
                  <li>• Faster decisions without second-guessing</li>
                  <li>• Time for proactive work (carrier development)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: The Framework */}
          <motion.div variants={itemVariants} className="space-y-sm">
            {priorities.map((p, idx) => (
              <div key={idx} className={`rounded-xl border-2 p-sm shadow-sm ${
                idx === 0 ? 'border-red-300 bg-red-50' :
                idx === 1 ? 'border-amber-300 bg-amber-50' :
                'border-green-300 bg-green-50'
              }`}>
                <div className="flex items-center gap-sm mb-xs">
                  <span className="text-lg">{p.icon}</span>
                  <span className="font-bold text-bb-charcoal-800 text-sm">Priority {p.level}: {p.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-sm">
                  <div>
                    <p className="text-xs text-bb-charcoal-500 mb-xs">Examples:</p>
                    <ul className="text-xs text-bb-charcoal-600 space-y-0.5">
                      {p.examples.map((ex, i) => (
                        <li key={i}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs font-semibold text-bb-charcoal-700 italic">"{p.rule}"</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Daily Application */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">How David Uses This Daily</h3>
          <div className="grid grid-cols-4 gap-md">
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-bold text-bb-charcoal-700">Morning Check</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">Review all active loads. Any red flags?</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-bold text-bb-charcoal-700">Before Lunch</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">All tomorrow's pickups confirmed?</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-bold text-bb-charcoal-700">Afternoon</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">Admin work if no urgent issues</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-bold text-bb-charcoal-700">End of Day</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">Prep tomorrow, clear inbox</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">The Rule:</span>
            {' '}When in doubt, ask: "Is a load in trouble?" If yes, handle it. If no, check tomorrow's pickups.
            <span className="text-bb-amber-200 font-semibold"> Simple decisions = less stress.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
