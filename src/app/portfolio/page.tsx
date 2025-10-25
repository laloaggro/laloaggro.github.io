import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="text-center max-w-4xl mx-auto space-y-8 fade-in">
            <div className="space-y-6">
              <span className="badge-primary uppercase tracking-wider">
                Portfolio
              </span>
              <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl">
                Proyectos Destacados
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">
                Soluciones tecnológicas innovadoras que han transformado organizaciones complejas
              </p>
              <p className="body-text text-base md:text-lg text-muted max-w-2xl mx-auto">
                Descubre cómo he ayudado a organizaciones financieras y altamente reguladas 
                a acelerar su entrega de software, mejorar su confiabilidad y navegar su transformación digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="feature-card fade-in-delay-{(index % 2) + 1}">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="badge-secondary">{project.year}</span>
                </div>
                <p className="body-text text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="badge-outline text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="badge-outline text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  {project.page ? (
                    <Link 
                      href={project.page} 
                      className="consulting-button-primary text-sm"
                    >
                      Ver detalles
                    </Link>
                  ) : (
                    <Link 
                      href={`/portfolio/${project.id}`} 
                      className="consulting-button-primary text-sm"
                    >
                      Ver detalles
                    </Link>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="consulting-button-secondary text-sm"
                    >
                      Código fuente
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Mi Enfoque en Proyectos</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Cómo trabajo con mis clientes para entregar soluciones tecnológicas exitosas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center fade-in-delay-1">
              <div className="feature-icon-primary mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Investigación y Análisis</h3>
              <p className="body-text text-muted">
                Comprendo a fondo los desafíos y objetivos del cliente para diseñar soluciones adecuadas.
              </p>
            </div>
            
            <div className="feature-card text-center fade-in-delay-2">
              <div className="feature-icon-primary mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Desarrollo e Implementación</h3>
              <p className="body-text text-muted">
                Construyo e implemento soluciones con las mejores prácticas y tecnologías adecuadas.
              </p>
            </div>
            
            <div className="feature-card text-center fade-in-delay-3">
              <div className="feature-icon-primary mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Evaluación y Optimización</h3>
              <p className="body-text text-muted">
                Evalúo resultados y optimizo continuamente para maximizar el impacto y valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir cómo puedo ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large">
              Agenda tu Consulta
            </Link>
            <a href="#" className="consulting-button bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white consulting-button-large">
              Ver mi calendario
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}