interface StatCardProps {
  label: string
  value: string | number
  unit?: string
  highlight?: boolean
  size?: 'lg' | 'xl' | '2xl'
  variant?: 'light' | 'dark'
  color?: 'electric' | 'emerald' | 'sunset' | 'navy'
}

export default function StatCard({
  label,
  value,
  unit,
  highlight = false,
  size = 'xl',
  variant = 'light',
  color = 'electric'
}: StatCardProps) {
  const sizeMap = {
    lg: 'p-lg',
    xl: 'p-xl',
    '2xl': 'p-2xl',
  }

  const textSizeMap = {
    lg: 'text-h2',
    xl: 'text-display',
    '2xl': 'text-6xl',
  }

  const colorMap = {
    electric: {
      light: {
        highlight: 'bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 border-2 border-bb-electric-400 shadow-lg shadow-bb-electric-500/20 hover:shadow-xl hover:shadow-bb-electric-500/30',
        normal: 'bg-white border-2 border-bb-slate-200 shadow-md hover:shadow-lg hover:border-bb-navy-500 text-bb-navy-900',
      },
      dark: {
        highlight: 'bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 border-2 border-bb-electric-400 shadow-lg shadow-bb-electric-500/20',
        normal: 'bg-bb-slate-800 border-2 border-bb-slate-700 shadow-md text-bb-slate-100',
      },
    },
    emerald: {
      light: {
        highlight: 'bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 border-2 border-bb-emerald-400 shadow-lg shadow-bb-emerald-500/20 hover:shadow-xl hover:shadow-bb-emerald-500/30',
        normal: 'bg-white border-2 border-bb-slate-200 shadow-md hover:shadow-lg text-bb-navy-900',
      },
      dark: {
        highlight: 'bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 border-2 border-bb-emerald-400 shadow-lg shadow-bb-emerald-500/20',
        normal: 'bg-bb-slate-800 border-2 border-bb-slate-700 shadow-md text-bb-slate-100',
      },
    },
    sunset: {
      light: {
        highlight: 'bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 border-2 border-bb-sunset-400 shadow-lg shadow-bb-sunset-500/20 hover:shadow-xl hover:shadow-bb-sunset-500/30',
        normal: 'bg-white border-2 border-bb-slate-200 shadow-md hover:shadow-lg text-bb-navy-900',
      },
      dark: {
        highlight: 'bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 border-2 border-bb-sunset-400 shadow-lg shadow-bb-sunset-500/20',
        normal: 'bg-bb-slate-800 border-2 border-bb-slate-700 shadow-md text-bb-slate-100',
      },
    },
    navy: {
      light: {
        highlight: 'bg-gradient-to-br from-bb-navy-600 to-bb-navy-700 border-2 border-bb-navy-500 shadow-lg shadow-bb-navy-500/20 hover:shadow-xl hover:shadow-bb-navy-500/30',
        normal: 'bg-white border-2 border-bb-slate-200 shadow-md hover:shadow-lg text-bb-navy-900',
      },
      dark: {
        highlight: 'bg-gradient-to-br from-bb-navy-600 to-bb-navy-700 border-2 border-bb-navy-500 shadow-lg shadow-bb-navy-500/20',
        normal: 'bg-bb-slate-800 border-2 border-bb-slate-700 shadow-md text-bb-slate-100',
      },
    },
  }

  const baseStyles = colorMap[color][variant][highlight ? 'highlight' : 'normal']
  const labelTextColor = highlight ? 'text-white/90' : variant === 'dark' ? 'text-bb-slate-300' : 'text-bb-slate-600'
  const valueTextColor = highlight ? 'text-white' : variant === 'dark' ? 'text-white' : 'text-bb-navy-900'

  return (
    <div className={`group relative ${sizeMap[size]} rounded-xl ${baseStyles} transition-all duration-300 hover:-translate-y-0.5`}>
      {highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
      )}
      <div className="relative z-10">
        <p className={`text-sm font-medium mb-xs ${labelTextColor}`}>{label}</p>
        <p className={`${textSizeMap[size]} font-display font-bold ${valueTextColor}`}>
          {value}{unit ? ` ${unit}` : ''}
        </p>
      </div>
    </div>
  )
}
