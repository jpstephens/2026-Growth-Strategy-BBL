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
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-xs">Carrier Tier System</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-forest-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Merit-based ranking that rewards reliability and builds strategic relationships</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: The Tiers */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Three Tiers</h3>
            <div className="space-y-sm">
              {carrierTiers.map((tier, idx) => {
                const colorMap: Record<string, { bg: string; border: string; text: string }> = {
                  'bb-forest': { bg: 'bg-bb-forest-50', border: 'border-bb-forest-300', text: 'text-bb-forest-700' },
                  'bb-steel': { bg: 'bg-bb-steel-50', border: 'border-bb-steel-300', text: 'text-bb-steel-700' },
                  'bb-amber': { bg: 'bg-bb-amber-50', border: 'border-bb-amber-300', text: 'text-bb-amber-700' },
                }
                const colors = colorMap[tier.color]
                return (
                  <div key={idx} className={`rounded-lg border-2 ${colors.border} ${colors.bg} p-sm`}>
                    <div className="flex items-center justify-between mb-xs">
                      <span className={`font-bold ${colors.text}`}>{tier.tier}</span>
                      <span className={`text-xs px-sm py-0.5 rounded ${colors.text} bg-white`}>{tier.criteria}</span>
                    </div>
                    <p className="text-xs text-bb-charcoal-600">{tier.benefit}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: HubSpot Integration */}
          <motion.div variants={itemVariants} className="space-y-sm">
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Using HubSpot to Track Carriers</h3>
              <p className="text-xs text-bb-charcoal-600 mb-sm">
                Each carrier gets a contact record in HubSpot with a custom "Carrier Tier" field. David updates the tier based on performance.
              </p>
              <div className="space-y-xs">
                <div className="flex items-center gap-sm p-xs bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">1</span>
                  <span className="text-xs text-bb-charcoal-600">Create carrier contact in HubSpot</span>
                </div>
                <div className="flex items-center gap-sm p-xs bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">2</span>
                  <span className="text-xs text-bb-charcoal-600">Set tier field (Trial → Proven → Preferred)</span>
                </div>
                <div className="flex items-center gap-sm p-xs bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">3</span>
                  <span className="text-xs text-bb-charcoal-600">Log loads and performance notes</span>
                </div>
                <div className="flex items-center gap-sm p-xs bg-bb-slate-50 rounded">
                  <span className="w-5 h-5 bg-bb-steel-500 rounded flex items-center justify-center text-white text-xs font-bold">4</span>
                  <span className="text-xs text-bb-charcoal-600">Filter by tier when booking lanes</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-sm">
              <h3 className="text-xs font-bold text-bb-forest-700 mb-xs">Why This Grows the Business</h3>
              <p className="text-xs text-bb-charcoal-600">
                Preferred carriers = consistent service = happy customers = referrals. Building a carrier network is how small brokers beat big ones.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Promotion Path */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">Carrier Progression</h3>
          <div className="flex items-center justify-center gap-md">
            <div className="text-center p-sm bg-bb-amber-50 rounded-lg border border-bb-amber-200">
              <p className="text-xs font-bold text-bb-amber-700">Trial</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">First 5 loads</p>
            </div>
            <span className="text-bb-charcoal-400 font-bold">→</span>
            <div className="text-center p-sm bg-bb-steel-50 rounded-lg border border-bb-steel-200">
              <p className="text-xs font-bold text-bb-steel-700">Proven</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">5-10 loads, 90%+ OTD</p>
            </div>
            <span className="text-bb-charcoal-400 font-bold">→</span>
            <div className="text-center p-sm bg-bb-forest-50 rounded-lg border border-bb-forest-200">
              <p className="text-xs font-bold text-bb-forest-700">Preferred</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">10+ loads, 95%+ OTD</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-md shadow-lg text-white">
          <p className="text-sm text-center">
            <span className="font-bold text-bb-forest-300">Good carriers are rare.</span>
            {' '}Find them, develop them, keep them. That's how we deliver consistently and grow profitably.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
