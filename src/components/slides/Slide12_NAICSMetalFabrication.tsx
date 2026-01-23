import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { metalFabrication } from '../../data/naicsCodes'

export default function Slide12_NAICSMetalFabrication() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Metal Fabrication (30%)</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-lg">High-value components, JIT critical, premium margins</p>

        <div className="grid grid-cols-2 gap-lg mb-2xl">
          {metalFabrication.map((code, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-cyan bg-blue-50 p-lg shadow-lg">
              <p className="text-sm font-mono font-bold text-bb-cyan mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-navy-900 mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-slate-700 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-slate-700 border-t border-bb-cyan pt-xs">
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
