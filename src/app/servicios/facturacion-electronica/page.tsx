import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { WhatsAppButton, PhoneButton } from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import { colors } from '@/lib/design-system';

export default function FacturacionElectronicaPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Facturación Electrónica' }
  ];

  const features = [
    {
      title: 'Cumplimiento SAT',
      description: 'Sistema 100% compatible con las regulaciones del SAT, generación automática de CFDI 4.0 y timbrado fiscal.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    },
    {
      title: 'Facturación Automática',
      description: 'Generación automática de facturas por servicios de estacionamiento con integración a sistemas de pago.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    },
    {
      title: 'Reportes Financieros',
      description: 'Reportes detallados de ingresos, análisis de rentabilidad y dashboards financieros en tiempo real.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    },
    {
      title: 'Seguridad de Datos',
      description: 'Encriptación de datos, respaldos automáticos y protección de información fiscal sensible.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/></svg>
    },
    {
      title: 'Múltiples Métodos de Pago',
      description: 'Integración con tarjetas de crédito/débito, transferencias bancarias, pagos móviles y efectivo.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    },
    {
      title: 'Portal del Cliente',
      description: 'Portal web para que los clientes consulten sus facturas, descarguen XMLs y PDFs, y gestionen sus datos fiscales.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
    }
  ];

  const benefits = [
    'Reducción de Costos Operativos - Elimina costos de papel, impresión, almacenamiento y envío de facturas físicas.',
    'Mayor Eficiencia Administrativa - Automatización de procesos contables y reducción significativa de errores humanos.',
    'Cumplimiento Fiscal Garantizado - 100% compatible con regulaciones SAT y actualizaciones automáticas de normativas.',
    'Mejor Experiencia del Cliente - Facturación instantánea, acceso 24/7 a documentos fiscales y múltiples opciones de pago.',
    'Análisis de Negocio Avanzado - Reportes detallados, métricas de rentabilidad y análisis predictivo de ingresos.'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        title="Facturación Electrónica"
        subtitle="Sistema integral de facturación electrónica que cumple con todas las normas fiscales y optimiza la gestión financiera de tu estacionamiento"
        background="primary"
        icon={
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          </svg>
        }
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Características del Sistema de Facturación</h2>

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Beneficios de la Facturación Electrónica</h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const [title, description] = benefit.split(' - ');
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        style={{ backgroundColor: colors.primary.main }}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-8">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: colors.primary.main }}
                >
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sistema Certificado SAT</h3>
                <p className="text-gray-600 mb-6">
                  Nuestro sistema está certificado por el SAT y cumple con todas las normativas fiscales vigentes
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold" style={{ color: colors.primary.main }}>CFDI 4.0</div>
                  <div className="text-sm text-gray-600">Formato Vigente</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold" style={{ color: colors.primary.main }}>99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold" style={{ color: colors.primary.main }}>24/7</div>
                  <div className="text-sm text-gray-600">Disponibilidad</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold" style={{ color: colors.primary.main }}>SSL</div>
                  <div className="text-sm text-gray-600">Seguridad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: colors.primary.main }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para modernizar tu facturación?</h2>
          <p className="text-xl mb-8">
            Implementa nuestro sistema de facturación electrónica y optimiza la gestión financiera de tu estacionamiento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hola, me interesa obtener información sobre el sistema de facturación electrónica para estacionamientos de COEMSA"
              className="bg-white text-[#ec7324] hover:bg-gray-100"
            >
              Solicitar Demo
            </WhatsAppButton>
            <PhoneButton
              className="border-white text-white hover:bg-white hover:text-[#ec7324]"
            >
              Llamar Ahora
            </PhoneButton>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
