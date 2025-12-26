# Blog Huỳnh Anh Khoa - Lập trình mạng & An ninh mạng

Blog cá nhân chia sẻ kiến thức về lập trình Java, JavaScript và Cybersecurity, được xây dựng với Next.js và Tailwind CSS.

## 🚀 Demo

Truy cập: [https://huynhanhkhoa.vercel.app](https://huynhanhkhoa.vercel.app)

## ✨ Tính năng

- 📱 **Responsive Design**: Giao diện tối ưu cho mọi thiết bị
- 🎨 **Modern UI**: Thiết kế đẹp mắt với Tailwind CSS
- 📝 **Blog System**: Hệ thống blog với Markdown
- 🔍 **SEO Optimized**: Tối ưu hóa cho công cụ tìm kiếm
- ⚡ **Fast Loading**: Tốc độ tải nhanh với Next.js
- 🔒 **Cybersecurity Content**: Nội dung chuyên sâu về an ninh mạng
- 🎓 **HUTECH Student**: Thông tin sinh viên HUTECH

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown
- **Deployment**: Vercel
- **Version Control**: GitHub

## 📁 Cấu trúc dự án

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── Avatar.tsx         # Avatar component
├── content/              # Blog content
│   └── posts/            # Markdown posts
├── lib/                  # Utilities
│   └── posts.ts          # Post processing
└── public/               # Static assets
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js 18+ 
- npm hoặc yarn

### Cài đặt

1. Clone repository:
```bash
git clone https://github.com/Zitests/blog-hoang-vuong.git
cd blog-hoang-vuong
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt

### Build cho production

```bash
npm run build
npm start
```

## 📝 Thêm bài viết mới

1. Tạo file Markdown trong `content/posts/`
2. Thêm frontmatter với metadata:

```markdown
---
title: "Tiêu đề bài viết"
date: "2024-01-01"
excerpt: "Mô tả ngắn về bài viết"
category: "Java" # hoặc "JavaScript", "An ninh mạng"
tags: ["tag1", "tag2"]
author: "Huỳnh Anh Khoa"
---

# Nội dung bài viết
```

## 🎨 Tùy chỉnh giao diện

### Màu sắc

Chỉnh sửa trong `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... thêm các màu khác
      }
    }
  }
}
```

### Avatar

Để thêm avatar thật, thay thế file `public/avatar.jpg` và uncomment code trong `components/Avatar.tsx`:

```tsx
<Image
  src="/avatar.jpg"
  alt="Huỳnh Anh Khoa"
  fill
  className="object-cover rounded-full"
  priority
/>
```

## 🚀 Triển khai

### Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động với GitHub Actions

### Auto-deploy Setup

1. Tạo Vercel token tại [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Thêm secrets vào GitHub repository:
   - `VERCEL_TOKEN`: Token từ Vercel
   - `ORG_ID`: Organization ID từ Vercel
   - `PROJECT_ID`: `prj_QcqHDLnq5ISB55EVg0BNdF5aDX2h` (đã cấu hình sẵn)

3. Mỗi khi push code lên main branch, website sẽ tự động deploy!

**Xem hướng dẫn chi tiết**: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

**Huỳnh Anh Khoa**
- 🎓 Sinh viên HUTECH, chuyên ngành An ninh mạng
- 📧 Email: hhuynhkhanhlinh2@gmail.com
- 📱 Phone: 0346204744
- 🌍 Địa điểm: Sài Gòn, Việt Nam
- 💻 GitHub: [@anhkhoa1310](https://github.com/anhkhoa1310)

## 🙏 Lời cảm ơn

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [GitHub](https://github.com/) - Version control
- [HUTECH](https://hutech.edu.vn/) - Trường đại học

---

⭐ Nếu bạn thích dự án này, hãy cho một star trên GitHub!