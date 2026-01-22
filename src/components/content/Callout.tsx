interface CalloutProps {
  variant: 'info' | 'warning' | 'critical' | 'success'
  title?: string
  children: React.ReactNode
}

const styles = {
  info: {
    container: 'bg-bb-cyan/10 border-l-4 border-bb-cyan',
    icon: 'ℹ️',
  },
  warning: {
    container: 'bg-warning/10 border-l-4 border-warning',
    icon: '⚠️',
  },
  critical: {
    container: 'bg-error/10 border-l-4 border-error',
    icon: '🚨',
  },
  success: {
    container: 'bg-success/10 border-l-4 border-success',
    icon: '✓',
  },
}

export default function Callout({ variant, title, children }: CalloutProps) {
  const style = styles[variant]

  return (
    <div className={`${style.container} rounded-sm p-md my-md`}>
      <div className="flex gap-md">
        <span className="text-lg flex-shrink-0">{style.icon}</span>
        <div>
          {title && <h4 className="font-semibold text-bb-black mb-xs">{title}</h4>}
          <div className="text-sm text-bb-dark-gray">{children}</div>
        </div>
      </div>
    </div>
  )
}
