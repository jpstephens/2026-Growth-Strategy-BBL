import Slide from '../layout/Slide'
import { highMarginLanes, destructiveLanes } from '../../data/currentState'

export default function Slide16_LaneStrategy() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900">Lane Strategy</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mt-md mb-lg" />
        </div>

        <div className="grid grid-cols-2 gap-xl mb-2xl">
          {/* High-Margin Lanes */}
          <div className="border-2 border-bb-slate-300 rounded-2xl p-lg shadow-lg bg-white">
            <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-md">Expand These Lanes</h3>
            <div className="space-y-md">
              {highMarginLanes.map((lane, idx) => (
                <div key={idx} className="bg-white p-md rounded-lg border border-bb-slate-300">
                  <p className="font-semibold text-base text-bb-navy-900">{lane.lane}</p>
                  <p className="text-sm text-bb-slate-700 mb-sm">{lane.loads} loads | ${lane.avgMargin}/load avg</p>
                  <p className="text-sm text-bb-electric-700 italic">{lane.opportunity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Destructive Lanes */}
          <div className="border-2 border-bb-slate-300 rounded-2xl p-lg shadow-lg bg-white">
            <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-md">Avoid or Reprice</h3>
            <div className="space-y-md">
              {destructiveLanes.map((lane, idx) => (
                <div key={idx} className="bg-red-50 border border-red-200 p-md rounded-lg">
                  <p className="font-semibold text-base text-bb-navy-900">{lane.lane}</p>
                  <p className="text-sm text-bb-slate-700 mb-sm">{lane.loads} loads | ${lane.avgMargin}/load avg</p>
                  <p className="text-sm font-bold text-red-600">{lane.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-bb-electric-400 p-lg rounded-2xl text-center shadow-lg">
          <p className="text-lg text-bb-slate-700">
            <strong>Lane Rule:</strong> Do not book WA/OR → Vernon CA lanes unless the customer agrees to a rate increase of at least $250+.
          </p>
          <p className="text-base text-bb-slate-700 mt-md">
            These lanes destroy margin. When a customer requests them, quote market + $250 premium.
          </p>
        </div>
      </div>
    </Slide>
  )
}
