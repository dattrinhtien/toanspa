import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, BookOpen } from 'lucide-react';
import { PostCard } from '@/components/shared/PostCard';
import { getPosts, getCategories } from '@/lib/wordpress';
import { MOCK_POSTS, MOCK_CATEGORIES } from '@/lib/mock-data';
import { WPTerm, BlogPost } from '@/types/wordpress';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cẩm Nang Kiến Thức Sức Khỏe & Hoạt Động Sự Kiện',
  description:
    'Tổng hợp các bài viết chuyên sâu về phục hồi da tổn thương, trị liệu cơ mạc cổ vai gáy, dinh dưỡng chuyển hóa và hoạt động sự kiện thực tế từ Chuyên gia Toàn Heshi.',
};

interface BlogPageProps {
  searchParams?: {
    cat?: string;
    q?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentCategory = searchParams?.cat || 'all';
  const searchQuery = searchParams?.q || '';

  let categories: WPTerm[] = MOCK_CATEGORIES;
  let posts: BlogPost[] = MOCK_POSTS;

  try {
    const [fetchedCategories, fetchedResult] = await Promise.all([
      getCategories(),
      getPosts({
        categorySlug: currentCategory,
        search: searchQuery,
        perPage: 12,
      }),
    ]);
    if (fetchedCategories && fetchedCategories.length > 0) {
      categories = fetchedCategories;
    }
    if (fetchedResult && fetchedResult.posts && fetchedResult.posts.length > 0) {
      posts = fetchedResult.posts;
    }
  } catch (e) {
    console.error('Error fetching blog data:', e);
  }

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 0 ? posts.slice(1) : [];

  return (
    <div className="py-12 lg:py-20 bg-surface-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-sage bg-sage-soft border border-sage/20 rounded-full">
            Cẩm Nang & Sự Kiện Chuyên Gia
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-display tracking-tight">
            Kiến Thức Sức Khỏe & Hoạt Động Thực Tế Heshi
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Chia sẻ góc nhìn khoa học, phác đồ điều trị và các hoạt động chuyển giao thực tế cùng Chuyên gia Trần Thị Toàn.
          </p>
        </div>

        {/* Thanh tìm kiếm & Lọc danh mục */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-100 shadow-soft mb-12 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Form tìm kiếm */}
            <form method="GET" action="/blog" className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-charcoal-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder="Tìm bài viết, triệu chứng, sự kiện..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </form>

            {/* Danh sách tabs category */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = currentCategory === cat.slug;
                return (
                  <Link
                    key={cat.id}
                    href={cat.slug === 'all' ? '/blog' : `/blog?cat=${cat.slug}`}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-slate-100 text-charcoal hover:bg-slate-200'
                    }`}
                  >
                    {cat.name} {cat.count ? `(${cat.count})` : ''}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Danh sách bài viết */}
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-soft">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-charcoal font-display mb-2">
              Không tìm thấy bài viết phù hợp
            </h3>
            <p className="text-sm text-charcoal-muted mb-6">
              Vui lòng thử tìm kiếm với từ khóa khác hoặc quay lại danh mục tất cả.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold bg-primary text-white"
            >
              Xem tất cả bài viết
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Bài viết mới nhất trên cùng */}
            {featuredPost && !searchQuery && (
              <div className="mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-sage block mb-4">
                  Bài viết mới nhất & Nổi bật
                </span>
                <PostCard post={featuredPost} featured={true} />
              </div>
            )}

            {/* Danh sách các bài viết còn lại */}
            {remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
