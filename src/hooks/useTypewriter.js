import { useEffect, useState } from 'react'

export function useTypewriter(
  texts,
  speed = 90,
  pause = 1800
) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (!texts || texts.length === 0) {
      setDisplay('')
      return
    }

    let textIndex = 0
    let charIndex = 0
    let deleting = false
    let timeout

    const tick = () => {
      const currentText = texts[textIndex]

      if (!deleting) {
        charIndex += 1

        setDisplay(currentText.slice(0, charIndex))

        if (charIndex >= currentText.length) {
          timeout = setTimeout(() => {
            deleting = true
            tick()
          }, pause)

          return
        }

        timeout = setTimeout(tick, speed)
      } else {
        charIndex -= 1

        setDisplay(currentText.slice(0, charIndex))

        if (charIndex <= 0) {
          charIndex = 0
          deleting = false
          textIndex = (textIndex + 1) % texts.length
        }

        timeout = setTimeout(
          tick,
          deleting ? speed / 2 : speed
        )
      }
    }

    timeout = setTimeout(tick, speed)

    return () => {
      clearTimeout(timeout)
    }
  }, [JSON.stringify(texts), speed, pause])

  return display
}