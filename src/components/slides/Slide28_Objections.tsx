import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { callFramework } from '../../data/salesSystem'

export default function Slide28_Objections() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Handling Objections</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Every "no" is actually a "not yet"</p>

        <div className="space-y-md">
          {callFramework.objections.items.map((item, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-border bg-bb-light-gray p-lg">
              <div className="bg-white rounded p-md mb-sm border-l-4 border-bb-cyan mb-md">
                <p className="text-sm font-semibold text-bb-dark-gray italic">"{item.objection}"</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-white rounded p-md border-l-4 border-bb-green">
                <p className="text-sm text-bb-dark-gray"><strong>Response:</strong></p>
                <p className="text-sm text-bb-dark-gray italic mt-xs">"{item.response}"</p>
              </div>
            </div>
          ))}
        </div>

        <Callout variant="info" title="Key Principle">
          <p>
            You're not trying to convince them today. You're trying to be the person they think of when they have a problem. Objections are just reasons to follow up later.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
