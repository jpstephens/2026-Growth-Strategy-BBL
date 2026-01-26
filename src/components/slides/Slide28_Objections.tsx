import { useState } from 'react'
import Slide from '../layout/Slide'
import { callFramework } from '../../data/salesSystem'

// Define objection categories with metadata
const objectionCategories = [
  {
    id: 'happy',
    label: 'Current Carrier',
    icon: '🤝',
    color: 'bb-electric',
    bgGradient: 'from-bb-electric-50 to-bb-electric-100/50',
    borderColor: 'border-bb-electric-400',
    textColor: 'text-bb-electric-700',
    closeRate: '35%',
    whatTheyMean: "They have a relationship. They don't want to risk it for an unknown.",
    whyItWorks: "Position yourself as backup, not replacement. Lower the commitment threshold.",
  },
  {
    id: 'nobroker',
    label: 'No Brokers',
    icon: '🚫',
    color: 'bb-sunset',
    bgGradient: 'from-bb-sunset-50 to-bb-sunset-100/50',
    borderColor: 'border-bb-sunset-400',
    textColor: 'text-bb-sunset-700',
    closeRate: '25%',
    whatTheyMean: "They've had bad experiences or value direct relationships.",
    whyItWorks: "Acknowledge their position. Offer to be the exception when they're stuck.",
  },
  {
    id: 'email',
    label: 'Send Info',
    icon: '📧',
    color: 'bb-emerald',
    bgGradient: 'from-bb-emerald-50 to-bb-emerald-100/50',
    borderColor: 'border-bb-emerald-400',
    textColor: 'text-bb-emerald-700',
    closeRate: '40%',
    whatTheyMean: "They want to get off the phone but may have some interest.",
    whyItWorks: "Get their info, but qualify while you have them. Makes follow-up relevant.",
  },
  {
    id: 'notinterested',
    label: 'Not Interested',
    icon: '❌',
    color: 'bb-burgundy',
    bgGradient: 'from-bb-burgundy-50 to-bb-burgundy-100/50',
    borderColor: 'border-bb-burgundy-400',
    textColor: 'text-bb-burgundy-700',
    closeRate: '15%',
    whatTheyMean: "Either truly not a fit, or you haven't found their pain point yet.",
    whyItWorks: "One more question can uncover the real reason. Don't leave without insight.",
  },
]

