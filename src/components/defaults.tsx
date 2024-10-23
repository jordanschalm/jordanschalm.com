export const A = ({ children, href }) => (
  <a className="text-emerald-400 underline" href={href}>
    {children}
  </a>
)

export const P = ({ children }) => <p className="pb-2 text-lg">{children}</p>

export const H1 = ({ children }) => (
  <h1 className="text-3xl font-alfa font-bold mb-4">{children}</h1>
)

export const H2 = ({ children }) => (
  <h2 className="text-xl text-left font-medium mb-2">{children}</h2>
)
