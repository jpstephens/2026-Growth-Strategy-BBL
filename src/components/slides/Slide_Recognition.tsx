import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { overallPerformance, topCustomers } from '../../data/currentState'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_Recognition() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            What You've Built Together
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-forest-500 to-bb-forest-600 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600 max-w-3xl mx-auto">
            Before we talk about where we're going, let's acknowledge what you've accomplished.
          </p>
        </motion.div>

        {/* The Numbers */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-lg">
          <div className="bg-white rounded-xl border-2 border-bb-forest-300 p-xl shadow-sm text-center">
            <p className="text-4xl font-display font-black text-bb-forest-600 mb-xs">
              {overallPerformance.loadsAnalyzed.toLocaleString()}
            </p>
            <p className="text-lg font-semibold text-bb-charcoal-800">Loads Delivered</p>
            <p className="text-sm text-bb-charcoal-600">On-time. For real customers.</p>
          </div>
          <div className="bg-white rounded-xl border-2 border-bb-forest-300 p-xl shadow-sm text-center">
            <p className="text-4xl font-display font-black text-bb-forest-600 mb-xs">
              ${Math.round(overallPerformance.totalGrossMargin / 1000)}K
            </p>
            <p className="text-lg font-semibold text-bb-charcoal-800">Gross Margin</p>
            <p className="text-sm text-bb-charcoal-600">Real profit. Real business.</p>
          </div>
          <div className="bg-white rounded-xl border-2 border-bb-forest-300 p-xl shadow-sm text-center">
            <p className="text-4xl font-display font-black text-bb-forest-600 mb-xs">
              ${overallPerformance.avgMarginPerLoad}
            </p>
            <p className="text-lg font-semibold text-bb-charcoal-800">Per Load Margin</p>
            <p className="text-sm text-bb-charcoal-600">Unit economics work.</p>
          </div>
        </motion.div>

        {/* Patrick and David's Contributions */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-lg">
          {/* Patrick's Wins */}
          <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-xl shadow-sm">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-amber-500 to-bb-amber-600 flex items-center justify-center text-white text-lg">
                📞
              </div>
              <div>
                <h3 className="text-lg font-bold text-bb-amber-700">Patrick's Wins</h3>
                <p className="text-xs text-bb-charcoal-600">Sales</p>
              </div>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span className="text-sm text-bb-charcoal-700">Brought in {topCustomers.length}+ customers from scratch</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span className="text-sm text-bb-charcoal-700">Vibra Screw: $416/load margin—ideal profile</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span className="text-sm text-bb-charcoal-700">Frontier Door: 75 loads, $18K+ margin</span>
              </li>
            </ul>
          </div>

          {/* David's Wins */}
          <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-xl shadow-sm">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-steel-500 to-bb-steel-600 flex items-center justify-center text-white text-lg">
                🚚
              </div>
              <div>
                <h3 className="text-lg font-bold text-bb-steel-700">David's Wins</h3>
                <p className="text-xs text-bb-charcoal-600">Operations</p>
              </div>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span className="text-sm text-bb-charcoal-700">Executed 774 loads with minimal issues</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span className="text-sm text-bb-charcoal-700">Built reliable carrier relationships</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 font-bold">✓</span>
                <span className="text-sm text-bb-charcoal-700">Saved customers through service recovery</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Acknowledgment */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl p-xl shadow-lg border-2 border-bb-amber-300 text-center">
          <p className="text-lg leading-relaxed mb-sm text-bb-charcoal-800">
            <span className="font-bold">You built a real business.</span>
            {' '}$160K in margin isn't luck—it's execution.
          </p>
          <p className="text-sm text-bb-charcoal-600 italic">
            Everything we're planning next is built on the foundation you created.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
