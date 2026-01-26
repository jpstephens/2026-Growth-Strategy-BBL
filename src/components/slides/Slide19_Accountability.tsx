import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { accountability } from '../../data/teamStructure'
import { escalationPaths } from '../../data/operations'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide19_Accountability() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold font-display text-bb-charcoal-800 mb-sm">Accountability & Escalation</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Who owns what. How issues get resolved.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-md">
          {/* Left: Accountability Matrix */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Accountability Matrix</h3>
            <div className="space-y-xs">
              {accountability.slice(0, 5).map((item, idx) => (
                <div key={idx} className="p-xs bg-bb-slate-50 rounded-lg">
                  <p className="font-semibold text-bb-charcoal-800 text-xs">{item.outcome}</p>
                  <div className="flex gap-md text-xs mt-xs">
                    <span className="text-bb-steel-600"><strong>Owner:</strong> {item.owner}</span>
                    <span className="text-bb-charcoal-500"><strong>Support:</strong> {item.support}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Escalation Paths */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm overflow-hidden">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Escalation Paths</h3>
            <table className="w-full text-xs">
              <thead className="bg-bb-forest-600 text-white">
                <tr>
                  <th className="px-xs py-xs text-left font-semibold">Issue</th>
                  <th className="px-xs py-xs text-left font-semibold">1st</th>
                  <th className="px-xs py-xs text-left font-semibold">Escalate</th>
                  <th className="px-xs py-xs text-left font-semibold">Final</th>
                </tr>
              </thead>
              <tbody>
                {escalationPaths.slice(0, 5).map((path, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'}>
                    <td className="px-xs py-xs font-semibold text-bb-charcoal-700">{path.issue}</td>
                    <td className="px-xs py-xs text-bb-charcoal-600">{path.firstResponse}</td>
                    <td className="px-xs py-xs text-bb-charcoal-600">{path.escalateTo}</td>
                    <td className="px-xs py-xs font-semibold text-bb-steel-600">{path.finalAuthority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Key Principles */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <div className="grid grid-cols-2 gap-md">
            <div className="text-center">
              <p className="text-sm font-bold text-bb-amber-200 mb-xs">Ownership Principle</p>
              <p className="text-xs text-white">One person owns each outcome. No finger-pointing.</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-bb-amber-200 mb-xs">Escalation Principle</p>
              <p className="text-xs text-white">David handles 99%. Escalate only when needed.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
