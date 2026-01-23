import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide46_WhatMustBeTrue() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-xl text-center">What Must Be True</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">The core assumptions behind this plan</p>

        <div className="space-y-lg">
          <Callout variant="info" title="Market Assumptions">
            <ul className="space-y-md text-base">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Freight demand exists in our target lanes</p>
                  <p className="text-sm text-bb-dark-gray">Building products, metal fabrication, plastics, and automotive JIT have freight volume we can capture</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Our margin stays above $200/load minimum</p>
                  <p className="text-sm text-bb-dark-gray">We don't chase bad volume. Every customer must support $200+ average margin</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Carriers remain reliable and available</p>
                  <p className="text-sm text-bb-dark-gray">Carrier relationships don't deteriorate with volume growth. Tiering system scales support</p>
                </div>
              </li>
            </ul>
          </Callout>

          <Callout variant="info" title="Team Assumptions">
            <ul className="space-y-md text-base">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Patrick executes with discipline</p>
                  <p className="text-sm text-bb-dark-gray">Protected calling time is protected. 200+ dials/week happens. Conversion rates hold</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">David operates without sales interruptions</p>
                  <p className="text-sm text-bb-dark-gray">Operations owner has full autonomy on existing accounts. Decisions don't wait for Patrick</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Additional hires happen when triggered</p>
                  <p className="text-sm text-bb-dark-gray">Rep #2 hired in Q2 if Patrick hits 4+ customers/month. Rep #3 if system scales</p>
                </div>
              </li>
            </ul>
          </Callout>

          <Callout variant="info" title="Risk Assumptions">
            <ul className="space-y-md text-base">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">Churn stays below 5% monthly</p>
                  <p className="text-sm text-bb-dark-gray">Customer retention improves with dedicated operations management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-md">✓</span>
                <div>
                  <p className="font-semibold text-bb-black">No major customer loss (Clearway, Frontier stable)</p>
                  <p className="text-sm text-bb-dark-gray">Top 2 accounts remain stable. Diversification reduces concentration risk</p>
                </div>
              </li>
            </ul>
          </Callout>

          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg mt-lg">
            <p className="text-sm text-bb-dark-gray text-center">
              <span className="font-semibold text-bb-black">These assumptions are testable.</span> We'll know within 60 days if they hold. If they don't, we pivot.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
