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
  { metric: 'On-Time Delivery', target: 95, color: '#438f74' },
  { metric: 'Customer Satisfaction', target: 90, color: '#4f85a6' },
  { metric: 'Carrier Retention', target: 80, color: '#d6973a' },
]

export default function Slide_DavidRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-4">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-2">
            David's Role & Targets
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-2" />
          <p className="text-sm text-bb-charcoal-600">
            <span className="font-bold text-bb-charcoal-800">Operations is the backbone.</span> Without excellent execution, sales means nothing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="space-y-3">
            {/* What David Owns */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-steel-300 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-bb-steel-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
                <h3 className="text-sm font-bold text-bb-charcoal-800">David Owns</h3>
              </div>
              <ul className="space-y-1">
                {davidGrowthPath.whatHeOwns.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-bb-steel-600 font-bold text-xs">→</span>
                    <span className="text-xs text-bb-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What Patrick Handles */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-sm font-bold">✗</div>
                <h3 className="text-sm font-bold text-bb-charcoal-600">Patrick Handles (Not David)</h3>
              </div>
              <ul className="space-y-1">
                {davidGrowthPath.whatHeDoesNot.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-bb-slate-400 font-bold text-xs">×</span>
                    <span className="text-xs text-bb-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {/* Performance Targets Chart */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-2">Performance Targets</h3>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceTargets} layout="vertical" margin={{ top: 0, right: 30, left: 100, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10, fill: '#6b7785' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <YAxis type="category" dataKey="metric" tick={{ fontSize: 11, fill: '#2d3748' }} axisLine={false} tickLine={false} width={95} />
                    <Bar dataKey="target" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={800}>
                      {performanceTargets.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-bb-charcoal-500 mt-2 text-center">Industry average: 70-85%</p>
            </motion.div>

            {/* Domain Ownership */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-4 shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-1">David's Domain</h3>
              <p className="text-xl font-display font-black text-bb-steel-600">{davidGrowthPath.domain}</p>
              <p className="text-xs text-bb-charcoal-600">You set the priorities. You own the process.</p>
            </motion.div>

            {/* Capacity Trigger */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-bb-charcoal-800">Ops Coordinator Trigger</h3>
                  <p className="text-2xl font-display font-black text-bb-forest-600">120+ Loads/Month</p>
                </div>
                <div className="text-right text-xs text-bb-charcoal-600">
                  <p>6 loads/day max</p>
                  <p>Help arrives BEFORE burnout</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Growth Path - Inline */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-bold text-bb-charcoal-800 whitespace-nowrap">Growth Path:</h3>
            <div className="flex items-center gap-3 flex-1">
              <div className="flex-1 text-center px-3 py-2 border-2 border-bb-slate-200 rounded-lg">
                <p className="text-xs font-bold text-bb-charcoal-800">Now: Operations</p>
              </div>
              <span className="text-bb-slate-400">→</span>
              <div className="flex-1 text-center px-3 py-2 border-2 border-bb-steel-300 rounded-lg bg-bb-steel-50">
                <p className="text-xs font-bold text-bb-charcoal-800">Q2-Q3: + Coordinator</p>
              </div>
              <span className="text-bb-slate-400">→</span>
              <div className="flex-1 text-center px-3 py-2 border-2 border-bb-forest-300 rounded-lg bg-bb-forest-50">
                <p className="text-xs font-bold text-bb-charcoal-800">Q4: Ops Manager</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
