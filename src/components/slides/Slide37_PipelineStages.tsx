import Slide from '../layout/Slide'
import { dealStages } from '../../data/pipelineConfig'

export default function Slide37_PipelineStages() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Pipeline Stages</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">8 stages from lead to active customer</p>

        <div className="space-y-md">
          {dealStages.map((deal, idx) => (
            <div key={idx} className={`rounded-lg border-2 p-lg ${
              idx < 3
                ? 'border-bb-cyan bg-blue-50'
                : idx < 6
                  ? 'border-bb-border bg-bb-light-gray'
                  : 'border-bb-green bg-green-50'
            }`}>
              <div className="flex items-start justify-between mb-sm">
                <p className="font-bold text-bb-black text-lg">{deal.stage}</p>
                {deal.maxDays && <p className="text-xs font-semibold bg-white px-sm py-xs rounded text-bb-dark-gray">Max: {deal.maxDays}d</p>}
              </div>
              <p className="text-sm text-bb-dark-gray mb-sm italic">{deal.definition}</p>
              <div className="pt-sm border-t border-current">
                <p className="text-xs font-semibold text-bb-dark-gray">Exit:</p>
                <p className="text-sm text-bb-dark-gray">{deal.exitCriteria}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="text-sm text-bb-dark-gray">
            <strong>Tracking:</strong> Every deal in HubSpot. Every deal must have a stage. Every stage must have a next action and date. Weekly pipeline reviews with Chris assess movement and velocity.
          </p>
        </div>
      </div>
    </Slide>
  )
}
