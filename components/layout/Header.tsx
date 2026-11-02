'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { ConsultationModal } from '@/components/shared/ConsultationModal';

const NAV_LINKS = [
  { href: '/', label: 'Trang chủ' },
  { href: '/about', label: 'Về tôi' },
  { href: '/#pillars', label: 'Kiềng 3 Trụ cột' },
  { href: '/training', label: 'Chuyển giao Spa' },
  { href: '/services', label: 'Dịch vụ & Liệu trình' },
  { href: '/blog', label: 'Kiến thức & Sự kiện' },
  { href: '/contact', label: 'Liên hệ' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-gradient-to-r from-[#0B4F6C] via-[#094159] to-[#063246] text-white shadow-elevated border-b border-white/10 ${
          isScrolled ? 'py-2.5 shadow-2xl backdrop-blur-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Thương Hiệu To & Nổi Bật */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-sage-soft shadow-elevated group-hover:scale-105 transition-transform flex-shrink-0 bg-white/10">
                <Image
                  src="/images/avatar.jpg"
                  alt="Chuyên gia Trần Thị Toàn (Toàn Heshi)"
                  fill
                  priority
                  sizes="(max-width: 640px) 56px, 64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight group-hover:text-sage-soft transition-colors drop-shadow-sm">
                    Trần Thị Toàn
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-sage-light fill-sage-light/20 flex-shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-sage-soft tracking-wider uppercase drop-shadow-sm">
                  Toàn Heshi • Chăm Sóc Sức Khỏe Từ Gốc
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-all relative py-1 hover:text-sage-soft ${
                      isActive ? 'text-sage-soft font-bold' : 'text-white/90'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sage-light rounded-full shadow-sm" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                className="bg-sage hover:bg-sage-light text-white font-bold shadow-elevated border border-white/20"
              >
                <HeartHandshake className="w-4 h-4 mr-1.5" />
                Tư vấn chuyển giao
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="text-xs px-3 py-1.5 bg-sage text-white font-bold"
              >
                Tư vấn
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Mở menu điều hướng"
                className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#094159] animate-fade-in shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-white/15 text-sage-soft font-bold'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <Button
                  variant="secondary"
                  className="w-full justify-center bg-sage hover:bg-sage-light text-white font-bold py-3"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  <HeartHandshake className="w-4 h-4 mr-2" />
                  Tư vấn chuyển giao mô hình
                </Button>
                <a
                  href="tel:0988888888"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sage-light" /> Hotline: 0988.888.888 (Tuyên Quang)
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
