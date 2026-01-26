import Slide from '../layout/Slide'
import { dealStages } from '../../data/pipelineConfig'

export default function Slide37_PipelineStages() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">Pipeline Stages</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-amber-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">8 stages from lead to active customer</p>
        </div>

        {/* Deal Stages - Compact Grid */}
        <div className="grid grid-cols-4 gap-sm">
          {dealStages.map((deal, idx) => (
            <div key={idx} className={`rounded-lg border-2 p-sm shadow-sm ${
              idx < 3
                ? 'border-bb-steel-300 bg-bb-steel-50'
                : idx < 6
                  ? 'border-bb-slate-300 bg-white'
                  : 'border-bb-forest-300 bg-bb-forest-50'
            }`}>
              <div className="flex items-center justify-between mb-xs">
                <p className="font-bold text-bb-charcoal-800 text-xs">{deal.stage}</p>
                {deal.maxDays && (
                  <span className="text-xs bg-white px-xs py-0.5 rounded text-bb-charcoal-500">{deal.maxDays}d</span>
                )}
              </div>
              <p className="text-xs text-bb-charcoal-600 mb-xs line-clamp-2">{deal.definition}</p>
              <div className="pt-xs border-t border-bb-slate-200">
                <p className="text-xs text-bb-charcoal-500 line-clamp-1">
                  <span className="font-semibold">Exit:</span> {deal.exitCriteria}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stage Flow Visualization */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <h3 className="text-sm font-bold text-bb-charcoal-800 mb-sm text-center">Pipeline Flow</h3>
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="w-8 h-8 mx-auto bg-bb-steel-500 rounded-full flex items-center justify-center text-white text-xs font-bold mb-xs">1-3</div>
              <p className="text-xs font-semibold text-bb-steel-700">Early Stage</p>
              <p className="text-xs text-bb-charcoal-500">Lead → Qualify</p>
            </div>
            <span className="text-bb-charcoal-300 text-lg">→</span>
            <div className="text-center flex-1">
              <div className="w-8 h-8 mx-auto bg-bb-charcoal-500 rounded-full flex items-center justify-center text-white text-xs font-bold mb-xs">4-6</div>
              <p className="text-xs font-semibold text-bb-charcoal-700">Mid Stage</p>
              <p className="text-xs text-bb-charcoal-500">Quote → Negotiate</p>
            </div>
            <span className="text-bb-charcoal-300 text-lg">→</span>
            <div className="text-center flex-1">
              <div className="w-8 h-8 mx-auto bg-bb-forest-500 rounded-full flex items-center justify-center text-white text-xs font-bold mb-xs">7-8</div>
              <p className="text-xs font-semibold text-bb-forest-700">Won</p>
              <p className="text-xs text-bb-charcoal-500">First Load → Active</p>
            </div>
          </div>
        </div>

        {/* Tracking Note */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Tracking:</span>
            {' '}Every deal in HubSpot. Every stage has a next action and date. Weekly pipeline reviews with Chris.
          </p>
        </div>
      </div>
    </Slide>
  )
}
