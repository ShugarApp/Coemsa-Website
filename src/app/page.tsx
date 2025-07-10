'use client';

import { Phone, Mail, MapPin, Send, Target, Eye, Gem, Users, Car, CreditCard, Clock, Building, Map as MapIcon, Wrench, Navigation, Camera, ParkingCircle, UserCheck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { config } from '../lib/config';

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

// Componente del botón flotante de WhatsApp
function WhatsAppFloat() {
  const { number, message } = config.contact.whatsapp;
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <div className="whatsapp-tooltip">
        ¡Escríbenos por WhatsApp!
      </div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
      </svg>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section id="inicio" className="bg-gray-100 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="mb-8 bounce-in">
            <div className="inline-block">
              <div className="w-48 h-48 bg-[#D81B60] rounded-full flex items-center justify-center relative mx-auto mb-6">
                <div className="w-40 h-40 border-4 border-white rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#D81B60] font-bold text-6xl">E</span>
                  </div>
                </div>
              </div>
              <div className="text-[#d81b60] text-4xl font-light tracking-[0.5em] mt-4">
                COEMSA
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed fade-in">
            Diseñamos soluciones integrales para garantizar el correcto funcionamiento de un estacionamiento
          </h1>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Image */}
          <div className="mb-16 rounded-lg overflow-hidden">
            <ImageLoader
              src="https://ext.same-assets.com/1969150652/1388073765.jpeg"
              alt="Persona usando tarjeta de acceso en estacionamiento"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Main Description */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Somos una empresa mexicana dedicada al servicio de operación y administración de estacionamientos, respaldada por Gigante Grupo Inmobiliario.
            </h2>
          </div>

          {/* Mission, Vision, Values, Philosophy */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 slide-up">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#d81b60] to-[#ad1457] rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D81B60] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#d81b60] transition-colors duration-300">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrecer excelentes soluciones de control, administración, servicios y tecnología de estacionamientos, innovando con honestidad, confiabilidad y seguridad, superando las expectativas de nuestros clientes
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2d7d32] to-[#1b5e20] rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <Eye className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D81B60] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#2d7d32] transition-colors duration-300">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser el mejor prestador de servicios de estacionamientos del mercado y servicios complementarios, esforzándonos por dar siempre valor agregado a nuestros clientes
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#d81b60] to-[#ad1457] rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <Gem className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d81b60] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#D81B60] transition-colors duration-300">Valores</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#D81B60] rounded-full"></div>
                  <span className="text-gray-600 font-medium">Honestidad</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#d81b60] rounded-full"></div>
                  <span className="text-gray-600 font-medium">Confianza</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#2d7d32] rounded-full"></div>
                  <span className="text-gray-600 font-medium">Eficiencia</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#293232] rounded-full"></div>
                  <span className="text-gray-600 font-medium">Seguridad</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#293232] to-[#424242] rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D81B60] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#293232] transition-colors duration-300">Filosofía</h3>
              <p className="text-gray-600 leading-relaxed">
                En COEMSA las necesidades de los clientes son primordiales y es sobre éstas, diseñamos soluciones integrales que integran tecnología, administración y servicios complementarios para garantizar un funcionamiento fluido y controlado de su estacionamiento
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 text-center bg-gray-50 py-12 px-8 rounded-lg">
            <div className="fade-in">
              <div className="text-4xl font-bold text-[#d81b60] mb-2">11</div>
              <div className="text-gray-700">Estados</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-[#d81b60] mb-2">84</div>
              <div className="text-gray-700">Estacionamientos</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-[#d81b60] mb-2">440</div>
              <div className="text-gray-700">Empleados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales Section */}
      <section className="py-20 bg-white">
        {/* Green accent bar like COEMSA */}
        <div className="w-full h-2 bg-[#2d7d32] mb-16" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#293232] mb-6">Nuestros Servicios Especializados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales que cubren todos los aspectos de la gestión de estacionamientos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/servicios/infraestructura" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                <div className="w-20 h-20 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ad1457] transition-colors">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Infraestructura</h3>
                <p className="text-gray-600 text-center mb-6">
                  Sistemas integrales de control de acceso, señalización digital, videovigilancia y tecnología de vanguardia para tu estacionamiento.
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-[#d81b60] font-semibold group-hover:text-[#ad1457] transition-colors">
                    Ver más detalles
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/servicios/personal-certificado" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                <div className="w-20 h-20 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ad1457] transition-colors">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.05 7H16c-.8 0-1.54.37-2.01.99L12 11l-2-3-1.5 1.5L12 13l-1 7h2l.67-4.67L16 18h4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Personal Certificado</h3>
                <p className="text-gray-600 text-center mb-6">
                  Equipo altamente capacitado y certificado en atención al cliente, seguridad y operación de sistemas tecnológicos.
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-[#d81b60] font-semibold group-hover:text-[#ad1457] transition-colors">
                    Ver más detalles
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/servicios/facturacion-electronica" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                <div className="w-20 h-20 bg-[#d81b60] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ad1457] transition-colors">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Facturación Electrónica</h3>
                <p className="text-gray-600 text-center mb-6">
                  Sistema integral de facturación electrónica que cumple con normativas SAT, múltiples métodos de pago y reportes financieros.
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-[#d81b60] font-semibold group-hover:text-[#ad1457] transition-colors">
                    Ver más detalles
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">¿Necesitas más información sobre nuestros servicios?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/525526986000?text=Hola%2C%20me%20interesa%20obtener%20información%20sobre%20los%20servicios%20de%20COEMSA%20para%20estacionamientos"
                className="inline-block bg-[#2d7d32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1b5e20] transition-colors"
              >
                Contactar por WhatsApp
              </a>
              <a
                href="tel:+525526986000"
                className="inline-block border-2 border-[#2d7d32] text-[#2d7d32] px-8 py-4 rounded-lg font-semibold hover:bg-[#2d7d32] hover:text-white transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Image */}
          <div className="mb-16 rounded-lg overflow-hidden">
            <ImageLoader
              src="https://ext.same-assets.com/1969150652/1913736053.jpeg"
              alt="Estacionamiento con motocicletas"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Contamos con un equipo capacitado para brindarte el mejor servicio.
            </h2>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center slide-up">
              <div className="w-16 h-16 bg-[#D81B60] rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Valet parking</h3>
              <p className="text-gray-600 text-sm">
                Tenemos a un equipo capacitado asignado para la recepción, cuidado y entrega del vehículo
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-[#D81B60] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Autoservicio</h3>
              <p className="text-gray-600 text-sm">
                El cliente maneja la experiencia del estacionamiento de principio a fin, realiza el ingreso, busca el lugar adecuado y realiza el pago en nuestros cajeros
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-[#D81B60] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pago a la salida</h3>
              <p className="text-gray-600 text-sm">
                El usuario podrá dirigirse a la caseta de salida y entregar su boleto donde se le indicará el monto a pagar
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-[#D81B60] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pensiones</h3>
              <p className="text-gray-600 text-sm">
                Servicio para autos y motos de 12 y/o 24 horas
              </p>
            </div>
          </div>

          {/* Enhanced Additional Services */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Servicios Adicionales</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complementamos la gestión de estacionamientos con servicios tecnológicos de vanguardia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D81B60] to-pink-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="text-white w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Mantenimiento Integral</h4>
                <p className="text-gray-600 text-sm">Servicio completo de mantenimiento preventivo y correctivo para todos los equipos</p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D81B60] to-pink-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Navigation className="text-white w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Sistema de Guiado</h4>
                <p className="text-gray-600 text-sm">Tecnología LED inteligente para localizar espacios disponibles automáticamente</p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D81B60] to-pink-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="text-white w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Circuito Cerrado</h4>
                <p className="text-gray-600 text-sm">Monitoreo 24/7 con cámaras de alta definición y sistema de grabación</p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D81B60] to-pink-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ParkingCircle className="text-white w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Barreras Automáticas</h4>
                <p className="text-gray-600 text-sm">Control de acceso automatizado con reconocimiento de placas y tickets</p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D81B60] to-pink-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="text-white w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Cajeros Automáticos</h4>
                <p className="text-gray-600 text-sm">Estaciones de pago automatizadas con múltiples opciones de pago</p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D81B60] to-pink-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="text-white w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Tarjeta de Proximidad</h4>
                <p className="text-gray-600 text-sm">Acceso sin contacto mediante tecnología RFID para usuarios frecuentes</p>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center px-6 py-3 bg-[#D81B60] text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Consulta sobre servicios adicionales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicaciones Section */}
      <section id="ubicaciones" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Image */}
          <div className="mb-16 rounded-lg overflow-hidden">
            <ImageLoader
              src="https://ext.same-assets.com/1969150652/2420801016.jpeg"
              alt="Estacionamiento subterráneo con demarcaciones"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              OPERAMOS
            </h2>
            <h3 className="text-3xl md:text-4xl font-light text-[#D81B60] mb-4">
              +DE 80 ESTACIONAMIENTOS
            </h3>
            <p className="text-xl text-gray-600">A nivel nacional</p>
          </div>

          {/* Interactive Map Section */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map Visualization */}
              <div className="p-8 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Presencia Nacional</h4>
                  <p className="text-gray-600">
                    Más de 80 estacionamientos en 11 estados de la República Mexicana
                  </p>
                </div>

                {/* Simple Mexico Map Representation */}
                <div className="relative mx-auto max-w-sm">
                  <div className="bg-white rounded-lg shadow-md p-6 relative">
                    <svg viewBox="0 0 400 300" className="w-full h-auto">
                      {/* Simplified Mexico outline */}
                      <path
                        d="M50 150 L80 120 L120 100 L180 110 L220 120 L280 130 L320 140 L350 160 L340 200 L320 230 L280 240 L240 250 L200 260 L160 250 L120 240 L80 220 L60 200 L50 180 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="2"
                      />

                      {/* Active states markers */}
                      <circle cx="90" cy="140" r="6" fill="#ec7324" opacity="0.8" /> {/* Baja California */}
                      <circle cx="200" cy="180" r="8" fill="#ec7324" opacity="0.9" /> {/* Ciudad de México */}
                      <circle cx="150" cy="160" r="6" fill="#ec7324" opacity="0.8" /> {/* Guanajuato */}
                      <circle cx="180" cy="200" r="6" fill="#ec7324" opacity="0.8" /> {/* Guerrero */}
                      <circle cx="210" cy="150" r="6" fill="#ec7324" opacity="0.8" /> {/* Hidalgo */}
                      <circle cx="130" cy="170" r="6" fill="#ec7324" opacity="0.8" /> {/* Jalisco */}
                      <circle cx="270" cy="140" r="6" fill="#ec7324" opacity="0.8" /> {/* Nuevo León */}
                      <circle cx="220" cy="170" r="6" fill="#ec7324" opacity="0.8" /> {/* Puebla */}
                      <circle cx="260" cy="180" r="6" fill="#ec7324" opacity="0.8" /> {/* Veracruz */}
                      <circle cx="190" cy="160" r="6" fill="#ec7324" opacity="0.8" /> {/* Estado de México */}

                      {/* Legend */}
                      <circle cx="320" cy="50" r="4" fill="#ec7324" />
                      <text x="335" y="55" fontSize="12" fill="#374151">Ubicaciones COEMSA</text>
                    </svg>

                    {/* Stats overlay */}
                    <div className="absolute top-4 right-4 bg-[#D81B60] text-white rounded-lg p-3 text-center">
                      <div className="font-bold text-lg">80+</div>
                      <div className="text-xs">Estacionamientos</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* States List */}
              <div className="p-8 bg-white bg-opacity-60">
                <h5 className="text-xl font-bold text-gray-800 mb-6 text-center">Estados con Presencia</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Ciudad de México", count: "25+", icon: "🏢" },
                    { name: "Estado de México", count: "15+", icon: "🏢" },
                    { name: "Jalisco", count: "8+", icon: "🌶️" },
                    { name: "Nuevo León", count: "6+", icon: "🏭" },
                    { name: "Puebla", count: "5+", icon: "🏛️" },
                    { name: "Veracruz", count: "4+", icon: "⚓" },
                    { name: "Guanajuato", count: "4+", icon: "⛰️" },
                    { name: "Guerrero", count: "3+", icon: "🏖️" },
                    { name: "Hidalgo", count: "3+", icon: "🗻" },
                    { name: "Baja California", count: "2+", icon: "🌊" },
                    { name: "Más estados", count: "5+", icon: "📍" }
                  ].map((state, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{state.icon}</span>
                        <span className="font-medium text-gray-800">{state.name}</span>
                      </div>
                      <span className="text-[#D81B60] font-bold text-sm bg-pink-50 px-2 py-1 rounded">
                        {state.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 text-center">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-6 py-3 bg-[#D81B60] text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 font-semibold"
                  >
                    <MapIcon className="w-5 h-5 mr-2" />
                    Encuentra tu ubicación más cercana
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-16 fade-in">
            Contamos con + de 20 años de experiencia construyendo valor y confianza
          </h2>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-16 fade-in">
            Estamos listos para <strong>trabajar de la mano contigo</strong>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-lg service-card">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">Hospitales</h3>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg service-card">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">Instituciones educativas</h3>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg service-card">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">Supermercados</h3>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg service-card">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">Aeropuertos</h3>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg service-card">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">Estadios</h3>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg service-card">
              <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">Centros comerciales</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Loading Animations */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="h-64 bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 gallery-item">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/949010923.webp"
                alt="Estacionamiento exterior con taxi amarillo y vehículos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 gallery-item">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/690439372.webp"
                alt="Sistema de control de acceso vehicular automatizado"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 gallery-item">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/2823098438.webp"
                alt="Estación de carga para vehículos eléctricos en estacionamiento"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Image */}
          <div className="mb-16 rounded-lg overflow-hidden">
            <ImageLoader
              src="https://ext.same-assets.com/1969150652/2668550152.jpeg"
              alt="Persona usando smartphone con app de COEMSA"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Estamos para ayudarte
            </h2>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#D81B60] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">TELÉFONO</h3>
              <a href="tel:5552698000" className="text-[#D81B60] hover:underline text-lg">
                (55) 5269 8000
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#D81B60] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">UBICACIÓN</h3>
              <p className="text-gray-600">
                Av. Ejército Nacional 769, Esquina Moliere,<br />
                Miguel Hidalgo, C.P. 11520, CDMX.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#D81B60] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">EMAIL</h3>
              <a href="mailto:contacto@coemsa.com" className="text-[#D81B60] hover:underline text-lg">
                contacto@coemsa.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D81B60] focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D81B60] focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D81B60] focus:border-transparent transition-colors"
                    placeholder="+52 (55) 1234-5678"
                  />
                </div>
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D81B60] focus:border-transparent transition-colors"
                    placeholder="Asunto del mensaje"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2">
                  Comentarios *
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D81B60] focus:border-transparent transition-colors"
                  placeholder="Describe tu consulta o proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D81B60] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#ad1457] transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#293232] mb-6 fade-in">
              Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas líderes que confían en nuestros servicios de gestión de estacionamientos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/4049254290.svg"
                alt="Cliente 1"
                className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/1848023134.svg"
                alt="Cliente 2"
                className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/1020788071.svg"
                alt="Cliente 3"
                className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <ImageLoader
                src="https://ext.same-assets.com/1969150652/230460329.svg"
                alt="Cliente 4"
                className="h-16 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Agregamos más clientes ficticios para llenar la cuadrícula */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-16 w-24 bg-gradient-to-r from-[#d81b60] to-[#ad1457] rounded mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-lg">PLAZA</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-16 w-24 bg-gradient-to-r from-[#2d7d32] to-[#1b5e20] rounded mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-lg">CENTRO</span>
              </div>
            </div>
          </div>

          {/* Estadísticas de clientes */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#d81b60] mb-2">84+</div>
                <div className="text-gray-600 font-semibold">Estacionamientos Operados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d81b60] mb-2">11</div>
                <div className="text-gray-600 font-semibold">Estados con Presencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d81b60] mb-2">20+</div>
                <div className="text-gray-600 font-semibold">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d81b60] mb-2">440+</div>
                <div className="text-gray-600 font-semibold">Empleados Capacitados</div>
              </div>
            </div>
          </div>

          {/* Testimonio destacado */}
          <div className="mt-16 bg-[#293232] rounded-lg p-8 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-[#d81b60] mb-4">"</div>
              <blockquote className="text-xl md:text-2xl font-light italic mb-6">
                COEMSA ha transformado completamente la gestión de nuestros estacionamientos. Su tecnología avanzada y personal altamente capacitado nos han permitido optimizar operaciones y mejorar significativamente la experiencia de nuestros usuarios.
              </blockquote>
              <div className="border-t border-gray-600 pt-6">
                <div className="font-semibold text-lg">Director General</div>
                <div className="text-[#d81b60] font-medium">Plaza Comercial Líder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}