export default function Slide28_Objections() {
  const [activeTab, setActiveTab] = useState(0)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const currentCategory = objectionCategories[activeTab]
  const currentObjection = callFramework.objections.items[activeTab]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-5xl font-bold text-bb-navy-900 mb-md">
            Handling Objections
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-sunset-500 to-bb-electric-500 mx-auto rounded-full mb-sm" />
          <p className="text-lg text-bb-slate-600">
            Every "no" is actually a "not yet"
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-sm mb-lg" role="tablist" aria-label="Objection categories">
          {objectionCategories.map((cat, idx) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === idx}
              aria-controls={`objection-panel-${cat.id}`}
              id={`objection-tab-${cat.id}`}
              onClick={() => { setActiveTab(idx); setShowAdvanced(false); }}
              className={`flex-1 p-md rounded-xl border-2 transition-all ${
                activeTab === idx
                  ? `bg-gradient-to-b ${cat.bgGradient} ${cat.borderColor} shadow-md`
                  : 'bg-white border-bb-slate-200 hover:border-bb-slate-300'
              }`}
            >
              <div className="text-center">
                <span className="text-2xl mb-xs block" aria-hidden="true">{cat.icon}</span>
                <p className={`font-bold text-sm ${activeTab === idx ? cat.textColor : 'text-bb-navy-900'}`}>{cat.label}</p>
                <p className={`text-xs mt-xs ${activeTab === idx ? cat.textColor : 'text-bb-slate-500'}`}>
                  Close: {cat.closeRate}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Objection Detail */}
        <div
          role="tabpanel"
          id={`objection-panel-${currentCategory.id}`}
          aria-labelledby={`objection-tab-${currentCategory.id}`}
          className={`rounded-xl border-2 ${currentCategory.borderColor} bg-gradient-to-r ${currentCategory.bgGradient} shadow-lg overflow-hidden`}
        >
          {/* Objection Quote */}
          <div className="p-lg border-b border-bb-slate-200/50">
            <div className="flex items-start gap-md">
              <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0`} aria-hidden="true">
                {currentCategory.icon}
              </div>
              <div className="flex-1">
                <p className={`text-xs font-semibold ${currentCategory.textColor} uppercase tracking-wide mb-xs`}>The Objection</p>
                <p className="text-xl font-semibold text-bb-navy-900 italic">"{currentObjection.objection}"</p>
              </div>
            </div>
          </div>

          {/* What They're Really Saying */}
          <div className="p-md bg-white/50 border-b border-bb-slate-200/50">
            <div className="flex items-start gap-md">
              <div className="w-8 h-8 rounded-lg bg-bb-slate-100 flex items-center justify-center text-sm shrink-0" aria-hidden="true">🧠</div>
              <div>
                <p className="text-xs font-semibold text-bb-slate-600 uppercase tracking-wide mb-xs">What They're Really Saying</p>
                <p className="text-sm text-bb-navy-900">{currentCategory.whatTheyMean}</p>
              </div>
            </div>
          </div>

          {/* Response Script */}
          <div className="p-lg bg-white">
            <p className="text-xs font-semibold text-bb-emerald-600 uppercase tracking-wide mb-sm">Your Response</p>
            <div className="bg-gradient-to-r from-bb-emerald-50 to-bb-emerald-100/30 border-l-4 border-bb-emerald-500 rounded-r-lg p-md">
              <p className="text-base text-bb-navy-900 italic leading-relaxed">"{currentObjection.response}"</p>
            </div>
          </div>

          {/* Why It Works */}
          <div className="p-md bg-bb-slate-50 border-t border-bb-slate-200">
            <div className="flex items-start gap-md">
              <div className="w-8 h-8 rounded-lg bg-bb-electric-100 flex items-center justify-center text-sm shrink-0" aria-hidden="true">💡</div>
              <div>
                <p className="text-xs font-semibold text-bb-electric-600 uppercase tracking-wide mb-xs">Why It Works</p>
                <p className="text-sm text-bb-slate-700">{currentCategory.whyItWorks}</p>
              </div>
            </div>
          </div>

          {/* Close Rate Indicator */}
          <div className="p-md bg-white border-t border-bb-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-sm">
                <p className="text-xs font-semibold text-bb-slate-600">Expected Close Rate:</p>
                <span className={`px-sm py-xs rounded-full text-xs font-bold ${
                  parseInt(currentCategory.closeRate) >= 35 ? 'bg-bb-emerald-100 text-bb-emerald-700' :
                  parseInt(currentCategory.closeRate) >= 25 ? 'bg-bb-sunset-100 text-bb-sunset-700' :
                  'bg-bb-burgundy-100 text-bb-burgundy-700'
                }`}>
                  {currentCategory.closeRate}
                </span>
              </div>

              {/* Progress bar */}
              <div className="flex-1 mx-md">
                <div className="h-2 bg-bb-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      parseInt(currentCategory.closeRate) >= 35 ? 'bg-bb-emerald-500' :
                      parseInt(currentCategory.closeRate) >= 25 ? 'bg-bb-sunset-500' :
                      'bg-bb-burgundy-500'
                    }`}
                    style={{ width: currentCategory.closeRate }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Responses Toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full mt-md text-center text-sm text-bb-electric-600 hover:text-bb-electric-700 font-medium py-sm"
        >
          {showAdvanced ? 'Hide Advanced Tips' : 'Show Advanced Tips'} {showAdvanced ? '▲' : '▼'}
        </button>

        {showAdvanced && (
          <div className="bg-white rounded-xl p-md border-2 border-bb-slate-200 shadow-sm mt-sm">
            <h4 className="font-bold text-bb-navy-900 text-sm mb-md">Advanced Objection Handling Tips</h4>
            <div className="grid grid-cols-2 gap-md">
              <div className="bg-bb-slate-50 rounded-lg p-sm">
                <p className="text-xs font-semibold text-bb-slate-600 mb-xs">Tone Matters</p>
                <p className="text-xs text-bb-navy-900">Stay conversational, not defensive. Match their energy level.</p>
              </div>
              <div className="bg-bb-slate-50 rounded-lg p-sm">
                <p className="text-xs font-semibold text-bb-slate-600 mb-xs">Validate First</p>
                <p className="text-xs text-bb-navy-900">Acknowledge their concern before pivoting to your response.</p>
              </div>
              <div className="bg-bb-slate-50 rounded-lg p-sm">
                <p className="text-xs font-semibold text-bb-slate-600 mb-xs">Ask Permission</p>
                <p className="text-xs text-bb-navy-900">"Mind if I ask one more question?" respects their time.</p>
              </div>
              <div className="bg-bb-slate-50 rounded-lg p-sm">
                <p className="text-xs font-semibold text-bb-slate-600 mb-xs">Leave The Door Open</p>
                <p className="text-xs text-bb-navy-900">Even a "no" today can become a "yes" in 6 months.</p>
              </div>
            </div>
          </div>
        )}

        {/* Key Principle */}
        <div className="mt-md bg-gradient-to-r from-bb-electric-50 to-bb-electric-100/50 border-l-6 border-bb-electric-500 rounded-lg p-md shadow-sm">
          <div className="flex items-start gap-md">
            <div className="w-10 h-10 bg-bb-electric-500 rounded-lg flex items-center justify-center text-white text-xl shrink-0" aria-hidden="true">💡</div>
            <div>
              <h4 className="text-bb-electric-700 font-semibold text-sm mb-xs">Key Principle</h4>
              <p className="text-sm text-bb-slate-700 leading-relaxed">
                You're not trying to convince them today. You're trying to be the person they think of when they have a problem. Objections are just reasons to follow up later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
