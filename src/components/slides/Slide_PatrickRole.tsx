import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { patrickGrowthPath } from '../../data/teamStructure'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const weeklyBreakdown = [
  { activity: 'Dials', target: 200, color: '#d6973a' },
  { activity: 'Conversations', target: 40, color: '#4f85a6' },
  { activity: 'Quotes Sent', target: 4, color: '#438f74' },
]

export default function Slide_PatrickRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-4">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-2">
            Patrick's Role & Targets
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-2" />
          <p className="text-sm text-bb-charcoal-600">
            <span className="font-bold text-bb-charcoal-800">100% sales focus.</span> Clear ownership. Protected time. Proven targets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="space-y-3">
            {/* What Patrick Owns */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-forest-300 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-bb-forest-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
                <h3 className="text-sm font-bold text-bb-charcoal-800">Patrick Owns</h3>
              </div>
              <ul className="space-y-1">
                {patrickGrowthPath.whatHeOwns.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-bb-forest-600 font-bold text-xs">→</span>
                    <span className="text-xs text-bb-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What David Handles */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-sm font-bold">✗</div>
                <h3 className="text-sm font-bold text-bb-charcoal-600">David Handles (Not Patrick)</h3>
              </div>
              <ul className="space-y-1">
                {patrickGrowthPath.whatHeDoesNot.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-bb-slate-400 font-bold text-xs">×</span>
                    <span className="text-xs text-bb-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {/* Weekly Targets Chart */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-2">Weekly Activity Targets</h3>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyBreakdown} layout="vertical" margin={{ top: 0, right: 30, left: 80, bottom: 0 }}>
                    <XAxis type="number" tick={{ fontSize: 10, fill: '#6b7785' }} axisLine={false} tickLine={false} />
                    <YAxis type="category" dataKey="activity" tick={{ fontSize: 11, fill: '#2d3748' }} axisLine={false} tickLine={false} width={75} />
                    <Bar dataKey="target" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={800}>
                      {weeklyBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-bb-charcoal-500 mt-2 text-center">
                200 dials → 40 conversations → 4 quotes → <span className="font-bold text-bb-forest-600">1 new customer/week</span>
              </p>
            </motion.div>

            {/* Protected Time */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-4 shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-1">Protected Calling Time</h3>
              <p className="text-xl font-display font-black text-bb-amber-600">{patrickGrowthPath.protectedTime}</p>
              <p className="text-xs text-bb-charcoal-600">No meetings. No ops issues. No interruptions.</p>
            </motion.div>

            {/* Monthly Target */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-bb-charcoal-800">Monthly Target</h3>
                  <p className="text-2xl font-display font-black text-bb-forest-600">4-5 New Customers</p>
                </div>
                <div className="text-right text-xs text-bb-charcoal-600">
                  <p>800 dials/month</p>
                  <p>15-20% connect rate</p>
                  <p>50% close rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Growth Path - Inline */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-bold text-bb-charcoal-800 whitespace-nowrap">Growth Path:</h3>
            <div className="flex items-center gap-3 flex-1">
              <div className="flex-1 text-center px-3 py-2 border-2 border-bb-slate-200 rounded-lg">
                <p className="text-xs font-bold text-bb-charcoal-800">Now: Sales Rep</p>
              </div>
              <span className="text-bb-slate-400">→</span>
              <div className="flex-1 text-center px-3 py-2 border-2 border-bb-steel-300 rounded-lg bg-bb-steel-50">
                <p className="text-xs font-bold text-bb-charcoal-800">Q2: Train Rep #2</p>
              </div>
              <span className="text-bb-slate-400">→</span>
              <div className="flex-1 text-center px-3 py-2 border-2 border-bb-forest-300 rounded-lg bg-bb-forest-50">
                <p className="text-xs font-bold text-bb-charcoal-800">Q3-Q4: Sales Lead</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
