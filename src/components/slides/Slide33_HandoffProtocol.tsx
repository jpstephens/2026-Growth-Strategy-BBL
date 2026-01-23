import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { handoffProtocol } from '../../data/teamStructure'

export default function Slide33_HandoffProtocol() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Handoff Protocol</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Sales to operations. Patrick to David. Seamless and documented.</p>

        <div className="space-y-md">
          {handoffProtocol.map((step, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-border bg-bb-light-gray p-lg">
              <div className="flex items-start gap-md mb-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bb-cyan text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-bb-black text-lg">{step.action}</p>
                  <p className="text-sm text-bb-dark-gray italic mt-xs">{step.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Callout variant="success" title="Why This Matters">
          <p className="mb-sm">
            A clean handoff means the customer relationship stays intact. Patrick owns the sale. David owns the execution. No confusion. No drops. No customer thinking they need to manage both people.
          </p>
          <p className="text-sm italic">
            "One ops contact, no confusion, David can move fast."
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
