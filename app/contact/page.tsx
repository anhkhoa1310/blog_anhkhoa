"use client"

import { useEffect, useRef, useState } from 'react'
import emailjs from "emailjs-com"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAILJS
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS

    if (!serviceId || !templateId || !publicKey) {
      const msg = 'EmailJS keys are not set. Make sure public keys (NEXT_PUBLIC_*) are defined in .env.local'
      console.error(msg, { serviceId, templateId, publicKey })
      setSubmitErrorMessage(msg)
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    const formEl = formRef.current || (e.target as HTMLFormElement)

    emailjs
      .sendForm(serviceId, templateId, formEl, publicKey)
      .then(
        () => {
          setSubmitStatus('success')
          setSubmitErrorMessage(null)
          setIsSubmitting(false)
          // clear form fields
          setFormData({ name: '', email: '', subject: '', message: '' })
        },
        (error) => {
          console.error('Lỗi gửi email:', error)
          const errMsg = error?.text || error?.message || JSON.stringify(error)
          setSubmitErrorMessage(String(errMsg))
          setSubmitStatus('error')
          setIsSubmitting(false)
        }
      )
  };

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS
    if (publicKey) {
      try {
      
        if (emailjs.init) emailjs.init(publicKey)
        console.debug('EmailJS initialized with public key')
      } catch (err) {
        console.warn('EmailJS init failed', err)
      }
    } else {
      console.debug('EmailJS public key not found in env')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Liên hệ với tôi
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tôi luôn sẵn sàng thảo luận về lập trình, công nghệ và cơ hội hợp tác.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Gửi tin nhắn
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Chủ đề *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Chủ đề bạn muốn thảo luận"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Nội dung tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
                  } text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200`}
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                </button>
              </form>

              {submitStatus === "success" && (
                <p className="mt-4 text-green-600 font-medium">
                  ✅ Tin nhắn đã được gửi thành công!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-600 font-medium">
                  ❌ Gửi tin nhắn thất bại. Vui lòng thử lại.
                </p>
               )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Thông tin liên hệ
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">hhuynhkhanhlinh2@gmail.com</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=hhuynhkhanhlinh2@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Gửi email ngay
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Điện thoại</h3>
                    <p className="text-gray-600 mb-2">0968474342</p>
                    <a 
                      href="tel:0968474342" 
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Gọi ngay
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
                    <p className="text-gray-600 mb-2">github.com/anhkhoa1310</p>
                    <a 
                      href="https://github.com/anhkhoa1310" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Xem profile
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Vị trí</h3>
                    <p className="text-gray-600">Tp.Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Câu hỏi thường gặp
          </h2>
          
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tôi có thể học lập trình từ đâu?
              </h3>
              <p className="text-gray-600">
                Có rất nhiều nguồn học lập trình miễn phí và trả phí. Tôi khuyến nghị bắt đầu với 
                các khóa học online như Coursera, Udemy, hoặc các tài liệu miễn phí trên YouTube.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Java hay JavaScript nên học trước?
              </h3>
              <p className="text-gray-600">
                Tùy thuộc vào mục tiêu của bạn. Nếu muốn làm web frontend, học JavaScript trước. 
                Nếu muốn làm backend hoặc ứng dụng desktop, học Java trước. Cả hai đều quan trọng!
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Làm thế nào để có kinh nghiệm thực tế?
              </h3>
              <p className="text-gray-600">
                Thực hành bằng cách xây dựng các dự án cá nhân, tham gia hackathon, đóng góp cho 
                các dự án open source, hoặc tìm kiếm cơ hội thực tập tại các công ty công nghệ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
