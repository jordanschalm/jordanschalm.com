import React from 'react'
import './index.css'

// Automatically sets id to kebab-cased title
const Header = ({ title }) => (
  <h1
    id={title
      .toLowerCase()
      .split(' ')
      .join('-')}
    className="Header"
  >
    {title}
  </h1>
)

export default Header
