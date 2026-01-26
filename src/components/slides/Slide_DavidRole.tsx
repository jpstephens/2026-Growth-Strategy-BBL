import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { davidGrowthPath } from '../../data/teamStructure'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Performance targets with industry benchmarks
const performanceTargets = [
  { metric: 'On-Time Delivery', target: 95, benchmark: 85, color: '#438f74' },
  { metric: 'Customer Satisfaction', target: 90, benchmark: 80, color: '#4f85a6' },
  { metric: 'Carrier Retention', target: 80, benchmark: 70, color: '#d6973a' },
]

export default function Slide_DavidRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            David's Role & Targets
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600 max-w-3xl mx-auto">
            <span className="font-bold text-bb-charcoal-800">Operations is the backbone.</span>
            {' '}Without excellent execution, sales means nothing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left Column: What David Owns / Doesn't Own */}
          <div className="space-y-md">
            {/* What David Owns */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-steel-300 p-md shadow-sm">
              <div className="flex items-center gap-sm mb-sm">
                <div className="w-8 h-8 rounded-lg bg-bb-steel-500 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <h3 className="text-base font-bold text-bb-charcoal-800">David Owns</h3>
              </div>
              <ul className="space-y-xs">
                {davidGrowthPath.whatHeOwns.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-sm">
                    <span className="text-bb-steel-600 font-bold mt-0.5 text-sm">→</span>
                    <span className="text-sm text-bb-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What David Doesn't Own */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <div className="flex items-center gap-sm mb-sm">
                <div className="w-8 h-8 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-sm font-bold">
                  ✗
                </div>
                <h3 className="text-base font-bold text-bb-charcoal-600">Patrick Handles (Not David)</h3>
              </div>
              <ul className="space-y-xs">
                {davidGrowthPath.whatHeDoesNot.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-sm">
                    <span className="text-bb-slate-400 font-bold mt-0.5 text-sm">×</span>
                    <span className="text-sm text-bb-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Performance Targets */}
          <div className="space-y-md">
            {/* Performance Targets Chart */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Performance Targets vs. Industry</h3>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceTargets} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7785' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <YAxis type="category" dataKey="metric" tick={{ fontSize: 11, fill: '#2d3748' }} axisLine={false} tickLine={false} width={95} />
                    <Bar dataKey="target" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={1000}>
                      {performanceTargets.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-lg mt-sm pt-sm border-t border-bb-slate-200">
                <div className="flex items-center gap-xs">
                  <div className="w-3 h-3 rounded-full bg-bb-forest-500" />
                  <span className="text-xs text-bb-charcoal-600">Our Target</span>
                </div>
                <p className="text-xs text-bb-charcoal-500">Industry avg: 70-85%</p>
              </div>
            </motion.div>

            {/* Domain Ownership */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">David's Domain</h3>
              <p className="text-2xl font-display font-black text-bb-steel-600 mb-xs">{davidGrowthPath.domain}</p>
              <p className="text-sm text-bb-charcoal-600">You set the priorities. You own the process.</p>
            </motion.div>

            {/* Capacity Trigger */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">Ops Coordinator Hire Trigger</h3>
                  <p className="text-2xl font-display font-black text-bb-forest-600">120+ Loads/Month</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-bb-charcoal-500 mb-xs">Why this number?</p>
                  <p className="text-sm text-bb-charcoal-700">6 loads/day max</p>
                  <p className="text-sm text-bb-charcoal-700">Help arrives BEFORE burnout</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Growth Path - Clean, Simple Steps */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-base font-bold text-bb-charcoal-800 mb-md text-center">David's Growth Path</h3>
          <div className="flex items-center justify-between gap-md">
            <div className="flex-1 text-center p-sm border-2 border-bb-slate-200 rounded-lg">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Phase 1: Now</p>
              <p className="text-sm font-bold text-bb-charcoal-800">Operations</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">~75 loads/month</p>
            </div>
            <div className="text-bb-slate-400 text-lg">→</div>
            <div className="flex-1 text-center p-sm border-2 border-bb-steel-300 rounded-lg bg-bb-steel-50">
              <p className="text-xs text-bb-steel-600 mb-xs">Phase 2: Q2-Q3</p>
              <p className="text-sm font-bold text-bb-charcoal-800">+ Ops Coordinator</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">At 120+ loads/month</p>
            </div>
            <div className="text-bb-slate-400 text-lg">→</div>
            <div className="flex-1 text-center p-sm border-2 border-bb-forest-300 rounded-lg bg-bb-forest-50">
              <p className="text-xs text-bb-forest-600 mb-xs">Phase 3: Q4</p>
              <p className="text-sm font-bold text-bb-charcoal-800">Operations Manager</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">At 200+ loads/month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
