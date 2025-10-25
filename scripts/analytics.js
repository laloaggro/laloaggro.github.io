// analytics.js - Configuración de Google Analytics 4
// Configuración lista para activar - Solo necesitas obtener tu GA4 ID

(function() {
  // Configuración - Reemplaza con tu ID real de Google Analytics 4
  // Obtén tu ID en: https://analytics.google.com/
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Reemplazar con tu ID (formato: G-XXXXXXXXXX)
  
  // No cargar en desarrollo (localhost)
  const isDevelopment = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname.includes('codespace');
  
  if (isDevelopment) {
    console.log('📊 Analytics: Deshabilitado en desarrollo');
    // Crear función gtag mock para evitar errores
    window.gtag = function() {
      console.log('gtag (mock):', arguments);
    };
    return;
  }
  
  // Verificar que se haya configurado un ID real
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('⚠️ Analytics: ID de medición no configurado. Actualiza GA_MEASUREMENT_ID en analytics.js');
    window.gtag = function() {}; // Mock para evitar errores
    return;
  }
  
  // Cargar Google Analytics 4
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);
  
  // Configuración de gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    'send_page_view': true,
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
  
  console.log('✅ Google Analytics 4 inicializado:', GA_MEASUREMENT_ID);
  
  // Tracking de clicks en proyectos
  document.addEventListener('click', function(e) {
    if (e.target.closest('.project-link')) {
      const projectCard = e.target.closest('.project-card');
      const projectTitle = projectCard && projectCard.querySelector('.project-title') ? 
                          projectCard.querySelector('.project-title').textContent : 'Unknown';
      gtag('event', 'project_click', {
        'event_category': 'engagement',
        'event_label': projectTitle
      });
    }
    
    // Tracking de clicks en redes sociales
    if (e.target.closest('.hero-social a')) {
      const link = e.target.closest('a');
      const network = link.getAttribute('aria-label') || link.getAttribute('href');
      gtag('event', 'social_click', {
        'event_category': 'social',
        'event_label': network
      });
    }
  });
  
  // Tracking de profundidad de scroll
  let scrollDepths = [25, 50, 75, 100];
  let scrollTracked = [];
  
  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    scrollDepths.forEach(function(depth) {
      if (scrollPercent >= depth && scrollTracked.indexOf(depth) === -1) {
        scrollTracked.push(depth);
        gtag('event', 'scroll_depth', {
          'event_category': 'engagement',
          'event_label': depth + '%'
        });
      }
    });
  });
  
})();
