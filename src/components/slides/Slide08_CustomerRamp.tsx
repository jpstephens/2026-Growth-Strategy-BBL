import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { customerRamp } from '../../data/financialProjections'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide08_CustomerRamp() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">
            How One Customer Grows in Value
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">A single customer's margin contribution over their first year</p>
        </motion.div>

        {/* Explanation of the math */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">The Math Behind Customer Value</h3>
          <div className="grid grid-cols-4 gap-md">
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Avg Margin/Load</p>
              <p className="text-xl font-bold text-bb-charcoal-800">$208</p>
              <p className="text-xs text-bb-charcoal-500">Based on 2025 data</p>
            </div>
            <div className="text-center p-sm bg-bb-steel-50 rounded-lg">
              <p className="text-xs text-bb-steel-600 mb-xs">Month 1</p>
              <p className="text-xl font-bold text-bb-steel-700">1-2 loads</p>
              <p className="text-xs text-bb-charcoal-500">Testing the relationship</p>
            </div>
            <div className="text-center p-sm bg-bb-amber-50 rounded-lg">
              <p className="text-xs text-bb-amber-600 mb-xs">Month 6</p>
              <p className="text-xl font-bold text-bb-amber-700">18 loads</p>
              <p className="text-xs text-bb-charcoal-500">Fully ramped</p>
            </div>
            <div className="text-center p-sm bg-bb-forest-50 rounded-lg">
              <p className="text-xs text-bb-forest-600 mb-xs">Month 12</p>
              <p className="text-xl font-bold text-bb-forest-700">$4,160/mo</p>
              <p className="text-xs text-bb-charcoal-500">Mature customer</p>
            </div>
          </div>
        </motion.div>

        {/* Main Chart */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
          <div className="flex items-center justify-between mb-md">
            <div>
              <h3 className="text-base font-bold text-bb-charcoal-800">Monthly Margin per Customer</h3>
              <p className="text-xs text-bb-charcoal-500">Y-Axis: Margin in dollars | X-Axis: Months since customer started</p>
            </div>
            <div className="flex items-center gap-md">
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-bb-steel-500" />
                <span className="text-xs text-bb-charcoal-600">Monthly Margin</span>
              </div>
              <div className="flex items-center gap-xs">
                <div className="w-3 h-3 rounded-full bg-bb-forest-500" />
                <span className="text-xs text-bb-charcoal-600">Cumulative Total</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={customerRamp} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
              <defs>
                <linearGradient id="colorMargin" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f85a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4f85a6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: '#6b7785' }}
                axisLine={{ stroke: '#dee2e6' }}
                label={{ value: 'Month', position: 'insideBottom', offset: -5, fontSize: 11, fill: '#6b7785' }}
                tickFormatter={(v) => `Mo ${v}`}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#6b7785' }}
                axisLine={{ stroke: '#dee2e6' }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                label={{ value: 'Margin ($)', angle: -90, position: 'insideLeft', fontSize: 11, fill: '#6b7785' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #4f85a6',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <ReferenceLine y={4160} stroke="#438f74" strokeDasharray="5 5" label={{ value: 'Mature: $4,160/mo', position: 'right', fontSize: 10, fill: '#438f74' }} />
              <Area
                type="monotone"
                dataKey="marginPerMonth"
                stroke="#4f85a6"
                strokeWidth={3}
                fill="url(#colorMargin)"
                name="Monthly Margin"
                isAnimationActive={true}
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Key Insight */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-md">
          <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md">
            <h4 className="text-sm font-bold text-bb-forest-700 mb-xs">Why This Matters</h4>
            <p className="text-sm text-bb-charcoal-700">
              Each customer compounds in value. A customer acquired in January contributes ~$37K in margin by year-end.
              <span className="font-bold"> Front-load acquisition = maximum 2026 value.</span>
            </p>
          </div>
          <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md">
            <h4 className="text-sm font-bold text-bb-steel-700 mb-xs">The Ramp Pattern</h4>
            <ul className="text-sm text-bb-charcoal-700 space-y-xs">
              <li><span className="font-bold">Months 1-3:</span> Building trust, 1-10 loads/mo</li>
              <li><span className="font-bold">Months 4-6:</span> Growing volume, 12-18 loads/mo</li>
              <li><span className="font-bold">Months 7+:</span> Mature relationship, 20 loads/mo</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
