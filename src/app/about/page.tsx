import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 consulting-section">
        <div className="consulting-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Sobre mí</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Especialista en DevOps, Gestión del Cambio y Transformación Digital con más de 15 años 
              de experiencia en entornos financieros altamente regulados.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-50">
        <div className="consulting-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="consulting-card p-8">
                  <h2 className="text-2xl font-semibold mb-6">Mi Trayectoria</h2>
                  <div className="space-y-6 text-gray-600">
                    <p>
                      Soy un profesional autodidacta con más de 15 años de experiencia en el sector tecnológico, 
                      especializado en DevOps, Gestión del Cambio y Transformación Digital. A lo largo de mi carrera, 
                      he trabajado con organizaciones financieras y altamente reguladas, ayudándolas a modernizar 
                      sus procesos tecnológicos y adaptarse a los desafíos del entorno digital actual.
                    </p>
                    <p>
                      Mi enfoque combina conocimientos técnicos avanzados con una comprensión profunda de las 
                      necesidades organizacionales. He liderado múltiples iniciativas de transformación digital 
                      que han permitido a mis clientes mejorar su eficiencia operativa, reducir costos y aumentar 
                      su capacidad de respuesta ante los cambios del mercado.
                    </p>
                    <p>
                      Como defensor de las mejores prácticas en ingeniería de software y operaciones, he 
                      implementado soluciones DevOps que han acelerado los ciclos de entrega de software, 
                      mejorado la calidad del producto y fortalecido la colaboración entre equipos de 
                      desarrollo y operaciones.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="consulting-card p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">DevOps & CI/CD</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Cloud Architecture</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Change Management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Digital Transformation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Microservices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Observability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="consulting-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Certificaciones</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="border-b border-gray-100 pb-3">AWS Certified Solutions Architect</li>
                    <li className="border-b border-gray-100 pb-3">Certified Kubernetes Administrator</li>
                    <li className="border-b border-gray-100 pb-3">ITIL Foundation</li>
                    <li className="pb-3">Scrum Master Certified</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="consulting-section">
        <div className="consulting-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-medium text-center mb-16">Experiencia Profesional</h2>
            
            <div className="space-y-12">
              {/* Experience Item 1 */}
              <div className="consulting-card p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold">Consultor Senior DevOps & Transformación Digital</h3>
                  <span className="text-blue-600 font-medium mt-2 md:mt-0">2020 - Presente</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Lidero iniciativas de transformación digital y DevOps para clientes en el sector financiero.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Diseño e implementación de pipelines CI/CD para entornos altamente regulados</li>
                  <li>Modernización de arquitecturas legacy hacia soluciones cloud-native</li>
                  <li>Implementación de prácticas de observabilidad y monitoreo avanzado</li>
                  <li>Gestión del cambio en organizaciones con múltiples stakeholders</li>
                </ul>
              </div>
              
              {/* Experience Item 2 */}
              <div className="consulting-card p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold">Líder de Equipo DevOps</h3>
                  <span className="text-blue-600 font-medium mt-2 md:mt-0">2016 - 2020</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Responsable del diseño e implementación de la estrategia DevOps para una organización financiera.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Implementación de infraestructura como código (IaC) con Terraform</li>
                  <li>Automatización de procesos de despliegue y configuración</li>
                  <li>Creación de centros de excelencia DevOps</li>
                  <li>Capacitación de equipos en prácticas DevOps y cultura de colaboración</li>
                </ul>
              </div>
              
              {/* Experience Item 3 */}
              <div className="consulting-card p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-xl font-semibold">Ingeniero de Software Senior</h3>
                  <span className="text-blue-600 font-medium mt-2 md:mt-0">2010 - 2016</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Desarrollo de aplicaciones empresariales y sistemas distribuidos en entornos Java y .NET.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Desarrollo de aplicaciones web y servicios backend</li>
                  <li>Implementación de arquitecturas de microservicios</li>
                  <li>Optimización de bases de datos y consultas complejas</li>
                  <li>Colaboración con equipos de QA y operaciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="consulting-container text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">¿Interesado en trabajar conmigo?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir tus necesidades tecnológicas.
          </p>
          <Link href="/contact" className="consulting-button bg-white text-blue-700 hover:bg-gray-100 focus:ring-white">
            Agenda tu Consulta
          </Link>
        </div>
      </section>
    </div>
  );
}