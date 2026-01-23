import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide41_SuccessCriteria() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Success Criteria by Quarter</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Measurable checkpoints. No guessing.</p>

        <div className="space-y-lg">
          {/* Q1 */}
          <div className="rounded-2xl border-2 border-bb-electric-500 bg-white shadow-lg p-lg">
            <p className="font-bold text-bb-navy-900 text-lg mb-md font-display">Q1: Foundation (Jan-Mar)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-slate-700 font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-electric-700">12-15</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-electric-700">22-25</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-electric-700">~$20K</p>
              </div>
            </div>
          </div>

          {/* Q2 */}
          <div className="rounded-2xl border-2 border-bb-slate-300 bg-white shadow-lg p-lg">
            <p className="font-bold text-bb-navy-900 text-lg mb-md font-display">Q2: Validation (Apr-Jun)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-slate-700 font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-navy-900">15-18</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-navy-900">35-40</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-navy-900">$30-35K</p>
              </div>
            </div>
          </div>

          {/* Q3 */}
          <div className="rounded-2xl border-2 border-bb-slate-300 bg-white shadow-lg p-lg">
            <p className="font-bold text-bb-navy-900 text-lg mb-md font-display">Q3: Scale (Jul-Sep)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-slate-700 font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-navy-900">18-20</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-navy-900">50-55</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-navy-900">$60-65K</p>
              </div>
            </div>
          </div>

          {/* Q4 */}
          <div className="rounded-2xl border-2 border-bb-electric-500 bg-white shadow-lg p-lg">
            <p className="font-bold text-bb-navy-900 text-lg mb-md font-display">Q4: Push to Target (Oct-Dec)</p>
            <div className="grid grid-cols-3 gap-md text-sm">
              <div>
                <p className="text-bb-slate-700 font-semibold">New Customers</p>
                <p className="text-xl font-bold text-bb-electric-700">18-20</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Total Active</p>
                <p className="text-xl font-bold text-bb-electric-700">65-70</p>
              </div>
              <div>
                <p className="text-bb-slate-700 font-semibold">Monthly Profit</p>
                <p className="text-xl font-bold text-bb-electric-700">$100K+</p>
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
