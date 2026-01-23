import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { buildingProducts } from '../../data/naicsCodes'

export default function Slide11_NAICSBuildingProducts() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Building Products (25%)</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Heavy, consistent, regional delivery</p>

        <div className="grid grid-cols-2 gap-lg">
          {buildingProducts.map((code, idx) => (
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

        <Callout variant="success" title="Sales Approach">
          <p>
            These companies have consistent regional freight needs (cement, concrete, lumber, components). Target purchasing managers and logistics coordinators. Strong margin potential ($200+) with repeat volume.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
