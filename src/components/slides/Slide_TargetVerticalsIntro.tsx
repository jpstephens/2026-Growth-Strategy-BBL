import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const verticals = [
  {
    name: 'Metal Fabrication',
    percentage: '30%',
    color: 'bb-steel',
    description: 'High-value components, JIT critical',
    margin: '$250+/load',
    salesTip: 'Target quality managers—they pay for reliability',
  },
  {
    name: 'Building Products',
    percentage: '25%',
    color: 'bb-amber',
    description: 'Heavy, consistent, regional',
    margin: '$200+/load',
    salesTip: 'Target purchasing & logistics coordinators',
  },
  {
    name: 'Industrial Equipment',
    percentage: '25%',
    color: 'bb-forest',
    description: 'Specialized handling, less competition',
    margin: '$250-400/load',
    salesTip: 'Value reliability over price—long-term accounts',
  },
  {
    name: 'Automotive JIT',
    percentage: '20%',
    color: 'bb-charcoal',
    description: 'Premium rates, time-critical',
    margin: '$300+/load',
    salesTip: 'Start with Tier 1 & 2 suppliers near plants',
  },
]

export default function Slide_TargetVerticalsIntro() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">
            Target Verticals
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600 max-w-2xl mx-auto">
            Four industries that match our strengths: predictable freight, healthy margins, relationship-focused buyers
          </p>
        </motion.div>

        {/* Vertical Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-4 gap-md">
          {verticals.map((vertical, idx) => {
            const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
              'bb-steel': { bg: 'bg-bb-steel-50', border: 'border-bb-steel-300', text: 'text-bb-steel-700', badge: 'bg-bb-steel-500' },
              'bb-amber': { bg: 'bg-bb-amber-50', border: 'border-bb-amber-300', text: 'text-bb-amber-700', badge: 'bg-bb-amber-500' },
              'bb-forest': { bg: 'bg-bb-forest-50', border: 'border-bb-forest-300', text: 'text-bb-forest-700', badge: 'bg-bb-forest-500' },
              'bb-charcoal': { bg: 'bg-bb-charcoal-50', border: 'border-bb-charcoal-300', text: 'text-bb-charcoal-700', badge: 'bg-bb-charcoal-500' },
            }
            const colors = colorMap[vertical.color]
            return (
              <div key={idx} className={`${colors.bg} rounded-xl border-2 ${colors.border} p-sm shadow-sm`}>
                <div className={`${colors.badge} text-white text-sm font-bold rounded-lg w-12 h-12 flex items-center justify-center mb-xs`}>
                  {vertical.percentage}
                </div>
                <h3 className={`text-sm font-bold ${colors.text} mb-xs`}>{vertical.name}</h3>
                <p className="text-xs text-bb-charcoal-600 mb-xs">{vertical.description}</p>
                <p className="text-sm font-bold text-bb-charcoal-800 mb-xs">{vertical.margin}</p>
                <p className="text-xs text-bb-charcoal-500 italic border-t border-bb-slate-200 pt-xs">{vertical.salesTip}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Why These Industries */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm">
          <h3 className="text-base font-bold text-bb-charcoal-800 mb-md text-center">Why These Industries?</h3>
          <div className="grid grid-cols-3 gap-lg">
            <div className="text-center p-md bg-bb-slate-50 rounded-lg">
              <p className="text-lg font-bold text-bb-forest-600 mb-xs">Predictable</p>
              <p className="text-sm text-bb-charcoal-600">Regular shipments, consistent lanes, forecastable volume</p>
            </div>
            <div className="text-center p-md bg-bb-slate-50 rounded-lg">
              <p className="text-lg font-bold text-bb-steel-600 mb-xs">Profitable</p>
              <p className="text-sm text-bb-charcoal-600">$200+ margin floor, willing to pay for reliability</p>
            </div>
            <div className="text-center p-md bg-bb-slate-50 rounded-lg">
              <p className="text-lg font-bold text-bb-amber-600 mb-xs">Relationship-Driven</p>
              <p className="text-sm text-bb-charcoal-600">Value service over price, loyal when treated well</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Our best customers come from these verticals.</span>
            {' '}Predictable freight, healthy margins, relationship-focused buyers who value service over price.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
