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
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">
            Customer Value Over Time
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">How one customer grows in value—and what makes an ideal customer</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Ramp Chart */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Monthly Margin per Customer</h3>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={customerRamp} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorMargin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f85a6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4f85a6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10, fill: '#6b7785' }}
                  axisLine={{ stroke: '#dee2e6' }}
                  tickFormatter={(v) => `Mo ${v}`}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: '#6b7785' }}
                  axisLine={{ stroke: '#dee2e6' }}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #4f85a6',
                    borderRadius: '8px',
                    fontSize: '11px'
                  }}
                />
                <ReferenceLine y={4160} stroke="#438f74" strokeDasharray="5 5" label={{ value: 'Mature: $4,160/mo', position: 'right', fontSize: 9, fill: '#438f74' }} />
                <Area
                  type="monotone"
                  dataKey="marginPerMonth"
                  stroke="#4f85a6"
                  strokeWidth={2}
                  fill="url(#colorMargin)"
                  name="Monthly Margin"
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Ramp Pattern */}
            <div className="grid grid-cols-3 gap-xs mt-sm pt-sm border-t border-bb-slate-200">
              <div className="text-center">
                <p className="text-xs font-bold text-bb-steel-600">Mo 1-3</p>
                <p className="text-[10px] text-bb-charcoal-600">1-10 loads/mo</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-bb-amber-600">Mo 4-6</p>
                <p className="text-[10px] text-bb-charcoal-600">12-18 loads/mo</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-bb-forest-600">Mo 7+</p>
                <p className="text-[10px] text-bb-charcoal-600">20 loads/mo</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Customer Profile Tiers */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-bb-forest-600 font-semibold uppercase">Ideal Profile</p>
                  <p className="text-lg font-bold text-bb-charcoal-800">$300+/load</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-bb-charcoal-600">High margin, any volume</p>
                  <p className="text-xs text-bb-forest-600 font-semibold">Ex: Vibra Screw @ $416</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-steel-300 p-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-bb-steel-600 font-semibold uppercase">Target Profile</p>
                  <p className="text-lg font-bold text-bb-charcoal-800">$200+/load</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-bb-charcoal-600">10+ loads/month</p>
                  <p className="text-xs text-bb-steel-600 font-semibold">Ex: AMP @ $240</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border-2 border-bb-amber-300 p-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-bb-amber-600 font-semibold uppercase">Volume Play</p>
                  <p className="text-lg font-bold text-bb-charcoal-800">$150-200</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-bb-charcoal-600">High volume offsets margin</p>
                  <p className="text-xs text-bb-amber-600 font-semibold">Must be 15+ loads/mo</p>
                </div>
              </div>
            </div>

            {/* What Makes Ideal */}
            <div className="bg-bb-slate-50 rounded-lg p-sm border border-bb-slate-200">
              <p className="text-xs font-semibold text-bb-charcoal-700 mb-xs">What Makes a Customer Ideal</p>
              <div className="grid grid-cols-3 gap-xs text-[10px] text-bb-charcoal-600">
                <div>1. $200+ margin</div>
                <div>2. Predictable volume</div>
                <div>3. Low-maintenance</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Target Profile:</span> $200+/load margin, 10+ loads/month, predictable lanes.
            <span className="text-bb-amber-200"> Each customer compounds in value—that's how we scale to $100K.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
