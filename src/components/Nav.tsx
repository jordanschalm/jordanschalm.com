import Link from 'next/link'

const NavItem = ({ children, href }) => (
  <Link
    className="
      px-4 py-1
      text-md font-thin tracking-widest uppercase text-slate-500
      hover:text-amber-700 hover:underline
      underline-offset-4 decoration-2"
    href={href}
  >
    {children}
  </Link>
)

const Nav = () => (
  <nav className="flex justify-around font-alfa">
    <NavItem href="/">/</NavItem>
    <NavItem href="/now">Now</NavItem>
    <NavItem href="/work">Work</NavItem>
    <NavItem href="/blog">Blog</NavItem>
  </nav>
)

export default Nav
