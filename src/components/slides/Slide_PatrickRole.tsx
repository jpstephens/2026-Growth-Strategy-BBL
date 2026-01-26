import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { patrickGrowthPath } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_PatrickRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Patrick's Role & Growth Path
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-electric-600 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-slate-600 max-w-3xl mx-auto">
            <span className="font-bold text-bb-navy-900">100% sales focus.</span> No operations. No distractions. Just closing deals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* What Patrick Owns */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-emerald-50 to-white rounded-xl border-2 border-bb-emerald-300 p-xl shadow-sm">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 flex items-center justify-center text-white text-lg font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold text-bb-emerald-700">What You Own</h3>
            </div>
            <ul className="space-y-sm">
              {patrickGrowthPath.whatHeOwns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-emerald-600 font-bold mt-0.5">→</span>
                  <span className="text-sm text-bb-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What Patrick Doesn't Own */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-xl shadow-sm">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-10 h-10 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-lg font-bold">
                ✗
              </div>
              <h3 className="text-lg font-bold text-bb-slate-600">Not Your Problem</h3>
            </div>
            <ul className="space-y-sm">
              {patrickGrowthPath.whatHeDoesNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-sm">
                  <span className="text-bb-slate-400 font-bold mt-0.5">×</span>
                  <span className="text-sm text-bb-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-bb-slate-500 italic mt-md pt-md border-t border-bb-slate-200">
              David handles ops. Period. You stay on the phone.
            </p>
          </motion.div>
        </div>

        {/* Protected Time */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-electric-50 to-white rounded-xl border-2 border-bb-electric-300 p-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-bb-electric-700 mb-xs">Protected Calling Time</h3>
              <p className="text-3xl font-display font-black text-bb-navy-900">{patrickGrowthPath.protectedTime}</p>
              <p className="text-sm text-bb-slate-600 mt-xs">No meetings. No ops issues. No interruptions.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-bb-slate-600 mb-sm font-semibold">Weekly Targets</p>
              <div className="space-y-xs">
                <p className="text-sm"><span className="font-bold text-bb-navy-900">{patrickGrowthPath.targets.weekly.dials}</span> dials</p>
                <p className="text-sm"><span className="font-bold text-bb-navy-900">{patrickGrowthPath.targets.weekly.conversations}</span> conversations</p>
                <p className="text-sm"><span className="font-bold text-bb-navy-900">{patrickGrowthPath.targets.weekly.quotes}</span> quotes sent</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Growth Path */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 rounded-2xl p-xl shadow-lg border-2 border-bb-sunset-400 text-white">
          <h3 className="text-lg font-bold mb-md">Your Growth Path</h3>
          <div className="flex items-center gap-md">
            <div className="flex-1 text-center p-md bg-white/10 rounded-xl">
              <p className="text-xs text-white/80 mb-xs">Now</p>
              <p className="text-sm font-bold">Sales Rep</p>
            </div>
            <div className="text-xl text-white/60">→</div>
            <div className="flex-1 text-center p-md bg-white/10 rounded-xl">
              <p className="text-xs text-white/80 mb-xs">4+ customers/month</p>
              <p className="text-sm font-bold">Proven System</p>
            </div>
            <div className="text-xl text-white/60">→</div>
            <div className="flex-1 text-center p-md bg-white/20 rounded-xl border border-white/30">
              <p className="text-xs text-white/90 mb-xs">With Rep #2 & #3</p>
              <p className="text-sm font-bold">Sales Lead</p>
            </div>
          </div>
          <p className="text-xs text-white/80 mt-md text-center italic">
            You're not just executing the plan—you're proving the system that others will follow.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
