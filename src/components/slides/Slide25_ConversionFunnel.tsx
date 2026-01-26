import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Monthly funnel data
const monthlyFunnel = [
  { stage: 'Dials', value: 800, dropoff: 0, color: '#d6973a' },
  { stage: 'Conversations', value: 140, dropoff: 660, color: '#4f85a6' },
  { stage: 'Qualified', value: 36, dropoff: 104, color: '#6b7785' },
  { stage: 'Closed', value: 18, dropoff: 18, color: '#438f74' },
]

export default function Slide25_ConversionFunnel() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-xs">
            The Sales Funnel: Monthly View
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            800 dials → 140 conversations → 36 qualified → <span className="font-bold text-bb-forest-600">18 new customers</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Visual Funnel */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-md">Monthly Funnel (Per Rep)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyFunnel} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="stage" tick={{ fontSize: 12, fill: '#2d3748', fontWeight: 600 }} axisLine={false} tickLine={false} width={75} />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} isAnimationActive={true} animationDuration={1200} barSize={35}>
                  {monthlyFunnel.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Conversion rates between stages */}
            <div className="grid grid-cols-3 gap-md mt-md pt-md border-t border-bb-slate-200">
              <div className="text-center">
                <p className="text-lg font-bold text-bb-steel-600">17.5%</p>
                <p className="text-xs text-bb-charcoal-500">Connect Rate</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-bb-charcoal-600">26%</p>
                <p className="text-xs text-bb-charcoal-500">Qualify Rate</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-bb-forest-600">50%</p>
                <p className="text-xs text-bb-charcoal-500">Close Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Drop-off Explanation */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Understanding Drop-off</h3>
              <div className="space-y-sm">
                <div className="flex items-center justify-between p-sm bg-bb-amber-50 rounded-lg">
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">Dials → Conversations</p>
                    <p className="text-xs text-bb-charcoal-500">660 don't connect (voicemail, no answer)</p>
                  </div>
                  <p className="text-lg font-bold text-bb-amber-600">82.5%</p>
                </div>
                <div className="flex items-center justify-between p-sm bg-bb-steel-50 rounded-lg">
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">Conversations → Qualified</p>
                    <p className="text-xs text-bb-charcoal-500">104 not a fit (wrong timing, no need)</p>
                  </div>
                  <p className="text-lg font-bold text-bb-steel-600">74%</p>
                </div>
                <div className="flex items-center justify-between p-sm bg-bb-charcoal-50 rounded-lg">
                  <div>
                    <p className="text-xs font-semibold text-bb-charcoal-700">Qualified → Closed</p>
                    <p className="text-xs text-bb-charcoal-500">18 choose competitor or delay</p>
                  </div>
                  <p className="text-lg font-bold text-bb-charcoal-600">50%</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md">
              <h3 className="text-sm font-bold text-bb-forest-700 mb-xs">Why This Works</h3>
              <p className="text-xs text-bb-charcoal-700 leading-relaxed">
                <span className="font-bold">Continuous feeding = consistent growth.</span> Every month we pour 800 dials into the top.
                Even with 97.75% drop-off, we still get 18 customers. That's the power of volume + system.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Insight: The Machine */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">The Funnel is a Machine</h3>
          <div className="grid grid-cols-4 gap-md text-center">
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Input</p>
              <p className="text-lg font-bold text-bb-amber-600">800 dials</p>
              <p className="text-xs text-bb-charcoal-600">Consistent weekly</p>
            </div>
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Processing</p>
              <p className="text-lg font-bold text-bb-steel-600">17.5% × 26%</p>
              <p className="text-xs text-bb-charcoal-600">Conversion rates</p>
            </div>
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Output</p>
              <p className="text-lg font-bold text-bb-forest-600">18 customers</p>
              <p className="text-xs text-bb-charcoal-600">Monthly (per rep)</p>
            </div>
            <div className="p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Result</p>
              <p className="text-lg font-bold text-bb-charcoal-800">4-5/month</p>
              <p className="text-xs text-bb-charcoal-600">Conservative target</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">The Law of the Funnel:</span>
            {' '}More in the top = more out the bottom. <span className="text-bb-amber-200">Stop feeding the funnel, growth stops.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
