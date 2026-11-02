'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HeartHandshake, Sparkles, CheckCircle2, Phone, Award, ShieldCheck, Flame } from 'lucide-react';
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
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 bg-gradient-to-b from-[#FAF7F2] via-white to-surface-muted">
        {/* Họa tiết trang trí tone ấm */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Banner chính thức FACE MASSAGE ROOT sắc nét 2560x947 */}
          <div className="mb-12 relative w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#26140A] group">
            <Image
              src="/images/banner-face-massage-root.jpg"
              alt="T&T SPA - Face Massage Root - Chăm Sóc Sức Khỏe Từ Gốc"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3">
              <a
                href="tel:0358363058"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold text-[#26140A] font-extrabold text-xs sm:text-sm shadow-elevated hover:bg-gold-light transition-colors"
              >
                <Phone className="w-4 h-4 animate-bounce" /> Hotline: 0358.363.058
              </a>
              <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-md hidden sm:inline-block">
                Phương pháp Massage Mặt Trị Liệu Độc Quyền
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Cột chữ bên trái */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              {/* Badge nhận diện */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gold/30 shadow-soft">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-primary">
                  T&T Spa • Trần Thị Toàn (Toàn T&T) • Chăm Sóc Sức Khỏe Từ Gốc
                </span>
              </div>

              {/* Tiêu đề chính */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary font-display leading-[1.25] tracking-tight">
                Face Massage Root – Massage Mặt Kích Hoạt Tự Tái Tạo Từ Gốc Rễ Cơ Thể
              </h1>

              {/* Triết lý Fanpage */}
              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-3xl">
                <em>"Chúng tôi không chỉ nhìn vào bề mặt làn da. Chúng tôi nhìn sâu hơn – vào tận gốc rễ."</em> Hơn 9 năm nghiên cứu và đồng hành cùng các chuyên gia hàng đầu về da, dưỡng sinh và y học tự nhiên, phương pháp <strong>Face Massage Root</strong> đánh thức nguồn năng lượng tự chữa lành kỳ diệu của cơ thể.
              </p>

              {/* 3 trụ cột kỹ thuật của Face Massage Root */}
              <div id="face-massage-root" className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 pb-2 text-left">
                <div className="p-3.5 rounded-2xl bg-white border border-gold/20 shadow-soft">
                  <div className="w-8 h-8 rounded-xl bg-gold/15 text-gold flex items-center justify-center font-bold text-xs mb-2">
                    01
                  </div>
                  <h4 className="text-xs font-bold text-primary mb-1">
                    Tự Sửa Chữa & Tái Tạo
                  </h4>
                  <p className="text-[11px] text-charcoal-muted leading-relaxed">
                    Kích hoạt chức năng tự phục hồi tế bào tự nhiên từ gốc rễ của cơ thể.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gold/20 shadow-soft">
                  <div className="w-8 h-8 rounded-xl bg-gold/15 text-gold flex items-center justify-center font-bold text-xs mb-2">
                    02
                  </div>
                  <h4 className="text-xs font-bold text-primary mb-1">
                    Đồng Ứng Nội Tạng
                  </h4>
                  <p className="text-[11px] text-charcoal-muted leading-relaxed">
                    Kích hoạt đồng ứng chức năng tự chữa lành lên các cơ quan nội tạng bên trong.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gold/20 shadow-soft">
                  <div className="w-8 h-8 rounded-xl bg-gold/15 text-gold flex items-center justify-center font-bold text-xs mb-2">
                    03
                  </div>
                  <h4 className="text-xs font-bold text-primary mb-1">
                    Trị Liệu Chuyên Sâu
                  </h4>
                  <p className="text-[11px] text-charcoal-muted leading-relaxed">
                    Massage sâu tổng thể giải tỏa ách tắc toàn diện vùng Mặt – Đầu – Cổ Vai Gáy.
                  </p>
                </div>
              </div>

              {/* 2 CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => openModal('transfer')}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white shadow-elevated"
                >
                  <HeartHandshake className="w-5 h-5 mr-2 text-gold-light" />
                  Chuyển giao mô hình T&T Spa
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openModal('skincare')}
                  className="w-full sm:w-auto bg-white border-gold text-primary hover:bg-gold/10"
                >
                  <Sparkles className="w-5 h-5 mr-2 text-gold" />
                  Đặt lịch trải nghiệm trị liệu
                </Button>
              </div>
            </div>

            {/* Cột Logo tròn & Thẻ bảo chứng bên phải */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold/30 shadow-elevated text-center relative overflow-hidden">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-2xl mb-6 bg-[#26140A]">
                  <Image
                    src="/images/logo-ttspa.jpg"
                    alt="Logo T&T Spa Face Massage Root"
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold-dark text-xs font-bold tracking-wider uppercase mb-2">
                  Thương Hiệu Độc Quyền
                </span>
                <h3 className="text-xl font-bold text-primary font-display mb-1">
                  T&T SPA TUYÊN QUANG
                </h3>
                <p className="text-xs text-charcoal-muted mb-4">
                  Chuyên sâu da liễu & Phương pháp Face Massage Root
                </p>

                <div className="p-3.5 bg-surface-muted rounded-2xl border border-gold/20 text-left space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>9+ Năm kinh nghiệm lâm sàng & dưỡng sinh</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Chuyển giao mô hình thực chiến trên toàn quốc</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Hotline tư vấn trực tiếp: <strong>0358.363.058</strong></span>
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
