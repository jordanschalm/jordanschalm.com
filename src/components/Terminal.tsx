'use client'

import React, { useEffect, useState } from 'react'

// Typestroke speeds (ms)
const QUICK = 200
const SLOW = 500

// Time to wait after page load to start typing
const WAIT_BEFORE_TYPING = 5000

type TerminalProps = {
  text: string
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

        // Select next type-stroke time (this is a simple Markov chain!)
        // The 1.2 coefficient accounts for added jitter
        if (typeTime < QUICK * 1.2) {
          typeTime = Math.random() < 0.66 ? QUICK : SLOW
        } else {
          typeTime = Math.random() < 0.5 ? QUICK : SLOW
        }

        // Add ±10% of jitter
        const jitter = typeTime + (Math.random() - 0.5) * (0.1 * typeTime)
        timer = setTimeout(typeOne, typeTime + jitter)
        setVisibleText(visibleText)
      }

      typeOne()
    }

    timer = setTimeout(() => _typeName(text), WAIT_BEFORE_TYPING)

    // Return a cleanup function which clears all timeouts
    return () => {
      clearTimeout(timer)
    }
  }, [text])

  return (
    <div className="flex items-center p-4 bg-slate-700 rounded-xl">
      <h1 className="font-mono text-3xl font-bold inline-block text-white m-0 p-0">
        {visibleText}
      </h1>
      <Cursor blinking={blinking} />
    </div>
  )
}

const Cursor = ({ blinking }) => {
  let animation = ''
  if (blinking) {
    animation = 'animate-blink'
  }
  return <div className={`inline-block h-10 bg-emerald-600 w-4 ${animation}`} />
}
