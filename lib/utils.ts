import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TOCItem } from '@/types/wordpress';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateVi(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, '').trim();
}

export function calculateReadingTime(content: string): string {
  const plainText = stripHtml(content);
  const words = plainText.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} phút đọc`;
}

export function extractHeadings(htmlContent: string): TOCItem[] {
  const headings: TOCItem[] = [];
  const regex = /<h([2-3])[^>]*>(.*?)<\/h\1>/gi;
  let match;

  while ((match = regex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10);
    const rawText = match[2];
    const text = stripHtml(rawText);
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    if (text) {
      headings.push({ id, text, level });
    }
  }

  return headings;
}

