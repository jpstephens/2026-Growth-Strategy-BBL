'use client';

import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface AreaChartProps {
  value: number;
  target: number;
  label: string;
  format?: 'currency' | 'number';
}

// Generate mock trend data (in production, this would come from the API)
function generateTrendData(currentValue: number, target: number) {
  const data = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Generate somewhat realistic progression toward current value
    const progress = (30 - i) / 30;
    const variance = (Math.random() - 0.5) * 0.2 * currentValue;
    const baseValue = currentValue * progress * 0.7;
    const value = Math.max(0, baseValue + variance);

    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.round(value),
    });
  }

  // Ensure last value matches current
  data[data.length - 1].value = currentValue;

  return data;
}

export function AreaProgressChart({ value, target, label, format = 'currency' }: AreaChartProps) {
  const data = generateTrendData(value, target);
  const progress = (value / target) * 100;

  const getColor = () => {
    if (progress >= 100) return { stroke: '#2a5c4b', fill: '#c2e0d4' }; // forest-700, forest-200
    if (progress >= 75) return { stroke: '#a36228', fill: '#f4e2bd' }; // amber-700, amber-200
    return { stroke: '#335771', fill: '#cddde9' }; // steel-700, steel-200
  };

  const colors = getColor();

  const formatValue = (v: number) => {
    if (format === 'currency') {
      return v >= 1000 ? `$${(v / 1000).toFixed(0)}K` : `$${v}`;
    }
    return v.toLocaleString();
  };

  const CustomTooltip = ({ active, payload, label: tooltipLabel }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-bb-slate-200">
          <p className="text-sm text-bb-slate-700">{tooltipLabel}</p>
          <p className="font-bold text-bb-charcoal-900">{formatValue(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-bb-charcoal-900">{label}</h3>
          <p className="text-sm text-bb-slate-700">30-day trend</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-bb-charcoal-900">{formatValue(value)}</div>
          <div className="text-sm text-bb-slate-700">of {formatValue(target)} target</div>
        </div>
      </div>

      <div className="h-32">
        <ResponsiveContainer>
          <RechartsAreaChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <defs>
              <linearGradient id={`gradient-${label}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.stroke} stopOpacity={0.4} />
                <stop offset="95%" stopColor={colors.stroke} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: '#495057' }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis hide domain={[0, 'auto']} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={target}
              stroke="#868e96"
              strokeDasharray="3 3"
              label={{ value: 'Target', position: 'right', fontSize: 11, fill: '#495057' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={colors.stroke}
              strokeWidth={2}
              fill={`url(#gradient-${label})`}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-bb-slate-700 mb-1">
          <span className="font-medium">{progress.toFixed(0)}% of target</span>
          <span>{progress >= 100 ? 'Target reached!' : `${formatValue(target - value)} to go`}</span>
        </div>
        <div className="h-2 bg-bb-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: colors.stroke }}
          />
        </div>
      </div>
    </div>
  );
}
