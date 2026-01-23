import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { plasticsPackaging } from '../../data/naicsCodes'

export default function Slide13_NAICSPlasticsPackaging() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Plastics & Packaging (25%)</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">High volume, retail/manufacturing distribution</p>

        <div className="grid grid-cols-2 gap-lg">
          {plasticsPackaging.map((code, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-border bg-bb-light-gray p-lg">
              <p className="text-sm font-mono font-bold text-bb-cyan mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-black mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-dark-gray mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-dark-gray border-t border-bb-border pt-xs">
                <strong>Typical:</strong> {code.typicalFreight}
              </p>
            </div>
          ))}
        </div>

        <Callout variant="info" title="Volume Play">
          <p>
            Plastics and packaging companies ship frequently to retailers and manufacturers. High-frequency shippers = relationship stickiness. Margins $180-250. Growth from increased shipping volume over time.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
