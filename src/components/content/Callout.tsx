interface CalloutProps {
  variant: 'info' | 'warning' | 'critical' | 'success'
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const styles = {
  info: {
    container: 'bg-gradient-to-r from-bb-electric-50 to-bb-electric-100/50 border-l-6 border-bb-electric-500',
    iconBg: 'bg-bb-electric-500',
    titleColor: 'text-bb-electric-700',
    icon: '💡',
  },
  warning: {
    container: 'bg-gradient-to-r from-bb-sunset-50 to-bb-sunset-100/50 border-l-6 border-bb-sunset-500',
    iconBg: 'bg-bb-sunset-500',
    titleColor: 'text-bb-sunset-700',
    icon: '⚠',
  },
  critical: {
    container: 'bg-gradient-to-r from-bb-burgundy-50 to-bb-burgundy-100/50 border-l-6 border-bb-burgundy-500',
    iconBg: 'bg-bb-burgundy-500',
    titleColor: 'text-bb-burgundy-700',
    icon: '⚠',
  },
  success: {
    container: 'bg-gradient-to-r from-bb-emerald-50 to-bb-emerald-100/50 border-l-6 border-bb-emerald-500',
    iconBg: 'bg-bb-emerald-500',
    titleColor: 'text-bb-emerald-700',
    icon: '✓',
  },
}

export default function Callout({ variant, title, children, size = 'md', className = '' }: CalloutProps) {
  const style = styles[variant]

  const sizeMap = {
    sm: 'p-md',
    md: 'p-lg',
    lg: 'p-2xl',
  }

  const iconSizeMap = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-10 h-10 text-xl',
    lg: 'w-12 h-12 text-2xl',
  }

  return (
    <div className={`${style.container} rounded-lg ${sizeMap[size]} shadow-md ${className}`}>
      <div className="flex items-start gap-lg">
        <div className={`${style.iconBg} ${iconSizeMap[size]} rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm`}>
          {style.icon}
        </div>
        <div className="flex-1 min-w-0">
          {title && <h4 className={`${style.titleColor} font-semibold text-lg mb-sm`}>{title}</h4>}
          <div className="text-bb-slate-700 text-base leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
