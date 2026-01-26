import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { davidGrowthPath } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_DavidRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-md">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            David's Role & Targets
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            <span className="font-bold text-bb-charcoal-800">Operations is the backbone.</span> Without excellent execution, sales means nothing.
          </p>
        </motion.div>

        {/* Top Row: Ownership */}
        <div className="grid grid-cols-2 gap-lg mb-md">
          {/* What David Owns */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-steel-300 p-lg shadow-sm">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-steel-500 flex items-center justify-center text-white text-lg font-bold">✓</div>
              <h3 className="text-lg font-bold text-bb-charcoal-800">David Owns</h3>
            </div>
            <ul className="space-y-sm">
              {davidGrowthPath.whatHeOwns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-steel-600 font-bold">→</span>
                  <span className="text-base text-bb-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What Patrick Handles */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-lg font-bold">✗</div>
              <h3 className="text-lg font-bold text-bb-charcoal-600">Patrick Handles (Not David)</h3>
            </div>
            <ul className="space-y-sm">
              {davidGrowthPath.whatHeDoesNot.map((item, idx) => (
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
          {/* Performance Targets */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Performance Targets</h3>
            <div className="space-y-sm">
              <div className="flex justify-between items-center">
                <span className="text-sm text-bb-charcoal-600">On-Time Delivery</span>
                <span className="text-lg font-bold text-bb-forest-600">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-bb-charcoal-600">Customer Satisfaction</span>
                <span className="text-lg font-bold text-bb-steel-600">90%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-bb-charcoal-600">Carrier Retention</span>
                <span className="text-lg font-bold text-bb-amber-600">80%</span>
              </div>
            </div>
            <p className="text-sm text-bb-charcoal-500 mt-md pt-md border-t border-bb-slate-200 text-center">
              Industry avg: 70-85%
            </p>
          </motion.div>

          {/* Domain Ownership */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-lg shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">David's Domain</h3>
            <p className="text-3xl font-display font-black text-bb-steel-600 mb-sm">{davidGrowthPath.domain}</p>
            <p className="text-sm text-bb-charcoal-600">You set the priorities. You own the process.</p>
            <p className="text-xs text-bb-steel-700 mt-md font-semibold">Full ownership, full accountability</p>
          </motion.div>

          {/* Capacity Trigger */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Ops Coordinator Trigger</h3>
            <p className="text-3xl font-display font-black text-bb-forest-600 mb-sm">120+ Loads/Mo</p>
            <div className="text-sm text-bb-charcoal-600 space-y-xs">
              <p>6 loads/day max capacity</p>
              <p>Help arrives before burnout</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
