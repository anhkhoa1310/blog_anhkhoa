import Link from 'next/link'
import { getBlogPosts } from '@/lib/posts'

export default async function Blog() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog Lập trình
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Chia sẻ kiến thức về Java và JavaScript. Nơi học hỏi và phát triển kỹ năng lập trình mạng.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Java
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Spring Boot
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Chưa có bài viết nào
              </h3>
              <p className="text-gray-600">
                Các bài viết sẽ được cập nhật sớm nhất có thể.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {posts.length > 0 && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Bài viết nổi bật
                  </h2>
                  <article className="card hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-2/3">
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                            {posts[0].category}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {new Date(posts[0].date).toLocaleDateString('vi-VN')}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {posts[0].title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {posts[0].excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {posts[0].tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          href={`/blog/${posts[0].slug}`}
                          className="btn-primary inline-flex items-center"
                        >
                          Đọc bài viết
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      <div className="lg:w-1/3">
                        <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 text-center">
                          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-2xl font-bold">
                              {posts[0].category === 'Java' ? '☕' : '⚡'}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {posts[0].category}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {posts[0].category === 'Java' 
                              ? '' 
                              : ''
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* All Posts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Tất cả bài viết
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post, index) => (
                    <article key={post.slug} className="card hover:shadow-lg transition-shadow duration-300">
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {new Date(post.date).toLocaleDateString('vi-VN')}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                              +{post.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        Đọc thêm
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter */}
      
    </div>
  )
}
