import Slide from '../layout/Slide'
import { customerRamp } from '../../data/financialProjections'

export default function Slide38_CustomerRampCurve() {
  // Calculate key metrics
  const totalLTV = customerRamp[customerRamp.length - 1].cumulative
  const maturityMonth = customerRamp.findIndex(r => r.loadsPerMonth >= 20) + 1

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-md">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-charcoal-800 mb-sm">Customer Ramp Curve</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-steel-500 to-bb-forest-500 mx-auto rounded-full mb-sm" />
          <p className="text-base text-bb-charcoal-600">How a new customer ramps to full profitability over 12 months</p>
        </div>

        <div className="grid grid-cols-2 gap-md">
          {/* Left: Key Metrics */}
          <div className="space-y-sm">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-sm">
              <div className="bg-gradient-to-br from-bb-forest-50 to-white rounded-lg border-2 border-bb-forest-300 p-sm text-center">
                <p className="text-2xl font-bold text-bb-forest-600">${totalLTV.toLocaleString()}</p>
                <p className="text-xs font-semibold text-bb-charcoal-700">12-Month LTV</p>
              </div>
              <div className="bg-gradient-to-br from-bb-steel-50 to-white rounded-lg border-2 border-bb-steel-300 p-sm text-center">
                <p className="text-2xl font-bold text-bb-steel-600">Month {maturityMonth}</p>
                <p className="text-xs font-semibold text-bb-charcoal-700">Full Maturity</p>
              </div>
            </div>

            {/* Phase Cards */}
            <div className="bg-white rounded-xl border-2 border-bb-slate-200 p-sm shadow-sm">
              <h3 className="text-xs font-bold text-bb-charcoal-800 mb-sm">Customer Lifecycle Phases</h3>
              <div className="space-y-xs">
                <div className="flex items-center justify-between p-xs bg-bb-amber-50 rounded border border-bb-amber-200">
                  <div className="flex items-center gap-xs">
                    <span className="w-5 h-5 bg-bb-amber-500 rounded text-white text-xs font-bold flex items-center justify-center">1</span>
                    <span className="text-xs font-semibold text-bb-amber-700">Trial (M1-2)</span>
                  </div>
                  <span className="text-xs text-bb-charcoal-600">1.5-5 loads → $312-$1,040</span>
                </div>
                <div className="flex items-center justify-between p-xs bg-bb-steel-50 rounded border border-bb-steel-200">
                  <div className="flex items-center gap-xs">
                    <span className="w-5 h-5 bg-bb-steel-500 rounded text-white text-xs font-bold flex items-center justify-center">2</span>
                    <span className="text-xs font-semibold text-bb-steel-700">Acceleration (M3-5)</span>
                  </div>
                  <span className="text-xs text-bb-charcoal-600">10-15 loads → $2,080-$3,120</span>
                </div>
                <div className="flex items-center justify-between p-xs bg-bb-forest-50 rounded border border-bb-forest-200">
                  <div className="flex items-center gap-xs">
                    <span className="w-5 h-5 bg-bb-forest-500 rounded text-white text-xs font-bold flex items-center justify-center">3</span>
                    <span className="text-xs font-semibold text-bb-forest-700">Maturity (M6-12)</span>
                  </div>
                  <span className="text-xs text-bb-charcoal-600">18-20 loads → $3,744-$4,160</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Monthly Data Table */}
          <div className="bg-white rounded-xl border-2 border-bb-slate-200 shadow-sm overflow-hidden">
            <div className="bg-bb-forest-600 px-sm py-xs">
              <h3 className="text-xs font-bold text-white text-center">12-Month Ramp Data</h3>
            </div>
            <div className="overflow-y-auto max-h-48">
              <table className="w-full text-xs">
                <thead className="bg-bb-slate-100 sticky top-0">
                  <tr>
                    <th className="px-xs py-xs text-left text-bb-charcoal-700">Month</th>
                    <th className="px-xs py-xs text-center text-bb-charcoal-700">Loads</th>
                    <th className="px-xs py-xs text-center text-bb-charcoal-700">Margin</th>
                    <th className="px-xs py-xs text-right text-bb-charcoal-700">Cumulative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bb-slate-100">
                  {customerRamp.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'}>
                      <td className="px-xs py-xs font-semibold text-bb-charcoal-800">M{row.month}</td>
                      <td className="px-xs py-xs text-center text-bb-charcoal-600">{row.loadsPerMonth}</td>
                      <td className="px-xs py-xs text-center text-bb-steel-600 font-semibold">${row.marginPerMonth.toLocaleString()}</td>
                      <td className="px-xs py-xs text-right text-bb-forest-600 font-semibold">${row.cumulative.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Investment-Return Framework */}
        <div className="bg-gradient-to-br from-bb-forest-600 to-bb-forest-700 rounded-xl p-md shadow-lg">
          <h4 className="text-sm font-bold text-white mb-sm text-center">Investment → Return Framework</h4>
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-white/10 rounded-lg p-sm text-center">
              <p className="text-xs font-semibold text-bb-amber-200 mb-xs">Investment (M1-2)</p>
              <p className="text-lg font-bold text-white">$1,352</p>
            </div>
            <div className="bg-white/10 rounded-lg p-sm text-center">
              <p className="text-xs font-semibold text-bb-steel-200 mb-xs">Growth (M3-5)</p>
              <p className="text-lg font-bold text-white">$9,048</p>
            </div>
            <div className="bg-white/10 rounded-lg p-sm text-center">
              <p className="text-xs font-semibold text-bb-forest-200 mb-xs">Payoff (M6-12)</p>
              <p className="text-lg font-bold text-white">$37,752</p>
            </div>
          </div>
          <p className="text-xs text-bb-forest-100 mt-sm text-center italic">
            65-70 customers at various maturity stages = predictable monthly revenue
          </p>
        </div>
      </div>
    </Slide>
  )
}
