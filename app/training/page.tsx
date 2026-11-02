'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ShieldCheck, Award, HeartHandshake, Sparkles, FileText, ArrowRight, HelpCircle } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { ConsultationModal } from '@/components/shared/ConsultationModal';
import { B2B_TRAINING_PACKAGES } from '@/lib/mock-data';

export default function TrainingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Gói chuyển giao');

  const handleOpenModal = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setModalOpen(true);
  };

  const transferSteps = [
    {
      step: '01',
      title: 'Khảo sát hiện trạng & Tư vấn định vị',
      desc: 'Đánh giá dung lượng thị trường địa phương, tệp khách hàng tiềm năng và hiện trạng cơ sở vật chất của bạn để tư vấn gói phù hợp nhất.',
    },
    {
      step: '02',
      title: 'Ký kết hợp đồng chuyển giao minh bạch',
      desc: 'Cam kết rõ ràng về quyền lợi, danh mục chuyển giao công nghệ, bảo hộ sản phẩm và cam kết không phát sinh chi phí ẩn.',
    },
    {
      step: '03',
      title: 'Đào tạo lâm sàng thực chiến 1-1',
      desc: 'Học viên được Chuyên gia Toàn Heshi trực tiếp "cầm tay chỉ việc", thực hành trực tiếp trên người thật cho tới khi chuẩn kỹ năng.',
    },
    {
      step: '04',
      title: 'Bàn giao bộ tài liệu vận hành SOP',
      desc: 'Cung cấp toàn bộ kịch bản tư vấn, bảng cam kết phác đồ với khách, bảng tính giá vốn - giá bán và chiến lược thu hút khách hàng.',
    },
    {
      step: '05',
      title: 'Đồng hành ra mắt & Tái đào tạo định kỳ',
      desc: 'Hỗ trợ truyền thông ngày khai trương dịch vụ mới, kiểm tra tay nghề định kỳ và cập nhật các tiến bộ y học thẩm mỹ mới nhất.',
    },
  ];

  return (
    <>
      <div className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Giới thiệu mô hình chuyển giao */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary-50 border border-primary/20 rounded-full">
              Dành Riêng Cho Chủ Spa & Khởi Nghiệp Thẩm Mỹ
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-display tracking-tight">
              Chuyển Giao Mô Hình Spa Chuẩn Y Khoa & Đào Tạo Thực Chiến Heshi
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Giải pháp thoát khỏi bế tắc cạnh tranh giá rẻ. Chuẩn hóa dịch vụ từ tay nghề kỹ thuật viên đến quy trình vận hành và hệ thống sản phẩm phục hồi chính hãng.
            </p>
          </div>

          {/* 3 Gói chuyển giao chi tiết */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
            {B2B_TRAINING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 ${
                  pkg.isPopular
                    ? 'border-2 border-sage shadow-elevated lg:-translate-y-2'
                    : 'border-slate-200/80 shadow-soft hover:shadow-card'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sage text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  {!pkg.isPopular && (
                    <span className="inline-block px-3 py-0.5 text-[11px] font-semibold text-primary bg-primary-50 rounded-full mb-3">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-primary font-display mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {pkg.target}
                  </p>
                </div>

                <div className="space-y-3.5 mb-8 flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                    Quyền lợi nhận được:
                  </span>
                  {pkg.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-sage-soft text-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button
                    variant={pkg.isPopular ? 'secondary' : 'primary'}
                    className="w-full text-xs sm:text-sm py-3"
                    onClick={() => handleOpenModal(pkg.name)}
                  >
                    <HeartHandshake className="w-4 h-4 mr-1.5" />
                    {pkg.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Quy trình 5 bước chuyển giao */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-soft mb-20">
            <SectionHeading
              badge="Lộ Trình Chuẩn Hóa"
              title="Quy Trình 5 Bước Tiếp Nhận Chuyển Giao"
              description="Rõ ràng, minh bạch và bám sát thực tế để bạn sớm đưa mô hình vào vận hành sinh lời bền vững."
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {transferSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col p-5 rounded-2xl bg-surface-muted border border-slate-100">
                  <span className="text-3xl font-extrabold text-primary/25 font-display mb-2">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-charcoal mb-2 font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cam kết của Chuyên gia Toàn Heshi */}
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-3xl p-8 sm:p-12 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-sage-soft rounded-full inline-block">
                  Cam Kết Vàng
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display">
                  Đồng Hành Cho Đến Khi Học Viên Thành Thạo & Tự Tin Kiếm Tiền
                </h3>
                <p className="text-sm sm:text-base text-primary-100 leading-relaxed">
                  Chúng tôi không bán một khóa học rời rạc hay một đơn hàng sản phẩm rồi bỏ mặc đối tác. Toàn Heshi cam kết hỗ trợ giải đáp ca bệnh da liễu khó 24/7 và hỗ trợ cập nhật kỹ thuật miễn phí trọn đời cho các cơ sở trực thuộc hệ thống.
                </p>
              </div>
              <div className="lg:col-span-4 text-center lg:text-right">
                <Button
                  variant="white"
                  size="lg"
                  onClick={() => handleOpenModal('Tư vấn chuyển giao toàn diện')}
                >
                  Đăng ký tư vấn trực tiếp 1-1
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="transfer"
      />
    </>
  );
}

