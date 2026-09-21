import MotionReveal from './MotionReveal'
import Social from './Social'

const LINKS = ['Home', 'About', 'Skills', 'Education', 'Work', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 overflow-hidden">
      <div className="w-4/5 mx-auto px-6 grid sm:grid-cols-3 gap-10">
        <MotionReveal direction="right">
          <h3 className="font-bold text-lg">Abdur Rahman's Portfolio</h3>
          <p className="text-slate-500 mt-2 text-sm">Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
        </MotionReveal>
        <MotionReveal direction="up" delay={0.08}>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-slate-600 text-sm">{LINKS.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-indigo-700">› {l}</a></li>)}</ul>
        </MotionReveal>
        <MotionReveal direction="left" delay={0.12}>
          <h3 className="font-bold text-lg">Contact Info</h3>
          <p className="text-slate-600 text-sm mt-2">📞 +94 772 425 826</p><p className="text-slate-600 text-sm">✉️ rahmannoon12@gmail.com</p><p className="text-slate-600 text-sm">📍 KattanKudy - Sri Lanka</p>
          <div className="flex gap-2 mt-3"><Social label="in" /><Social label="gh" /><Social label="@" /><Social label="wa" /><Social label="tg" /></div>
        </MotionReveal>
      </div>
      <MotionReveal direction="up"><p className="text-center text-slate-400 text-sm mt-10">Designed With ❤️ By Abdur Rahman</p></MotionReveal>
    </footer>
  )
}
