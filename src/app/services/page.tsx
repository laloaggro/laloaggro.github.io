import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: "devops",
      title: "DevOps & CI/CD",
      description: "Implementación de pipelines de integración y entrega continua adaptados a entornos altamente regulados.",
      features: [
        "Diseño e implementación de pipelines CI/CD",
        "Infraestructura como código (Terraform, Ansible)",
        "Automatización de pruebas y despliegues",
        "Gestión de configuraciones y secretos"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: "transformation",
      title: "Transformación Digital",
      description: "Estrategias y ejecución de iniciativas de modernización tecnológica para organizaciones complejas.",
      features: [
        "Evaluación de madurez tecnológica",
        "Roadmaps de transformación personalizados",
        "Modernización de arquitecturas legacy",
        "Adopción de tecnologías cloud-native"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      id: "change-management",
      title: "Gestión del Cambio",
      description: "Frameworks y metodologías probadas para implementar cambios tecnológicos exitosos.",
      features: [
        "Análisis de impacto organizacional",
        "Planificación de transición de equipos",
        "Capacitación y desarrollo de competencias",
        "Gestión de resistencias al cambio"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "cloud",
      title: "Arquitectura Cloud",
      description: "Diseño e implementación de soluciones escalables, seguras y optimizadas en la nube.",
      features: [
        "Diseño de arquitecturas cloud-native",
        "Migración de sistemas legacy a la nube",
        "Optimización de costos cloud",
        "Implementación de estrategias multi-region"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: "observability",
      title: "Observabilidad",
      description: "Implementación de soluciones de monitoreo, logging y tracing para sistemas distribuidos.",
      features: [
        "Diseño de dashboards de monitoreo",
        "Implementación de sistemas de alertas",
        "Análisis de logs y métricas",
        "Tracing distribuido y debugging"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: "microservices",
      title: "Microservicios",
      description: "Diseño e implementación de arquitecturas basadas en microservicios escalables y resilientes.",
      features: [
        "Descomposición de monolitos",
        "Diseño de APIs REST y gRPC",
        "Implementación de service mesh",
        "Patrones de comunicación entre servicios"
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="consulting-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-primary uppercase tracking-wider mb-4">
              Mis Servicios
            </span>
            <h1 className="display-hero text-4xl md:text-5xl mb-6">Consultoría Tecnológica Especializada</h1>
            <p className="body-text text-xl text-muted max-w-3xl mx-auto">
              Ofrezco servicios de consultoría especializados en DevOps, Transformación Digital y Gestión del Cambio 
              para organizaciones financieras y altamente reguladas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="consulting-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="feature-card fade-in-delay-{index % 3}">
                <div className="p-8 h-full flex flex-col">
                  <div className="feature-icon-primary mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="body-text text-muted mb-6 flex-grow">{service.description}</p>
                  <ul className="list-check mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="body-text text-muted text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="text-accent font-medium text-sm link-hover mt-auto"
                  >
                    Solicita una consulta →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="consulting-section bg-gray-50">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Mi Enfoque de Trabajo</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Un proceso estructurado y probado para garantizar resultados exitosos en cada proyecto.
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center fade-in-delay-1">
                <div className="feature-icon-primary mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Evaluación Inicial</h3>
                <p className="body-text text-muted">
                  Análisis detallado de tu situación actual, identificación de desafíos y oportunidades de mejora.
                </p>
              </div>
              <div className="text-center fade-in-delay-2">
                <div className="feature-icon-primary mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Diseño de Solución</h3>
                <p className="body-text text-muted">
                  Creación de un plan personalizado con objetivos claros, cronograma y KPIs de éxito.
                </p>
              </div>
              <div className="text-center fade-in-delay-3">
                <div className="feature-icon-primary mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Implementación</h3>
                <p className="body-text text-muted">
                  Ejecución del plan con acompañamiento continuo y ajustes según sea necesario.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center fade-in-delay-1">
                <div className="feature-icon-success mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Gestión del Cambio</h3>
                <p className="body-text text-muted">
                  Acompañamiento en la adopción de nuevas prácticas y tecnologías por parte de los equipos.
                </p>
              </div>
              <div className="text-center fade-in-delay-2">
                <div className="feature-icon-success mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Optimización Continua</h3>
                <p className="body-text text-muted">
                  Monitoreo de resultados, identificación de nuevas oportunidades y mejora continua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para comenzar tu transformación?</h2>
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