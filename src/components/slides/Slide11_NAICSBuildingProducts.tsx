import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { buildingProducts } from '../../data/naicsCodes'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide11_NAICSBuildingProducts() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">Building Products (25%)</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-md"></div>
          <p className="text-lg text-bb-charcoal-600">Heavy, consistent, regional delivery</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-lg">
          {buildingProducts.map((code, idx) => (
            <div key={idx} className="rounded-xl border-2 border-bb-slate-200 bg-white p-lg shadow-sm">
              <p className="text-sm font-mono font-bold text-bb-steel-600 mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-charcoal-800 mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-charcoal-600 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-charcoal-600 border-t border-bb-slate-200 pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Callout variant="success" title="Sales Approach">
            <p>
              These companies have consistent regional freight needs (cement, concrete, lumber, components). Target purchasing managers and logistics coordinators. Strong margin potential ($200+) with repeat volume.
            </p>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
