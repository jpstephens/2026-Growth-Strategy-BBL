import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Cumulative customer growth showing compound effect of continuous activity
const cumulativeGrowth = [
  { month: 'Jan', customers: 2, pipeline: 20 },
  { month: 'Feb', customers: 6, pipeline: 35 },
  { month: 'Mar', customers: 11, pipeline: 50 },
  { month: 'Apr', customers: 16, pipeline: 65 },
  { month: 'May', customers: 22, pipeline: 80 },
  { month: 'Jun', customers: 29, pipeline: 95 },
  { month: 'Jul', customers: 36, pipeline: 110 },
  { month: 'Aug', customers: 44, pipeline: 125 },
  { month: 'Sep', customers: 52, pipeline: 140 },
  { month: 'Oct', customers: 60, pipeline: 155 },
  { month: 'Nov', customers: 68, pipeline: 170 },
  { month: 'Dec', customers: 70, pipeline: 185 },
]

export default function Slide11_SalesSystem() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-xs">The Compound Effect</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm"></div>
          <p className="text-base text-bb-charcoal-600">Consistent activity → Pipeline growth → Customer accumulation</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Growth Chart */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Cumulative Customer Growth</h3>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={cumulativeGrowth} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <defs>
                  <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#438f74" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#438f74" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7785' }} axisLine={{ stroke: '#dee2e6' }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#6b7785' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#ffffff', border: '2px solid #438f74', borderRadius: '8px', fontSize: '12px' }}
                />
                <Area
                  type="monotone"
                  dataKey="customers"
                  stroke="#438f74"
                  strokeWidth={3}
                  fill="url(#customerGradient)"
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-md mt-sm pt-sm border-t border-bb-slate-200">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-bb-forest-500" />
                <span className="text-xs text-bb-charcoal-600">Active Customers</span>
              </div>
              <span className="text-xs text-bb-charcoal-500">Target: 65-70 by December</span>
            </div>
          </motion.div>

          {/* Right: The Flywheel Concept */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">The Sales Flywheel</h3>
              <div className="space-y-sm">
                <div className="flex items-center gap-sm p-sm bg-bb-amber-50 rounded-lg">
                  <div className="w-8 h-8 bg-bb-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">Consistent Activity</p>
                    <p className="text-xs text-bb-charcoal-500">200 dials/week, every week</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm p-sm bg-bb-steel-50 rounded-lg">
                  <div className="w-8 h-8 bg-bb-steel-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">Pipeline Builds</p>
                    <p className="text-xs text-bb-charcoal-500">Prospects move through stages</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm p-sm bg-bb-forest-50 rounded-lg">
                  <div className="w-8 h-8 bg-bb-forest-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">Customers Close</p>
                    <p className="text-xs text-bb-charcoal-500">4-5 new customers/month</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm p-sm bg-bb-charcoal-50 rounded-lg">
                  <div className="w-8 h-8 bg-bb-charcoal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">Value Compounds</p>
                    <p className="text-xs text-bb-charcoal-500">Each customer grows in margin</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Numbers */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <div className="grid grid-cols-4 gap-md text-center">
            <div className="p-sm">
              <p className="text-2xl font-bold text-bb-amber-600">200</p>
              <p className="text-xs text-bb-charcoal-600">Dials/Week</p>
            </div>
            <div className="p-sm">
              <p className="text-2xl font-bold text-bb-steel-600">4-5</p>
              <p className="text-xs text-bb-charcoal-600">Customers/Month</p>
            </div>
            <div className="p-sm">
              <p className="text-2xl font-bold text-bb-forest-600">65-70</p>
              <p className="text-xs text-bb-charcoal-600">Customers by Dec</p>
            </div>
            <div className="p-sm">
              <p className="text-2xl font-bold text-bb-charcoal-800">$100K</p>
              <p className="text-xs text-bb-charcoal-600">Monthly Profit</p>
            </div>
          </div>
        </motion.div>

        {/* The Key Insight */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">The Compound Effect:</span>
            {' '}Each month of consistent activity adds 4-5 customers. Each customer grows in value.
            <span className="text-bb-amber-200"> By December, 65-70 customers at $4K+/month each = $100K+ profit.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
