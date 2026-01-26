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
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <div className="inline-flex items-center gap-md mb-lg">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-3xl text-white shadow-lg">
              📞
            </div>
          </div>
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Patrick's Role & Growth Path
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-electric-400 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-bb-electric-600">100% sales focus.</span> No operations. No distractions. Just closing deals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-xl">
          {/* What Patrick Owns */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-electric-50 to-white rounded-2xl border-2 border-bb-electric-300 p-2xl shadow-lg">
            <div className="flex items-center gap-md mb-xl">
              <div className="w-10 h-10 rounded-lg bg-bb-electric-500 flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-bb-navy-900">What You Own</h3>
            </div>
            <ul className="space-y-md">
              {patrickGrowthPath.whatHeOwns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-md">
                  <span className="text-bb-electric-500 font-bold mt-0.5">→</span>
                  <span className="text-bb-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What Patrick Doesn't Own */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-slate-50 to-white rounded-2xl border-2 border-bb-slate-300 p-2xl shadow-lg">
            <div className="flex items-center gap-md mb-xl">
              <div className="w-10 h-10 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-xl font-bold">
                ✗
              </div>
              <h3 className="text-xl font-bold text-bb-navy-900">Not Your Problem</h3>
            </div>
            <ul className="space-y-md">
              {patrickGrowthPath.whatHeDoesNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-md">
                  <span className="text-bb-slate-400 font-bold mt-0.5">×</span>
                  <span className="text-bb-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-lg pt-lg border-t border-bb-slate-200">
              <p className="text-sm text-bb-slate-600 italic">
                David handles ops. Period. You stay on the phone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Protected Time */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 rounded-2xl p-2xl shadow-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-sm">Protected Calling Time</h3>
              <p className="text-4xl font-display font-black">{patrickGrowthPath.protectedTime}</p>
              <p className="text-sm text-white/80 mt-sm">No meetings. No ops issues. No interruptions.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/80 mb-sm">Weekly Targets</p>
              <div className="space-y-xs">
                <p className="text-lg"><span className="font-bold">{patrickGrowthPath.targets.weekly.dials}</span> dials</p>
                <p className="text-lg"><span className="font-bold">{patrickGrowthPath.targets.weekly.conversations}</span> conversations</p>
                <p className="text-lg"><span className="font-bold">{patrickGrowthPath.targets.weekly.quotes}</span> quotes sent</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Growth Path */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-navy-700 to-bb-navy-800 rounded-2xl p-2xl shadow-2xl text-white">
          <div className="flex items-center gap-lg mb-lg">
            <div className="w-12 h-12 rounded-full bg-bb-sunset-500 flex items-center justify-center text-2xl">
              🚀
            </div>
            <div>
              <h3 className="text-xl font-bold">Your Growth Path</h3>
              <p className="text-sm text-bb-slate-300">Where this leads</p>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <div className="flex-1 text-center p-lg bg-white/10 rounded-xl">
              <p className="text-sm text-bb-slate-300 mb-xs">Now</p>
              <p className="text-lg font-bold">Sales Rep</p>
            </div>
            <div className="text-2xl text-bb-electric-400">→</div>
            <div className="flex-1 text-center p-lg bg-white/10 rounded-xl">
              <p className="text-sm text-bb-slate-300 mb-xs">4+ customers/month</p>
              <p className="text-lg font-bold">Proven System</p>
            </div>
            <div className="text-2xl text-bb-electric-400">→</div>
            <div className="flex-1 text-center p-lg bg-bb-sunset-500/30 rounded-xl border border-bb-sunset-400">
              <p className="text-sm text-bb-sunset-300 mb-xs">With Rep #2 & #3</p>
              <p className="text-lg font-bold text-bb-sunset-300">Sales Lead</p>
            </div>
          </div>
          <p className="text-sm text-bb-slate-300 mt-lg text-center italic">
            You're not just executing the plan—you're proving the system that others will follow.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
