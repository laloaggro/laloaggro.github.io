"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              Mauricio Garay
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Sobre mí
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sobre mí
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Servicios
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}