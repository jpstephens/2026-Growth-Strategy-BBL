import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const timeData = [
  { name: 'Operations', value: 60, color: '#4f85a6' },
  { name: 'Sales', value: 25, color: '#d6973a' },
  { name: 'Admin', value: 15, color: '#adb5bd' },
]

export default function Slide_WhatWeGotWrong() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-md">
            How We Got Here
          </h1>
          <div className="w-32 h-1 bg-bb-amber-500 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            As we grew organically, roles naturally blurred. That's normal for a startup—
            but now we need structure to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-xl">
          {/* Left: What Happened */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-xl border-2 border-bb-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-bb-charcoal-800 mb-lg">What Happened</h3>
            <div className="space-y-md">
              <div className="flex items-start gap-md">
                <div className="w-8 h-8 rounded-full bg-bb-slate-100 border border-bb-slate-300 flex items-center justify-center text-sm font-bold text-bb-charcoal-700 shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-bb-charcoal-800 mb-xs">Roles blurred naturally</p>
                  <p className="text-sm text-bb-charcoal-600">
                    Patrick and David co-worked on everything—
                    great for flexibility, but it prevented focus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-md">
                <div className="w-8 h-8 rounded-full bg-bb-slate-100 border border-bb-slate-300 flex items-center justify-center text-sm font-bold text-bb-charcoal-700 shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-bb-charcoal-800 mb-xs">Ops always won the day</p>
                  <p className="text-sm text-bb-charcoal-600">
                    When a load needs coverage NOW and a prospect call can wait,
                    the urgent wins over the important.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-md">
                <div className="w-8 h-8 rounded-full bg-bb-slate-100 border border-bb-slate-300 flex items-center justify-center text-sm font-bold text-bb-charcoal-700 shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-bb-charcoal-800 mb-xs">No protected sales time</p>
                  <p className="text-sm text-bb-charcoal-600">
                    Without boundaries, consistent prospecting was impossible.
                    Sales calls happened in stolen moments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Time Allocation Chart */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-xl border-2 border-bb-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-bb-charcoal-800 mb-md">
              Where Time Actually Goes
            </h3>
            <div className="flex items-center gap-lg">
              <div className="w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={timeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={65}
                      dataKey="value"
                      isAnimationActive={true}
                      animationDuration={800}
                    >
                      {timeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-sm">
                {timeData.map((item) => (
                  <div key={item.name} className="flex items-center gap-sm">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-bb-charcoal-700 flex-1">{item.name}</span>
                    <span className="text-sm font-bold text-bb-charcoal-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-bb-charcoal-500 mt-md pt-md border-t border-bb-slate-200">
              Sales needs 50%+ of time for real growth.
              Currently getting ~25%.
            </p>
          </motion.div>
        </div>

        {/* What Changes */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl p-xl border-2 border-bb-forest-300">
          <h3 className="text-lg font-bold text-bb-forest-700 mb-md">What Changes Now</h3>
          <div className="grid grid-cols-3 gap-lg">
            <div className="flex items-start gap-sm">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-sm text-bb-charcoal-700">Patrick gets 100% sales focus</span>
            </div>
            <div className="flex items-start gap-sm">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-sm text-bb-charcoal-700">David owns all operations</span>
            </div>
            <div className="flex items-start gap-sm">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-sm text-bb-charcoal-700">Clear handoff protocol</span>
            </div>
            <div className="flex items-start gap-sm">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-sm text-bb-charcoal-700">Protected calling time</span>
            </div>
            <div className="flex items-start gap-sm">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-sm text-bb-charcoal-700">Support before burnout</span>
            </div>
            <div className="flex items-start gap-sm">
              <span className="text-bb-forest-600 font-bold">✓</span>
              <span className="text-sm text-bb-charcoal-700">Leadership enforces boundaries</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
