import Link from 'next/link'

const NavItem = ({ children, href }) => (
  <Link
    className="px-4 py-2 text-md font-thin tracking-widest uppercase text-slate-500
    hover:text-amber-700 hover:underline underline-offset-4 decoration-2 transition-all"
    href={href}
  >
    {children}
  </Link>
)

export default () => (
  <nav className="flex justify-around">
    <NavItem href="/">/</NavItem>
    <NavItem href="/now">Now</NavItem>
    <NavItem href="/work">Work</NavItem>
    <NavItem href="/blog">Blog</NavItem>
  </nav>
)
