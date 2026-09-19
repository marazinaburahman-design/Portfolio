import { motion } from 'framer-motion'

const offsets = {
  up: { x: 0, y: 70 },
  down: { x: 0, y: -70 },
  left: { x: 80, y: 0 },
  right: { x: -80, y: 0 },
  scale: { x: 0, y: 28, scale: 0.9 },
}

export const smoothEase = [0.22, 1, 0.36, 1]

export default function MotionReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.75,
  amount = 0.2,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div
  const offset = offsets[direction] || offsets.up

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      variants={{
        hidden: {
          opacity: 0,
          x: offset.x || 0,
          y: offset.y || 0,
          scale: offset.scale || 1,
          filter: 'blur(8px)',
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: { duration, delay, ease: smoothEase },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 45, scale: 0.94, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: smoothEase },
  },
}
