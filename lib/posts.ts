import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(name => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          title: matterResult.data.title,
          date: matterResult.data.date,
          excerpt: matterResult.data.excerpt,
          content: matterResult.content,
          category: matterResult.data.category,
          tags: matterResult.data.tags || [],
          author: matterResult.data.author || 'Huỳnh Anh Khoa'
        }
      })

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      content: matterResult.content,
      category: matterResult.data.category,
      tags: matterResult.data.tags || [],
      author: matterResult.data.author || 'Huỳnh Anh Khoa'
    }
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}
