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
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            What You've Built Together
          </h1>
          <div className="w-32 h-1 bg-bb-charcoal-800 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto leading-relaxed">
            Before we talk about where we're going, let's acknowledge what you've accomplished.
          </p>
        </motion.div>

        {/* The Numbers */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-xl">
          <div className="bg-white rounded-xl border border-bb-slate-200 p-2xl shadow-sm text-center">
            <p className="text-5xl font-display font-black text-bb-charcoal-800 mb-sm">
              {overallPerformance.loadsAnalyzed.toLocaleString()}
            </p>
            <p className="text-lg font-semibold text-bb-charcoal-700">Loads Delivered</p>
            <p className="text-sm text-bb-slate-500 mt-xs">On-time. For real customers.</p>
          </div>
          <div className="bg-white rounded-xl border border-bb-slate-200 p-2xl shadow-sm text-center">
            <p className="text-5xl font-display font-black text-bb-forest-600 mb-sm">
              ${Math.round(overallPerformance.totalGrossMargin / 1000)}K
            </p>
            <p className="text-lg font-semibold text-bb-charcoal-700">Gross Margin</p>
            <p className="text-sm text-bb-slate-500 mt-xs">Real profit. Real business.</p>
          </div>
          <div className="bg-white rounded-xl border border-bb-slate-200 p-2xl shadow-sm text-center">
            <p className="text-5xl font-display font-black text-bb-steel-600 mb-sm">
              ${overallPerformance.avgMarginPerLoad}
            </p>
            <p className="text-lg font-semibold text-bb-charcoal-700">Per Load Margin</p>
            <p className="text-sm text-bb-slate-500 mt-xs">Unit economics work.</p>
          </div>
        </motion.div>

        {/* Patrick and David's Contributions */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-xl">
          {/* Patrick's Wins */}
          <div className="bg-bb-charcoal-800 rounded-xl p-2xl text-white">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                📞
              </div>
              <div>
                <h3 className="text-xl font-bold">Patrick</h3>
                <p className="text-sm text-bb-slate-300">Sales Wins</p>
              </div>
            </div>
            <ul className="space-y-md">
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-400 font-bold">✓</span>
                <span className="text-bb-slate-200">Brought in {topCustomers.length}+ customers from scratch</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-400 font-bold">✓</span>
                <span className="text-bb-slate-200">Vibra Screw: $416/load margin—ideal customer profile</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-400 font-bold">✓</span>
                <span className="text-bb-slate-200">Frontier Door: 75 loads, $18K+ margin—core account</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-400 font-bold">✓</span>
                <span className="text-bb-slate-200">Proved the sales process works when he can focus</span>
              </li>
            </ul>
          </div>

          {/* David's Wins */}
          <div className="bg-bb-steel-700 rounded-xl p-2xl text-white">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                🚚
              </div>
              <div>
                <h3 className="text-xl font-bold">David</h3>
                <p className="text-sm text-bb-slate-300">Operations Excellence</p>
              </div>
            </div>
            <ul className="space-y-md">
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-300 font-bold">✓</span>
                <span className="text-bb-slate-200">Executed 774 loads with minimal issues</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-300 font-bold">✓</span>
                <span className="text-bb-slate-200">Built carrier relationships that deliver reliably</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-300 font-bold">✓</span>
                <span className="text-bb-slate-200">Saved customer relationships through service recovery</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-300 font-bold">✓</span>
                <span className="text-bb-slate-200">Made Patrick's sales promises real with execution</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Acknowledgment */}
        <motion.div variants={itemVariants} className="bg-bb-slate-100 rounded-xl p-2xl text-center border border-bb-slate-200">
          <p className="text-xl leading-relaxed text-bb-charcoal-700 mb-md">
            <span className="font-bold">You built a real business.</span> $160K in margin isn't luck—it's execution.
          </p>
          <p className="text-lg text-bb-slate-600 italic">
            Everything we're planning next is built on the foundation you created.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
