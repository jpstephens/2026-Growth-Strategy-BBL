interface SectionProps {
  title?: string
  children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="section">
      {title && <h2 className="text-h2 mb-lg">{title}</h2>}
      <div className="space-y-lg">{children}</div>
    </div>
  )
}
