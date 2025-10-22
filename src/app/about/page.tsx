import Link from 'next/link';
import { FiAward, FiBook, FiBriefcase, FiUser } from 'react-icons/fi';

export default function About() {
  const skills = [
    { name: 'DevOps', level: 95 },
    { name: 'Cloud Architecture', level: 90 },
    { name: 'Change Management', level: 92 },
    { name: 'Digital Transformation', level: 88 },
    { name: 'Team Leadership', level: 94 },
    { name: 'Process Optimization', level: 89 }
  ];

  const experience = [
    {
      title: 'Consultor Senior en Transformación Digital',
      company: 'Freelance',
      period: '2020 - Presente',
      description: 'Ayudo a organizaciones financieras a modernizar sus procesos tecnológicos y culturales.'
    },
    {
      title: 'Gerente de DevOps',
      company: 'Banco Regional',
      period: '2018 - 2020',
      description: 'Lideré la implementación de prácticas DevOps que redujeron tiempos de despliegue en un 85%.'
    },
    {
      title: 'Ingeniero de Sistemas Senior',
      company: 'Tech Solutions',
      period: '2015 - 2018',
      description: 'Desarrollé e implementé soluciones cloud-native para clientes en múltiples industrias.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="consulting-section sparse bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="consulting-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Sobre mí</h1>
                <p className="body-text text-xl text-muted mb-6">
                  Soy un apasionado especialista en DevOps, Gestión del Cambio y Transformación Digital 
                  con más de 15 años de experiencia en el sector tecnológico.
                </p>
                <p className="body-text text-muted mb-8">
                  Mi enfoque combina conocimientos técnicos avanzados con una comprensión profunda 
                  de las dinámicas organizacionales, permitiéndome liderar transformaciones exitosas 
                  en entornos altamente regulados.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="consulting-button-primary consulting-button-large">
                    Contáctame
                  </Link>
                  <Link href="/portfolio" className="consulting-button-secondary consulting-button-large">
                    Ver Proyectos
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-accent to-blue-800 rounded-full flex items-center justify-center">
                    <FiUser className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-success rounded-full flex items-center justify-center">
                    <FiAward className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Habilidades</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Combinación única de habilidades técnicas y de gestión para impulsar la transformación digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-blue-800 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Experiencia</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Trayectoria profesional en tecnología y transformación organizacional.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent transform translate-x-1/2"></div>
              
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <FiBriefcase className="w-4 h-4 text-white" />
                    </div>
                    
                    <div className="feature-card">
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <span className="font-medium text-accent">{job.company}</span>
                        <span className="badge-secondary">{job.period}</span>
                      </div>
                      <p className="body-text text-muted">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-4">Educación</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Formación continua en tecnologías emergentes y metodologías de gestión.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="feature-card">
              <div className="flex items-start">
                <div className="feature-icon-primary flex-shrink-0">
                  <FiBook className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">Ingeniería en Informática</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="font-medium text-accent">Universidad Tecnológica</span>
                    <span className="badge-secondary">2005 - 2010</span>
                  </div>
                  <p className="body-text text-muted">
                    Especialización en sistemas distribuidos y arquitecturas escalables.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                'Certified Kubernetes Administrator',
                'AWS Solutions Architect',
                'Professional Scrum Master',
                'ITIL Foundation'
              ].map((cert, index) => (
                <div key={index} className="feature-card flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-3"></div>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para comenzar?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir tus desafíos tecnológicos.
          </p>
          <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large inline-block">
            Agenda tu Consulta
          </Link>
        </div>
      </section>
    </div>
  );
}