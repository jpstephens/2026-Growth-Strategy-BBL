import { useInView } from '../../hooks/useInView'

interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Card({ title, children, className = '' }: CardProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`card ${className} transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {title && <h3 className="text-h3 mb-md">{title}</h3>}
      {children}
    </div>
  )
}
