'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ShieldAlert, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { ConsultationModal } from '@/components/shared/ConsultationModal';
import { B2C_SERVICES } from '@/lib/mock-data';

export function B2CServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('skincare');

  const handleBook = (serviceId: string) => {
    setSelectedService(serviceId === 'skin-restoration' ? 'skincare' : 'musculoskeletal');
    setModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-surface-muted relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Dịch Vụ Trị Liệu Trọng Điểm"
            title="Liệu Trình Phục Hồi Thể Chất & Tái Tạo Làn Da Chuẩn Y Khoa"
            description="Phác đồ can thiệp an toàn, không đau đớn, tôn trọng cơ chế sinh học tự nhiên của cơ thể dưới sự giám sát trực tiếp của chuyên gia."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {B2C_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-soft hover:shadow-card flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Badge thời lượng */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-charcoal">
                      <Clock className="w-3.5 h-3.5 text-sage" />
                      {service.duration}
                    </span>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Cá nhân hóa
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary font-display mb-3">
                    {service.title}
                  </h3>

                  {/* Đối tượng phù hợp */}
                  <div className="p-3 bg-slate-50 rounded-xl mb-5 text-xs text-charcoal-muted leading-relaxed">
                    <span className="font-semibold text-charcoal block mb-0.5">
                      Phù hợp với:
                    </span>
                    {service.suitableFor}
                  </div>

                  {/* Quy trình thực hiện */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                      Các bước quy trình:
                    </span>
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-primary-50 text-primary flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  {/* Cam kết y tế */}
                  <p className="text-[11px] text-sage font-medium mb-4 flex items-start gap-1.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{service.commitments}</span>
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleBook(service.id)}
                    className="w-full text-xs hover:bg-primary hover:text-white"
                  >
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-sage" />
                    Đặt lịch thăm khám tư vấn
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-light transition-colors"
            >
              Xem toàn bộ bảng danh mục dịch vụ & liệu trình <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}

