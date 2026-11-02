'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider uppercase text-sage bg-sage-soft border border-sage/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight font-display mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

