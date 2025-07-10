'use client';

import Link from 'next/link';

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`bg-black text-white py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div>
            <div className="text-blue-400 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">TELÉFONO</h3>
            <a href="tel:+525526986000" className="hover:text-blue-400 transition-colors">
              (55) 5269 8000
            </a>
          </div>

          {/* Location */}
          <div>
            <div className="text-orange-400 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">UBICACIÓN</h3>
            <p>
              Av. Ejército Nacional 769, Esquina Moliere,<br/>
              Miguel Hidalgo, C.P. 11520, CDMX.
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="text-red-400 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">EMAIL</h3>
            <a href="mailto:contacto@coemsa.com" className="hover:text-red-400 transition-colors">
              contacto@coemsa.com
            </a>
          </div>
        </div>

        {/* Logo and Links */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <Link href="/" className="inline-block mb-4">
            <div className="w-16 h-16 bg-[#ec7324] rounded-full flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
          </Link>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              <Link href="/aviso-privacidad" className="hover:text-white transition-colors">
                Aviso de privacidad
              </Link>
              <span className="mx-4">|</span>
              <Link href="/terminos-condiciones" className="hover:text-white transition-colors">
                Términos y condiciones
              </Link>
            </p>
            <p>
              © {new Date().getFullYear()} COEMSA. Todos los derechos reservados.
            </p>
            <p>contacto@coemsa.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
