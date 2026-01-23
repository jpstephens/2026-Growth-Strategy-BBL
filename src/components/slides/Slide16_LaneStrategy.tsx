import Slide from '../layout/Slide'
import { highMarginLanes, destructiveLanes } from '../../data/currentState'

export default function Slide16_LaneStrategy() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-2xl text-center">Lane Strategy</h2>

        <div className="grid grid-cols-2 gap-xl mb-lg">
          {/* High-Margin Lanes */}
          <div className="border-2 border-bb-border rounded-lg p-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-md">Expand These Lanes</h3>
            <div className="space-y-md">
              {highMarginLanes.map((lane, idx) => (
                <div key={idx} className="bg-bb-light-gray p-md rounded-lg">
                  <p className="font-semibold text-base text-bb-black">{lane.lane}</p>
                  <p className="text-sm text-bb-dark-gray mb-sm">{lane.loads} loads | ${lane.avgMargin}/load avg</p>
                  <p className="text-sm text-bb-cyan italic">{lane.opportunity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Destructive Lanes */}
          <div className="border-2 border-bb-border rounded-lg p-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-md">Avoid or Reprice</h3>
            <div className="space-y-md">
              {destructiveLanes.map((lane, idx) => (
                <div key={idx} className="bg-red-50 border border-red-200 p-md rounded-lg">
                  <p className="font-semibold text-base text-bb-black">{lane.lane}</p>
                  <p className="text-sm text-bb-dark-gray mb-sm">{lane.loads} loads | ${lane.avgMargin}/load avg</p>
                  <p className="text-sm font-bold text-red-600">{lane.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg text-center">
          <p className="text-lg text-bb-dark-gray">
            <strong>Lane Rule:</strong> Do not book WA/OR → Vernon CA lanes unless the customer agrees to a rate increase of at least $250+.
          </p>
          <p className="text-base text-bb-dark-gray mt-md">
            These lanes destroy margin. When a customer requests them, quote market + $250 premium.
          </p>
        </div>
      </div>
    </Slide>
  )
}
