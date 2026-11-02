'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Activity, Apple, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PILLARS_DATA } from '@/lib/mock-data';

const PILLAR_IMAGES = [
  '/images/spa-treatment.jpg', // Massage & Phục hồi da liễu
  '/images/healthy-lifestyle.jpg', // Vận động thể chất & Khai thông cơ mạc
  '/images/workshop.jpg', // Dinh dưỡng & Chăm sóc tế bào
];

export function PillarsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-primary" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-sage" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Triết Lý Cốt Lõi"
          title="Hệ Sinh Thái Kiềng 3 Chân: Chăm Sóc Sức Khỏe Từ Gốc"
          description="Sức khỏe và vẻ đẹp bền vững không đến từ một liệu pháp đơn độc. Đó là sự hợp nhất của 3 trụ cột vững chắc nuôi dưỡng và phục hồi cơ thể từ cấp độ tế bào."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PILLARS_DATA.map((pillar, index) => (
            <div
              key={pillar.id}
              className="group relative flex flex-col bg-surface-muted rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Hình ảnh đại diện cho từng trụ cột */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <Image
                  src={PILLAR_IMAGES[index]}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Trụ cột index */}
                <span className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-sm font-bold text-primary shadow-sm">
                  0{index + 1}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold tracking-wider uppercase text-sage-soft block">
                    Trụ Cột {index + 1}
                  </span>
                  <h3 className="text-xl font-bold font-display drop-shadow-sm">
                    {pillar.title}
                  </h3>
                </div>
              </div>

              {/* Nội dung chi tiết */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-xs font-semibold text-primary mb-2">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Danh sách các giá trị nổi bật */}
                <div className="space-y-2.5 mb-8">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                      <div className="w-4 h-4 rounded-full bg-sage-soft text-sage flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Link xem chi tiết */}
                <div className="mt-auto pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    href={`/services#${pillar.id}`}
                    className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-light transition-colors group-hover:translate-x-1"
                  >
                    Khám phá phác đồ <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner tóm tắt triết lý */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary to-primary-light text-white shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold font-display">
              Bạn đang tìm kiếm giải pháp cho cá nhân hay cơ sở kinh doanh?
            </h4>
            <p className="text-sm text-primary-100 max-w-2xl">
              Dù bạn là khách hàng muốn phục hồi sức khỏe hay chủ spa mong muốn chuẩn hóa quy trình, chuyên gia Toàn Heshi luôn có lộ trình đồng hành thiết kế riêng.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/training"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold bg-white text-primary hover:bg-slate-50 transition-colors shadow-sm"
            >
              Xem chi tiết mô hình chuyển giao
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

