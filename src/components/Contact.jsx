import { motion } from 'framer-motion'
import MotionReveal from './MotionReveal'

export default function Contact() {
  return (
    <section id="contact" className="w-4/5 mx-auto px-6 py-20 text-center overflow-hidden">
      <MotionReveal direction="up">
        <h2 className="font-display text-3xl font-bold">Let's <span className="text-indigo-700">Connect</span></h2>
        <p className="mt-3 text-slate-600">Have a project in mind or just want to say hi? Reach out anytime.</p>
      </MotionReveal>
      <MotionReveal direction="scale" delay={0.1} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a href="mailto:amaljosen01@gmail.com" className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full" whileHover={{ y: -5, scale: 1.045 }} whileTap={{ scale: 0.96 }}>✉️ amaljosen01@gmail.com</motion.a>
        <motion.a href="tel:+919080388310" className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-full" whileHover={{ y: -5, scale: 1.045 }} whileTap={{ scale: 0.96 }}>📞 +91 908-038-8310</motion.a>
      </MotionReveal>
    </section>
  )
}
