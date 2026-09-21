import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useTypewriter } from '../hooks/useTypewriter'
import ParticleField from './ParticleField'
import Social from './Social'
import TiltCard from './TiltCard'
import { smoothEase } from './MotionReveal'

export default function Hero() {
  const typed = useTypewriter([
    'Frontend Developer',
    'Full Stack Developer',
    'MERN Stack Developer',
    'Backend Developer',
  ])

  return (
    <section id="home" className="relative bg-[#F7F7FB] overflow-hidden min-h-screen flex items-center justify-center py-12">
      <ParticleField />
      <div className="relative w-full max-w-md mx-auto px-4 md:max-w-[2000px] md:w-4/5">
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-16 lg:gap-20">
          <motion.div
            className="md:order-1 text-center md:text-left w-full md:w-auto"
            initial={{ opacity: 0, x: -90, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: smoothEase }}
          >
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-indigo-950 leading-tight"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            >
              Hi There,<br />I'm Abdur <span className="text-orange-500">Rahman</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I Am Into{' '}
              <span className="text-red-700 font-semibold">
                {typed}<span className="caret">|</span>
              </span>
            </motion.p>

            <motion.a
              href="#about"
              className="inline-block mt-8 bg-indigo-700 text-white font-semibold px-7 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-md"
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: smoothEase }}
              whileHover={{ scale: 1.07, y: -3, boxShadow: '0 15px 30px rgba(67,56,202,.28)' }}
              whileTap={{ scale: 0.96 }}
            >
             About Me <FontAwesomeIcon icon={faChevronDown} />
            </motion.a>

            <motion.div
              className="flex justify-center md:justify-start gap-4 mt-10 md:gap-5"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
            >
              <Social animated />
            </motion.div>
          </motion.div>

          <motion.div
            className="md:order-2 flex justify-center w-full md:w-auto"
            initial={{ opacity: 0, x: 90, scale: 0.85, rotate: 4 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: smoothEase }}
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
              <TiltCard>
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl hover:ring-4 hover:ring-indigo-700 transition-all duration-300 flex-shrink-0">
                  <img src="/images/hero.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
