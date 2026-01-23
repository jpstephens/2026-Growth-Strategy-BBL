interface MetricItem {
  label: string
  value: string | number
  unit?: string
  highlight?: boolean
  icon?: string
  color?: 'electric' | 'emerald' | 'sunset' | 'navy'
}

interface MetricGridProps {
  metrics: MetricItem[]
  columns?: 2 | 3 | 4
  variant?: 'light' | 'dark'
}

export default function MetricGrid({ metrics, columns = 3, variant = 'light' }: MetricGridProps) {
  const colsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns]

  const colorMap = {
    electric: { bg: 'from-bb-electric-500 to-bb-electric-600', border: 'border-bb-electric-400', shadow: 'shadow-bb-electric-500/20', text: 'text-bb-electric-700' },
    emerald: { bg: 'from-bb-emerald-500 to-bb-emerald-600', border: 'border-bb-emerald-400', shadow: 'shadow-bb-emerald-500/20', text: 'text-bb-emerald-700' },
    sunset: { bg: 'from-bb-sunset-500 to-bb-sunset-600', border: 'border-bb-sunset-400', shadow: 'shadow-bb-sunset-500/20', text: 'text-bb-sunset-700' },
    navy: { bg: 'from-bb-navy-600 to-bb-navy-700', border: 'border-bb-navy-500', shadow: 'shadow-bb-navy-500/20', text: 'text-bb-navy-700' },
  }

  return (
    <div className={`grid ${colsClass} gap-lg w-full`}>
      {metrics.map((metric, idx) => {
        const color = metric.color || 'electric'
        const colors = colorMap[color]

        return (
          <div
            key={idx}
            className={`rounded-xl p-lg border-2 transition-all duration-300 hover:-translate-y-0.5 ${
              metric.highlight
                ? `bg-gradient-to-br ${colors.bg} ${colors.border} shadow-lg ${colors.shadow} text-white`
                : variant === 'dark'
                ? 'bg-bb-slate-800 border-bb-slate-700 shadow-md text-bb-slate-100'
                : 'bg-white border-bb-slate-200 shadow-md hover:shadow-lg hover:border-bb-navy-500 text-bb-navy-900'
            }`}
          >
            {metric.icon && (
              <div className={`text-3xl mb-sm ${metric.highlight ? '' : 'opacity-70'}`}>{metric.icon}</div>
            )}
            <p className={`text-sm font-semibold mb-xs ${metric.highlight ? 'text-white/80' : variant === 'dark' ? 'text-bb-slate-400' : 'text-bb-slate-600'}`}>
              {metric.label}
            </p>
            <p className={`text-3xl font-bold ${metric.highlight ? 'text-white' : ''}`}>
              {metric.value}
            </p>
            {metric.unit && (
              <p className={`text-xs mt-xs ${metric.highlight ? 'text-white/70' : variant === 'dark' ? 'text-bb-slate-400' : 'text-bb-slate-500'}`}>
                {metric.unit}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
