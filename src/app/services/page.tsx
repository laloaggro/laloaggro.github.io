export default function Services() {
  const services = [
    {
      title: "Gestión del Cambio IT",
      description: "Implementación de procesos de gestión del cambio en entornos altamente regulados, asegurando cumplimiento normativo y minimizando riesgos operativos.",
      features: [
        "Diseño e implementación de procesos de cambio",
        "Gestión de comités de cambio (CAB)",
        "Automatización de aprobaciones",
        "Auditorías de cumplimiento",
        "Calendarios maestros de despliegue"
      ],
      icon: "🔄"
    },
    {
      title: "DevOps & CI/CD",
      description: "Transformación DevOps para acelerar la entrega de software con calidad y confianza.",
      features: [
        "Diseño e implementación de pipelines CI/CD",
        "Automatización de despliegues",
        "Gestión de infraestructura como código",
        "Integración de prácticas SRE",
        "Gestión de secretos y seguridad"
      ],
      icon: "⚙️"
    },
    {
      title: "Arquitectura Cloud-Native",
      description: "Diseño e implementación de soluciones escalables y resilientes basadas en microservicios.",
      features: [
        "Diseño de arquitecturas de microservicios",
        "Contenerización con Docker",
        "Orquestación con Kubernetes",
        "Observabilidad y monitoreo",
        "Auto-escalado y alta disponibilidad"
      ],
      icon: "☁️"
    },
    {
      title: "Transformación Digital",
      description: "Estrategias y ejecución de iniciativas de transformación digital para modernizar procesos y sistemas.",
      features: [
        "Evaluación de madurez tecnológica",
        "Roadmaps de transformación",
        "Gestión del cambio organizacional",
        "Métricas de éxito y KPIs",
        "Cumplimiento normativo"
      ],
      icon: "🚀"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Servicios</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Soluciones especializadas para impulsar la excelencia tecnológica en su organización
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</div>
                      <p className="ml-2 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">¿Listo para comenzar?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o necesitas ayuda para modernizar tus procesos tecnológicos? 
            Estoy aquí para ayudarte a alcanzar tus objetivos.
          </p>
          <a 
            href="mailto:mauriciogarayveas@gmail.com" 
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>
    </div>
  );
}