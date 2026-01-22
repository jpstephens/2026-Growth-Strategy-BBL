import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { customerRamp } from '../../data/financialProjections'

export default function CustomerRampChart() {
  return (
    <div className="w-full h-96 mt-md">
      <h3 className="text-h3 mb-md">Customer Value Growth Over 12 Months</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={customerRamp} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
          <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottomRight', offset: -5 }} stroke="#313131" />
          <YAxis yAxisId="left" stroke="#313131" label={{ value: 'Loads/Month', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" stroke="#313131" label={{ value: 'Margin/Month ($)', angle: 90, position: 'insideRight' }} />
          <Tooltip
            formatter={(value: any) => {
              if (typeof value === 'number') return `$${value.toLocaleString()}`
              return value
            }}
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #abb8c3' }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="loadsPerMonth"
            stroke="#0693e3"
            strokeWidth={2}
            dot={false}
            name="Loads/Month"
            isAnimationActive={false}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="marginPerMonth"
            stroke="#9b51e0"
            strokeWidth={2}
            dot={false}
            name="Margin/Month ($)"
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-md space-y-sm">
        <div className="p-md bg-bb-green/10 border border-bb-green rounded-md">
          <p className="text-sm font-semibold text-bb-dark-gray">
            Month 12 Cumulative Margin: <span className="text-bb-green">$37,752</span>
          </p>
        </div>
        <p className="text-sm text-bb-dark-gray">
          Customers don't arrive at full volume. They ramp over months as trust builds. A customer acquired in January generates ~$38K in margin by year end. A customer acquired in July generates only ~$15K.
        </p>
        <p className="text-sm text-bb-dark-gray font-semibold">
          This is why early acquisition matters.
        </p>
      </div>
    </div>
  )
}
