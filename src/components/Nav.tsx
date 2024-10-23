'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItem = ({ children, href }) => {
  const path = usePathname()
  return (
    <Link
      className={`
      px-4 py-1
      text-md font-josefin font-thin tracking-widest uppercase text-slate-500
      link ${href === path ? 'text-emerald-700 decoration-dotted underline decoration-1' : ''}
      hover:text-emerald-700 hover:underline
      underline-offset-4 decoration-2`}
      href={href}
    >
      {children}
    </Link>
  )
}

const Nav = () => {
  return (
    <nav className="flex justify-around font-alfa">
      <NavItem href="/">/</NavItem>
      <NavItem href="/now">Now</NavItem>
      <NavItem href="/work">Work</NavItem>
      <NavItem href="/blog">Blog</NavItem>
    </nav>
  )
}

export default Nav
