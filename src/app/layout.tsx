import type { Metadata } from 'next'
import './globals.css'
import Terminal from '@/components/Terminal'
import Nav from '@/components/Nav'

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
      <body className="w-full flex justify-center">
        <div className="max-w-prose">
          <Terminal text="Jordan Schalm" />
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
