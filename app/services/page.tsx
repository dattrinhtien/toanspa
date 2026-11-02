'use client';

import React, { useState } from 'react';
import { Clock, ShieldCheck, CheckCircle2, AlertCircle, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { ConsultationModal } from '@/components/shared/ConsultationModal';
import { B2C_SERVICES } from '@/lib/mock-data';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('skincare');

  const handleBook = (type: string) => {
    setSelectedService(type);
    setModalOpen(true);
  };

  const serviceFaqs = [
    {
      q: 'Liệu trình phục hồi da có đau rát hay bong tróc lột tẩy không?',
      a: 'Hoàn toàn không. Phác đồ phục hồi da Heshi tuân thủ nguyên tắc y khoa, sử dụng các peptide sinh học, ceramide và dưỡng chất làm dịu màng tế bào. Không sử dụng acid lột tẩy, không lăn kim xâm lấn sâu trong giai đoạn da đang nhạy cảm.',
    },
    {
      q: 'Trị liệu cơ mạc cổ vai gáy có gây bầm tím hoặc đau nhức sau buổi làm không?',
      a: 'Kỹ thuật viên tại Toàn Heshi áp dụng kỹ thuật giải phóng Fascia mô sâu kết hợp làm ấm thảo dược với lực vừa đủ để duỗi mềm cơ. Quá trình làm rất êm ái, sau buổi trị liệu bạn sẽ cảm thấy vùng gáy nhẹ nhõm và khoan khoái tức thì.',
    },
    {
      q: 'Một liệu trình phục hồi thông thường kéo dài bao nhiêu buổi?',
      a: 'Tùy thuộc vào mức độ tổn thương của làn da hoặc tình trạng co cứng cơ mạc sau khi chuyên gia thăm khám trực tiếp. Thông thường, khách hàng cảm nhận sự cải thiện rõ rệt ngay từ 1 – 3 buổi đầu tiên.',
    },
    {
      q: 'Sau liệu trình có cần phải ăn kiêng quá khắt khe không?',
      a: 'Chúng tôi không khuyến khích việc nhịn ăn cực đoan. Chuyên gia sẽ hướng dẫn bạn chế độ dinh dưỡng chuyển hóa khoa học, ăn đủ đạm, đủ chất xơ và chất béo tốt để nuôi dưỡng mô sừng và sụn khớp từ gốc.',
    },
  ];

  return (
    <>
      <div className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-sage bg-sage-soft border border-sage/20 rounded-full">
              Chuẩn Hóa Y Khoa & Thân Thiện Sinh Học
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-display tracking-tight">
              Danh Mục Dịch Vụ Phục Hồi Thể Chất & Tái Tạo Làn Da
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Tất cả các liệu trình đều được xây dựng trên sự thấu hiểu sinh lý cơ thể, nói không với các thủ thuật xâm lấn thô bạo gây tổn thương mô kéo dài.
            </p>
          </div>

          {/* Lưu ý y tế quan trọng */}
          <div className="p-4 sm:p-5 rounded-2xl bg-primary-50 border border-primary/20 mb-16 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-primary-700 leading-relaxed">
              <strong>Cam kết chuyên môn:</strong> Tại Toàn Heshi, chúng tôi không dùng từ "chữa khỏi dứt điểm 100%" mang tính cam kết vô căn cứ. Chúng tôi cam kết đưa ra phác đồ khoa học, trung thực về tỷ lệ phục hồi của làn da và khớp cơ dựa trên kết quả thăm khám thực tế.
            </div>
          </div>

          {/* Chi tiết từng dịch vụ */}
          <div className="space-y-12 mb-20">
            {B2C_SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id === 'skin-restoration' ? 'skin' : service.id === 'fascia-neck-shoulder' ? 'fascia' : 'nutrition'}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-soft hover:shadow-card transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-charcoal flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sage" />
                        {service.duration}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-sage-soft text-xs font-semibold text-sage">
                        Dịch vụ Trọng điểm 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-primary font-display">
                      {service.title}
                    </h2>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="text-xs font-bold text-charcoal block mb-1">
                        Chỉ định phù hợp:
                      </span>
                      <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                        {service.suitableFor}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                        Các bước trong quy trình chuẩn y khoa:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.process.map((step, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-surface-muted border border-slate-100 flex items-start gap-2.5 text-xs text-charcoal leading-relaxed"
                          >
                            <span className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cột phải: Cam kết & Đặt lịch */}
                  <div className="lg:col-span-4 bg-surface-muted p-6 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sage block mb-2">
                        Kết quả dự kiến:
                      </span>
                      <p className="text-xs sm:text-sm text-charcoal leading-relaxed flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                        <span>{service.commitments}</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60">
                      <Button
                        variant="primary"
                        className="w-full text-xs sm:text-sm py-3 shadow-md"
                        onClick={() => handleBook(service.id === 'skin-restoration' ? 'skincare' : 'musculoskeletal')}
                      >
                        <Sparkles className="w-4 h-4 mr-1.5" />
                        Đặt lịch tư vấn liệu trình
                      </Button>
                      <p className="text-[11px] text-charcoal-soft text-center mt-2">
                        Thăm khám & soi da trực tiếp cùng chuyên gia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-soft mb-20">
            <SectionHeading
              badge="Hỏi Đáp Thắc Mắc"
              title="Những Câu Hỏi Thường Gặp Về Dịch Vụ"
              description="Một số giải đáp giúp quý khách hàng an tâm trước khi lựa chọn phác đồ chăm sóc tại Toàn Heshi."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {serviceFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-surface-muted border border-slate-100">
                  <div className="flex items-start gap-2.5 mb-2">
                    <HelpCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-sm font-bold text-charcoal font-display">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Banner liên hệ */}
          <div className="rounded-3xl bg-primary text-white p-8 sm:p-12 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Bạn Cần Đánh Giá Thể Trạng Hay Kiểm Tra Làn Da Cụ Thể?
            </h3>
            <p className="text-sm text-primary-100 max-w-xl mx-auto">
              Đừng ngần ngại liên hệ hoặc ghé cơ sở tại Tuyên Quang để được chuyên gia trực tiếp kiểm tra và tư vấn hướng khắc phục an toàn nhất.
            </p>
            <div className="pt-2">
              <Button
                variant="white"
                size="lg"
                onClick={() => handleBook('skincare')}
              >
                Đặt lịch thăm khám ngay hôm nay
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}

