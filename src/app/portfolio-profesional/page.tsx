'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioProfesional() {
  const [activeFilter, setActiveFilter] = useState('todos');

  // Datos de proyectos
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      category: "desarrollo",
      description: "Plataforma integral de gestión empresarial con microservicios y arquitectura cloud-native.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      image: "/placeholder.svg",
      year: "2024"
    },
    {
      id: 2,
      title: "Rediseño de Experiencia de Usuario",
      category: "diseño",
      description: "Rediseño completo de la experiencia de usuario para una aplicación financiera.",
      technologies: ["Figma", "Adobe XD", "Pruebas de Usabilidad"],
      image: "/placeholder.svg",
      year: "2024"
    },
    {
      id: 3,
      title: "Estrategia de Marketing Digital",
      category: "marketing",
      description: "Desarrollo e implementación de estrategia de marketing digital para startup tecnológica.",
      technologies: ["SEO", "Google Ads", "Social Media"],
      image: "/placeholder.svg",
      year: "2023"
    },
    {
      id: 4,
      title: "Automatización de Infraestructura",
      category: "devops",
      description: "Implementación de CI/CD y automatización de infraestructura para empresa de e-commerce.",
      technologies: ["Jenkins", "Kubernetes", "Terraform", "AWS"],
      image: "/placeholder.svg",
      year: "2023"
    },
    {
      id: 5,
      title: "Análisis de Accesibilidad Web",
      category: "accesibilidad",
      description: "Auditoría y mejora de accesibilidad web para organización gubernamental.",
      technologies: ["WCAG 2.1", "ARIA", "Screen Readers"],
      image: "/placeholder.svg",
      year: "2022"
    },
    {
      id: 6,
      title: "Gestión de Proyecto Ágil",
      category: "gestion",
      description: "Liderazgo de equipo ágil en proyecto de transformación digital para sector salud.",
      technologies: ["Scrum", "Jira", "Confluence"],
      image: "/placeholder.svg",
      year: "2022"
    }
  ];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Categorías para el filtro
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'desarrollo', name: 'Desarrollo' },
    { id: 'diseño', name: 'Diseño' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'devops', name: 'DevOps' },
    { id: 'accesibilidad', name: 'Accesibilidad' },
    { id: 'gestion', name: 'Gestión' }
  ];

  // Habilidades por categoría
  const skills = [
    {
      category: "🎨 Diseño",
      items: [
        "Diseño Web Responsive",
        "Experiencia de Usuario (UX)",
        "Interfaz de Usuario (UI)",
        "Prototipado",
        "Sistemas de Diseño",
        "Branding"
      ]
    },
    {
      category: "💻 Desarrollo",
      items: [
        "Frontend (React, Next.js)",
        "Backend (Node.js, Express)",
        "Bases de Datos (MongoDB, PostgreSQL)",
        "APIs RESTful",
        "Testing (Jest, Cypress)",
        "DevOps (Docker, Kubernetes)"
      ]
    },
    {
      category: "🧠 Gestión y Estrategia",
      items: [
        "Metodologías Ágiles (Scrum, Kanban)",
        "Gestión de Proyectos",
        "Análisis de Requisitos",
        "Arquitectura de Software",
        "Liderazgo Técnico",
        "Planificación Estratégica"
      ]
    },
    {
      category: "✍️ Contenido y Marketing",
      items: [
        "Redacción Técnica",
        "SEO y SEM",
        "Marketing de Contenidos",
        "Analítica Web",
        "Estrategia Digital",
        "Community Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
                  Portafolio Profesional
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Soluciones Integrales <span className="text-primary">Tecnológicas</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  Desde diseño UX hasta implementación DevOps, transformo ideas en productos digitales exitosos
                </p>
                <p className="body-text text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  Con más de 15 años de experiencia en múltiples disciplinas tecnológicas, 
                  ofrezco soluciones integrales que combinan diseño, desarrollo, estrategia y marketing.
                </p>
              </div>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#proyectos" 
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Ver Proyectos
                </Link>
                <Link 
                  href="#habilidades" 
                  className="px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-lg shadow hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  Mis Habilidades
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 fade-in-delay-2">
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 text-white shadow-xl">
                <div className="text-3xl font-bold mb-1">+15</div>
                <div className="text-sm opacity-90">Años de Experiencia</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certificaciones</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm opacity-90">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades <span className="text-primary">Multidisciplinares</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Profesional integral con experiencia en diseño, desarrollo, gestión y marketing digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{skillCategory.category}</h3>
                <ul className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proyectos <span className="text-primary">Destacados</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ejemplos de soluciones integrales que combinan múltiples disciplinas
            </p>
          </div>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow hover:shadow-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-600 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-800 text-xs font-medium rounded-full dark:bg-gray-600 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <button className="text-primary font-semibold text-sm hover:text-secondary transition-colors duration-300">
                    Ver detalles →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Servicios <span className="text-primary">Integrales</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ofrezco soluciones completas que combinan múltiples disciplinas para resultados óptimos
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-700 rounded-xl p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Consultoría Estratégica</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Análisis y definición de estrategias tecnológicas alineadas con los objetivos del negocio.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-700 rounded-xl p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Diseño de Experiencia</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Creación de experiencias de usuario intuitivas y atractivas con enfoque en accesibilidad.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-700 rounded-xl p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Desarrollo Tecnológico</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Implementación de soluciones robustas y escalables con las mejores prácticas de desarrollo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-700 rounded-xl p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Automatización y DevOps</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Optimización de procesos mediante automatización y prácticas DevOps para entrega continua.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-700 rounded-xl p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Marketing Digital</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Estrategias de posicionamiento y visibilidad digital para maximizar el impacto online.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-700 rounded-xl p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gestión de Proyectos</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Liderazgo y coordinación de equipos multidisciplinares para entrega exitosa de proyectos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Combino diseño, desarrollo, estrategia y marketing para entregar soluciones digitales integrales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
              Contáctame
            </Link>
            <a href="#" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/10 transition-colors duration-300">
              Descargar CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}