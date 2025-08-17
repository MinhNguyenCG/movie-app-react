# 🎬 Movie App

Ứng dụng web xem thông tin phim và TV show được xây dựng với React, tích hợp API TMDB để cung cấp dữ liệu phim mới nhất. Ứng dụng cho phép người dùng khám phá, tìm kiếm và xem chi tiết về phim, TV show với giao diện hiện đại và responsive.

## ✨ Demo

- **Live Demo**: [Đang phát triển]
- **Video Demo**: [Đang phát triển]

## 🚀 Tính năng

### ✅ Đã hoàn thành

- **🏠 Trang chủ**: Hiển thị phim nổi bật với carousel và trailer
- **📺 Trending**: Danh sách phim/TV show đang thịnh hành theo ngày
- **⭐ Top Rated**: Phim và TV show được đánh giá cao nhất
- **🎭 Chi tiết phim**: Thông tin đầy đủ, cast, crew, trailer, rating
- **📺 Chi tiết TV Show**: Thông tin mùa, tập, cast, network
- **🎬 Trailer Modal**: Xem trailer trực tiếp trong ứng dụng
- **👥 Actor List**: Danh sách diễn viên với thông tin chi tiết
- **🔗 Related Media**: Gợi ý phim/TV show tương tự
- **📱 Responsive Design**: Tương thích mobile, tablet, desktop
- **🎨 Modern UI**: Giao diện Netflix-style với Tailwind CSS

### 🔄 Đang phát triển

- **🔍 Tìm kiếm**: Tìm kiếm phim/TV show theo tên
- **❤️ Wishlist**: Lưu phim yêu thích
- **⭐ Đánh giá**: Hệ thống rating và review
- **📱 PWA**: Progressive Web App features
- **🌙 Dark/Light Mode**: Chế độ tối/sáng
- **🔐 Authentication**: Đăng nhập/đăng ký
- **📊 Analytics**: Thống kê xem phim
- **🌍 Đa ngôn ngữ**: Hỗ trợ nhiều ngôn ngữ

## 🧱 Kiến trúc & Công nghệ

### Frontend

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.8.0
- **Icons**: FontAwesome 7.0.0
- **State Management**: React Context API

### API & Data

- **Movie Database**: TMDB API
- **HTTP Client**: Fetch API với custom hook
- **Image CDN**: TMDB Image API

### Development Tools

- **Linting**: ESLint 9.32.0
- **Formatting**: Prettier 3.6.2
- **Type Checking**: TypeScript types
- **Package Manager**: npm

### Deployment

- **Platform**: [Đang phát triển - Vercel/Netlify]
- **Environment**: Development

## 📂 Cấu trúc thư mục

```
movie-app/
├── public/
│   ├── fonts/                 # Netflix fonts
│   ├── netflix.png           # Logo
│   └── placeholder_image.png # Fallback image
├── src/
│   ├── components/
│   │   ├── context/          # Modal context provider
│   │   ├── FeatureMovie/     # Hero carousel component
│   │   ├── MediaDetail/      # Movie/TV show detail components
│   │   ├── MediaList/        # Media listing components
│   │   ├── CircularProgressBar.jsx
│   │   ├── Header.jsx
│   │   ├── ImageComponent.jsx
│   │   ├── Loading.jsx
│   │   └── MovieCard.jsx
│   ├── hooks/
│   │   └── useFetch.jsx      # Custom fetch hook
│   ├── libs/
│   │   ├── constants.js      # API endpoints & tabs
│   │   └── utils.js          # Utility functions
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MovieDetailPage.jsx
│   │   ├── TVShowDetailPage.jsx
│   │   └── RootLayout.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Yêu cầu hệ thống

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Browser**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 🧰 Cài đặt & Chạy

```bash
# 1) Clone mã nguồn
git clone https://github.com/[username]/movie-app.git
cd movie-app

# 2) Cài đặt phụ thuộc
npm install

# 3) Cấu hình biến môi trường
cp .env.example .env
```

Tạo file `.env` với nội dung:

```env
# TMDB API Configuration
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_BASE_URL=https://api.themoviedb.org/3
```

```bash
# 4) Chạy development server
npm run dev

# 5) Truy cập ứng dụng
# http://localhost:5173
```

### Lấy TMDB API Key

1. Truy cập [TMDB](https://www.themoviedb.org/)
2. Tạo tài khoản và đăng nhập
3. Vào Settings > API
4. Tạo API key mới
5. Copy API key vào file `.env`

## 📝 Scripts

```bash
# Development
npm run dev          # Chạy dev server
npm run build        # Build production
npm run preview      # Preview build
npm run lint         # Kiểm tra lỗi code
npm run format       # Format code với Prettier
```

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) - Cung cấp API dữ liệu phim
- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [FontAwesome](https://fontawesome.com/) - Icon library

## 📞 Liên hệ

- **Email**: [info.nguyenptn1104@gmail.com]
- **GitHub**: [@MinhNguyenCG]

---

⭐ Nếu dự án này hữu ích, hãy cho một star nhé!
