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
      <div className="w-full max-w-6xl space-y-4">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold font-display text-bb-charcoal-800 mb-2">
            Top Customer Profiles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-2" />
          <p className="text-sm text-bb-charcoal-600">Average margin per load by customer</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {/* Chart - 2 columns */}
          <motion.div variants={itemVariants} className="col-span-2 bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-bb-charcoal-800">Margin per Load ($)</h3>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-bb-forest-500"></span> $300+</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-bb-steel-500"></span> $200-299</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-bb-amber-500"></span> &lt;$200</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 45 }}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10, fill: '#2d3748' }}
                  axisLine={{ stroke: '#dee2e6' }}
                  tickLine={false}
                  angle={-35}
                  textAnchor="end"
                  height={45}
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
                  animationDuration={800}
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
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-3">
              <p className="text-xs text-bb-forest-600 font-semibold">IDEAL PROFILE</p>
              <p className="text-base font-bold text-bb-charcoal-800">$300+/load</p>
              <p className="text-xs text-bb-charcoal-600">High margin, any volume</p>
              <p className="text-xs text-bb-forest-600">Ex: Vibra Screw @ $416</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-steel-300 p-3">
              <p className="text-xs text-bb-steel-600 font-semibold">TARGET PROFILE</p>
              <p className="text-base font-bold text-bb-charcoal-800">$200+/load</p>
              <p className="text-xs text-bb-charcoal-600">10+ loads/month</p>
              <p className="text-xs text-bb-steel-600">Ex: AMP @ $240</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-amber-300 p-3">
              <p className="text-xs text-bb-amber-600 font-semibold">VOLUME PLAY</p>
              <p className="text-base font-bold text-bb-charcoal-800">$150-200</p>
              <p className="text-xs text-bb-charcoal-600">High volume offsets margin</p>
            </div>
          </motion.div>
        </div>

        {/* Why These Are Ideal */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-2">What Makes a Customer Ideal</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-2 bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700 mb-1">1. Margin Floor</p>
              <p className="text-xs text-bb-charcoal-600">$200+/load ensures profitability. Below $200, volume must compensate.</p>
            </div>
            <div className="p-2 bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700 mb-1">2. Predictable Volume</p>
              <p className="text-xs text-bb-charcoal-600">Consistent weekly freight beats sporadic high-margin loads.</p>
            </div>
            <div className="p-2 bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700 mb-1">3. Relationship Quality</p>
              <p className="text-xs text-bb-charcoal-600">Low-maintenance accounts = less ops time per load = better margins.</p>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-4 shadow-lg text-white">
          <p className="text-sm text-center">
            <span className="font-bold">Target Profile:</span> $200+/load margin, 10+ loads/month, predictable lanes.
            <span className="text-bb-amber-300"> Our top 6 customers prove this model works—now we scale it.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
