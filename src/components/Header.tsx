"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';

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
    { name: 'Blog', href: '/blog' },
    { name: 'Recursos', href: '/resources' },
    { name: 'Testimonios', href: '/testimonials' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm border-b border-border py-2 shadow-sm dark:bg-gray-900/90' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <Link 
              href="/" 
              className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
            >
              MAURICIO GARAY
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors link-hover"
              >
                {item.name}
              </Link>
            ))}
            <SearchBar />
            <Link 
              href="/contact" 
              className="consulting-button-primary text-sm transform transition-all duration-300 hover:-translate-y-0.5"
            >
              Agenda una Consulta
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <SearchBar />
            <button 
              className="text-foreground hover:text-accent transition-colors"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-2 animate-fade-in-down">
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