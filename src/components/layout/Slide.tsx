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
    gradient: 'bg-gradient-to-br from-bb-slate-50 to-white',
  }

  return (
    <div
      className={`
        w-full h-screen
        flex items-center justify-center
        ${backgroundVariants[variant]}
        overflow-hidden
        ${className}
      `}
    >
      {/* Scaling container - fixed design size, CSS scales to fit */}
      <div className="slide-scaler">
        <motion.div
          className="w-full h-full p-8 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={Math.random()}
        >
          {children}
        </motion.div>
      </div>
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
