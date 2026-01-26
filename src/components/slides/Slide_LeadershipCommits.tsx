import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { leadershipCommitments } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_LeadershipCommits() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            What Leadership Commits To
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-amber-600 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-slate-600 max-w-3xl mx-auto">
            You're not the only ones with commitments. <span className="font-semibold text-bb-charcoal-800">Here's what we owe you.</span>
          </p>
        </motion.div>

        {/* Leadership Commitment Cards */}
        <div className="grid grid-cols-3 gap-lg">
          {leadershipCommitments.map((leader, idx) => {
            const colors = [
              { border: 'border-bb-steel-300', icon: 'bg-gradient-to-br from-bb-steel-500 to-bb-steel-600', text: 'text-bb-steel-700' },
              { border: 'border-bb-forest-300', icon: 'bg-gradient-to-br from-bb-forest-500 to-bb-forest-600', text: 'text-bb-forest-700' },
              { border: 'border-bb-amber-300', icon: 'bg-gradient-to-br from-bb-amber-500 to-bb-amber-600', text: 'text-bb-amber-700' },
            ]
            const color = colors[idx % colors.length]

            return (
              <motion.div
                key={leader.leader}
                variants={itemVariants}
                className={`bg-white rounded-xl p-lg border-2 ${color.border} shadow-sm`}
              >
                <div className="flex items-center gap-md mb-md">
                  <div className={`w-10 h-10 rounded-lg ${color.icon} flex items-center justify-center text-white text-lg font-bold`}>
                    {leader.leader.charAt(0)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${color.text}`}>{leader.leader}</h3>
                    <p className="text-xs text-bb-slate-500">{leader.role}</p>
                  </div>
                </div>
                <ul className="space-y-sm mb-md">
                  {leader.commitments.slice(0, 3).map((commitment, cidx) => (
                    <li key={cidx} className="flex items-start gap-sm">
                      <span className={`${color.text} mt-0.5`}>•</span>
                      <span className="text-sm text-bb-slate-700 leading-snug">{commitment}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-md border-t border-bb-slate-200">
                  <p className="text-xs text-bb-slate-500">Measured by:</p>
                  <p className="text-sm font-semibold text-bb-slate-700">{leader.measurement}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* The Big Promise */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-500 to-bb-amber-600 rounded-2xl p-xl shadow-lg border-2 border-bb-amber-400">
          <div className="text-center text-white">
            <h3 className="text-xl font-bold mb-md">Our Core Promise</h3>
            <div className="grid grid-cols-3 gap-lg">
              <div className="p-md bg-white/10 rounded-xl">
                <p className="text-2xl mb-xs">🛡</p>
                <p className="font-bold text-sm mb-xs">Protected Time</p>
                <p className="text-xs text-white/90">We will NOT pull Patrick into ops during protected time</p>
              </div>
              <div className="p-md bg-white/10 rounded-xl">
                <p className="text-2xl mb-xs">🚨</p>
                <p className="font-bold text-sm mb-xs">Proactive Support</p>
                <p className="text-xs text-white/90">We hire help BEFORE David hits 120 loads</p>
              </div>
              <div className="p-md bg-white/10 rounded-xl">
                <p className="text-2xl mb-xs">🔄</p>
                <p className="font-bold text-sm mb-xs">We Adapt</p>
                <p className="text-xs text-white/90">If data says we're wrong, we pivot together</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
