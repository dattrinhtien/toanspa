import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle, ShieldCheck } from 'lucide-react';
import { ContactFormSection } from '@/components/home/ContactFormSection';

export const metadata: Metadata = {
  title: 'Liên Hệ & Đặt Lịch Tư Vấn',
  description:
    'Thông tin liên hệ trực tiếp với Chuyên gia Trần Thị Toàn (Toàn Heshi). Cơ sở tại Tuyên Quang, hỗ trợ tư vấn chuyển giao mô hình Spa chuẩn Y khoa trên toàn quốc.',
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-sage bg-sage-soft border border-sage/20 rounded-full">
            Kết Nối Trực Tiếp
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-display tracking-tight">
            Liên Hệ Với Chuyên Gia Trần Thị Toàn
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe mọi băn khoăn về làn da, thể chất cũng như các dự định phát triển mô hình kinh doanh spa chuẩn y khoa của bạn.
          </p>
        </div>

        {/* 3 Thẻ thông tin nhanh */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-charcoal font-display mb-1">
              Địa Chỉ Cơ Sở
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              TP. Tuyên Quang, Tỉnh Tuyên Quang, Việt Nam
            </p>
            <span className="text-[11px] text-sage font-medium mt-2">
              (Có chỗ để xe thuận tiện)
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-sage-soft text-sage flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-charcoal font-display mb-1">
              Hotline & Zalo
            </h3>
            <a
              href="tel:0358363058"
              className="text-base font-bold text-primary hover:text-gold transition-colors"
            >
              0358.363.058
            </a>
            <span className="text-[11px] text-charcoal-muted mt-2">
              Hỗ trợ tư vấn 24/7 qua Zalo
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Facebook className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-charcoal font-display mb-1">
              Mạng Xã Hội Chính Thức
            </h3>
            <a
              href="https://www.facebook.com/profile.php?id=100063462697969&locale=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#1877F2] hover:underline mt-1"
            >
              Fanpage: Toàn T&T spa
            </a>
            <span className="text-[11px] text-charcoal-muted mt-2">
              Theo dõi các chia sẻ ca bệnh lâm sàng
            </span>
          </div>
        </div>
      </div>

      {/* Tích hợp Form liên hệ */}
      <ContactFormSection />
    </div>
  );
}

