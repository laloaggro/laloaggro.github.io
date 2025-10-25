import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <span className="badge-primary uppercase tracking-wider">
                  Sobre mí
                </span>
                <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl">
                  Mauricio Garay
                </h1>
                <p className="text-xl md:text-2xl text-muted max-w-2xl">
                  Consultor Tecnológico especializado en DevOps y Transformación Digital
                </p>
                <p className="body-text text-base md:text-lg text-muted max-w-2xl">
                  Autodidacta apasionado por la tecnología, con más de 15 años de experiencia transformando 
                  organizaciones a través de la automatización, arquitecturas cloud-native y prácticas DevOps.
                </p>
              </div>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="consulting-button-primary consulting-button-large"
                >
                  Contáctame
                </Link>
                <Link 
                  href="/portfolio" 
                  className="consulting-button-secondary consulting-button-large"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 fade-in-delay-2">
              <div className="rounded-2xl bg-gradient-to-br from-accent to-blue-800 p-8 text-white shadow-soft">
                <h3 className="text-3xl font-bold mb-2">Autodidacta</h3>
                <p className="caption-text">Aprendizaje continuo</p>
              </div>
              <div className="rounded-2xl bg-white border border-border p-8 shadow-soft dark:bg-gray-800">
                <h3 className="text-3xl font-bold text-accent mb-2">+15</h3>
                <p className="caption-text text-muted">Años de Experiencia</p>
              </div>
              <div className="rounded-2xl bg-white border border-border p-8 shadow-soft dark:bg-gray-800">
                <h3 className="text-3xl font-bold text-accent mb-2">+50</h3>
                <p className="caption-text text-muted">Proyectos Entregados</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-success to-green-600 p-8 text-white shadow-soft">
                <h3 className="text-3xl font-bold mb-2">100%</h3>
                <p className="caption-text">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="heading-section text-3xl md:text-4xl mb-4">Mi Trayectoria</h2>
              <p className="body-text text-lg text-muted max-w-2xl mx-auto">
                Desde mis inicios como autodidacta hasta convertirme en consultor tecnológico especializado
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent transform md:-translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative pl-12 md:pl-0">
                  <div className="md:w-1/2 md:ml-auto mb-8 md:mb-0">
                    <div className="feature-card">
                      <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-accent border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2"></div>
                      <span className="badge-secondary mb-3">2010</span>
                      <h3 className="text-xl font-semibold mb-3">Inicio como Autodidacta</h3>
                      <p className="body-text text-muted mb-4">
                        Comencé mi trayectoria en tecnología de forma autodidacta, aprendiendo programación 
                        y administración de sistemas por mi cuenta. Esta base me permitió desarrollar una 
                        mentalidad de aprendizaje continuo y resolución de problemas.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12 md:pl-0">
                  <div className="md:w-1/2 md:mr-auto mb-8 md:mb-0 md:ml-auto md:text-right">
                    <div className="feature-card">
                      <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-accent border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2"></div>
                      <span className="badge-secondary mb-3">2015</span>
                      <h3 className="text-xl font-semibold mb-3">Primeros Proyectos Profesionales</h3>
                      <p className="body-text text-muted mb-4">
                        Inicié mi carrera profesional trabajando en proyectos de infraestructura y 
                        automatización. Mi enfoque autodidacta me permitió aportar soluciones innovadoras 
                        a desafíos complejos.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12 md:pl-0">
                  <div className="md:w-1/2 md:ml-auto mb-8 md:mb-0">
                    <div className="feature-card">
                      <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-accent border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2"></div>
                      <span className="badge-secondary mb-3">2020</span>
                      <h3 className="text-xl font-semibold mb-3">Especialización en DevOps</h3>
                      <p className="body-text text-muted mb-4">
                        Me especialicé en prácticas DevOps y arquitecturas cloud-native, ayudando a 
                        organizaciones a acelerar su entrega de software y mejorar su confiabilidad.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-12 md:pl-0">
                  <div className="md:w-1/2 md:mr-auto mb-8 md:mb-0 md:ml-auto md:text-right">
                    <div className="feature-card">
                      <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-accent border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2"></div>
                      <span className="badge-secondary mb-3">2023</span>
                      <h3 className="text-xl font-semibold mb-3">Consultoría Tecnológica</h3>
                      <p className="body-text text-muted mb-4">
                        Fundé mi propia práctica de consultoría, enfocándome en ayudar a organizaciones 
                        complejas a navegar su transformación digital con enfoques probados y adaptados 
                        a sus necesidades específicas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Habilidades y Enfoques</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Mis áreas de especialización y enfoques para resolver desafíos tecnológicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card fade-in-delay-1">
              <div className="feature-icon-primary mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">DevOps & Automatización</h3>
              <p className="body-text text-muted">
                Implementación de pipelines CI/CD, infraestructura como código y prácticas de observabilidad.
              </p>
            </div>
            
            <div className="feature-card fade-in-delay-2">
              <div className="feature-icon-primary mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transformación Digital</h3>
              <p className="body-text text-muted">
                Estrategias de modernización tecnológica adaptadas a entornos altamente regulados.
              </p>
            </div>
            
            <div className="feature-card fade-in-delay-3">
              <div className="feature-icon-primary mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gestión del Cambio</h3>
              <p className="body-text text-muted">
                Frameworks probados para implementar cambios tecnológicos en organizaciones complejas.
              </p>
            </div>
            
            <div className="feature-card fade-in-delay-1">
              <div className="feature-icon-primary mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Arquitectura Cloud</h3>
              <p className="body-text text-muted">
                Diseño e implementación de arquitecturas escalables y seguras en múltiples proveedores cloud.
              </p>
            </div>
            
            <div className="feature-card fade-in-delay-2">
              <div className="feature-icon-primary mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Seguridad y Compliance</h3>
              <p className="body-text text-muted">
                Integración de prácticas de seguridad desde el diseño y cumplimiento de normativas regulatorias.
              </p>
            </div>
            
            <div className="feature-card fade-in-delay-3">
              <div className="feature-icon-primary mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Análisis y Métricas</h3>
              <p className="body-text text-muted">
                Implementación de sistemas de monitoreo, métricas y análisis para tomar decisiones informadas.
              </p>
            </div>
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