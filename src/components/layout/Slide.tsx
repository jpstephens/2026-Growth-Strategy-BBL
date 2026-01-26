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
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// Animation variants for slide content children
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
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
        flex flex-col justify-center items-center
        ${backgroundVariants[variant]}
        overflow-hidden
        ${className}
      `}
    >
      <motion.div
        className="slide-content w-full max-w-[96vw] max-h-[96vh] flex flex-col justify-center items-center"
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
