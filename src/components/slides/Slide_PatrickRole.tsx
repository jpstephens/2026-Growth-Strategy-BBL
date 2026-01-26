import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { patrickGrowthPath } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_PatrickRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Patrick's Role & Targets
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            <span className="font-bold text-bb-charcoal-800">100% sales focus.</span> Clear ownership. Protected time. Proven targets.
          </p>
        </motion.div>

        {/* Top Row: Ownership */}
        <div className="grid grid-cols-2 gap-lg mb-lg">
          {/* What Patrick Owns */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-forest-300 p-lg shadow-sm">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-forest-500 flex items-center justify-center text-white text-lg font-bold">✓</div>
              <h3 className="text-lg font-bold text-bb-charcoal-800">Patrick Owns</h3>
            </div>
            <ul className="space-y-sm">
              {patrickGrowthPath.whatHeOwns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-forest-600 font-bold">→</span>
                  <span className="text-base text-bb-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What David Handles */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-lg font-bold">✗</div>
              <h3 className="text-lg font-bold text-bb-charcoal-600">David Handles (Not Patrick)</h3>
            </div>
            <ul className="space-y-sm">
              {patrickGrowthPath.whatHeDoesNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-slate-400 font-bold">×</span>
                  <span className="text-base text-bb-charcoal-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Row: Metrics */}
        <div className="grid grid-cols-3 gap-lg">
          {/* Weekly Activity */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Weekly Activity</h3>
            <div className="space-y-sm">
              <div className="flex justify-between items-center">
                <span className="text-sm text-bb-charcoal-600">Dials</span>
                <span className="text-lg font-bold text-bb-amber-600">200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-bb-charcoal-600">Conversations</span>
                <span className="text-lg font-bold text-bb-steel-600">40</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-bb-charcoal-600">Quotes Sent</span>
                <span className="text-lg font-bold text-bb-forest-600">4</span>
              </div>
            </div>
            <p className="text-sm text-bb-charcoal-500 mt-md pt-md border-t border-bb-slate-200 text-center">
              → <span className="font-bold text-bb-forest-600">1 new customer/week</span>
            </p>
          </motion.div>

          {/* Protected Time */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-lg shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Protected Calling</h3>
            <p className="text-3xl font-display font-black text-bb-amber-600 mb-sm">{patrickGrowthPath.protectedTime}</p>
            <p className="text-sm text-bb-charcoal-600">No meetings. No ops issues. No interruptions.</p>
            <p className="text-xs text-bb-amber-700 mt-md font-semibold">Leadership enforces this boundary</p>
          </motion.div>

          {/* Monthly Target */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Monthly Target</h3>
            <p className="text-3xl font-display font-black text-bb-forest-600 mb-sm">4-5 Customers</p>
            <div className="text-sm text-bb-charcoal-600 space-y-xs">
              <p>800 dials/month</p>
              <p>15-20% connect rate</p>
              <p>50% close rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
