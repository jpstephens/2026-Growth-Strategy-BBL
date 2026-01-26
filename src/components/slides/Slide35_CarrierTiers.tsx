import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { carrierTiers } from '../../data/operations'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide35_CarrierTiers() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">Carrier Tier System</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">Merit-based. Performance-tracked. Strategic relationship building.</p>
        </motion.div>

        {/* Tiers */}
        <motion.div variants={itemVariants} className="space-y-sm">
          {carrierTiers.map((tier, idx) => (
            <div key={idx} className={`rounded-xl border-2 p-md shadow-sm ${
              idx === 0
                ? 'border-bb-forest-300 bg-gradient-to-br from-bb-forest-50 to-white'
                : idx === 1
                  ? 'border-bb-steel-300 bg-gradient-to-br from-bb-steel-50 to-white'
                  : idx === 2
                    ? 'border-bb-slate-200 bg-white'
                    : 'border-bb-amber-300 bg-gradient-to-br from-bb-amber-50 to-white'
            }`}>
              <p className="font-bold text-bb-charcoal-800 text-base mb-sm">{tier.tier}</p>
              <div className="space-y-sm">
                <div>
                  <p className="text-xs font-semibold text-bb-charcoal-600">Criteria:</p>
                  <p className="text-sm text-bb-charcoal-600">{tier.criteria}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-bb-charcoal-600">Treatment:</p>
                  <p className="text-sm text-bb-charcoal-600">{tier.treatment}</p>
                </div>
                <div className="pt-sm border-t border-bb-slate-200">
                  <p className="text-xs font-semibold text-bb-charcoal-600">Action:</p>
                  <p className="text-sm font-semibold text-bb-charcoal-800">{tier.action}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Callout */}
        <motion.div variants={itemVariants}>
          <Callout variant="info" title="Carrier Development Strategy">
            <p className="mb-sm">
              Good carriers are rare and valuable. The goal is to:
            </p>
            <ul className="space-y-xs text-sm">
              <li>• Identify reliable carriers early (Trial tier)</li>
              <li>• Promote proven performers (Proven → Preferred)</li>
              <li>• Build direct relationships for preferred lanes</li>
              <li>• Lock in best carriers before competitors do</li>
            </ul>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
