'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/wordpress';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 ${
        featured ? 'md:grid md:grid-cols-12 md:gap-6' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured ? 'md:col-span-6 h-64 md:h-full min-h-[260px]' : 'h-52 w-full'
        }`}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-sm">
            {post.category.name}
          </span>
        </div>
      </div>

      <div
        className={`flex flex-col flex-1 p-5 sm:p-6 ${
          featured ? 'md:col-span-6 md:p-8 justify-center' : ''
        }`}
      >
        <div className="flex items-center gap-4 text-xs text-charcoal-muted mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-sage" />
            {post.formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-sage" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-charcoal group-hover:text-primary transition-colors line-clamp-2 mb-2 font-display">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0 z-10" />
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-charcoal-muted line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium text-charcoal-muted">
              {post.author.name}
            </span>
          </div>

          <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
            Đọc tiếp <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </span>
        </div>
      </div>
    </article>
  );
}

