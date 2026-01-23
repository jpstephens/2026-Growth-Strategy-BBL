interface StatCardProps {
  label: string
  value: string | number
  unit?: string
  highlight?: boolean
  size?: 'lg' | 'xl' | '2xl'
}

export default function StatCard({
  label,
  value,
  unit,
  highlight = false,
  size = 'xl'
}: StatCardProps) {
  const sizeMap = {
    lg: 'p-lg',
    xl: 'p-xl',
    '2xl': 'p-2xl',
  }

  const textSizeMap = {
    lg: 'text-h2',
    xl: 'text-display',
    '2xl': 'text-6xl',
  }

  return (
    <div className={`${sizeMap[size]} rounded-lg border-2 ${highlight ? 'bg-bb-cyan/10 border-bb-cyan' : 'bg-bb-light-gray border-bb-border'}`}>
      <p className="text-base text-bb-dark-gray mb-md font-medium">{label}</p>
      <p className={`${textSizeMap[size]} font-bold ${highlight ? 'text-bb-cyan' : 'text-bb-black'}`}>
        {value}{unit ? ` ${unit}` : ''}
      </p>
    </div>
  )
}
