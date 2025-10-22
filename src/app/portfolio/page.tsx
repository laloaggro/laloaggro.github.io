import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Portfolio() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="consulting-section sparse bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="consulting-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Portfolio</h1>
            <p className="body-text text-xl text-muted max-w-2xl mx-auto">
              Descubre cómo he ayudado a organizaciones a transformar sus procesos tecnológicos 
              y alcanzar sus objetivos digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Proyectos Destacados</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Casos de éxito donde implementé soluciones innovadoras para desafíos complejos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="feature-card transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Otros Proyectos</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Una selección de otros proyectos donde he contribuido significativamente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="feature-card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">{project.title}</h3>
                  <span className="badge-secondary text-xs">{project.year}</span>
                </div>
                <p className="body-text text-muted text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="badge-outline text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Trabajemos juntos para transformar tu organización y alcanzar tus objetivos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large">
              Contáctame
            </Link>
            <Link href="/services" className="consulting-button bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white consulting-button-large">
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}