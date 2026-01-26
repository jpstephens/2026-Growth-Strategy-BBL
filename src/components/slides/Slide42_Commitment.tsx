import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide42_Commitment() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Mutual Commitments
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-emerald-400 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto leading-relaxed">
            This isn't a plan being done TO you. <span className="font-semibold">It's a plan we do together.</span>
          </p>
        </motion.div>

        {/* Commitment Grid */}
        <div className="grid grid-cols-3 gap-xl">
          {/* Patrick's Commitments */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 rounded-2xl p-xl shadow-xl text-white">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                P
              </div>
              <h3 className="text-lg font-bold">Patrick Commits To</h3>
            </div>
            <ul className="space-y-md">
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">200+ calls/week during protected time</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Daily activity tracking in CRM</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Clean handoff after first load</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">4+ new customers/month target</span>
              </li>
            </ul>
          </motion.div>

          {/* David's Commitments */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 rounded-2xl p-xl shadow-xl text-white">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                D
              </div>
              <h3 className="text-lg font-bold">David Commits To</h3>
            </div>
            <ul className="space-y-md">
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">95%+ on-time delivery rate</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Own all post-handoff operations</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Shield Patrick from ops issues</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Build carrier network proactively</span>
              </li>
            </ul>
          </motion.div>

          {/* Leadership Commitments */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 rounded-2xl p-xl shadow-xl text-white">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                ★
              </div>
              <h3 className="text-lg font-bold">Leadership Commits To</h3>
            </div>
            <ul className="space-y-md">
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Protect Patrick's calling time—NO exceptions</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Hire ops help BEFORE David hits 120 loads</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Weekly coaching from Chris</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="text-white/80 mt-1">•</span>
                <span className="text-sm">Pivot fast if numbers don't hit</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* What Success Looks Like */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-navy-50 to-white rounded-2xl border-2 border-bb-navy-200 p-2xl shadow-lg">
          <h3 className="text-xl font-bold text-bb-navy-900 mb-lg text-center">By December 31: What We Win Together</h3>
          <div className="grid grid-cols-4 gap-lg">
            <div className="text-center p-lg bg-white rounded-xl border border-bb-navy-100">
              <p className="text-3xl font-display font-black text-bb-electric-600 mb-xs">65-70</p>
              <p className="text-sm text-bb-slate-600">Customers</p>
            </div>
            <div className="text-center p-lg bg-white rounded-xl border border-bb-navy-100">
              <p className="text-3xl font-display font-black text-bb-emerald-600 mb-xs">$100K</p>
              <p className="text-sm text-bb-slate-600">Monthly Profit</p>
            </div>
            <div className="text-center p-lg bg-white rounded-xl border border-bb-navy-100">
              <p className="text-3xl font-display font-black text-bb-sunset-600 mb-xs">4</p>
              <p className="text-sm text-bb-slate-600">Sales Reps</p>
            </div>
            <div className="text-center p-lg bg-white rounded-xl border border-bb-navy-100">
              <p className="text-3xl font-display font-black text-bb-navy-600 mb-xs">Proven</p>
              <p className="text-sm text-bb-slate-600">Scalable System</p>
            </div>
          </div>
        </motion.div>

        {/* Final Call */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-navy-700 to-bb-navy-800 rounded-2xl p-2xl shadow-2xl text-white text-center">
          <p className="text-xl leading-relaxed mb-lg">
            We know we're asking a lot. We also know you've been giving a lot for 2 years.
          </p>
          <div className="h-px bg-white/20 my-lg" />
          <p className="text-lg text-bb-slate-200 mb-lg">
            We're asking for 90 days of commitment to this approach. If the data says we're wrong, we pivot together.
          </p>
          <div className="h-px bg-white/20 my-lg" />
          <p className="text-2xl font-bold">
            What questions do you have? What do you need to say yes?
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
