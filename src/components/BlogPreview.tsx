"use client";

import Link from 'next/link';

const blogPosts = [
  {
    id: 'devops-2025-complete-guide',
    title: 'Guía Completa de DevOps 2025',
    excerpt: 'Explorando las últimas tendencias y herramientas en prácticas DevOps para el próximo año.',
    date: '2025-10-15',
    readTime: '8 min'
  },
  {
    id: 'devops-best-practices',
    title: 'Mejores Prácticas DevOps en Entornos Regulados',
    excerpt: 'Cómo implementar DevOps efectivamente en industrias financieras y altamente reguladas.',
    date: '2025-09-22',
    readTime: '12 min'
  },
  {
    id: 'web-accessibility-best-practices',
    title: 'Accesibilidad Web: Guía Práctica',
    excerpt: 'Implementando principios de accesibilidad para crear experiencias web inclusivas.',
    date: '2025-08-30',
    readTime: '10 min'
  }
];

export default function BlogPreview() {
  return (
    <section className="consulting-section bg-gray-50 dark:bg-gray-800">
      <div className="consulting-container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="heading-section text-3xl md:text-4xl mb-4">Blog Técnico</h2>
          <p className="body-text text-lg text-muted max-w-2xl mx-auto">
            Artículos sobre DevOps, arquitectura de software, gestión del cambio y tecnología en general.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="feature-card fade-in">
              <div className="mb-4">
                <span className="text-sm text-muted">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="mx-2 text-muted">•</span>
                <span className="text-sm text-muted">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="body-text text-muted mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-accent font-medium text-sm link-hover">
                Leer más →
              </Link>
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