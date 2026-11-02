# Website Thương Hiệu Cá Nhân & Chuyển Giao Spa Y Khoa: Trần Thị Toàn (Toàn Heshi)

Website chính thức của chuyên gia **Trần Thị Toàn (Toàn Heshi)** – Tiên phong định vị triết lý **"Chăm Sóc Sức Khỏe Từ Gốc"** thông qua hệ sinh thái Kiềng 3 Chân: **Mát-xa – Vận động – Dinh dưỡng**.

Dự án phục vụ 2 nhóm đối tượng cốt lõi:
- **B2B:** Chủ spa, clinic, cơ sở làm đẹp muốn nhận chuyển giao mô hình da liễu & trị liệu cơ mạc chuẩn Y khoa Heshi.
- **B2C:** Khách hàng cá nhân cần phục hồi da hư tổn, trị liệu hội chứng cổ vai gáy - cột sống và xây dựng lối sống lành mạnh.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router, Server Components & Client Components).
- **Ngôn ngữ:** TypeScript.
- **Styling:** Tailwind CSS, `lucide-react` (icon), `framer-motion` (hiệu ứng mượt mà).
- **Headless CMS:** WordPress REST API (`/wp-json/wp/v2/posts?_embed`) với cơ chế **ISR** (`revalidate: 60`).
- **Data Fallback:** Tự động switch sang hệ thống Mock Data phong phú, chất lượng cao khi chưa cấu hình WordPress endpoint.
- **Deploy:** Chuẩn hóa tối đa cho nền tảng Vercel.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
toan-heshi-wellness/
├── app/
│   ├── layout.tsx                   # Layout chung, Root SEO Metadata, Header & Footer
│   ├── page.tsx                     # Trang chủ (Hero, 3 Pillars, B2B, B2C, Blog, Lead form)
│   ├── about/
│   │   └── page.tsx                 # Trang Về tôi (Hành trình 10 năm, sứ mệnh & tầm nhìn)
│   ├── training/
│   │   └── page.tsx                 # Trang Chuyển giao mô hình Spa Y khoa B2B
│   ├── services/
│   │   └── page.tsx                 # Trang Danh mục dịch vụ & Liệu trình B2C
│   ├── blog/
│   │   ├── page.tsx                 # Trang danh sách bài viết & bộ lọc danh mục
│   │   └── [slug]/
│   │       └── page.tsx             # Trang bài viết chi tiết chuẩn SEO (Semantic, TOC, Share)
│   ├── contact/
│   │   └── page.tsx                 # Trang liên hệ, cơ sở Tuyên Quang & form
│   ├── api/
│   │   └── lead/
│   │       └── route.ts             # API Route nhận lead tư vấn từ người dùng
│   └── globals.css                  # CSS toàn cục, Prose styling WordPress
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # Navigation bar, mobile drawer, CTA modal
│   │   └── Footer.tsx               # Thông tin cơ sở Tuyên Quang, Hotline, disclaimer y tế
│   ├── home/
│   │   ├── HeroSection.tsx          # Hero section nhận diện thương hiệu
│   │   ├── PillarsSection.tsx       # 3 Trụ cột: Mát-xa, Vận động, Dinh dưỡng
│   │   ├── SocialProofSection.tsx   # Chỉ số uy tín, đánh giá từ chủ spa & khách hàng
│   │   ├── B2BTransferSection.tsx   # Teaser chuyển giao mô hình cho chủ spa
│   │   ├── B2CServicesSection.tsx   # Teaser dịch vụ trị liệu cá nhân
│   │   ├── LatestPostsSection.tsx   # 3 bài viết mới nhất từ WP/Mock
│   │   └── ContactFormSection.tsx   # Form đăng ký tư vấn cuối trang chủ
│   └── shared/
│       ├── Button.tsx               # Nút bấm chuẩn thiết kế
│       ├── SectionHeading.tsx       # Tiêu đề đồng bộ chuẩn nhận diện
│       ├── PostCard.tsx             # Thẻ hiển thị bài viết blog
│       ├── ShareButtons.tsx         # Chia sẻ Facebook, Zalo, sao chép liên kết
│       └── ConsultationModal.tsx    # Modal đăng ký tư vấn popup toàn site
├── lib/
│   ├── utils.ts                     # Hàm tiện ích (format ngày, tính giờ đọc, TOC)
│   ├── mock-data.ts                 # Dữ liệu dự phòng phong phú chuẩn y khoa
│   └── wordpress.ts                 # Module kết nối WordPress REST API với ISR
├── types/
│   └── wordpress.ts                 # Định nghĩa kiểu dữ liệu TypeScript
├── tailwind.config.ts               # Cấu hình mã màu Medical Teal, Sage Green
└── next.config.mjs
```

---

## 🎨 Màu Sắc & Nhận Diện Thương Hiệu

| Thành phần | Mã màu | Ý nghĩa nhận diện |
| :--- | :--- | :--- |
| **Primary (Medical Blue/Teal)** | `#0B4F6C` / `#1A5F7A` | Đại diện cho tính chuẩn hóa y khoa, uy tín chuyên môn và sự bền vững |
| **Secondary (Sage Green)** | `#2E7D32` / `#4E9F3D` | Đại diện cho sức khỏe tự nhiên, dinh dưỡng lành mạnh và sự tái sinh |
| **Background / Surface** | `#FAF9F6` / `#F8F9FA` | Trắng ngà & Xám nhạt hiện đại, tạo cảm giác thanh thoát như tại Clinic/Spa cao cấp |

