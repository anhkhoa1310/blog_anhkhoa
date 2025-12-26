'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Huỳnh Anh Khoa</span>
          </Link>

          {/* Desktop Navigation */}
<nav className="hidden md:flex space-x-8">
  <Link 
    href="/" 
    className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
  >
    Trang chủ
  </Link>
  <Link 
    href="/about" 
    className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
  >
    Giới thiệu
  </Link>
  <Link 
    href="/blog" 
    className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
  >
    Blog
  </Link>
  <Link 
    href="/contact" 
    className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
  >
    Liên hệ
  </Link>

  {/* Nút tải CV */}
  <a
    href="https://drive.google.com/file/d/1tSU7YCAcCcQQgZZv4pDusi8LUmqP4Hx2/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
  >
    Tải CV
  </a>
</nav>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Giới thiệu
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
