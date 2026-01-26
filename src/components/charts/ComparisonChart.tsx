import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ComparisonMetric {
  name: string
  value1: number
  value2: number
}

interface ComparisonChartProps {
  data: ComparisonMetric[]
  scenario1Label: string
  scenario2Label: string
  title?: string
  color1?: string
  color2?: string
  height?: number
  showDelta?: boolean
}

export default function ComparisonChart({
  data,
  scenario1Label,
  scenario2Label,
  title,
  color1 = '#be123c', // burgundy
  color2 = '#10b981', // emerald
  height = 400,
  showDelta = true,
}: ComparisonChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length > 0) {
      const entry = payload[0].payload
      const delta = entry.value2 - entry.value1
      const deltaPercent = ((delta / entry.value1) * 100).toFixed(0)

      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-bb-slate-200">
          <p className="text-sm font-semibold text-bb-navy-900 mb-sm">
            {entry.name}
          </p>
          <p className="text-sm" style={{ color: color1 }}>
            {scenario1Label}: ${entry.value1.toLocaleString()}
          </p>
          <p className="text-sm" style={{ color: color2 }}>
            {scenario2Label}: ${entry.value2.toLocaleString()}
          </p>
          {showDelta && (
            <p className="text-sm font-semibold text-bb-emerald-600 mt-sm border-t pt-sm">
              Delta: +${delta.toLocaleString()} ({deltaPercent}%)
            </p>
          )}
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full space-y-lg">
      {title && (
        <h3 className="text-xl font-semibold text-bb-navy-900">{title}</h3>
      )}

      <div className="bg-white rounded-2xl border border-bb-slate-200 p-lg shadow-md">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 50 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              angle={-45}
              textAnchor="end"
              height={80}
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{ paddingBottom: '20px' }}
            />

            <Bar dataKey="value1" name={scenario1Label} fill={color1} radius={[8, 8, 0, 0]} />
            <Bar dataKey="value2" name={scenario2Label} fill={color2} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Delta summary cards */}
      {showDelta && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="bg-gradient-to-br from-bb-sunset-50 to-white rounded-xl p-lg border-2 border-bb-sunset-300">
            <p className="text-xs font-semibold text-bb-slate-600 mb-sm uppercase">
              {scenario1Label}
            </p>
            <p className="text-3xl font-bold text-bb-burgundy-600">
              ${data.reduce((sum, d) => sum + d.value1, 0).toLocaleString()}
            </p>
            <p className="text-xs text-bb-slate-600 mt-sm">
              Total across {data.length} scenarios
            </p>
          </div>

          <div className="bg-gradient-to-br from-bb-emerald-50 to-white rounded-xl p-lg border-2 border-bb-emerald-300">
            <p className="text-xs font-semibold text-bb-slate-600 mb-sm uppercase">
              {scenario2Label}
            </p>
            <p className="text-3xl font-bold text-bb-emerald-600">
              ${data.reduce((sum, d) => sum + d.value2, 0).toLocaleString()}
            </p>
            <p className="text-xs text-bb-slate-600 mt-sm">
              Total across {data.length} scenarios
            </p>
          </div>

          <div className="bg-gradient-to-br from-bb-electric-50 to-white rounded-xl p-lg border-2 border-bb-electric-300">
            <p className="text-xs font-semibold text-bb-slate-600 mb-sm uppercase">
              Total Delta
            </p>
            <p className="text-3xl font-bold text-bb-electric-600">
              ${(
                data.reduce((sum, d) => sum + (d.value2 - d.value1), 0)
              ).toLocaleString()}
            </p>
            <p className="text-xs text-bb-slate-600 mt-sm">
              +
              {(
                ((data.reduce((sum, d) => sum + (d.value2 - d.value1), 0) /
                  data.reduce((sum, d) => sum + d.value1, 0)) *
                100)
              ).toFixed(0)}
              % improvement
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
