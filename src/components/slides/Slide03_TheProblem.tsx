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
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            The Structural Problem We Created
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto">
            We asked Patrick to do two jobs at once. <span className="font-semibold text-bb-burgundy-600">That's physics, not failure.</span>
          </p>
        </motion.div>

        {/* The Reality - Visual */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-xl">
          {/* Sales Side */}
          <div className="bg-gradient-to-br from-bb-electric-50 to-white rounded-2xl border-2 border-bb-electric-300 p-xl shadow-lg">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-xl font-bold">
                📞
              </div>
              <h3 className="text-xl font-bold text-bb-electric-700">Sales Needs</h3>
            </div>
            <ul className="space-y-md">
              <li className="flex items-start gap-md">
                <span className="text-bb-electric-500 font-bold">→</span>
                <span className="text-bb-slate-700">200 calls/week minimum</span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-bb-electric-500 font-bold">→</span>
                <span className="text-bb-slate-700">4 hours/day protected time</span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-bb-electric-500 font-bold">→</span>
                <span className="text-bb-slate-700">Deep focus, no interruptions</span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-bb-electric-500 font-bold">→</span>
                <span className="text-bb-slate-700">Long-term relationship building</span>
              </li>
            </ul>
            <div className="mt-lg pt-lg border-t border-bb-electric-200">
              <p className="text-sm text-bb-electric-600 font-semibold">
                Reality: Getting 0-50 calls/week
              </p>
            </div>
          </div>

          {/* Ops Side */}
          <div className="bg-gradient-to-br from-bb-emerald-50 to-white rounded-2xl border-2 border-bb-emerald-300 p-xl shadow-lg">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                🚚
              </div>
              <h3 className="text-xl font-bold text-bb-emerald-700">Ops Needs</h3>
            </div>
            <ul className="space-y-md">
              <li className="flex items-start gap-md">
                <span className="text-bb-emerald-500 font-bold">→</span>
                <span className="text-bb-slate-700">Immediate response to issues</span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-bb-emerald-500 font-bold">→</span>
                <span className="text-bb-slate-700">Carrier coordination all day</span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-bb-emerald-500 font-bold">→</span>
                <span className="text-bb-slate-700">Customer updates in real-time</span>
              </li>
              <li className="flex items-start gap-md">
                <span className="text-bb-emerald-500 font-bold">→</span>
                <span className="text-bb-slate-700">Problem solving on demand</span>
              </li>
            </ul>
            <div className="mt-lg pt-lg border-t border-bb-emerald-200">
              <p className="text-sm text-bb-emerald-600 font-semibold">
                Reality: Operations always wins the attention
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Collision */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-burgundy-50 to-white rounded-2xl border-2 border-bb-burgundy-400 p-2xl shadow-lg">
          <div className="flex items-center gap-md mb-xl">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-bb-burgundy-500 to-bb-burgundy-600 flex items-center justify-center text-white text-xl font-bold">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-bb-burgundy-700">When They Collide</h3>
          </div>
          <div className="grid grid-cols-3 gap-lg">
            <div className="text-center p-lg bg-bb-burgundy-50 rounded-xl">
              <p className="text-3xl font-display font-black text-bb-burgundy-600 mb-xs">0-50</p>
              <p className="text-sm text-bb-slate-600">Calls/week<br />(instead of 200)</p>
            </div>
            <div className="text-center p-lg bg-bb-burgundy-50 rounded-xl">
              <p className="text-3xl font-display font-black text-bb-burgundy-600 mb-xs">1</p>
              <p className="text-sm text-bb-slate-600">New customer/month<br />(instead of 4-5)</p>
            </div>
            <div className="text-center p-lg bg-bb-burgundy-50 rounded-xl">
              <p className="text-3xl font-display font-black text-bb-burgundy-600 mb-xs">$12K</p>
              <p className="text-sm text-bb-slate-600">Monthly profit<br />(instead of $100K)</p>
            </div>
          </div>
        </motion.div>

        {/* The Fix */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 rounded-2xl p-2xl shadow-2xl border-2 border-bb-sunset-400">
          <div className="flex items-center justify-between text-white">
            <div>
              <h3 className="text-xl font-bold mb-sm">The Fix Is Structural</h3>
              <p className="text-lg leading-relaxed max-w-2xl">
                <span className="font-bold">David owns operations. Patrick owns sales.</span> Clear handoff. No overlap. No competing priorities.
              </p>
            </div>
            <div className="text-6xl opacity-80">
              →
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
