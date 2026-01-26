import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { patrickGrowthPath } from '../../data/teamStructure'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Weekly activity breakdown showing how targets are achieved
const weeklyBreakdown = [
  { activity: 'Dials', target: 200, color: '#d6973a' },
  { activity: 'Conversations', target: 40, color: '#4f85a6' },
  { activity: 'Quotes Sent', target: 4, color: '#438f74' },
]

export default function Slide_PatrickRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Patrick's Role & Targets
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600 max-w-3xl mx-auto">
            <span className="font-bold text-bb-charcoal-800">100% sales focus.</span>
            {' '}Clear ownership. Protected time. Proven targets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left Column: What Patrick Owns / Doesn't Own */}
          <div className="space-y-md">
            {/* What Patrick Owns */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-forest-300 p-md shadow-sm">
              <div className="flex items-center gap-sm mb-sm">
                <div className="w-8 h-8 rounded-lg bg-bb-forest-500 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <h3 className="text-base font-bold text-bb-charcoal-800">Patrick Owns</h3>
              </div>
              <ul className="space-y-xs">
                {patrickGrowthPath.whatHeOwns.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-sm">
                    <span className="text-bb-forest-600 font-bold mt-0.5 text-sm">→</span>
                    <span className="text-sm text-bb-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What Patrick Doesn't Own */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <div className="flex items-center gap-sm mb-sm">
                <div className="w-8 h-8 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-sm font-bold">
                  ✗
                </div>
                <h3 className="text-base font-bold text-bb-charcoal-600">David Handles (Not Patrick)</h3>
              </div>
              <ul className="space-y-xs">
                {patrickGrowthPath.whatHeDoesNot.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-sm">
                    <span className="text-bb-slate-400 font-bold mt-0.5 text-sm">×</span>
                    <span className="text-sm text-bb-charcoal-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Targets & How We Get There */}
          <div className="space-y-md">
            {/* Weekly Activity Targets Chart */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Weekly Activity Targets</h3>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyBreakdown} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                    <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7785' }} axisLine={false} tickLine={false} />
                    <YAxis type="category" dataKey="activity" tick={{ fontSize: 12, fill: '#2d3748' }} axisLine={false} tickLine={false} width={75} />
                    <Bar dataKey="target" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={1000}>
                      {weeklyBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-bb-charcoal-500 mt-sm text-center">
                200 dials → 40 conversations → 4 quotes → <span className="font-bold text-bb-forest-600">1 new customer/week</span>
              </p>
            </motion.div>

            {/* Protected Time */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">Protected Calling Time</h3>
              <p className="text-2xl font-display font-black text-bb-amber-600 mb-xs">{patrickGrowthPath.protectedTime}</p>
              <p className="text-sm text-bb-charcoal-600">No meetings. No ops issues. No interruptions.</p>
            </motion.div>

            {/* Monthly Target */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">Monthly Target</h3>
                  <p className="text-3xl font-display font-black text-bb-forest-600">4-5 New Customers</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-bb-charcoal-500 mb-xs">How we get there:</p>
                  <p className="text-sm text-bb-charcoal-700">800 dials/month</p>
                  <p className="text-sm text-bb-charcoal-700">15-20% connect rate</p>
                  <p className="text-sm text-bb-charcoal-700">50% close rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Growth Path - Clean, Simple Steps */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-base font-bold text-bb-charcoal-800 mb-md text-center">Patrick's Growth Path</h3>
          <div className="flex items-center justify-between gap-md">
            <div className="flex-1 text-center p-sm border-2 border-bb-slate-200 rounded-lg">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Phase 1: Now</p>
              <p className="text-sm font-bold text-bb-charcoal-800">Sales Rep</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">Prove the system works</p>
            </div>
            <div className="text-bb-slate-400 text-lg">→</div>
            <div className="flex-1 text-center p-sm border-2 border-bb-steel-300 rounded-lg bg-bb-steel-50">
              <p className="text-xs text-bb-steel-600 mb-xs">Phase 2: Q2</p>
              <p className="text-sm font-bold text-bb-charcoal-800">Train Rep #2</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">After 4+/mo for 2 months</p>
            </div>
            <div className="text-bb-slate-400 text-lg">→</div>
            <div className="flex-1 text-center p-sm border-2 border-bb-forest-300 rounded-lg bg-bb-forest-50">
              <p className="text-xs text-bb-forest-600 mb-xs">Phase 3: Q3-Q4</p>
              <p className="text-sm font-bold text-bb-charcoal-800">Sales Lead</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">Lead a 3-person team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
