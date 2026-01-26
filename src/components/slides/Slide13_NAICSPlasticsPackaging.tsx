import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { plasticsPackaging } from '../../data/naicsCodes'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide13_NAICSPlasticsPackaging() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">Plastics & Packaging (25%)</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-md"></div>
          <p className="text-lg text-bb-charcoal-600">High volume, retail/manufacturing distribution</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-lg">
          {plasticsPackaging.map((code, idx) => (
            <div key={idx} className="rounded-xl border-2 border-bb-slate-200 bg-white p-lg shadow-sm">
              <p className="text-sm font-mono font-bold text-bb-amber-600 mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-charcoal-800 mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-charcoal-600 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-charcoal-600 border-t border-bb-slate-200 pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Callout variant="info" title="Volume Play">
            <p>
              Plastics and packaging companies ship frequently to retailers and manufacturers. High-frequency shippers = relationship stickiness. Margins $180-250. Growth from increased shipping volume over time.
            </p>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
