import Link from 'next/link';

export default function FloresVictoriaProject() {
  const projectDetails = {
    title: "Flores Victoria - E-commerce Enterprise",
    description: "Plataforma e-commerce de florería con arquitectura de microservicios, observabilidad completa y mejores prácticas de la industria.",
    year: "2025",
    technologies: [
      "Node.js", "Docker", "Kubernetes", "MongoDB", 
      "PostgreSQL", "Redis", "RabbitMQ", "Next.js",
      "TypeScript", "Tailwind CSS", "Jest", "Playwright"
    ],
    challenges: [
      "Implementar una arquitectura de microservicios escalable",
      "Garantizar alta disponibilidad y tolerancia a fallos",
      "Integrar múltiples bases de datos y sistemas de mensajería",
      "Implementar prácticas DevOps y CI/CD completas"
    ],
    solutions: [
      "Arquitectura basada en 9 microservicios especializados",
      "Implementación de patrones de resiliencia y circuit breakers",
      "Uso de contenedores Docker y orquestación con Kubernetes",
      "Pipeline CI/CD con GitHub Actions y despliegue automatizado"
    ],
    results: [
      "95+ tests automatizados con cobertura del 60%+",
      "Tiempo de respuesta promedio <200ms",
      "Disponibilidad del 99.9% en producción",
      "Despliegues diarios sin downtime"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <span className="badge-primary uppercase tracking-wider">
                  Proyecto Destacado
                </span>
                <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl">
                  {projectDetails.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted max-w-2xl">
                  Plataforma e-commerce enterprise para florería con arquitectura de microservicios
                </p>
                <p className="body-text text-base md:text-lg text-muted max-w-2xl">
                  {projectDetails.description}
                </p>
              </div>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://github.com/laloaggro/Flores-Victoria-" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="consulting-button-primary consulting-button-large"
                >
                  Ver Código Fuente
                </a>
                <Link 
                  href="/contact" 
                  className="consulting-button-secondary consulting-button-large"
                >
                  Trabajemos Juntos
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 fade-in-delay-2">
              <div className="rounded-2xl bg-gradient-to-br from-accent to-blue-800 p-8 text-white shadow-soft">
                <h3 className="text-3xl font-bold mb-2">9+</h3>
                <p className="caption-text">Microservicios</p>
              </div>
              <div className="rounded-2xl bg-white border border-border p-8 shadow-soft dark:bg-gray-800">
                <h3 className="text-3xl font-bold text-accent mb-2">4</h3>
                <p className="caption-text text-muted">Bases de Datos</p>
              </div>
              <div className="rounded-2xl bg-white border border-border p-8 shadow-soft dark:bg-gray-800">
                <h3 className="text-3xl font-bold text-accent mb-2">95+</h3>
                <p className="caption-text text-muted">Tests Automatizados</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-success to-green-600 p-8 text-white shadow-soft">
                <h3 className="text-3xl font-bold mb-2">60%+</h3>
                <p className="caption-text">Cobertura de Tests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="heading-section text-3xl md:text-4xl mb-4">Detalles del Proyecto</h2>
              <p className="body-text text-lg text-muted max-w-2xl mx-auto">
                Una plataforma e-commerce de clase enterprise construida con las mejores prácticas de la industria
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Año</h3>
                <p className="text-3xl font-bold text-accent">{projectDetails.year}</p>
              </div>
              
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Industria</h3>
                <p className="text-3xl font-bold text-accent">E-commerce</p>
              </div>
              
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-3">Rol</h3>
                <p className="text-3xl font-bold text-accent">Arquitecto Principal</p>
              </div>
            </div>
            
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-3">
                {projectDetails.technologies.map((tech, index) => (
                  <span key={index} className="badge-outline">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="fade-in">
                <h3 className="text-2xl font-semibold mb-6">Desafíos</h3>
                <div className="space-y-6">
                  {projectDetails.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <div className="feature-icon-primary flex-shrink-0 mt-1 mr-4">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="body-text text-muted">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="fade-in-delay-2">
                <h3 className="text-2xl font-semibold mb-6">Soluciones</h3>
                <div className="space-y-6">
                  {projectDetails.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start">
                      <div className="feature-icon-primary flex-shrink-0 mt-1 mr-4">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="body-text text-muted">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="heading-section text-3xl md:text-4xl mb-4">Resultados</h2>
              <p className="body-text text-lg text-muted max-w-2xl mx-auto">
                Métricas y logros alcanzados con la implementación
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectDetails.results.map((result, index) => (
                <div key={index} className="feature-card fade-in-delay-{(index % 2) + 1}">
                  <div className="flex items-start">
                    <div className="feature-icon-primary flex-shrink-0 mt-1 mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="body-text text-muted">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Interesado en un proyecto similar?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Trabajemos juntos para transformar tu negocio con soluciones tecnológicas de clase enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large">
              Contáctame
            </Link>
            <Link href="/portfolio" className="consulting-button bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white consulting-button-large">
              Ver otros proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}