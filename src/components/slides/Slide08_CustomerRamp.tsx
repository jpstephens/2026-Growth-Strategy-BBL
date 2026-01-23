import Slide from '../layout/Slide'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { customerRamp } from '../../data/financialProjections'

export default function Slide08_CustomerRamp() {
  return (
    <Slide>
      <div className="w-full max-w-6xl h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-bb-black mb-lg text-center">Customer Value Growth</h2>
        <p className="text-2xl text-bb-dark-gray mb-2xl text-center">How margin accelerates as customers mature</p>

        <div className="flex-1 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={customerRamp} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
              <XAxis dataKey="month" stroke="#313131" />
              <YAxis stroke="#313131" />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', border: '2px solid #0693e3', borderRadius: '8px' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="marginPerMonth"
                stroke="#0693e3"
                strokeWidth={3}
                dot={{ fill: '#0693e3', r: 5 }}
                name="Monthly Margin ($)"
              />
              <Line
                type="monotone"
                dataKey="cumulative"
                stroke="#9b51e0"
                strokeWidth={3}
                dot={{ fill: '#9b51e0', r: 5 }}
                name="Cumulative Margin ($)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p className="text-lg text-bb-dark-gray text-center mt-lg">
          Each new customer starts small but compounds. By month 12, a typical customer contributes $4,160/month.
        </p>
      </div>
    </Slide>
  )
}
