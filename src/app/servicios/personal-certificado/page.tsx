import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Button, { WhatsAppButton, PhoneButton } from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import { colors } from '@/lib/design-system';

export default function PersonalCertificadoPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Personal Certificado' }
  ];

  const certifications = [
    {
      title: 'Certificación en Atención al Cliente',
      description: 'Nuestro personal está certificado en técnicas de atención al cliente y resolución de conflictos.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    },
    {
      title: 'Capacitación en Seguridad',
      description: 'Entrenamiento especializado en protocolos de seguridad, prevención de riesgos y primeros auxilios.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/></svg>
    },
    {
      title: 'Operación de Sistemas',
      description: 'Capacitación continua en el manejo de sistemas tecnológicos y equipos de control de acceso.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    },
    {
      title: 'Gestión Administrativa',
      description: 'Formación en procesos administrativos, facturación electrónica y manejo de reportes.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
    },
    {
      title: 'Uniformes y Presentación',
      description: 'Personal uniformado con presentación impecable que proyecta profesionalismo y confianza.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h6v-1.5c0-2.5 2-4.5 4.5-4.5H17z"/></svg>
    },
    {
      title: 'Capacitación Continua',
      description: 'Programas de actualización y mejora continua para mantener los más altos estándares de servicio.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/></svg>
    }
  ];

  const staffRoles = [
    {
      title: 'Supervisor de Operaciones',
      description: 'Supervisa las operaciones diarias, coordina al personal y garantiza el cumplimiento de protocolos de servicio.',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    },
    {
      title: 'Agente de Seguridad',
      description: 'Especialista en seguridad física, monitoreo de cámaras y control de acceso vehicular y peatonal.',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/></svg>
    },
    {
      title: 'Cajero Operador',
      description: 'Maneja transacciones de pago, cobro de tarifas y atención directa a usuarios del estacionamiento.',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm2 9a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></svg>
    },
    {
      title: 'Técnico de Sistemas',
      description: 'Especialista en mantenimiento de equipos tecnológicos, resolución de fallas y soporte técnico.',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    },
    {
      title: 'Agente de Atención',
      description: 'Especialista en servicio al cliente, información general y resolución de consultas y reclamos.',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/></svg>
    },
    {
      title: 'Coordinador de Mantenimiento',
      description: 'Encargado del mantenimiento preventivo, limpieza y conservación de las instalaciones del estacionamiento.',
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    }
  ];

  const trainingSteps = [
    { step: '1', title: 'Inducción Integral', description: 'Programa de 40 horas que incluye protocolos de servicio, uso de tecnología y atención al cliente.' },
    { step: '2', title: 'Capacitación Mensual', description: 'Sesiones mensuales de actualización en nuevas tecnologías, procedimientos y mejores prácticas.' },
    { step: '3', title: 'Certificaciones Anuales', description: 'Renovación anual de certificaciones en seguridad, primeros auxilios y atención al cliente.' },
    { step: '4', title: 'Evaluación de Desempeño', description: 'Evaluaciones trimestrales para asegurar el mantenimiento de altos estándares de calidad.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        title="Personal Certificado y Capacitado"
        subtitle="Contamos con personal altamente capacitado y certificado para brindar un servicio de excelencia en la gestión de estacionamientos"
        background="primary"
        icon={
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2 2 0 0 0 18.05 7H16c-.8 0-1.54.37-2.01.99L12 11l-2-3-1.5 1.5L12 13l-1 7h2l.67-4.67L16 18h4z"/>
          </svg>
        }
      />

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Certificaciones y Capacitaciones</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <FeatureCard
                key={index}
                title={cert.title}
                description={cert.description}
                icon={cert.icon}
                iconColor={colors.primary.main}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Staff Roles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Roles del Personal Especializado</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {staffRoles.slice(0, 3).map((role, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: colors.primary.main }}
                    >
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                  </div>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {staffRoles.slice(3).map((role, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: colors.primary.main }}
                    >
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                  </div>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Programas de Capacitación Continua</h2>

              <div className="space-y-6">
                {trainingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: colors.primary.main }}
                    >
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-lg p-8 text-white"
              style={{ backgroundColor: colors.primary.main }}
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Personal de Excelencia</h3>
                <p className="text-lg mb-6">
                  Nuestro compromiso es brindar personal altamente calificado que garantice la mejor experiencia a tus usuarios.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">20+</div>
                    <div className="text-sm">Años de Experiencia</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">Personal Certificado</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm">Cobertura Disponible</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Proyectos Exitosos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas personal especializado para tu estacionamiento?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctanos para conocer nuestros planes de personal certificado y capacitado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              message="Hola, me interesa obtener información sobre los servicios de personal certificado para estacionamientos de COEMSA"
            >
              Solicitar Información
            </WhatsAppButton>
            <PhoneButton>
              Llamar Ahora
            </PhoneButton>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
