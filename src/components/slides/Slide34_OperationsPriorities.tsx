import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { priorityFramework } from '../../data/operations'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide34_OperationsPriorities() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-md">Operations: Priority Framework</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600">Clear hierarchy. Prevents chaos. Keeps customers happy.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-sm">
          {priorityFramework.map((priority, idx) => (
            <div key={idx} className={`rounded-xl border-2 p-lg shadow-sm ${
              idx === 0
                ? 'border-bb-amber-400 bg-gradient-to-br from-bb-amber-50 to-white'
                : idx === 1
                  ? 'border-bb-steel-300 bg-gradient-to-br from-bb-steel-50 to-white'
                  : 'border-bb-slate-200 bg-white'
            }`}>
              <div className="flex items-start gap-md mb-sm">
                <p className="text-2xl">{priority.icon}</p>
                <div className="flex-grow">
                  <p className="font-bold text-bb-charcoal-800 text-base">{priority.priority}</p>
                  <p className="text-xs text-bb-charcoal-600 mt-xs italic">{priority.note}</p>
                </div>
              </div>
              <ul className="space-y-xs">
                {priority.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-bb-charcoal-600 flex items-start">
                    <span className="mr-sm text-bb-charcoal-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Callout variant="critical" title="No Flexibility Here">
            <p>
              This hierarchy is NON-NEGOTIABLE. An active load in trouble takes precedence over everything—new bookings, planning, admin. Happy customers = more referrals. Upset customers = churn.
            </p>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
