import Slide from '../layout/Slide'
import TimeSeriesChart from '../charts/TimeSeriesChart'
import MetricCardEnhanced from '../content/MetricCardEnhanced'
import { customerRamp } from '../../data/financialProjections'

export default function Slide38_CustomerRampCurve() {
  // Transform data for TimeSeriesChart
  const chartData = customerRamp.map(row => ({
    name: `M${row.month}`,
    value: row.marginPerMonth,
    loads: row.loadsPerMonth,
    cumulative: row.cumulative,
  }))

  // Calculate key metrics
  const totalLTV = customerRamp[customerRamp.length - 1].cumulative
  const maturityMonth = customerRamp.findIndex(r => r.loadsPerMonth >= 20) + 1
  const breakEvenMonth = customerRamp.findIndex(r => r.cumulative >= 3000) + 1 // Assume ~$3K acquisition cost

  // Phase definitions
  const phases = [
    {
      name: 'Trial',
      months: '1-2',
      loadsRange: '1.5-5',
      marginRange: '$312-$1,040',
      color: 'bg-bb-sunset-500',
      description: 'Low volume, building trust',
    },
    {
      name: 'Acceleration',
      months: '3-5',
      loadsRange: '10-15',
      marginRange: '$2,080-$3,120',
      color: 'bg-bb-electric-500',
      description: 'Growing confidence, increasing volume',
    },
    {
      name: 'Maturity',
      months: '6-12',
      loadsRange: '18-20',
      marginRange: '$3,744-$4,160',
      color: 'bg-bb-emerald-500',
      description: 'Consistent, predictable revenue',
    },
    {
      name: '12-Month LTV',
      months: 'Full Year',
      loadsRange: '~182 total',
      marginRange: '$37,752',
      color: 'bg-bb-navy-500',
      description: 'Total value per customer',
    },
  ]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Customer Ramp Curve</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-emerald-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-600">Months 1-12: How quickly a new customer ramps to full profitability</p>
        </div>

        {/* Key Metrics Summary */}
        <div className="grid grid-cols-4 gap-lg">
          <MetricCardEnhanced
            label="12-Month LTV"
            value={`$${totalLTV.toLocaleString()}`}
            size="sm"
            color="emerald"
            icon={<span>$</span>}
          />
          <MetricCardEnhanced
            label="Maturity Month"
            value={`Month ${maturityMonth}`}
            size="sm"
            color="electric"
            icon={<span>M</span>}
          />
          <MetricCardEnhanced
            label="Mature Monthly Margin"
            value="$4,160"
            size="sm"
            color="sunset"
          />
          <MetricCardEnhanced
            label="Break-Even"
            value={`~Month ${breakEvenMonth}`}
            size="sm"
            color="navy"
          />
        </div>

        {/* Margin Ramp Chart */}
        <TimeSeriesChart
          data={chartData}
          dataKey="value"
          title="Monthly Margin per Customer"
          yAxisLabel="Margin ($)"
          height={280}
          gradient={{ from: '#10b981', to: '#ecfdf5' }}
          showLegend={false}
        />

        {/* Phase Breakdown Cards */}
        <div>
          <h3 className="text-sm font-semibold text-bb-slate-600 uppercase tracking-wide mb-lg">Customer Lifecycle Phases</h3>
          <div className="grid grid-cols-4 gap-lg">
            {phases.map((phase, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-bb-slate-200 shadow-md overflow-hidden">
                <div className={`${phase.color} text-white px-lg py-sm`}>
                  <p className="font-bold">{phase.name}</p>
                  <p className="text-xs opacity-90">Months {phase.months}</p>
                </div>
                <div className="p-lg space-y-sm">
                  <div className="flex justify-between text-sm">
                    <span className="text-bb-slate-600">Loads:</span>
                    <span className="font-semibold text-bb-navy-900">{phase.loadsRange}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-bb-slate-600">Margin:</span>
                    <span className="font-semibold text-bb-emerald-600">{phase.marginRange}</span>
                  </div>
                  <p className="text-xs text-bb-slate-600 italic pt-sm border-t">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment-Return Framework */}
        <div className="bg-gradient-to-r from-bb-navy-900 to-bb-navy-800 rounded-2xl p-xl shadow-lg">
          <h4 className="text-lg font-bold text-white mb-lg">Investment-Return Framework</h4>
          <div className="grid grid-cols-3 gap-xl">
            <div className="bg-white/10 rounded-xl p-lg">
              <p className="text-sm font-semibold text-bb-sunset-400 mb-xs">Investment Phase (M1-2)</p>
              <p className="text-2xl font-display font-bold text-white">$1,352</p>
              <p className="text-xs text-bb-slate-400 mt-xs">cumulative margin</p>
            </div>
            <div className="bg-white/10 rounded-xl p-lg">
              <p className="text-sm font-semibold text-bb-electric-400 mb-xs">Growth Phase (M3-5)</p>
              <p className="text-2xl font-display font-bold text-white">$9,048</p>
              <p className="text-xs text-bb-slate-400 mt-xs">cumulative margin</p>
            </div>
            <div className="bg-white/10 rounded-xl p-lg">
              <p className="text-sm font-semibold text-bb-emerald-400 mb-xs">Payoff Phase (M6-12)</p>
              <p className="text-2xl font-display font-bold text-white">$37,752</p>
              <p className="text-xs text-bb-slate-400 mt-xs">total LTV</p>
            </div>
          </div>
          <p className="text-sm text-bb-slate-400 mt-lg text-center italic">
            This is why we need 65-70 customers—a full portfolio at various maturity stages equals predictable revenue.
          </p>
        </div>

        {/* Expandable Full Table */}
        <details className="group">
          <summary className="cursor-pointer text-bb-electric-600 font-semibold hover:text-bb-electric-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Complete 12-Month Ramp Data
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-bb-electric-500 to-bb-emerald-500 text-white">
                <tr>
                  <th className="px-lg py-md text-center font-bold">Month</th>
                  <th className="px-lg py-md text-center font-bold">Loads/Month</th>
                  <th className="px-lg py-md text-center font-bold">Margin/Month</th>
                  <th className="px-lg py-md text-center font-bold">Cumulative Margin</th>
                  <th className="px-lg py-md text-center font-bold">Phase</th>
                </tr>
              </thead>
              <tbody>
                {customerRamp.map((row, idx) => {
                  let phase = 'Trial'
                  let phaseColor = 'text-bb-sunset-600'
                  if (row.month >= 3 && row.month <= 5) {
                    phase = 'Acceleration'
                    phaseColor = 'text-bb-electric-600'
                  } else if (row.month >= 6) {
                    phase = 'Maturity'
                    phaseColor = 'text-bb-emerald-600'
                  }

                  return (
                    <tr
                      key={idx}
                      className={`border-t transition-colors ${idx % 2 === 0 ? 'bg-white hover:bg-bb-emerald-50' : 'bg-bb-slate-50 hover:bg-bb-emerald-50'}`}
                    >
                      <td className="px-lg py-md text-center font-semibold text-bb-navy-900">M{row.month}</td>
                      <td className="px-lg py-md text-center text-bb-slate-700">{row.loadsPerMonth}</td>
                      <td className="px-lg py-md text-center font-semibold text-bb-electric-700">${row.marginPerMonth.toLocaleString()}</td>
                      <td className="px-lg py-md text-center font-bold text-bb-emerald-600">${row.cumulative.toLocaleString()}</td>
                      <td className={`px-lg py-md text-center font-semibold ${phaseColor}`}>{phase}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </Slide>
  )
}
