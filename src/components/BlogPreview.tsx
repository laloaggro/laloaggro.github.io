import Link from 'next/link';

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 'devops-best-practices',
      title: 'Mejores Prácticas DevOps para 2025',
      excerpt: 'Descubre las tendencias y prácticas más importantes en DevOps para el próximo año.',
      date: '2025-10-15',
      readTime: '5 min'
    },
    {
      id: 'web-accessibility-best-practices',
      title: 'Accesibilidad Web: Guía Completa',
      excerpt: 'Cómo hacer que tu sitio web sea accesible para todos los usuarios.',
      date: '2025-10-01',
      readTime: '8 min'
    }
  ];

  return (
    <section className="consulting-section bg-gray-50 dark:bg-neutral-800">
      <div className="consulting-container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="heading-section text-3xl md:text-4xl mb-4">Blog Técnico</h2>
          <p className="body-text text-lg text-muted max-w-2xl mx-auto">
            Artículos sobre DevOps, arquitectura de sistemas y mejores prácticas técnicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="feature-card fade-in-delay-{index+1}">
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted">{post.date}</span>
                  <span className="badge-secondary text-xs">{post.readTime}</span>
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
            className="consulting-button-ghost consulting-button-large"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}