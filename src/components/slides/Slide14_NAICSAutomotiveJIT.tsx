import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { automotiveJIT } from '../../data/naicsCodes'

export default function Slide14_NAICSAutomotiveJIT() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Automotive JIT (20%)</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">High-value components, time-critical, premium margins</p>

        <div className="grid grid-cols-2 gap-lg">
          {automotiveJIT.map((code, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-green bg-green-50 p-lg">
              <p className="text-sm font-mono font-bold text-bb-cyan mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-black mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-dark-gray mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-dark-gray border-t border-bb-green pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </div>

        <Callout variant="success" title="Highest Margin Vertical">
          <p>
            Automotive suppliers can't afford delays—JIT is a requirement, not an option. These are premium customers willing to pay for reliability. Potential for $250-400+ margins with quality service. Start with Tier 1 and 2 suppliers near assembly plants.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
