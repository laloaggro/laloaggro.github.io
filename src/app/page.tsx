import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { projects } from '@/data';
import BlogPreview from '@/components/BlogPreview';

export default function Home() {
  // Filtrar proyectos destacados
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  const testimonials = [
    {
      name: "Carla Rodríguez",
      position: "CTO, FinanzasOnline",
      content: "Mauricio transformó nuestra infraestructura tecnológica en solo 6 meses. La implementación de prácticas DevOps redujo nuestros tiempos de despliegue en un 85%.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Roberto Fernández",
      position: "Director de TI, Banco Regional",
      content: "La gestión del cambio implementada por Mauricio fue clave para nuestra transformación digital. Logramos una adopción del 95% en nuestros equipos.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Ana Martínez",
      position: "Gerente de Proyectos, TechSolutions",
      content: "El enfoque autodidacta de Mauricio se refleja en su capacidad para resolver problemas complejos con soluciones innovadoras.",
      avatar: "/placeholder.svg"
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse bg-gradient-to-br from-hero-gradient-start via-blue-50 to-hero-gradient-end dark:from-hero-gradient-start dark:via-gray-900 dark:to-hero-gradient-end">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <span className="badge-primary uppercase tracking-wider animate-fade-in-up">
                  Consultoría Tecnológica
                </span>
                <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl animate-fade-in-up animation-delay-200">
                  Mauricio Garay
                </h1>
                <p className="text-xl md:text-2xl text-muted max-w-2xl animate-fade-in-up animation-delay-400">
                  Especialista en DevOps, Gestión del Cambio y Transformación Digital
                </p>
                <p className="body-text text-base md:text-lg text-muted max-w-2xl animate-fade-in-up animation-delay-600">
                  Transformo equipos y procesos a través de automatización, arquitecturas cloud-native 
                  y prácticas DevOps en organizaciones de alto impacto.
                </p>
              </div>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                <Link 
                  href="/portfolio" 
                  className="consulting-button-primary consulting-button-large shine-effect"
                >
                  Ver Proyectos
                </Link>
                <Link 
                  href="/contact" 
                  className="consulting-button-secondary consulting-button-large"
                >
                  Agenda una Consulta
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 pt-8 animate-fade-in-up animation-delay-1000">
                <span className="text-muted caption-text">Sígueme en:</span>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/laloaggro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/mauricio-garay-veas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={24} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors transform hover:-translate-y-1 duration-300"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-fade-in-right">
              <div className="relative z-10 rounded-2xl bg-gradient-to-br from-accent to-blue-800 p-1 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                      <div className="h-4 bg-gradient-to-r from-accent to-blue-800 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-up animation-delay-1200">
            <div className="rounded-2xl bg-gradient-to-br from-accent to-blue-800 p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold mb-2">+15</h3>
              <p className="caption-text">Años de Experiencia</p>
            </div>
            <div className="rounded-2xl bg-card-bg border border-card-border p-6 shadow-xl dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold text-accent mb-2">+50</h3>
              <p className="caption-text text-muted">Proyectos Entregados</p>
            </div>
            <div className="rounded-2xl bg-card-bg border border-card-border p-6 shadow-xl dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold text-accent mb-2">100%</h3>
              <p className="caption-text text-muted">Clientes Satisfechos</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-success to-green-600 p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="caption-text">Soporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="consulting-section bg-background">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Servicios de Consultoría</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Ofrezco soluciones especializadas en DevOps, Transformación Digital y Gestión del Cambio 
              para organizaciones financieras y altamente reguladas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card fade-in-delay-1 transform transition-all duration-300 hover:-translate-y-2">
              <div className="feature-icon-primary">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">DevOps & Cloud</h3>
              <p className="body-text text-muted mb-4">
                Automatización de pipelines, arquitecturas cloud-native y optimización de infraestructura.
              </p>
              <Link href="/services#devops" className="text-accent font-medium text-sm link-hover">
                Saber más →
              </Link>
            </div>
            
            <div className="feature-card fade-in-delay-2 transform transition-all duration-300 hover:-translate-y-2">
              <div className="feature-icon-primary">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transformación Digital</h3>
              <p className="body-text text-muted mb-4">
                Estrategias de modernización tecnológica adaptadas a entornos altamente regulados.
              </p>
              <Link href="/services#transformation" className="text-accent font-medium text-sm link-hover">
                Saber más →
              </Link>
            </div>
            
            <div className="feature-card fade-in-delay-3 transform transition-all duration-300 hover:-translate-y-2">
              <div className="feature-icon-primary">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gestión del Cambio</h3>
              <p className="body-text text-muted mb-4">
                Frameworks probados para implementar cambios tecnológicos en organizaciones complejas.
              </p>
              <Link href="/services#change-management" className="text-accent font-medium text-sm link-hover">
                Saber más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-900">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Proyectos Destacados</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Soluciones tecnológicas innovadoras que han transformado organizaciones complejas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="feature-card fade-in-delay-{index+1} transform transition-all duration-300 hover:-translate-y-1">
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
                      className="text-accent font-medium text-sm link-hover"
                    >
                      Ver detalles →
                    </Link>
                  ) : (
                    <Link 
                      href={`/portfolio/${project.id}`} 
                      className="text-accent font-medium text-sm link-hover"
                    >
                      Ver detalles →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="consulting-button-ghost consulting-button-large"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="consulting-section bg-background">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Lo que dicen mis clientes</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Experiencias reales de organizaciones que han transformado sus procesos tecnológicos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="feature-card transform transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-blue-800 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="body-text text-muted mb-4 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/testimonials" 
              className="consulting-button-ghost consulting-button-large"
            >
              Ver todos los testimonios
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <BlogPreview />

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para transformar tu organización?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir tus desafíos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large shine-effect">
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