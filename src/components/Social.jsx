import { motion } from 'framer-motion'

export default function Social({ label, href = '#', animated = false }) {
  const props = animated ? {
    variants: {
      hidden: { opacity: 0, y: 22, scale: 0.6 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 18 } },
    }
  } : {}

  return (
    <motion.a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-slate-950 text-cyan-300 flex items-center justify-center text-xs font-semibold"
      whileHover={{ y: -5, scale: 1.15, rotate: -5, backgroundColor: '#4338ca', color: '#ffffff' }}
      whileTap={{ scale: 0.88 }}
    >
      {label}
    </motion.a>
  )
}
