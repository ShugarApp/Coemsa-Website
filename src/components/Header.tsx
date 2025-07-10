'use client';

import Link from 'next/link';
import { colors } from '@/lib/design-system';
import { config } from '@/lib/config';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const navItems = [
    { href: '/', label: 'Inicio', key: 'home' },
    { href: '/quienes-somos', label: 'Quiénes Somos', key: 'about' },
    { href: '/contacto', label: 'Contacto', key: 'contact' },
    { href: '/carreras', label: 'Carreras', key: 'careers' },
    { href: '/ubicaciones', label: 'Ubicaciones', key: 'ubicaciones' },
  ];

  const serviceItems = [
    {
      href: '/servicios/infraestructura',
      title: 'Infraestructura',
      description: 'Sistemas y tecnología'
    },
    {
      href: '/servicios/personal-certificado',
      title: 'Personal Certificado',
      description: 'Equipo capacitado'
    }
  ];

  const getLinkClasses = (isActive: boolean) => {
    return `transition-colors duration-300 relative ${
      isActive
        ? 'text-[#D81B60] font-semibold'
        : 'text-white hover:text-gray-200'
    }`;
  };

  return (
    <header
      className="py-4 px-6 fixed w-full top-0 z-50 shadow-lg"
      style={{ backgroundColor: colors.neutral[900] }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group"
          aria-label="COEMSA - Ir a página principal"
        >
          <div
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
          >
            <span
              className="font-bold text-xl"
              style={{ color: colors.primary.main }}
            >
              E
            </span>
          </div>
          <span className="text-white ml-2 font-semibold text-lg tracking-wider">
            COEMSA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={getLinkClasses(currentPage === item.key)}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <span
              className="text-white hover:text-gray-200 transition-colors inline-flex items-center cursor-pointer"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Servicios
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            {/* Dropdown Menu */}
            <div
              className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0"
              role="menu"
            >
              <div className="py-2">

                {serviceItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                    role="menuitem"
                  >
                    <div className="font-semibold text-gray-900">{service.title}</div>
                    <div className="text-sm text-gray-600">{service.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Facturación External Link */}
          <a
            href={config.externalUrls.facturacion}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors duration-300 inline-flex items-center"
          >
            Facturación
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu currentPage={currentPage} />
      </div>
    </header>
  );
}
