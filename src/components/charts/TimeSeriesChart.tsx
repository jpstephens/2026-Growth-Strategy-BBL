import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'

interface DataPoint {
  name: string
  value: number
  [key: string]: any
}

interface Annotation {
  month: string
  label: string
  color: string
}

interface TimeSeriesChartProps {
  data: DataPoint[]
  dataKey?: string
  title?: string
  yAxisLabel?: string
  annotations?: Annotation[]
  targetLine?: number
  targetLabel?: string
  height?: number
  gradient?: {
    from: string
    to: string
  }
  showLegend?: boolean
}

export default function TimeSeriesChart({
  data,
  dataKey = 'value',
  title,
  yAxisLabel,
  annotations = [],
  targetLine,
  targetLabel = 'Target',
  height = 400,
  gradient = { from: '#0891b2', to: '#e0f7ff' },
  showLegend = true,
}: TimeSeriesChartProps) {
  const gradientId = `gradient-${Math.random()}`

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-bb-slate-200">
          <p className="text-sm font-semibold text-bb-navy-900">
            {payload[0].payload.name}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  // Generate accessible description
  const minValue = Math.min(...data.map(d => d[dataKey] as number))
  const maxValue = Math.max(...data.map(d => d[dataKey] as number))
  const accessibleDescription = `Time series chart${title ? ` showing ${title}` : ''}. Data ranges from ${minValue.toLocaleString()} to ${maxValue.toLocaleString()} across ${data.length} data points.${targetLine ? ` Target line at ${targetLine.toLocaleString()}.` : ''}`

  return (
    <div className="w-full space-y-lg">
      {title && (
        <h3 className="text-xl font-semibold text-bb-navy-900">{title}</h3>
      )}

      <div
        className="bg-white rounded-2xl border border-bb-slate-200 p-lg shadow-md"
        role="img"
        aria-label={accessibleDescription}
      >
        <svg width="0" height="0">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradient.from} stopOpacity={0.8} />
              <stop offset="100%" stopColor={gradient.to} stopOpacity={0.1} />
            </linearGradient>
          </defs>
        </svg>

        <ResponsiveContainer width="100%" height={height}>
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#94a3b8"
              label={{
                value: yAxisLabel,
                angle: -90,
                position: 'insideLeft',
                offset: 10,
                fill: '#475569',
                fontSize: 12,
              }}
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Area chart for visual impact */}
            <Area
              type="monotone"
              dataKey={dataKey}
              fill={`url(#${gradientId})`}
              stroke={gradient.from}
              strokeWidth={3}
              dot={{
                fill: gradient.from,
                r: 5,
                strokeWidth: 2,
                stroke: '#ffffff',
              }}
              activeDot={{
                r: 7,
                stroke: gradient.from,
                strokeWidth: 2,
              }}
              name={dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}
            />

            {/* Target line if provided */}
            {targetLine !== undefined && (
              <ReferenceLine
                y={targetLine}
                stroke="#10b981"
                strokeDasharray="5 5"
                strokeWidth={2}
                label={{
                  value: targetLabel,
                  position: 'insideTopRight',
                  offset: -10,
                  fill: '#10b981',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              />
            )}

            {/* Annotations for key events */}
            {annotations.map((annotation, idx) => {
              const dataIndex = data.findIndex(
                (d) => d.name === annotation.month
              )
              if (dataIndex === -1) return null

              return (
                <ReferenceLine
                  key={idx}
                  x={annotation.month}
                  stroke={annotation.color}
                  strokeWidth={2}
                  label={{
                    value: annotation.label,
                    position: 'top',
                    fill: annotation.color,
                    fontSize: 11,
                    fontWeight: 600,
                    offset: 10,
                  }}
                />
              )
            })}

            {showLegend && <Legend />}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
