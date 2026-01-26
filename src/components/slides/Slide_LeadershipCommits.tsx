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
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-sunset-500 via-bb-electric-400 to-bb-emerald-400 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-300 max-w-3xl mx-auto leading-relaxed">
            You're not the only ones with commitments. <span className="text-white font-semibold">Here's what we owe you.</span>
          </p>
        </motion.div>

        {/* Leadership Commitment Cards */}
        <div className="grid grid-cols-3 gap-xl">
          {leadershipCommitments.map((leader, idx) => {
            const colors = [
              { bg: 'from-bb-electric-500 to-bb-electric-600', accent: 'bb-electric' },
              { bg: 'from-bb-emerald-500 to-bb-emerald-600', accent: 'bb-emerald' },
              { bg: 'from-bb-sunset-500 to-bb-sunset-600', accent: 'bb-sunset' },
            ]
            const color = colors[idx % colors.length]

            return (
              <motion.div
                key={leader.leader}
                variants={itemVariants}
                className={`bg-gradient-to-br ${color.bg} rounded-2xl p-xl shadow-2xl text-white`}
              >
                <div className="flex items-center gap-md mb-lg">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                    {leader.leader.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{leader.leader}</h3>
                    <p className="text-sm text-white/80">{leader.role}</p>
                  </div>
                </div>
                <ul className="space-y-md mb-lg">
                  {leader.commitments.map((commitment, cidx) => (
                    <li key={cidx} className="flex items-start gap-sm">
                      <span className="text-white/80 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{commitment}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-lg border-t border-white/20">
                  <p className="text-xs text-white/60">Measured by:</p>
                  <p className="text-sm font-semibold">{leader.measurement}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* The Big Promise */}
        <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-2xl p-2xl border border-white/20">
          <div className="text-center space-y-lg">
            <h3 className="text-2xl font-bold text-white">Our Core Promise</h3>
            <div className="grid grid-cols-3 gap-xl">
              <div className="p-lg bg-white/10 rounded-xl">
                <p className="text-3xl mb-sm">🛡</p>
                <p className="font-bold text-white mb-xs">Protected Time</p>
                <p className="text-sm text-bb-slate-300">We will NOT pull Patrick into ops during protected time for ANY reason</p>
              </div>
              <div className="p-lg bg-white/10 rounded-xl">
                <p className="text-3xl mb-sm">🚨</p>
                <p className="font-bold text-white mb-xs">Proactive Support</p>
                <p className="text-sm text-bb-slate-300">We hire ops help BEFORE David hits 120 loads, not after he's drowning</p>
              </div>
              <div className="p-lg bg-white/10 rounded-xl">
                <p className="text-3xl mb-sm">🔄</p>
                <p className="font-bold text-white mb-xs">We Adapt</p>
                <p className="text-sm text-bb-slate-300">If the data says we're wrong, we pivot together—no blame, just adjustment</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Accountability Statement */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-lg text-bb-slate-300 italic">
            "We're not asking you to bet on us. We're asking you to let us earn your trust with action."
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
