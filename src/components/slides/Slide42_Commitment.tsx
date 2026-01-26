import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide42_Commitment() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Mutual Commitments
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-amber-600 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600 max-w-3xl mx-auto">
            This isn't a plan being done TO you.
            <span className="font-semibold text-bb-charcoal-800"> It's a plan we do together.</span>
          </p>
        </motion.div>

        {/* Commitment Grid */}
        <div className="grid grid-cols-3 gap-md">
          {/* Patrick's Commitments */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md shadow-sm">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-amber-500 to-bb-amber-600 flex items-center justify-center text-white text-lg font-bold">
                P
              </div>
              <h3 className="text-base font-bold text-bb-amber-700">Patrick Commits To</h3>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">200+ calls/week during protected time</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Daily activity tracking in CRM</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Clean handoff after first load</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">4+ new customers/month target</span>
              </li>
            </ul>
          </motion.div>

          {/* David's Commitments */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md shadow-sm">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-steel-500 to-bb-steel-600 flex items-center justify-center text-white text-lg font-bold">
                D
              </div>
              <h3 className="text-base font-bold text-bb-steel-700">David Commits To</h3>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">95%+ on-time delivery rate</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Own all post-handoff operations</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Shield Patrick from ops issues</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Build carrier network proactively</span>
              </li>
            </ul>
          </motion.div>

          {/* Leadership Commitments */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md shadow-sm">
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-forest-500 to-bb-forest-600 flex items-center justify-center text-white text-lg font-bold">
                ★
              </div>
              <h3 className="text-base font-bold text-bb-forest-700">Leadership Commits To</h3>
            </div>
            <ul className="space-y-sm">
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Protect calling time—NO exceptions</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Hire help BEFORE David hits 120 loads</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Weekly coaching from Chris</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-bb-forest-600 mt-0.5">•</span>
                <span className="text-sm text-bb-charcoal-700">Pivot fast if numbers don't hit</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* What Success Looks Like */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">
            By December 31: What We Win Together
          </h3>
          <div className="grid grid-cols-4 gap-sm">
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg border border-bb-slate-200">
              <p className="text-xl font-display font-black text-bb-charcoal-800 mb-xs">65-70</p>
              <p className="text-xs text-bb-charcoal-600">Customers</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg border border-bb-slate-200">
              <p className="text-xl font-display font-black text-bb-forest-600 mb-xs">$100K</p>
              <p className="text-xs text-bb-charcoal-600">Monthly Profit</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg border border-bb-slate-200">
              <p className="text-xl font-display font-black text-bb-steel-600 mb-xs">4</p>
              <p className="text-xs text-bb-charcoal-600">Sales Reps</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg border border-bb-slate-200">
              <p className="text-xl font-display font-black text-bb-amber-600 mb-xs">Proven</p>
              <p className="text-xs text-bb-charcoal-600">Scalable System</p>
            </div>
          </div>
        </motion.div>

        {/* Final Call */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg border-2 border-bb-forest-500 text-center">
          <p className="text-sm leading-relaxed mb-sm text-white">
            We know we're asking a lot. We also know you've been giving a lot for 2 years.
          </p>
          <p className="text-base font-bold text-bb-amber-200">
            What questions do you have? What do you need to say yes?
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
