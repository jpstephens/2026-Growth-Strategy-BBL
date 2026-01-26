import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { escalationPaths } from '../../data/operations'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide36_EscalationPaths() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-sm">Issue Escalation</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Clear decision authority. Fast resolution.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-x-auto rounded-xl border border-bb-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-bb-forest-600 text-white">
              <tr>
                <th className="px-md py-sm text-left font-semibold">Issue Type</th>
                <th className="px-md py-sm text-left font-semibold">First Response</th>
                <th className="px-md py-sm text-left font-semibold">Escalate To</th>
                <th className="px-md py-sm text-left font-semibold">Final Authority</th>
              </tr>
            </thead>
            <tbody>
              {escalationPaths.map((path, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'}`}
                >
                  <td className="px-md py-sm font-semibold text-bb-charcoal-800">{path.issue}</td>
                  <td className="px-md py-sm text-bb-charcoal-600">{path.firstResponse}</td>
                  <td className="px-md py-sm text-bb-charcoal-600">{path.escalateTo}</td>
                  <td className="px-md py-sm font-semibold text-bb-steel-600">{path.finalAuthority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Callout variant="info" title="Principle">
            <p>
              David handles 99% of issues. Vin handles operational escalations and carrier decisions. Chris handles customer relationship issues. Jason handles major claims and financial decisions.
            </p>
          </Callout>
        </motion.div>
      </div>
    </Slide>
  )
}
