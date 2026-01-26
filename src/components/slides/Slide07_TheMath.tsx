import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const customerGrowthData = [
  { month: 'Jan', customers: 9, loads: 75 },
  { month: 'Feb', customers: 14, loads: 98 },
  { month: 'Mar', customers: 19, loads: 133 },
  { month: 'Apr', customers: 24, loads: 168 },
  { month: 'May', customers: 29, loads: 203 },
  { month: 'Jun', customers: 35, loads: 245 },
  { month: 'Jul', customers: 41, loads: 287 },
  { month: 'Aug', customers: 47, loads: 329 },
  { month: 'Sep', customers: 53, loads: 371 },
  { month: 'Oct', customers: 59, loads: 413 },
  { month: 'Nov', customers: 64, loads: 448 },
  { month: 'Dec', customers: 68, loads: 481 },
]

export default function Slide07_TheMath() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-sm">
            The Growth Trajectory
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">
            From 9 customers in January to 65-70 by December
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-lg">
          {/* Chart */}
          <motion.div variants={itemVariants} className="col-span-2 bg-white rounded-xl p-md border-2 border-bb-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md">Customer & Load Growth</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={customerGrowthData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f85a6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4f85a6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 11, fill: '#6b7785' }}
                    axisLine={{ stroke: '#dee2e6' }}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="customers"
                    orientation="left"
                    domain={[0, 80]}
                    tick={{ fontSize: 11, fill: '#6b7785' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="loads"
                    orientation="right"
                    domain={[0, 550]}
                    tick={{ fontSize: 11, fill: '#6b7785' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <ReferenceLine yAxisId="customers" y={65} stroke="#438f74" strokeDasharray="3 3" />
                  <Area
                    yAxisId="customers"
                    type="monotone"
                    dataKey="customers"
                    stroke="#4f85a6"
                    strokeWidth={2}
                    fill="url(#customerGradient)"
                    isAnimationActive={true}
                    animationDuration={1000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-lg mt-md pt-md border-t border-bb-slate-200">
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-bb-steel-500" />
                <span className="text-xs text-bb-charcoal-600">Active Customers</span>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-8 h-0 border-t-2 border-dashed border-bb-forest-500" />
                <span className="text-xs text-bb-charcoal-600">Target (65)</span>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div variants={itemVariants} className="space-y-md">
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
              <p className="text-sm text-bb-charcoal-600 mb-xs">New Customers/Month</p>
              <p className="text-3xl font-display font-black text-bb-steel-600">~5</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Average needed</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
              <p className="text-sm text-bb-charcoal-600 mb-xs">Loads Per Customer</p>
              <p className="text-3xl font-display font-black text-bb-amber-600">7.2</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Average at scale</p>
            </div>

            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg">
              <p className="text-sm text-bb-forest-700 mb-xs">December Target</p>
              <p className="text-3xl font-display font-black text-bb-forest-600">$100K</p>
              <p className="text-xs text-bb-forest-600 mt-xs">Monthly profit</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl p-lg border-2 border-bb-slate-200 shadow-sm">
          <p className="text-base text-bb-charcoal-700 text-center">
            <span className="font-bold">The foundation exists.</span>
            {' '}At 7.2 loads per customer and $208 margin per load,
            68 customers delivering 481 loads/month = $100K profit.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
