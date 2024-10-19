'use client'

import AboutBlurb from '@/components/AboutBlurb'

export default function Home() {
  return (
    <main className="flex w-full justify-center">
      <div className="max-w-prose">
        <div>
          <AboutBlurb />
        </div>
      </div>
    </main>
  )
}
