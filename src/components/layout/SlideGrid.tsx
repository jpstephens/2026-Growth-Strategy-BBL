interface SlideGridProps {
  children: React.ReactNode
  columns?: 2 | 3
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function SlideGrid({ children, columns = 2, gap = 'lg' }: SlideGridProps) {
  const gapMap = {
    sm: 'gap-sm',
    md: 'gap-md',
    lg: 'gap-lg',
    xl: 'gap-xl',
  }

  const colsMap = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }

  return (
    <div className={`grid ${colsMap[columns]} ${gapMap[gap]} w-full`}>
      {children}
    </div>
  )
}
