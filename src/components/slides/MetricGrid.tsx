interface MetricItem {
  label: string
  value: string | number
  unit?: string
  highlight?: boolean
  icon?: string
}

interface MetricGridProps {
  metrics: MetricItem[]
  columns?: 2 | 3 | 4
}

export default function MetricGrid({ metrics, columns = 3 }: MetricGridProps) {
  const colsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns]

  return (
    <div className={`grid ${colsClass} gap-lg w-full`}>
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className={`rounded-lg p-lg border-2 transition-all ${
            metric.highlight
              ? 'border-bb-cyan bg-gradient-to-br from-blue-50 to-white'
              : 'border-bb-border bg-bb-light-gray'
          }`}
        >
          {metric.icon && (
            <div className="text-3xl mb-sm">{metric.icon}</div>
          )}
          <p className="text-sm font-semibold text-bb-dark-gray mb-xs">
            {metric.label}
          </p>
          <p className={`text-3xl font-bold ${metric.highlight ? 'text-bb-cyan' : 'text-bb-black'}`}>
            {metric.value}
          </p>
          {metric.unit && (
            <p className="text-xs text-bb-dark-gray mt-xs">
              {metric.unit}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
