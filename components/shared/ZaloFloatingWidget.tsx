'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, X } from 'lucide-react';

interface ZaloFloatingWidgetProps {
  phone?: string;
}

export function ZaloFloatingWidget({ phone = '0358363058' }: ZaloFloatingWidgetProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
      {/* Tooltip gợi ý */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-charcoal px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 text-xs animate-fade-in relative">
          <span className="font-semibold text-primary">Chat Zalo</span> cùng Chuyên gia Toàn
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full hover:bg-slate-100"
            aria-label="Đóng gợi ý"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Mũi tên chỉ sang nút Zalo */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
        </div>
      )}

      {/* Nút bấm Zalo chính */}
      <a
        href={`https://zalo.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat trực tiếp qua Zalo với Chuyên gia Toàn T&T Spa"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#0068FF] hover:bg-[#0055D4] rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Hiệu ứng sóng lan tỏa (Pulse Wave) */}
        <span className="absolute inset-0 rounded-full bg-[#0068FF] animate-ping opacity-35" />
        <span className="absolute -inset-1 rounded-full border-2 border-[#0068FF]/50 animate-pulse" />

        {/* Biểu tượng Zalo SVG chính thức */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <svg
            className="w-8 h-8 fill-current drop-shadow-sm"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 4C12.95 4 4 12.28 4 22.5c0 5.86 3.02 11.08 7.74 14.59-.34 2.53-1.28 5.68-2.67 7.71a1 1 0 0 0 1.25 1.44c3.96-1.74 7.55-3.86 9.49-4.88 1.37.42 2.81.64 4.19.64 11.05 0 20-8.28 20-18.5S35.05 4 24 4zm8.8 24.3c-.3.4-.9.6-1.5.4-1.9-.6-5.8-2.7-8.1-4.7-2.1-1.8-3.6-4.5-3.8-6.5-.1-.7.2-1.3.7-1.6.5-.4 1.2-.4 1.7 0 .9.8 1.8 1.9 2.1 2.3.3.4.3.9 0 1.3-.2.3-.5.6-.7.9-.3.3-.3.6 0 .9 1.1 1.4 2.7 2.8 4.2 3.7.4.2.7.2 1 0 .3-.3.7-.7.9-1 .3-.3.8-.4 1.2-.1.4.3 1.7 1 2.5 1.7.5.5.6 1.1.1 1.8z" />
          </svg>
          <span className="text-[9px] font-black uppercase tracking-tight -mt-1 font-sans">
            Zalo
          </span>
        </div>
      </a>
    </div>
  );
}
