import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Simplified schedule showing protected vs. flexible time
const scheduleBlocks = [
  { time: '8:00-8:15', activity: 'Setup', protected: false, dials: 0 },
  { time: '8:15-10:00', activity: 'CALLING BLOCK #1', protected: true, dials: 20 },
  { time: '10:00-10:30', activity: 'Break / CRM', protected: false, dials: 0 },
  { time: '10:30-12:00', activity: 'CALLING BLOCK #2', protected: true, dials: 15 },
  { time: '12:00-12:30', activity: 'Lunch', protected: false, dials: 0 },
  { time: '12:30-2:00', activity: 'Follow-ups / Quotes', protected: false, dials: 0 },
  { time: '2:00-3:30', activity: 'CALLING BLOCK #3', protected: true, dials: 10 },
  { time: '3:30-5:00', activity: 'Admin / EOD', protected: false, dials: 0 },
]

const protectedRules = [
  'No operations during calling blocks',
  'Phone on silent for non-sales calls',
  'No email checking',
  'David and Vin handle ALL ops issues',
]

export default function Slide26_ProtectedCalling() {
  const totalProtectedHours = 4.25
  const totalDials = scheduleBlocks.reduce((sum, b) => sum + b.dials, 0)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-xs">
            Patrick's Protected Schedule
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">
            4.25 hours of protected calling = 40+ dials daily
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-lg">
          {/* Left: Schedule Visual */}
          <motion.div variants={itemVariants} className="col-span-2 bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
            <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Daily Schedule</h3>
            <div className="grid grid-cols-2 gap-xs">
              {scheduleBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-sm flex items-center justify-between ${
                    block.protected
                      ? 'bg-bb-amber-100 border-2 border-bb-amber-300'
                      : 'bg-bb-slate-50 border border-bb-slate-200'
                  }`}
                >
                  <div>
                    <p className={`text-xs font-mono ${block.protected ? 'font-bold text-bb-amber-700' : 'text-bb-charcoal-600'}`}>
                      {block.time}
                    </p>
                    <p className={`text-xs ${block.protected ? 'font-semibold text-bb-charcoal-800' : 'text-bb-charcoal-600'}`}>
                      {block.activity}
                    </p>
                  </div>
                  {block.protected && (
                    <div className="text-right">
                      <p className="text-lg font-bold text-bb-amber-600">{block.dials}</p>
                      <p className="text-xs text-bb-charcoal-500">dials</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Summary & Rules */}
          <motion.div variants={itemVariants} className="space-y-md">
            {/* Daily Summary */}
            <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Daily Totals</h3>
              <div className="space-y-sm">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-bb-charcoal-600">Protected Time</span>
                  <span className="text-lg font-bold text-bb-amber-600">{totalProtectedHours}hrs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-bb-charcoal-600">Target Dials</span>
                  <span className="text-lg font-bold text-bb-amber-600">{totalDials}+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-bb-charcoal-600">Est. Conversations</span>
                  <span className="text-lg font-bold text-bb-forest-600">8-10</span>
                </div>
              </div>
            </div>

            {/* Protected Time Rules */}
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md">
              <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm">Protected Time Rules</h3>
              <ul className="space-y-xs">
                {protectedRules.map((rule, idx) => (
                  <li key={idx} className="text-xs text-bb-charcoal-600 flex items-start gap-xs">
                    <span className="text-bb-amber-600 font-bold">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Why This Matters */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-md shadow-lg text-white">
          <div className="grid grid-cols-3 gap-md text-center">
            <div>
              <p className="text-2xl font-bold text-bb-amber-300">{totalProtectedHours}hrs</p>
              <p className="text-xs text-bb-slate-300">Protected daily</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{totalDials}+ dials</p>
              <p className="text-xs text-bb-slate-300">Minimum daily</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-bb-forest-300">200+/week</p>
              <p className="text-xs text-bb-slate-300">Weekly target</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
