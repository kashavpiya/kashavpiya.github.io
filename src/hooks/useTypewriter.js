import { useState, useEffect, useRef } from 'react'

/**
 * Types out `text` one character at a time.
 * Returns { displayed, done }.
 * delay: ms between characters (default 45)
 * startDelay: ms before typing begins (default 600)
 */
export function useTypewriter(text, { delay = 45, startDelay = 600 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!text) {
      setDisplayed('')
      setDone(false)
      return
    }

    setDisplayed('')
    setDone(false)
    let i = 0

    const start = setTimeout(() => {
      const tick = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
          timeoutRef.current = setTimeout(tick, delay)
        } else {
          setDone(true)
        }
      }
      tick()
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearTimeout(timeoutRef.current)
    }
  }, [text, delay, startDelay])

  return { displayed, done }
}
