import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide41_SuccessCriteria() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Success Criteria by Quarter</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Measurable checkpoints. No guessing.</p>

        <div className="space-y-lg">
          {/* Q1 */}
          <div className="rounded-lg border-2 border-bb-cyan bg-blue-50 p-lg">
            <p className="font-bold text-bb-black text-lg mb-md">Q1: Foundation (Jan-Mar)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-dark-gray font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-cyan">12-15</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-cyan">22-25</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-cyan">~$20K</p>
              </div>
            </div>
          </div>

          {/* Q2 */}
          <div className="rounded-lg border-2 border-bb-border bg-bb-light-gray p-lg">
            <p className="font-bold text-bb-black text-lg mb-md">Q2: Validation (Apr-Jun)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-dark-gray font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-black">15-18</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-black">35-40</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-black">$30-35K</p>
              </div>
            </div>
          </div>

          {/* Q3 */}
          <div className="rounded-lg border-2 border-bb-border bg-bb-light-gray p-lg">
            <p className="font-bold text-bb-black text-lg mb-md">Q3: Scale (Jul-Sep)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-dark-gray font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-black">18-20</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-black">50-55</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-black">$60-65K</p>
              </div>
            </div>
          </div>

          {/* Q4 */}
          <div className="rounded-lg border-2 border-bb-green bg-green-50 p-lg">
            <p className="font-bold text-bb-black text-lg mb-md">Q4: Push to Target (Oct-Dec)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-dark-gray font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-green">18-20</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-green">65-70</p>
              </div>
              <div>
                <p className="text-bb-dark-gray font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-green">$100K+</p>
              </div>
            </div>
          </div>
        </div>

        <Callout variant="critical" title="Tracking & Adjustment">
          <p>
            These are NOT optional targets. They're the checkpoints that tell us if the plan is working. Monthly reviews assess progress. If we're off-track by more than 10%, we pivot on that specific lever immediately.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
