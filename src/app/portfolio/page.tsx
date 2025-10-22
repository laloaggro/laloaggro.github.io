import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Portfolio() {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h1 className="text-3xl md:text-4xl font-medium">Portfolio</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proyectos seleccionados que demuestran mi experiencia en DevOps, arquitectura cloud-native 
              y gestión del cambio en entornos financieros.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12">
            <h2 className="text-2xl font-medium">Proyectos Destacados</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 pt-2">
                      <Link 
                        href={`/portfolio/${project.id}`} 
                        className="text-sm hover-underline"
                      >
                        Ver detalles
                      </Link>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:text-black hover-underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Todos los Proyectos</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{project.title}</h3>
                      <span className="text-xs text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}