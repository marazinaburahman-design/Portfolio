import { motion } from 'framer-motion'
import MotionReveal, { staggerContainer, staggerItem } from './MotionReveal'

const EDUCATION = [
  {
    title: 'Bachelor Of Engineering',
    place: 'Mohamed Institute Of Education & Technology College Trichy',
    years: '2020-2023 | Completed With 7.8 CGPA',
    icon: '🎓',
  },
  {
    title: 'Diploma In Mechanical Engineering',
    place: 'MIET Polytechnic College Trichy',
    years: '2017-2020 | Completed With 7.2 CGPA',
    icon: '🏫',
  },
  {
    title: 'Secondary School Leaving Certificate',
    place: 'Punitha Arockia Annai Higher Secondary School',
    years: '2016-2017 | Completed With 86%',
    icon: '📱',
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-[#F0F1FB] py-20 md:py-40 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <MotionReveal direction="up">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-center flex items-center gap-2 justify-center mb-2">
            🎓 My <span className="text-indigo-700">Education</span>
          </h2>
          <p className="text-center text-slate-500 text-xs md:text-base mt-3 px-2 md:px-4">
            Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
          </p>
        </MotionReveal>

        <motion.div
          className="mt-8 md:mt-12 flex flex-col gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {EDUCATION.map((e, index) => (
            <motion.div
              key={e.title}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex overflow-hidden"
            >
              <motion.div
                className="w-20 md:w-28 bg-indigo-100 flex items-center justify-center text-3xl md:text-4xl shrink-0"
                initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08, type: 'spring' }}
              >
                {e.icon}
              </motion.div>

              <div className="p-4 md:p-6 flex-grow">
                <motion.h3
                  className="font-bold text-base md:text-lg text-indigo-950"
                  initial={{ x: 35, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.1 }}
                >
                  {e.title}
                </motion.h3>

                <motion.p
                  className="text-slate-500 text-xs md:text-sm mt-1"
                  initial={{ x: 45, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.18 }}
                >
                  {e.place}
                </motion.p>

                <motion.p
                  className="text-green-600 font-semibold mt-2 text-xs md:text-sm"
                  initial={{ x: 55, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 + 0.26 }}
                >
                  {e.years}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
