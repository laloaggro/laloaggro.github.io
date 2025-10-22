import Link from 'next/link';

export default function BlogPreview() {
  const posts = [
    {
      id: 1,
      title: 'Los 5 Principios Fundamentales de la Gestión del Cambio Tecnológico',
      excerpt: 'Descubre cómo aplicar principios comprobados para asegurar la adopción exitosa de nuevas tecnologías en tu organización.',
      date: '15 de Mayo, 2023',
      readTime: '5 min lectura'
    },
    {
      id: 2,
      title: 'DevOps en Entornos Altamente Regulados',
      excerpt: 'Estrategias para implementar prácticas DevOps en industrias financieras y de salud sin comprometer el cumplimiento.',
      date: '3 de Abril, 2023',
      readTime: '8 min lectura'
    },
    {
      id: 3,
      title: 'La Importancia del Liderazgo en la Transformación Digital',
      excerpt: 'Cómo los líderes pueden guiar a sus equipos durante procesos complejos de transformación tecnológica.',
      date: '22 de Marzo, 2023',
      readTime: '6 min lectura'
    }
  ];

  return (
    <section className="consulting-section bg-gray-50 dark:bg-gray-800">
      <div className="consulting-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-3xl md:text-4xl mb-4">Últimos Artículos</h2>
          <p className="body-text text-lg text-muted max-w-2xl mx-auto">
            Insights y conocimientos sobre DevOps, Gestión del Cambio y Transformación Digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="feature-card transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="caption-text text-muted">{post.date}</span>
                  <span className="caption-text text-muted">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="body-text text-muted mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-accent font-medium text-sm link-hover"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="consulting-button-ghost consulting-button-large transform transition-all duration-300 hover:-translate-y-1"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}