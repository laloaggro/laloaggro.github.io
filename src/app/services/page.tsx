import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'devops',
      title: 'DevOps & Automatización',
      description: 'Implementación de pipelines CI/CD, automatización de infraestructura y prácticas DevOps para acelerar el tiempo de entrega.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        'Pipeline CI/CD personalizado',
        'Automatización de infraestructura (IaC)',
        'Contenedores y orquestación (Docker/K8s)',
        'Monitoreo y observabilidad',
        'Gestión de configuración'
      ]
    },
    {
      id: 'transformation',
      title: 'Transformación Digital',
      description: 'Estrategias de modernización tecnológica adaptadas a entornos altamente regulados y sectores tradicionales.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: [
        'Evaluación de madurez digital',
        'Roadmap de transformación',
        'Migración a la nube',
        'Modernización de aplicaciones',
        'Integración de sistemas'
      ]
    },
    {
      id: 'change-management',
      title: 'Gestión del Cambio',
      description: 'Frameworks probados para implementar cambios tecnológicos en organizaciones complejas con enfoque en adopción del usuario.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        'Análisis de impacto del cambio',
        'Plan de comunicación del cambio',
        'Capacitación y desarrollo de habilidades',
        'Gestión de resistencia al cambio',
        'Medición de adopción y éxito'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Servicios de Consultoría</h1>
          <p className="body-text text-blue-100 max-w-3xl mx-auto text-xl">
            Soluciones especializadas en DevOps, Transformación Digital y Gestión del Cambio para organizaciones de alto impacto
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="consulting-section">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-6">Enfoque Integral</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Combino experiencia técnica con enfoques probados de gestión del cambio para garantizar 
              la adopción exitosa de soluciones tecnológicas en entornos complejos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="feature-card text-center" id={service.id}>
                <div className="feature-icon-primary mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="body-text text-muted mb-6">{service.description}</p>
                <ul className="text-left space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-6">Metodología de Trabajo</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Mi enfoque se basa en la implementación incremental, la transferencia de conocimiento 
              y la medición continua de resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Evaluación Inicial</h3>
                    <p className="body-text text-muted">
                      Análisis detallado del estado actual, identificación de oportunidades y definición 
                      de objetivos claros alineados con la estrategia del negocio.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Diseño de Solución</h3>
                    <p className="body-text text-muted">
                      Creación de un plan personalizado con roadmap detallado, identificación de riesgos 
                      y definición de KPIs para medir el éxito.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementación</h3>
                    <p className="body-text text-muted">
                      Ejecución del plan con enfoque iterativo, involucrando a los equipos clave y 
                      asegurando la transferencia de conocimiento.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Optimización Continua</h3>
                    <p className="body-text text-muted">
                      Monitoreo de resultados, ajustes basados en feedback y plan de sostenibilidad 
                      para garantizar el éxito a largo plazo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold mb-6">Beneficios Clave</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-accent mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-medium">Resultados Medibles</h4>
                    <p className="text-muted text-sm">KPIs definidos desde el inicio para evaluar el impacto real</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-medium">Enfoque en el Cambio Cultural</h4>
                    <p className="text-muted text-sm">No solo tecnología, sino también transformación de mindset</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-medium">Adaptado a tu Contexto</h4>
                    <p className="text-muted text-sm">Soluciones personalizadas para tu organización específica</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-medium">Sostenibilidad</h4>
                    <p className="text-muted text-sm">Enfoque en capacidades internas para mantener el progreso</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-medium">Aprendizaje Continuo</h4>
                    <p className="text-muted text-sm">Fomento de la cultura autodidacta en tu organización</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="consulting-container text-center">
          <h2 className="heading-section text-3xl mb-6">¿Listo para comenzar tu transformación?</h2>
          <p className="body-text text-lg text-muted max-w-2xl mx-auto mb-8">
            Agenda una consulta gratuita de 30 minutos para discutir cómo puedo ayudar a tu organización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button-primary consulting-button-large">
              Agenda tu Consulta
            </Link>
            <Link href="/portfolio" className="consulting-button-secondary consulting-button-large">
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}