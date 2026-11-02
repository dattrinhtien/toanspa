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
  { href: '/#face-massage-root', label: 'Face Massage Root' },
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-gradient-to-r from-[#26140A] via-[#3D2314] to-[#4A2E18] text-white shadow-elevated border-b border-[#C59B27]/40 ${
          isScrolled ? 'py-2.5 shadow-2xl backdrop-blur-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Thương Hiệu Chính Thức T&T SPA FACE MASSAGE ROOT */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gold shadow-elevated group-hover:scale-105 transition-transform flex-shrink-0 bg-[#26140A]">
                <Image
                  src="/images/logo-ttspa.jpg"
                  alt="T&T SPA - Face Massage Root - Trần Thị Toàn"
                  fill
                  priority
                  sizes="(max-width: 640px) 56px, 64px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight group-hover:text-gold-light transition-colors drop-shadow-sm">
                    T&T SPA
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-gold/20 text-gold-light border border-gold/40 font-semibold uppercase tracking-wider hidden sm:inline-block">
                    Toàn T&T
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-gold-light tracking-wide uppercase drop-shadow-sm">
                  Face Massage Root • Sức Khỏe Từ Gốc
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-all relative py-1 hover:text-gold-light ${
                      isActive ? 'text-gold font-bold' : 'text-white/90'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full shadow-sm" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Hotline & Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0358363058"
                className="flex items-center gap-2 text-xs xl:text-sm font-bold text-gold-light hover:text-white transition-colors py-1.5 px-3 rounded-full bg-white/5 border border-gold/30"
              >
                <Phone className="w-4 h-4 text-gold animate-pulse" />
                <span>0358.363.058</span>
              </a>

              <Button
                variant="secondary"
                size="md"
                onClick={() => setIsModalOpen(true)}
                className="bg-gold hover:bg-gold-light text-[#26140A] font-extrabold shadow-elevated border border-gold/60"
              >
                <HeartHandshake className="w-4 h-4 mr-1.5" />
                Tư vấn chuyển giao
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href="tel:0358363058"
                className="p-2 rounded-xl bg-gold/20 text-gold-light"
                aria-label="Gọi điện"
              >
                <Phone className="w-4 h-4" />
              </a>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="text-xs px-3 py-1.5 bg-gold text-[#26140A] font-bold"
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
          <div className="xl:hidden border-t border-gold/30 bg-[#26140A] animate-fade-in shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-gold/20 text-gold-light font-bold'
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
                  className="w-full justify-center bg-gold hover:bg-gold-light text-[#26140A] font-bold py-3"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  <HeartHandshake className="w-4 h-4 mr-2" />
                  Tư vấn chuyển giao mô hình T&T
                </Button>
                <a
                  href="tel:0358363058"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-gold-light hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" /> Hotline: 0358.363.058 (Tuyên Quang)
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
