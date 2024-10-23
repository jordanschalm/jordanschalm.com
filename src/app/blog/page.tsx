import { H1, H2 } from '@/components/defaults'
import { getSortedBlogEntries } from '@/lib/blog'

export default function Blog() {
  const sortedBlogEntries = getSortedBlogEntries()

  return (
    <>
      <H1>Blog</H1>
      {sortedBlogEntries.map((entry) => (
        <div>
          <H2>{entry.data.title}</H2>
          {entry.data.date.toString()}
          {entry.content}
        </div>
      ))}
    </>
  )
}
