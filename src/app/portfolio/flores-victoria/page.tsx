import Link from 'next/link';

export default function FloresVictoriaProject() {
  const technicalDetails = {
    architecture: [
      "Arquitectura de microservicios con 13+ servicios independientes",
      "API Gateway como punto de entrada único",
      "Balanceo de carga y descubrimiento de servicios con Kubernetes",
      "Comunicación asíncrona entre servicios con RabbitMQ",
      "Caché distribuida con Redis para mejorar el rendimiento"
    ],
    technologies: [
      "Node.js con Express para servicios backend",
      "MongoDB para datos no estructurados",
      "PostgreSQL para datos estructurados",
      "Redis para caché y sesiones",
      "RabbitMQ para mensajería asíncrona",
      "Docker para contenerización",
      "Kubernetes para orquestación de contenedores"
    ],
    observability: [
      "Stack ELK (Elasticsearch, Logstash, Kibana) para logging centralizado",
      "Métricas con Prometheus",
      "Dashboards de monitoreo con Grafana",
      "Trazabilidad distribuida con Jaeger",
      "Alertas automatizadas para condiciones críticas"
    ],
    security: [
      "Autenticación JWT para seguridad de APIs",
      "Comunicación segura con TLS/SSL",
      "Gestión segura de secretos con Kubernetes Secrets",
      "Validación y sanitización de entradas",
      "Protección contra ataques comunes (XSS, CSRF, etc.)"
    ],
    deployment: [
      "CI/CD pipelines con GitHub Actions",
      "Despliegue blue-green para minimizar downtime",
      "Auto-escalado horizontal basado en métricas",
      "Gestión de configuraciones con ConfigMaps",
      "Backups automatizados de bases de datos"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/portfolio" className="text-blue-600 hover:underline">
            ← Volver al Portfolio
          </Link>
        </nav>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Flores Victoria</h1>
              <p className="text-xl text-gray-600">Plataforma de E-commerce con Arquitectura de Microservicios</p>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Descripción del Proyecto</h2>
              <p className="text-gray-600 mb-4">
                Flores Victoria es una plataforma de comercio electrónico completa para una florería, construida con 
                una arquitectura de microservicios. La aplicación permite a los usuarios navegar por productos, 
                realizar pedidos, gestionar carritos de compras y más. El proyecto está diseñado como sistema 
                listo para producción con todas las características necesarias para garantizar un servicio de 
                alta calidad, seguridad y escalabilidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Arquitectura de Microservicios</h2>
              <p className="text-gray-600 mb-4">
                El sistema está compuesto por los siguientes microservicios:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>API Gateway - Punto de entrada único para todas las solicitudes</li>
                <li>Auth Service - Gestión de autenticación y autorización</li>
                <li>User Service - Gestión de usuarios y perfiles</li>
                <li>Product Service - Catálogo y gestión de productos florales</li>
                <li>Cart Service - Gestión de carritos de compra</li>
                <li>Order Service - Procesamiento de pedidos</li>
                <li>Review Service - Sistema de reseñas y calificaciones</li>
                <li>Wishlist Service - Lista de deseos de usuarios</li>
                <li>Contact Service - Formulario de contacto</li>
                <li>Audit Service - Sistema de auditoría y registro de eventos</li>
                <li>Messaging Service - Sistema avanzado de mensajería con RabbitMQ</li>
                <li>I18n Service - Servicio de internacionalización</li>
                <li>Analytics Service - Sistema de análisis y reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Tecnologías Utilizadas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Backend & Infraestructura</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Express</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Docker</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Kubernetes</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">RabbitMQ</span>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Redis</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bases de Datos & Observabilidad</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">MongoDB</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">PostgreSQL</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Prometheus</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Grafana</span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">ELK Stack</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Características Técnicas</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Arquitectura</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {technicalDetails.architecture.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tecnologías</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {technicalDetails.technologies.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Observabilidad</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {technicalDetails.observability.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Seguridad</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {technicalDetails.security.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Despliegue</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {technicalDetails.deployment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Logros del Proyecto</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Arquitectura de microservicios completamente modernizada con 13+ servicios independientes</li>
                <li>Implementación de stack completo de observabilidad para monitoreo en tiempo real</li>
                <li>Desarrollo de pipelines CI/CD automatizados con GitHub Actions</li>
                <li>Integración de seguridad avanzada con autenticación JWT y comunicación TLS</li>
                <li>Configuración de autoescalado y alta disponibilidad en entorno Docker/Kubernetes</li>
                <li>Documentación técnica extensa cubriendo arquitectura, API y procedimientos operacionales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Enlaces del Proyecto</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/laloaggro/Flores-Victoria-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Repositorio GitHub
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}