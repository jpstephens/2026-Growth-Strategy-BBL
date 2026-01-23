import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Slide11_SalesSystem() {
  const funnelData = [
    { stage: 'Dials', count: 200 },
    { stage: 'Conversations', count: 60 },
    { stage: 'Meetings', count: 20 },
    { stage: 'Proposals', count: 8 },
    { stage: 'Closes', count: 4 },
  ]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Sales System</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-2xl text-bb-slate-700 mb-lg text-center">Disciplined, measurable, repeatable</p>

        <div className="grid grid-cols-3 gap-lg mb-2xl">
          <StatCard label="Weekly Dials" value="200" highlight size="xl" />
          <StatCard label="Close Rate" value="2%" size="xl" />
          <StatCard label="New Customers/Month" value="4-5" highlight size="xl" />
        </div>

        <div className="flex-1 flex items-center justify-center mb-lg">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={funnelData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
              <XAxis dataKey="stage" stroke="#313131" />
              <YAxis stroke="#313131" />
              <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '2px solid #0693e3' }} />
              <Bar dataKey="count" fill="#0693e3" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl text-center shadow-lg">
          <p className="text-lg text-bb-slate-700">
            <strong>Weekly Accountability:</strong> 200 dials/week, tracked in HubSpot. Monthly target: 4-5 new customers.
          </p>
        </div>
      </div>
    </Slide>
  )
}
