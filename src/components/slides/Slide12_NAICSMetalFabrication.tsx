import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { metalFabrication } from '../../data/naicsCodes'

export default function Slide12_NAICSMetalFabrication() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Metal Fabrication (30%)</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">High-value components, JIT critical, premium margins</p>

        <div className="grid grid-cols-2 gap-lg">
          {metalFabrication.map((code, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-cyan bg-blue-50 p-lg">
              <p className="text-sm font-mono font-bold text-bb-cyan mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-black mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-dark-gray mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-dark-gray border-t border-bb-cyan pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </div>

        <Callout variant="success" title="Premium Opportunity">
          <p>
            Metal fabricators produce high-value components critical to manufacturing. These companies NEED reliable logistics and will pay for it. Potential for $250+ margins with long-haul and JIT premium.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
