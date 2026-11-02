'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, User, MessageSquare, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/shared/Button';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceInterest: 'transfer',
    note: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Có lỗi xảy ra, vui lòng thử lại.');
      }
    } catch {
      setErrorMessage('Không thể gửi yêu cầu lúc này. Vui lòng kết nối qua hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-b from-surface-muted to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Cột trái: Thông điệp và liên hệ */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary via-primary to-primary-light p-8 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-sage-soft bg-white/10 rounded-full mb-4">
                  Đồng Hành Chuyên Sâu
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display mb-4">
                  Bắt Đầu Hành Trình Chăm Sóc Sức Khỏe Từ Gốc
                </h3>
                <p className="text-sm text-primary-100 leading-relaxed mb-8">
                  Dù bạn đang ấp ủ dự định nâng cấp cơ sở spa của mình hay đang tìm kiếm giải pháp phục hồi thể trạng cá nhân, Chuyên gia Toàn Heshi luôn sẵn lòng lắng nghe và tư vấn tận tâm.
                </p>

                <div className="space-y-4 text-sm text-primary-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sage-light flex-shrink-0 mt-0.5" />
                    <span>Cơ sở chính: TP. Tuyên Quang, Tỉnh Tuyên Quang</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <a href="tel:0358363058" className="hover:underline font-bold text-gold-light">
                      Hotline / Zalo: 0358.363.058
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sage-light flex-shrink-0" />
                    <span>contact@toanheshi.vn</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/15">
                <div className="flex items-center gap-2 text-xs text-primary-100">
                  <ShieldCheck className="w-4 h-4 text-sage-light flex-shrink-0" />
                  <span>Mọi thông tin cá nhân đều được bảo mật tuyệt đối.</span>
                </div>
              </div>
            </div>

            {/* Cột phải: Form thu thập thông tin */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-sage-soft text-sage rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary font-display mb-2">
                    Yêu Cầu Đã Được Tiếp Nhận!
                  </h4>
                  <p className="text-sm text-charcoal-muted max-w-md mx-auto mb-6">
                    Chuyên gia Trần Thị Toàn và đội ngũ chuyên môn sẽ sớm liên lạc với bạn để gửi tài liệu và tư vấn giải pháp phù hợp nhất.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        serviceInterest: 'transfer',
                        note: '',
                      });
                    }}
                  >
                    Gửi thêm yêu cầu khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h4 className="text-xl font-bold text-charcoal font-display mb-1">
                      Để Lại Thông Tin Tư Vấn
                    </h4>
                    <p className="text-xs text-charcoal-muted">
                      Điền thông tin bên dưới để nhận phác đồ tư vấn miễn phí từ chuyên gia.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 text-xs text-red-600 bg-red-50 rounded-xl border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">
                        Họ và tên của bạn <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-charcoal-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Ví dụ: Trần Thị Mai"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">
                        Số điện thoại (có Zalo) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-charcoal-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="Ví dụ: 0358 363 058"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      Nhu cầu quan tâm chính
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="transfer">Nhận chuyển giao mô hình Spa Y khoa (B2B)</option>
                      <option value="skincare">Liệu trình phục hồi da bệnh lý/hư tổn (B2C)</option>
                      <option value="musculoskeletal">Trị liệu cơ mạc cổ vai gáy & cột sống (B2C)</option>
                      <option value="nutrition">Tư vấn chế độ dinh dưỡng chuyển hóa tế bào</option>
                      <option value="other">Hợp tác & đào tạo kỹ thuật viên</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">
                      Ghi chú thêm về nhu cầu / tình trạng
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-charcoal-soft absolute left-3.5 top-3" />
                      <textarea
                        rows={3}
                        placeholder="Hãy chia sẻ thêm tình trạng của bạn hoặc mong muốn khi nhận chuyển giao mô hình..."
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Gửi Đăng Ký Tư Vấn
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

