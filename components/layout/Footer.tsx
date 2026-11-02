'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Heart, Facebook, MessageCircle, AlertCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#26140A] text-white pt-16 pb-8 border-t-2 border-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold flex-shrink-0 bg-white/10">
                <Image
                  src="/images/logo-ttspa.jpg"
                  alt="T&T SPA - Face Massage Root"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  T&T SPA (Toàn T&T)
                </h3>
                <p className="text-xs text-gold-light font-bold uppercase tracking-wide">
                  Face Massage Root • Sức Khỏe Từ Gốc
                </p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed italic">
              "Chúng tôi không chỉ nhìn vào bề mặt làn da. Chúng tôi nhìn sâu hơn – vào tận gốc rễ."
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              Tiên phong phương pháp Massage mặt trị liệu Face Massage Root độc quyền kết hợp Kiềng 3 Chân: Mát-xa – Vận động – Dinh dưỡng.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100063462697969&locale=vi_VN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fanpage chính thức Toàn T&T spa"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors border border-gold/30"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://zalo.me/0358363058"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo kết nối trực tiếp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0068FF] text-white flex items-center justify-center transition-colors border border-gold/30"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cột 2: Hệ sinh thái & Dịch vụ */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-gold-light uppercase tracking-wider font-display">
              Liệu Trình Trọng Điểm
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/#face-massage-root" className="hover:text-gold-light transition-colors">
                  Phương pháp Face Massage Root độc quyền
                </Link>
              </li>
              <li>
                <Link href="/services#skin" className="hover:text-gold-light transition-colors">
                  Phục hồi cấu trúc da & màng lipid sinh học
                </Link>
              </li>
              <li>
                <Link href="/services#fascia" className="hover:text-gold-light transition-colors">
                  Trị liệu cơ mạc Fascia Cổ Vai Gáy
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-gold-light transition-colors">
                  Chuyển giao mô hình T&T Spa toàn quốc
                </Link>
              </li>
              <li>
                <Link href="/services#nutrition" className="hover:text-gold-light transition-colors">
                  Tư vấn dinh dưỡng chuyển hóa tế bào
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-gold-light uppercase tracking-wider font-display">
              Về Chuyên Gia & Bài Viết
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-gold-light transition-colors">
                  Về Chuyên gia Trần Thị Toàn (Toàn T&T)
                </Link>
              </li>
              <li>
                <Link href="/#pillars" className="hover:text-gold-light transition-colors">
                  Hệ sinh thái Kiềng 3 Trụ cột
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold-light transition-colors">
                  Kiến thức & Cẩm nang chăm sóc da
                </Link>
              </li>
              <li>
                <Link href="/blog?cat=hoat-dong-su-kien" className="hover:text-gold-light transition-colors">
                  Hình ảnh hoạt động sự kiện thực tế
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light transition-colors">
                  Đặt lịch thăm khám & Soi da
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Thông tin cơ sở */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-gold-light uppercase tracking-wider font-display">
              Thông Tin Cơ Sở
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>Trụ sở chính: T&T Spa, TP. Tuyên Quang, Tỉnh Tuyên Quang</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:0358363058" className="hover:text-gold-light transition-colors font-bold text-gold-light">
                  Hotline / Zalo: 0358.363.058
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>contact@toanheshi.vn</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-gold/20 text-xs text-white/80">
              <span className="font-bold text-gold-light block mb-1">Thời gian phục vụ:</span>
              Mở cửa tất cả các ngày trong tuần: 08:30 – 19:30<br />
              <span className="text-gold-light italic">* Vui lòng liên hệ đặt hẹn trước khi ghé thăm.</span>
            </div>
          </div>
        </div>

        {/* Disclaimer y tế */}
        <div className="py-4 px-5 rounded-2xl bg-white/5 border border-gold/20 mb-8 flex items-start gap-3 text-xs text-white/70 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
          <p>
            <strong>Tuyên bố miễn trừ trách nhiệm y khoa:</strong> Các chia sẻ và phác đồ trên website mang tính chất giáo dục chăm sóc sức khỏe chủ động và trị liệu tự nhiên. Nội dung không thay thế cho các chỉ định phẫu thuật y khoa chuyên khoa từ bác sĩ bệnh viện.
          </p>
        </div>

        {/* Bản quyền */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>
            © {currentYear} T&T SPA (Toàn T&T) • Face Massage Root. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Đồng hành cùng sức khỏe và sắc đẹp từ gốc rễ.
          </p>
        </div>
      </div>
    </footer>
  );
}
