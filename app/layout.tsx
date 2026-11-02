import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://toanheshi.vn'),
  title: {
    default: 'Trần Thị Toàn (Toàn Heshi) | Chăm Sóc Sức Khỏe Từ Gốc',
    template: '%s | Toàn Heshi Wellness',
  },
  description:
    'Website chuyên gia Trần Thị Toàn (Toàn Heshi) - Tiên phong mô hình Chăm Sóc Sức Khỏe Từ Gốc với kiềng 3 chân: Mát-xa – Vận động – Dinh dưỡng. Chuyển giao mô hình Spa chuẩn Y khoa trên toàn quốc.',
  keywords: [
    'Toàn Heshi',
    'Trần Thị Toàn',
    'Chăm sóc sức khỏe từ gốc',
    'Chuyển giao spa chuẩn y khoa',
    'Phục hồi da tổn thương',
    'Trị liệu cơ mạc cổ vai gáy',
    'Dinh dưỡng chuyển hóa',
    'Spa y khoa Tuyên Quang',
  ],
  authors: [{ name: 'Trần Thị Toàn (Toàn Heshi)' }],
  creator: 'Trần Thị Toàn',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://toanheshi.vn',
    siteName: 'Trần Thị Toàn | Chăm Sóc Sức Khỏe Từ Gốc',
    title: 'Trần Thị Toàn (Toàn Heshi) | Chăm Sóc Sức Khỏe Từ Gốc',
    description:
      'Chăm sóc sức khỏe từ gốc qua kiềng 3 chân: Mát-xa – Vận động – Dinh dưỡng. Chuyển giao mô hình Spa chuẩn y khoa.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Chuyên gia Trần Thị Toàn (Toàn Heshi)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trần Thị Toàn (Toàn Heshi) | Chăm Sóc Sức Khỏe Từ Gốc',
    description:
      'Chăm sóc sức khỏe từ gốc qua kiềng 3 chân: Mát-xa – Vận động – Dinh dưỡng.',
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
      </body>
    </html>
  );
}

