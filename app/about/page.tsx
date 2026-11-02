import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Heart, Award, Sparkles, CheckCircle, Target, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Về Chuyên Gia Trần Thị Toàn (Toàn Heshi)',
  description:
    'Hành trình 10 năm cống hiến vì sức khỏe cộng đồng của Chuyên gia Trần Thị Toàn. Từ người thợ spa tâm huyết đến nhà sáng lập mô hình Kiềng 3 chân chuẩn Y khoa.',
};

export default function AboutPage() {
  const milestones = [
    {
      year: '2014 – 2017',
      title: 'Khởi đầu từ cái tâm với nghề làm đẹp',
      desc: 'Bắt đầu từ một kỹ thuật viên spa cần mẫn, trực tiếp chăm sóc da cho hàng ngàn phụ nữ. Chứng kiến nỗi đau của nhiều khách hàng bị tàn phá da mặt bởi kem trộn corticoid và các liệu pháp lột tẩy cấp tốc, chị Toàn nung nấu quyết tâm phải tìm ra con đường làm đẹp an toàn và nhân văn hơn.',
    },
    {
      year: '2018 – 2021',
      title: 'Đi sâu vào Da liễu Y khoa & Trị liệu Cân cơ mạc',
      desc: 'Dành nhiều năm theo học các chương trình đào tạo chính quy về sinh lý bệnh học da liễu, kỹ thuật giải phóng cân cơ mạc (Fascia Release) và dinh dưỡng chuyển hóa. Định hình rõ nét quan điểm: Làn da không thể khỏe đẹp nếu bên trong cơ thể chứa đầy ứ trệ và độc tố.',
    },
    {
      year: '2022 – Hiện tại',
      title: 'Sáng lập mô hình Kiềng 3 Chân & Mạng lưới Heshi',
      desc: 'Hoàn thiện hệ sinh thái "Chăm Sóc Sức Khỏe Từ Gốc" phối hợp Mát-xa – Vận động – Dinh dưỡng. Chuyển giao thành công cho hơn 120 cơ sở spa trên toàn quốc và đào tạo hơn 1,500 kỹ thuật viên có tay nghề chuẩn mực y khoa.',
    },
  ];

  const coreValues = [
    {
      title: 'Chuẩn Mực Y Khoa',
      desc: 'Mọi phác đồ chăm sóc đều dựa trên cơ sở khoa học, sinh lý học cơ thể, tuyệt đối không lạm dụng xâm lấn hay quảng cáo sai sự thật.',
      icon: ShieldCheck,
    },
    {
      title: 'Chăm Sóc Tận Tâm',
      desc: 'Coi cơ thể và làn da của khách hàng như chính bản thân mình. Đồng hành lắng nghe và theo sát sự tiến triển của từng cá nhân.',
      icon: Heart,
    },
    {
      title: 'Chia Sẻ & Đồng Hành',
      desc: 'Chuyển giao toàn bộ bí quyết nghề nghiệp cho học viên và đối tác, giúp các chủ spa nâng cao thu nhập một cách chân chính và bền vững.',
      icon: Award,
    },
  ];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Phần Giới thiệu mở đầu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/about-expert.jpg"
                alt="Chuyên gia Trần Thị Toàn (Toàn Heshi)"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-primary text-white p-5 rounded-2xl shadow-elevated max-w-xs">
              <p className="text-xs uppercase tracking-wider text-sage-soft font-bold mb-1">
                Tuyên Ngôn Sứ Mệnh
              </p>
              <p className="text-sm italic leading-relaxed">
                "Không có làn da đẹp trên một cơ thể mệt mỏi. Hãy chăm sóc sức khỏe ngay từ gốc rễ."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-sage bg-sage-soft border border-sage/20 rounded-full">
              Câu Chuyện Nghề Nghiệp
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-display tracking-tight">
              Trần Thị Toàn (Toàn Heshi) – Người Thổi Hồn Vào Triết Lý Sức Khỏe Từ Gốc
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Tôi là <strong>Trần Thị Toàn</strong>, mọi người thường gọi thân mật là <strong>Toàn Heshi</strong>. Trong hơn một thập kỷ gắn bó với ngành chăm sóc sức khỏe và làm đẹp, điều trăn trở lớn nhất của tôi là chứng kiến quá nhiều người tìm kiếm vẻ đẹp cấp tốc mà vô tình làm tổn thương cơ thể.
            </p>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              Từ một người làm nghề trực tiếp tại phòng trị liệu, tôi nhận ra rằng: <em>"Làn da và cơ xương khớp chỉ là phần ngọn của một tảng băng chìm"</em>. Muốn có làn da sáng khỏe, cổ vai gáy nhẹ nhõm và năng lượng tràn đầy, chúng ta phải chăm sóc đồng thời cả 3 yếu tố: <strong>Khai thông cơ mạc kinh lạc</strong>, <strong>Chủ động vận động phục hồi</strong> và <strong>Dinh dưỡng tế bào từ bên trong</strong>.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/training">
                <Button variant="primary" size="lg">
                  Tìm hiểu mô hình chuyển giao <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-white">
                  Liên hệ trực tiếp với tôi
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Phần Tầm nhìn & Sứ mệnh */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-soft mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary-50 px-3 py-1 rounded-full">
              Định Hướng Dài Hạn
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary font-display">
              Tầm Nhìn & Sứ Mệnh Vì Một Cộng Đồng Khỏe Mạnh
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted">
              Biến việc chăm sóc sức khỏe và làm đẹp khoa học thành một thói quen chủ động hàng ngày của mỗi người phụ nữ Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-muted border border-slate-100 hover:border-primary/20 transition-all flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-soft text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2 font-display">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery hình ảnh hoạt động thực tế */}
        <div className="mb-20">
          <SectionHeading
            badge="Hình Ảnh Thực Tế"
            title="Dấu Ấn Hoạt Động & Sự Kiện Cùng Hệ Thống Heshi"
            description="Những khoảnh khắc chân thực trong các chương trình đào tạo lâm sàng, lễ chuyển giao công nghệ và hoạt động chăm sóc khách hàng của Chuyên gia Toàn Heshi."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { src: '/images/event-seminar.jpg', title: 'Hội thảo chuyển giao' },
              { src: '/images/event-gala.jpg', title: 'Gala vinh danh Heshi' },
              { src: '/images/training-event.jpg', title: 'Đào tạo kỹ thuật viên' },
              { src: '/images/transfer-spa.jpg', title: 'Ký kết đối tác Spa' },
              { src: '/images/consultation.jpg', title: 'Thăm khám & Soi da' },
              { src: '/images/customer-care.jpg', title: 'Trị liệu thực tế' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative h-48 rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft bg-slate-100"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 200px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white drop-shadow-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline 10 năm hành trình */}
        <div className="mb-20">
          <SectionHeading
            badge="10 Năm Cống Hiến"
            title="Các Dấu Mốc Chuyển Mình Đáng Nhớ"
            description="Hành trình từ một người thợ lành nghề tại Tuyên Quang đến giảng viên chuyển giao mô hình cho các chủ Spa trên toàn quốc."
          />

          <div className="relative border-l-2 border-sage/30 ml-4 md:ml-32 space-y-12 py-4">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Node tròn */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-sage" />

                <span className="inline-block px-3 py-0.5 mb-2 text-xs font-bold text-sage bg-sage-soft rounded-full">
                  {item.year}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cam kết đồng hành CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-light text-white p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-display max-w-2xl mx-auto">
            "Sức khỏe của bạn, sự thịnh vượng của spa bạn – Chính là niềm hạnh phúc của tôi."
          </h2>
          <p className="text-sm sm:text-base text-primary-100 max-w-xl mx-auto">
            Hãy để Toàn Heshi đồng hành cùng bạn trên chặng đường chăm sóc sức khỏe chủ động và xây dựng sự nghiệp bền vững.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="white" size="lg">
                Đặt lịch trò chuyện cùng Chuyên gia Toàn Heshi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

