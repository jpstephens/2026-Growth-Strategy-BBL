import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { leadershipCommitments } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_LeadershipCommits() {
  return (
    <Slide variant="dark">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-white mb-md">
            What Leadership Commits To
          </h1>
          <div className="w-32 h-1 bg-bb-amber-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-300 max-w-3xl mx-auto leading-relaxed">
            You're not the only ones with commitments. <span className="text-white font-semibold">Here's what we owe you.</span>
          </p>
        </motion.div>

        {/* Leadership Commitment Cards */}
        <div className="grid grid-cols-3 gap-xl">
          {leadershipCommitments.map((leader, idx) => {
            const colors = [
              { bg: 'bg-bb-charcoal-700', border: 'border-bb-charcoal-600' },
              { bg: 'bg-bb-steel-700', border: 'border-bb-steel-600' },
              { bg: 'bg-bb-charcoal-700', border: 'border-bb-charcoal-600' },
            ]
            const color = colors[idx % colors.length]

            return (
              <motion.div
                key={leader.leader}
                variants={itemVariants}
                className={`${color.bg} rounded-xl p-xl border ${color.border} text-white`}
              >
                <div className="flex items-center gap-md mb-lg">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold">
                    {leader.leader.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{leader.leader}</h3>
                    <p className="text-sm text-bb-slate-400">{leader.role}</p>
                  </div>
                </div>
                <ul className="space-y-md mb-lg">
                  {leader.commitments.map((commitment, cidx) => (
                    <li key={cidx} className="flex items-start gap-sm">
                      <span className="text-bb-forest-400 mt-1">•</span>
                      <span className="text-sm text-bb-slate-200 leading-relaxed">{commitment}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-lg border-t border-white/10">
                  <p className="text-xs text-bb-slate-500">Measured by:</p>
                  <p className="text-sm font-semibold text-bb-slate-300">{leader.measurement}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* The Big Promise */}
        <motion.div variants={itemVariants} className="bg-white/5 rounded-xl p-2xl border border-white/10">
          <div className="text-center space-y-lg">
            <h3 className="text-2xl font-bold text-white">Our Core Promise</h3>
            <div className="grid grid-cols-3 gap-xl">
              <div className="p-lg bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl mb-sm">🛡</p>
                <p className="font-bold text-white mb-xs">Protected Time</p>
                <p className="text-sm text-bb-slate-400">We will NOT pull Patrick into ops during protected time for ANY reason</p>
              </div>
              <div className="p-lg bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl mb-sm">🚨</p>
                <p className="font-bold text-white mb-xs">Proactive Support</p>
                <p className="text-sm text-bb-slate-400">We hire ops help BEFORE David hits 120 loads, not after he's drowning</p>
              </div>
              <div className="p-lg bg-white/5 rounded-xl border border-white/10">
                <p className="text-3xl mb-sm">🔄</p>
                <p className="font-bold text-white mb-xs">We Adapt</p>
                <p className="text-sm text-bb-slate-400">If the data says we're wrong, we pivot together—no blame, just adjustment</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accountability Statement */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-lg text-bb-slate-400 italic">
            "We're not asking you to bet on us. We're asking you to let us earn your trust with action."
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
