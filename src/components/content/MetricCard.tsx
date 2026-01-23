interface MetricCardProps {
  label: string
  value: string | number
  unit?: string
  highlight?: boolean
  variant?: 'light' | 'dark'
}

export default function MetricCard({ label, value, unit, highlight = false, variant = 'light' }: MetricCardProps) {
  return (
    <div className={`
      p-md rounded-lg border-2 transition-all duration-300
      ${highlight
        ? 'bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 border-bb-electric-400 shadow-lg shadow-bb-electric-500/20 hover:shadow-xl'
        : variant === 'dark'
        ? 'bg-bb-slate-800 border-bb-slate-700 shadow-md text-bb-slate-100'
        : 'bg-white border-bb-slate-200 shadow-md hover:shadow-lg hover:border-bb-navy-500'
      }
    `}>
      <p className={`text-sm font-medium mb-xs ${highlight ? 'text-white/80' : variant === 'dark' ? 'text-bb-slate-400' : 'text-bb-slate-600'}`}>
        {label}
      </p>
      <p className={`text-h3 font-bold ${highlight ? 'text-white' : variant === 'dark' ? 'text-white' : 'text-bb-navy-900'}`}>
        {value}{unit ? ` ${unit}` : ''}
      </p>
    </div>
  )
}
