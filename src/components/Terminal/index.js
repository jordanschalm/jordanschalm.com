'use client'

import React, { Component } from 'react'
import './index.css'

// Typestroke speeds (ms)
const QUICK = 200
const SLOW = 500

class Terminal extends Component {
  constructor(props) {
    super(props)

    this._typeName = this._typeName.bind(this)
    this.state = {
      visibleText: '',
      blinking: true,
      timer: null,
    }
  }

  componentDidMount() {
    setTimeout(() => this._typeName(this.props.text), 3000)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      // Reset any animation timers we have and restart cursor animation
      clearTimeout(this.state.timer)
      this._typeName(nextProps.text)
    }
  }

  render() {
    const { blinking, visibleText } = this.state
    return (
      <div className="Terminal">
        <div className="Terminal__container">
          <h1 className="Terminal__text">{visibleText}</h1>
          <div className={`Terminal__cursor ${blinking ? 'blinking' : ''}`} />
        </div>
      </div>
    )
  }

  // Handles typing out the name into the terminal.
  _typeName = (text) => {
    let i = 1
    let typeTime = QUICK

    // When we start typing into the terminal, stop blinking the cursor.
    this.setState({ blinking: false })

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
      const timer = setTimeout(typeOne, typeTime + jitter)

      this.setState({
        visibleText,
        timer,
      })
    }

    typeOne()
  }
}

export default Terminal
