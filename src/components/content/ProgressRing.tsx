interface ProgressRingProps {
  value: number
  target: number
  size?: 'sm' | 'md' | 'lg'
  color?: 'electric' | 'emerald' | 'sunset' | 'navy'
  label?: string
  showPercentage?: boolean
  showTarget?: boolean
}

export default function ProgressRing({
  value,
  target,
  size = 'md',
  color = 'electric',
  label,
  showPercentage = true,
  showTarget = true,
}: ProgressRingProps) {
  const sizeMap = {
    sm: {
      radius: 40,
      circumference: 251,
      fontSize: 'text-sm',
      containerSize: 'w-24 h-24',
    },
    md: {
      radius: 60,
      circumference: 377,
      fontSize: 'text-lg',
      containerSize: 'w-36 h-36',
    },
    lg: {
      radius: 80,
      circumference: 503,
      fontSize: 'text-2xl',
      containerSize: 'w-48 h-48',
    },
  }

  const colorMap = {
    electric: { fill: '#0891b2', light: '#e0f7ff' },
    emerald: { fill: '#10b981', light: '#ecfdf5' },
    sunset: { fill: '#f97316', light: '#fff7ed' },
    navy: { fill: '#1e3a8a', light: '#e6f0ff' },
  }

  const sizes = sizeMap[size]
  const colors = colorMap[color]

  const percentage = Math.min((value / target) * 100, 100)
  const offset = sizes.circumference * (1 - percentage / 100)

  return (
    <div className="flex flex-col items-center gap-md">
      {/* SVG Ring */}
      <div className={`${sizes.containerSize} relative flex items-center justify-center`}>
        <svg
          className="transform -rotate-90"
          width={sizes.radius * 2}
          height={sizes.radius * 2}
          viewBox={`0 0 ${sizes.radius * 2} ${sizes.radius * 2}`}
        >
          {/* Background circle */}
          <circle
            cx={sizes.radius}
            cy={sizes.radius}
            r={sizes.radius - 8}
            fill="none"
            stroke={colors.light}
            strokeWidth="8"
          />

          {/* Progress circle */}
          <circle
            cx={sizes.radius}
            cy={sizes.radius}
            r={sizes.radius - 8}
            fill="none"
            stroke={colors.fill}
            strokeWidth="8"
            strokeDasharray={sizes.circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.5s ease',
            }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute flex flex-col items-center">
          {showPercentage && (
            <p className={`${sizes.fontSize} font-bold text-bb-navy-900 font-display`}>
              {Math.round(percentage)}%
            </p>
          )}
          {showTarget && (
            <p className="text-xs text-bb-slate-600 font-semibold">
              of {target.toLocaleString()}
            </p>
          )}
          {label && (
            <p className="text-xs text-bb-slate-600 mt-xs">{label}</p>
          )}
        </div>
      </div>

      {/* Value display */}
      <div className="text-center">
        <p className="text-lg font-bold text-bb-navy-900">
          {value.toLocaleString()}
        </p>
        {label && (
          <p className="text-xs text-bb-slate-600 mt-xs">{label}</p>
        )}
      </div>
    </div>
  )
}
