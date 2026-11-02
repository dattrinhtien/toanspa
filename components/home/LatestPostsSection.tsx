'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PostCard } from '@/components/shared/PostCard';
import { BlogPost } from '@/types/wordpress';

interface LatestPostsSectionProps {
  posts: BlogPost[];
}

export function LatestPostsSection({ posts }: LatestPostsSectionProps) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Kiến Thức Thực Chiến"
            title="Góc Nhìn Chuyên Gia & Cẩm Nang Sức Khỏe"
            description="Chia sẻ kinh nghiệm trị liệu da liễu, cơ mạc và dinh dưỡng chuyển hóa được đúc kết từ hơn 10 năm lâm sàng của Chuyên gia Toàn Heshi."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-light transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <BookOpen className="w-4 h-4 text-sage" />
            Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

