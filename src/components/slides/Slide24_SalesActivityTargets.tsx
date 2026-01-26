import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide24_SalesActivityTargets() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-sm">
            The Math: 200 Dials → 4 Customers
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Weekly activity targets based on realistic conversion rates</p>
        </motion.div>

        {/* Visual Funnel - Clear Flow with Conversion Rates */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
          <h3 className="text-base font-bold text-bb-charcoal-800 mb-md text-center">Weekly Conversion Funnel</h3>
          <div className="flex items-center justify-center gap-sm">
            {/* Stage 1: Dials */}
            <div className="text-center px-lg py-md bg-bb-amber-50 rounded-lg border-2 border-bb-amber-300 min-w-[120px]">
              <p className="text-3xl font-bold text-bb-amber-600">200</p>
              <p className="text-sm font-semibold text-bb-charcoal-700">Dials</p>
            </div>

            {/* Arrow with conversion rate */}
            <div className="flex flex-col items-center px-sm">
              <span className="text-bb-charcoal-400 text-xl">→</span>
              <span className="text-xs font-bold text-bb-steel-600 bg-bb-steel-50 px-sm py-xs rounded">17.5%</span>
            </div>

            {/* Stage 2: Connects */}
            <div className="text-center px-lg py-md bg-bb-steel-50 rounded-lg border-2 border-bb-steel-300 min-w-[120px]">
              <p className="text-3xl font-bold text-bb-steel-600">35</p>
              <p className="text-sm font-semibold text-bb-charcoal-700">Connects</p>
            </div>

            {/* Arrow with conversion rate */}
            <div className="flex flex-col items-center px-sm">
              <span className="text-bb-charcoal-400 text-xl">→</span>
              <span className="text-xs font-bold text-bb-charcoal-600 bg-bb-slate-100 px-sm py-xs rounded">25%</span>
            </div>

            {/* Stage 3: Qualified */}
            <div className="text-center px-lg py-md bg-bb-slate-50 rounded-lg border-2 border-bb-charcoal-300 min-w-[120px]">
              <p className="text-3xl font-bold text-bb-charcoal-600">9</p>
              <p className="text-sm font-semibold text-bb-charcoal-700">Qualified</p>
            </div>

            {/* Arrow with conversion rate */}
            <div className="flex flex-col items-center px-sm">
              <span className="text-bb-charcoal-400 text-xl">→</span>
              <span className="text-xs font-bold text-bb-forest-600 bg-bb-forest-50 px-sm py-xs rounded">50%</span>
            </div>

            {/* Stage 4: Customers */}
            <div className="text-center px-lg py-md bg-bb-forest-50 rounded-lg border-2 border-bb-forest-300 min-w-[120px]">
              <p className="text-3xl font-bold text-bb-forest-600">4-5</p>
              <p className="text-sm font-semibold text-bb-charcoal-700">Customers</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Weekly Targets */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-lg">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-md">Weekly Targets</h3>
            <div className="grid grid-cols-2 gap-md">
              <div className="text-center p-md bg-white rounded-lg border border-bb-amber-200">
                <p className="text-2xl font-bold text-bb-amber-600">200+</p>
                <p className="text-sm text-bb-charcoal-600">Dials</p>
              </div>
              <div className="text-center p-md bg-white rounded-lg border border-bb-steel-200">
                <p className="text-2xl font-bold text-bb-steel-600">35-40</p>
                <p className="text-sm text-bb-charcoal-600">Conversations</p>
              </div>
              <div className="text-center p-md bg-white rounded-lg border border-bb-charcoal-200">
                <p className="text-2xl font-bold text-bb-charcoal-600">8-10</p>
                <p className="text-sm text-bb-charcoal-600">Qualified</p>
              </div>
              <div className="text-center p-md bg-white rounded-lg border border-bb-forest-200">
                <p className="text-2xl font-bold text-bb-forest-600">4-5</p>
                <p className="text-sm text-bb-charcoal-600">Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Daily Breakdown */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-md">Daily Breakdown</h3>
            <div className="space-y-md">
              <div className="flex items-center justify-between p-md bg-bb-slate-50 rounded-lg">
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold text-bb-amber-600">40+</p>
                  <p className="text-sm text-bb-charcoal-600">Dials</p>
                </div>
                <span className="text-bb-slate-400 text-lg">→</span>
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold text-bb-steel-600">7-8</p>
                  <p className="text-sm text-bb-charcoal-600">Connects</p>
                </div>
                <span className="text-bb-slate-400 text-lg">→</span>
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold text-bb-forest-600">1-2</p>
                  <p className="text-sm text-bb-charcoal-600">Qualified</p>
                </div>
              </div>
              <p className="text-sm text-bb-charcoal-600 text-center">
                <span className="font-semibold">Consistency wins.</span> 40 dials/day × 5 days = pipeline that compounds.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-lg shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">The Formula:</span>
            {' '}40 dials/day × 5 days = 200 dials → 35 conversations → 9 qualified → <span className="text-bb-amber-200 font-bold">4-5 new customers/week</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
