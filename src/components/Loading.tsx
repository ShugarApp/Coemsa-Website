import { colors } from '@/lib/design-system';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  color = colors.primary.main,
  className = ''
}: LoadingSpinnerProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'md': return 'w-6 h-6';
      case 'lg': return 'w-8 h-8';
      case 'xl': return 'w-12 h-12';
      default: return 'w-6 h-6';
    }
  };

  return (
    <svg
      className={`animate-spin ${getSizeClasses()} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      style={{ color }}
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
  );
}

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rectangular' | 'circular';
}

export function Skeleton({
  className = '',
  width,
  height,
  variant = 'rectangular'
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4 rounded';
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded';
      default:
        return 'rounded';
    }
  };

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`bg-gray-300 animate-pulse ${getVariantClasses()} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

// Image skeleton with shimmer effect
export function ImageSkeleton({
  className = '',
  aspectRatio = 'aspect-video'
}: {
  className?: string;
  aspectRatio?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${aspectRatio} ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <div className="flex items-center justify-center h-full">
        <svg
          className="w-16 h-16 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>
      </div>
    </div>
  );
}

// Card skeleton
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4">
        <Skeleton variant="circular" width={64} height={64} />
      </div>
      <Skeleton variant="text" className="h-6 mb-4" />
      <Skeleton variant="text" className="h-4 mb-2" />
      <Skeleton variant="text" className="h-4 mb-2" />
      <Skeleton variant="text" className="h-4 w-3/4" />
    </div>
  );
}

// Page loading
interface PageLoadingProps {
  message?: string;
  className?: string;
}

export function PageLoading({
  message = "Cargando...",
  className = ''
}: PageLoadingProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${className}`}>
      <div className="text-center">
        <LoadingSpinner size="xl" className="mx-auto mb-4" />
        <p className="text-gray-600 text-lg">{message}</p>
      </div>
    </div>
  );
}

// Section loading
export function SectionLoading({
  message = "Cargando contenido...",
  className = ''
}: PageLoadingProps) {
  return (
    <div className={`py-20 text-center ${className}`}>
      <LoadingSpinner size="lg" className="mx-auto mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  );
}

// Grid skeleton for lists
interface GridSkeletonProps {
  count?: number;
  columns?: number;
  className?: string;
}

export function GridSkeleton({
  count = 6,
  columns = 3,
  className = ''
}: GridSkeletonProps) {
  const getGridClasses = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={`grid ${getGridClasses()} gap-6 ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
