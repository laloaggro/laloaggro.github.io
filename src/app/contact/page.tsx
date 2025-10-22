import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <div className="consulting-container text-center">
          <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Contacto</h1>
          <p className="body-text text-xl text-muted max-w-3xl mx-auto">
            ¿Listo para transformar tu organización? Agenda una consulta gratuita de 30 minutos 
            para discutir tus desafíos tecnológicos.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="consulting-section bg-background">
        <div className="consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-section text-3xl mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="feature-icon-primary mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                    <p className="body-text text-muted">+56 9 6360 3177</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="feature-icon-primary mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="body-text text-muted">mauriciogarayveas@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="feature-icon-primary mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
                    <p className="body-text text-muted">Santiago, Chile<br />100% Remoto</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Horario de Atención</h3>
                <p className="body-text text-muted">
                  Lunes a Viernes: 9:00 AM - 6:00 PM (GMT-3)<br />
                  Disponibilidad flexible para reuniones fuera del horario habitual
                </p>
              </div>
            </div>
            
            <div>
              <div className="feature-card">
                <h2 className="heading-section text-2xl mb-6">Agenda tu Consulta</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-background"
                      placeholder="Cuéntame sobre tus desafíos tecnológicos..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="consulting-button-primary w-full consulting-button-large"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
              
              <div className="mt-8 text-center">
                <p className="body-text text-muted">
                  ¿Prefieres agendar directamente?{' '}
                  <Link href="#" className="text-accent font-medium link-hover">
                    Reserva un slot en mi calendario
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}