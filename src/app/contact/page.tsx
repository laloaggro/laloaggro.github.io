"use client";

import { useState } from 'react';

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
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Contacto</h1>
          <p className="body-text text-blue-100 max-w-3xl mx-auto text-xl">
            ¿Listo para comenzar tu transformación digital? Agenda una consulta gratuita.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="consulting-section">
        <div className="consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft">
              <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-green-700 dark:text-green-300">
                    Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-700 dark:border-gray-600"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-muted mb-2">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-700 dark:border-gray-600"
                      placeholder="Cuéntame sobre tu proyecto o desafío tecnológico..."
                    ></textarea>
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <p className="text-red-700 dark:text-red-300 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="consulting-button-primary consulting-button-large w-full"
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Correo electrónico</h3>
                    <p className="text-muted">contacto@mauriciogaray.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ubicación</h3>
                    <p className="text-muted">Santiago, Chile<br />Disponible para proyectos remotos mundialmente</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Horario de consultas</h3>
                  <ul className="space-y-2 text-muted">
                    <li className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábados</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="consulting-container text-center">
          <h2 className="heading-section text-3xl mb-6">¿Prefieres una consulta rápida?</h2>
          <p className="body-text text-lg text-muted max-w-2xl mx-auto mb-8">
            Agenda una llamada de 30 minutos para discutir tus necesidades específicas.
          </p>
          <a 
            href="#" 
            className="consulting-button-primary consulting-button-large inline-block"
          >
            Agenda tu llamada
          </a>
        </div>
      </section>
    </div>
  );
}