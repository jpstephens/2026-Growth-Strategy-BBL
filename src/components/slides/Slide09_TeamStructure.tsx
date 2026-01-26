import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const teamMembers = [
  {
    name: 'Jason',
    role: 'President',
    focus: 'Strategy & Capital',
    responsibilities: [
      'Technology decisions & tool support',
      'Capital allocation for hiring',
      'Strategic decisions within 48 hours',
      'Major account pricing authority',
    ],
    color: 'charcoal',
  },
  {
    name: 'Chris',
    role: 'Sales Lead',
    focus: 'Sales Strategy & Coaching',
    responsibilities: [
      'Weekly 1:1 coaching with Patrick',
      'Deal support on any call within 2 hours',
      'Joint calls on deals over $500/mo margin',
      'Sales process and script refinement',
    ],
    color: 'amber',
  },
  {
    name: 'Vin',
    role: 'Operations Lead',
    focus: 'Ops Strategy & David Support',
    responsibilities: [
      'Daily 15-min sync with David',
      'Escalation response within 1 hour',
      'Initiate ops hire BEFORE 120 loads/mo',
      'Carrier strategy and partnerships',
    ],
    color: 'steel',
  },
  {
    name: 'Patrick',
    role: 'Sales Rep',
    focus: '100% New Customer Acquisition',
    responsibilities: [
      '200+ dials/week minimum',
      'Qualify, pitch, close new accounts',
      'First load execution & handoff',
      'Target: 4-5 new customers/month',
    ],
    color: 'forest',
  },
  {
    name: 'David',
    role: 'Operations',
    focus: 'Load Execution Excellence',
    responsibilities: [
      'All load execution after handoff',
      'Carrier relationships & development',
      'Customer communication (day-to-day)',
      'Systems management (HubSpot, Alvys)',
    ],
    color: 'steel',
  },
]

const colorMap = {
  charcoal: {
    border: 'border-bb-charcoal-300',
    bg: 'bg-bb-charcoal-50',
    badge: 'bg-bb-charcoal-500',
    text: 'text-bb-charcoal-700',
  },
  amber: {
    border: 'border-bb-amber-300',
    bg: 'bg-bb-amber-50',
    badge: 'bg-bb-amber-500',
    text: 'text-bb-amber-700',
  },
  steel: {
    border: 'border-bb-steel-300',
    bg: 'bg-bb-steel-50',
    badge: 'bg-bb-steel-500',
    text: 'text-bb-steel-700',
  },
  forest: {
    border: 'border-bb-forest-300',
    bg: 'bg-bb-forest-50',
    badge: 'bg-bb-forest-500',
    text: 'text-bb-forest-700',
  },
}

export default function Slide09_TeamStructure() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-display font-bold text-bb-charcoal-800 mb-xs">Who Does What</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">Clear ownership. No ambiguity.</p>
        </motion.div>

        {/* Leadership Row */}
        <motion.div variants={itemVariants}>
          <p className="text-xs font-semibold text-bb-charcoal-500 uppercase tracking-wide mb-sm">Leadership</p>
          <div className="grid grid-cols-3 gap-md">
            {teamMembers.slice(0, 3).map((member) => {
              const colors = colorMap[member.color as keyof typeof colorMap]
              return (
                <div key={member.name} className={`bg-white rounded-xl border-2 ${colors.border} p-md shadow-sm`}>
                  <div className="flex items-center gap-sm mb-sm">
                    <div className={`${colors.badge} text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold`}>
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-bb-charcoal-800 text-sm">{member.name}</p>
                      <p className="text-xs text-bb-charcoal-500">{member.role}</p>
                    </div>
                  </div>
                  <p className={`text-xs font-semibold ${colors.text} mb-sm`}>{member.focus}</p>
                  <ul className="space-y-xs">
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-bb-charcoal-600 flex items-start gap-xs">
                        <span className={`${colors.text} mt-0.5`}>•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Execution Row */}
        <motion.div variants={itemVariants}>
          <p className="text-xs font-semibold text-bb-charcoal-500 uppercase tracking-wide mb-sm">Daily Execution</p>
          <div className="grid grid-cols-2 gap-md">
            {teamMembers.slice(3).map((member) => {
              const colors = colorMap[member.color as keyof typeof colorMap]
              return (
                <div key={member.name} className={`${colors.bg} rounded-xl border-2 ${colors.border} p-md shadow-sm`}>
                  <div className="flex items-center gap-sm mb-sm">
                    <div className={`${colors.badge} text-white w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold`}>
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-bb-charcoal-800">{member.name}</p>
                      <p className="text-xs text-bb-charcoal-500">{member.role}</p>
                    </div>
                  </div>
                  <p className={`text-sm font-semibold ${colors.text} mb-sm`}>{member.focus}</p>
                  <ul className="space-y-xs">
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-bb-charcoal-700 flex items-start gap-sm">
                        <span className={`${colors.text} font-bold mt-0.5`}>→</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Key Principle */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-charcoal-700 to-bb-charcoal-800 rounded-xl p-md shadow-lg text-white">
          <p className="text-sm text-center">
            <span className="font-bold text-bb-amber-300">The Principle:</span> Patrick sells. David executes. Leadership supports.
            <span className="text-bb-steel-300"> Everyone knows their lane.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
