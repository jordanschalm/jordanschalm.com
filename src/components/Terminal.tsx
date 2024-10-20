'use client'

import './Terminal/index.css'
import React, { useEffect, useState } from 'react'
import { invokeOnce } from '@/util/util'

// Typestroke speeds (ms)
const QUICK = 200
const SLOW = 500
const WAIT_BEFORE_TYPING = 3000

type TerminalProps = {
  text: string
}

const TerminalTypeEffect = (text, setVisibleText, setBlinking) => {
  return () => {
    // Holds the timer reference for the timer most recently created by this effect, used in cleanup function
    let timer

    // Invoked once per component mount. Types out the configured text.
    const typeText = () => {
      let i = 1
      let typeTime = QUICK

      // When we start typing into the terminal, stop blinking the cursor.
      setBlinking(false)

      // Define a closure which will type a single letter each time it is invoked.
      const typeCharacter = () => {
        if (i > text.length) {
          return
        }

        // Add one character to visible text
        const visibleText = text.substring(0, i++)

        // Select next typestroke time (this is a simple Markov chain!)
        // The 1.2 coefficient accounts for added jitter
        if (typeTime < QUICK * 1.2) {
          typeTime = Math.random() < 0.66 ? QUICK : SLOW
        } else {
          typeTime = Math.random() < 0.5 ? QUICK : SLOW
        }

        // Add ±10% of jitter
        const jitter = typeTime + (Math.random() - 0.5) * (0.1 * typeTime)
        timer = setTimeout(typeCharacter, typeTime + jitter)
        setVisibleText(visibleText)
      }

      typeCharacter()
    }

    timer = setTimeout(() => typeText, WAIT_BEFORE_TYPING)

    return () => {
      clearTimeout(timer)
    }
  }
}

export default function Terminal({ text }: TerminalProps) {
  const [visibleText, setVisibleText] = useState('')
  const [blinking, setBlinking] = useState(true)

  useEffect(() => {
    let timer

    // Handles typing out the name into the terminal.
    const _typeName = (text) => {
      let i = 1
      let typeTime = QUICK

      // When we start typing into the terminal, stop blinking the cursor.
      setBlinking(false)

      // Define a closure which will type a single letter each time it is invoked.
      const typeOne = () => {
        if (i > text.length) {
          return
        }

        // Add one character to visible text
        const visibleText = text.substring(0, i++)

        // Select next typestroke time (this is a simple Markov chain!)
        // The 1.2 coefficient accounts for added jitter
        if (typeTime < QUICK * 1.2) {
          typeTime = Math.random() < 0.66 ? QUICK : SLOW
        } else {
          typeTime = Math.random() < 0.5 ? QUICK : SLOW
        }

        // Add ±10% of jitter
        const jitter = typeTime + (Math.random() - 0.5) * (0.1 * typeTime)
        timer = setTimeout(typeOne, typeTime + jitter)
        console.log('setting visible text:', visibleText)
        setVisibleText(visibleText)
      }

      typeOne()
    }

    timer = setTimeout(() => _typeName(text), WAIT_BEFORE_TYPING)

    return () => {
      clearTimeout(timer)
    }
  }, [text])

  return (
    <div className="Terminal">
      <div className="Terminal__container">
        <h1 className="Terminal__text">{visibleText}</h1>
        <div className={`Terminal__cursor ${blinking ? 'blinking' : ''}`} />
      </div>
    </div>
  )
}
