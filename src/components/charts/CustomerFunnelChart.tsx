import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export default function CustomerFunnelChart() {
  const data = [
    { stage: 'Dials', value: 800, color: '#0693e3' },
    { stage: 'Conversations', value: 140, color: '#9b51e0' },
    { stage: 'Qualified', value: 36, color: '#00d084' },
    { stage: 'Customers', value: 18, color: '#313131' },
  ]

  const rates = [
    { between: 'Dials → Conversations', rate: '17.5%' },
    { between: 'Conversations → Qualified', rate: '25.7%' },
    { between: 'Qualified → Customers', rate: '50%' },
    { between: 'Dials → Customers', rate: '2.25%' },
  ]

  return (
    <div className="w-full mt-md">
      <h3 className="text-h3 mb-md">Monthly Sales Funnel (200 Dials/Week Target)</h3>

      <div className="h-64 mb-md">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#abb8c3" />
            <XAxis dataKey="stage" stroke="#313131" />
            <YAxis stroke="#313131" />
            <Tooltip formatter={(value) => value} contentStyle={{ backgroundColor: '#fff', border: '1px solid #abb8c3' }} />
            <Bar dataKey="value" fill="#0693e3" name="Count">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-bb-light-gray p-md rounded-md">
        <h4 className="font-semibold text-bb-black mb-sm">Conversion Rates</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          {rates.map((r, i) => (
            <div key={i} className="text-sm text-bb-dark-gray">
              <span className="font-medium">{r.between}:</span> {r.rate}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-md text-sm text-bb-dark-gray">
        <strong>Key insight:</strong> Activity drives results. More dials = more conversations = more customers. There's no shortcut.
      </p>
    </div>
  )
}
