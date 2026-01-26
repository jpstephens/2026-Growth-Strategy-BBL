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
  },
  {
    question: "What if operations gets overwhelmed?",
    forWhom: 'David',
    answer: "David escalates to Vin immediately. Patrick stays protected. We've built escalation paths so crises don't derail the plan.",
    icon: '🚨',
  },
  {
    question: "What if the market shifts?",
    forWhom: 'Everyone',
    answer: "We watch the data weekly. If conversion rates drop or customer quality changes, we pivot the approach—but we don't abandon the structure.",
    icon: '📊',
  },
  {
    question: "What if we miss the numbers?",
    forWhom: 'Everyone',
    answer: "We diagnose why, not who. Is it activity? Conversion? Market? We fix the root cause. Missing 4 customers by hitting 3 is progress, not failure.",
    icon: '📉',
  },
]

export default function Slide_QuestionsYouHave() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-xl">
        {/* Hero Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Questions We Know You Have
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-electric-600 mx-auto rounded-full mb-md" />
          <p className="text-lg text-bb-slate-600 max-w-3xl mx-auto">
            Let's address the concerns directly. <span className="font-semibold text-bb-navy-900">These are fair questions.</span>
          </p>
        </motion.div>

        {/* Q&A Cards */}
        <div className="grid grid-cols-2 gap-lg">
          {questions.map((q, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-xl border-2 border-bb-slate-200 p-lg shadow-sm"
            >
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-lg shrink-0">
                  {q.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-bb-slate-500 uppercase tracking-wide mb-xs">
                    {q.forWhom}
                  </p>
                  <h3 className="text-base font-bold text-bb-navy-900">
                    "{q.question}"
                  </h3>
                </div>
              </div>
              <p className="text-sm text-bb-slate-600 leading-relaxed pl-12">
                {q.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Discussion Prompt */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 rounded-2xl p-xl shadow-lg border-2 border-bb-sunset-400 text-white text-center">
          <h3 className="text-xl font-bold mb-sm">What Else Do You Need to Know?</h3>
          <p className="text-sm text-white/90 max-w-2xl mx-auto leading-relaxed">
            This plan only works if you believe in it. What concerns haven't we addressed? What would make you feel more confident?
          </p>
          <p className="text-xs text-white/70 italic mt-md">
            This is a conversation, not a presentation. Your input shapes the final version.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
