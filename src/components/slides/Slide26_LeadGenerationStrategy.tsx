import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Funnel conversion data
const funnelData = [
  { stage: 'Cold Emails Sent', value: 25000, color: '#6b7785' },
  { stage: 'Email Replies', value: 625, color: '#4f85a6' },
  { stage: 'Warm Calls Made', value: 625, color: '#d6973a' },
  { stage: 'Conversations', value: 200, color: '#438f74' },
]

export default function Slide26_LeadGenerationStrategy() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-xs">Lead Generation: Cold Email + Warm Calls</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">How we turn 25,000 contacts into 200+ qualified conversations per year</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: What is Cold Email */}
          <motion.div variants={itemVariants} className="bg-white border-2 border-bb-slate-200 p-md rounded-xl shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">What is Cold Email?</h3>
            <p className="text-xs text-bb-charcoal-600 mb-sm leading-relaxed">
              Cold email is automated outreach to prospects who don't know us yet. We use a tool called <span className="font-semibold">Instantly.ai</span> to send personalized emails at scale to transportation managers and logistics decision-makers.
            </p>

            <h4 className="text-xs font-bold text-bb-charcoal-700 mb-xs mt-md">How It Works:</h4>
            <ol className="text-xs text-bb-charcoal-600 space-y-xs">
              <li className="flex items-start gap-sm">
                <span className="font-bold text-bb-steel-600">1.</span>
                <span>We buy targeted contact lists (NAICS codes for our industries)</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="font-bold text-bb-steel-600">2.</span>
                <span>Emails go out automatically (100-200/day per account)</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="font-bold text-bb-steel-600">3.</span>
                <span>When someone replies, they become a "warm lead"</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="font-bold text-bb-steel-600">4.</span>
                <span>Patrick calls warm leads (not cold strangers)</span>
              </li>
            </ol>

            <div className="mt-md p-sm bg-bb-forest-50 rounded-lg border border-bb-forest-200">
              <p className="text-xs font-semibold text-bb-forest-700">Why This is Better Than Pure Cold Calling:</p>
              <p className="text-xs text-bb-charcoal-600 mt-xs">Patrick calls people who have already shown interest. Connect rate jumps from 5% (cold) to 15-20% (warm).</p>
            </div>
          </motion.div>

          {/* Right: The Math */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-white border-2 border-bb-slate-200 p-md rounded-xl shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">The Conversion Math</h3>
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 60, left: 100, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="stage" tick={{ fontSize: 10, fill: '#2d3748' }} axisLine={false} tickLine={false} width={95} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={1000}>
                    {funnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <LabelList dataKey="value" position="right" style={{ fontSize: 11, fontWeight: 'bold', fill: '#2d3748' }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-3 gap-sm mt-sm pt-sm border-t border-bb-slate-200">
                <div className="text-center">
                  <p className="text-lg font-bold text-bb-steel-600">2.5%</p>
                  <p className="text-xs text-bb-charcoal-500">Email Reply Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-bb-amber-600">32%</p>
                  <p className="text-xs text-bb-charcoal-500">Reply → Conversation</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-bb-forest-600">20-30%</p>
                  <p className="text-xs text-bb-charcoal-500">Conversation → Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bb-amber-50 to-white border-2 border-bb-amber-300 p-md rounded-xl">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Where These Numbers Come From</h3>
              <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                <li>• <span className="font-semibold">2.5% reply rate:</span> Industry standard for B2B cold email</li>
                <li>• <span className="font-semibold">32% to conversation:</span> Warm leads are pre-qualified</li>
                <li>• <span className="font-semibold">20-30% close:</span> Our relationship-first approach</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Target Industries */}
        <motion.div variants={itemVariants} className="bg-white border-2 border-bb-slate-200 p-md rounded-xl shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Target Industries</h3>
          <p className="text-xs text-bb-charcoal-600 mb-sm">
            These industries have predictable freight profiles, regular shipments, and can pay healthy margins. Our current best customers come from these verticals.
          </p>
          <div className="grid grid-cols-4 gap-md">
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-lg font-bold text-bb-charcoal-800">30%</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Metal Fabrication</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Heavy, high-value loads</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-lg font-bold text-bb-charcoal-800">25%</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Building Products</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Consistent, regional</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-lg font-bold text-bb-charcoal-800">25%</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Industrial Equipment</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">High margin, specialized</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-lg font-bold text-bb-charcoal-800">20%</p>
              <p className="text-xs font-semibold text-bb-charcoal-700">Automotive JIT</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Premium rates, time-critical</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">The System:</span>
            {' '}25,000 contacts → 625 replies → 200 conversations → <span className="text-bb-amber-200 font-bold">40-60 new customers/year</span>
            <span className="text-bb-forest-100 ml-sm">(4-5 per month)</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
