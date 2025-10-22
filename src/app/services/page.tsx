import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      description: 'Implementación de pipelines de integración y entrega continua para acelerar el desarrollo y despliegue de software.',
      features: [
        'Automatización de pipelines',
        'Infraestructura como código',
        'Monitoreo y observabilidad',
        'Gestión de configuraciones'
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'transformation',
      title: 'Transformación Digital',
      description: 'Estrategias integrales para modernizar procesos y tecnologías en entornos altamente regulados.',
      features: [
        'Evaluación de madurez digital',
        'Roadmaps de transformación',
        'Gestión del cambio',
        'Migración a la nube'
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      id: 'change-management',
      title: 'Gestión del Cambio',
      description: 'Frameworks probados para implementar cambios tecnológicos con alta tasa de adopción.',
      features: [
        'Análisis de impacto',
        'Comunicación efectiva',
        'Capacitación y onboarding',
        'Seguimiento y métricas'
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'cloud',
      title: 'Arquitectura Cloud',
      description: 'Diseño e implementación de soluciones escalables y seguras en plataformas cloud.',
      features: [
        'Diseño de arquitecturas',
        'Optimización de costos',
        'Seguridad en la nube',
        'Estrategias multi-cloud'
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="consulting-section sparse bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="consulting-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Servicios</h1>
            <p className="body-text text-xl text-muted max-w-2xl mx-auto">
              Ofrezco soluciones especializadas en DevOps, Transformación Digital y Gestión del Cambio 
              para organizaciones financieras y altamente reguladas.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="feature-card fade-in-delay-{index+1} transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="feature-icon-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="body-text text-muted mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="body-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/services/${service.id}`} 
                  className="consulting-button-primary"
                >
                  Saber más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Mi Enfoque</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Un proceso estructurado para garantizar resultados exitosos en cada proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Diagnóstico', description: 'Evaluación detallada de procesos y tecnologías actuales.' },
              { number: '02', title: 'Planificación', description: 'Desarrollo de estrategias personalizadas y roadmaps.' },
              { number: '03', title: 'Implementación', description: 'Ejecución con seguimiento continuo y ajustes.' },
              { number: '04', title: 'Optimización', description: 'Mejora continua y transferencia de conocimiento.' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="body-text text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para transformar tu organización?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir tus desafíos tecnológicos.
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