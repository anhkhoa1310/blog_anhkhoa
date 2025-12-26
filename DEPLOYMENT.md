# Hướng dẫn Deploy Blog Anh Khoa

## 🚀 Auto-Deploy với Vercel

### Bước 1: Cấu hình GitHub Secrets

Vào GitHub repository → Settings → Secrets and variables → Actions

Thêm các secrets sau:

#### 1. VERCEL_TOKEN
- Truy cập: [vercel.com/account/tokens](https://vercel.com/account/tokens)
- Tạo token mới
- Copy token và thêm vào GitHub Secrets với tên `VERCEL_TOKEN`

#### 2. ORG_ID
- Vào Vercel Dashboard
- Settings → General
- Copy Organization ID
- Thêm vào GitHub Secrets với tên `ORG_ID`

#### 3. PROJECT_ID (Đã cấu hình sẵn)
- Project ID: `prj_QcqHDLnq5ISB55EVg0BNdF5aDX2h`
- Đã được cấu hình trong workflow

### Bước 2: Push code lên GitHub

```bash
# Thêm tất cả thay đổi
git add .

# Commit với message mô tả
git commit -m "Add auto-deploy configuration and Project ID"

# Push lên GitHub
git push origin main
```

### Bước 3: Kiểm tra Auto-Deploy

1. Vào GitHub repository → Actions tab
2. Xem workflow "Deploy to Vercel" đang chạy
3. Nếu thành công, website sẽ tự động cập nhật tại [https://huynhanhkhoa.vercel.app](https://huynhanhkhoa.vercel.app)

## 🔧 Troubleshooting

### Lỗi thường gặp:

#### 1. "Vercel token is invalid"
- Kiểm tra VERCEL_TOKEN trong GitHub Secrets
- Tạo token mới nếu cần

#### 2. "Organization not found"
- Kiểm tra ORG_ID trong GitHub Secrets
- Đảm bảo token có quyền truy cập organization

#### 3. "Project not found"
- Project ID đã được cấu hình: `prj_QcqHDLnq5ISB55EVg0BNdF5aDX2h`
- Kiểm tra project có tồn tại trong Vercel Dashboard

#### 4. Build failed
- Kiểm tra `package.json` có đúng dependencies
- Chạy `npm run build` local để test

## 📋 Checklist Deploy

- [ ] GitHub repository được tạo
- [ ] Code được push lên GitHub
- [ ] Vercel project được tạo
- [ ] GitHub Secrets được cấu hình:
  - [ ] VERCEL_TOKEN
  - [ ] ORG_ID
- [ ] GitHub Actions workflow chạy thành công
- [ ] Website deploy thành công tại [https://huynhanhkhoa.vercel.app](https://huynhanhkhoa.vercel.app)

## 🎯 Kết quả

Sau khi cấu hình xong:

✅ **Mỗi khi push code lên GitHub** → Website tự động cập nhật
✅ **Không cần deploy thủ công** → Tiết kiệm thời gian
✅ **Version control** → Theo dõi được mọi thay đổi
✅ **Professional workflow** → Quy trình chuyên nghiệp

## 📞 Hỗ trợ

Nếu gặp vấn đề, kiểm tra:

1. **GitHub Actions logs**: Repository → Actions → Xem chi tiết lỗi
2. **Vercel Dashboard**: Kiểm tra deployment status
3. **Console logs**: Chạy `npm run build` local để debug

---

*Hướng dẫn được tạo bởi Huỳnh Anh Khoa - Sinh viên HUTECH*
