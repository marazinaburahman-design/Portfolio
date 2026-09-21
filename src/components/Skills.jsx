import { motion } from 'framer-motion'
import MotionReveal, { staggerContainer, staggerItem } from './MotionReveal'

const SKILLS = [
  { name: 'ReactJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'ExpressJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'NodeJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MaterialUI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 py-20 sm:py-24 md:py-32 lg:py-40 min-h-screen overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <MotionReveal
          direction="up"
          className="flex justify-center items-start gap-4 mb-12 md:mb-20"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl mt-1 shrink-0">
            👁️
          </span>

          <h2 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight text-center">
            Skills <span className="text-white ml-2">&</span>{' '}
            <span className="text-yellow-300 ml-2">Abilities</span>
          </h2>
        </MotionReveal>

        <MotionReveal direction="scale">
          <div className="bg-black/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 backdrop-blur-sm border border-purple-500/30">

            <motion.div
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.0001 }}
            >

              {SKILLS.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={staggerItem}
                  whileHover={{
                    y: -5,
                    borderColor: '#fbbf24',
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="bg-slate-950/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col items-center justify-center gap-3 text-white border border-purple-500/30 min-h-[130px] sm:min-h-[145px] md:min-h-[160px] lg:min-h-[170px] cursor-pointer hover:border-yellow-400/60 transition-all"
                >

                  <motion.div
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-full w-full object-contain drop-shadow-lg"
                      loading="lazy"
                    />
                  </motion.div>

                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-center tracking-tight break-words">
                    {skill.name}
                  </span>

                </motion.div>
              ))}

            </motion.div>

          </div>
        </MotionReveal>

      </div>
    </section>
  )
}