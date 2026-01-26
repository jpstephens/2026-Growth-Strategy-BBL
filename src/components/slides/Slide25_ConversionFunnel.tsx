import Slide from '../layout/Slide'
import FunnelChart from '../charts/FunnelChart'
import MetricCardEnhanced from '../content/MetricCardEnhanced'
import { conversionFunnel } from '../../data/salesSystem'

export default function Slide25_ConversionFunnel() {
  // Transform data for FunnelChart (use monthly numbers)
  const funnelData = [
    { label: 'Dials', value: 800 },
    { label: 'Conversations', value: 140 }, // 17.5% connect rate (avg of 15-20%)
    { label: 'Qualified', value: 36 }, // 25% of conversations
    { label: 'New Customers', value: 18 }, // 50% close rate
  ]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Sales Conversion Funnel
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-emerald-500 mx-auto rounded-full mb-md" />
          <p className="text-xl text-bb-slate-600">
            From 800 dials to 4-5 new customers monthly (per rep)
          </p>
        </div>

        {/* Conversion Rate Cards */}
        <div className="grid grid-cols-4 gap-lg">
          <MetricCardEnhanced
            label="Connect Rate"
            value="15-20%"
            size="sm"
            color="electric"
            owner="Patrick"
            frequency="Daily tracking"
          />
          <MetricCardEnhanced
            label="Qualify Rate"
            value="25%"
            size="sm"
            color="sunset"
            owner="Patrick/Chris"
            frequency="Weekly review"
          />
          <MetricCardEnhanced
            label="Close Rate"
            value="50%"
            size="sm"
            color="emerald"
            owner="Patrick"
            frequency="Monthly"
          />
          <MetricCardEnhanced
            label="Overall Conversion"
            value="2.25%"
            size="sm"
            color="navy"
            owner="Chris"
            frequency="Monthly"
          />
        </div>

        {/* Main Funnel Visualization */}
        <FunnelChart
          stages={funnelData}
          title="Monthly Sales Funnel (Per Rep)"
          height={340}
          showValues={true}
          showConversionRates={true}
        />

        {/* Why These Numbers Work */}
        <div className="bg-gradient-to-r from-bb-emerald-50 to-bb-electric-50 rounded-2xl p-xl border-2 border-bb-emerald-300 shadow-md">
          <div className="flex items-start gap-lg">
            <div className="bg-bb-emerald-500 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0">
              ?
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-bb-navy-900 mb-md">Why These Numbers Work</h4>
              <div className="grid grid-cols-3 gap-xl">
                <div>
                  <p className="text-sm font-semibold text-bb-emerald-700 mb-xs">Conservative Rates</p>
                  <p className="text-sm text-bb-slate-700">15-20% connect rate is achievable with targeted lists. Industry averages are 8-12%.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-bb-emerald-700 mb-xs">Qualification Discipline</p>
                  <p className="text-sm text-bb-slate-700">25% qualify rate ensures we're focusing on real opportunities, not wasting time.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-bb-emerald-700 mb-xs">Scalable Model</p>
                  <p className="text-sm text-bb-slate-700">Rep #2 and #3 follow the same funnel. More reps = proportionally more customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Math */}
        <div className="bg-bb-navy-900 rounded-2xl p-xl shadow-lg">
          <p className="text-2xl font-bold text-white text-center mb-lg">
            The Math: <span className="text-bb-electric-400">200 dials/week</span> → <span className="text-bb-sunset-400">30-40 conversations</span> → <span className="text-bb-emerald-400">8-10 qualified</span> → <span className="text-white">4-5 customers</span>
          </p>
          <p className="text-bb-slate-400 text-center">
            This assumes Patrick hits activity targets and stays disciplined with qualification.
          </p>
        </div>

        {/* Expandable Detail Table */}
        <details className="group">
          <summary className="cursor-pointer text-bb-electric-600 font-semibold hover:text-bb-electric-700 flex items-center gap-sm">
            <span className="group-open:rotate-90 transition-transform">&#9654;</span>
            View Detailed Funnel Breakdown
          </summary>
          <div className="mt-lg overflow-x-auto rounded-xl border border-bb-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-bb-navy-900 text-white">
                <tr>
                  <th className="px-lg py-md text-left font-semibold">Stage</th>
                  <th className="px-lg py-md text-center font-semibold">Conversion Rate</th>
                  <th className="px-lg py-md text-center font-semibold">Weekly Result</th>
                  <th className="px-lg py-md text-center font-semibold">Monthly Result</th>
                </tr>
              </thead>
              <tbody>
                {conversionFunnel.map((stage, idx) => (
                  <tr key={idx} className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-slate-50'}`}>
                    <td className="px-lg py-md font-semibold text-bb-navy-900">{stage.metric}</td>
                    <td className="px-lg py-md text-center">
                      {stage.rate !== '—' ? (
                        <span className="bg-bb-electric-100 text-bb-electric-700 px-md py-xs rounded-full font-semibold text-xs">
                          {stage.rate}
                        </span>
                      ) : (
                        <span className="text-bb-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-lg py-md text-center font-semibold text-bb-slate-700">{stage.weeklyResult}</td>
                    <td className="px-lg py-md text-center font-bold text-bb-emerald-600">{stage.monthlyResult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </Slide>
  )
}
