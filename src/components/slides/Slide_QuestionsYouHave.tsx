import { motion } from 'framer-motion'
import Slide from '../layout/Slide'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const questions = [
  {
    question: "What if I can't hit 200 dials?",
    forWhom: 'Patrick',
    answer: "We coach and adjust. Maybe it's call quality over quantity. Maybe it's better targeting. We figure it out together—not blame.",
    icon: '📞',
    color: 'electric',
  },
  {
    question: "What if operations gets overwhelmed?",
    forWhom: 'David',
    answer: "David escalates to Vin immediately. Patrick stays protected. We've built escalation paths so crises don't derail the plan.",
    icon: '🚨',
    color: 'emerald',
  },
  {
    question: "What if the market shifts?",
    forWhom: 'Everyone',
    answer: "We watch the data weekly. If conversion rates drop or customer quality changes, we pivot the approach—but we don't abandon the structure.",
    icon: '📊',
    color: 'sunset',
  },
  {
    question: "What if we miss the numbers?",
    forWhom: 'Everyone',
    answer: "We diagnose why, not who. Is it activity? Conversion? Market? We fix the root cause. Missing 4 customers by hitting 3 is progress, not failure.",
    icon: '📉',
    color: 'navy',
  },
]

export default function Slide_QuestionsYouHave() {
  const colorMap = {
    electric: {
      bg: 'from-bb-electric-50 to-white',
      border: 'border-bb-electric-300',
      icon: 'bg-bb-electric-500',
      text: 'text-bb-electric-700',
    },
    emerald: {
      bg: 'from-bb-emerald-50 to-white',
      border: 'border-bb-emerald-300',
      icon: 'bg-bb-emerald-500',
      text: 'text-bb-emerald-700',
    },
    sunset: {
      bg: 'from-bb-sunset-50 to-white',
      border: 'border-bb-sunset-300',
      icon: 'bg-bb-sunset-500',
      text: 'text-bb-sunset-700',
    },
    navy: {
      bg: 'from-bb-navy-50 to-white',
      border: 'border-bb-navy-300',
      icon: 'bg-bb-navy-500',
      text: 'text-bb-navy-700',
    },
  }

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Questions We Know You Have
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-emerald-400 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto leading-relaxed">
            Let's address the concerns directly. <span className="font-semibold">These are fair questions.</span>
          </p>
        </motion.div>

        {/* Q&A Cards */}
        <div className="grid grid-cols-2 gap-xl">
          {questions.map((q, idx) => {
            const colors = colorMap[q.color as keyof typeof colorMap]

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`bg-gradient-to-br ${colors.bg} rounded-2xl border-2 ${colors.border} p-xl shadow-lg`}
              >
                <div className="flex items-start gap-lg mb-lg">
                  <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center text-white text-xl shadow-lg shrink-0`}>
                    {q.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-bb-slate-500 uppercase tracking-wide mb-xs">
                      {q.forWhom}
                    </p>
                    <h3 className={`text-lg font-bold ${colors.text}`}>
                      "{q.question}"
                    </h3>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-bb-slate-700 leading-relaxed">
                    {q.answer}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Discussion Prompt */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-navy-700 to-bb-navy-800 rounded-2xl p-2xl shadow-2xl text-white text-center">
          <div className="flex items-center justify-center gap-md mb-lg">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
              💬
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-md">What Else Do You Need to Know?</h3>
          <p className="text-lg text-bb-slate-300 max-w-2xl mx-auto leading-relaxed">
            This plan only works if you believe in it. What concerns haven't we addressed? What would make you feel more confident?
          </p>
          <div className="h-px bg-white/20 my-lg" />
          <p className="text-sm text-bb-slate-400 italic">
            This is a conversation, not a presentation. Your input shapes the final version.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
