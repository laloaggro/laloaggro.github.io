'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'mauricio.garay@example.com',
      action: 'mailto:mauricio.garay@example.com'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Teléfono',
      value: '+56 9 1234 5678',
      action: 'tel:+56912345678'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Ubicación',
      value: 'Santiago, Chile',
      action: '#'
    }
  ];

  const services = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'devops', label: 'DevOps & Automatización' },
    { value: 'transformation', label: 'Transformación Digital' },
    { value: 'change-management', label: 'Gestión del Cambio' },
    { value: 'cloud-architecture', label: 'Arquitectura Cloud' },
    { value: 'security-compliance', label: 'Seguridad y Compliance' },
    { value: 'analytics', label: 'Análisis y Métricas' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 consulting-section sparse">
        <div className="max-w-7xl mx-auto consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <span className="badge-primary uppercase tracking-wider">
                  Contacto
                </span>
                <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl">
                  Agenda tu Consulta
                </h1>
                <p className="text-xl md:text-2xl text-muted max-w-2xl">
                  ¿Listo para transformar tu organización? Ponte en contacto conmigo.
                </p>
                <p className="body-text text-base md:text-lg text-muted max-w-2xl">
                  Estoy disponible para consultorías, charlas y colaboraciones. 
                  Agenda una consulta gratuita de 30 minutos para discutir tus desafíos tecnológicos.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="feature-icon-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <a 
                        href={info.action} 
                        className="text-accent hover:underline"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <span className="text-muted caption-text">Sígueme en:</span>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/laloaggro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/mauricio-garay-veas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={24} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="fade-in-delay-2">
              <div className="feature-card">
                <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">¡Mensaje enviado!</h3>
                    <p className="text-green-700">
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700">{submitError}</p>
                      </div>
                    )}
                    
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
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-800"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-800"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-muted mb-2">
                        Servicio de interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-800"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
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
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent dark:bg-gray-800"
                        placeholder="Cuéntame sobre tu proyecto o pregunta..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="consulting-button-primary consulting-button-large w-full"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Enviar mensaje'
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted">
                  ¿Prefieres agendar directamente?{' '}
                  <Link href="#" className="text-accent font-medium hover:underline">
                    Reserva un slot en mi calendario
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-800 text-white">
        <div className="consulting-container text-center">
          <h2 className="display-hero text-3xl md:text-4xl mb-6">¿Listo para transformar tu organización?</h2>
          <p className="body-text text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Agenda una consulta gratuita de 30 minutos para discutir tus desafíos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="consulting-button bg-white text-accent hover:bg-gray-100 focus:ring-white consulting-button-large">
              Agenda tu Consulta
            </a>
            <Link href="/portfolio" className="consulting-button bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white consulting-button-large">
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}