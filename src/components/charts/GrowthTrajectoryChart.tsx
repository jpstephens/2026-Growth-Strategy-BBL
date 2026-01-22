import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { scenario1, scenario2 } from '../../data/financialProjections'

export default function GrowthTrajectoryChart() {
  // Combine both scenarios for comparison
  const data = scenario1.map((month, index) => ({
    month: month.month,
    'Patrick Only': month.estNetProfit,
    'With Hires': scenario2[index].estNetProfit,
  }))

  return (
    <div className="w-full h-96 mt-md">
      <h3 className="text-h3 mb-md">Growth Trajectory: $12K to $100K Monthly Profit</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
          <XAxis dataKey="month" stroke="#313131" />
          <YAxis stroke="#313131" label={{ value: 'Net Profit ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            formatter={(value: any) => typeof value === 'number' ? `$${value.toLocaleString()}` : value}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #abb8c3' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="Patrick Only"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="With Hires"
            stroke="#00d084"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          {/* Goal line */}
          <Line type="linear" dataKey={() => 100000} stroke="#0693e3" strokeDasharray="5 5" name="$100K Target" isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-md space-y-xs text-sm text-bb-dark-gray">
        <p><strong>Patrick Only (Red):</strong> Reaches ~$69K by December with zero bad months</p>
        <p><strong>With Hires (Green):</strong> Reaches $102K+ by December with performance-triggered hiring</p>
      </div>
    </div>
  )
}
