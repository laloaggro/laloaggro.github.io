import Link from 'next/link';

export default function Approach() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Mi Enfoque</h1>
          <p className="body-text text-blue-100 max-w-3xl mx-auto text-xl">
            Una metodología basada en el aprendizaje autodidacta, la implementación incremental y la sostenibilidad a largo plazo
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="consulting-section">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-6">Filosofía Autodidacta</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Mi enfoque se basa en la capacidad de aprender continuamente y aplicar ese aprendizaje 
              para resolver problemas complejos de manera innovadora.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Aprendizaje Continuo</h3>
              <p className="body-text text-muted mb-6">
                Como profesional autodidacta, he desarrollado una metodología de aprendizaje que me permite 
                mantenerme al día con las últimas tecnologías y tendencias, adaptándome rápidamente a los 
                desafíos cambiantes del entorno tecnológico.
              </p>
              <p className="body-text text-muted mb-6">
                Esta filosofía no solo me beneficia personalmente, sino que también la transfiero a los 
                equipos con los que trabajo, fomentando una cultura de aprendizaje continuo y mejora constante.
              </p>
              <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
                <h4 className="font-semibold mb-3">Principios Fundamentales:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">Curiosidad y cuestionamiento constante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">Experimentación y prototipado rápido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">Aprendizaje de errores y fracasos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-muted">Compartir conocimiento y experiencias</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
              <blockquote className="text-xl italic text-muted mb-6">
                "El verdadero aprendizaje ocurre cuando uno se cuestiona constantemente, 
                experimenta sin temor al fracaso y comparte generosamente el conocimiento adquirido."
              </blockquote>
              <div className="text-right">
                <cite className="font-semibold">— Mi filosofía autodidacta</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="consulting-section bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-6">Enfoque de Implementación</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Mi metodología se centra en la implementación incremental, la participación activa de los 
              stakeholders y la sostenibilidad de las soluciones a largo plazo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Diagnóstico</h3>
              <p className="body-text text-muted text-sm">
                Evaluación detallada del estado actual y definición de objetivos claros
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Co-Creación</h3>
              <p className="body-text text-muted text-sm">
                Trabajo colaborativo con stakeholders para diseñar soluciones adaptadas
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Implementación</h3>
              <p className="body-text text-muted text-sm">
                Ejecución incremental con feedback constante y ajustes en tiempo real
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Sostenibilidad</h3>
              <p className="body-text text-muted text-sm">
                Capacitación, documentación y plan de mantenimiento a largo plazo
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold mb-6 text-center">Elementos Clave del Enfoque</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                  Participación Activa
                </h4>
                <p className="body-text text-muted">
                  Involucro a todos los stakeholders desde el inicio para garantizar la adhesión 
                  y el compromiso con las soluciones propuestas.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                  Aprendizaje Continuo
                </h4>
                <p className="body-text text-muted">
                  Fomento una cultura de aprendizaje continuo en todos los niveles de la organización, 
                  no solo durante el proyecto sino como práctica sostenible.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                  Medición y Ajuste
                </h4>
                <p className="body-text text-muted">
                  Establezco KPIs claros desde el inicio y realizo ajustes continuos basados 
                  en datos y feedback para garantizar el éxito del proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Change Management */}
      <section className="consulting-section">
        <div className="consulting-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-3xl md:text-4xl mb-6">Gestión del Cambio</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              Entiendo que la tecnología es solo una parte del cambio. El verdadero éxito 
              viene de la capacidad de las personas para adoptar y utilizar las nuevas soluciones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Enfoque Holístico</h3>
              <p className="body-text text-muted mb-6">
                Mi enfoque de gestión del cambio aborda no solo los aspectos técnicos, 
                sino también las dimensiones humanas, organizacionales y culturales del cambio.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Comunicación Efectiva</h4>
                  <p className="body-text text-muted">
                    Plan de comunicación claro y constante que explique el "por qué" detrás del cambio, 
                    no solo el "qué" y el "cómo".
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Capacitación Personalizada</h4>
                  <p className="body-text text-muted">
                    Programas de formación adaptados a diferentes perfiles y niveles de conocimiento, 
                    con enfoque en el aprendizaje práctico y aplicado.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Liderazgo del Cambio</h4>
                  <p className="body-text text-muted">
                    Identificación y empoderamiento de campeones del cambio dentro de la organización 
                    para multiplicar el impacto y asegurar la adopción.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Proceso de Gestión del Cambio</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Preparación</h4>
                    <p className="body-text text-muted text-sm">
                      Crear conciencia sobre la necesidad de cambio y establecer un sentido de urgencia
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Compromiso</h4>
                    <p className="body-text text-muted text-sm">
                      Formar coaliciones de cambio e involucrar a los stakeholders clave
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Visión</h4>
                    <p className="body-text text-muted text-sm">
                      Crear una visión clara del futuro estado y estrategias para lograrla
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Acción</h4>
                    <p className="body-text text-muted text-sm">
                      Empoderar a los empleados, generar victorias cortoplacistas y mantener el impulso
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sostenibilidad</h4>
                    <p className="body-text text-muted text-sm">
                      Consolidar mejoras, analizar resultados y anclar el cambio en la cultura organizacional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para transformar tu organización?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir tus desafíos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large">
              Agenda tu Consulta
            </Link>
            <Link href="/portfolio" className="consulting-button bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white consulting-button-large">
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}