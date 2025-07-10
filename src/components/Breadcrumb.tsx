import Link from 'next/link';
import { colors } from '@/lib/design-system';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <div className={`bg-gray-50 px-4 py-3 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-500" aria-hidden="true">
                    /
                  </span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#d81b60] hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-600" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
