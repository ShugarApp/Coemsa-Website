'use client';

import Link from 'next/link'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Componente para cargar imágenes con animaciones
function ImageLoader({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 image-skeleton rounded-lg">
          <div className="loading-spinner">
            <div className="spinner" />
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-sm">Error al cargar imagen</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-600 ease-out ${
          isLoading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: hasError ? 'none' : 'block' }}
      />
    </div>
  );
}

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm">
            <Link href="/" className="text-[#d81b60] hover:underline">Inicio</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-600">Quiénes Somos</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#293232] to-gray-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">COEMSA ESTACIONAMIENTOS</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Somos una empresa mexicana líder en servicios de operación y administración de estacionamientos, respaldada por más de 20 años de experiencia y la confianza de Gigante Grupo Inmobiliario
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#293232] mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundada con la visión de revolucionar la gestión de estacionamientos en México, COEMSA ha evolucionado hasta convertirse en el referente nacional en operación y administración de espacios de estacionamiento.
                </p>
                <p>
                  Con más de dos décadas de experiencia, hemos implementado soluciones innovadoras que integran tecnología de vanguardia, personal altamente capacitado y procesos optimizados para garantizar la mejor experiencia tanto para nuestros clientes como para los usuarios finales.
                </p>
                <p>
                  Respaldados por Gigante Grupo Inmobiliario, contamos con la solidez financiera y el respaldo institucional necesario para ofrecer servicios de clase mundial en todo el territorio nacional.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/1388073765.jpeg"
                alt="Historia de COEMSA"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#293232]/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values, Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Green accent bar */}
          <div className="w-full h-2 bg-[#2d7d32] mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#293232] mb-4 text-center">Misión</h3>
              <p className="text-gray-600 text-center">
                Ofrecer excelentes soluciones de control, administración, servicios y tecnología de estacionamientos, innovando con honestidad, confiabilidad y seguridad, superando las expectativas de nuestros clientes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#293232] mb-4 text-center">Visión</h3>
              <p className="text-gray-600 text-center">
                Ser el mejor prestador de servicios de estacionamientos del mercado y servicios complementarios, esforzándonos por dar siempre valor agregado a nuestros clientes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#293232] mb-4 text-center">Valores</h3>
              <div className="text-gray-600 text-center space-y-1">
                <div className="font-semibold">Honestidad</div>
                <div className="font-semibold">Confianza</div>
                <div className="font-semibold">Eficiencia</div>
                <div className="font-semibold">Seguridad</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#293232] mb-4 text-center">Filosofía</h3>
              <p className="text-gray-600 text-center">
                En COEMSA las necesidades de los clientes son primordiales. Diseñamos soluciones integrales que integran tecnología, administración y servicios para garantizar un funcionamiento fluido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#293232] mb-16">COEMSA en Números</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-5xl font-bold text-[#d81b60] mb-4">20+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">Años de Experiencia</div>
              <div className="text-gray-600">Construyendo confianza día a día</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-5xl font-bold text-[#d81b60] mb-4">84+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">Estacionamientos</div>
              <div className="text-gray-600">Operados a nivel nacional</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-5xl font-bold text-[#d81b60] mb-4">11</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">Estados</div>
              <div className="text-gray-600">Presencia en la República Mexicana</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-5xl font-bold text-[#d81b60] mb-4">440+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">Empleados</div>
              <div className="text-gray-600">Personal capacitado y certificado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#293232] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir COEMSA?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos más que un proveedor de servicios, somos su socio estratégico en la gestión de estacionamientos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Experiencia Comprobada</h3>
              <p className="text-gray-300">
                Más de 20 años liderando la industria con soluciones probadas y resultados exitosos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología Avanzada</h3>
              <p className="text-gray-300">
                Implementamos las últimas innovaciones tecnológicas para optimizar la operación.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Certificado</h3>
              <p className="text-gray-300">
                Equipo altamente capacitado y certificado en los más altos estándares de calidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Respaldo Institucional</h3>
              <p className="text-gray-300">
                Contamos con el respaldo de Gigante Grupo Inmobiliario para garantizar estabilidad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cobertura Nacional</h3>
              <p className="text-gray-300">
                Presencia en 11 estados de la República Mexicana con más de 84 estacionamientos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-3m-3 3l-3-3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Servicio 24/7</h3>
              <p className="text-gray-300">
                Soporte técnico y operativo disponible las 24 horas del día, los 365 días del año.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2d7d32]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para conocer más sobre COEMSA?</h2>
          <p className="text-xl mb-8">
            Descubre cómo podemos transformar la gestión de tu estacionamiento con nuestras soluciones integrales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/525526986000?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20COEMSA%20y%20sus%20servicios%20de%20gestión%20de%20estacionamientos"
              className="inline-block bg-white text-[#2d7d32] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contactar por WhatsApp
            </a>
            <Link
              href="/#servicios"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#2d7d32] transition-colors"
            >
              Ver Nuestros Servicios
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
