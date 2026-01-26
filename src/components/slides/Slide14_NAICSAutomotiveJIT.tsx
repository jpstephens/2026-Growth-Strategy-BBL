import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { automotiveJIT } from '../../data/naicsCodes'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide14_NAICSAutomotiveJIT() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-md">Automotive JIT (20%)</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-forest-500 to-bb-steel-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">High-value components, time-critical, premium margins</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-lg">
          {automotiveJIT.map((code, idx) => (
            <div key={idx} className="rounded-xl border-2 border-bb-forest-300 bg-gradient-to-br from-bb-forest-50 to-white p-lg shadow-sm">
              <p className="text-sm font-mono font-bold text-bb-forest-600 mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-charcoal-800 mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-charcoal-600 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-charcoal-600 border-t border-bb-forest-200 pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Callout variant="success" title="Highest Margin Vertical">
            <p>
              Automotive suppliers can't afford delays—JIT is a requirement, not an option. These are premium customers willing to pay for reliability. Potential for $250-400+ margins with quality service. Start with Tier 1 and 2 suppliers near assembly plants.
            </p>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
