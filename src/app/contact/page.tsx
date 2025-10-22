"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-primary uppercase tracking-wider mb-4">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Hablemos de tu próximo proyecto</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              ¿Tienes un desafío tecnológico? Agenda una consulta gratuita de 30 minutos para discutir cómo puedo ayudarte.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-green-800 mb-2">¡Mensaje enviado con éxito!</h3>
                  <p className="text-green-700">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                      placeholder="Cuéntame sobre tu proyecto o pregunta..."
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className="text-red-600 text-sm py-2">
                      {submitError}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="consulting-button-primary w-full disabled:opacity-70"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="feature-icon-primary flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Teléfono</h3>
                    <p className="text-muted">+56 9 6360 3177</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="feature-icon-primary flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-muted">mauriciogarayveas@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="feature-icon-primary flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Ubicación</h3>
                    <p className="text-muted">Santiago, Chile</p>
                    <p className="text-muted">100% Remoto</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Horario de consultas</h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span>09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábados</span>
                      <span>10:00 - 14:00</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-6">
                  <Link 
                    href="/portfolio" 
                    className="consulting-button-secondary"
                  >
                    Ver portafolio de proyectos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="consulting-container text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">¿Prefieres una llamada?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir tus necesidades tecnológicas.
          </p>
          <Link href="#" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white">
            Agenda una llamada
          </Link>
        </div>
      </section>
    </div>
  );
}