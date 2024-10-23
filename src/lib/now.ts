import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const nowDir = path.join(process.cwd(), 'src/content/now')

export function getSortedNowEntries() {
  const fileNames = fs.readdirSync(nowDir)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get date
    const date = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(nowDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      date,
      ...matterResult,
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
