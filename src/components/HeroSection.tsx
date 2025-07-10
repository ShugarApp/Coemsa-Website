'use client';

import type { ReactNode } from 'react';
import { colors } from '@/lib/design-system';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  background?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
  children?: ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  icon,
  background = 'primary',
  className = '',
  children
}: HeroSectionProps) {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'primary':
        return 'bg-gradient-to-r from-[#ec7324] to-orange-400';
      case 'secondary':
        return 'bg-gradient-to-r from-[#d81b60] to-pink-400';
      case 'accent':
        return 'bg-gradient-to-r from-[#2d7d32] to-green-400';
      case 'neutral':
        return 'bg-gradient-to-r from-[#293232] to-gray-600';
      default:
        return 'bg-gradient-to-r from-[#ec7324] to-orange-400';
    }
  };

  return (
    <section className={`${getBackgroundClasses()} text-white py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        {icon && (
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            {icon}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