---

## ⚙️ Hướng Dẫn Cài Đặt & Chạy Local

### 1. Cài đặt dependencies:
```bash
npm install
```

### 2. Cấu hình biến môi trường (`.env.local`):
Sao chép từ `.env.example`:
```bash
cp .env.example .env.local
```

Trong file `.env.local`:
```env
# URL của website WordPress Headless (nếu chưa có, để trống để tự động dùng Mock Data chuẩn)
WORDPRESS_API_URL=https://your-wordpress-site.com
REVALIDATE_TIME=60

NEXT_PUBLIC_HOTLINE="0988.888.888"
NEXT_PUBLIC_LOCATION="TP. Tuyên Quang, Tuyên Quang"
NEXT_PUBLIC_FACEBOOK_URL="https://www.facebook.com/ngok.nhok.5648"
```

### 3. Chạy môi trường phát triển:
```bash
npm run dev
```
Mở trình duyệt tại: [http://localhost:3000](http://localhost:3000)

### 4. Build kiểm tra sản phẩm:
```bash
npm run build
```

---

## 🔗 Tích Hợp Headless WordPress

Trong file `lib/wordpress.ts`, hệ thống đã cấu hình sẵn:
- `getPosts({ categorySlug, page, perPage, search })`: Lấy bài viết có phân trang, hỗ trợ lọc theo slug danh mục hoặc tìm kiếm từ khóa.
- `getPostBySlug(slug)`: Lấy chi tiết bài viết qua slug.
- `getCategories()`: Lấy danh sách chuyên mục WordPress.
- `getRecentPosts(limit)`: Lấy các bài mới nhất cho trang chủ.
- **Cơ chế ISR:** Sử dụng `fetch(url, { next: { revalidate: 60 } })`. Khi người quản trị WordPress đăng bài mới hoặc sửa bài, Next.js sẽ tự động cập nhật lại nội dung sau mỗi 60 giây mà không cần build lại dự án.
- **Cơ chế Fallback:** Bất kỳ khi nào endpoint WordPress gặp lỗi mạng hoặc chưa điền, hệ thống tự động trả về `MOCK_POSTS` chuẩn y khoa, đảm bảo website không bao giờ bị lỗi trắng trang (Zero Downtime).

---

## ☁️ Triển Khai Lên Vercel (Production)

1. Đẩy mã nguồn lên GitHub/GitLab.
2. Truy cập [Vercel](https://vercel.com) -> Chọn **Add New Project** -> Chọn repository vừa tạo.
3. Trong mục **Environment Variables**, thêm biến `WORDPRESS_API_URL` (nếu có).
4. Nhấn **Deploy**.

