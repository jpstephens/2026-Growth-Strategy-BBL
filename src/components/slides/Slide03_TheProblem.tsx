import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide03_TheProblem() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-sm">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            How We Got Here
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600 max-w-3xl mx-auto">
            As we grew organically, roles naturally blurred. <span className="font-bold text-bb-charcoal-800">The structure—not the effort—was the constraint.</span>
          </p>
        </motion.div>

        {/* What Happened + The Reality */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-lg">
          {/* What Happened */}
          <div className="bg-white rounded-xl p-md border-2 border-bb-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">What Happened</h3>
            <div className="space-y-sm">
              <div className="flex items-start gap-sm">
                <div className="w-6 h-6 rounded-full bg-bb-slate-100 border border-bb-slate-300 flex items-center justify-center text-xs font-bold text-bb-charcoal-700 shrink-0">1</div>
                <div>
                  <p className="font-semibold text-bb-charcoal-800 text-sm">Roles blurred naturally</p>
                  <p className="text-xs text-bb-charcoal-600">Great for flexibility, but prevented focus</p>
                </div>
              </div>
              <div className="flex items-start gap-sm">
                <div className="w-6 h-6 rounded-full bg-bb-slate-100 border border-bb-slate-300 flex items-center justify-center text-xs font-bold text-bb-charcoal-700 shrink-0">2</div>
                <div>
                  <p className="font-semibold text-bb-charcoal-800 text-sm">Ops always won the day</p>
                  <p className="text-xs text-bb-charcoal-600">Urgent beat important every time</p>
                </div>
              </div>
              <div className="flex items-start gap-sm">
                <div className="w-6 h-6 rounded-full bg-bb-slate-100 border border-bb-slate-300 flex items-center justify-center text-xs font-bold text-bb-charcoal-700 shrink-0">3</div>
                <div>
                  <p className="font-semibold text-bb-charcoal-800 text-sm">No protected sales time</p>
                  <p className="text-xs text-bb-charcoal-600">Prospecting happened in stolen moments</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Reality - Sales vs Ops Needs */}
          <div className="bg-white rounded-xl p-md border-2 border-bb-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-bb-charcoal-800 mb-sm">Two Jobs, One Person</h3>
            <div className="grid grid-cols-2 gap-sm">
              <div className="bg-bb-amber-50 rounded-lg p-sm border border-bb-amber-200">
                <p className="text-xs font-bold text-bb-amber-700 mb-xs">Sales Needs</p>
                <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                  <li>→ 200 calls/week</li>
                  <li>→ 4 hrs protected time</li>
                  <li>→ Deep focus blocks</li>
                </ul>
              </div>
              <div className="bg-bb-steel-50 rounded-lg p-sm border border-bb-steel-200">
                <p className="text-xs font-bold text-bb-steel-700 mb-xs">Ops Needs</p>
                <ul className="text-xs text-bb-charcoal-600 space-y-xs">
                  <li>→ Immediate response</li>
                  <li>→ Real-time updates</li>
                  <li>→ Problem solving now</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-bb-charcoal-500 mt-sm text-center italic">Currently: 0-50 calls/week (target: 200)</p>
          </div>
        </motion.div>

        {/* Current Impact */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">Current Impact</h3>
          <div className="grid grid-cols-3 gap-md">
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xl font-display font-black text-bb-charcoal-800 mb-xs">0-50</p>
              <p className="text-xs text-bb-charcoal-600">Calls/week (target: 200)</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xl font-display font-black text-bb-charcoal-800 mb-xs">~1</p>
              <p className="text-xs text-bb-charcoal-600">New customer/month (target: 4-5)</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xl font-display font-black text-bb-charcoal-800 mb-xs">$11K</p>
              <p className="text-xs text-bb-charcoal-600">Monthly profit (target: $100K)</p>
            </div>
          </div>
        </motion.div>

        {/* The Fix */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl p-md border-2 border-bb-forest-300">
          <h3 className="text-sm font-bold text-bb-forest-700 mb-sm">What Changes Now</h3>
          <div className="grid grid-cols-3 gap-md text-sm">
            <div className="flex items-center gap-xs">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-bb-charcoal-700">Patrick = 100% sales</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-bb-charcoal-700">David = all operations</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-bb-charcoal-700">Clear handoff protocol</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-bb-charcoal-700">Protected calling time</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-bb-charcoal-700">Support before burnout</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-bb-charcoal-700">Leadership enforces it</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
