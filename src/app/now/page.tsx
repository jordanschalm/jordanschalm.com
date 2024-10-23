import { H1, P } from '@/components/defaults'
import { getSortedNowEntries } from '@/lib/now'

type NowEntry = {
  date: string
  data: {
    where: string
    reading?: string
    listening?: string
    watching?: string
  }
}

export default function Now() {
  const sortedNowEntries = getSortedNowEntries()

  const now = sortedNowEntries[0]
  return (
    <>
      <H1>Now</H1>
      {now.data.where ? <div>🌎 {now.data.where}</div> : null}
      {now.data.reading ? <div>📚 {now.data.reading}</div> : null}
      {now.data.listening ? <div>🎵 {now.data.listening}</div> : null}
      {now.data.watching ? <div>📺 {now.data.watching}</div> : null}
      {sortedNowEntries[0].content}
      <p className="text-sm mt-6">Last updated: {now.date}</p>
    </>
  )
}
