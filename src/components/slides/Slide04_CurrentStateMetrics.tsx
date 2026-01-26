import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { overallPerformance } from '../../data/currentState'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const marginData = [
  { name: 'Q2 2024', margin: 180 },
  { name: 'Q3 2024', margin: 195 },
  { name: 'Q4 2024', margin: 210 },
  { name: 'Q1 2025', margin: 205 },
  { name: 'Q2 2025', margin: 215 },
  { name: 'Q3 2025', margin: 220 },
  { name: 'Q4 2025', margin: 225 },
  { name: 'Jan 2026', margin: 238 },
]

export default function Slide04_CurrentStateMetrics() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-sm">
            The Foundation: Proven Unit Economics
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">
            {overallPerformance.loadsAnalyzed} loads analyzed from May 2024 through January 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-xl">
          {/* Left: Key Metrics */}
          <motion.div variants={itemVariants} className="space-y-md">
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
              <div className="grid grid-cols-2 gap-md">
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-charcoal-800">
                    {overallPerformance.loadsAnalyzed}
                  </p>
                  <p className="text-sm text-bb-slate-600">Total Loads</p>
                </div>
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-forest-600">
                    ${(overallPerformance.totalGrossMargin / 1000).toFixed(0)}K
                  </p>
                  <p className="text-sm text-bb-slate-600">Gross Margin</p>
                </div>
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-steel-600">
                    ${overallPerformance.avgMarginPerLoad}
                  </p>
                  <p className="text-sm text-bb-slate-600">Avg Per Load</p>
                </div>
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-amber-600">
                    {overallPerformance.avgMarginPercentage}%
                  </p>
                  <p className="text-sm text-bb-slate-600">Margin Rate</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg">
              <p className="text-base text-bb-charcoal-700 leading-relaxed">
                <span className="font-bold text-bb-forest-700">This proves the model works.</span>
                {' '}$200+ margin per load with a 15% margin rate—
                these are healthy, scalable unit economics.
              </p>
            </div>
          </motion.div>

          {/* Right: Margin Trend Chart */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md">
              Margin Per Load Trend
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marginData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 10, fill: '#6b7785' }}
                    axisLine={{ stroke: '#dee2e6' }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 280]}
                    tick={{ fontSize: 10, fill: '#6b7785' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Bar dataKey="margin" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={800}>
                    {marginData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === marginData.length - 1 ? '#438f74' : '#4f85a6'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-bb-slate-500 mt-md text-center">
              January 2026: <span className="font-semibold text-bb-forest-600">$238/load</span> —
              above our $208 average
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
