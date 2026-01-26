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
      <div className="w-full max-w-6xl h-full flex flex-col mx-auto">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Patrick's Role & Targets
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            <span className="font-bold text-bb-charcoal-800">100% sales focus.</span> Clear ownership. Protected time. Proven targets.
          </p>
        </motion.div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid grid-cols-3 gap-lg flex-1">
          {/* Column 1: What Patrick Owns */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-forest-300 p-lg shadow-sm flex flex-col">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-forest-500 flex items-center justify-center text-white text-lg font-bold">✓</div>
              <h3 className="text-lg font-bold text-bb-charcoal-800">Patrick Owns</h3>
            </div>
            <ul className="space-y-md flex-1">
              {patrickGrowthPath.whatHeOwns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-forest-600 font-bold">→</span>
                  <span className="text-base text-bb-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: What David Handles */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm flex flex-col">
            <div className="flex items-center gap-md mb-md">
              <div className="w-10 h-10 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-lg font-bold">✗</div>
              <h3 className="text-lg font-bold text-bb-charcoal-600">David Handles</h3>
            </div>
            <ul className="space-y-md flex-1">
              {patrickGrowthPath.whatHeDoesNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-slate-400 font-bold">×</span>
                  <span className="text-base text-bb-charcoal-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-md pt-md border-t border-bb-slate-200">
              <p className="text-sm text-bb-charcoal-500 italic">Clear boundary = protected sales time</p>
            </div>
          </motion.div>

          {/* Column 3: Metrics & Targets */}
          <div className="flex flex-col gap-lg">
            {/* Weekly Targets Chart */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm flex-1">
              <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md">Weekly Activity</h3>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyBreakdown} layout="vertical" margin={{ top: 0, right: 20, left: 80, bottom: 0 }}>
                    <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7785' }} axisLine={false} tickLine={false} />
                    <YAxis type="category" dataKey="activity" tick={{ fontSize: 12, fill: '#2d3748' }} axisLine={false} tickLine={false} width={75} />
                    <Bar dataKey="target" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={800}>
                      {weeklyBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-bb-charcoal-500 mt-sm text-center">
                → <span className="font-bold text-bb-forest-600">1 new customer/week</span>
              </p>
            </motion.div>

            {/* Protected Time */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-lg shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">Protected Calling Time</h3>
              <p className="text-2xl font-display font-black text-bb-amber-600">{patrickGrowthPath.protectedTime}</p>
              <p className="text-sm text-bb-charcoal-600 mt-xs">No meetings. No ops. No interruptions.</p>
            </motion.div>

            {/* Monthly Target */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-lg shadow-sm">
              <h3 className="text-base font-bold text-bb-charcoal-800 mb-xs">Monthly Target</h3>
              <p className="text-3xl font-display font-black text-bb-forest-600">4-5 New Customers</p>
              <p className="text-sm text-bb-charcoal-600 mt-xs">800 dials · 15-20% connect · 50% close</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
