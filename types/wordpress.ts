export interface WPFeaturedMedia {
  source_url: string;
  alt_text?: string;
  media_details?: {
    width: number;
    height: number;
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

export interface WPAuthor {
  id: number;
  name: string;
  description?: string;
  avatar_urls?: {
    [key: string]: string;
  };
}

export interface WPPostRaw {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected?: boolean;
  };
  excerpt: {
    rendered: string;
    protected?: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPAuthor[];
    'wp:featuredmedia'?: WPFeaturedMedia[];
    'wp:term'?: WPTerm[][];
  };
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  formattedDate: string;
  readTime: string;
  coverImage: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface LeadSubmission {
  fullName: string;
  phone: string;
  email?: string;
  serviceInterest: 'transfer' | 'skincare' | 'musculoskeletal' | 'nutrition' | 'other';
  note?: string;
}

