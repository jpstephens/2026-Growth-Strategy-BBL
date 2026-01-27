'use client';

import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface KPICardProps {
  label: string;
  value: number;
  target: number;
  format?: 'number' | 'currency' | 'percent';
  showSparkline?: boolean;
}

// Generate sparkline data
function generateSparklineData(current: number, target: number) {
  const data = [];
  for (let i = 0; i < 14; i++) {
    const progress = i / 13;
    const variance = (Math.random() - 0.5) * 0.3 * current;
    const value = Math.max(0, current * progress * 0.6 + variance);
    data.push({ value });
  }
  data[data.length - 1].value = current;
  return data;
}

export function KPICard({ label, value, target, format = 'number', showSparkline = true }: KPICardProps) {
  const progress = (value / target) * 100;
  const sparklineData = generateSparklineData(value, target);

  const formatValue = (v: number) => {
    switch (format) {
      case 'currency':
        return v >= 1000 ? `$${(v / 1000).toFixed(0)}K` : `$${v.toFixed(0)}`;
      case 'percent':
        return `${v.toFixed(1)}%`;
      default:
        return v.toLocaleString();
    }
  };

  const getStatusColor = () => {
    if (progress >= 100) return {
      text: 'text-bb-forest-800',
      bg: 'bg-bb-forest-600',
      light: 'bg-bb-forest-100',
      lightText: 'text-bb-forest-800'
    };
    if (progress >= 75) return {
      text: 'text-bb-amber-800',
      bg: 'bg-bb-amber-600',
      light: 'bg-bb-amber-100',
      lightText: 'text-bb-amber-900'
    };
    return {
      text: 'text-bb-crimson-800',
      bg: 'bg-bb-crimson-600',
      light: 'bg-bb-crimson-100',
      lightText: 'text-bb-crimson-800'
    };
  };

  const colors = getStatusColor();

  return (
    <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-4 relative overflow-hidden">
      {/* Sparkline background */}
      {showSparkline && (
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-40">
          <ResponsiveContainer>
            <AreaChart data={sparklineData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={progress >= 100 ? '#2a5c4b' : progress >= 75 ? '#a36228' : '#335771'} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={progress >= 100 ? '#2a5c4b' : progress >= 75 ? '#a36228' : '#335771'} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="none"
                fill={`url(#spark-${label})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Content */}
      <div className="relative">
        <div className="text-xs font-semibold text-bb-slate-700 uppercase tracking-wide mb-1">
          {label}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className={`text-3xl font-bold ${colors.text}`}>{formatValue(value)}</span>
            <span className="text-sm font-medium text-bb-slate-600 ml-1">/ {formatValue(target)}</span>
          </div>
          <div className={`${colors.light} ${colors.lightText} text-xs font-bold px-2 py-1 rounded-full`}>
            {progress.toFixed(0)}%
          </div>
        </div>

        {/* Mini progress bar */}
        <div className="mt-3 h-1.5 bg-bb-slate-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${colors.bg}`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
