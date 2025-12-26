import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPosts, getPostBySlug } from '@/lib/posts'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
    }
  }

  return {
    title: `${post.title} - Blog Huỳnh Anh Khoa`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(remarkHtml)
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Quay lại Blog
            </Link>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString('vi-VN')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.jpg"       
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Tác giả: {post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Đọc trong {Math.ceil(post.content.split(' ').length / 200)} phút</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </div>
      </section>
    

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Bài viết liên quan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date().toLocaleDateString('vi-VN')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bài viết liên quan sẽ được hiển thị ở đây
              </h3>
              <p className="text-gray-600 mb-4">
                Trong phiên bản thực tế, đây sẽ là các bài viết có cùng chủ đề hoặc category.
              </p>
              <Link 
                href="/blog" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Xem tất cả bài viết →
              </Link>
            </div>
            
            <div className="card">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date().toLocaleDateString('vi-VN')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tính năng đề xuất bài viết
              </h3>
              <p className="text-gray-600 mb-4">
                Sử dụng thuật toán để đề xuất các bài viết phù hợp với sở thích của người đọc.
              </p>
              <Link 
                href="/blog" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Khám phá thêm →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      
    </div>
  )
}
