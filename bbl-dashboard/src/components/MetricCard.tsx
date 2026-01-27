'use client';

interface MetricCardProps {
  label: string;
  value: number | string;
  target?: number | string;
  format?: 'number' | 'currency' | 'percent';
  trend?: 'up' | 'down' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
}

export function MetricCard({ label, value, target, format = 'number', trend, size = 'md' }: MetricCardProps) {
  const formatValue = (v: number | string): string => {
    if (typeof v === 'string') return v;
    switch (format) {
      case 'currency':
        return v >= 1000 ? `$${(v / 1000).toFixed(0)}K` : `$${v.toFixed(0)}`;
      case 'percent':
        return `${v.toFixed(1)}%`;
      default:
        return v.toLocaleString();
    }
  };

  const progress = typeof value === 'number' && typeof target === 'number'
    ? (value / target) * 100
    : null;

  const getStatusColor = () => {
    if (progress === null) return 'text-bb-slate-700';
    if (progress >= 100) return 'text-bb-forest-600';
    if (progress >= 75) return 'text-bb-amber-600';
    return 'text-bb-crimson-600';
  };

  const getProgressColor = () => {
    if (progress === null) return 'bg-bb-slate-400';
    if (progress >= 100) return 'bg-bb-forest-500';
    if (progress >= 75) return 'bg-bb-amber-500';
    return 'bg-bb-crimson-500';
  };

  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const valueSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-bb-slate-200 ${sizeClasses[size]}`}>
      <div className="text-xs font-medium text-bb-slate-500 uppercase tracking-wide mb-1">
        {label}
      </div>
      <div className={`font-bold ${valueSizeClasses[size]} ${getStatusColor()}`}>
        {formatValue(value)}
        {target && (
          <span className="text-sm font-normal text-bb-slate-400 ml-2">
            / {formatValue(target)}
          </span>
        )}
      </div>
      {progress !== null && (
        <div className="mt-2">
          <div className="h-1.5 bg-bb-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${getProgressColor()}`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      )}
      {trend && (
        <div className={`mt-1 text-xs ${
          trend === 'up' ? 'text-bb-forest-600' : trend === 'down' ? 'text-bb-crimson-600' : 'text-bb-slate-500'
        }`}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} vs last period
        </div>
      )}
    </div>
  );
}
