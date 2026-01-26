import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

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
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
}

// Animation variants for slide content children
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut' as const,
    },
  },
}

export default function Slide({ children, className = '', variant = 'default' }: SlideProps) {
  const backgroundVariants = {
    default: 'bg-white',
    dark: 'bg-bb-charcoal-800',
    gradient: 'bg-gradient-to-br from-white to-bb-slate-100',
  }

  return (
    <div
      className={`
        slide-container
        w-full h-screen
        flex items-center justify-center
        ${backgroundVariants[variant]}
        overflow-hidden
        px-20 py-[12.5vh]
        ${className}
      `}
    >
      <motion.div
        className="slide-content w-full max-w-[1400px] h-[75vh] flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={Math.random()}
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
