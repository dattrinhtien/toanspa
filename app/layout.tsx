import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ZaloFloatingWidget } from '@/components/shared/ZaloFloatingWidget';

export const metadata: Metadata = {
  metadataBase: new URL('https://toanheshi.vn'),
  title: {
    default: 'Toàn T&T Spa (Trần Thị Toàn) | Face Massage Root • Sức Khỏe Từ Gốc',
    template: '%s | Toàn T&T Spa',
  },
  description:
    'Website chính thức Toàn T&T Spa - Chuyên gia Trần Thị Toàn. Tiên phong phương pháp Massage mặt trị liệu Face Massage Root độc quyền kết hợp Kiềng 3 chân: Mát-xa – Vận động – Dinh dưỡng tại Tuyên Quang.',
  keywords: [
    'Toàn T&T spa',
    'T&T spa',
    'Face Massage Root',
    'Trần Thị Toàn',
    'Massage mặt trị liệu Tuyên Quang',
    'Chăm sóc sức khỏe từ gốc',
    'Chuyển giao spa chuẩn y khoa',
    'Phục hồi da tổn thương',
    'Trị liệu cơ mạc cổ vai gáy',
  ],
  authors: [{ name: 'Trần Thị Toàn (Toàn T&T Spa)' }],
  creator: 'Trần Thị Toàn',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://toanspa.vercel.app',
    siteName: 'Toàn T&T Spa | Chăm Sóc Sức Khỏe Từ Gốc',
    title: 'Toàn T&T Spa (Trần Thị Toàn) | Face Massage Root • Sức Khỏe Từ Gốc',
    description:
      'T&T Spa - Phương pháp Massage mặt trị liệu Face Massage Root độc quyền. Tự chữa lành từ gốc rễ cơ thể.',
    images: [
      {
        url: '/images/banner-face-massage-root.jpg',
        width: 2560,
        height: 947,
        alt: 'T&T SPA - Face Massage Root',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toàn T&T Spa (Trần Thị Toàn) | Face Massage Root',
    description:
      'T&T Spa - Phương pháp Massage mặt trị liệu Face Massage Root độc quyền.',
    images: ['/images/banner-face-massage-root.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-surface-cream text-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ZaloFloatingWidget />
      </body>
    </html>
  );
}

