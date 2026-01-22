interface MetricCardProps {
  label: string
  value: string | number
  unit?: string
  highlight?: boolean
}

export default function MetricCard({ label, value, unit, highlight = false }: MetricCardProps) {
  return (
    <div className={`p-md rounded-md border ${highlight ? 'bg-bb-cyan/10 border-bb-cyan' : 'bg-bb-light-gray border-bb-border'}`}>
      <p className="text-sm text-bb-dark-gray mb-xs">{label}</p>
      <p className={`text-h3 font-bold ${highlight ? 'text-bb-cyan' : 'text-bb-black'}`}>
        {value}{unit ? ` ${unit}` : ''}
      </p>
    </div>
  )
}
