import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function getHomeHeight() {
  const home = document.getElementById('home')
  return home ? home.offsetHeight : 500
}

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > getHomeHeight() * 0.6)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-amber-400 text-indigo-950 shadow-lg flex items-center justify-center text-xl font-bold"
          initial={{
            opacity: 0,
            y: '-110vh',
            scale: 0.55,
            rotate: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            y: '-80vh',
            scale: 0.55,
            rotate: 10,
          }}
          transition={{
            y: {
              type: 'spring',
              stiffness: 115,
              damping: 14,
              mass: 0.9,
            },
            opacity: { duration: 0.18 },
            scale: {
              type: 'spring',
              stiffness: 180,
              damping: 13,
            },
            rotate: {
              type: 'spring',
              stiffness: 150,
              damping: 12,
            },
          }}
          whileHover={{
            y: -6,
            scale: 1.1,
            transition: { type: 'spring', stiffness: 300, damping: 15 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
