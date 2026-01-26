import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide16_ThreeSolutionChanges() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Three Changes That Change Everything
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600 max-w-2xl mx-auto">
            Simple moves. Big impact.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-lg">
          {/* Change 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-lg shadow-sm border-2 border-bb-amber-300 hover:shadow-md transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-bb-amber-500 to-bb-amber-600 text-white text-xl font-black mb-md">
                1
              </div>
              <h3 className="text-lg font-bold text-bb-charcoal-800 mb-sm">Free Patrick To Sell</h3>
              <p className="text-sm text-bb-charcoal-600 leading-relaxed mb-md">
                David takes 100% of operations.
                Patrick sells and only sells.
              </p>
              <div className="bg-bb-amber-50 rounded-lg p-sm">
                <p className="text-xs text-bb-amber-700 font-semibold">No more context switching</p>
              </div>
            </div>
          </motion.div>

          {/* Change 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-lg shadow-sm border-2 border-bb-steel-300 hover:shadow-md transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-bb-steel-500 to-bb-steel-600 text-white text-xl font-black mb-md">
                2
              </div>
              <h3 className="text-lg font-bold text-bb-charcoal-800 mb-sm">200+ Calls Per Week</h3>
              <p className="text-sm text-bb-charcoal-600 leading-relaxed mb-md">
                40 dials a day. No interruptions.
                This is how you build a pipeline.
              </p>
              <div className="bg-bb-steel-50 rounded-lg p-sm">
                <p className="text-xs text-bb-steel-700 font-semibold">Protected calling blocks daily</p>
              </div>
            </div>
          </motion.div>

          {/* Change 3 */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-lg shadow-sm border-2 border-bb-forest-300 hover:shadow-md transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-bb-forest-500 to-bb-forest-600 text-white text-xl font-black mb-md">
                3
              </div>
              <h3 className="text-lg font-bold text-bb-charcoal-800 mb-sm">Warm + Cold Outreach</h3>
              <p className="text-sm text-bb-charcoal-600 leading-relaxed mb-md">
                5,000 warm leads from Instantly.ai email campaigns, plus targeted cold calls.
              </p>
              <div className="bg-bb-forest-50 rounded-lg p-sm">
                <p className="text-xs text-bb-forest-700 font-semibold">Multi-channel pipeline building</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* How It Works Together */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-base font-bold text-bb-charcoal-800 mb-md text-center">How These Changes Work Together</h3>
          <div className="grid grid-cols-3 gap-md">
            <div className="text-center p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Change 1 enables</p>
              <p className="text-sm font-semibold text-bb-charcoal-700">40+ dials/day possible</p>
            </div>
            <div className="text-center p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Change 2 generates</p>
              <p className="text-sm font-semibold text-bb-charcoal-700">8-10 conversations/day</p>
            </div>
            <div className="text-center p-sm">
              <p className="text-xs text-bb-charcoal-500 mb-xs">Change 3 improves</p>
              <p className="text-sm font-semibold text-bb-charcoal-700">Connect rate to 15-20%</p>
            </div>
          </div>
        </motion.div>

        {/* Impact Summary */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-lg shadow-lg">
          <p className="text-base text-center leading-relaxed text-white mb-sm">
            <span className="font-bold text-bb-amber-200">The Result:</span>
            {' '}These three changes move Patrick from ~1 customer/month to 4-5 customers/month.
          </p>
          <p className="text-lg text-center font-bold text-white">
            That's the whole game.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
