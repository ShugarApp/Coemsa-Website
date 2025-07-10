'use client';

import type { ReactNode } from 'react';
import { colors, componentStyles } from '@/lib/design-system';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  ctaText?: string;
  variant?: 'default' | 'service' | 'benefit';
  className?: string;
  iconColor?: string;
  onClick?: () => void;
}

export default function FeatureCard({
  title,
  description,
  icon,
  href,
  ctaText,
  variant = 'default',
  className = '',
  iconColor = colors.primary.main,
  onClick
}: FeatureCardProps) {
  const getCardClasses = () => {
    const baseClasses = `${componentStyles.card.base} p-8 text-center h-full`;

    if (href || onClick) {
      return `${baseClasses} ${componentStyles.card.interactive}`;
    }

    return baseClasses;
  };

  const CardContent = () => (
    <>
      {icon && (
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: iconColor }}
        >
          <div className="text-white">
            {icon}
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>

      {(ctaText && href) && (
        <div className="mt-auto">
          <span className={`inline-flex items-center text-[${iconColor}] font-semibold group-hover:text-opacity-80 transition-colors`}>
            {ctaText}
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${getCardClasses()} ${className} group block`}
        aria-label={`Conocer más sobre ${title}`}
      >
        <CardContent />
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${getCardClasses()} ${className} group w-full text-left`}
        aria-label={`Seleccionar ${title}`}
      >
        <CardContent />
      </button>
    );
  }

  return (
    <div className={`${getCardClasses()} ${className} flex flex-col`}>
      <CardContent />
    </div>
  );
}

// Specialized variants
export function ServiceCard({
  title,
  description,
  icon,
  href,
  className = ''
}: Omit<FeatureCardProps, 'variant' | 'ctaText'>) {
  return (
    <FeatureCard
      title={title}
      description={description}
      icon={icon}
      href={href}
      ctaText="Ver más detalles"
      variant="service"
      className={className}
      iconColor={colors.secondary.main}
    />
  );
}

export function BenefitCard({
  title,
  description,
  icon,
  className = '',
  iconColor = colors.primary.main
}: Omit<FeatureCardProps, 'variant' | 'href' | 'ctaText'>) {
  return (
    <FeatureCard
      title={title}
      description={description}
      icon={icon}
      variant="benefit"
      className={className}
      iconColor={iconColor}
    />
  );
}
