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
            The Sales Funnel Math
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Weekly and monthly targets based on realistic conversion rates</p>
        </motion.div>

        {/* Visual Funnel - Compact */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">Weekly Conversion Funnel</h3>
          <div className="flex items-center justify-center gap-xs">
            <div className="text-center px-md py-sm bg-bb-amber-50 rounded-lg border-2 border-bb-amber-300">
              <p className="text-2xl font-bold text-bb-amber-600">200</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Dials</p>
            </div>
            <div className="flex flex-col items-center px-xs">
              <span className="text-bb-charcoal-400">→</span>
              <span className="text-xs font-bold text-bb-steel-600 bg-bb-steel-50 px-xs py-0.5 rounded">17.5%</span>
            </div>
            <div className="text-center px-md py-sm bg-bb-steel-50 rounded-lg border-2 border-bb-steel-300">
              <p className="text-2xl font-bold text-bb-steel-600">35</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Connects</p>
            </div>
            <div className="flex flex-col items-center px-xs">
              <span className="text-bb-charcoal-400">→</span>
              <span className="text-xs font-bold text-bb-charcoal-600 bg-bb-slate-100 px-xs py-0.5 rounded">25%</span>
            </div>
            <div className="text-center px-md py-sm bg-bb-slate-50 rounded-lg border-2 border-bb-charcoal-300">
              <p className="text-2xl font-bold text-bb-charcoal-600">9</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Qualified</p>
            </div>
            <div className="flex flex-col items-center px-xs">
              <span className="text-bb-charcoal-400">→</span>
              <span className="text-xs font-bold text-bb-forest-600 bg-bb-forest-50 px-xs py-0.5 rounded">50%</span>
            </div>
            <div className="text-center px-md py-sm bg-bb-forest-50 rounded-lg border-2 border-bb-forest-300">
              <p className="text-2xl font-bold text-bb-forest-600">4-5</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Customers</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-md">
          {/* Daily Breakdown */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Daily Target</h3>
            <div className="flex items-center justify-between p-sm bg-white rounded-lg">
              <div className="text-center">
                <p className="text-xl font-bold text-bb-amber-600">40+</p>
                <p className="text-xs text-bb-charcoal-600">Dials</p>
              </div>
              <span className="text-bb-slate-400">→</span>
              <div className="text-center">
                <p className="text-xl font-bold text-bb-steel-600">7-8</p>
                <p className="text-xs text-bb-charcoal-600">Connects</p>
              </div>
              <span className="text-bb-slate-400">→</span>
              <div className="text-center">
                <p className="text-xl font-bold text-bb-forest-600">1-2</p>
                <p className="text-xs text-bb-charcoal-600">Qualified</p>
              </div>
            </div>
            <p className="text-xs text-bb-charcoal-500 mt-sm text-center">8am-12pm protected time</p>
          </motion.div>

          {/* Weekly Summary */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Weekly Target</h3>
            <div className="grid grid-cols-2 gap-xs">
              <div className="text-center p-xs bg-bb-amber-50 rounded-lg">
                <p className="text-lg font-bold text-bb-amber-600">200+</p>
                <p className="text-xs text-bb-charcoal-600">Dials</p>
              </div>
              <div className="text-center p-xs bg-bb-steel-50 rounded-lg">
                <p className="text-lg font-bold text-bb-steel-600">35-40</p>
                <p className="text-xs text-bb-charcoal-600">Connects</p>
              </div>
              <div className="text-center p-xs bg-bb-slate-50 rounded-lg">
                <p className="text-lg font-bold text-bb-charcoal-600">8-10</p>
                <p className="text-xs text-bb-charcoal-600">Qualified</p>
              </div>
              <div className="text-center p-xs bg-bb-forest-50 rounded-lg">
                <p className="text-lg font-bold text-bb-forest-600">4-5</p>
                <p className="text-xs text-bb-charcoal-600">Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Monthly Scale */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Monthly Scale</h3>
            <div className="space-y-xs">
              <div className="flex justify-between items-center p-xs bg-white rounded-lg">
                <span className="text-xs text-bb-charcoal-600">Dials</span>
                <span className="text-sm font-bold text-bb-amber-600">800</span>
              </div>
              <div className="flex justify-between items-center p-xs bg-white rounded-lg">
                <span className="text-xs text-bb-charcoal-600">Conversations</span>
                <span className="text-sm font-bold text-bb-steel-600">140</span>
              </div>
              <div className="flex justify-between items-center p-xs bg-white rounded-lg">
                <span className="text-xs text-bb-charcoal-600">Qualified</span>
                <span className="text-sm font-bold text-bb-charcoal-600">36</span>
              </div>
              <div className="flex justify-between items-center p-xs bg-bb-forest-100 rounded-lg">
                <span className="text-xs font-semibold text-bb-forest-700">New Customers</span>
                <span className="text-sm font-bold text-bb-forest-600">16-18</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why This Works */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">Why This Math Works</h3>
          <div className="grid grid-cols-4 gap-md text-center">
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Input</p>
              <p className="text-base font-bold text-bb-amber-600">Consistent Activity</p>
              <p className="text-xs text-bb-charcoal-600">40 dials/day, 5 days</p>
            </div>
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Conversion</p>
              <p className="text-base font-bold text-bb-steel-600">17.5% → 25% → 50%</p>
              <p className="text-xs text-bb-charcoal-600">Proven rates</p>
            </div>
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Output</p>
              <p className="text-base font-bold text-bb-forest-600">4-5 Customers/Week</p>
              <p className="text-xs text-bb-charcoal-600">Conservative target</p>
            </div>
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Result</p>
              <p className="text-base font-bold text-bb-charcoal-800">Compound Growth</p>
              <p className="text-xs text-bb-charcoal-600">Pipeline builds</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">The Law of the Funnel:</span>
            {' '}More in the top = more out the bottom. Stop feeding the funnel, growth stops.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
