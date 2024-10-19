import Link from 'next/link'

const NavItem = ({ children, href }) => (
  <Link
    className="px-2 py-4 text-md font-thin tracking-widest uppercase text-slate-500"
    href={href}
  >
    {children}
  </Link>
)

export default () => (
  <nav className="my-2 mx-8 flex justify-between">
    <NavItem href="/">/</NavItem>
    <NavItem href="/work">Work</NavItem>
    <NavItem href="/now">Now</NavItem>
    <NavItem href="/contact">Contact</NavItem>
  </nav>
)
