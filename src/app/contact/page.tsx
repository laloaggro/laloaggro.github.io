"use client";

import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En un entorno real, aquí se enviaría el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="consulting-section sparse bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="consulting-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="display-hero text-4xl md:text-5xl lg:text-6xl mb-6">Contacto</h1>
            <p className="body-text text-xl text-muted max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Ponte en contacto conmigo para discutir cómo puedo ayudarte 
              a alcanzar tus objetivos tecnológicos.
            </p>
          </div>
        </div>
      </section>

      <section className="consulting-section bg-white dark:bg-gray-900">
        <div className="consulting-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-section text-3xl mb-6">Información de Contacto</h2>
              <p className="body-text text-muted mb-8">
                Estoy disponible para consultorías, charlas y proyectos. No dudes en contactarme 
                para discutir tus necesidades tecnológicas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="feature-icon-primary flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                    <p className="body-text text-muted">+56 9 6360 3177</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="feature-icon-primary flex-shrink-0">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="body-text text-muted">mauriciogarayveas@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="feature-icon-primary flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Ubicación</h3>
                    <p className="body-text text-muted">Santiago, Chile<br />100% Remoto</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Disponibilidad</h3>
                <p className="body-text text-muted">
                  Ofrezco consultoría remota a clientes en todo el mundo. 
                  Las sesiones se pueden programar según tu zona horaria.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="heading-section text-3xl mb-6">Envíame un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="Asunto del mensaje"
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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="Tu mensaje aquí..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="consulting-button-primary w-full consulting-button-large"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}