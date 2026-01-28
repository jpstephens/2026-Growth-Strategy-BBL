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
      <div className="w-full max-w-6xl space-y-md">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-sm">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            You've Already Proven This Works
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-steel-500 via-bb-steel-400 to-bb-amber-400 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Patrick and David built a real business. Now let's scale what they created.
          </p>
        </motion.div>

        {/* Foundation Callout - Recognition */}
        <motion.div variants={itemVariants}>
          <Callout variant="success" title="What Patrick & David Built" size="lg">
            <p className="text-lg leading-relaxed">
              <span className="font-bold">819 loads. $216K in gross margin. $264 profit per load.</span>
              {' '}Patrick brought in the customers. David delivered the loads.
              Together, they built the foundation for everything we're about to do.
            </p>
          </Callout>
        </motion.div>

        {/* What We Know Works - Card Grid */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl border-2 border-bb-slate-200 p-md shadow-lg">
          <h2 className="text-h2 font-display font-bold text-bb-charcoal-800 mb-sm">
            What They Proved Works
          </h2>
          <div className="grid grid-cols-3 gap-md">
            {/* Item 1 */}
            <div className="flex items-start gap-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bb-forest-500 to-bb-forest-600 flex items-center justify-center text-white text-lg font-bold shadow-sm shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-charcoal-800 mb-xs text-base">Profitable Unit Economics</p>
                <p className="text-sm text-bb-charcoal-600">$200+ margin per load—profitable business</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start gap-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bb-forest-500 to-bb-forest-600 flex items-center justify-center text-white text-lg font-bold shadow-sm shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-charcoal-800 mb-xs text-base">Repeatable Sales Process</p>
                <p className="text-sm text-bb-charcoal-600">Patrick converts when he can focus</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start gap-md">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bb-forest-500 to-bb-forest-600 flex items-center justify-center text-white text-lg font-bold shadow-sm shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-charcoal-800 mb-xs text-base">Reliable Operations</p>
                <p className="text-sm text-bb-charcoal-600">David executes loads consistently</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Gap & Solution */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-md">
          <div className="bg-white rounded-xl p-lg border-2 border-bb-slate-200 shadow-sm">
            <div className="inline-block px-md py-xs bg-bb-slate-100 rounded-full text-bb-charcoal-700 font-bold text-xs mb-md">
              THE GAP
            </div>
            <p className="text-base text-bb-charcoal-700 leading-relaxed mb-sm">
              We have customers ready to buy. We have operations that work.
            </p>
            <p className="text-lg font-bold text-bb-charcoal-800">
              The problem isn't the people—it's the structure.
            </p>
          </div>
          <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl p-lg border-2 border-bb-forest-300 shadow-sm">
            <div className="inline-block px-md py-xs bg-bb-forest-100 rounded-full text-bb-forest-700 font-bold text-xs mb-md">
              THE SOLUTION
            </div>
            <p className="text-base text-bb-charcoal-700 leading-relaxed">
              Fix the structural constraint.
              <span className="font-bold text-bb-forest-700"> Let Patrick sell. Let David run ops.</span>
              Watch the numbers follow.
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
