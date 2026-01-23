import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide46_WhatMustBeTrue() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">What Must Be True</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-2xl text-bb-slate-700 mb-2xl text-center">The core assumptions behind this plan</p>

        <div className="space-y-2xl">
          <Callout variant="info" title="Market Assumptions">
            <ul className="space-y-md text-base">
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">Freight demand exists in our target lanes</p>
                  <p className="text-sm text-bb-slate-700">Building products, metal fabrication, plastics, and automotive JIT have freight volume we can capture</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">Our margin stays above $200/load minimum</p>
                  <p className="text-sm text-bb-slate-700">We don't chase bad volume. Every customer must support $200+ average margin</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">Carriers remain reliable and available</p>
                  <p className="text-sm text-bb-slate-700">Carrier relationships don't deteriorate with volume growth. Tiering system scales support</p>
                </div>
              </li>
            </ul>
          </Callout>

          <Callout variant="info" title="Team Assumptions">
            <ul className="space-y-md text-base">
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">Patrick executes with discipline</p>
                  <p className="text-sm text-bb-slate-700">Protected calling time is protected. 200+ dials/week happens. Conversion rates hold</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">David operates without sales interruptions</p>
                  <p className="text-sm text-bb-slate-700">Operations owner has full autonomy on existing accounts. Decisions don't wait for Patrick</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">Additional hires happen when triggered</p>
                  <p className="text-sm text-bb-slate-700">Rep #2 hired in Q2 if Patrick hits 4+ customers/month. Rep #3 if system scales</p>
                </div>
              </li>
            </ul>
          </Callout>

          <Callout variant="info" title="Risk Assumptions">
            <ul className="space-y-md text-base">
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">Churn stays below 5% monthly</p>
                  <p className="text-sm text-bb-slate-700">Customer retention improves with dedicated operations management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-700 font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-navy-900">No major customer loss (Clearway, Frontier stable)</p>
                  <p className="text-sm text-bb-slate-700">Top 2 accounts remain stable. Diversification reduces concentration risk</p>
                </div>
              </li>
            </ul>
          </Callout>

          <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl shadow-lg">
            <p className="text-sm text-bb-slate-700 text-center">
              <span className="font-semibold text-bb-navy-900">These assumptions are testable.</span> We'll know within 60 days if they hold. If they don't, we pivot.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
