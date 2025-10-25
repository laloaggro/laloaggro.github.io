import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 'devops-best-practices',
      title: 'Mejores Prácticas DevOps para 2025',
      excerpt: 'Descubre las tendencias y prácticas más importantes en DevOps para el próximo año, incluyendo IA en pipelines, seguridad integrada y arquitecturas serverless.',
      date: '15 de octubre, 2025',
      readTime: '5 min',
      category: 'DevOps'
    },
    {
      id: 'web-accessibility-best-practices',
      title: 'Accesibilidad Web: Guía Completa',
      excerpt: 'Cómo hacer que tu sitio web sea accesible para todos los usuarios, cumpliendo con estándares WCAG 2.1 y creando experiencias inclusivas.',
      date: '1 de octubre, 2025',
      readTime: '8 min',
      category: 'Accesibilidad'
    },
    {
      id: 'cloud-migration-strategies',
      title: 'Estrategias de Migración a la Nube',
      excerpt: 'Enfoques probados para migrar aplicaciones legacy a la nube sin downtime ni pérdida de datos, incluyendo estrategias lift-and-shift y re-platforming.',
      date: '20 de septiembre, 2025',
      readTime: '10 min',
      category: 'Cloud'
    },
    {
      id: 'microservices-architecture',
      title: 'Arquitectura de Microservicios',
      excerpt: 'Guía completa para diseñar, implementar y mantener arquitecturas de microservicios escalables y resilientes en entornos empresariales.',
      date: '5 de septiembre, 2025',
      readTime: '12 min',
      category: 'Arquitectura'
    },
    {
      id: 'ci-cd-pipeline-security',
      title: 'Seguridad en Pipelines CI/CD',
      excerpt: 'Cómo integrar seguridad desde el inicio en tus pipelines de integración y entrega continua, incluyendo escaneo de vulnerabilidades y políticas de seguridad.',
      date: '18 de agosto, 2025',
      readTime: '7 min',
      category: 'Seguridad'
    },
    {
      id: 'kubernetes-best-practices',
      title: 'Mejores Prácticas en Kubernetes',
      excerpt: 'Patrones de diseño, configuraciones óptimas y estrategias de troubleshooting para clusters de Kubernetes en producción.',
      date: '2 de agosto, 2025',
      readTime: '9 min',
      category: 'Kubernetes'
    }
  ];

  const categories = [
    { name: 'Todos', count: 24 },
    { name: 'DevOps', count: 8 },
    { name: 'Cloud', count: 6 },
    { name: 'Seguridad', count: 4 },
    { name: 'Arquitectura', count: 3 },
    { name: 'Accesibilidad', count: 2 },
    { name: 'Kubernetes', count: 1 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="text-center max-w-4xl mx-auto space-y-8 fade-in">
            <div className="space-y-6">
              <span className="badge-primary uppercase tracking-wider">
                Blog Técnico
              </span>
              <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl">
                Artículos y Recursos
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">
                Conocimiento especializado en DevOps, arquitectura de sistemas y mejores prácticas técnicas
              </p>
              <p className="body-text text-base md:text-lg text-muted max-w-2xl mx-auto">
                Comparto mi experiencia y aprendizajes para ayudar a otros profesionales 
                a superar desafíos tecnológicos y avanzar en sus carreras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Search */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 text-muted hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name} <span className="opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full md:w-64 px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-800"
                />
                <svg className="w-5 h-5 text-muted absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="feature-card fade-in-delay-{(index % 3) + 1}">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="badge-secondary text-xs">{post.category}</span>
                      <span className="text-sm text-muted">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="body-text text-muted mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted">{post.readTime} de lectura</span>
                      <Link href={`/blog/${post.id}`} className="text-accent font-medium text-sm link-hover">
                        Leer más →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md bg-gray-100 text-muted hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  Anterior
                </button>
                <button className="px-3 py-1 rounded-md bg-accent text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-muted hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  2
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-muted hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  3
                </button>
                <span className="px-2 text-muted">...</span>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-muted hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  10
                </button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-muted hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  Siguiente
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <div className="feature-card">
              <h2 className="text-2xl font-semibold mb-3">¿Quieres contenido exclusivo?</h2>
              <p className="body-text text-muted mb-6">
                Suscríbete a mi newsletter para recibir artículos exclusivos, recursos descargables 
                y actualizaciones sobre mis proyectos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-grow px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-800"
                />
                <button className="consulting-button-primary whitespace-nowrap">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Interesado en colaborar?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            ¿Tienes un tema que te gustaría que abordara en mi blog? Ponte en contacto conmigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large">
              Proponer un tema
            </Link>
            <Link href="/portfolio" className="consulting-button bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white consulting-button-large">
              Ver mis servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}