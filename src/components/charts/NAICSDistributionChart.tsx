import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { listAllocation } from '../../data/naicsCodes'

export default function NAICSDistributionChart() {
  const data = [
    { name: 'Building Products', value: listAllocation.buildingProducts.percentage },
    { name: 'Metal Fabrication', value: listAllocation.metalFabrication.percentage },
    { name: 'Plastics & Packaging', value: listAllocation.plasticsPackaging.percentage },
    { name: 'Automotive/JIT', value: listAllocation.automotiveJIT.percentage },
  ]

  const colors = ['#0693e3', '#9b51e0', '#00d084', '#f59e0b']

  return (
    <div className="w-full mt-md">
      <h3 className="text-h3 mb-md">Lead List Allocation by Industry</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-md">
          {data.map((industry, index) => (
            <div key={index} className="p-md bg-bb-light-gray rounded-md border-l-4" style={{ borderColor: colors[index] }}>
              <div className="flex items-center justify-between mb-xs">
                <h4 className="font-semibold text-bb-black">{industry.name}</h4>
                <span className="text-lg font-bold" style={{ color: colors[index] }}>{industry.value}%</span>
              </div>
              <p className="text-sm text-bb-dark-gray">
                ~{Math.round(1500 * industry.value / 100)} contacts/month
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-md text-sm text-bb-dark-gray">
        <strong>Why these industries?</strong> Consistent FTL volume, value reliability over price, right company size (50-750 employees), and high margin potential.
      </p>
    </div>
  )
}
