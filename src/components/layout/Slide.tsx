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
  const backgroundVariants = {
    default: 'bg-white',
    dark: 'bg-bb-charcoal-800',
    gradient: 'bg-gradient-to-br from-bb-slate-50 to-white',
  }

  return (
    <div className={`
      w-full h-screen
      flex flex-col justify-center items-center
      px-[3vw] py-[2vh]
      ${backgroundVariants[variant]}
      overflow-hidden
      ${className}
    `}>
      <motion.div
        className="w-full max-w-[94vw] max-h-[94vh] mx-auto flex flex-col justify-center"
        style={{
          // Scale content to fit viewport if needed
          fontSize: 'clamp(10px, 1.1vh + 0.5vw, 16px)'
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
