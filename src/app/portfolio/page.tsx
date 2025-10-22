import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Portfolio() {
  // Separar proyectos destacados de los regulares
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Portfolio</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Proyectos y soluciones que demuestran mi experiencia técnica
        </p>

        {/* Proyectos Destacados */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap justify-between items-center">
                    <Link 
                      href={`/portfolio/${project.id}`} 
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Ver detalles técnicos →
                    </Link>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                          <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                        <span className="ml-1">Ver en GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categorías de Habilidades */}
        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-semibold text-gray-800 mb-2">DevOps</div>
              <div className="text-sm text-gray-600">Docker, Kubernetes, CI/CD</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-semibold text-gray-800 mb-2">Gestión de Cambios</div>
              <div className="text-sm text-gray-600">JIRA, ServiceNow, ITIL</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-semibold text-gray-800 mb-2">Cloud</div>
              <div className="text-sm text-gray-600">AWS, GCP, Azure</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-semibold text-gray-800 mb-2">Observabilidad</div>
              <div className="text-sm text-gray-600">Prometheus, Grafana</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <div className="font-semibold text-gray-800 mb-2">Arquitectura</div>
              <div className="text-sm text-gray-600">Microservicios</div>
            </div>
          </div>
        </section>

        {/* Otros Proyectos (si los hubiera) */}
        {regularProjects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Otros Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/portfolio/${project.id}`} 
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}