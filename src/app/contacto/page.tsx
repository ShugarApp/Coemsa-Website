'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Button, { WhatsAppButton, PhoneButton } from '@/components/Button';
import { Input, Textarea, Select } from '@/components/Input';
import FeatureCard from '@/components/FeatureCard';
import { useForm, validators, combineValidators } from '@/hooks/useForm';
import { colors } from '@/lib/design-system';

interface ContactFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

export default function ContactoPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm<ContactFormData>({
    initialValues: {
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};

      const requiredFields = ['nombre', 'email', 'mensaje'] as const;
      requiredFields.forEach(field => {
        const error = validators.required(values[field]);
        if (error) errors[field] = error;
      });

      if (values.email) {
        const emailError = validators.email(values.email);
        if (emailError) errors.email = emailError;
      }

      if (values.telefono) {
        const phoneError = validators.phone(values.telefono);
        if (phoneError) errors.telefono = phoneError;
      }

      return errors;
    },
    onSubmit: async (formData) => {
      try {
        // Simular envío del formulario
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus('success');
        console.log('Formulario enviado:', formData);
      } catch (error) {
        setSubmitStatus('error');
        console.error('Error al enviar formulario:', error);
      }
    }
  });

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Contacto' }
  ];

  const serviceOptions = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'infraestructura', label: 'Infraestructura de Estacionamientos' },
    { value: 'personal', label: 'Personal Certificado' },
    { value: 'facturacion', label: 'Facturación Electrónica' },
    { value: 'administracion', label: 'Administración Completa' },
    { value: 'consulta-general', label: 'Consulta General' }
  ];

  const contactMethods = [
    {
      title: 'Teléfono',
      description: 'Habla directamente con nuestros especialistas',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      action: <PhoneButton size="sm" fullWidth>Llamar</PhoneButton>
    },
    {
      title: 'Email',
      description: 'Envíanos tu consulta por correo electrónico',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      action: (
        <Button
          variant="outline"
          size="sm"
          href="mailto:contacto@coemsa.com"
          fullWidth
        >
          Enviar Email
        </Button>
      )
    },
    {
      title: 'WhatsApp',
      description: 'Chatea con nosotros en tiempo real',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.484"/>
        </svg>
      ),
      action: (
        <WhatsAppButton
          size="sm"
          fullWidth
          message="Hola, me interesa obtener información sobre los servicios de COEMSA"
        >
          Iniciar Chat
        </WhatsAppButton>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="contact" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte con todas tus necesidades de gestión de estacionamientos. Nuestro equipo de expertos está listo para brindarte la mejor solución."
        background="neutral"
        icon={
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        }
      />

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: colors.secondary.main }}
                >
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                {method.action}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Green accent bar */}
          <div className="w-full h-2 bg-[#2d7d32] mb-16" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible para brindarte una cotización personalizada.
              </p>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <p className="text-green-800 font-semibold">¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <p className="text-red-800 font-semibold">Error al enviar el mensaje. Por favor intenta nuevamente.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    id="nombre"
                    label="Nombre Completo"
                    required
                    value={values.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                    error={errors.nombre}
                    placeholder="Tu nombre completo"
                  />
                  <Input
                    id="empresa"
                    label="Empresa"
                    value={values.empresa}
                    onChange={(e) => handleChange('empresa', e.target.value)}
                    error={errors.empresa}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    id="email"
                    type="email"
                    label="Email"
                    required
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    error={errors.email}
                    placeholder="tu@email.com"
                  />
                  <Input
                    id="telefono"
                    type="tel"
                    label="Teléfono"
                    value={values.telefono}
                    onChange={(e) => handleChange('telefono', e.target.value)}
                    error={errors.telefono}
                    placeholder="(55) 1234-5678"
                  />
                </div>

                <Select
                  id="servicio"
                  label="Servicio de Interés"
                  options={serviceOptions}
                  value={values.servicio}
                  onChange={(e) => handleChange('servicio', e.target.value)}
                  error={errors.servicio}
                />

                <Textarea
                  id="mensaje"
                  label="Mensaje"
                  required
                  rows={5}
                  value={values.mensaje}
                  onChange={(e) => handleChange('mensaje', e.target.value)}
                  error={errors.mensaje}
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />

                <Button
                  type="submit"
                  fullWidth
                  isLoading={isSubmitting}
                  leftIcon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  }
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </div>

            {/* Location and Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestras Oficinas</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.secondary.main }}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Oficina Principal</h4>
                      <p className="text-gray-600">
                        Av. Ejército Nacional 769, Esquina Moliere<br/>
                        Miguel Hidalgo, C.P. 11520<br/>
                        Ciudad de México, CDMX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.accent.main }}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Horarios de Atención</h4>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 AM - 6:00 PM<br/>
                        Sábados: 9:00 AM - 2:00 PM<br/>
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ubicación</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      style={{ color: colors.secondary.main }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <p className="text-gray-600 font-semibold">Mapa Interactivo</p>
                    <p className="text-sm text-gray-500">Miguel Hidalgo, CDMX</p>
                    <Button
                      variant="secondary"
                      size="sm"
                      href="https://maps.google.com/?q=Av.+Ejército+Nacional+769,+Miguel+Hidalgo,+CDMX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4"
                    >
                      Ver en Google Maps
                    </Button>
                  </div>
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
