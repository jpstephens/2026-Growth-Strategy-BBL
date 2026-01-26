import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Industry benchmarks
const benchmarks = [
  { metric: 'Connect Rate', ours: '17.5%', industry: '8-12%', advantage: 'Warm leads' },
  { metric: 'Qualify Rate', ours: '25%', industry: '15-20%', advantage: 'Targeted NAICS' },
  { metric: 'Close Rate', ours: '50%', industry: '20-30%', advantage: 'Relationship-first' },
]

export default function Slide24_SalesActivityTargets() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-4">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-2">
            The Math: 200 Dials → 4 Customers
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-2" />
          <p className="text-sm text-bb-charcoal-600">Weekly activity targets based on realistic conversion rates</p>
        </motion.div>

        {/* Visual Funnel - Clear Flow with Conversion Rates */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-4 text-center">Weekly Conversion Funnel</h3>
          <div className="flex items-center justify-center gap-2">
            {/* Stage 1: Dials */}
            <div className="text-center px-4 py-3 bg-bb-amber-50 rounded-lg border-2 border-bb-amber-300 min-w-[100px]">
              <p className="text-2xl font-bold text-bb-amber-600">200</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Dials</p>
            </div>

            {/* Arrow with conversion rate */}
            <div className="flex flex-col items-center px-1">
              <span className="text-bb-charcoal-400 text-lg">→</span>
              <span className="text-xs font-bold text-bb-steel-600 bg-bb-steel-50 px-2 py-0.5 rounded">17.5%</span>
            </div>

            {/* Stage 2: Connects */}
            <div className="text-center px-4 py-3 bg-bb-steel-50 rounded-lg border-2 border-bb-steel-300 min-w-[100px]">
              <p className="text-2xl font-bold text-bb-steel-600">35</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Connects</p>
            </div>

            {/* Arrow with conversion rate */}
            <div className="flex flex-col items-center px-1">
              <span className="text-bb-charcoal-400 text-lg">→</span>
              <span className="text-xs font-bold text-bb-charcoal-600 bg-bb-slate-100 px-2 py-0.5 rounded">25%</span>
            </div>

            {/* Stage 3: Qualified */}
            <div className="text-center px-4 py-3 bg-bb-slate-50 rounded-lg border-2 border-bb-charcoal-300 min-w-[100px]">
              <p className="text-2xl font-bold text-bb-charcoal-600">9</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Qualified</p>
            </div>

            {/* Arrow with conversion rate */}
            <div className="flex flex-col items-center px-1">
              <span className="text-bb-charcoal-400 text-lg">→</span>
              <span className="text-xs font-bold text-bb-forest-600 bg-bb-forest-50 px-2 py-0.5 rounded">50%</span>
            </div>

            {/* Stage 4: Customers */}
            <div className="text-center px-4 py-3 bg-bb-forest-50 rounded-lg border-2 border-bb-forest-300 min-w-[100px]">
              <p className="text-2xl font-bold text-bb-forest-600">4-5</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Customers</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {/* Left: Weekly & Daily Targets */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-4">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-3">Weekly Targets</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-white rounded-lg border border-bb-amber-200">
                  <p className="text-xl font-bold text-bb-amber-600">200+</p>
                  <p className="text-xs text-bb-charcoal-600">Dials</p>
                </div>
                <div className="text-center p-2 bg-white rounded-lg border border-bb-steel-200">
                  <p className="text-xl font-bold text-bb-steel-600">35-40</p>
                  <p className="text-xs text-bb-charcoal-600">Conversations</p>
                </div>
                <div className="text-center p-2 bg-white rounded-lg border border-bb-charcoal-200">
                  <p className="text-xl font-bold text-bb-charcoal-600">8-10</p>
                  <p className="text-xs text-bb-charcoal-600">Qualified</p>
                </div>
                <div className="text-center p-2 bg-white rounded-lg border border-bb-forest-200">
                  <p className="text-xl font-bold text-bb-forest-600">4-5</p>
                  <p className="text-xs text-bb-charcoal-600">Customers</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-4">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-2">Daily Breakdown</h3>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-lg font-bold text-bb-amber-600">40+</p>
                  <p className="text-xs text-bb-charcoal-600">Dials</p>
                </div>
                <span className="text-bb-slate-400">→</span>
                <div className="text-center">
                  <p className="text-lg font-bold text-bb-steel-600">7-8</p>
                  <p className="text-xs text-bb-charcoal-600">Connects</p>
                </div>
                <span className="text-bb-slate-400">→</span>
                <div className="text-center">
                  <p className="text-lg font-bold text-bb-forest-600">1-2</p>
                  <p className="text-xs text-bb-charcoal-600">Qualified</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Industry Benchmarks */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-3">Our Rates vs. Industry</h3>
            <div className="space-y-2">
              {benchmarks.map((b, idx) => (
                <div key={idx} className="p-2 bg-bb-slate-50 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">{b.metric}</p>
                    <p className="text-xs text-bb-steel-600">{b.advantage}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-bb-forest-600">{b.ours}</span>
                    <span className="text-xs text-bb-charcoal-400 mx-1">vs</span>
                    <span className="text-xs text-bb-charcoal-500">{b.industry}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-bb-charcoal-500 mt-3 text-center italic">
              Better rates from warm leads + targeted prospecting
            </p>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-4 shadow-lg text-white">
          <p className="text-sm text-center">
            <span className="font-bold text-bb-amber-300">The Formula:</span>
            {' '}40 dials/day × 5 days = 200 dials → 35 conversations → 9 qualified → <span className="text-bb-forest-300 font-bold">4-5 new customers/week</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
