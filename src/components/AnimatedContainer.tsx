'use client'

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'

interface AnimatedContainerProps {
  children: React.ReactNode,
  className: string
  initial?: Record<string, any>;
  animation?: Record<string, any>;
  transition?: Record<string, any>;
  whileInHover?: Record<string, any>;
}

export function AnimatedContainer({
  children,
  className,
  initial,
  animation,
  transition,
  whileInHover
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={initial ?? { scale: 0, y: -20 }}
      animate={animation ?? { scale: 1, y: 0 }}
      transition={
        transition ??
        {
          delay: 0.5,
          duration: 0.3,
          ease: 'easeInOut',
        }
      }
      whileHover={whileInHover ?? undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
