"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre mí', href: '/about' },
    { name: 'Servicios', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm border-b border-border py-2 shadow-sm' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <Link 
              href="/" 
              className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
            >
              MAURICIO GARAY
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 1).map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors link-hover"
              >
                {item.name}
              </Link>
            ))}
            {/* Services dropdown */}
            <div className="relative group">
              <span className="text-sm font-medium text-foreground hover:text-accent transition-colors cursor-pointer">
                Servicios
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block z-50">
                <div className="py-1">
                  <Link 
                    href="/services/web-development" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100"
                  >
                    Desarrollo Web
                  </Link>
                  <Link 
                    href="/services/ui-ux-design" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100"
                  >
                    Diseño UI/UX
                  </Link>
                  <Link 
                    href="/services/seo" 
                    className="block px-4 py-2 text-sm text-foreground hover:bg-gray-100"
                  >
                    Optimización SEO
                  </Link>
                </div>
              </div>
            </div>
            {navItems.slice(2).map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors link-hover"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="consulting-button-primary text-sm"
            >
              Agenda una Consulta
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1'}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-2">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="consulting-button-primary text-sm w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Agenda una Consulta
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}