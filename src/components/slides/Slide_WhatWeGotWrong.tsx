import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide_WhatWeGotWrong() {
  return (
    <Slide variant="dark">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-white mb-md">
            Here's What We Got Wrong
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-300 max-w-3xl mx-auto leading-relaxed">
            Before we talk about the future, we need to own the past.
          </p>
        </motion.div>

        {/* The Confession */}
        <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-2xl p-2xl border border-white/20">
          <div className="space-y-xl">
            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-full bg-bb-burgundy-500/30 border-2 border-bb-burgundy-400 flex items-center justify-center text-xl shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-sm">We asked Patrick to do the impossible</h3>
                <p className="text-bb-slate-300 leading-relaxed">
                  No one can be in two places at once. Asking Patrick to run sales AND handle operations wasn't a stretch—it was structurally impossible. That's on us, not him.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-full bg-bb-burgundy-500/30 border-2 border-bb-burgundy-400 flex items-center justify-center text-xl shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-sm">We made David invisible</h3>
                <p className="text-bb-slate-300 leading-relaxed">
                  Every conversation was about sales, but sales means nothing without operations. David's been carrying the load execution without the recognition or support he deserves.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-full bg-bb-burgundy-500/30 border-2 border-bb-burgundy-400 flex items-center justify-center text-xl shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-sm">We measured results without fixing the structure</h3>
                <p className="text-bb-slate-300 leading-relaxed">
                  We tracked numbers but didn't solve the root cause. We asked for more output without giving you the structure to produce it. That's backwards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Math */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-xl">
          <div className="bg-gradient-to-br from-bb-burgundy-500/30 to-bb-burgundy-600/20 rounded-2xl p-xl border border-bb-burgundy-400/50">
            <h3 className="text-lg font-bold text-bb-burgundy-300 mb-lg">The Impossible Math</h3>
            <div className="space-y-md text-white">
              <div className="flex justify-between">
                <span>Calls needed for growth:</span>
                <span className="font-bold">200/week</span>
              </div>
              <div className="flex justify-between">
                <span>Hours for 200 calls:</span>
                <span className="font-bold">20+ hours</span>
              </div>
              <div className="flex justify-between">
                <span>Hours for ops work:</span>
                <span className="font-bold">20+ hours</span>
              </div>
              <div className="h-px bg-white/20 my-md" />
              <div className="flex justify-between text-bb-burgundy-300">
                <span>Total needed:</span>
                <span className="font-bold">40+ hours</span>
              </div>
              <div className="flex justify-between text-bb-burgundy-300">
                <span>Hours available:</span>
                <span className="font-bold">40 hours</span>
              </div>
            </div>
            <p className="text-sm text-bb-slate-400 mt-lg italic">
              The math never worked. Patrick was set up to fail.
            </p>
          </div>

          <div className="bg-gradient-to-br from-bb-emerald-500/30 to-bb-emerald-600/20 rounded-2xl p-xl border border-bb-emerald-400/50">
            <h3 className="text-lg font-bold text-bb-emerald-300 mb-lg">What Changes</h3>
            <div className="space-y-md text-white">
              <div className="flex items-start gap-sm">
                <span className="text-bb-emerald-400 mt-1">✓</span>
                <span>Patrick gets 100% sales focus</span>
              </div>
              <div className="flex items-start gap-sm">
                <span className="text-bb-emerald-400 mt-1">✓</span>
                <span>David owns all operations</span>
              </div>
              <div className="flex items-start gap-sm">
                <span className="text-bb-emerald-400 mt-1">✓</span>
                <span>Clear handoff protocol</span>
              </div>
              <div className="flex items-start gap-sm">
                <span className="text-bb-emerald-400 mt-1">✓</span>
                <span>Protected time, enforced by leadership</span>
              </div>
              <div className="flex items-start gap-sm">
                <span className="text-bb-emerald-400 mt-1">✓</span>
                <span>Support before burnout, not after</span>
              </div>
            </div>
            <p className="text-sm text-bb-slate-400 mt-lg italic">
              We fix the structure. You show us what you can do.
            </p>
          </div>
        </motion.div>

        {/* Transition Statement */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-2xl font-bold text-white mb-md">
            That changes now.
          </p>
          <p className="text-lg text-bb-slate-300">
            We can't undo the past two years, but we can build a structure that actually works.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
