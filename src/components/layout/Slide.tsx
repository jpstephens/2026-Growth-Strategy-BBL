interface SlideProps {
  children: React.ReactNode
  className?: string
}

export default function Slide({ children, className = '' }: SlideProps) {
  return (
    <div className={`w-full h-screen flex flex-col justify-center items-center px-3xl py-2xl bg-bb-white overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
