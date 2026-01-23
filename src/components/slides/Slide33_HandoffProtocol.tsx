import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { handoffProtocol } from '../../data/teamStructure'

export default function Slide33_HandoffProtocol() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Handoff Protocol</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">Sales to operations. Patrick to David. Seamless and documented.</p>
        </div>

        {/* Steps */}
        <div className="space-y-md">
          {handoffProtocol.map((step, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-electric-300 bg-white p-lg shadow-lg">
              <div className="flex items-start gap-md mb-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-bb-navy-900 text-lg">{step.action}</p>
                  <p className="text-sm text-bb-slate-600 italic mt-xs">{step.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mb-2xl">
          <Callout variant="success" title="Why This Matters">
            <p className="mb-sm">
              A clean handoff means the customer relationship stays intact. Patrick owns the sale. David owns the execution. No confusion. No drops. No customer thinking they need to manage both people.
            </p>
            <p className="text-sm italic">
              "One ops contact, no confusion, David can move fast."
            </p>
          </Callout>
        </div>
      </div>
    </Slide>
  )
}
