import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide03_TheProblem() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title - Reframed */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            Two Jobs, One Person
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600 max-w-3xl mx-auto">
            As roles blurred, both sales and ops competed for the same hours.
            <span className="font-semibold text-bb-charcoal-800"> The structure—not the effort—was the constraint.</span>
          </p>
        </motion.div>

        {/* The Reality - Visual */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-lg">
          {/* Sales Side */}
          <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-lg shadow-sm">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-amber-500 to-bb-amber-600 flex items-center justify-center text-white text-lg font-bold">
                📞
              </div>
              <h3 className="text-lg font-bold text-bb-amber-700">Sales Needs</h3>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm">
                <span className="text-bb-amber-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">200 calls/week minimum</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-amber-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">4 hours/day protected time</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-amber-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">Deep focus, no interruptions</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-amber-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">Long-term relationship building</span>
              </li>
            </ul>
            <div className="mt-md pt-md border-t border-bb-amber-200">
              <p className="text-sm text-bb-amber-700 font-semibold">
                Currently: Getting 0-50 calls/week
              </p>
            </div>
          </div>

          {/* Ops Side */}
          <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-lg shadow-sm">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-steel-500 to-bb-steel-600 flex items-center justify-center text-white text-lg font-bold">
                🚚
              </div>
              <h3 className="text-lg font-bold text-bb-steel-700">Ops Needs</h3>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm">
                <span className="text-bb-steel-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">Immediate response to issues</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-steel-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">Carrier coordination all day</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-steel-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">Customer updates in real-time</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-steel-500 font-bold">→</span>
                <span className="text-sm text-bb-charcoal-700">Problem solving on demand</span>
              </li>
            </ul>
            <div className="mt-md pt-md border-t border-bb-steel-200">
              <p className="text-sm text-bb-steel-700 font-semibold">
                Reality: Operations always wins attention
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Impact */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
          <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md text-center">Current Impact</h3>
          <div className="grid grid-cols-3 gap-md">
            <div className="text-center p-md bg-bb-slate-50 rounded-lg">
              <p className="text-2xl font-display font-black text-bb-charcoal-800 mb-xs">0-50</p>
              <p className="text-xs text-bb-charcoal-600">Calls/week<br />(target: 200)</p>
            </div>
            <div className="text-center p-md bg-bb-slate-50 rounded-lg">
              <p className="text-2xl font-display font-black text-bb-charcoal-800 mb-xs">~1</p>
              <p className="text-xs text-bb-charcoal-600">New customer/month<br />(target: 4-5)</p>
            </div>
            <div className="text-center p-md bg-bb-slate-50 rounded-lg">
              <p className="text-2xl font-display font-black text-bb-charcoal-800 mb-xs">$12K</p>
              <p className="text-xs text-bb-charcoal-600">Monthly profit<br />(target: $100K)</p>
            </div>
          </div>
        </motion.div>

        {/* The Fix */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl p-lg border-2 border-bb-forest-300">
          <div className="flex items-center gap-lg">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-bb-forest-700 mb-sm">The Fix Is Structural</h3>
              <p className="text-base text-bb-charcoal-700 leading-relaxed">
                <span className="font-bold text-bb-charcoal-800">David owns operations. Patrick owns sales.</span>
                {' '}Clear handoff. No overlap. No competing priorities.
              </p>
            </div>
            <div className="text-4xl text-bb-forest-400">
              →
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
