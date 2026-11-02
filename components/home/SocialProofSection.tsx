'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, Star, Award, CheckCircle, Users } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { STATS_DATA, TESTIMONIALS } from '@/lib/mock-data';

export function SocialProofSection() {
  return (
    <section className="py-20 bg-surface-cream relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Số liệu thống kê ấn tượng */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft text-center group hover:border-primary/20 transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-display mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-charcoal mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-charcoal-muted">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tiêu đề phần Đánh giá & Uy tín */}
        <SectionHeading
          badge="Bảo Chứng Uy Tín"
          title="Những Câu Chuyện Thay Đổi Thật Từ Học Viên & Khách Hàng"
          description="Sự thành công của hơn một trăm cơ sở spa và sự phục hồi thể chất của hàng ngàn khách hàng là minh chứng rõ nhất cho chất lượng đào tạo và phác đồ trị liệu."
        />

        {/* Danh sách Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-soft flex flex-col justify-between relative hover:shadow-card transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Badge B2B / B2C */}
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      item.type === 'B2B'
                        ? 'bg-primary-50 text-primary border border-primary/20'
                        : 'bg-sage-soft text-sage border border-sage/20'
                    }`}
                  >
                    {item.type === 'B2B' ? 'Đối tác Chuyển giao' : 'Khách hàng Trị liệu'}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-primary/15" />

                <p className="text-sm text-charcoal leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Thông tin tác giả testimonial */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-charcoal">{item.name}</h5>
                  <p className="text-xs text-charcoal-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

