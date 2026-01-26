import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import Callout from '../content/Callout'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide02_ExecutiveThesis() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            You've Already Proven This Works
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto leading-relaxed">
            Patrick and David built a real business. Now let's scale what they created.
          </p>
        </motion.div>

        {/* Foundation Callout - Recognition */}
        <motion.div variants={itemVariants}>
          <Callout variant="success" title="What Patrick & David Built" size="lg">
            <p className="text-lg leading-relaxed">
              <span className="font-bold">774 loads. $160K in gross margin. $200+ profit per load.</span> This isn't a theory—it's proven execution. Patrick brought in the customers. David delivered the loads. Together, they built the foundation for everything we're about to do.
            </p>
          </Callout>
        </motion.div>

        {/* What We Know Works - Card Grid */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border-2 border-bb-navy-200 p-2xl shadow-xl">
          <h2 className="text-h2 font-display font-bold text-bb-navy-900 mb-xl">
            What They Proved Works
          </h2>
          <div className="grid grid-cols-3 gap-xl">
            {/* Item 1 */}
            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs text-lg">Profitable Unit Economics</p>
                <p className="text-sm text-bb-slate-600">$200+ margin per load—Patrick sells profitable business</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs text-lg">Repeatable Sales Process</p>
                <p className="text-sm text-bb-slate-600">Patrick converts prospects to customers when he can focus</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs text-lg">Reliable Operations</p>
                <p className="text-sm text-bb-slate-600">David executes loads and manages carriers consistently</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Gap */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 rounded-2xl p-2xl shadow-2xl border-2 border-bb-sunset-400">
          <div className="space-y-lg text-white">
            <div>
              <div className="inline-block px-lg py-sm bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-sm mb-md">
                THE GAP
              </div>
              <p className="text-lg leading-relaxed">
                We have customers ready to buy. We have operations that work. <span className="font-bold">The problem isn't the people—it's the structure.</span>
              </p>
            </div>
            <div className="h-px bg-white/20" />
            <div>
              <div className="inline-block px-lg py-sm bg-bb-emerald-500 rounded-full text-white font-bold text-sm mb-md">
                THE SOLUTION
              </div>
              <p className="text-lg font-semibold">
                Fix the structural constraint. Let Patrick sell. Let David run ops. Watch the numbers follow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Recognition Footer */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-lg text-bb-slate-600 italic">
            "You've created something real. Now let's scale it."
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
