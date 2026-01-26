import { useState } from 'react'
import { motion } from 'framer-motion'
import Slide from '../layout/Slide'
import { callFramework } from '../../data/salesSystem'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Define stages with metadata
const stages = [
  {
    id: 'opening',
    name: 'Opening',
    duration: '10 sec',
    color: 'bb-amber',
    bgColor: 'from-bb-amber-50 to-bb-amber-100/50',
    borderColor: 'border-bb-amber-400',
    textColor: 'text-bb-amber-700',
    metric: '30-sec earned',
    description: 'Earn the right to continue',
  },
  {
    id: 'hook',
    name: 'Hook',
    duration: '15 sec',
    color: 'bb-steel',
    bgColor: 'from-bb-steel-50 to-bb-steel-100/50',
    borderColor: 'border-bb-steel-400',
    textColor: 'text-bb-steel-700',
    metric: 'Interest sparked',
    description: 'Give them a reason to listen',
  },
  {
    id: 'qualifying',
    name: 'Qualifying',
    duration: '2-3 min',
    color: 'bb-forest',
    bgColor: 'from-bb-forest-50 to-bb-forest-100/50',
    borderColor: 'border-bb-forest-400',
    textColor: 'text-bb-forest-700',
    metric: 'Needs identified',
    description: 'Learn their situation',
  },
  {
    id: 'objections',
    name: 'Objections',
    duration: '1-2 min',
    color: 'bb-charcoal',
    bgColor: 'from-bb-charcoal-50 to-bb-charcoal-100/50',
    borderColor: 'border-bb-charcoal-400',
    textColor: 'text-bb-charcoal-700',
    metric: 'Resistance handled',
    description: 'Address concerns',
  },
  {
    id: 'close',
    name: 'Close',
    duration: '30 sec',
    color: 'bb-charcoal',
    bgColor: 'from-bb-slate-50 to-bb-slate-100/50',
    borderColor: 'border-bb-charcoal-400',
    textColor: 'text-bb-charcoal-700',
    metric: 'Next step set',
    description: 'Secure commitment',
  },
]

