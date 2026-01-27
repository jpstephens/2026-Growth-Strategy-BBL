'use client';

interface StatCardProps {
  label: string;
  value: number | string;
  subtitle?: string;
  format?: 'number' | 'currency' | 'percent';
  status?: 'success' | 'warning' | 'danger' | 'neutral';
  icon?: React.ReactNode;
}

export function StatCard({ label, value, subtitle, format = 'number', status = 'neutral', icon }: StatCardProps) {
  const formatValue = (v: number | string) => {
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

  // Accessible color combinations with proper contrast ratios
  const statusStyles = {
    success: {
      bg: 'bg-bb-forest-50',
      border: 'border-bb-forest-300',
      text: 'text-bb-forest-800',
      accent: 'bg-bb-forest-600',
      subtitle: 'text-bb-forest-700',
    },
    warning: {
      bg: 'bg-bb-amber-50',
      border: 'border-bb-amber-300',
      text: 'text-bb-amber-900',
      accent: 'bg-bb-amber-600',
      subtitle: 'text-bb-amber-800',
    },
    danger: {
      bg: 'bg-bb-crimson-50',
      border: 'border-bb-crimson-300',
      text: 'text-bb-crimson-800',
      accent: 'bg-bb-crimson-600',
      subtitle: 'text-bb-crimson-700',
    },
    neutral: {
      bg: 'bg-white',
      border: 'border-bb-slate-200',
      text: 'text-bb-charcoal-900',
      accent: 'bg-bb-steel-600',
      subtitle: 'text-bb-slate-700',
    },
  };

  const styles = statusStyles[status];

  return (
    <div className={`${styles.bg} rounded-lg shadow border ${styles.border} p-4 relative overflow-hidden`}>
      {/* Accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${styles.accent}`} />

      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold text-bb-slate-700 uppercase tracking-wide mb-1">
            {label}
          </div>
          <div className={`text-2xl font-bold ${styles.text}`}>
            {formatValue(value)}
          </div>
          {subtitle && (
            <div className={`text-sm ${styles.subtitle} mt-1`}>{subtitle}</div>
          )}
        </div>
        {icon && (
          <div className={`p-2 rounded-lg ${styles.bg}`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
