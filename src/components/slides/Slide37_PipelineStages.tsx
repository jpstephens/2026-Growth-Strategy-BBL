import Slide from '../layout/Slide'
import { dealStages } from '../../data/pipelineConfig'

export default function Slide37_PipelineStages() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Pipeline Stages</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">8 stages from lead to active customer</p>
        </div>

        {/* Deal Stages */}
        <div className="space-y-md">
          {dealStages.map((deal, idx) => (
            <div key={idx} className={`rounded-2xl border-2 p-lg shadow-lg ${
              idx < 3
                ? 'border-bb-electric-300 bg-white'
                : idx < 6
                  ? 'border-bb-slate-300 bg-white'
                  : 'border-bb-green bg-green-50'
            }`}>
              <div className="flex items-start justify-between mb-sm">
                <p className="font-bold text-bb-navy-900 text-lg">{deal.stage}</p>
                {deal.maxDays && <p className="text-xs font-semibold bg-bb-electric-50 px-sm py-xs rounded-lg text-bb-slate-700">Max: {deal.maxDays}d</p>}
              </div>
              <p className="text-sm text-bb-slate-600 mb-sm italic">{deal.definition}</p>
              <div className="pt-sm border-t border-bb-slate-300">
                <p className="text-xs font-semibold text-bb-slate-700">Exit:</p>
                <p className="text-sm text-bb-slate-700">{deal.exitCriteria}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tracking Note */}
        <div className="bg-gradient-to-r from-bb-electric-50 to-white rounded-2xl p-2xl border-2 border-bb-electric-300 shadow-lg">
          <p className="text-base text-bb-slate-700 leading-relaxed">
            <span className="font-bold text-bb-navy-900">Tracking:</span> Every deal in HubSpot. Every deal must have a stage. Every stage must have a next action and date. Weekly pipeline reviews with Chris assess movement and velocity.
          </p>
        </div>
      </div>
    </Slide>
  )
}
