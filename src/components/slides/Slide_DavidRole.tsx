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
      <div className="w-full max-w-6xl h-full flex flex-col mx-auto">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            David's Role & Targets
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            <span className="font-bold text-bb-charcoal-800">Operations is the backbone.</span> Without excellent execution, sales means nothing.
          </p>
        </motion.div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid grid-cols-3 gap-lg flex-1">
          {/* Column 1: What David Owns */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-steel-300 p-lg shadow-sm flex flex-col">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-steel-500 flex items-center justify-center text-white text-lg font-bold">✓</div>
              <h3 className="text-lg font-bold text-bb-charcoal-800">David Owns</h3>
            </div>
            <ul className="space-y-md flex-1">
              {davidGrowthPath.whatHeOwns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-steel-600 font-bold">→</span>
                  <span className="text-base text-bb-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: What Patrick Handles */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm flex flex-col">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-lg font-bold">✗</div>
              <h3 className="text-lg font-bold text-bb-charcoal-600">Patrick Handles</h3>
            </div>
            <ul className="space-y-md flex-1">
              {davidGrowthPath.whatHeDoesNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-slate-400 font-bold">×</span>
                  <span className="text-base text-bb-charcoal-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-md pt-md border-t border-bb-slate-200">
              <p className="text-sm text-bb-charcoal-500 italic">Clear boundary = focused operations</p>
            </div>
          </motion.div>

          {/* Column 3: Metrics & Targets */}
          <div className="flex flex-col gap-lg">
            {/* Performance Targets Chart */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm flex-1">
              <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md">Performance Targets</h3>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceTargets} layout="vertical" margin={{ top: 0, right: 20, left: 100, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7785' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <YAxis type="category" dataKey="metric" tick={{ fontSize: 12, fill: '#2d3748' }} axisLine={false} tickLine={false} width={95} />
                    <Bar dataKey="target" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={800}>
                      {performanceTargets.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-bb-charcoal-500 mt-sm text-center">Industry average: 70-85%</p>
            </motion.div>

            {/* Domain Ownership */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-lg shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">David's Domain</h3>
              <p className="text-2xl font-display font-black text-bb-steel-600">{davidGrowthPath.domain}</p>
              <p className="text-sm text-bb-charcoal-600 mt-xs">You set the priorities. You own the process.</p>
            </motion.div>

            {/* Capacity Trigger */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">Ops Coordinator Trigger</h3>
              <p className="text-3xl font-display font-black text-bb-forest-600">120+ Loads/Month</p>
              <p className="text-sm text-bb-charcoal-600 mt-xs">6 loads/day max · Help arrives before burnout</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
