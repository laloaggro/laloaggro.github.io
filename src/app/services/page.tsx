import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      description: 'Implementación de pipelines de integración y entrega continua para acelerar el desarrollo de software.',
      features: [
        'Automatización de despliegues',
        'Gestión de infraestructura como código',
        'Monitoreo y observabilidad',
        'Optimización de tiempos de entrega'
      ]
    },
    {
      id: 'transformation',
      title: 'Transformación Digital',
      description: 'Estrategias de modernización tecnológica adaptadas a entornos altamente regulados.',
      features: [
        'Evaluación de madurez digital',
        'Roadmaps de transformación',
        'Migración a la nube',
        'Gestión del cambio organizacional'
      ]
    },
    {
      id: 'change-management',
      title: 'Gestión del Cambio',
      description: 'Frameworks probados para implementar cambios tecnológicos en organizaciones complejas.',
      features: [
        'Análisis de impacto',
        'Planificación de transición',
        'Capacitación y adopción',
        'Seguimiento y optimización'
      ]
    },
    {
      id: 'cloud',
      title: 'Arquitectura Cloud',
      description: 'Diseño e implementación de soluciones escalables y seguras en la nube.',
      features: [
        'Diseño de arquitecturas cloud-native',
        'Optimización de costos',
        'Seguridad y cumplimiento',
        'Estrategias multi-cloud'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <div className="consulting-container text-center">
          <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Servicios de Consultoría</h1>
          <p className="body-text text-xl text-muted max-w-3xl mx-auto">
            Soluciones especializadas en DevOps, Transformación Digital y Gestión del Cambio 
            para organizaciones financieras y altamente reguladas.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="consulting-section bg-background">
        <div className="consulting-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="feature-card fade-in-delay-{index+1}">
                <h2 className="heading-section text-2xl mb-4">{service.title}</h2>
                <p className="body-text text-muted mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="body-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="consulting-button-primary text-sm"
                >
                  Solicitar este servicio
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para comenzar?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir cómo puedo ayudar a tu organización.
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