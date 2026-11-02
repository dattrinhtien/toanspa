'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { ConsultationModal } from '@/components/shared/ConsultationModal';

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('transfer');

  const openModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-primary-50/60 via-white to-surface-muted">
        {/* Nền hoa văn trang trí tinh tế */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sage-50 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Cột chữ bên trái */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge nhận diện */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-soft">
                <span className="w-2.5 h-2.5 rounded-full bg-sage animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  Trần Thị Toàn (Toàn Heshi) • Chuyên Gia Chăm Sóc Sức Khỏe Từ Gốc
                </span>
              </div>

              {/* Tiêu đề chính */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-primary font-display leading-[1.25] tracking-tight">
                Chăm Sóc Sức Khỏe Từ Gốc – 10 Năm Đồng Hành Cùng Làn Da & Thể Chất
              </h1>

              {/* Mô tả ngắn */}
              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Kết hợp chuẩn hóa giữa <strong>Trị liệu Spa chuẩn Y khoa</strong>, <strong>Vận động phục hồi linh hoạt</strong> và <strong>Dinh dưỡng chuyển hóa tế bào</strong>. Xây dựng nền tảng cơ thể vững chắc và làn da tươi trẻ tự nhiên từ sâu bên trong.
              </p>

              {/* Danh sách cam kết cốt lõi */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal font-medium">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                  <span>Chuẩn hóa Y khoa</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal font-medium">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                  <span>Kiềng 3 chân bền vững</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal font-medium">
                  <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                  <span>Chuyển giao thực chiến</span>
                </div>
              </div>

              {/* 2 CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => openModal('transfer')}
                  className="w-full sm:w-auto shadow-elevated"
                >
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Khám phá mô hình chuyển giao
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openModal('skincare')}
                  className="w-full sm:w-auto bg-white"
                >
                  <Sparkles className="w-5 h-5 mr-2 text-sage" />
                  Đặt lịch tư vấn trị liệu
                </Button>
              </div>

              {/* Lời chứng nhận chân thực */}
              <p className="text-xs text-charcoal-soft italic text-center lg:text-left">
                * Dành cho cả đối tác B2B (Chủ Spa muốn nâng cấp mô hình) và khách hàng cá nhân B2C (Cần phục hồi da & cơ xương khớp).
              </p>
            </div>

            {/* Cột hình ảnh bên phải */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Khung ảnh chính sắc nét */}
                <div className="relative h-[400px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <Image
                    src="/images/hero-expert.jpg"
                    alt="Chuyên gia Trần Thị Toàn (Toàn Heshi) - Chăm sóc sức khỏe từ gốc"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F6C]/90 via-[#0B4F6C]/20 to-transparent" />
                  
                  {/* Tag trên ảnh */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 bg-sage text-white rounded-full text-[11px] font-bold uppercase tracking-wider mb-2 inline-block shadow-sm">
                      Nhà Sáng Lập Mô Hình
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display drop-shadow-sm">
                      Trần Thị Toàn (Toàn Heshi)
                    </h3>
                    <p className="text-xs text-sage-soft mt-1 font-medium">
                      Chuyên gia Da Liễu • Trị Liệu Cơ Mạc • Dinh Dưỡng
                    </p>
                  </div>
                </div>

                {/* Floating Card 1: 10+ năm kinh nghiệm */}
                <div className="absolute -top-5 -left-5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-elevated border border-slate-100 flex items-center gap-3 animate-bounce-subtle">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-primary leading-tight">10+ Năm</span>
                    <span className="text-[11px] text-charcoal-muted">Kinh nghiệm lâm sàng</span>
                  </div>
                </div>

                {/* Floating Card 2: 120+ cơ sở spa */}
                <div className="absolute -bottom-5 -right-5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-elevated border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-soft flex items-center justify-center text-sage">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-sage leading-tight">120+ Spa</span>
                    <span className="text-[11px] text-charcoal-muted">Chuyển giao thành công</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={modalType}
      />
    </>
  );
}

