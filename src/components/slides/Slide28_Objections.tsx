import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { callFramework } from '../../data/salesSystem'

export default function Slide28_Objections() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Handling Objections
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-sunset-500 to-bb-electric-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">
            Every "no" is actually a "not yet"
          </p>
        </div>

        {/* Objection/Response Pairs */}
        <div className="space-y-lg">
          {callFramework.objections.items.map((item, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              {/* Objection */}
              <div className="bg-gradient-to-r from-bb-burgundy-50 to-white border-l-6 border-bb-burgundy-500 p-lg">
                <p className="text-sm font-semibold text-bb-burgundy-700 italic mb-xs">Objection:</p>
                <p className="text-base text-bb-slate-700 italic">"{item.objection}"</p>
              </div>
              {/* Response */}
              <div className="bg-gradient-to-r from-bb-emerald-50 to-white border-l-6 border-bb-emerald-500 p-lg">
                <p className="text-sm font-semibold text-bb-emerald-700 mb-xs">Response:</p>
                <p className="text-base text-bb-slate-700 italic">"{item.response}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principle */}
        <Callout variant="info" title="Key Principle" size="lg">
          <p className="text-lg leading-relaxed">
            You're not trying to convince them today. You're trying to be the person they think of when they have a problem. Objections are just reasons to follow up later.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
