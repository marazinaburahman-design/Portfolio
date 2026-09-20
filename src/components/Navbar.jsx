import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LINKS = ['Home', 'About', 'Skills', 'Education', 'Work', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = LINKS.map(link => ({ id: link.toLowerCase(), element: document.getElementById(link.toLowerCase()) })).filter(s => s.element)
      const current = sections.find(s => { const rect = s.element.getBoundingClientRect(); return rect.top <= 110 && rect.bottom >= 110 })
      if (current) setActiveLink(current.id)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200" animate={{ boxShadow: scrolled ? '0 10px 30px rgba(15,23,42,.10)' : '0 0 0 rgba(0,0,0,0)' }}>
      <div className="w-4xl md:w-4/5 mx-auto flex items-center justify-between px-6 py-4">
        <motion.a href="#home" className="font-display font-bold text-xl flex items-center gap-2" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <motion.span className="w-7 h-7 rounded-md bg-indigo-700 text-white flex items-center justify-center text-xs" whileHover={{ rotate: 12 }}>{'</>'}</motion.span> Abdur Rahman
        </motion.a>
        <nav className="hidden md:flex gap-8 font-medium text-slate-700 text-lg">
          {LINKS.map((l) => <motion.a key={l} href={`#${l.toLowerCase()}`} whileHover={{ y: -2 }} className={`pb-1 border-b-4 transition-colors ${activeLink === l.toLowerCase() ? 'border-indigo-700 text-indigo-700' : 'border-transparent hover:border-indigo-700 hover:text-indigo-700'}`}>{l}</motion.a>)}
        </nav>
        <motion.button className="md:hidden text-slate-700" onClick={() => setOpen(!open)} whileTap={{ scale: 0.88 }} aria-label="Toggle menu">
          <motion.span className="block text-2xl" animate={{ rotate: open ? 90 : 0 }}>{open ? '✕' : '☰'}</motion.span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && <>
          <motion.div className="fixed inset-0 bg-slate-900/60 md:hidden z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.div className="fixed top-0 right-0 h-screen w-64 bg-indigo-900 text-white md:hidden z-50 overflow-hidden" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
            <div className="flex justify-end p-4"><motion.button onClick={() => setOpen(false)} className="text-2xl font-bold" whileHover={{ rotate: 90, scale: 1.1 }}>✕</motion.button></div>
            <nav className="flex flex-col pt-4">{LINKS.map((l, idx) => <motion.a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * .06 }} className={`text-lg font-medium px-6 py-4 border-b ${activeLink === l.toLowerCase() ? 'bg-indigo-800 text-indigo-200 border-indigo-400' : 'hover:bg-indigo-800 border-indigo-700'}`}>{l}</motion.a>)}</nav>
          </motion.div>
        </>}
      </AnimatePresence>
    </motion.header>
  )
}
