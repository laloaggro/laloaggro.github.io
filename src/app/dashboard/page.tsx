'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [weather, setWeather] = useState<any>(null);
  const [time, setTime] = useState<any>(null);
  const [exchange, setExchange] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! ¿En qué puedo ayudarte hoy?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Obtener datos del tiempo
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        if (data.success) {
          setWeather(data.data);
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, []);

  // Obtener hora local
  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('/api/time');
        const data = await response.json();
        if (data.success) {
          setTime(data.data);
        }
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    fetchTime();
    
    // Actualizar la hora cada minuto
    const interval = setInterval(fetchTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Obtener tasas de cambio
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const response = await fetch('/api/exchange');
        const data = await response.json();
        if (data.success) {
          setExchange(data.data);
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchange();
  }, []);

  // Simular respuesta del chatbot
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Agregar mensaje del usuario
    const userMessage = { id: messages.length + 1, text: inputMessage, isBot: false };
    setMessages([...messages, userMessage]);
    
    // Limpiar input
    setInputMessage('');
    
    // Simular respuesta del bot después de un corto retraso
    setTimeout(() => {
      let botResponse = '';
      
      if (inputMessage.toLowerCase().includes('tiempo') || inputMessage.toLowerCase().includes('clima')) {
        botResponse = `Actualmente en ${weather?.location} está ${weather?.condition} con ${weather?.temperature}°C.`;
      } else if (inputMessage.toLowerCase().includes('hora')) {
        botResponse = `La hora actual es ${time?.time} en Santiago, Chile.`;
      } else if (inputMessage.toLowerCase().includes('dólar') || inputMessage.toLowerCase().includes('dolar')) {
        botResponse = `El dólar está a $${exchange?.usdToClp} CLP según el tipo de cambio simulado.`;
      } else {
        botResponse = 'Gracias por tu mensaje. Esta es una demostración de chatbot. Puedes preguntarme sobre el tiempo, la hora o el valor del dólar.';
      }
      
      const botMessage = { 
        id: messages.length + 2, 
        text: botResponse, 
        isBot: true 
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dashboard Personal</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Toda la información que necesitas en un solo lugar
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Información del tiempo */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Clima</h2>
              {weather ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{weather.location}, {weather.country}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{weather.condition}</p>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">{weather.temperature}°C</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Sensación</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.feelsLike}°C</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Humedad</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.humidity}%</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Viento</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.windSpeed} km/h</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Máx/Mín</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{weather.high}°/{weather.low}°</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Hora local */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hora Local</h2>
              {time ? (
                <div className="text-center py-6">
                  <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {time.time}
                  </div>
                  <div className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                    {time.fullDate.split(',')[0]}
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-400">
                    Zona horaria: {time.timezone}
                  </div>
                </div>
              ) : (
                <div className="animate-pulse text-center py-6">
                  <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-6"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
                </div>
              )}
            </div>

            {/* Tasas de cambio */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tasas de Cambio</h2>
              {exchange ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-5 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm opacity-90">Dólar Estadounidense</p>
                        <p className="text-2xl font-bold">USD</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">Pesos Chilenos</p>
                        <p className="text-2xl font-bold">${exchange.usdToClp}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-5 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm opacity-90">Euro</p>
                        <p className="text-2xl font-bold">EUR</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm opacity-90">Pesos Chilenos</p>
                        <p className="text-2xl font-bold">${exchange.eurToClp}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p>Última actualización: {new Date(exchange.lastUpdated).toLocaleString('es-CL')}</p>
                    <p className="mt-1">Fuente: {exchange.source}</p>
                  </div>
                </div>
              ) : (
                <div className="animate-pulse space-y-6">
                  <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                  <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                </div>
              )}
            </div>
          </div>

          {/* Blog Post Preview */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Última entrada del blog</h2>
            </div>
            <div className="p-6">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h1>Guía Completa de DevOps en 2025: Tendencias y Prácticas Avanzadas</h1>
                <p className="lead">
                  Descubre las tendencias más importantes en DevOps para 2025 y cómo pueden transformar tu organización tecnológica.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
                  <p className="m-0"><strong>TL;DR:</strong> En 2025, DevOps evoluciona hacia la IA operativa, seguridad integrada y arquitecturas serverless, con un enfoque en la observabilidad avanzada y la automatización inteligente.</p>
                </div>
                
                <h2>Introducción</h2>
                <p>
                  El panorama DevOps continúa evolucionando a un ritmo acelerado. A medida que avanzamos en 2025, 
                  las organizaciones que deseen mantener su competitividad deben adaptarse a nuevas tendencias 
                  y adoptar prácticas emergentes que impulsen la eficiencia, seguridad e innovación.
                </p>
                
                <h2>1. Integración de IA en Pipelines CI/CD</h2>
                <p>
                  Una de las tendencias más significativas en 2025 es la integración de inteligencia artificial 
                  en los pipelines de integración y entrega continua:
                </p>
                <ul>
                  <li>Predecir fallos en el pipeline antes de que ocurran</li>
                  <li>Optimizar automáticamente la asignación de recursos</li>
                  <li>Sugerir correcciones de código basadas en patrones históricos</li>
                  <li>Automatizar la generación de casos de prueba</li>
                </ul>
                
                <h3>Ejemplo práctico</h3>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                  <code>{`# Configuración de IA en pipeline CI/CD
pipeline {
  agent any
  stages {
    stage('AI Analysis') {
      steps {
        script {
          def riskAssessment = aiPlugin.analyzeRisk()
          if (riskAssessment.riskLevel > 0.8) {
            sh 'echo "Riesgo alto detectado" && exit 1'
          }
        }
      }
    }
  }
}`}</code>
                </pre>
                
                <h2>2. Seguridad desde el Diseño (DevSecOps)</h2>
                <p>
                  La seguridad ya no es una fase posterior en el proceso de desarrollo. En 2025, 
                  las prácticas DevSecOps se han consolidado como componente fundamental:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Prácticas recomendadas</h4>
                    <ul className="text-sm">
                      <li>Escaneo continuo de vulnerabilidades</li>
                      <li>Políticas de seguridad declarativas</li>
                      <li>Integración SAST/DAST</li>
                      <li>Automatización de parches críticos</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Beneficios</h4>
                    <ul className="text-sm">
                      <li>Reducción de vulnerabilidades en producción</li>
                      <li>Cumplimiento normativo automatizado</li>
                      <li>Menor costo de corrección</li>
                      <li>Mayor confianza del cliente</li>
                    </ul>
                  </div>
                </div>
                
                <h2>3. Arquitecturas Serverless y Funciones como Servicio</h2>
                <p>
                  Las arquitecturas serverless continúan ganando terreno, especialmente en aplicaciones 
                  orientadas a eventos:
                </p>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 my-6">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Ventaja</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Impacto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Reducción de costos operativos</td>
                      <td className="px-6 py-4 whitespace-nowrap">Hasta 70% menos</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Escalado automático</td>
                      <td className="px-6 py-4 whitespace-nowrap">Instantáneo sin configuración</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Superficie de ataque</td>
                      <td className="px-6 py-4 whitespace-nowrap">Reducida gracias al aislamiento</td>
                    </tr>
                  </tbody>
                </table>
                
                <h2>4. Observabilidad Avanzada</h2>
                <p>
                  La observabilidad ha evolucionado más allá del tradicional triunvirato:
                </p>
                <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 my-6 italic">
                  "La observabilidad en 2025 se trata de correlacionar datos de múltiples fuentes para 
                  obtener insights accionables en tiempo real, no solo de recolectar métricas."
                  <footer className="text-sm mt-2">— Experto en SRE de Google</footer>
                </blockquote>
                
                <h2>Conclusión</h2>
                <p>
                  Las prácticas DevOps en 2025 se centran en la automatización inteligente, 
                  la seguridad integrada y la entrega continua de valor. Las organizaciones que adopten 
                  estas tendencias estarán mejor posicionadas para innovar rápidamente mientras mantienen 
                  altos estándares de calidad y seguridad.
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                        MG
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Mauricio Garay</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Consultor DevOps & Cloud</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Publicado el 15 de octubre, 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
              <Link 
                href="/blog/devops-2025-complete-guide" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Leer artículo completo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Chat IA */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Asistente IA</h2>
              <p className="text-gray-600 dark:text-gray-400">Pregúntame sobre el clima, la hora o las tasas de cambio</p>
            </div>
            <div className="h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isBot 
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu pregunta aquí..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}