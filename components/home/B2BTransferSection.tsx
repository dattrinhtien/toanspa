'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ShieldCheck, TrendingUp, Users2, Award, ArrowRight, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { ConsultationModal } from '@/components/shared/ConsultationModal';

export function B2BTransferSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const transferFeatures = [
    {
      title: 'Chuẩn hóa quy trình vận hành SOP',
      desc: 'Bàn giao trọn bộ quy trình đón tiếp, chẩn đoán soi da vi điểm, phác đồ điều trị và chăm sóc sau liệu trình chuyên nghiệp.',
      icon: ShieldCheck,
    },
    {
      title: 'Đào tạo kỹ thuật viên cầm tay chỉ việc',
      desc: 'Học viên được thực hành lâm sàng trực tiếp trên người thật dưới sự kèm cặp sát sao của Chuyên gia Toàn Heshi.',
      icon: Award,
    },
    {
      title: 'Bảo hộ sản phẩm Heshi chính hãng',
      desc: 'Hệ thống dược mỹ phẩm và sản phẩm phục hồi đạt chuẩn kiểm nghiệm y tế, chiết khấu đại lý hấp dẫn và cam kết chất lượng.',
      icon: TrendingUp,
    },
    {
      title: 'Chiến lược Marketing thu hút khách hàng',
      desc: 'Hướng dẫn kịch bản xây dựng thương hiệu cá nhân cho chủ spa và cách tạo phễu khách hàng trung thành tại địa phương.',
      icon: Users2,
    },
  ];

  return (
    <>
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Cột trái: Ảnh minh họa đào tạo thực chiến */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50">
                <Image
                  src="/images/training-event.jpg"
                  alt="Đào tạo chuyển giao mô hình Spa Y khoa Toàn Heshi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-sage rounded-full text-xs font-semibold mb-2 inline-block">
                    Thực hành thực chiến
                  </span>
                  <h4 className="text-xl font-bold font-display">
                    Đào Tạo Lâm Sàng Trực Tiếp
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">
                    Cầm tay chỉ việc đến khi vững tay nghề và tự tin vận hành cơ sở.
                  </p>
                </div>
              </div>

              {/* Tag cam kết nổi */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-2xl shadow-elevated hidden sm:block">
                <span className="text-xs font-semibold uppercase tracking-wider block text-sage-soft">
                  Cam kết uy tín
                </span>
                <span className="text-base font-bold">100% Cấp Bằng & Chuyển Giao Bí Quyết</span>
              </div>
            </div>

            {/* Cột phải: Nội dung giới thiệu */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary-50 border border-primary/20 rounded-full">
                Dành Riêng Cho Chủ Spa & Khởi Nghiệp Thẩm Mỹ
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-display tracking-tight">
                Chuyển Giao Mô Hình Spa Chuẩn Y Khoa – Giải Pháp Tăng Trưởng Bền Vững
              </h2>

              <p className="text-base text-charcoal-muted leading-relaxed">
                Đừng để cơ sở của bạn rơi vào bẫy cạnh tranh giảm giá không hồi kết. Hãy nâng tầm vị thế với mô hình <strong>Spa Y khoa kết hợp Kiềng 3 chân</strong> được chuyển giao bài bản từ Chuyên gia Toàn Heshi.
              </p>

              {/* Lưới các lợi ích chuyển giao */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {transferFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-surface-muted border border-slate-100 hover:border-primary/20 transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-sm font-bold text-charcoal mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Nút CTA chuyển giao */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto"
                >
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Đăng ký nhận hồ sơ chuyển giao
                </Button>

                <Link
                  href="/training"
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-light transition-colors py-2"
                >
                  Xem chi tiết các gói chuyển giao <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="transfer"
      />
    </>
  );
}

