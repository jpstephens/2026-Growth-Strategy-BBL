import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { buildingProducts } from '../../data/naicsCodes'

export default function Slide11_NAICSBuildingProducts() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Building Products (25%)</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-lg">Heavy, consistent, regional delivery</p>

        <div className="grid grid-cols-2 gap-lg mb-2xl">
          {buildingProducts.map((code, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-slate-300 bg-white p-lg shadow-lg">
              <p className="text-sm font-mono font-bold text-bb-cyan mb-xs">{code.code}</p>
              <p className="font-semibold text-bb-navy-900 mb-sm">{code.industry}</p>
              <p className="text-xs text-bb-slate-700 mb-sm italic">{code.why}</p>
              <p className="text-xs text-bb-slate-700 border-t border-bb-slate-300 pt-xs">
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
