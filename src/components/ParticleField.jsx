import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const containerRef = useRef(null)

  useEffect(() => {
    let script

    const loadParticles = () => {
      if (typeof window.particlesJS !== 'function') {
        console.error('particles.js is not available')
        return
      }

      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1500,
            },
          },

          color: {
            value: '#666666',
          },

          shape: {
            type: 'circle',
          },

          opacity: {
            value: 2.45,
            random: false,
          },

          size: {
            value: 5,
            random: true,
          },

          line_linked: {
            enable: true,
            distance: 170,
            color: '#777777',
            opacity: 0.25,
            width: 3,
          },

          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
          },
        },

        interactivity: {
          detect_on: 'canvas',

          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },

            onclick: {
              enable: false,
            },

            resize: true,
          },

          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },

        retina_detect: true,
      })
    }

    // Load Vincent Garreau's particles.js
    script = document.createElement('script')

    script.src =
      'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'

    script.onload = loadParticles

    script.onerror = () => {
      console.error('Failed to load particles.js')
    }

    document.body.appendChild(script)

    return () => {
      if (window.pJSDom?.length) {
        window.pJSDom.forEach((item) => {
          item?.pJS?.fn?.vendors?.destroypJS?.()
        })

        window.pJSDom = []
      }

      if (script) {
        script.remove()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="particles-js"
      className="absolute inset-0 z-0 w-full h-full"
    />
  )
}