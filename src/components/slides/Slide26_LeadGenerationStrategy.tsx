import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide26_LeadGenerationStrategy() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-md">Lead Generation Strategy</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">Why we need 25,000+ prospects across 4 industries</p>
        </motion.div>

        {/* The Funnel */}
        <motion.div variants={itemVariants} className="bg-white border-2 border-bb-slate-200 p-lg rounded-xl shadow-sm">
          <h3 className="text-base font-display font-bold text-bb-charcoal-800 mb-md text-center">The Cold Email + Cold Call Funnel</h3>
          <div className="grid grid-cols-5 gap-md text-center">
            <div className="p-md bg-white border-2 border-bb-slate-200 rounded-xl shadow-sm">
              <p className="text-sm text-bb-charcoal-600 mb-xs font-semibold">Contacts</p>
              <p className="text-xl font-bold text-bb-charcoal-800">25,000</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Initial list</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-bb-charcoal-400">→</p>
            </div>
            <div className="p-md bg-white border-2 border-bb-slate-200 rounded-xl shadow-sm">
              <p className="text-sm text-bb-charcoal-600 mb-xs font-semibold">Email Replies</p>
              <p className="text-xl font-bold text-bb-steel-600">500-600</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">2-3% reply rate</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-bb-charcoal-400">→</p>
            </div>
            <div className="p-md bg-gradient-to-br from-bb-amber-50 to-white border-2 border-bb-amber-300 rounded-xl shadow-sm">
              <p className="text-sm text-bb-charcoal-600 mb-xs font-semibold">Conversations</p>
              <p className="text-xl font-bold text-bb-amber-600">200-250</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Warm calls</p>
            </div>
          </div>
          <div className="mt-md text-center">
            <p className="text-sm text-bb-charcoal-600">
              <span className="font-semibold text-bb-charcoal-800">200-250 conversations per year</span> →
              <span className="font-semibold text-bb-charcoal-800 ml-sm">40-60 deals</span> →
              <span className="font-semibold text-bb-amber-600 ml-sm">4-6 customers/month</span>
            </p>
          </div>
        </motion.div>

        {/* The Industries */}
        <motion.div variants={itemVariants} className="bg-white border-2 border-bb-steel-300 p-lg rounded-xl shadow-sm">
          <h3 className="text-base font-display font-bold text-bb-charcoal-800 mb-md">4 Target Industries (by allocation)</h3>
          <div className="grid grid-cols-4 gap-md">
            <StatCard label="Building Products" value="25%" size="lg" highlight />
            <StatCard label="Metal Fabrication" value="30%" size="lg" highlight />
            <StatCard label="Plastics & Packaging" value="25%" size="lg" highlight />
            <StatCard label="Automotive JIT" value="20%" size="lg" highlight />
          </div>
        </motion.div>

        {/* Why These 4 */}
        <motion.div variants={itemVariants} className="bg-white border-2 border-bb-slate-200 p-lg rounded-xl shadow-sm">
          <h3 className="text-base font-display font-bold text-bb-charcoal-800 mb-md">Why These Industries?</h3>
          <p className="text-sm text-bb-charcoal-600">
            These 4 industries have predictable freight profiles. They have regular shipments (not one-time), they ship high-value goods (can pay healthy margins), and they're fragmented enough that a regional broker can win consistent business. We have proof: current best customers come from these verticals.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white border-2 border-bb-forest-300 p-lg rounded-xl shadow-sm">
          <p className="text-sm text-bb-charcoal-700 text-center">
            <span className="font-semibold text-bb-charcoal-800">Action:</span> Start with 5,000 contacts across these industries in Month 1. Expand to 25,000 by Month 3 as we prove the conversion system works.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
