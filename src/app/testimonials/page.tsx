import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carla Rodríguez",
      position: "CTO, FinanzasOnline",
      content: "Mauricio transformó nuestra infraestructura tecnológica en solo 6 meses. La implementación de prácticas DevOps redujo nuestros tiempos de despliegue en un 85%. Su enfoque metodológico y capacidad para explicar conceptos complejos de manera clara fueron fundamentales para el éxito del proyecto.",
      avatar: "/placeholder.svg",
      project: "Modernización de Infraestructura",
      date: "Marzo 2025"
    },
    {
      name: "Roberto Fernández",
      position: "Director de TI, Banco Regional",
      content: "La gestión del cambio implementada por Mauricio fue clave para nuestra transformación digital. Logramos una adopción del 95% en nuestros equipos gracias a su enfoque personalizado y su capacidad para entender nuestras necesidades específicas como organización financiera regulada.",
      avatar: "/placeholder.svg",
      project: "Transformación Digital",
      date: "Diciembre 2024"
    },
    {
      name: "Ana Martínez",
      position: "Gerente de Proyectos, TechSolutions",
      content: "El enfoque autodidacta de Mauricio se refleja en su capacidad para resolver problemas complejos con soluciones innovadoras. Su trabajo en nuestro sistema de gestión de proyectos aumentó nuestra eficiencia en un 40% y mejoró significativamente la satisfacción del cliente.",
      avatar: "/placeholder.svg",
      project: "Sistema de Gestión de Proyectos",
      date: "Agosto 2024"
    },
    {
      name: "Diego Silva",
      position: "VP de Ingeniería, StartupScale",
      content: "Contratamos a Mauricio para ayudarnos a escalar nuestra infraestructura durante un período de crecimiento explosivo. Su experiencia en arquitecturas cloud-native y prácticas DevOps nos permitió manejar 10x más tráfico sin aumentar proporcionalmente los costos de infraestructura.",
      avatar: "/placeholder.svg",
      project: "Escalabilidad de Infraestructura",
      date: "Mayo 2024"
    },
    {
      name: "María González",
      position: "Directora de Operaciones, RetailTech",
      content: "La implementación de nuestro sistema de análisis de datos con el apoyo de Mauricio revolucionó nuestra toma de decisiones. Ahora podemos anticipar tendencias del mercado con 85% de precisión, algo que antes era impensable.",
      avatar: "/placeholder.svg",
      project: "Sistema de Análisis de Datos",
      date: "Febrero 2024"
    },
    {
      name: "Carlos Pérez",
      position: "Jefe de Innovación, Gobierno Digital",
      content: "Mauricio lideró nuestra iniciativa de transformación digital en un entorno altamente regulado. Su capacidad para equilibrar innovación con cumplimiento normativo fue impresionante. El proyecto se entregó 2 semanas antes de lo previsto y bajo presupuesto.",
      avatar: "/placeholder.svg",
      project: "Transformación Digital Gubernamental",
      date: "Noviembre 2023"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="text-center max-w-4xl mx-auto space-y-8 fade-in">
            <div className="space-y-6">
              <span className="badge-primary uppercase tracking-wider">
                Testimonios
              </span>
              <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl">
                Lo que dicen mis clientes
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">
                Experiencias reales de organizaciones que han transformado sus procesos tecnológicos
              </p>
              <p className="body-text text-base md:text-lg text-muted max-w-2xl mx-auto">
                Descubre cómo he ayudado a líderes tecnológicos a superar desafíos complejos 
                y alcanzar resultados excepcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="feature-card fade-in-delay-{(index % 3) + 1}">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gray-500 text-xs">Foto</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="body-text text-muted mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                    <span className="text-sm text-accent font-medium">{testimonial.project}</span>
                    <span className="text-sm text-muted">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">95%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfacción del Cliente</h3>
              <p className="body-text text-muted text-sm">
                Clientes que recomiendan mis servicios
              </p>
            </div>
            
            <div className="text-center fade-in-delay-2">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">50+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proyectos Completados</h3>
              <p className="body-text text-muted text-sm">
                Soluciones tecnológicas entregadas
              </p>
            </div>
            
            <div className="text-center fade-in-delay-3">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte Continuo</h3>
              <p className="body-text text-muted text-sm">
                Disponibilidad para emergencias
              </p>
            </div>
            
            <div className="text-center fade-in-delay-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">15+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Años de Experiencia</h3>
              <p className="body-text text-muted text-sm">
                Transformando organizaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para unirte a estos clientes satisfechos?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir cómo puedo ayudarte.
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