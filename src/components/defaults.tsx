export const A = ({ children, href }) => (
  <a className="text-emerald-400 underline" href={href}>
    {children}
  </a>
)

export const P = ({ children }) => <p className="pb-2 text-lg">{children}</p>

export const Header = ({ children }) => (
  <h1 className="text-3xl font-extrabold mb-4">{children}</h1>
)
