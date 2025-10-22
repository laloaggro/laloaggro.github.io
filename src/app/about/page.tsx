export default function About() {
  const experience = [
    {
      company: "FIF Corporativo Regional — Banco Falabella",
      position: "Líder en Gestión del Cambio y Aseguramiento de Despliegues",
      period: "Ene 2022 – Feb 2025",
      achievements: [
        "Gestioné más de 1.000 cambios anuales en infraestructura crítica para operaciones en 7 países latinoamericanos",
        "Construí un calendario de despliegue centralizado en JIRA con detección automática de conflictos, reduciendo superposiciones en un 70%",
        "Logré cumplimiento del 100% en auditorías regulatorias (CMF, PCI-DSS, ISO 27001)",
        "Definí y monitoreé KPIs de éxito mediante dashboards en tiempo real"
      ]
    },
    {
      company: "Banco Falabella (CMR Chile)",
      position: "Analista Senior – Plataformas de Producción y Gestión del Cambio",
      period: "Oct 2016 – Dic 2021",
      achievements: [
        "Automatizé ~50% de los cambios estándar usando pipelines CI/CD, reduciendo tiempos de aprobación de 48h a 4h",
        "Integré verificaciones automáticas de pre-despliegue, reduciendo errores humanos en un 60%",
        "Garanticé estabilidad y seguridad de sistemas críticos (Banca Central, CMR, APIs de Pagos)"
      ]
    },
    {
      company: "CMR Falabella",
      position: "Analista de Control de Calidad",
      period: "May 2014 – Sep 2016",
      achievements: [
        "Implementé Control Management en el 90% de los sistemas de la división",
        "Mejoré la trazabilidad de releases y preparación para auditorías"
      ]
    }
  ];

  const education = [
    {
      degree: "Ingeniería en Sistemas Multimedia e Internet",
      institution: "Instituto Profesional La Araucana",
      period: "2009–2013"
    },
    {
      degree: "Ingeniería Civil en Informática (2 años completados)",
      institution: "Universidad Tecnológica de Chile INACAP",
      period: "2006–2008"
    }
  ];

  const certifications = [
    {
      name: "ITIL 4 Foundation",
      issuer: "Axelos"
    },
    {
      name: "Scrum Foundation Professional Certificate (SFPC)",
      issuer: ""
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre mí</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Mauricio Eduardo Garay Veas</h2>
              <p className="text-gray-600 mb-4">
                Soy un profesional autodidacta con más de 12 años de experiencia en el campo de la tecnología, 
                especializado en Gestión del Cambio, DevOps y Transformación Digital en entornos financieros altamente regulados.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de mi carrera, he tenido la oportunidad de liderar iniciativas críticas en organizaciones 
                como Banco Falabella, donde he podido aplicar mis conocimientos para reducir riesgos operativos, 
                garantizar el cumplimiento normativo y acelerar la entrega de soluciones tecnológicas.
              </p>
              <p className="text-gray-600">
                Mi enfoque se centra en construir sistemas resilientes, habilitar la productividad de los desarrolladores 
                y promover la mejora continua en equipos multifuncionales.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Experiencia Profesional</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
                    <p className="text-blue-600 font-semibold">{job.position}</p>
                  </div>
                  <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">•</div>
                      <p className="ml-2 text-gray-600">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Formación Académica</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Certificaciones</h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg">{cert.name}</h3>
                  {cert.issuer && <p className="text-blue-600">{cert.issuer}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">¿Interesado en trabajar juntos?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Si estás buscando un profesional con experiencia en DevOps, arquitectura de microservicios 
            y gestión de cambios en entornos regulados, me encantaría hablar contigo.
          </p>
          <a 
            href="mailto:mauriciogarayveas@gmail.com" 
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contáctame
          </a>
        </div>
      </div>
    </div>
  );
}