import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { metalFabrication } from '../../data/naicsCodes'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide12_NAICSMetalFabrication() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">Metal Fabrication (30%)</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md"></div>
          <p className="text-lg text-bb-charcoal-600">High-value components, JIT critical, premium margins</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-lg">
          {metalFabrication.map((code, idx) => (
            <div key={idx} className="rounded-xl border-2 border-bb-steel-300 bg-gradient-to-br from-bb-steel-50 to-white p-lg shadow-sm">
              <p className="text-sm font-mono font-bold text-bb-steel-600 mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-charcoal-800 mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-charcoal-600 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-charcoal-600 border-t border-bb-steel-200 pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Callout variant="success" title="Premium Opportunity">
            <p>
              Metal fabricators produce high-value components critical to manufacturing. These companies NEED reliable logistics and will pay for it. Potential for $250+ margins with long-haul and JIT premium.
            </p>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
