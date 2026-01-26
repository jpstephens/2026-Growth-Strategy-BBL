import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const goalData = [
  { label: 'Jan 2026', value: 17.8, color: '#6b7785' },
  { label: 'Dec 2026', value: 100, color: '#438f74' },
]

export default function Slide03_ExecutiveGoal() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">The Goal</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">By December 31, 2026</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-xl">
          {/* Left: Key Metrics */}
          <motion.div variants={itemVariants} className="space-y-md">
            <div className="grid grid-cols-2 gap-md">
              <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
                <p className="text-3xl font-display font-black text-bb-charcoal-800">65-70</p>
                <p className="text-sm font-semibold text-bb-charcoal-700">Customers</p>
                <p className="text-xs text-bb-charcoal-500 mt-xs">Diversification reduces risk. No single customer controls our future.</p>
              </div>
              <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
                <p className="text-3xl font-display font-black text-bb-steel-600">481</p>
                <p className="text-sm font-semibold text-bb-charcoal-700">Monthly Loads</p>
                <p className="text-xs text-bb-charcoal-500 mt-xs">~7 loads/customer avg. Volume creates leverage with carriers.</p>
              </div>
              <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
                <p className="text-3xl font-display font-black text-bb-amber-600">$100K</p>
                <p className="text-sm font-semibold text-bb-charcoal-700">Gross Margin</p>
                <p className="text-xs text-bb-charcoal-500 mt-xs">At $200+/load avg. Proven unit economics at scale.</p>
              </div>
              <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
                <p className="text-3xl font-display font-black text-bb-forest-600">$80K+</p>
                <p className="text-sm font-semibold text-bb-charcoal-700">Net Profit</p>
                <p className="text-xs text-bb-charcoal-500 mt-xs">After team costs. Sustainable growth funds future hires.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg">
              <p className="text-sm text-bb-charcoal-700 leading-relaxed">
                <span className="font-bold text-bb-forest-700">Not aggressive growth.</span>
                {' '}Disciplined scaling of what already works—
                proven unit economics applied to more customers.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual Comparison */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md">Monthly Profit Growth</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={goalData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 12, fill: '#545f6b' }}
                    axisLine={{ stroke: '#dee2e6' }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 120]}
                    tick={{ fontSize: 11, fill: '#6b7785' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value}K`}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} isAnimationActive={true} animationDuration={1000}>
                    {goalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-bb-charcoal-500 text-center mt-md">
              <span className="font-semibold text-bb-forest-600">8x growth</span> in monthly profit
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
          <div className="grid grid-cols-4 gap-md text-center">
            <div>
              <p className="text-xs text-bb-charcoal-500 mb-xs">Diversification</p>
              <p className="text-sm text-bb-charcoal-700">No customer &gt;15%</p>
            </div>
            <div>
              <p className="text-xs text-bb-charcoal-500 mb-xs">Avg Loads/Customer</p>
              <p className="text-sm text-bb-charcoal-700">7.2 per month</p>
            </div>
            <div>
              <p className="text-xs text-bb-charcoal-500 mb-xs">Margin Rate</p>
              <p className="text-sm text-bb-charcoal-700">15%+ maintained</p>
            </div>
            <div>
              <p className="text-xs text-bb-charcoal-500 mb-xs">Capital Needed</p>
              <p className="text-sm text-bb-charcoal-700">Self-sustaining</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
