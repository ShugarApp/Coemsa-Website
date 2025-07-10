'use client';

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { colors, componentStyles, cn } from '@/lib/design-system';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'phone';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  href,
  target,
  rel,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return `bg-[${colors.primary.main}] text-white hover:bg-[${colors.primary.dark}] focus:ring-[${colors.primary.main}]`;
      case 'secondary':
        return `bg-[${colors.secondary.main}] text-white hover:bg-[${colors.secondary.dark}] focus:ring-[${colors.secondary.main}]`;
      case 'outline':
        return `border-2 border-[${colors.primary.main}] text-[${colors.primary.main}] hover:bg-[${colors.primary.main}] hover:text-white focus:ring-[${colors.primary.main}]`;
      case 'ghost':
        return `text-[${colors.primary.main}] hover:bg-[${colors.primary.main}]/10 focus:ring-[${colors.primary.main}]`;
      case 'whatsapp':
        return `bg-[${colors.whatsapp}] text-white hover:bg-green-600 focus:ring-green-500`;
      case 'phone':
        return `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
      default:
        return componentStyles.button.variants.primary;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return componentStyles.button.sizes.sm;
      case 'md':
        return componentStyles.button.sizes.md;
      case 'lg':
        return componentStyles.button.sizes.lg;
      case 'xl':
        return componentStyles.button.sizes.xl;
      default:
        return componentStyles.button.sizes.md;
    }
  };

  const baseClasses = cn(
    componentStyles.button.base,
    getSizeClasses(),
    getVariantClasses(),
    fullWidth ? 'w-full' : '',
    'rounded-lg',
    className
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : leftIcon ? (
        <span className="mr-2" aria-hidden="true">{leftIcon}</span>
      ) : null}

      <span>{children}</span>

      {!isLoading && rightIcon && (
        <span className="ml-2" aria-hidden="true">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}

// Specialized button components
export function WhatsAppButton({
  message = "Hola, me interesa obtener información sobre los servicios de COEMSA",
  children = "Contactar por WhatsApp",
  className = '',
  ...props
}: Omit<ButtonProps, 'variant' | 'href'> & { message?: string }) {
  const phoneNumber = "525526986000";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      variant="whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      leftIcon={
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.484"/>
        </svg>
      }
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}

export function PhoneButton({
  phoneNumber = "+525526986000",
  children = "Llamar Ahora",
  className = '',
  ...props
}: Omit<ButtonProps, 'variant' | 'href'> & { phoneNumber?: string }) {
  return (
    <Button
      variant="phone"
      href={`tel:${phoneNumber}`}
      leftIcon={
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      }
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}
