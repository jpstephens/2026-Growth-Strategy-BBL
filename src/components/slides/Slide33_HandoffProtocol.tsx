import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { handoffProtocol } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide33_HandoffProtocol() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">Handoff Protocol</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">Sales to operations. Patrick to David. Seamless and documented.</p>
        </motion.div>

        {/* Steps */}
        <motion.div variants={itemVariants} className="space-y-sm">
          {handoffProtocol.map((step, idx) => (
            <div key={idx} className="rounded-xl border-2 border-bb-slate-200 bg-white p-md shadow-sm">
              <div className="flex items-start gap-md">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold ${
                  idx === 0 ? 'bg-bb-amber-500' : idx === 1 ? 'bg-bb-steel-500' : idx === 2 ? 'bg-bb-forest-500' : 'bg-bb-charcoal-600'
                }`}>
                  {step.step}
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-bb-charcoal-800 text-base">{step.action}</p>
                  <p className="text-sm text-bb-charcoal-600 mt-xs">{step.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Callout */}
        <motion.div variants={itemVariants}>
          <Callout variant="success" title="Why This Matters">
            <p className="mb-sm">
              A clean handoff means the customer relationship stays intact. Patrick owns the sale. David owns the execution. No confusion. No drops. No customer thinking they need to manage both people.
            </p>
            <p className="text-sm italic">
              "One ops contact, no confusion, David can move fast."
            </p>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
