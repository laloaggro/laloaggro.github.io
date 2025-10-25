import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Acerca de Mauricio Garay</h1>
          <p className="body-text text-blue-100 max-w-3xl mx-auto text-xl">
            Consultor tecnológico especializado en DevOps, Transformación Digital y Gestión del Cambio
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="consulting-section">
        <div className="consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="heading-section text-3xl mb-6">Mi Trayectoria</h2>
                <p className="body-text text-lg text-muted mb-6">
                  Soy un profesional tecnológico con más de 15 años de experiencia en el sector, especializado 
                  en ayudar a organizaciones complejas a transformar sus procesos a través de la automatización, 
                  arquitecturas cloud-native y prácticas DevOps.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4 mt-8">Filosofía de Aprendizaje Autodidacta</h3>
                <p className="body-text text-muted mb-6">
                  Desde el inicio de mi carrera, he adoptado un enfoque autodidacta para el aprendizaje continuo. 
                  Esta metodología me ha permitido mantenerme al día con las últimas tecnologías y tendencias, 
                  adaptándome rápidamente a los desafíos cambiantes del entorno tecnológico.
                </p>
                
                <blockquote className="border-l-4 border-accent pl-4 my-8 italic text-muted">
                  "El aprendizaje autodidacta no es solo sobre adquirir conocimientos, sino sobre desarrollar 
                  la capacidad de aprender cualquier cosa, en cualquier momento, en cualquier lugar."
                </blockquote>
                
                <h3 className="text-2xl font-semibold mb-4 mt-8">Experiencia Profesional</h3>
                <p className="body-text text-muted mb-6">
                  A lo largo de mi carrera, he trabajado con organizaciones de diversos sectores, desde startups 
                  tecnológicas hasta grandes corporaciones financieras. Esta diversidad de experiencias me ha 
                  permitido desarrollar una perspectiva única sobre los desafíos tecnológicos y las mejores 
                  prácticas para abordarlos.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-2">Especialidades</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted">
                      <li>DevOps & CI/CD</li>
                      <li>Arquitectura Cloud-Native</li>
                      <li>Gestión del Cambio</li>
                      <li>Transformación Digital</li>
                      <li>Automatización de Infraestructura</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-2">Enfoque</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted">
                      <li>Soluciones adaptadas a cada organización</li>
                      <li>Implementación incremental y sostenible</li>
                      <li>Capacitación y transferencia de conocimiento</li>
                      <li>Medición de resultados y ROI</li>
                      <li>Enfoque en entornos regulados</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Habilidades Técnicas</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">DevOps & Automatización</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge-outline">Docker</span>
                      <span className="badge-outline">Kubernetes</span>
                      <span className="badge-outline">Jenkins</span>
                      <span className="badge-outline">GitHub Actions</span>
                      <span className="badge-outline">Terraform</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Cloud & Infraestructura</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge-outline">AWS</span>
                      <span className="badge-outline">Azure</span>
                      <span className="badge-outline">GCP</span>
                      <span className="badge-outline">Linux</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Desarrollo</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge-outline">Node.js</span>
                      <span className="badge-outline">Python</span>
                      <span className="badge-outline">React</span>
                      <span className="badge-outline">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Certificaciones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">AWS Certified DevOps Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">Kubernetes Administrator (CKA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">ITIL Foundation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">Scrum Master Professional</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Enfoque Autodidacta</h3>
                <p className="body-text text-muted mb-4">
                  Mi filosofía de aprendizaje autodidacta me ha permitido:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted">
                  <li>Mantenerme actualizado con tecnologías emergentes</li>
                  <li>Resolver problemas complejos de forma innovadora</li>
                  <li>Adaptarme rápidamente a nuevos entornos tecnológicos</li>
                  <li>Transferir habilidades de aprendizaje a equipos de trabajo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container text-center">
          <h2 className="heading-section text-3xl mb-6">¿Listo para transformar tu organización?</h2>
          <p className="body-text text-lg text-muted max-w-2xl mx-auto mb-8">
            Agenda una consulta gratuita de 30 minutos para discutir tus desafíos tecnológicos.
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