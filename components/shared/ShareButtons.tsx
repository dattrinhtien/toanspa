'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? url || window.location.href : '';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareZalo = () => {
    window.open(
      `https://sp.zalo.me/plugins/share?url=${encodeURIComponent(currentUrl)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-2 py-4 border-y border-slate-200">
      <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted flex items-center gap-1.5 mr-2">
        <Share2 className="w-3.5 h-3.5 text-primary" /> Chia sẻ bài viết:
      </span>

      <button
        onClick={shareFacebook}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
      >
        Facebook
      </button>

      <button
        onClick={shareZalo}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#0068FF]/10 text-[#0068FF] hover:bg-[#0068FF] hover:text-white transition-colors"
      >
        Zalo
      </button>

      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-charcoal hover:bg-slate-200 transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-sage" /> Đã sao chép link
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" /> Sao chép liên kết
          </>
        )}
      </button>
    </div>
  );
}

