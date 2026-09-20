import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import MotionReveal, { staggerContainer, staggerItem } from './MotionReveal'

const PROJECTS = [
  {
    name: 'Netflix-React-Clone',
    color: 'from-red-500 to-neutral-900',
    description:
      'Offering A User-Friendly Login Page And A Dynamic Home Page With An Extensive Library Of Movies And TV Shows.',
    image: '/images/padam.png',
    viewUrl: 'https://netflix-clone-umber-two.vercel.app/',
    codeUrl: 'https://github.com/marazinaburahman-design/Netflix-clone',
  },
  {
    name: 'Weahter-App',
    color: 'from-emerald-700 to-neutral-900',
    description:
      'Explore beautiful resorts with interactive features and detailed information.',
    image: '/images/vanam.png',
    viewUrl: 'https://weather-app-six-blue-90.vercel.app/',
    codeUrl: 'https://github.com/marazinaburahman-design/Weather-App',
  },
  {
    name: 'Docgen AI ',
    color: 'from-fuchsia-500 to-slate-900',
    description:
      'A social media platform clone with dynamic feeds and user interactions.',
    image: '/images/image.png',
    viewUrl: 'https://robo-repo.vercel.app/',
    codeUrl: 'https://github.com/AbuDeveloperPassio/robo-repo.git',
  },
  {
    name: 'Gaming Platform React Clone',
    color: 'from-amber-500 to-orange-800',
    description:
      'Full-featured e-commerce platform with product listings and shopping cart.',
    image: '/images/gg.png',
    viewUrl: 'https://mosh-gaming-web-app.vercel.app/',
    codeUrl:
      'https://github.com/AbuDeveloperPassio/Mosh-gaming-web-App.git',
  },
  {
    name: 'Electronic-shop',
    color: 'from-sky-500 to-indigo-900',
    description:
      'Created A Sleek React Front-End Login Page With Full Specifications For New Comers.',
    image: '/images/ff.png',
    viewUrl: 'https://electronic-shop-mocha.vercel.app/',
    codeUrl: 'https://github.com/AbuDeveloperPassio/Electronic-shop.git',
  },
  {
    name: "L'Artisan Boutique",
    color: 'from-amber-600 to-yellow-900',
    description:
      'Premium artisan bakery platform. Freshly baked happiness delivered daily with 24-hour fermented loaves and masterpiece collections.',
    image: '/images/artisan-boutique.jpg',
    viewUrl: 'https://backery-shop-staf.vercel.app/',
    codeUrl: 'https://github.com/AbuDeveloperPassio/Cake-original.git',
  },
  {
    name: "Udemy Html Css Clone",
    color: 'from-amber-600 to-yellow-900',
    description:
      'Premium artisan bakery platform. Freshly baked happiness delivered daily with 24-hour fermented loaves and masterpiece collections.',
    image: '/images/dd.png',
    viewUrl: 'https://project-1-opal-phi-40.vercel.app/',
    codeUrl: 'https://github.com/marazinaburahman-design/Project-1',
  }
]

export default function Work() {
  return (
    <section
      id="work"
      className="bg-slate-950 py-60 overflow-hidden"
    >
      <div className="w-4xl md:w-4/5 mx-auto px-6">

        {/* Section Title */}
        <MotionReveal direction="up">
          <h2 className="font-display text-3xl font-bold text-white flex items-center gap-2 justify-center">
            💻 Projects{' '}<span className="text-amber-400">Made</span>
          </h2>
        </MotionReveal>

        {/* Projects Grid */}
        <motion.div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.08 }}>

          {PROJECTS.map((p) => (
            <motion.div key={p.name} variants={staggerItem} whileHover={{ y: -10, scale: 1.015 }}>
              <TiltCard className="rounded-xl overflow-hidden shadow-md group relative">

              {/* ==============================
                  IMAGE / GRADIENT
              =============================== */}
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="
                    h-[300PX]
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              ) : (
                <div
                  className={`
                    h-[300PX]
                    bg-gradient-to-br
                    ${p.color}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  `}
                />
              )}

              {/* ==============================
                  NORMAL TITLE BAR
                  Visible normally
              =============================== */}
              <div
                className="
                  bg-amber-400
                  text-slate-900
                  font-semibold
                  px-4
                  py-3
                  text-sm
                  relative
                  z-10
                "
              >
                {p.name}
              </div>

              {/* ==============================
                  HOVER CONTAINER
                  IMPORTANT:
                  NO bg-white/90 HERE
              =============================== */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-20
                  overflow-hidden
                "
              >

                {/* ==============================
                    SLIDING HOVER PANEL
                    White background ONLY HERE
                =============================== */}
                <div
                  className="
                    bg-white/90
                    transform
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-300
                    ease-out
                  "
                >

                  {/* Hover Title */}
                  <div
                    className="
                      bg-amber-400
                      text-slate-900
                      font-semibold
                      px-4
                      py-3
                      text-sm
                    "
                  >
                    {p.name}
                  </div>

                  {/* Content */}
                  <div
                    className="
                      px-4
                      py-8
                      min-h-[200px]
                      flex
                      flex-col
                      justify-around
                    "
                  >

                    {/* Description */}
                    <p className="text-slate-900 text-sm leading-relaxed">
                      {p.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-6">

                      {/* View */}
                      <a
                        href={p.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1
                          bg-slate-900
                          hover:bg-slate-800
                          text-white
                          py-2
                          px-3
                          rounded
                          font-medium
                          text-sm
                          flex
                          items-center
                          justify-center
                          gap-2
                          transition-colors
                        "
                      >
                        <span>👁</span>
                        View
                      </a>

                      {/* Code */}
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1
                          bg-slate-900
                          hover:bg-slate-800
                          text-white
                          py-2
                          px-3
                          rounded
                          font-medium
                          text-sm
                          flex
                          items-center
                          justify-center
                          gap-2
                          transition-colors
                        "
                      >
                        <span>&lt;/&gt;</span>
                        Code
                      </a>

                    </div>
                  </div>
                </div>
              </div>

              </TiltCard>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}