export default function Slide27_CallFramework() {
  const [expandedStage, setExpandedStage] = useState<string | null>(null)

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-lg">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-display font-bold font-display text-bb-charcoal-800 mb-md">Sales Call Framework</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-steel-500 mx-auto rounded-full mb-sm" />
          <p className="text-lg text-bb-charcoal-600">The opening matters. Hook them in 30 seconds.</p>
        </motion.div>

        {/* Visual Flow - Horizontal Journey Map */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-md">
            <h3 className="text-base font-bold text-bb-charcoal-800">Conversation Flow</h3>
            <p className="text-xs text-bb-charcoal-500">Total call time: 4-6 minutes</p>
          </div>

          {/* Stage Flow Visualization */}
          <div className="relative flex items-stretch gap-sm">
            {stages.map((stage, idx) => (
              <div
                key={stage.id}
                className={`flex-1 relative cursor-pointer transition-all rounded-lg ${
                  expandedStage === stage.id
                    ? `bg-gradient-to-b ${stage.bgColor} border-2 ${stage.borderColor} shadow-md scale-105 z-10`
                    : 'bg-bb-slate-50 border-2 border-bb-slate-200 hover:border-bb-slate-300'
                }`}
                onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
              >
                <div className="p-sm text-center">
                  {/* Stage number */}
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-white text-sm font-bold mb-xs ${
                    stage.id === 'opening' ? 'bg-bb-amber-500' :
                    stage.id === 'hook' ? 'bg-bb-steel-500' :
                    stage.id === 'qualifying' ? 'bg-bb-forest-500' :
                    stage.id === 'objections' ? 'bg-bb-charcoal-500' :
                    'bg-bb-charcoal-600'
                  }`}>
                    {idx + 1}
                  </div>

                  {/* Stage name */}
                  <p className="font-bold text-bb-charcoal-800 text-sm mb-xs">{stage.name}</p>

                  {/* Duration badge */}
                  <span className={`inline-block px-xs py-0.5 rounded text-[10px] font-semibold ${
                    expandedStage === stage.id ? `${stage.textColor} bg-white/80` : 'text-bb-slate-600 bg-white'
                  }`}>
                    {stage.duration}
                  </span>

                  {/* Success metric */}
                  <p className="text-[10px] text-bb-slate-500 mt-xs">{stage.metric}</p>
                </div>

                {/* Connector arrow */}
                {idx < stages.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <svg className="w-4 h-4 text-bb-slate-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stage Detail Cards */}
        <motion.div variants={itemVariants} className="space-y-sm">
          {/* Opening Stage Card */}
          <div
            role="button"
            tabIndex={0}
            aria-expanded={expandedStage === 'opening'}
            aria-controls="opening-content"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpandedStage(expandedStage === 'opening' ? null : 'opening'); }}}
            className={`rounded-xl border-2 transition-all overflow-hidden ${
              expandedStage === 'opening'
                ? 'border-bb-amber-400 bg-gradient-to-r from-bb-amber-50 to-white shadow-lg'
                : 'border-bb-slate-200 bg-white hover:border-bb-slate-300 shadow-sm cursor-pointer'
            }`}
            onClick={() => setExpandedStage(expandedStage === 'opening' ? null : 'opening')}
          >
            <div className="p-md flex items-center justify-between">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-bb-amber-500 flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <p className="font-bold text-bb-charcoal-800">{callFramework.opening.title}</p>
                  <p className="text-xs text-bb-charcoal-600">{callFramework.opening.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <span className="px-sm py-xs bg-bb-amber-100 text-bb-amber-700 text-xs font-semibold rounded">10 sec</span>
                <svg className={`w-5 h-5 text-bb-slate-400 transition-transform ${expandedStage === 'opening' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {expandedStage === 'opening' && (
              <div id="opening-content" className="px-md pb-md border-t border-bb-amber-100">
                {/* Script */}
                <div className="bg-white rounded-lg p-md mt-md border-l-4 border-bb-amber-500 shadow-sm">
                  <p className="text-xs font-semibold text-bb-amber-600 mb-xs">SCRIPT</p>
                  <p className="text-sm italic text-bb-charcoal-800">"{callFramework.opening.script}"</p>
                </div>

                {/* Tips as badges */}
                <div className="mt-md">
                  <p className="text-xs font-semibold text-bb-charcoal-600 mb-sm">KEY POINTS</p>
                  <div className="flex flex-wrap gap-xs">
                    {callFramework.opening.tips.map((tip, idx) => (
                      <span key={idx} className="inline-flex items-center gap-xs px-sm py-xs bg-bb-amber-100 text-bb-amber-700 text-xs rounded-full">
                        <span className="w-4 h-4 bg-bb-amber-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span>
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hook Stage Card */}
          <div
            role="button"
            tabIndex={0}
            aria-expanded={expandedStage === 'hook'}
            aria-controls="hook-content"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpandedStage(expandedStage === 'hook' ? null : 'hook'); }}}
            className={`rounded-xl border-2 transition-all overflow-hidden ${
              expandedStage === 'hook'
                ? 'border-bb-steel-400 bg-gradient-to-r from-bb-steel-50 to-white shadow-lg'
                : 'border-bb-slate-200 bg-white hover:border-bb-slate-300 shadow-sm cursor-pointer'
            }`}
            onClick={() => setExpandedStage(expandedStage === 'hook' ? null : 'hook')}
          >
            <div className="p-md flex items-center justify-between">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-bb-steel-500 flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <p className="font-bold text-bb-charcoal-800">{callFramework.hook.title}</p>
                  <p className="text-xs text-bb-charcoal-600">{callFramework.hook.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <span className="px-sm py-xs bg-bb-steel-100 text-bb-steel-700 text-xs font-semibold rounded">15 sec</span>
                <svg className={`w-5 h-5 text-bb-slate-400 transition-transform ${expandedStage === 'hook' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {expandedStage === 'hook' && (
              <div id="hook-content" className="px-md pb-md border-t border-bb-steel-100">
                {/* Script */}
                <div className="bg-white rounded-lg p-md mt-md border-l-4 border-bb-steel-500 shadow-sm">
                  <p className="text-xs font-semibold text-bb-steel-600 mb-xs">SCRIPT</p>
                  <p className="text-sm italic text-bb-charcoal-800">"{callFramework.hook.script}"</p>
                </div>

                {/* Tips as badges */}
                <div className="mt-md">
                  <p className="text-xs font-semibold text-bb-charcoal-600 mb-sm">KEY POINTS</p>
                  <div className="flex flex-wrap gap-xs">
                    {callFramework.hook.tips.map((tip, idx) => (
                      <span key={idx} className="inline-flex items-center gap-xs px-sm py-xs bg-bb-steel-100 text-bb-steel-700 text-xs rounded-full">
                        <span className="w-4 h-4 bg-bb-steel-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span>
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Qualifying Stage Card */}
          <div
            role="button"
            tabIndex={0}
            aria-expanded={expandedStage === 'qualifying'}
            aria-controls="qualifying-content"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpandedStage(expandedStage === 'qualifying' ? null : 'qualifying'); }}}
            className={`rounded-xl border-2 transition-all overflow-hidden ${
              expandedStage === 'qualifying'
                ? 'border-bb-forest-400 bg-gradient-to-r from-bb-forest-50 to-white shadow-lg'
                : 'border-bb-slate-200 bg-white hover:border-bb-slate-300 shadow-sm cursor-pointer'
            }`}
            onClick={() => setExpandedStage(expandedStage === 'qualifying' ? null : 'qualifying')}
          >
            <div className="p-md flex items-center justify-between">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-bb-forest-500 flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <p className="font-bold text-bb-charcoal-800">{callFramework.qualifying.title}</p>
                  <p className="text-xs text-bb-slate-600">{callFramework.qualifying.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <span className="px-sm py-xs bg-bb-forest-100 text-bb-forest-700 text-xs font-semibold rounded">2-3 min</span>
                <svg className={`w-5 h-5 text-bb-slate-400 transition-transform ${expandedStage === 'qualifying' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {expandedStage === 'qualifying' && (
              <div id="qualifying-content" className="px-md pb-md border-t border-bb-forest-100">
                {/* Questions */}
                <div className="mt-md space-y-xs">
                  <p className="text-xs font-semibold text-bb-forest-600 mb-sm">QUALIFYING QUESTIONS</p>
                  {callFramework.qualifying.questions.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-sm bg-white rounded-lg p-sm border border-bb-forest-200">
                      <span className="w-5 h-5 bg-bb-forest-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">{idx + 1}</span>
                      <p className="text-sm text-bb-charcoal-800">{q}</p>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div className="mt-md bg-bb-forest-100 rounded-lg p-sm">
                  <p className="text-xs text-bb-forest-700 font-medium">{callFramework.qualifying.note}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Framework Note */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl p-md border-2 border-bb-slate-200 shadow-sm">
          <div className="flex items-start gap-sm">
            <span className="w-8 h-8 bg-bb-slate-100 rounded-lg flex items-center justify-center text-bb-charcoal-500 shrink-0">i</span>
            <p className="text-sm text-bb-charcoal-600">
              <span className="font-semibold text-bb-charcoal-800">This isn't a "perfect script"</span>—it's a framework. Adjust for personality. The key is: be specific to their industry, acknowledge you're interrupting, and frame the conversation around their future problem.
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
