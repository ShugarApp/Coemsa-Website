import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import FeatureCard from '@/components/FeatureCard';
import { colors } from '@/lib/design-system';

export default function ServiciosPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios' }
  ];

  const services = [
    {
      title: 'Infraestructura',
      description: 'Sistemas integrales de control de acceso, señalización digital, videovigilancia y tecnología de vanguardia para tu estacionamiento.',
      href: '/servicios/infraestructura',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/></svg>
    },
    {
      title: 'Personal Certificado',
      description: 'Equipo altamente capacitado y certificado en atención al cliente, seguridad y operación de sistemas tecnológicos.',
      href: '/servicios/personal-certificado',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.05 7H16c-.8 0-1.54.37-2.01.99L12 11l-2-3-1.5 1.5L12 13l-1 7h2l.67-4.67L16 18h4z"/></svg>
    },
    {
      title: 'Facturación Electrónica',
      description: 'Sistema integral de facturación electrónica que cumple con normativas SAT, múltiples métodos de pago y reportes financieros.',
      href: '/servicios/facturacion-electronica',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>
    }
  ];

  const additionalServices = [
    {
      title: 'Valet Parking',
      description: 'Servicio profesional de aparcacoches con personal capacitado para recepción, cuidado y entrega del vehículo.'
    },
    {
      title: 'Autoservicio',
      description: 'Modalidad donde el cliente maneja toda la experiencia del estacionamiento con nuestros sistemas automatizados.'
    },
    {
      title: 'Pensiones',
      description: 'Servicios especiales para autos y motos con tarifas de 12 y/o 24 horas.'
    },
    {
      title: 'Mantenimiento Integral',
      description: 'Programas completos de mantenimiento preventivo y correctivo de instalaciones.'
    },
    {
      title: 'Sistema de Guiado',
      description: 'Tecnología avanzada para dirigir a los usuarios hacia espacios disponibles.'
    },
    {
      title: 'Circuito Cerrado',
      description: 'Sistemas de videovigilancia y monitoreo de seguridad las 24 horas.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        title="Nuestros Servicios"
        subtitle="Soluciones integrales para la gestión profesional de estacionamientos. Tecnología, personal capacitado y experiencia de más de 20 años en el sector."
        background="primary"
        icon={
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        }
      />

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Servicios Principales
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                ctaText="Ver más detalles"
                iconColor={colors.primary.main}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Servicios Complementarios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestro equipo de expertos puede diseñar una solución integral adaptada a las necesidades específicas de tu estacionamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppFloatingButton
              message="Hola, me interesa obtener información sobre los servicios de COEMSA para estacionamientos"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
