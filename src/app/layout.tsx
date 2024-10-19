import type { Metadata } from 'next'
import './globals.css'
import Terminal from '@/components/Terminal'
import Nav from '@/components/Nav'
import { Inconsolata, Josefin_Slab, Alfa_Slab_One } from 'next/font/google'

// https://fonts.googleapis.com/css?family=Alfa+Slab+One|Josefin+Slab:400,700|Inconsolata:400,700

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jordan Schalm',
  description: "Jordan Schalm's personal site",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <div className="w-full flex flex-col items-center px-2 ">
          <header className="max-w-prose w-full my-4">
            <Terminal text="Jordan Schalm" />
            <Nav />
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
