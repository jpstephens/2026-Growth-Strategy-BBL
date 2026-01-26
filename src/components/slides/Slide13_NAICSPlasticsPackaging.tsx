import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Industrial Equipment NAICS codes (replacing Plastics due to recycling business conflict)
const industrialEquipment = [
  {
    code: '333120',
    industry: 'Construction Machinery Manufacturing',
    why: 'Heavy equipment, specialized handling, high margins',
    typicalFreight: 'Flatbed, heavy haul, oversized loads',
  },
  {
    code: '333923',
    industry: 'Overhead Crane & Hoist Manufacturing',
    why: 'High-value equipment, time-sensitive deliveries',
    typicalFreight: 'Specialized flatbed, crane services',
  },
  {
    code: '333249',
    industry: 'Industrial Machinery Manufacturing',
    why: 'Regular shipments, manufacturing support',
    typicalFreight: 'Dry van, flatbed mixed',
  },
  {
    code: '333415',
    industry: 'HVAC Equipment Manufacturing',
    why: 'Consistent volume, regional distribution',
    typicalFreight: 'Dry van, climate-controlled available',
  },
]

export default function Slide13_NAICSPlasticsPackaging() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-xs">Industrial Equipment (25%)</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">High-value machinery with specialized handling requirements</p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-md">
          {industrialEquipment.map((code, idx) => (
            <div key={idx} className="rounded-xl border-2 border-bb-slate-200 bg-white p-md shadow-sm">
              <p className="text-sm font-mono font-bold text-bb-steel-600 mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-charcoal-800 text-sm mb-xs">{code.industry}</p>
              <p className="text-xs text-bb-charcoal-600 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-charcoal-600 border-t border-bb-slate-200 pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md">
          <h3 className="text-sm font-bold text-bb-steel-700 mb-sm">Why Industrial Equipment?</h3>
          <div className="grid grid-cols-3 gap-md">
            <div className="text-center">
              <p className="text-lg font-bold text-bb-charcoal-800">$250-400</p>
              <p className="text-xs text-bb-charcoal-600">Avg margin/load</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-bb-charcoal-800">Specialized</p>
              <p className="text-xs text-bb-charcoal-600">Less competition</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-bb-charcoal-800">Relationship</p>
              <p className="text-xs text-bb-charcoal-600">Long-term accounts</p>
            </div>
          </div>
          <p className="text-xs text-bb-charcoal-600 mt-sm text-center">
            Industrial equipment manufacturers value reliability over price. They need brokers who understand specialized handling and can deliver consistently.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
