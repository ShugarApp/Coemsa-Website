'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Button, { WhatsAppButton } from '@/components/Button';
import { Input, Textarea, Select, FileInput } from '@/components/Input';
import FeatureCard, { BenefitCard } from '@/components/FeatureCard';
import { useForm, validators } from '@/hooks/useForm';
import { colors } from '@/lib/design-system';

interface JobApplicationData {
  nombre: string;
  email: string;
  telefono: string;
  puesto: string;
  experiencia: string;
  mensaje: string;
  cv: File | null;
}

export default function CarrerasPage() {
  const [selectedPosition, setSelectedPosition] = useState('');

  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } = useForm<JobApplicationData>({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      puesto: '',
      experiencia: '',
      mensaje: '',
      cv: null
    },
    validate: (values) => {
      const errors: Partial<Record<keyof JobApplicationData, string>> = {};

      const requiredFields = ['nombre', 'email', 'telefono', 'puesto', 'experiencia'] as const;
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

      if (!values.cv) {
        errors.cv = 'El CV es requerido';
      }

      return errors;
    },
    onSubmit: async (formData) => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('¡Aplicación enviada exitosamente! Nos pondremos en contacto contigo pronto.');
        reset();
        console.log('Application submitted:', formData);
      } catch (error) {
        console.error('Error submitting application:', error);
      }
    }
  });

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Carreras' }
  ];

  const experienceOptions = [
    { value: '', label: 'Selecciona tu experiencia' },
    { value: '0-1', label: '0-1 años' },
    { value: '2-3', label: '2-3 años' },
    { value: '4-5', label: '4-5 años' },
    { value: '6+', label: '6+ años' }
  ];

  const positions = [
    {
      id: 'supervisor-operaciones',
      title: 'Supervisor de Operaciones',
      location: 'Ciudad de México',
      type: 'Tiempo Completo',
      department: 'Operaciones',
      description: 'Buscamos un supervisor de operaciones para liderar equipos en nuestros estacionamientos principales.',
      requirements: [
        'Licenciatura en Administración o carrera afín',
        'Mínimo 3 años de experiencia en supervisión',
        'Conocimiento en sistemas de control de acceso',
        'Excelentes habilidades de liderazgo',
        'Disponibilidad para trabajar fines de semana'
      ],
      responsibilities: [
        'Supervisar personal operativo diario',
        'Garantizar el cumplimiento de procedimientos',
        'Resolver conflictos y situaciones imprevistas',
        'Elaborar reportes de operación',
        'Capacitar nuevo personal'
      ]
    },
    {
      id: 'tecnico-sistemas',
      title: 'Técnico en Sistemas',
      location: 'Ciudad de México',
      type: 'Tiempo Completo',
      department: 'Tecnología',
      description: 'Técnico especializado en mantenimiento y soporte de sistemas tecnológicos de estacionamientos.',
      requirements: [
        'Ingeniería en Sistemas o Electrónica',
        'Experiencia en sistemas de control de acceso',
        'Conocimiento en redes y telecomunicaciones',
        'Capacidad de resolución de problemas',
        'Disponibilidad para traslados'
      ],
      responsibilities: [
        'Mantenimiento preventivo y correctivo de equipos',
        'Soporte técnico a usuarios finales',
        'Instalación de nuevos sistemas',
        'Monitoreo de sistemas remotos',
        'Documentación técnica'
      ]
    },
    {
      id: 'agente-atencion',
      title: 'Agente de Atención al Cliente',
      location: 'Múltiples ubicaciones',
      type: 'Tiempo Completo',
      department: 'Atención al Cliente',
      description: 'Buscamos agentes para brindar excelente atención al cliente en nuestros estacionamientos.',
      requirements: [
        'Bachillerato terminado',
        'Experiencia en atención al cliente',
        'Excelente comunicación verbal',
        'Paciencia y amabilidad',
        'Manejo básico de computadora'
      ],
      responsibilities: [
        'Atender consultas y quejas de usuarios',
        'Operar sistemas de cobro',
        'Orientar a usuarios sobre servicios',
        'Mantener área de trabajo ordenada',
        'Reportar incidencias'
      ]
    },
    {
      id: 'contador-general',
      title: 'Contador General',
      location: 'Ciudad de México',
      type: 'Tiempo Completo',
      department: 'Finanzas',
      description: 'Contador con experiencia en CFDI y facturación electrónica para liderar el área contable.',
      requirements: [
        'Licenciatura en Contaduría',
        'Cédula profesional',
        'Experiencia en facturación electrónica',
        'Conocimiento de normativas SAT',
        'Manejo de software contable'
      ],
      responsibilities: [
        'Supervisar facturación electrónica',
        'Elaborar estados financieros',
        'Cumplimiento fiscal y normativo',
        'Análisis financiero',
        'Coordinación con auditorías'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Crecimiento Profesional',
      description: 'Oportunidades de desarrollo y capacitación continua para impulsar tu carrera profesional.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    },
    {
      title: 'Estabilidad Laboral',
      description: 'Empresa sólida con más de 20 años en el mercado, respaldada por Gigante Grupo Inmobiliario.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    },
    {
      title: 'Ambiente Colaborativo',
      description: 'Cultura organizacional basada en el trabajo en equipo, respeto y comunicación abierta.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
    },
    {
      title: 'Beneficios Competitivos',
      description: 'Paquete integral de prestaciones superiores a las de ley, seguro médico y bonos de desempeño.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    }
  ];

  const handleFileChange = (files: FileList | null) => {
    if (files && files[0]) {
      handleChange('cv', files[0]);
    }
  };

  const handlePositionSelect = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    handleChange('puesto', positionTitle);
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="careers" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        title="Únete a Nuestro Equipo"
        subtitle="Forma parte de la empresa líder en gestión de estacionamientos en México. Ofrecemos oportunidades de crecimiento profesional en un ambiente dinámico y colaborativo."
        background="neutral"
        icon={
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
          </svg>
        }
      />

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">¿Por qué trabajar en COEMSA?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                iconColor={colors.secondary.main}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Green accent bar */}
          <div className="w-full h-2 bg-[#2d7d32] mb-16" />

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">Vacantes Disponibles</h2>

          <div className="grid gap-8">
            {positions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{position.title}</h3>
                      <span
                        className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: colors.secondary.main }}
                      >
                        {position.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                        </svg>
                        {position.department}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{position.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Requisitos:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <span style={{ color: colors.secondary.main }} className="mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Responsabilidades:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {position.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span style={{ color: colors.accent.main }} className="mr-2">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      fullWidth
                      onClick={() => handlePositionSelect(position.title)}
                      className="mb-4"
                    >
                      Aplicar Ahora
                    </Button>
                    <div className="text-center text-sm text-gray-500">
                      <p>Publicado: Hace 2 días</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Aplicar a una Vacante</h2>
            <p className="text-gray-600 mb-8 text-center">
              Completa el formulario y adjunta tu CV. Nos pondremos en contacto contigo si tu perfil coincide con nuestras necesidades.
            </p>

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
                  id="email"
                  type="email"
                  label="Email"
                  required
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  error={errors.email}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="telefono"
                  type="tel"
                  label="Teléfono"
                  required
                  value={values.telefono}
                  onChange={(e) => handleChange('telefono', e.target.value)}
                  error={errors.telefono}
                  placeholder="(55) 1234-5678"
                />
                <Select
                  id="puesto"
                  label="Puesto de Interés"
                  required
                  options={[
                    { value: '', label: 'Selecciona un puesto' },
                    ...positions.map(pos => ({ value: pos.title, label: pos.title }))
                  ]}
                  value={values.puesto}
                  onChange={(e) => handleChange('puesto', e.target.value)}
                  error={errors.puesto}
                />
              </div>

              <Select
                id="experiencia"
                label="Años de Experiencia"
                required
                options={experienceOptions}
                value={values.experiencia}
                onChange={(e) => handleChange('experiencia', e.target.value)}
                error={errors.experiencia}
              />

              <FileInput
                id="cv"
                label="Curriculum Vitae"
                required
                accept=".pdf,.doc,.docx"
                onFileChange={handleFileChange}
                error={errors.cv}
                helperText="Archivos permitidos: PDF, DOC, DOCX (máx. 5MB)"
              />

              <Textarea
                id="mensaje"
                label="Carta de Presentación"
                rows={5}
                value={values.mensaje}
                onChange={(e) => handleChange('mensaje', e.target.value)}
                error={errors.mensaje}
                placeholder="Cuéntanos por qué eres el candidato ideal para este puesto..."
              />

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  leftIcon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  }
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Aplicación'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
