import Slide from '../layout/Slide'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { scenario1, scenario2 } from '../../data/financialProjections'

export default function Slide14_FinancialComparison() {
  // Combine both scenarios for comparison
  const comparisonData = scenario1.map((s1, idx) => ({
    month: s1.month,
    'Conservative (1 rep)': s1.estNetProfit,
    'Aggressive (multi-rep)': scenario2[idx].estNetProfit,
  }))

  return (
    <Slide>
      <div className="w-full max-w-6xl h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-bb-black mb-lg text-center">Financial Projection</h2>
        <p className="text-2xl text-bb-dark-gray mb-lg text-center">Two scenarios: single-rep vs. multi-rep strategy</p>

        <div className="flex-1 flex items-center justify-center mb-lg">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={comparisonData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
              <XAxis dataKey="month" stroke="#313131" />
              <YAxis stroke="#313131" />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', border: '2px solid #0693e3', borderRadius: '8px' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Conservative (1 rep)"
                stroke="#9b51e0"
                strokeWidth={3}
                dot={{ fill: '#9b51e0', r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Aggressive (multi-rep)"
                stroke="#0693e3"
                strokeWidth={3}
                dot={{ fill: '#0693e3', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-lg">
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <h3 className="text-lg font-bold text-bb-black mb-md">Conservative Path</h3>
            <p className="text-base text-bb-dark-gray mb-md">
              Single sales rep ramps slowly. Reaches $69K/month by December.
            </p>
            <p className="text-sm text-bb-dark-gray italic">
              Safe but leaves $30K+ on the table
            </p>
          </div>

          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg">
            <h3 className="text-lg font-bold text-bb-cyan mb-md">Aggressive Path</h3>
            <p className="text-base text-bb-dark-gray mb-md">
              Add 2nd rep by May, 3rd rep by August. Reaches $102K/month by December.
            </p>
            <p className="text-sm text-bb-dark-gray italic font-semibold">
              Hit $100K goal
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
