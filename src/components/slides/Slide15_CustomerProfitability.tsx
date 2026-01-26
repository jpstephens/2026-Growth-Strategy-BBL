import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { topCustomers } from '../../data/currentState'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide15_CustomerProfitability() {
  const chartData = topCustomers.map(c => ({
    name: c.name,
    margin: c.avgMargin,
    loads: c.loads,
  })).sort((a, b) => b.margin - a.margin) // Sort by margin descending

  // Color based on margin tier
  const getBarColor = (margin: number) => {
    if (margin >= 300) return '#438f74' // forest - ideal
    if (margin >= 200) return '#4f85a6' // steel - target
    return '#d6973a' // amber - volume play
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-6 mx-auto">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold font-display text-bb-charcoal-800 mb-3">
            Top Customer Profiles
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-3" />
          <p className="text-base text-bb-charcoal-600">Average margin per load by customer</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Chart - 2 columns - Horizontal Bar Chart */}
          <motion.div variants={itemVariants} className="col-span-2 bg-white rounded-xl border-2 border-bb-slate-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-bb-charcoal-800">Margin per Load</h3>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-bb-forest-500"></span> $300+</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-bb-steel-500"></span> $200-299</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-bb-amber-500"></span> &lt;$200</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 60, left: 5, bottom: 5 }}>
                <XAxis
                  type="number"
                  tick={{ fontSize: 12, fill: '#6b7785' }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}`}
                  domain={[0, 500]}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 13, fill: '#2d3748' }}
                  axisLine={false}
                  tickLine={false}
                  width={120}
                />
                <Bar
                  dataKey="margin"
                  radius={[0, 4, 4, 0]}
                  isAnimationActive={true}
                  animationDuration={800}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(entry.margin)} />
                  ))}
                  <LabelList
                    dataKey="margin"
                    position="right"
                    formatter={(value: number) => `$${value}`}
                    style={{ fontSize: 12, fontWeight: 'bold', fill: '#2d3748' }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Right sidebar - Profile tiers */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-4">
              <p className="text-sm text-bb-forest-600 font-semibold">IDEAL PROFILE</p>
              <p className="text-xl font-bold text-bb-charcoal-800">$300+/load</p>
              <p className="text-sm text-bb-charcoal-600 mt-1">High margin, any volume</p>
              <p className="text-sm text-bb-forest-600 mt-1">Ex: Vibra Screw @ $416</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-steel-300 p-4">
              <p className="text-sm text-bb-steel-600 font-semibold">TARGET PROFILE</p>
              <p className="text-xl font-bold text-bb-charcoal-800">$200+/load</p>
              <p className="text-sm text-bb-charcoal-600 mt-1">10+ loads/month</p>
              <p className="text-sm text-bb-steel-600 mt-1">Ex: AMP @ $240</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-amber-300 p-4">
              <p className="text-sm text-bb-amber-600 font-semibold">VOLUME PLAY</p>
              <p className="text-xl font-bold text-bb-charcoal-800">$150-200</p>
              <p className="text-sm text-bb-charcoal-600 mt-1">High volume offsets margin</p>
            </div>
          </motion.div>
        </div>

        {/* What Makes a Customer Ideal */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-5 shadow-sm">
          <h3 className="text-base font-bold text-bb-charcoal-800 mb-4">What Makes a Customer Ideal</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-bb-slate-50 rounded-lg">
              <p className="text-sm font-semibold text-bb-charcoal-700 mb-2">1. Margin Floor</p>
              <p className="text-sm text-bb-charcoal-600">$200+/load ensures profitability. Below $200, volume must compensate.</p>
            </div>
            <div className="p-4 bg-bb-slate-50 rounded-lg">
              <p className="text-sm font-semibold text-bb-charcoal-700 mb-2">2. Predictable Volume</p>
              <p className="text-sm text-bb-charcoal-600">Consistent weekly freight beats sporadic high-margin loads.</p>
            </div>
            <div className="p-4 bg-bb-slate-50 rounded-lg">
              <p className="text-sm font-semibold text-bb-charcoal-700 mb-2">3. Relationship Quality</p>
              <p className="text-sm text-bb-charcoal-600">Low-maintenance accounts = less ops time per load = better margins.</p>
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-5 shadow-lg text-white">
          <p className="text-base text-center">
            <span className="font-bold">Target Profile:</span> $200+/load margin, 10+ loads/month, predictable lanes.
            <span className="text-bb-amber-300"> Our top 6 customers prove this model works—now we scale it.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
