import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Slide01_Title() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-2xl items-center">
          {/* Left: Title & Message */}
          <motion.div variants={itemVariants} className="space-y-xl">
            <div>
              <p className="text-lg font-semibold text-bb-steel-600 mb-sm tracking-wide uppercase">
                BlackBridge Logistics
              </p>
              <h1 className="font-display text-hero font-black text-bb-charcoal-800 leading-tight">
                Scaling What
                <br />
                <span className="text-bb-steel-600">You Built</span>
              </h1>
            </div>

            <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-amber-600 rounded-full" />

            <p className="text-xl text-bb-charcoal-700 leading-relaxed max-w-lg">
              A roadmap for growing from $17.8K to $100K in monthly gross margin—
              built on the foundation Patrick and David created.
            </p>

            <p className="text-base text-bb-slate-500">January 2026</p>
          </motion.div>

          {/* Right: Visual Summary */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl border-2 border-bb-slate-200 p-xl shadow-lg">
            <div className="space-y-lg">
              <div className="text-center p-lg bg-bb-slate-50 rounded-xl border border-bb-slate-200">
                <p className="text-sm text-bb-slate-600 mb-xs">January 2026 Gross Margin</p>
                <p className="text-4xl font-display font-black text-bb-charcoal-800">$17.8K</p>
              </div>

              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-bb-amber-100 border-2 border-bb-amber-300 flex items-center justify-center">
                  <span className="text-bb-amber-600 text-xl font-bold">↓</span>
                </div>
              </div>

              <div className="text-center p-lg bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300">
                <p className="text-sm text-bb-forest-600 mb-xs">December 2026 Target</p>
                <p className="text-4xl font-display font-black text-bb-forest-600">$100K</p>
              </div>

              <div className="grid grid-cols-2 gap-md pt-md border-t border-bb-slate-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-bb-charcoal-800">65-70</p>
                  <p className="text-xs text-bb-slate-500">Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-bb-charcoal-800">481</p>
                  <p className="text-xs text-bb-slate-500">Loads/Month</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
