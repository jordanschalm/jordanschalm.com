import type { Metadata } from 'next'

import './globals.css'
import Terminal from '@/components/Terminal'
import Nav from '@/components/Nav'
import { Inconsolata, Josefin_Slab, Alfa_Slab_One } from 'next/font/google'

const inconsolata = Inconsolata({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inconsolata',
})

const josefinSlab = Josefin_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-josefin-slab',
})

const alfaSlabOne = Alfa_Slab_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-alfa-one-slab',
})

export const metadata: Metadata = {
  title: 'Jordan Schalm',
  description: "Jordan Schalm's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${josefinSlab.variable} ${alfaSlabOne.variable}`}
    >
      <body className="font-josefin text-slate-700 bg-emerald-50">
        <div className="w-full flex flex-col items-center px-2 ">
          <header className="max-w-prose w-full my-8">
            <Terminal text="Jordan Schalm" />
            <Nav />
          </header>
          <main className="w-full max-w-prose">{children}</main>
        </div>
      </body>
    </html>
  )
}
