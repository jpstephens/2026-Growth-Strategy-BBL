import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Funnel data showing conversion at each stage
const funnelData = [
  { stage: 'Dials', value: 200, rate: '—', color: '#d6973a' },
  { stage: 'Connects', value: 35, rate: '17.5%', color: '#4f85a6' },
  { stage: 'Qualified', value: 9, rate: '25%', color: '#6b7785' },
  { stage: 'Customers', value: 4, rate: '50%', color: '#438f74' },
]

// Industry benchmarks
const benchmarks = [
  { metric: 'Connect Rate', ours: '15-20%', industry: '8-12%', advantage: 'Warm leads from Instantly.ai' },
  { metric: 'Qualify Rate', ours: '25%', industry: '15-20%', advantage: 'Targeted NAICS codes' },
  { metric: 'Close Rate', ours: '50%', industry: '20-30%', advantage: 'Relationship-first approach' },
]

export default function Slide24_SalesActivityTargets() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-xs">
            The Math: 200 Dials → 4 Customers
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Weekly activity targets based on industry conversion rates</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Funnel Visualization */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-md">Weekly Conversion Funnel</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 50, left: 70, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="stage" tick={{ fontSize: 12, fill: '#2d3748' }} axisLine={false} tickLine={false} width={65} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={1000}>
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                  <LabelList dataKey="value" position="right" style={{ fontSize: 14, fontWeight: 'bold', fill: '#2d3748' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Conversion arrows */}
            <div className="flex justify-between px-md mt-sm">
              {funnelData.slice(1).map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs text-bb-charcoal-500">↓</div>
                  <div className="text-xs font-semibold text-bb-steel-600">{item.rate}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Math Breakdown */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Weekly Targets</h3>
              <div className="grid grid-cols-2 gap-sm">
                <div className="text-center p-sm bg-white rounded-lg border border-bb-amber-200">
                  <p className="text-2xl font-bold text-bb-amber-600">200+</p>
                  <p className="text-xs text-bb-charcoal-600">Dials/Week</p>
                </div>
                <div className="text-center p-sm bg-white rounded-lg border border-bb-steel-200">
                  <p className="text-2xl font-bold text-bb-steel-600">35-40</p>
                  <p className="text-xs text-bb-charcoal-600">Conversations</p>
                </div>
                <div className="text-center p-sm bg-white rounded-lg border border-bb-charcoal-200">
                  <p className="text-2xl font-bold text-bb-charcoal-600">8-10</p>
                  <p className="text-xs text-bb-charcoal-600">Qualified</p>
                </div>
                <div className="text-center p-sm bg-white rounded-lg border border-bb-forest-200">
                  <p className="text-2xl font-bold text-bb-forest-600">4-5</p>
                  <p className="text-xs text-bb-charcoal-600">New Customers</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Daily Breakdown</h3>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-xl font-bold text-bb-amber-600">40+</p>
                  <p className="text-xs text-bb-charcoal-600">Dials/Day</p>
                </div>
                <span className="text-bb-slate-400">→</span>
                <div className="text-center">
                  <p className="text-xl font-bold text-bb-steel-600">7-8</p>
                  <p className="text-xs text-bb-charcoal-600">Conversations</p>
                </div>
                <span className="text-bb-slate-400">→</span>
                <div className="text-center">
                  <p className="text-xl font-bold text-bb-forest-600">1-2</p>
                  <p className="text-xs text-bb-charcoal-600">Qualified</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industry Benchmarks */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Our Rates vs. Industry Standard</h3>
          <div className="grid grid-cols-3 gap-md">
            {benchmarks.map((b, idx) => (
              <div key={idx} className="p-sm bg-bb-slate-50 rounded-lg">
                <p className="text-xs font-semibold text-bb-charcoal-700 mb-xs">{b.metric}</p>
                <div className="flex items-center gap-sm mb-xs">
                  <span className="text-sm font-bold text-bb-forest-600">{b.ours}</span>
                  <span className="text-xs text-bb-charcoal-400">vs</span>
                  <span className="text-sm text-bb-charcoal-500">{b.industry}</span>
                </div>
                <p className="text-xs text-bb-steel-600">{b.advantage}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-md shadow-lg text-white">
          <p className="text-sm text-center">
            <span className="font-bold text-bb-amber-300">The Formula:</span>
            {' '}40 dials/day × 5 days = 200 dials → 35 conversations → 9 qualified → <span className="text-bb-forest-300 font-bold">4-5 new customers/week</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
