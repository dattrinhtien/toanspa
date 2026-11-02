import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ShieldCheck, Heart, Facebook, MessageCircle, AlertCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sage-light flex-shrink-0 bg-white/10">
                <Image
                  src="/images/avatar.jpg"
                  alt="Trần Thị Toàn (Toàn Heshi)"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  Trần Thị Toàn (Toàn Heshi)
                </h3>
                <p className="text-xs text-sage-soft font-medium uppercase tracking-wide">
                  Chăm Sóc Sức Khỏe Từ Gốc
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-100 leading-relaxed">
              Tiên phong xây dựng và chuyển giao mô hình Spa chuẩn Y khoa kết hợp triết lý Kiềng 3 Chân: Mát-xa – Vận động – Dinh dưỡng. Đồng hành cùng hàng ngàn khách hàng và chủ cơ sở làm đẹp trên toàn quốc.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/ngok.nhok.5648"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook cá nhân Chuyên gia Toàn Heshi"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://zalo.me/0988888888"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo kết nối trực tiếp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0068FF] text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cột 2: Hệ sinh thái & Dịch vụ */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-display">
              Hệ Sinh Thái Dịch Vụ
            </h4>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link href="/services#skin" className="hover:text-white transition-colors">
                  Phục hồi da màng ẩm & cấu trúc sinh học
                </Link>
              </li>
              <li>
                <Link href="/services#fascia" className="hover:text-white transition-colors">
                  Trị liệu cơ mạc Fascia Cổ Vai Gáy
                </Link>
              </li>
              <li>
                <Link href="/services#nutrition" className="hover:text-white transition-colors">
                  Tư vấn dinh dưỡng chuyển hóa tế bào
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white transition-colors">
                  Chuyển giao mô hình Spa Y khoa Heshi
                </Link>
              </li>
              <li>
                <Link href="/training#coaching" className="hover:text-white transition-colors">
                  Đào tạo kỹ thuật viên chuẩn tay nghề
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên kết nhanh */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-display">
              Thông Tin & Kiến Thức
            </h4>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Về Chuyên gia Trần Thị Toàn
                </Link>
              </li>
              <li>
                <Link href="/#pillars" className="hover:text-white transition-colors">
                  Triết lý Kiềng 3 Chân
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Cẩm nang kiến thức sức khỏe
                </Link>
              </li>
              <li>
                <Link href="/blog?cat=da-lieu-y-khoa" className="hover:text-white transition-colors">
                  Chuyên mục Da liễu Y khoa
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Đặt lịch hẹn & Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Thông tin cơ sở */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider font-display">
              Thông Tin Cơ Sở
            </h4>
            <div className="space-y-3 text-sm text-primary-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage-light flex-shrink-0 mt-0.5" />
                <span>Trụ sở chính: TP. Tuyên Quang, Tỉnh Tuyên Quang, Việt Nam</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sage-light flex-shrink-0" />
                <span>Hotline / Zalo: 0988.888.888</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sage-light flex-shrink-0" />
                <span>contact@toanheshi.vn</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-primary-100">
              <span className="font-semibold text-white block mb-1">Thời gian làm việc:</span>
              Thứ 2 – Chủ Nhật: 08:30 – 19:30<br />
              (Vui lòng đặt lịch trước khi tới trải nghiệm)
            </div>
          </div>
        </div>

        {/* Disclaimer y tế */}
        <div className="py-4 px-5 rounded-2xl bg-white/5 border border-white/10 mb-8 flex items-start gap-3 text-xs text-primary-100 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-sage-light flex-shrink-0 mt-0.5" />
          <p>
            <strong>Tuyên bố miễn trừ trách nhiệm y khoa:</strong> Các thông tin và bài viết chia sẻ trên website mang tính chất giáo dục nâng cao nhận thức chăm sóc sức khỏe chủ động và kinh nghiệm thực hành nghề. Nội dung không thay thế cho việc chẩn đoán, thăm khám hay chỉ định điều trị y khoa chuyên khoa từ bác sĩ.
          </p>
        </div>

        {/* Bản quyền */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-100 gap-4">
          <p>
            © {currentYear} Trần Thị Toàn (Toàn Heshi). All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Xây dựng với <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> và tâm huyết bảo vệ sức khỏe từ gốc.
          </p>
        </div>
      </div>
    </footer>
  );
}

