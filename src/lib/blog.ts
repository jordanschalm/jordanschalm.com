import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dir = path.join(process.cwd(), 'src/content/blog')

export function getSortedBlogEntries() {
  const fileNames = fs.readdirSync(dir)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get date
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(dir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult,
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1
    } else {
      return -1
    }
  })
}
