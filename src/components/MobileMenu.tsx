'use client';

import { useState } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  currentPage?: string
}

export default function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-[#293232] z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#293232] font-bold text-lg">E</span>
              </div>
              <span className="text-white ml-2 font-semibold text-lg tracking-wider">COEMSA</span>
            </div>
            <button
              onClick={closeMenu}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Cerrar menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <Link
              href="/"
              onClick={closeMenu}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'home'
                  ? 'bg-[#d81b60] text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                Inicio
              </div>
            </Link>

            <Link
              href="/quienes-somos"
              onClick={closeMenu}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'about'
                  ? 'bg-[#d81b60] text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Quiénes Somos
              </div>
            </Link>

            {/* Services submenu */}
            <div className="space-y-2">
              <div className="py-3 px-4 text-gray-300 font-semibold">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Servicios
                </div>
              </div>

              <Link
                href="/servicios/infraestructura"
                onClick={closeMenu}
                className={`block py-2 px-8 rounded-lg transition-colors ${
                  currentPage === 'infraestructura'
                    ? 'bg-[#d81b60] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Infraestructura
              </Link>

              <Link
                href="/servicios/personal-certificado"
                onClick={closeMenu}
                className={`block py-2 px-8 rounded-lg transition-colors ${
                  currentPage === 'personal'
                    ? 'bg-[#d81b60] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Personal Certificado
              </Link>

              <Link
                href="/servicios/facturacion-electronica"
                onClick={closeMenu}
                className={`block py-2 px-8 rounded-lg transition-colors ${
                  currentPage === 'facturacion'
                    ? 'bg-[#d81b60] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                Facturación Electrónica
              </Link>
            </div>

            <Link
              href="/contacto"
              onClick={closeMenu}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'contact'
                  ? 'bg-[#d81b60] text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contacto
              </div>
            </Link>

            <Link
              href="/carreras"
              onClick={closeMenu}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'careers'
                  ? 'bg-[#d81b60] text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                </svg>
                Carreras
              </div>
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-600">
            <div className="space-y-4">
              <a
                href="tel:+525526986000"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (55) 5269 8000
              </a>

              <a
                href="mailto:contacto@coemsa.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                contacto@coemsa.com
              </a>

              <a
                href="https://wa.me/525526986000?text=Hola%2C%20me%20interesa%20obtener%20información%20sobre%20los%20servicios%20de%20COEMSA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#25D366] hover:text-green-400 transition-colors"
              >
                <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.484"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
