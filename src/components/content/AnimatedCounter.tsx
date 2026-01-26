import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  format?: 'number' | 'currency' | 'percent' | 'compact'
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
  delay?: number
}

export default function AnimatedCounter({
  value,
  duration = 1.5,
  format = 'number',
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)

  const formatValue = (val: number): string => {
    switch (format) {
      case 'currency':
        if (val >= 1000000) {
          return `$${(val / 1000000).toFixed(decimals)}M`
        } else if (val >= 1000) {
          return `$${(val / 1000).toFixed(decimals)}K`
        }
        return `$${val.toFixed(decimals)}`
      case 'percent':
        return `${val.toFixed(decimals)}%`
      case 'compact':
        if (val >= 1000000) {
          return `${(val / 1000000).toFixed(decimals)}M`
        } else if (val >= 1000) {
          return `${(val / 1000).toFixed(decimals)}K`
        }
        return val.toFixed(decimals)
      default:
        return val.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
    }
  }

  const displayValue = useTransform(motionValue, (latest) => {
    return `${prefix}${formatValue(latest)}${suffix}`
  })

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        animate(motionValue, value, {
          duration,
          ease: 'easeOut',
        })
      }, delay * 1000)

      return () => clearTimeout(timeoutId)
    }
    return undefined
  }, [isInView, value, duration, delay, motionValue])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayValue}
    </motion.span>
  )
}

// Simplified version for inline use with text
export function AnimatedNumber({
  value,
  duration = 1.5,
  className = '',
}: {
  value: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)

  const displayValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration,
        ease: 'easeOut',
      })
    }
    return undefined
  }, [isInView, value, duration, motionValue])

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  )
}
