import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { automotiveJIT } from '../../data/naicsCodes'

export default function Slide14_NAICSAutomotiveJIT() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Automotive JIT (20%)</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">High-value components, time-critical, premium margins</p>

        <div className="grid grid-cols-2 gap-lg mb-2xl">
          {automotiveJIT.map((code, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-green bg-green-50 p-lg shadow-lg">
              <p className="text-sm font-mono font-bold text-bb-electric-700 mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-navy-900 mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-slate-700 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-slate-700 border-t border-bb-green pt-xs">
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
