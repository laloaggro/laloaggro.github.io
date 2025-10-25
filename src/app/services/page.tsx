import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'devops',
      title: 'DevOps & Automatización',
      description: 'Transformo tu infraestructura y procesos de desarrollo con prácticas DevOps modernas.',
      features: [
        'Implementación de pipelines CI/CD',
        'Infraestructura como código (Terraform)',
        'Contenedores y orquestación (Docker, Kubernetes)',
        'Monitoreo y observabilidad',
        'Automatización de tareas repetitivas'
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'transformation',
      title: 'Transformación Digital',
      description: 'Estrategias y ejecución de transformación digital adaptadas a tu organización.',
      features: [
        'Evaluación de madurez tecnológica',
        'Roadmaps de transformación',
        'Modernización de aplicaciones legacy',
        'Migración a la nube',
        'Integración de nuevas tecnologías'
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      id: 'change-management',
      title: 'Gestión del Cambio',
      description: 'Frameworks y metodologías para implementar cambios tecnológicos exitosos.',
      features: [
        'Análisis de impacto organizacional',
        'Planificación de transición',
        'Capacitación y adopción de usuarios',
        'Comunicación efectiva del cambio',
        'Medición de éxito y KPIs'
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'cloud-architecture',
      title: 'Arquitectura Cloud',
      description: 'Diseño e implementación de soluciones escalables y seguras en la nube.',
      features: [
        'Diseño de arquitecturas cloud-native',
        'Optimización de costos en la nube',
        'Estrategias multi-cloud e híbridas',
        'Seguridad y compliance en la nube',
        'Migración de workloads a la nube'
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      )
    },
    {
      id: 'security-compliance',
      title: 'Seguridad y Compliance',
      description: 'Integración de prácticas de seguridad y cumplimiento regulatorio en tus procesos.',
      features: [
        'Implementación de DevSecOps',
        'Evaluación de vulnerabilidades',
        'Cumplimiento normativo (SOX, PCI, etc.)',
        'Seguridad en infraestructura y aplicaciones',
        'Auditorías de seguridad'
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 'analytics',
      title: 'Análisis y Métricas',
      description: 'Implementación de sistemas de monitoreo y análisis para decisiones informadas.',
      features: [
        'Implementación de sistemas de monitoreo',
        'Definición de KPIs y métricas',
        'Dashboards de inteligencia de negocios',
        'Análisis de datos y business intelligence',
        'Optimización basada en datos'
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="text-center max-w-4xl mx-auto space-y-8 fade-in">
            <div className="space-y-6">
              <span className="badge-primary uppercase tracking-wider">
                Mis Servicios
              </span>
              <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl">
                Soluciones Tecnológicas
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">
                Servicios especializados en DevOps, Transformación Digital y Gestión del Cambio
              </p>
              <p className="body-text text-base md:text-lg text-muted max-w-2xl mx-auto">
                Ayudo a organizaciones complejas a navegar su transformación tecnológica con enfoques 
                probados y adaptados a sus necesidades específicas.
              </p>
            </div>
            
            <div className="pt-6">
              <Link 
                href="/contact" 
                className="consulting-button-primary consulting-button-large"
              >
                Agenda una Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="feature-card fade-in-delay-{(index % 3) + 1}" id={service.id}>
                <div className="feature-icon-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="body-text text-muted mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=${service.id}`} className="text-accent font-medium text-sm link-hover">
                  Solicitar servicio →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Mi Enfoque de Trabajo</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Un proceso estructurado para garantizar resultados exitosos en cada proyecto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center fade-in-delay-1">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Descubrimiento</h3>
              <p className="body-text text-muted">
                Evaluación inicial de tus desafíos y objetivos tecnológicos.
              </p>
            </div>
            
            <div className="text-center fade-in-delay-2">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planificación</h3>
              <p className="body-text text-muted">
                Desarrollo de un plan personalizado con hitos y entregables claros.
              </p>
            </div>
            
            <div className="text-center fade-in-delay-3">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ejecución</h3>
              <p className="body-text text-muted">
                Implementación del plan con comunicación constante y transparencia.
              </p>
            </div>
            
            <div className="text-center fade-in-delay-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimización</h3>
              <p className="body-text text-muted">
                Evaluación de resultados y ajustes continuos para maximizar el impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para comenzar tu transformación?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir cómo puedo ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large">
              Agenda tu Consulta
            </Link>
            <Link href="/portfolio" className="consulting-button bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white consulting-button-large">
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}