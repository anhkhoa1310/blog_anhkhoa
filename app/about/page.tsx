import Image from 'next/image'
import Avatar from '@/components/Avatar'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Avatar size="lg" className="mx-auto mb-8" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Huỳnh Anh Khoa
              </h1>
          <p className="text-xl text-gray-600 mb-4">
            Sinh viên HUTECH chuyên ngành An ninh mạng
          </p>
          <p className="text-lg text-primary-600 mb-8 font-medium">
            🎓 HUTECH | 🔒 An ninh mạng | 💻 Lập trình mạng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Liên hệ với tôi
            </Link>
            <a 
              href="https://github.com/Hoangvuong990" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              import Image from 'next/image'
              import Avatar from '@/components/Avatar'
              import Link from 'next/link'

              export default function About() {
                return (
                  <div className="min-h-screen bg-gray-50">
                    {/* Hero Section */}
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

                    {/* About Content */}
                    <section className="py-16 bg-white">
                      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                          {/* Personal Info */}
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
                                  <span className="text-primary-600 text-sm">🎂</span>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">Ngày sinh</h3>
                                  <p className="text-gray-600">13/10/2004</p>
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
                                  <span className="text-primary-600 text-sm">📱</span>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">Số điện thoại</h3>
                                  <p className="text-gray-600">0346204744</p>
                                </div>
                              </div>

                              <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-primary-600 text-sm">🎓</span>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">Trường học</h3>
                                  <p className="text-gray-600">HUTECH - Thủ Đức, TP.HCM</p>
                                </div>
                              </div>

                              <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-primary-600 text-sm">🔒</span>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">Chuyên ngành</h3>
                                  <p className="text-gray-600">An ninh mạng</p>
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

                          {/* About Me */}
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Giới thiệu bản thân</h2>
                            <div className="prose prose-lg max-w-none">
                              <p className="text-gray-700 mb-6">
                                Xin chào! Tôi là <strong>Huỳnh Anh Khoa</strong>, hiện tại tôi đang là sinh viên <strong>HUTECH</strong> chuyên ngành <strong>An ninh mạng</strong> với niềm đam mê mãnh liệt về công nghệ và bảo mật.
                              </p>

                              <p className="text-gray-700 mb-6">
                                Tôi có sở thích tìm hiểu và học hỏi những công nghệ mới, đặc biệt là trong lĩnh vực lập trình Java, JavaScript và Cybersecurity. Blog này là nơi tôi chia sẻ những kiến thức, kinh nghiệm và dự án mà tôi đã học được trong quá trình học tập tại HUTECH.
                              </p>

                              <p className="text-gray-700 mb-6">
                                Với mục tiêu trở thành một chuyên gia bảo mật mạng, tôi luôn cố gắng học hỏi và cải thiện kỹ năng của mình mỗi ngày. Tôi tin rằng việc chia sẻ kiến thức không chỉ giúp người khác mà còn giúp bản thân tôi hiểu sâu hơn về những gì đã học.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Skills Section */}
                    <section className="py-16 bg-gray-50">
                      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kỹ năng và công nghệ</h2>
                          <p className="text-lg text-gray-600">Những công nghệ và ngôn ngữ lập trình tôi đang học và sử dụng</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {/* Java */}
                          <div className="card">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">☕</span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">Java</h3>
                              <p className="text-gray-600 mb-4">Backend Development</p>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Spring Boot</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '100%'}}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ...rest unchanged... */}
                        </div>
                      </div>
                    </section>
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">⚛️</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">React</h3>
      <p className="text-gray-600 mb-4">Frontend Framework</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Hooks, Context</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
        </div>
      </div>
    </div>
  </div>

  {/* Next.js */}
  <div className="card">
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">🚀</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Next.js</h3>
      <p className="text-gray-600 mb-4">Full-stack Framework</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>SSR, API Routes</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
        </div>
      </div>
    </div>
  </div>

  {/* CSS/Tailwind */}
  <div className="card">
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-3xl">🎨</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">CSS/Tailwind</h3>
      <p className="text-gray-600 mb-4">Styling & Design</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Responsive Design</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
        </div>
      </div>
    </div>
  </div>
            <div className="card">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Database</h3>
                <p className="text-gray-600 mb-4">Data Management</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>MySQL, PostgreSQL</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-7">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mục tiêu và định hướng
            </h2>
            <p className="text-lg text-gray-600">
              Những gì tôi muốn đạt được trong tương lai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mục tiêu ngắn hạn
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Hoàn thành khóa học lập trình mạng</li>
                    <li>• Thành thạo java và JavaScript</li>
                    <li>• Xây dựng profile cá nhân</li>
                    <li>• Hoàn thành đồ án môn học</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mục tiêu dài hạn
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Trở thành Pentest</li>
                    <li>• Làm việc tại công ty công nghệ lớn</li>
                    <li>• Bảo vệ hệ thống khỏi tấn công mạng</li>
                    <li>• Chia sẻ kiến thức qua blog và video</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-10">
      🎓 Chứng chỉ đạt được
    </h2>

    <div className="flex flex-wrap justify-center gap-6">
      {[
        {
          title: "Networking Basics",
          img: "/networking-basics.png",
          link: "https://www.credly.com/badges/e34fd618-9935-4acc-bb70-e621a82c0554/public_url",
        },
        {
          title: "JavaScript Essentials 1",
          img: "/javascript-essentials-1.png",
          link: "https://www.credly.com/badges/dfb12fe6-a890-4cbc-8feb-64a23cdc38f4/public_url",
        },
        {
          title: "JavaScript Essentials 2",
          img: "/javascript-essentials-2.png",
          link: "https://www.credly.com/badges/2e522a87-74d0-4771-80be-ca0f8915e592/public_url",
        },
      ].map((cert) => (
        <a
          key={cert.title}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col items-center"
        >
          {/* Logo vuông, có viền sáng nhẹ */}
          <div className="w-20 h-20 mb-4 rounded-xl overflow-hidden ring-4 ring-blue-200 group-hover:ring-blue-400 transition-all bg-white">
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Tên chứng chỉ */}
          <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {cert.title}
          </h4>

          {/* Ghi chú nhỏ */}
          <p className="text-sm text-gray-500 mt-2">Cisco Credential</p>
        </a>
      ))}
    </div>
  </div>

  {/* Ánh sáng nền nhẹ */}
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-white/10 pointer-events-none"></div>
</section>
    </div>
  )
}
