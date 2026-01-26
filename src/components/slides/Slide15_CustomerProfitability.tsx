import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { topCustomers } from '../../data/currentState'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide15_CustomerProfitability() {
  const chartData = topCustomers.map(c => ({
    name: c.name,
    margin: c.avgMargin,
    loads: c.loads,
    whyIdeal: c.whyIdeal,
  }))

  // Color based on margin tier
  const getBarColor = (margin: number) => {
    if (margin >= 300) return '#438f74' // forest - ideal
    if (margin >= 200) return '#4f85a6' // steel - target
    return '#d6973a' // amber - volume play
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold font-display text-bb-charcoal-800 mb-sm">
            Top Customer Profiles
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Average margin per load by customer</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-lg">
          {/* Chart - 2 columns */}
          <motion.div variants={itemVariants} className="col-span-2 bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <div className="flex items-center justify-between mb-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800">Margin per Load ($)</h3>
              <div className="flex items-center gap-md text-xs">
                <span className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-bb-forest-500"></span> $300+</span>
                <span className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-bb-steel-500"></span> $200-299</span>
                <span className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-bb-amber-500"></span> &lt;$200</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 50 }}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#2d3748' }}
                  axisLine={{ stroke: '#dee2e6' }}
                  tickLine={false}
                  angle={-35}
                  textAnchor="end"
                  height={50}
                  interval={0}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: '#6b7785' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}`}
                  domain={[0, 500]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #4f85a6',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar
                  dataKey="margin"
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={1000}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getBarColor(entry.margin)}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Right sidebar - Profile tiers */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md">
              <p className="text-xs text-bb-forest-600 font-semibold mb-xs">IDEAL PROFILE</p>
              <p className="text-lg font-bold text-bb-charcoal-800">$300+/load</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">High margin, any volume</p>
              <p className="text-xs text-bb-forest-600 mt-xs">Example: Vibra Screw @ $416</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-steel-300 p-md">
              <p className="text-xs text-bb-steel-600 font-semibold mb-xs">TARGET PROFILE</p>
              <p className="text-lg font-bold text-bb-charcoal-800">$200+/load</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">10+ loads/month</p>
              <p className="text-xs text-bb-steel-600 mt-xs">Example: AMP @ $240</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-amber-300 p-md">
              <p className="text-xs text-bb-amber-600 font-semibold mb-xs">VOLUME PLAY</p>
              <p className="text-lg font-bold text-bb-charcoal-800">$150-200</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">High volume offsets lower margin</p>
            </div>
          </motion.div>
        </div>

        {/* Why These Are Ideal */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">What Makes a Customer Ideal</h3>
          <div className="grid grid-cols-3 gap-md">
            <div className="p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700 mb-xs">1. Margin Floor</p>
              <p className="text-xs text-bb-charcoal-600">$200+/load ensures profitability after costs. Below $200, volume must compensate.</p>
            </div>
            <div className="p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700 mb-xs">2. Predictable Volume</p>
              <p className="text-xs text-bb-charcoal-600">Consistent weekly freight beats sporadic high-margin loads. Reliability enables planning.</p>
            </div>
            <div className="p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700 mb-xs">3. Relationship Quality</p>
              <p className="text-xs text-bb-charcoal-600">Low-maintenance accounts that trust us = less ops time per load = better margins.</p>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-md shadow-lg text-white">
          <p className="text-sm text-center">
            <span className="font-bold">Target Profile:</span> $200+/load margin, 10+ loads/month, predictable lanes.
            <span className="text-bb-amber-300"> Our top 6 customers prove this model works—now we scale it.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
