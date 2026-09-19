import { motion } from 'framer-motion'
import MotionReveal from './MotionReveal'

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="w-4/5 mx-auto px-4">
        <MotionReveal direction="up">
          <h2 className="font-display text-4xl md:text-5xl font-bold flex items-center gap-3 justify-center mb-16">
            👤 About <span className="text-indigo-700">Me</span>
          </h2>
        </MotionReveal>

        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl w-full">
            <MotionReveal direction="right" className="flex justify-center md:justify-end">
              <motion.div
                className="w-64 h-80 md:w-72 md:h-96 rounded-3xl bg-slate-200 overflow-hidden shadow-xl"
                whileHover={{ y: -10, rotate: -1.5, scale: 1.025 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <img src="/images/hero.png" alt="Abdur Rahman" className="w-full h-full object-cover" />
              </motion.div>
            </MotionReveal>

            <MotionReveal direction="left" className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold">I'm Abdur Rahman</h3>
              <p className="text-indigo-700 font-semibold text-lg mt-2">Aspiring Full-Stack Developer | MERN Stack</p>
              <p className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg">
                I'm a Full-Stack developer based in Kattankudy, Sri Lanka. Passionate about building responsive and interactive web applications using React.js, Node.js, Express.js, and MongoDB. Completed 6-month MERN Stack training at Marazin Academy. Skilled in JavaScript, Tailwind CSS, Git, and API integration. I love creating real-world web applications and translating design requirements into functional solutions.
              </p>
              <div className="mt-8 space-y-3">
                <p className="text-slate-700"><span className="text-indigo-700 font-semibold">Email:</span> <span className="text-slate-600">rahmannoon12@email.com</span></p>
                <p className="text-slate-700"><span className="text-indigo-700 font-semibold">Phone:</span> <span className="text-slate-600">+94 77 242 5826</span></p>
                <p className="text-slate-700"><span className="text-indigo-700 font-semibold">Location:</span> <span className="text-slate-600">Kattankudy, Sri Lanka</span></p>
              </div>
              <motion.a
                href="https://docs.google.com/document/d/1UatLHvv47MeKzKNxSyTy9HiuqPA544erMnHXouvNfsk/edit?pli=1&tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-indigo-700 text-white font-semibold px-7 py-3 rounded-lg shadow-md"
                whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}
              >Resume ›</motion.a>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
