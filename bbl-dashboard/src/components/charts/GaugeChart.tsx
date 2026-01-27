'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface GaugeChartProps {
  value: number;
  target: number;
  label: string;
  format?: 'percent' | 'currency' | 'number';
  size?: 'sm' | 'md' | 'lg';
}

export function GaugeChart({ value, target, label, format = 'percent', size = 'md' }: GaugeChartProps) {
  const percentage = Math.min((value / target) * 100, 100);
  const remaining = 100 - percentage;

  const data = [
    { value: percentage },
    { value: remaining },
  ];

  const getColor = () => {
    if (percentage >= 100) return '#2a5c4b'; // bb-forest-700 - darker for better contrast
    if (percentage >= 75) return '#a36228'; // bb-amber-700
    return '#aa2d32'; // bb-crimson-700
  };

  const formatValue = () => {
    switch (format) {
      case 'percent':
        return `${value.toFixed(1)}%`;
      case 'currency':
        return value >= 1000 ? `$${(value / 1000).toFixed(0)}K` : `$${value.toFixed(0)}`;
      default:
        return value.toLocaleString();
    }
  };

  const sizes = {
    sm: { height: 100, innerRadius: 30, outerRadius: 45 },
    md: { height: 140, innerRadius: 45, outerRadius: 65 },
    lg: { height: 180, innerRadius: 60, outerRadius: 85 },
  };

  const { height, innerRadius, outerRadius } = sizes[size];

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="70%"
              startAngle={180}
              endAngle={0}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              <Cell fill={getColor()} />
              <Cell fill="#dee2e6" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center -mt-8">
        <div className="text-2xl font-bold text-bb-charcoal-900">{formatValue()}</div>
        <div className="text-sm text-bb-slate-800 font-medium">of {format === 'percent' ? `${target}%` : target.toLocaleString()}</div>
      </div>
      {label && <div className="text-sm font-medium text-bb-slate-800 mt-2">{label}</div>}
    </div>
  );
}
