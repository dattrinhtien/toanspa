import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User, List, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '@/lib/wordpress';
import { extractHeadings } from '@/lib/utils';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { PostCard } from '@/components/shared/PostCard';
import { Button } from '@/components/shared/Button';

export const revalidate = 60; // Next.js ISR: 60s

interface BlogPostDetailProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostDetailProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
      description: 'Bài viết không tồn tại hoặc đã được chuyển dời.',
    };
  }

  return {
    title: `${post.title} | Chuyên gia Toàn Heshi`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostDetailProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const recentPosts = (await getRecentPosts(3)).filter((p) => p.slug !== post.slug);

  return (
    <div className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nút quay lại & Breadcrumbs */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-charcoal-muted hover:text-primary transition-colors gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại danh mục kiến thức
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cột chính: Nội dung bài viết */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-soft">
            {/* Header bài viết */}
            <header className="space-y-4 mb-8">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/blog?cat=${post.category.slug}`}
                  className="px-3.5 py-1 text-xs font-semibold rounded-full bg-primary-50 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                >
                  {post.category.name}
                </Link>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-display leading-[1.3] tracking-tight">
                {post.title}
              </h1>

              {/* Thông tin metadata */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-charcoal-muted pt-2 border-y border-slate-100 py-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-charcoal">{post.author.name}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sage" />
                  <time dateTime={post.date}>{post.formattedDate}</time>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sage" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Ảnh đại diện bài viết */}
            <figure className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-sm bg-slate-100">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </figure>

            {/* Mục lục bài viết (Hiển thị trên Mobile) */}
            {headings.length > 0 && (
              <div className="lg:hidden p-5 rounded-2xl bg-surface-muted border border-slate-200 mb-8">
                <div className="flex items-center gap-2 font-bold text-primary text-sm mb-3">
                  <List className="w-4 h-4 text-sage" />
                  Mục lục bài viết
                </div>
                <ul className="space-y-2 text-xs">
                  {headings.map((h, i) => (
                    <li key={i} className={h.level === 3 ? 'pl-4' : ''}>
                      <a
                        href={`#${h.id}`}
                        className="text-charcoal hover:text-primary transition-colors"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nội dung bài viết */}
            <div
              className="prose-content mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Nút chia sẻ mạng xã hội */}
            <ShareButtons title={post.title} />

            {/* Hộp thông tin tác giả */}
            <div className="mt-8 p-6 rounded-2xl bg-surface-cream border border-slate-200/60 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-sage flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-sage font-bold">
                  Tác giả bài viết
                </span>
                <h4 className="text-base font-bold text-primary font-display">
                  {post.author.name}
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {post.author.role}. Hơn 10 năm kinh nghiệm chuyển giao mô hình da liễu & chăm sóc sức khỏe chủ động từ gốc cho hàng trăm cơ sở spa trên toàn quốc.
                </p>
              </div>
            </div>
          </article>

          {/* Cột Sidebar bên phải (Desktop) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            {/* Mục lục bài viết tự động (TOC Desktop) */}
            {headings.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft hidden lg:block">
                <div className="flex items-center gap-2 font-bold text-primary text-base font-display mb-4 pb-3 border-b border-slate-100">
                  <List className="w-4 h-4 text-sage" />
                  Mục lục bài viết
                </div>
                <nav>
                  <ul className="space-y-2.5 text-xs text-charcoal-muted">
                    {headings.map((h, i) => (
                      <li key={i} className={h.level === 3 ? 'pl-4' : ''}>
                        <a
                          href={`#${h.id}`}
                          className="hover:text-primary transition-colors block py-0.5"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* Card CTA Chuyển giao mô hình */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-3xl p-6 shadow-soft space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sage-soft">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display leading-snug">
                Bạn Là Chủ Spa & Muốn Nhận Chuyển Giao Phác Đồ Này?
              </h4>
              <p className="text-xs text-primary-100 leading-relaxed">
                Được đào tạo 1-1 trực tiếp bởi Chuyên gia Toàn Heshi, bàn giao tài liệu SOP và hỗ trợ phân phối dược mỹ phẩm chính hãng.
              </p>
              <Link href="/training" className="block">
                <Button variant="white" size="sm" className="w-full text-xs">
                  Xem chi tiết gói chuyển giao
                </Button>
              </Link>
            </div>

            {/* Hộp Hotline tư vấn nhanh */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft text-center space-y-2">
              <span className="text-xs font-semibold text-charcoal-muted block">
                Cần tư vấn trực tiếp về tình trạng?
              </span>
              <a
                href="tel:0988888888"
                className="text-lg font-bold text-sage hover:text-sage-light transition-colors block font-display"
              >
                Hotline: 0988.888.888
              </a>
              <p className="text-[11px] text-charcoal-soft">
                Hỗ trợ từ 08:30 – 19:30 hàng ngày
              </p>
            </div>
          </aside>
        </div>

        {/* Danh sách bài viết liên quan */}
        {recentPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-primary font-display mb-8">
              Bài Viết Cùng Chuyên Mục Bạn Có Thể Quan Tâm
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.slice(0, 3).map((item) => (
                <PostCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

