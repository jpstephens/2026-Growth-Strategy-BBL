import { motion, Variants } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface SlideProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'gradient'
}

// Animation variants for the slide container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Animation variants for slide content children
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

export default function Slide({ children, className = '', variant = 'default' }: SlideProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  const backgroundVariants = {
    default: 'bg-white',
    dark: 'bg-bb-charcoal-800',
    gradient: 'bg-gradient-to-br from-bb-slate-50 to-white',
  }

  // Calculate scale to fit content in viewport
  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current || !contentRef.current) return

      const container = containerRef.current
      const content = contentRef.current

      // Get available space (viewport minus padding)
      const availableWidth = container.clientWidth
      const availableHeight = container.clientHeight

      // Get content's natural size (at scale 1)
      content.style.transform = 'scale(1)'
      const contentWidth = content.scrollWidth
      const contentHeight = content.scrollHeight

      // Calculate scale needed to fit
      const scaleX = availableWidth / contentWidth
      const scaleY = availableHeight / contentHeight
      const newScale = Math.min(scaleX, scaleY, 1) // Never scale up, only down

      setScale(newScale * 0.95) // 95% to add some breathing room
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)

    // Recalculate after fonts load
    document.fonts.ready.then(calculateScale)

    return () => window.removeEventListener('resize', calculateScale)
  }, [children])

  return (
    <div
      ref={containerRef}
      className={`
        w-full h-screen
        flex flex-col justify-center items-center
        p-4
        ${backgroundVariants[variant]}
        overflow-hidden
        ${className}
      `}
    >
      <motion.div
        ref={contentRef}
        className="w-full max-w-6xl origin-center"
        style={{
          transform: `scale(${scale})`,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={Math.random()} // Force re-animation on slide change
      >
        {children}
      </motion.div>
    </div>
  )
}

// Export motion wrapper for individual animated items
export function AnimatedItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  )
}

// Export variants for use in slides that need custom animation
export { containerVariants, itemVariants }
