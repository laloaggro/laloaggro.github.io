import Link from 'next/link';

export default function FloresVictoriaPage() {
  const projectDetails = {
    title: "Flores Victoria",
    description: "Plataforma e-commerce cloud-native con 13+ microservicios, stack completo de observabilidad y arquitectura resiliente lista para producción.",
    technologies: ['Kubernetes', 'Docker', 'Microservices', 'Prometheus', 'Grafana', 'CI/CD', 'Terraform', 'AWS'],
    githubUrl: "https://github.com/laloaggro/Flores-Victoria-",
    liveUrl: "#",
    image: "/placeholder.svg",
    year: "2023",
    category: "E-commerce Platform"
  };

  const architectureDetails = [
    {
      title: "Arquitectura",
      items: [
        "Arquitectura de microservicios con 13+ servicios independientes",
        "Despliegue en Kubernetes con Helm charts",
        "Patrones de diseño cloud-native (Circuit Breaker, Retry, Bulkhead)",
        "Balanceo de carga y autoescalado horizontal"
      ]
    },
    {
      title: "DevOps",
      items: [
        "Pipeline CI/CD con GitHub Actions",
        "Infraestructura como código con Terraform",
        "Contenedores Docker optimizados",
        "Gestión de configuraciones con ConfigMap y Secrets"
      ]
    },
    {
      title: "Observabilidad",
      items: [
        "Monitoreo con Prometheus y Grafana",
        "Logging centralizado con ELK stack",
        "Trazabilidad distribuida con Jaeger",
        "Alertas automatizadas y dashboards personalizados"
      ]
    },
    {
      title: "Seguridad",
      items: [
        "Autenticación JWT y OAuth2",
        "Control de acceso basado en roles (RBAC)",
        "Encriptación de datos en tránsito y reposo",
        "Escaneo de vulnerabilidades en imágenes Docker"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6 fade-in">
            <Link href="/portfolio" className="inline-block text-sm text-gray-500 hover:text-black transition-colors">
              ← Volver al portfolio
            </Link>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-medium">{projectDetails.title}</h1>
                <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {projectDetails.category}
                </span>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl">
                {projectDetails.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projectDetails.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href={projectDetails.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm border border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Ver en GitHub
              </a>
              {projectDetails.liveUrl !== "#" && (
                <a 
                  href={projectDetails.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm border border-gray-300 hover:border-black transition-colors duration-300"
                >
                  Ver en vivo
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 h-64 md:h-96 flex items-center justify-center">
              <span className="text-gray-500">Imagen del proyecto</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-medium mb-6">Detalles del Proyecto</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Flores Victoria es una plataforma e-commerce diseñada desde cero con principios cloud-native, 
                  priorizando la escalabilidad, resiliencia y observabilidad. El proyecto demuestra mi experiencia 
                  en arquitectura de microservicios y prácticas DevOps en un entorno de producción.
                </p>
                <p>
                  La plataforma maneja más de 1000 transacciones diarias con una disponibilidad del 99.9%, 
                  implementando patrones de diseño avanzados y una infraestructura completamente automatizada.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-medium mb-6">Resultados</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Tiempo de despliegue</span>
                  <span className="font-medium">Reducido en 80%</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Disponibilidad</span>
                  <span className="font-medium">99.9%</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Escalabilidad</span>
                  <span className="font-medium">10x capacidad</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Costos operacionales</span>
                  <span className="font-medium">Reducidos en 40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Detalles Técnicos</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {architectureDetails.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 slide-in">
                  <h3 className="text-lg font-medium mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="border-t border-gray-100 pt-12 text-center">
            <h3 className="text-xl font-medium mb-4">¿Interesado en un proyecto similar?</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Pongámonos en contacto para discutir cómo puedo ayudarte a construir soluciones tecnológicas 
              escalables y resilientes para tu negocio.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 text-sm border border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}