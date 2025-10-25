import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Páginas',
      links: [
        { name: 'Inicio', href: '/' },
        { name: 'Acerca de', href: '/about' },
        { name: 'Servicios', href: '/services' },
        { name: 'Portafolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contact' },
      ]
    },
    {
      title: 'Servicios',
      links: [
        { name: 'DevOps & Cloud', href: '/services#devops' },
        { name: 'Transformación Digital', href: '/services#transformation' },
        { name: 'Gestión del Cambio', href: '/services#change-management' },
        { name: 'Consultoría Técnica', href: '/services' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Enfoque', href: '/approach' },
        { name: 'Testimonios', href: '/testimonials' },
        { name: 'Recursos', href: '/resources' },
      ]
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-border">
      <div className="consulting-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-accent mb-4">Mauricio Garay</h3>
            <p className="body-text text-muted mb-6 max-w-md">
              Consultor tecnológico especializado en DevOps, Transformación Digital 
              y Gestión del Cambio para organizaciones de alto impacto.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/laloaggro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/mauricio-garay-veas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a 
                href="mailto:contacto@mauriciogaray.com" 
                className="text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            &copy; {currentYear} Mauricio Garay. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted hover:text-accent transition-colors text-sm">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-muted hover:text-accent transition-colors text-sm">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}