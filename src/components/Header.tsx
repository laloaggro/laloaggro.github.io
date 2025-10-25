"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Acerca de', href: '/about' },
    { name: 'Servicios', href: '/services' },
    { name: 'Enfoque', href: '/approach' },
    { name: 'Portafolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2 shadow-sm' : 'py-4'
    }`}>
      <div className="consulting-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-accent">
            Mauricio Garay
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
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
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-muted focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted hover:text-accent transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-6">
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}