import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { accountability } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide19_Accountability() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold font-display text-bb-charcoal-800 mb-md">Accountability Matrix</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">Who owns what. Who supports who.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-sm">
          {accountability.map((item, idx) => (
            <div key={idx} className="rounded-xl border-2 border-bb-slate-200 bg-white p-md shadow-sm">
              <p className="font-bold text-bb-charcoal-800 text-base mb-sm">{item.outcome}</p>
              <div className="grid grid-cols-2 gap-md text-sm">
                <div>
                  <p className="text-bb-steel-600 font-semibold">Owner:</p>
                  <p className="text-bb-charcoal-700">{item.owner}</p>
                </div>
                <div>
                  <p className="text-bb-charcoal-600 font-semibold">Support:</p>
                  <p className="text-bb-charcoal-600">{item.support}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-xl p-lg border-2 border-bb-slate-200 shadow-sm">
          <p className="text-sm text-bb-charcoal-600">
            <strong className="text-bb-charcoal-800">Principle:</strong> One person owns each outcome. Clear accountability means no finger-pointing, fast decision-making, and transparent results. Support roles assist but don't dilute ownership.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
