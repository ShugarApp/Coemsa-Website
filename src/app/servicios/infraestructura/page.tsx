import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Button, { WhatsAppButton, PhoneButton } from '@/components/Button';
import FeatureCard, { BenefitCard } from '@/components/FeatureCard';
import { colors } from '@/lib/design-system';

export default function InfraestructuraPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Infraestructura' }
  ];

  const features = [
    {
      title: 'Sistemas de Control de Acceso',
      description: 'Barreras automáticas, lectores de tarjetas, dispensadores de tickets y sistemas de reconocimiento vehicular.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM5 4h14v8H5V4z"/></svg>
    },
    {
      title: 'Señalización Digital',
      description: 'Pantallas LED, totems informativos, señalización de espacios disponibles y sistemas de guía vehicular.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    },
    {
      title: 'Iluminación LED',
      description: 'Sistemas de iluminación eficiente, iluminación de emergencia y control automatizado por sensores.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    },
    {
      title: 'Videovigilancia',
      description: 'Cámaras de seguridad HD, monitoreo 24/7, grabación digital y sistemas de reconocimiento de placas.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/></svg>
    },
    {
      title: 'Infraestructura Eléctrica',
      description: 'Instalaciones eléctricas especializadas, tableros de control, UPS y sistemas de respaldo energético.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c0-1.1-.9-2-2-2H6z"/></svg>
    },
    {
      title: 'Mantenimiento Preventivo',
      description: 'Programas de mantenimiento especializado, soporte técnico 24/7 y garantía extendida en equipos.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    }
  ];

  const benefits = [
    {
      title: 'Tecnología de Vanguardia',
      description: 'Implementamos las últimas tecnologías en control de acceso y gestión vehicular.',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    },
    {
      title: 'Instalación Profesional',
      description: 'Nuestro equipo certificado garantiza una instalación impecable y funcional.',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    },
    {
      title: 'Soporte Técnico 24/7',
      description: 'Monitoreo constante y soporte técnico disponible las 24 horas del día.',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    },
    {
      title: 'ROI Comprobado',
      description: 'Nuestras soluciones aumentan la eficiencia operativa y los ingresos del estacionamiento.',
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        title="Infraestructura de Estacionamientos"
        subtitle="Implementamos sistemas integrales de infraestructura para optimizar la gestión y seguridad de tu estacionamiento"
        background="primary"
        icon={
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
          </svg>
        }
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconColor={colors.primary.main}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Por qué elegir nuestra infraestructura?</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: colors.primary.main }}
                    >
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: colors.primary.main }}
                >
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">¿Listo para modernizar tu estacionamiento?</h3>
                <p className="text-gray-600 mb-6">
                  Obtén una cotización personalizada para la infraestructura de tu estacionamiento
                </p>
                <div className="space-y-4">
                  <WhatsAppButton
                    fullWidth
                    message="Hola, me interesa obtener información sobre los servicios de infraestructura para estacionamientos de COEMSA"
                  >
                    Solicitar Cotización
                  </WhatsAppButton>
                  <PhoneButton
                    fullWidth
                  >
                    Llamar Ahora
                  </PhoneButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
