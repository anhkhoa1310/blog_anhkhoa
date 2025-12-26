import Image from 'next/image'
import Avatar from '@/components/Avatar'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Avatar size="lg" className="mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Huỳnh Anh Khoa</h1>
          <p className="text-xl text-gray-600 mb-4">Sinh viên HUTECH chuyên ngành An ninh mạng</p>
          <p className="text-lg text-primary-600 mb-8 font-medium">🎓 HUTECH | 🔒 An ninh mạng | 💻 Lập trình mạng</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Liên hệ với tôi</Link>
            <a href="https://github.com/anhkhoa1310" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub Profile</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Thông tin cá nhân</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">👤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Họ và tên</h3>
                    <p className="text-gray-600">Huỳnh Anh Khoa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hhuynhkhanhlinh2@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">🔗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <a href="https://github.com/anhkhoa1310" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">github.com/anhkhoa1310</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Giới thiệu bản thân</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">Xin chào! Tôi là <strong>Huỳnh Anh Khoa</strong>, hiện tại tôi đang là sinh viên <strong>HUTECH</strong> chuyên ngành <strong>An ninh mạng</strong> với niềm đam mê mãnh liệt về công nghệ và bảo mật.</p>
                <p className="text-gray-700 mb-6">Tôi có sở thích tìm hiểu và học hỏi những công nghệ mới, đặc biệt là trong lĩnh vực lập trình Java, JavaScript và Cybersecurity. Blog này là nơi tôi chia sẻ những kiến thức, kinh nghiệm và dự án mà tôi đã học được trong quá trình học tập tại HUTECH.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
