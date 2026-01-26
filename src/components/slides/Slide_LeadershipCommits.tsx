import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Updated leadership roles per user feedback
const leadershipRoles = [
  {
    name: 'Chris',
    role: 'Sales Coach & Advisor',
    color: 'bb-steel',
    focus: 'Build a sales team focused on growth',
    commitments: [
      'Provide guidance and best practices',
      'Be a sounding board for sales strategy',
      'Coach Patrick on deals and techniques',
      'Help build repeatable sales processes',
    ],
  },
  {
    name: 'Vin',
    role: 'Operations Lead',
    color: 'bb-forest',
    focus: 'Efficient, systematic operations',
    commitments: [
      'Ensure operations run efficiently',
      'Build systems that scale',
      'Support David in carrier strategy',
      'Initiate ops hire before David drowns',
    ],
  },
  {
    name: 'Jason',
    role: 'President',
    color: 'bb-amber',
    focus: 'Strategy, tech, and accounting',
    commitments: [
      'Technology guidance and decisions',
      'Big picture strategy direction',
      'Accounting and financial support',
      'Capital available when triggers met',
    ],
  },
]

export default function Slide_LeadershipCommits() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-charcoal-800 mb-xs">
            What Leadership Provides
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600 max-w-3xl mx-auto">
            You're not alone in this. <span className="font-semibold text-bb-charcoal-800">Here's what we bring to the table.</span>
          </p>
        </motion.div>

        {/* Leadership Commitment Cards */}
        <div className="grid grid-cols-3 gap-lg">
          {leadershipRoles.map((leader) => {
            const colorMap: Record<string, { border: string; icon: string; text: string; bg: string }> = {
              'bb-steel': { border: 'border-bb-steel-300', icon: 'bg-bb-steel-500', text: 'text-bb-steel-700', bg: 'bg-bb-steel-50' },
              'bb-forest': { border: 'border-bb-forest-300', icon: 'bg-bb-forest-500', text: 'text-bb-forest-700', bg: 'bg-bb-forest-50' },
              'bb-amber': { border: 'border-bb-amber-300', icon: 'bg-bb-amber-500', text: 'text-bb-amber-700', bg: 'bg-bb-amber-50' },
            }
            const color = colorMap[leader.color]

            return (
              <motion.div
                key={leader.name}
                variants={itemVariants}
                className={`bg-white rounded-xl p-md border-2 ${color.border} shadow-sm`}
              >
                <div className="flex items-center gap-sm mb-sm">
                  <div className={`w-10 h-10 rounded-lg ${color.icon} flex items-center justify-center text-white text-lg font-bold`}>
                    {leader.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold ${color.text}`}>{leader.name}</h3>
                    <p className="text-xs text-bb-charcoal-500">{leader.role}</p>
                  </div>
                </div>
                <div className={`p-sm rounded-lg ${color.bg} mb-sm`}>
                  <p className="text-xs font-semibold text-bb-charcoal-700">{leader.focus}</p>
                </div>
                <ul className="space-y-xs">
                  {leader.commitments.map((commitment, cidx) => (
                    <li key={cidx} className="flex items-start gap-sm">
                      <span className={`${color.text} mt-0.5 text-xs`}>•</span>
                      <span className="text-xs text-bb-charcoal-600 leading-snug">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Availability Note */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <div className="grid grid-cols-3 gap-md text-center">
            <div className="p-sm">
              <p className="text-xs font-semibold text-bb-charcoal-700">Availability</p>
              <p className="text-sm font-bold text-bb-charcoal-800 mt-xs">24/7 Always</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">We're here when you need us</p>
            </div>
            <div className="p-sm">
              <p className="text-xs font-semibold text-bb-charcoal-700">Decision Speed</p>
              <p className="text-sm font-bold text-bb-charcoal-800 mt-xs">Fast</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">No bureaucracy, quick answers</p>
            </div>
            <div className="p-sm">
              <p className="text-xs font-semibold text-bb-charcoal-700">Approach</p>
              <p className="text-sm font-bold text-bb-charcoal-800 mt-xs">Support, Not Micromanage</p>
              <p className="text-xs text-bb-charcoal-500 mt-xs">You own your domain</p>
            </div>
          </div>
        </motion.div>

        {/* The Big Promise - No orange background */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-md shadow-lg">
          <div className="text-center text-white">
            <h3 className="text-sm font-bold mb-sm">Our Core Promise</h3>
            <div className="grid grid-cols-3 gap-md">
              <div className="p-sm bg-white/10 rounded-lg">
                <p className="font-bold text-sm mb-xs">Protected Time</p>
                <p className="text-xs text-white/90">Patrick stays on sales during protected hours</p>
              </div>
              <div className="p-sm bg-white/10 rounded-lg">
                <p className="font-bold text-sm mb-xs">Proactive Support</p>
                <p className="text-xs text-white/90">We hire help BEFORE you're drowning</p>
              </div>
              <div className="p-sm bg-white/10 rounded-lg">
                <p className="font-bold text-sm mb-xs">We Adapt Together</p>
                <p className="text-xs text-white/90">If data says pivot, we pivot</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
