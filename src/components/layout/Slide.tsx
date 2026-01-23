interface SlideProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'gradient'
}

export default function Slide({ children, className = '', variant = 'default' }: SlideProps) {
  const backgroundVariants = {
    default: 'bg-gradient-to-br from-bb-slate-50 via-white to-bb-slate-100',
    dark: 'bg-gradient-to-br from-bb-navy-900 via-bb-navy-800 to-bb-slate-900',
    gradient: 'bg-gradient-to-br from-bb-electric-50 via-white to-bb-sunset-50',
  }

  return (
    <div className={`
      w-full min-h-screen
      flex flex-col justify-start items-center
      px-lg py-lg
      ${backgroundVariants[variant]}
      overflow-y-auto overflow-x-hidden
      ${className}
    `}>
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  )
}
