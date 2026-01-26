import React from 'react'

interface MetricCardEnhancedProps {
  label: string
  value: number | string
  icon?: React.ReactNode
  trend?: {
    data: number[]
    direction: 'up' | 'down' | 'neutral'
  }
  delta?: {
    value: number
    period: string
    direction?: 'up' | 'down' | 'neutral'
  }
  target?: {
    value: number
    unit: 'percent' | 'absolute'
  }
  owner?: string
  frequency?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'electric' | 'emerald' | 'sunset' | 'navy'
}

export default function MetricCardEnhanced({
  label,
  value,
  icon,
  delta,
  target,
  owner,
  frequency,
  size = 'md',
  color = 'electric',
}: MetricCardEnhancedProps) {
  const sizeMap = {
    sm: { container: 'p-lg', valueFontSize: 'text-3xl' },
    md: { container: 'p-2xl', valueFontSize: 'text-4xl' },
    lg: { container: 'p-3xl', valueFontSize: 'text-5xl' },
  }

  const colorMap = {
    electric: {
      bg: 'bg-gradient-to-br from-bb-electric-50 to-white',
      border: 'border-bb-electric-300',
      text: 'text-bb-electric-700',
      bar: 'bg-bb-electric-500',
      icon: 'bg-bb-electric-100 text-bb-electric-600',
    },
    emerald: {
      bg: 'bg-gradient-to-br from-bb-emerald-50 to-white',
      border: 'border-bb-emerald-300',
      text: 'text-bb-emerald-700',
      bar: 'bg-bb-emerald-500',
      icon: 'bg-bb-emerald-100 text-bb-emerald-600',
    },
    sunset: {
      bg: 'bg-gradient-to-br from-bb-sunset-50 to-white',
      border: 'border-bb-sunset-300',
      text: 'text-bb-sunset-700',
      bar: 'bg-bb-sunset-500',
      icon: 'bg-bb-sunset-100 text-bb-sunset-600',
    },
    navy: {
      bg: 'bg-gradient-to-br from-bb-navy-50 to-white',
      border: 'border-bb-navy-300',
      text: 'text-bb-navy-700',
      bar: 'bg-bb-navy-500',
      icon: 'bg-bb-navy-100 text-bb-navy-600',
    },
  }

  const colors = colorMap[color]

  // Calculate progress percentage for target
  const progressPercent = target
    ? typeof value === 'number'
      ? Math.min((value / target.value) * 100, 100)
      : 0
    : undefined

  // Determine delta color (green up, red down, gray neutral)
  const deltaColor = delta
    ? delta.direction === 'up'
      ? 'text-bb-emerald-600'
      : delta.direction === 'down'
      ? 'text-bb-burgundy-600'
      : 'text-bb-slate-600'
    : null

  const currentSize = sizeMap[size]

  return (
    <div
      className={`${currentSize.container} ${colors.bg} rounded-2xl border-2 ${colors.border} shadow-md hover:shadow-lg transition-all`}
    >
      {/* Header with icon and label */}
      <div className="flex items-start justify-between mb-lg">
        <div>
          <p className="text-xs font-semibold text-bb-slate-600 uppercase tracking-wide mb-xs">
            {label}
          </p>
        </div>
        {icon && (
          <div
            className={`${colors.icon} w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0`}
          >
            {icon}
          </div>
        )}
      </div>

      {/* Main value */}
      <div className="mb-lg">
        <p
          className={`${currentSize.valueFontSize} font-display font-black text-bb-navy-900 leading-none`}
        >
          {typeof value === 'number' ? value.toLocaleString() : value}
        </p>
      </div>

      {/* Progress bar if target provided */}
      {target && progressPercent !== undefined && (
        <div className="mb-lg">
          <div className="flex items-center justify-between mb-sm">
            <p className="text-xs font-semibold text-bb-slate-600">
              vs Target
            </p>
            <p className={`text-sm font-bold ${colors.text}`}>
              {Math.round(progressPercent)}%
            </p>
          </div>
          <div className="w-full h-2 bg-bb-slate-200 rounded-full overflow-hidden">
            <div
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
              className={`h-full ${colors.bar} transition-all duration-500`}
            />
          </div>
        </div>
      )}

      {/* Delta (change from previous period) */}
      {delta && (
        <div className={`mb-lg flex items-center gap-sm ${deltaColor}`}>
          <span className="text-lg font-bold">
            {delta.direction === 'up'
              ? '↑'
              : delta.direction === 'down'
              ? '↓'
              : '→'}
          </span>
          <span className="text-sm font-semibold">
            {delta.direction === 'up' ? '+' : ''}
            {delta.value} {delta.period}
          </span>
        </div>
      )}

      {/* Target value display */}
      {target && (
        <p className="text-xs text-bb-slate-600 mb-lg">
          Target: {target.value.toLocaleString()}
          {target.unit === 'percent' ? '%' : ''}
        </p>
      )}

      {/* Owner and frequency footer */}
      {(owner || frequency) && (
        <div className="pt-lg border-t border-bb-slate-200 space-y-xs">
          {owner && (
            <p className="text-xs text-bb-slate-600">
              <span className="font-semibold">Owner:</span> {owner}
            </p>
          )}
          {frequency && (
            <p className="text-xs text-bb-slate-600">
              <span className="font-semibold">Tracked:</span> {frequency}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
