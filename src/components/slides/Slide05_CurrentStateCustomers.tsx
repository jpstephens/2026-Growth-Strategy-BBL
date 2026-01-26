import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { januarySnapshot, topCustomers } from '../../data/currentState'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const customerData = topCustomers.slice(0, 5).map(c => ({
  name: c.name.length > 12 ? c.name.substring(0, 12) + '...' : c.name,
  margin: c.avgMargin,
}))

export default function Slide05_CurrentStateCustomers() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-sm">
            January 2026 Snapshot
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">Our starting point for the year</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-xl">
          {/* Left: Key Metrics */}
          <motion.div variants={itemVariants} className="space-y-md">
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
              <div className="grid grid-cols-2 gap-md">
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-charcoal-800">
                    {januarySnapshot.totalLoads}
                  </p>
                  <p className="text-sm text-bb-charcoal-600">Loads</p>
                </div>
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-steel-600">
                    ${(januarySnapshot.revenue / 1000).toFixed(0)}K
                  </p>
                  <p className="text-sm text-bb-charcoal-600">Revenue</p>
                </div>
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-forest-600">
                    ${(januarySnapshot.grossMargin / 1000).toFixed(1)}K
                  </p>
                  <p className="text-sm text-bb-charcoal-600">Gross Margin</p>
                </div>
                <div className="text-center p-md bg-bb-slate-50 rounded-lg">
                  <p className="text-3xl font-display font-black text-bb-amber-600">
                    {januarySnapshot.activeCustomers}
                  </p>
                  <p className="text-sm text-bb-charcoal-600">Customers</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg">
              <div className="flex items-center gap-md mb-sm">
                <div className="w-10 h-10 rounded-lg bg-bb-forest-100 flex items-center justify-center">
                  <span className="text-lg">📈</span>
                </div>
                <div>
                  <p className="font-bold text-bb-forest-700">$238/load</p>
                  <p className="text-sm text-bb-charcoal-600">January margin</p>
                </div>
              </div>
              <p className="text-sm text-bb-charcoal-600">
                <span className="font-semibold text-bb-forest-700">Above our $208 average</span>—
                pricing and customer selection are improving.
              </p>
            </div>
          </motion.div>

          {/* Right: Customer Margin Chart */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
            <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md">
              Top Customer Margins
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={customerData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <XAxis
                    type="number"
                    domain={[0, 500]}
                    tick={{ fontSize: 10, fill: '#6b7785' }}
                    axisLine={{ stroke: '#dee2e6' }}
                    tickLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fontSize: 10, fill: '#6b7785' }}
                    axisLine={false}
                    tickLine={false}
                    width={80}
                  />
                  <Bar
                    dataKey="margin"
                    radius={[0, 4, 4, 0]}
                    isAnimationActive={true}
                    animationDuration={800}
                  >
                    {customerData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.margin > 300 ? '#438f74' : '#4f85a6'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-bb-charcoal-500 mt-md text-center">
              Avg margin per load by customer
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl p-lg border-2 border-bb-slate-200 shadow-sm text-center">
          <p className="text-base text-bb-charcoal-700 mb-sm">
            <span className="font-bold">Baseline established.</span>
            {' '}7 active customers generating $17.8K margin in January.
          </p>
          <p className="text-lg font-bold text-bb-forest-600">
            The model works—now we scale it.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
