import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { patrickGrowthPath, davidGrowthPath } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_PatrickRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl mx-auto">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-md">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Roles & Targets
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            Clear ownership. No overlap. Each person excels in their domain.
          </p>
        </motion.div>

        {/* Side by Side Comparison */}
        <div className="grid grid-cols-2 gap-lg">
          {/* Patrick - Sales */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md shadow-sm">
              <div className="flex items-center gap-sm mb-sm">
                <div className="w-10 h-10 rounded-lg bg-bb-amber-500 flex items-center justify-center text-white text-lg font-bold">P</div>
                <div>
                  <h3 className="text-lg font-bold text-bb-charcoal-800">Patrick</h3>
                  <p className="text-xs text-bb-amber-600 font-semibold">100% Sales Focus</p>
                </div>
              </div>

              {/* What He Owns */}
              <div className="mb-sm">
                <p className="text-xs font-semibold text-bb-amber-700 uppercase mb-xs">Owns</p>
                <ul className="space-y-xs">
                  {patrickGrowthPath.whatHeOwns.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-xs text-xs text-bb-charcoal-700">
                      <span className="text-bb-amber-600 font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Targets */}
              <div className="grid grid-cols-3 gap-xs">
                <div className="text-center p-xs bg-white rounded-lg border border-bb-amber-200">
                  <p className="text-lg font-bold text-bb-amber-600">200</p>
                  <p className="text-[10px] text-bb-charcoal-600">Dials/Week</p>
                </div>
                <div className="text-center p-xs bg-white rounded-lg border border-bb-amber-200">
                  <p className="text-lg font-bold text-bb-amber-600">4-5</p>
                  <p className="text-[10px] text-bb-charcoal-600">Customers/Mo</p>
                </div>
                <div className="text-center p-xs bg-white rounded-lg border border-bb-amber-200">
                  <p className="text-lg font-bold text-bb-amber-600">8-12</p>
                  <p className="text-[10px] text-bb-charcoal-600">Protected Hrs</p>
                </div>
              </div>
            </div>

            {/* Protected Time */}
            <div className="bg-white rounded-xl border-2 border-bb-amber-200 p-sm">
              <p className="text-xs font-semibold text-bb-amber-700 mb-xs">Protected Calling: 8am-12pm Daily</p>
              <p className="text-xs text-bb-charcoal-600">No meetings. No ops issues. Leadership enforces this boundary.</p>
            </div>
          </motion.div>

          {/* David - Operations */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md shadow-sm">
              <div className="flex items-center gap-sm mb-sm">
                <div className="w-10 h-10 rounded-lg bg-bb-steel-500 flex items-center justify-center text-white text-lg font-bold">D</div>
                <div>
                  <h3 className="text-lg font-bold text-bb-charcoal-800">David</h3>
                  <p className="text-xs text-bb-steel-600 font-semibold">100% Operations Focus</p>
                </div>
              </div>

              {/* What He Owns */}
              <div className="mb-sm">
                <p className="text-xs font-semibold text-bb-steel-700 uppercase mb-xs">Owns</p>
                <ul className="space-y-xs">
                  {davidGrowthPath.whatHeOwns.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-xs text-xs text-bb-charcoal-700">
                      <span className="text-bb-steel-600 font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Targets */}
              <div className="grid grid-cols-3 gap-xs">
                <div className="text-center p-xs bg-white rounded-lg border border-bb-steel-200">
                  <p className="text-lg font-bold text-bb-steel-600">95%</p>
                  <p className="text-[10px] text-bb-charcoal-600">On-Time</p>
                </div>
                <div className="text-center p-xs bg-white rounded-lg border border-bb-steel-200">
                  <p className="text-lg font-bold text-bb-steel-600">90%</p>
                  <p className="text-[10px] text-bb-charcoal-600">CSAT</p>
                </div>
                <div className="text-center p-xs bg-white rounded-lg border border-bb-steel-200">
                  <p className="text-lg font-bold text-bb-steel-600">80%</p>
                  <p className="text-[10px] text-bb-charcoal-600">Carrier Ret.</p>
                </div>
              </div>
            </div>

            {/* Capacity Trigger */}
            <div className="bg-white rounded-xl border-2 border-bb-steel-200 p-sm">
              <p className="text-xs font-semibold text-bb-steel-700 mb-xs">Ops Coordinator Trigger: 120+ Loads/Mo</p>
              <p className="text-xs text-bb-charcoal-600">Help arrives before burnout. David's capacity is protected.</p>
            </div>
          </motion.div>
        </div>

        {/* Clear Handoff */}
        <motion.div variants={itemVariants} className="mt-md bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Clear handoff:</span> Patrick books first load → successful delivery → David takes over all future ops.
            <span className="text-bb-amber-200"> One owner at each stage. No confusion.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
