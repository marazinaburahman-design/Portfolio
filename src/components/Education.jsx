import { motion } from 'framer-motion'
import MotionReveal, { staggerContainer, staggerItem } from './MotionReveal'

const EDUCATION = [
  {
    title: 'Bachelor Of Engineering',
    place: 'Mohamed Institute Of Education & Technology College Trichy',
    years: '2020-2023 | Completed With 7.8 CGPA',
    image: '/images/school1.png',
  },
  {
    title: 'Diploma In Mechanical Engineering',
    place: 'MIET Polytechnic College Trichy',
    years: '2017-2020 | Completed With 7.2 CGPA',
    image: '/images/school2.png',
  },
  {
    title: 'Secondary School Leaving Certificate',
    place: 'Punitha Arockia Annai Higher Secondary School',
    years: '2016-2017 | Completed With 86%',
    image: '/images/dd.png',
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#F0F1FB] py-20 md:py-40 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <MotionReveal direction="up">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-center flex items-center gap-2 justify-center mb-2">
            🎓 My <span className="text-indigo-700">Education</span>
          </h2>

          <p className="text-center text-slate-500 text-xs md:text-base mt-3 px-2 md:px-4">
            Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
          </p>
        </MotionReveal>

        {/* Education Cards */}
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
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="
                bg-white
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition-shadow
                flex
                flex-col
                md:flex-row
                overflow-hidden
              "
            >

              {/* IMAGE - RIGHT SIDE */}
              <motion.div
                className="
                  w-full
                  md:w-2/5
                  h-48
                  md:h-auto
                  shrink-0
                  overflow-hidden
                "
                initial={{
                  x: 80,
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </motion.div>

              {/* INFORMATION - LEFT SIDE */}
              <div className="p-5 md:p-8 flex-grow flex flex-col justify-center">

                {/* Title */}
                <motion.h3
                  className="
                    font-bold
                    text-lg
                    md:text-2xl
                    text-indigo-950
                  "
                  initial={{
                    x: -60,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.1,
                    ease: 'easeOut',
                  }}
                >
                  {e.title}
                </motion.h3>

                {/* Place */}
                <motion.p
                  className="
                    text-slate-500
                    text-xs
                    md:text-sm
                    mt-2
                  "
                  initial={{
                    x: -70,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                >
                  {e.place}
                </motion.p>

                {/* Years */}
                <motion.p
                  className="
                    text-green-600
                    font-semibold
                    mt-3
                    text-xs
                    md:text-sm
                  "
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.3,
                    ease: 'easeOut',
                  }}
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