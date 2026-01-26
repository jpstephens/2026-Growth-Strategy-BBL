import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { davidGrowthPath } from '../../data/teamStructure'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_DavidRole() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <div className="inline-flex items-center gap-md mb-lg">
            <div className="w-16 h-16 rounded-full bg-bb-steel-700 flex items-center justify-center text-3xl text-white shadow-lg">
              🚚
            </div>
          </div>
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            David's Role & Growth Path
          </h1>
          <div className="w-32 h-1 bg-bb-steel-600 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-bb-charcoal-800">Operations is the backbone.</span> Without excellent execution, sales means nothing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-xl">
          {/* What David Owns */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-bb-slate-200 p-2xl shadow-sm">
            <div className="flex items-center gap-md mb-xl">
              <div className="w-10 h-10 rounded-lg bg-bb-forest-600 flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-bb-charcoal-800">What You Own</h3>
            </div>
            <ul className="space-y-md">
              {davidGrowthPath.whatHeOwns.map((item, idx) => (
                <li key={idx} className="flex items-start gap-md">
                  <span className="text-bb-forest-600 font-bold mt-0.5">→</span>
                  <span className="text-bb-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What David Doesn't Own */}
          <motion.div variants={itemVariants} className="bg-bb-slate-50 rounded-xl border border-bb-slate-200 p-2xl">
            <div className="flex items-center gap-md mb-xl">
              <div className="w-10 h-10 rounded-lg bg-bb-slate-400 flex items-center justify-center text-white text-xl font-bold">
                ✗
              </div>
              <h3 className="text-xl font-bold text-bb-charcoal-800">Not Your Problem</h3>
            </div>
            <ul className="space-y-md">
              {davidGrowthPath.whatHeDoesNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-md">
                  <span className="text-bb-slate-400 font-bold mt-0.5">×</span>
                  <span className="text-bb-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-lg pt-lg border-t border-bb-slate-200">
              <p className="text-sm text-bb-slate-500 italic">
                Patrick handles sales. You run ops. Clear lines.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Your Domain */}
        <motion.div variants={itemVariants} className="bg-bb-steel-700 rounded-xl p-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-sm">Your Domain</h3>
              <p className="text-3xl font-display font-black">{davidGrowthPath.domain}</p>
              <p className="text-sm text-bb-steel-200 mt-sm">You set the priorities. You own the process.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-bb-steel-200 mb-sm">Performance Targets</p>
              <div className="space-y-xs">
                <p className="text-lg"><span className="font-bold">{davidGrowthPath.targets.onTimeRate}%</span> on-time</p>
                <p className="text-lg"><span className="font-bold">{davidGrowthPath.targets.carrierRetention}%</span> carrier retention</p>
                <p className="text-lg"><span className="font-bold">{davidGrowthPath.targets.customerSatisfaction}%</span> satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Promise */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-bb-slate-200 p-2xl shadow-sm">
          <div className="flex items-center gap-md mb-lg">
            <div className="w-10 h-10 rounded-lg bg-bb-amber-500 flex items-center justify-center text-white text-xl font-bold">
              🛡
            </div>
            <h3 className="text-xl font-bold text-bb-charcoal-800">Our Promise to You</h3>
          </div>
          <div className="grid grid-cols-2 gap-lg">
            <div className="p-lg bg-bb-slate-50 rounded-xl border border-bb-slate-200">
              <p className="font-bold text-bb-charcoal-800 mb-xs">Help Arrives BEFORE You Drown</p>
              <p className="text-sm text-bb-slate-600">Ops coordinator hire triggered at 120 loads/month—not after you're burned out.</p>
            </div>
            <div className="p-lg bg-bb-slate-50 rounded-xl border border-bb-slate-200">
              <p className="font-bold text-bb-charcoal-800 mb-xs">Daily Support from Vin</p>
              <p className="text-sm text-bb-slate-600">15-minute daily sync. Escalation response within 1 hour.</p>
            </div>
          </div>
        </motion.div>

        {/* Growth Path */}
        <motion.div variants={itemVariants} className="bg-bb-charcoal-800 rounded-xl p-2xl text-white">
          <div className="flex items-center gap-lg mb-lg">
            <div className="w-12 h-12 rounded-full bg-bb-forest-500 flex items-center justify-center text-2xl">
              🚀
            </div>
            <div>
              <h3 className="text-xl font-bold">Your Growth Path</h3>
              <p className="text-sm text-bb-slate-400">Where this leads</p>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <div className="flex-1 text-center p-lg bg-white/10 rounded-xl">
              <p className="text-sm text-bb-slate-400 mb-xs">Now</p>
              <p className="text-lg font-bold">Operations</p>
            </div>
            <div className="text-2xl text-bb-slate-500">→</div>
            <div className="flex-1 text-center p-lg bg-white/10 rounded-xl">
              <p className="text-sm text-bb-slate-400 mb-xs">150+ loads/month</p>
              <p className="text-lg font-bold">+ Ops Coordinator</p>
            </div>
            <div className="text-2xl text-bb-slate-500">→</div>
            <div className="flex-1 text-center p-lg bg-bb-forest-600/30 rounded-xl border border-bb-forest-500/50">
              <p className="text-sm text-bb-forest-300 mb-xs">200+ loads/month</p>
              <p className="text-lg font-bold text-bb-forest-300">Operations Manager</p>
            </div>
          </div>
          <p className="text-sm text-bb-slate-400 mt-lg text-center italic">
            You're building the ops playbook that scales. Your fingerprints will be on the system we use for years.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
