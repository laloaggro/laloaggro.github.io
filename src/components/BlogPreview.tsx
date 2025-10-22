import Link from 'next/link';

export default function BlogPreview() {
  const posts = [
    {
      id: 1,
      title: 'Implementando DevOps en Entornos Regulados',
      excerpt: 'Descubre cómo aplicar prácticas DevOps en industrias altamente reguladas sin comprometer el cumplimiento.',
      date: '2023-10-15',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Gestión del Cambio en Transformaciones Digitales',
      excerpt: 'Estrategias probadas para gestionar el cambio humano durante procesos de transformación digital.',
      date: '2023-09-22',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Arquitecturas Cloud-Native para Finanzas',
      excerpt: 'Cómo diseñar arquitecturas cloud-native seguras y escalables para instituciones financieras.',
      date: '2023-08-30',
      readTime: '6 min'
    }
  ];

  return (
    <section className="consulting-section bg-gray-50 dark:bg-gray-800">
      <div className="consulting-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-3xl md:text-4xl mb-4">Últimos Artículos</h2>
          <p className="body-text text-lg text-muted max-w-2xl mx-auto">
            Insights y conocimientos sobre DevOps, gestión del cambio y transformación digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="feature-card transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="caption-text text-muted">{post.date}</span>
                  <span className="caption-text text-muted">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="body-text text-muted mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-accent font-medium text-sm link-hover">
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