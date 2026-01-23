import Slide from '../layout/Slide'
import { topCustomers } from '../../data/currentState'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Slide15_CustomerProfitability() {
  const chartData = topCustomers.map(c => ({
    name: c.name.substring(0, 12),
    margin: c.avgMargin,
    loads: c.loads,
  }))

  return (
    <Slide>
      <div className="w-full max-w-6xl h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-bb-black mb-lg text-center">Top Customers</h2>
        <p className="text-2xl text-bb-dark-gray mb-lg text-center">Average margin per load by customer</p>

        <div className="flex-1 flex items-center justify-center mb-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
              <XAxis dataKey="name" stroke="#313131" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#313131" />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', border: '2px solid #0693e3' }}
              />
              <Bar dataKey="margin" fill="#0693e3" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
          <h3 className="text-lg font-bold text-bb-black mb-md">Key Insights</h3>
          <ul className="space-y-sm text-base text-bb-dark-gray">
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-sm">•</span>
              <span><strong>Vibra Screw ($416/load):</strong> Ideal profile—high margin, consistent volume</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-sm">•</span>
              <span><strong>Frontier Door ($251/load):</strong> Core customer—volume + margin combination</span>
            </li>
            <li className="flex items-start">
              <span className="text-bb-cyan font-bold mr-sm">•</span>
              <span><strong>Target profile:</strong> $200+/load margin, 10+ loads/month, predictable volume</span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  )
}
