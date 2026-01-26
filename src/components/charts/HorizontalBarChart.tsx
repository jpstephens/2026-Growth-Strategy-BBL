import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface BarData {
  name: string
  value: number
  color?: string
  status?: 'good' | 'warning' | 'critical'
}

interface HorizontalBarChartProps {
  data: BarData[]
  title?: string
  height?: number
  format?: 'number' | 'currency' | 'percent'
  showValue?: boolean
}

const statusColorMap = {
  good: '#10b981', // emerald
  warning: '#f97316', // sunset
  critical: '#be123c', // burgundy
}

const defaultColors = [
  '#0891b2', // electric
  '#0e7490', // electric-600
  '#f97316', // sunset
  '#10b981', // emerald
  '#8b5cf6', // purple
]

export default function HorizontalBarChart({
  data,
  title,
  height = 300,
  format = 'number',
  showValue = true,
}: HorizontalBarChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const entry = payload[0].payload
      let displayValue = entry.value.toLocaleString()

      if (format === 'currency') {
        displayValue = `$${displayValue}`
      } else if (format === 'percent') {
        displayValue = `${displayValue}%`
      }

      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-bb-slate-200">
          <p className="text-sm font-semibold text-bb-navy-900">{entry.name}</p>
          <p className="text-sm font-semibold" style={{ color: payload[0].fill }}>
            {displayValue}
          </p>
        </div>
      )
    }
    return null
  }

  const getBarColor = (item: BarData, index: number) => {
    if (item.status) {
      return statusColorMap[item.status]
    }
    if (item.color) {
      return item.color
    }
    return defaultColors[index % defaultColors.length]
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
            layout="vertical"
            margin={{ top: 10, right: 30, left: 120, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              horizontal={false}
            />
            <XAxis type="number" stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#94a3b8"
              width={110}
              style={{ fontSize: '12px' }}
              tick={{ textAnchor: 'end' }}
            />
            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="value"
              fill="#8884d8"
              radius={[0, 8, 8, 0]}
              minPointSize={10}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry, index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Value legend */}
      {showValue && (
        <div className="space-y-sm">
          {data.map((item, idx) => {
            let displayValue = item.value.toLocaleString()
            if (format === 'currency') {
              displayValue = `$${displayValue}`
            } else if (format === 'percent') {
              displayValue = `${displayValue}%`
            }

            const barColor = getBarColor(item, idx)

            return (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <div
                    style={{ backgroundColor: barColor }}
                    className="w-4 h-4 rounded"
                  />
                  <p className="text-sm font-medium text-bb-slate-700">
                    {item.name}
                  </p>
                </div>
                <p className="text-sm font-semibold text-bb-navy-900">
                  {displayValue}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
