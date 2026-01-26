import Slide from '../layout/Slide'

export default function Slide41_SuccessCriteria() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        <div className="text-center">
          <h2 className="text-display font-bold text-bb-charcoal-800 font-display mb-sm">Success Milestones</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-amber-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">If we hit these, the plan is working</p>
        </div>

        {/* Timeline Visual */}
        <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-md shadow-sm">
          <div className="flex items-stretch gap-sm">
            {/* Q1 */}
            <div className="flex-1 bg-bb-amber-50 rounded-lg border-2 border-bb-amber-300 p-sm">
              <p className="text-xs font-bold text-bb-amber-700 uppercase mb-sm text-center">Q1</p>
              <div className="space-y-xs">
                <div className="bg-white rounded p-xs border border-bb-amber-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">Week 2</p>
                  <p className="text-xs text-bb-charcoal-600">200+ dials/week</p>
                </div>
                <div className="bg-white rounded p-xs border border-bb-amber-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">March 31</p>
                  <p className="text-xs text-bb-charcoal-600">4-5 new customers</p>
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="flex-1 bg-bb-steel-50 rounded-lg border-2 border-bb-steel-300 p-sm">
              <p className="text-xs font-bold text-bb-steel-700 uppercase mb-sm text-center">Q2</p>
              <div className="space-y-xs">
                <div className="bg-white rounded p-xs border border-bb-steel-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">June 30</p>
                  <p className="text-xs text-bb-charcoal-600">David runs ops solo</p>
                </div>
                <div className="bg-white rounded p-xs border border-bb-steel-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">June 30</p>
                  <p className="text-xs text-bb-charcoal-600">Patrick 100% sales</p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="flex-1 bg-bb-charcoal-50 rounded-lg border-2 border-bb-charcoal-200 p-sm">
              <p className="text-xs font-bold text-bb-charcoal-600 uppercase mb-sm text-center">Q3</p>
              <div className="space-y-xs">
                <div className="bg-white rounded p-xs border border-bb-charcoal-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">Sept 30</p>
                  <p className="text-xs text-bb-charcoal-600">Rep #2 ramping</p>
                </div>
                <div className="bg-white rounded p-xs border border-bb-charcoal-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">Sept 30</p>
                  <p className="text-xs text-bb-charcoal-600">Team executing</p>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="flex-1 bg-bb-forest-50 rounded-lg border-2 border-bb-forest-300 p-sm">
              <p className="text-xs font-bold text-bb-forest-700 uppercase mb-sm text-center">Q4</p>
              <div className="space-y-xs">
                <div className="bg-white rounded p-xs border border-bb-forest-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">Dec 31</p>
                  <p className="text-xs text-bb-charcoal-600">65-70 customers</p>
                </div>
                <div className="bg-white rounded p-xs border border-bb-forest-200">
                  <p className="text-xs font-bold text-bb-charcoal-800">Dec 31</p>
                  <p className="text-xs text-bb-charcoal-600">$100K profit/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Numbers at a Glance */}
        <div className="grid grid-cols-4 gap-md">
          <div className="bg-gradient-to-br from-bb-amber-50 to-white rounded-xl border-2 border-bb-amber-300 p-md text-center">
            <p className="text-3xl font-display font-black text-bb-amber-600">200+</p>
            <p className="text-sm font-semibold text-bb-charcoal-700">Dials/Week</p>
            <p className="text-xs text-bb-charcoal-500">By Week 2</p>
          </div>
          <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-xl border-2 border-bb-steel-300 p-md text-center">
            <p className="text-3xl font-display font-black text-bb-steel-600">4-5</p>
            <p className="text-sm font-semibold text-bb-charcoal-700">New/Month</p>
            <p className="text-xs text-bb-charcoal-500">Sustained</p>
          </div>
          <div className="bg-gradient-to-br from-bb-charcoal-50 to-white rounded-xl border-2 border-bb-charcoal-200 p-md text-center">
            <p className="text-3xl font-display font-black text-bb-charcoal-700">65-70</p>
            <p className="text-sm font-semibold text-bb-charcoal-700">Customers</p>
            <p className="text-xs text-bb-charcoal-500">By Dec 31</p>
          </div>
          <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-xl border-2 border-bb-forest-300 p-md text-center">
            <p className="text-3xl font-display font-black text-bb-forest-600">$100K</p>
            <p className="text-sm font-semibold text-bb-charcoal-700">Net Profit</p>
            <p className="text-xs text-bb-charcoal-500">Monthly</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <p className="text-base text-center text-white">
            <span className="font-bold text-bb-amber-200">Track obsessively. Adjust immediately.</span> If we're off by 10%+, we diagnose and fix it that week.
          </p>
        </div>
      </div>
    </Slide>
  )
}
