import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { scenario1, scenario2 } from '../../data/financialProjections'

export default function ScenarioComparisonChart() {
  const data = scenario1.map((month, index) => ({
    month: month.month,
    scenario1: month.estNetProfit,
    scenario2: scenario2[index].estNetProfit,
    gap: scenario2[index].estNetProfit - month.estNetProfit,
  }))

  return (
    <div className="w-full h-96 mt-md">
      <h3 className="text-h3 mb-md">Hiring Impact: Gap Between Scenarios</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorScenario1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorScenario2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00d084" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00d084" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
          <XAxis dataKey="month" stroke="#313131" />
          <YAxis stroke="#313131" label={{ value: 'Net Profit ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            formatter={(value: any) => typeof value === 'number' ? `$${value.toLocaleString()}` : value}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #abb8c3' }}
          />
          <Area
            type="monotone"
            dataKey="scenario1"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorScenario1)"
            name="Patrick Only"
            isAnimationActive={false}
          />
          <Area
            type="monotone"
            dataKey="scenario2"
            stroke="#00d084"
            fillOpacity={1}
            fill="url(#colorScenario2)"
            name="With Hires"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-md p-md bg-bb-cyan/10 border border-bb-cyan rounded-md">
        <p className="text-sm text-bb-dark-gray">
          The <strong>gap between scenarios</strong> shows the cumulative impact of hiring. By December, the difference is $33K/month in profit—far exceeding the cost of new hires.
        </p>
      </div>
    </div>
  )
}
