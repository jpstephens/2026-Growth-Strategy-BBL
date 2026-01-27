'use client';

interface ProgressRingProps {
  value: number;
  target: number;
  label: string;
  size?: number;
  strokeWidth?: number;
}

export function ProgressRing({ value, target, label, size = 120, strokeWidth = 8 }: ProgressRingProps) {
  const progress = Math.min((value / target) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const getColor = () => {
    if (progress >= 100) return '#438f74'; // bb-forest-500
    if (progress >= 75) return '#c47d2e'; // bb-amber-600
    return '#cb3a40'; // bb-crimson-600
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e9ecef"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={getColor()}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-bb-charcoal-800">{value}</span>
          <span className="text-xs text-bb-slate-500">/ {target}</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-bb-slate-600">{label}</span>
    </div>
  );
}
