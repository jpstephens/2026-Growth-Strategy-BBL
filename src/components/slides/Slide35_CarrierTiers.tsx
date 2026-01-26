import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const carrierTiers = [
  {
    tier: 'Preferred',
    color: 'bb-forest',
    criteria: '10+ loads, 95%+ on-time, no claims',
    benefit: 'First call on good freight, priority payment',
  },
  {
    tier: 'Proven',
    color: 'bb-steel',
    criteria: '5+ loads, 90%+ on-time, good communication',
    benefit: 'Regular freight, standard terms',
  },
  {
    tier: 'Trial',
    color: 'bb-amber',
    criteria: 'New carrier, vetting complete',
    benefit: 'Start with low-risk loads to prove reliability',
  },
]

export default function Slide35_CarrierTiers() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-4">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-2">Carrier Tier System</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-bb-forest-500 to-bb-steel-500 mx-auto rounded-full mb-2" />
          <p className="text-sm text-bb-charcoal-600">Merit-based ranking that rewards reliability and builds strategic relationships</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {/* Left: The Tiers */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-3">Three Tiers</h3>
            <div className="space-y-2">
              {carrierTiers.map((tier, idx) => {
                const colorMap: Record<string, { bg: string; border: string; text: string }> = {
                  'bb-forest': { bg: 'bg-bb-forest-50', border: 'border-bb-forest-300', text: 'text-bb-forest-700' },
                  'bb-steel': { bg: 'bg-bb-steel-50', border: 'border-bb-steel-300', text: 'text-bb-steel-700' },
                  'bb-amber': { bg: 'bg-bb-amber-50', border: 'border-bb-amber-300', text: 'text-bb-amber-700' },
                }
                const colors = colorMap[tier.color]
                return (
                  <div key={idx} className={`rounded-lg border-2 ${colors.border} ${colors.bg} p-2`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold text-sm ${colors.text}`}>{tier.tier}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${colors.text} bg-white`}>{tier.criteria}</span>
                    </div>
                    <p className="text-xs text-bb-charcoal-600">{tier.benefit}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: HubSpot Integration */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-2">Using HubSpot to Track Carriers</h3>
              <p className="text-xs text-bb-charcoal-600 mb-2">
                Each carrier gets a contact record in HubSpot with a custom "Carrier Tier" field.
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-1 bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">1</span>
                  <span className="text-xs text-bb-charcoal-600">Create carrier contact in HubSpot</span>
                </div>
                <div className="flex items-center gap-2 p-1 bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">2</span>
                  <span className="text-xs text-bb-charcoal-600">Set tier (Trial → Proven → Preferred)</span>
                </div>
                <div className="flex items-center gap-2 p-1 bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">3</span>
                  <span className="text-xs text-bb-charcoal-600">Log loads and performance notes</span>
                </div>
                <div className="flex items-center gap-2 p-1 bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">4</span>
                  <span className="text-xs text-bb-charcoal-600">Filter by tier when booking</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-3">
              <h3 className="text-xs font-bold text-bb-forest-700 mb-1">Why This Grows the Business</h3>
              <p className="text-xs text-bb-charcoal-600">
                Preferred carriers = consistent service = happy customers = referrals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Promotion Path */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-4 shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-3 text-center">Carrier Progression</h3>
          <div className="flex items-center justify-center gap-4">
            <div className="text-center p-2 bg-bb-amber-50 rounded-lg border border-bb-amber-200">
              <p className="text-xs font-bold text-bb-amber-700">Trial</p>
              <p className="text-xs text-bb-charcoal-500">First 5 loads</p>
            </div>
            <span className="text-bb-charcoal-400 font-bold">→</span>
            <div className="text-center p-2 bg-bb-steel-50 rounded-lg border border-bb-steel-200">
              <p className="text-xs font-bold text-bb-steel-700">Proven</p>
              <p className="text-xs text-bb-charcoal-500">5-10 loads, 90%+ OTD</p>
            </div>
            <span className="text-bb-charcoal-400 font-bold">→</span>
            <div className="text-center p-2 bg-bb-forest-50 rounded-lg border border-bb-forest-200">
              <p className="text-xs font-bold text-bb-forest-700">Preferred</p>
              <p className="text-xs text-bb-charcoal-500">10+ loads, 95%+ OTD</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-4 shadow-lg text-white">
          <p className="text-sm text-center">
            <span className="font-bold text-bb-forest-300">Good carriers are rare.</span>
            {' '}Find them, develop them, keep them. That's how we deliver consistently and grow profitably.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
