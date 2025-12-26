import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Huỳnh Anh Khoa</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Chia sẻ kiến thức về lập trình Java và JavaScript. 
              Nơi học hỏi và phát triển kỹ năng lập trình mạng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
  <h3 className="text-lg font-semibold mb-4 text-white">Thông tin liên hệ</h3>
  <ul className="space-y-3 text-gray-300">
    <li className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-blue-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75l-9.75 6-9.75-6"
        />
      </svg>
        <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hhuynhkhanhlinh2@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        hhuynhkhanhlinh2@gmail.com
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-blue-500"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.764v2.316h3.588l-.467 3.696h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
      </svg>
      <a
        href="https://www.facebook.com/khoa.huynhanh.37853"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        Facebook 
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-gray-300"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.63-2.67-.31-5.48-1.34-5.48-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.56.12-3.25 0 0 1-.32 3.3 1.23a11.47 11.47 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.92 1.24 3.23 0 4.63-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.22 0 1.6-.02 2.9-.02 3.3 0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      <a
        href="https://github.com/anhkhoa1310"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        GitHub
      </a>
    </li>
    </ul>
</div>
</div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; Huỳnh Anh Khoa</p>
        </div>
      </div>
    </footer>
  )
}
