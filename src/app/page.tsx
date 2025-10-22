import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Mauricio Eduardo <span className="text-blue-600">Garay Veas</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Especialista Senior en Gestión del Cambio, DevOps & Líder en Transformación Digital
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/portfolio" 
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
          >
            Ver Mi Trabajo
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 text-lg"
          >
            Contáctame
          </Link>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Logros Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Cumplimiento en Auditorías</div>
            <div className="text-sm text-gray-500 mt-1">(CMF, PCI-DSS, ISO 27001)</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
            <div className="text-gray-600">Reducción de Conflictos</div>
            <div className="text-sm text-gray-500 mt-1">en Despliegues</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Cambios Gestionados</div>
            <div className="text-sm text-gray-500 mt-1">por Año</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
            <div className="text-gray-600">Países Alcanzados</div>
            <div className="text-sm text-gray-500 mt-1">en Latinoamérica</div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-gray-50 rounded-xl px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Proyecto Destacado</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-3 text-blue-600">Flores Victoria - Plataforma E-commerce</h3>
            <p className="text-gray-600 mb-4">
              Arquitecté e implementé una plataforma de comercio electrónico nativa en la nube con más de 13 microservicios, 
              lista para producción con stack completo de observabilidad.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Arquitectura de microservicios con Docker y Kubernetes</li>
              <li>Stack de observabilidad con Prometheus, Grafana y ELK</li>
              <li>CI/CD pipelines con GitHub Actions</li>
              <li>Seguridad con JWT, TLS y gestión segura de secretos</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Docker</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Kubernetes</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Microservices</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Prometheus</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Grafana</span>
            </div>
            <div className="flex justify-between items-center">
              <Link 
                href="/portfolio/flores-victoria" 
                className="text-blue-600 font-semibold hover:underline"
              >
                Ver detalles técnicos →
              </Link>
              <a 
                href="https://github.com/laloaggro/Flores-Victoria-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span className="ml-1">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Habilidades Clave</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">DevOps & SRE</h3>
            <p className="text-gray-600">
              CI/CD, Docker, Kubernetes, Terraform, Ansible, y prácticas SRE para entornos de alta disponibilidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Gestión del Cambio</h3>
            <p className="text-gray-600">
              ITIL v4, JIRA, ServiceNow, CAB orchestration, y auditorías de cumplimiento (CMF, PCI-DSS, ISO 27001).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Arquitectura Cloud</h3>
            <p className="text-gray-600">
              Diseño e implementación de soluciones cloud-native con microservicios y arquitecturas resilientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}