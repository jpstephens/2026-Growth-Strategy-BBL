import Slide from '../layout/Slide'

export default function Slide12_Roadmap() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-2xl text-center">2026 Roadmap</h2>

        <div className="space-y-lg">
          {/* Q1 */}
          <div className="border-2 border-bb-border rounded-lg p-lg">
            <div className="flex items-baseline gap-md mb-md">
              <h3 className="text-3xl font-bold text-bb-cyan">Q1</h3>
              <p className="text-lg text-bb-dark-gray">(Jan - Mar)</p>
            </div>
            <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Establish sales system (HubSpot pipeline, CRM discipline)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Hire/empower first dedicated sales rep</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Add 12-15 new customers</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Reach 17-20 active customers total</span>
              </li>
            </ul>
          </div>

          {/* Q2 */}
          <div className="border-2 border-bb-border rounded-lg p-lg">
            <div className="flex items-baseline gap-md mb-md">
              <h3 className="text-3xl font-bold text-bb-cyan">Q2</h3>
              <p className="text-lg text-bb-dark-gray">(Apr - Jun)</p>
            </div>
            <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Build carrier network in high-margin lanes</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Refine pricing model (margin target: $210+/load)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Add 15-18 new customers</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">→</span>
                <span>Reach 32-35 active customers total</span>
              </li>
            </ul>
          </div>

          {/* Q3 & Q4 */}
          <div className="grid grid-cols-2 gap-lg">
            <div className="border-2 border-bb-border rounded-lg p-lg">
              <div className="flex items-baseline gap-md mb-md">
                <h3 className="text-3xl font-bold text-bb-cyan">Q3</h3>
                <p className="text-lg text-bb-dark-gray">(Jul - Sep)</p>
              </div>
              <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
                <li className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">→</span>
                  <span>Scale sales (consider 2nd rep)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">→</span>
                  <span>Add 18-20 new customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">→</span>
                  <span>Reach 50-55 total</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-bb-cyan rounded-lg p-lg bg-bb-cyan/10">
              <div className="flex items-baseline gap-md mb-md">
                <h3 className="text-3xl font-bold text-bb-cyan">Q4</h3>
                <p className="text-lg text-bb-dark-gray">(Oct - Dec)</p>
              </div>
              <ul className="space-y-sm text-base text-bb-dark-gray ml-lg">
                <li className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">→</span>
                  <span>Push to $100K monthly profit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">→</span>
                  <span>Add 18-20 new customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">→</span>
                  <span>Reach 65-70 total customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
