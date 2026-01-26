import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Clearer handoff protocol with ownership clarity
const handoffSteps = [
  {
    step: 1,
    who: 'Patrick',
    action: 'Closes the deal, sends quote, gets customer approval',
    detail: 'Patrick owns the relationship until the first load proves we deliver',
  },
  {
    step: 2,
    who: 'Patrick',
    action: 'Books and monitors first load personally',
    detail: 'He made the promise, he delivers on it. Proves we can execute.',
  },
  {
    step: 3,
    who: 'Patrick → David',
    action: 'Sends intro email after successful first delivery',
    detail: '"David will be your day-to-day contact. He\'ll handle all bookings and tracking."',
  },
  {
    step: 4,
    who: 'David',
    action: 'Takes over ALL future quoting, booking, and communication',
    detail: 'One ops contact, no confusion. David owns the operational relationship.',
  },
]

export default function Slide33_HandoffProtocol() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-xs">Sales → Operations Handoff</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Clear ownership at every stage. No confusion.</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-lg">
          {/* Left: Visual Flow */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-md">The Handoff Flow</h3>
            <div className="space-y-sm">
              {handoffSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-sm">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    idx < 2 ? 'bg-bb-amber-500' : idx === 2 ? 'bg-bb-steel-500' : 'bg-bb-forest-500'
                  }`}>
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-sm mb-xs">
                      <span className={`px-sm py-0.5 rounded text-xs font-bold ${
                        idx < 2 ? 'bg-bb-amber-100 text-bb-amber-700' :
                        idx === 2 ? 'bg-bb-steel-100 text-bb-steel-700' :
                        'bg-bb-forest-100 text-bb-forest-700'
                      }`}>
                        {step.who}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-bb-charcoal-800">{step.action}</p>
                    <p className="text-xs text-bb-charcoal-500 mt-xs">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Ownership Clarity */}
          <motion.div variants={itemVariants} className="space-y-sm">
            {/* Who Quotes */}
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Who Does What?</h3>
              <div className="space-y-sm">
                <div className="p-sm bg-bb-amber-50 rounded-lg border border-bb-amber-200">
                  <p className="text-xs font-bold text-bb-amber-700 mb-xs">PATRICK (New Business)</p>
                  <ul className="text-xs text-bb-charcoal-700 space-y-xs">
                    <li>• Quotes new prospects</li>
                    <li>• Books & monitors FIRST load only</li>
                    <li>• Makes the intro to David</li>
                  </ul>
                </div>
                <div className="p-sm bg-bb-forest-50 rounded-lg border border-bb-forest-200">
                  <p className="text-xs font-bold text-bb-forest-700 mb-xs">DAVID (Operations)</p>
                  <ul className="text-xs text-bb-charcoal-700 space-y-xs">
                    <li>• Quotes ALL repeat business</li>
                    <li>• Books ALL loads after first</li>
                    <li>• Handles ALL tracking & communication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why This Matters */}
            <div className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-md text-white">
              <h3 className="text-sm font-bold text-white mb-sm">Why This Works</h3>
              <ul className="text-xs space-y-xs">
                <li className="flex items-start gap-sm">
                  <span className="text-bb-forest-300">1.</span>
                  <span>Customer has ONE contact for ops (David)</span>
                </li>
                <li className="flex items-start gap-sm">
                  <span className="text-bb-forest-300">2.</span>
                  <span>Patrick stays focused on NEW business</span>
                </li>
                <li className="flex items-start gap-sm">
                  <span className="text-bb-forest-300">3.</span>
                  <span>David can move fast without waiting on Patrick</span>
                </li>
                <li className="flex items-start gap-sm">
                  <span className="text-bb-forest-300">4.</span>
                  <span>No dropped balls during handoff</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Key Document */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">What Gets Documented in HubSpot</h3>
          <div className="grid grid-cols-4 gap-md">
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700">Customer Profile</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Contact info, decision makers</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700">Lane Details</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Origins, destinations, frequency</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700">Pricing</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Agreed rates, margin targets</p>
            </div>
            <div className="text-center p-sm bg-bb-slate-50 rounded-lg">
              <p className="text-xs font-semibold text-bb-charcoal-700">Preferences</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">Communication style, special needs</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md">
          <p className="text-sm text-center text-bb-charcoal-700">
            <span className="font-bold text-bb-steel-700">The Rule:</span> Patrick brings them in, proves we deliver, then David owns the relationship.
            <span className="text-bb-forest-600 font-semibold"> Clean handoff = happy customers + Patrick stays selling.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
