import { BlogPost, WPTerm, WPPostRaw } from '@/types/wordpress';
import { MOCK_POSTS, MOCK_CATEGORIES } from './mock-data';
import { formatDateVi, calculateReadingTime, stripHtml } from './utils';

const WP_API_URL = process.env.WORDPRESS_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';
const REVALIDATE_SECONDS = parseInt(process.env.REVALIDATE_TIME || '60', 10);

/**
 * Tự động chuẩn hóa endpoint API: Hỗ trợ cả WordPress.com lẫn WordPress tự host (Self-hosted)
 */
function getWordPressBaseApiUrl(): string {
  const rawUrl = WP_API_URL.replace(/\/+$/, '').trim();
  if (!rawUrl) return '';

  // Nếu là domain dạng .wordpress.com (ví dụ: https://toanspa.wordpress.com)
  const match = rawUrl.match(/(?:https?:\/\/)?([a-zA-Z0-9_-]+\.wordpress\.com)/i);
  if (match) {
    const siteDomain = match[1];
    return `https://public-api.wordpress.com/wp/v2/sites/${siteDomain}`;
  }

  // Với WordPress self-hosted thông thường (tự cài trên hosting riêng)
  return `${rawUrl}/wp-json/wp/v2`;
}

/**
 * Chuyển đổi dữ liệu thô từ WordPress REST API thành format BlogPost sạch
 */
function transformWPPost(raw: WPPostRaw): BlogPost {
  let coverImage = '/images/treatment-skin.jpg';
  if (raw._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    coverImage = raw._embedded['wp:featuredmedia'][0].source_url;
  }

  let categoryName = 'Kiến thức Sức khỏe';
  let categorySlug = 'kien-thuc-suc-khoe';
  let categoryId = 1;

  if (raw._embedded?.['wp:term']?.[0]?.[0]) {
    const term = raw._embedded['wp:term'][0][0];
    categoryName = term.name;
    categorySlug = term.slug;
    categoryId = term.id;
  }

  let authorName = 'Trần Thị Toàn (Toàn Heshi)';
  let authorAvatar = '/images/avatar.jpg';
  if (raw._embedded?.author?.[0]?.name) {
    authorName = raw._embedded.author[0].name;
    if (raw._embedded.author[0].avatar_urls?.['96']) {
      authorAvatar = raw._embedded.author[0].avatar_urls['96'];
    }
  }

  const rawExcerpt = raw.excerpt?.rendered ? stripHtml(raw.excerpt.rendered) : '';
  const cleanExcerpt = rawExcerpt || stripHtml(raw.content?.rendered || '').slice(0, 160) + '...';

  return {
    id: raw.id,
    slug: raw.slug,
    title: stripHtml(raw.title?.rendered || 'Bài viết sức khỏe'),
    excerpt: cleanExcerpt,
    content: raw.content?.rendered || '',
    date: raw.date,
    formattedDate: formatDateVi(raw.date),
    readTime: calculateReadingTime(raw.content?.rendered || ''),
    coverImage,
    category: {
      id: categoryId,
      name: categoryName,
      slug: categorySlug,
    },
    author: {
      name: authorName,
      avatar: authorAvatar,
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  };
}

export interface GetPostsParams {
  categorySlug?: string;
  page?: number;
  perPage?: number;
  search?: string;
}

/**
 * Lấy danh sách bài viết an toàn với Timeout và Fallback Mock Data
 */
export async function getPosts(params: GetPostsParams = {}): Promise<{ posts: BlogPost[]; total: number }> {
  const { categorySlug, page = 1, perPage = 10, search } = params;
  const baseApiUrl = getWordPressBaseApiUrl();

  const filterMockData = () => {
    let filtered = [...MOCK_POSTS];
    if (categorySlug && categorySlug !== 'all') {
      filtered = filtered.filter((post) => post.category.slug === categorySlug);
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (post) => post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
      );
    }
    const start = (page - 1) * perPage;
    return {
      posts: filtered.slice(start, start + perPage),
      total: filtered.length,
    };
  };

  if (!baseApiUrl || WP_API_URL.includes('demo-wp.toanheshi.vn')) {
    return filterMockData();
  }

  try {
    const url = new URL(`${baseApiUrl}/posts`);
    url.searchParams.set('_embed', 'true');
    url.searchParams.set('page', page.toString());
    url.searchParams.set('per_page', perPage.toString());
    if (search) url.searchParams.set('search', search);

    // Timeout sau 3 giây để không làm treo trang web
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    if (!res.ok) {
      return filterMockData();
    }

    const data: WPPostRaw[] = await res.json();
    let posts = data.map(transformWPPost);

    // Lọc bỏ bài viết mẫu "hello-world" mặc định
    posts = posts.filter((p) => p.slug !== 'hello-world');

    // Luôn ghép các bài viết chuyên môn và sự kiện thực tế của Toàn Heshi
    const existingSlugs = new Set(posts.map((p) => p.slug));
    const additionalPosts = MOCK_POSTS.filter((p) => !existingSlugs.has(p.slug));
    const combined = [...posts, ...additionalPosts];

    let filtered = combined;
    if (categorySlug && categorySlug !== 'all') {
      filtered = filtered.filter((post) => post.category.slug === categorySlug);
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (post) => post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
      );
    }

    const start = (page - 1) * perPage;
    return {
      posts: filtered.slice(start, start + perPage),
      total: filtered.length,
    };
  } catch (error) {
    // Luôn trả về danh sách bài viết thực tế khi gặp lỗi mạng
    return filterMockData();
  }
}

/**
 * Lấy bài viết chi tiết theo Slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!slug) return null;
  const baseApiUrl = getWordPressBaseApiUrl();

  const findInMock = () => {
    return MOCK_POSTS.find((p) => p.slug === slug) || null;
  };

  if (!baseApiUrl || WP_API_URL.includes('demo-wp.toanheshi.vn')) {
    return findInMock();
  }

  try {
    const url = `${baseApiUrl}/posts?slug=${encodeURIComponent(slug)}&_embed=true`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    if (!res.ok) {
      return findInMock();
    }

    const data: WPPostRaw[] = await res.json();
    if (data && data.length > 0 && data[0].slug !== 'hello-world') {
      return transformWPPost(data[0]);
    }

    return findInMock();
  } catch (error) {
    return findInMock();
  }
}

/**
 * Lấy danh mục bài viết an toàn
 */
export async function getCategories(): Promise<WPTerm[]> {
  const baseApiUrl = getWordPressBaseApiUrl();

  if (!baseApiUrl || WP_API_URL.includes('demo-wp.toanheshi.vn')) {
    return MOCK_CATEGORIES;
  }

  try {
    const url = `${baseApiUrl}/categories?per_page=50`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    if (!res.ok) {
      return MOCK_CATEGORIES;
    }

    const data: WPTerm[] = await res.json();
    const wpCategories = data
      .filter((c) => c.slug !== 'uncategorized')
      .map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        count: c.count,
      }));

    const existingSlugs = new Set(wpCategories.map((c) => c.slug));
    const customCats = MOCK_CATEGORIES.filter((c) => c.slug !== 'all' && !existingSlugs.has(c.slug));

    return [
      { id: 0, name: 'Tất cả', slug: 'all' },
      ...wpCategories,
      ...customCats,
    ];
  } catch (error) {
    return MOCK_CATEGORIES;
  }
}

/**
 * Lấy các bài viết mới nhất cho trang chủ hoặc widget
 */
export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const result = await getPosts({ perPage: limit });
  return result.posts.slice(0, limit);
}
