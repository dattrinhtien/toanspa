'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, User, FileText, Send, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultService = 'transfer',
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceInterest: defaultService,
    note: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

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
      setErrorMessage('Không thể kết nối máy chủ. Vui lòng thử lại sau ít phút.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      serviceInterest: defaultService,
      note: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300">
        {/* Header Decor */}
        <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="absolute top-4 right-4 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-sage-soft" />
            Đồng hành 1-1 cùng Chuyên gia Toàn T&T Spa
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display">
            Đăng Ký Tư Vấn & Chuyển Giao
          </h3>
          <p className="text-xs sm:text-sm text-primary-100 mt-1">
            Chăm sóc sức khỏe từ gốc – Xây dựng mô hình Spa chuẩn Y khoa bền vững.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-sage-soft text-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-2 font-display">
                Đăng Ký Thành Công!
              </h4>
              <p className="text-sm text-charcoal-muted mb-6 leading-relaxed">
                Cảm ơn bạn đã gửi thông tin. Chuyên gia Trần Thị Toàn sẽ trực tiếp liên hệ lại trong thời gian sớm nhất để tư vấn lộ trình chi tiết.
              </p>
              <Button onClick={handleReset} variant="primary" className="w-full">
                Hoàn tất & Đóng
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 text-xs text-red-600 bg-red-50 rounded-xl border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Họ và tên của bạn <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-charcoal-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Thị Lan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Số điện thoại (Zalo) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-charcoal-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Nhu cầu quan tâm hàng đầu
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="transfer">Chuyển giao mô hình Spa Y khoa (B2B)</option>
                  <option value="skincare">Liệu trình phục hồi da tổn thương (B2C)</option>
                  <option value="musculoskeletal">Trị liệu cơ mạc cổ vai gáy (B2C)</option>
                  <option value="nutrition">Tư vấn dinh dưỡng chuyển hóa tế bào</option>
                  <option value="other">Nhu cầu khác</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Ghi chú hoặc tình trạng hiện tại
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-charcoal-soft absolute left-3.5 top-3" />
                  <textarea
                    rows={3}
                    placeholder="Mô tả sơ lược về quy mô cơ sở của bạn hoặc vấn đề sức khỏe bạn đang gặp phải..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>

              <p className="text-[11px] text-charcoal-soft italic">
                * Cam kết bảo mật 100% thông tin. Chúng tôi tôn trọng quyền riêng tư của bạn.
              </p>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="w-full shadow-lg"
                >
                  <Send className="w-4 h-4 mr-1.5" /> Gửi Yêu Cầu Tư Vấn Ngay
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

