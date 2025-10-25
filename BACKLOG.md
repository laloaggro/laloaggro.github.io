# 📋 Backlog del Proyecto - Portfolio Mauricio Garay Veas

**Última actualización:** 25 de octubre de 2025  
**Versión actual:** 1.0.0  
**Estado:** En desarrollo activo

---

## 🎯 Visión del Proyecto

Crear un portfolio profesional de clase mundial que demuestre expertise técnico, posicionamiento profesional y mejores prácticas de desarrollo web.

---

## 📊 Métricas de Éxito

| Métrica | Estado Actual | Objetivo | Prioridad |
|---------|--------------|----------|-----------|
| Lighthouse Performance | Sin medir | 95+ | 🔴 Alta |
| Lighthouse Accessibility | Sin medir | 95+ | 🔴 Alta |
| Lighthouse SEO | Sin medir | 100 | 🔴 Alta |
| Lighthouse Best Practices | Sin medir | 95+ | 🟡 Media |
| Time to Interactive (TTI) | Sin medir | <3s | 🔴 Alta |
| First Contentful Paint (FCP) | Sin medir | <1.5s | 🔴 Alta |
| Cumulative Layout Shift (CLS) | Sin medir | <0.1 | 🟡 Media |
| Total Blocking Time (TBT) | Sin medir | <300ms | 🟡 Media |

---

## 🚀 Épicas y Features

### 🎨 Epic 1: Diseño y UX Profesional
**Objetivo:** Portfolio visualmente impactante y fácil de usar

#### Features:
- [x] Tema Black & Gold elegante
- [x] Modo oscuro/claro con persistencia
- [x] Animaciones fluidas y profesionales
- [ ] Micro-interacciones en botones y cards
- [ ] Transiciones suaves entre secciones
- [ ] Parallax scrolling en hero section
- [ ] Cursor personalizado (opcional)
- [ ] Easter eggs para developers

---

### 🔍 Epic 2: SEO y Discoverabilidad
**Objetivo:** Máxima visibilidad en motores de búsqueda

#### Features:
- [x] Meta tags completos (description, keywords, robots)
- [x] Open Graph para redes sociales
- [x] Twitter Cards
- [x] Schema.org (JSON-LD) para rich snippets
- [x] robots.txt configurado
- [x] sitemap.xml generado
- [x] Canonical URLs
- [ ] Integración Google Search Console
- [ ] Envío de sitemap a Google/Bing
- [ ] Rich snippets para proyectos
- [ ] FAQ Schema (si se agrega sección)
- [ ] Breadcrumbs Schema

**Tareas pendientes:**
```markdown
- [ ] Registrar sitio en Google Search Console
- [ ] Registrar sitio en Bing Webmaster Tools
- [ ] Verificar indexación en Google
- [ ] Analizar keywords con Google Trends
- [ ] Optimizar meta descriptions por sección
```

---

### ♿ Epic 3: Accesibilidad (a11y)
**Objetivo:** WCAG AA compliant, usable para todos

#### Features:
- [x] Skip links funcionales
- [x] ARIA labels en navegación
- [x] Roles semánticos (navigation, menubar, etc.)
- [x] aria-expanded en menú móvil
- [x] Navegación por teclado
- [ ] Foco visible en todos los elementos interactivos
- [ ] Mensajes de error accesibles en formularios
- [ ] Transcripciones de videos (si se agregan)
- [ ] Alt text descriptivos en todas las imágenes
- [ ] Pruebas con lectores de pantalla (NVDA, JAWS)
- [ ] Contraste AA en todos los textos

**Tareas pendientes:**
```markdown
- [ ] Auditoría con WAVE (https://wave.webaim.org/)
- [ ] Pruebas con NVDA en Windows
- [ ] Pruebas con VoiceOver en Mac
- [ ] Verificar navegación solo con teclado
- [ ] Revisar contraste en modo claro
- [ ] Añadir live regions para contenido dinámico
```

---

### 📱 Epic 4: Progressive Web App (PWA)
**Objetivo:** Experiencia de app nativa, funciona offline

#### Features:
- [x] Service Worker con caching
- [x] manifest.json completo
- [x] Estrategia Network-First
- [x] Shortcuts en manifest
- [ ] Página offline personalizada (offline.html)
- [ ] Install prompt personalizado
- [ ] Notificaciones push (opcional)
- [ ] Sincronización en background
- [ ] Share API para compartir proyectos
- [ ] Iconos PWA en todos los tamaños
- [ ] Screenshots para app stores

**Tareas pendientes:**
```markdown
- [ ] Crear offline.html con diseño custom
- [ ] Generar íconos 72x72 a 512x512
- [ ] Crear maskable icons
- [ ] Tomar screenshots para manifest
- [ ] Probar instalación en iOS
- [ ] Probar instalación en Android
- [ ] Implementar update notification
- [ ] Añadir badge notifications (si aplica)
```

---

### ⚡ Epic 5: Performance y Optimización
**Objetivo:** Carga ultrarrápida, Core Web Vitals óptimos

#### Features:
- [x] Service Worker caching
- [x] .htaccess con Gzip y cache headers
- [x] Registro de Service Worker en main.js
- [ ] Critical CSS inline
- [ ] Lazy loading de imágenes
- [ ] Preload de recursos críticos
- [ ] Minificación de CSS/JS
- [ ] Code splitting (si crece el JS)
- [ ] WebP con fallback a JPG
- [ ] Responsive images con srcset
- [ ] Font loading optimization
- [ ] Eliminación de CSS no usado

**Tareas pendientes:**
```markdown
- [ ] Implementar lazy loading: <img loading="lazy">
- [ ] Convertir todas las imágenes a WebP
- [ ] Minificar CSS con cssnano
- [ ] Minificar JS con Terser
- [ ] Extraer critical CSS con critical
- [ ] Añadir preload para fonts
- [ ] Optimizar Google Fonts carga
- [ ] Configurar CDN (CloudFlare/GitHub Pages)
- [ ] Comprimir imágenes con imagemin
- [ ] Implementar picture element
```

---

### 🔒 Epic 6: Seguridad
**Objetivo:** Headers de seguridad, protección contra ataques

#### Features:
- [x] HSTS (HTTP Strict Transport Security)
- [x] X-Frame-Options
- [x] X-Content-Type-Options
- [x] X-XSS-Protection
- [x] Referrer-Policy
- [x] Permissions-Policy
- [ ] Content Security Policy (CSP)
- [ ] Subresource Integrity (SRI) para CDNs
- [ ] Sanitización de inputs en formulario
- [ ] Rate limiting en backend (cuando se implemente)
- [ ] CAPTCHA en formulario de contacto

**Tareas pendientes:**
```markdown
- [ ] Implementar CSP header estricto
- [ ] Añadir SRI a Google Fonts
- [ ] Validar y sanitizar inputs del formulario
- [ ] Implementar reCAPTCHA v3
- [ ] Configurar SSL/TLS en GitHub Pages
- [ ] Revisar con securityheaders.com
- [ ] Escaneo de vulnerabilidades
```

---

### 📊 Epic 7: Analytics y Tracking
**Objetivo:** Entender comportamiento de usuarios, optimizar conversiones

#### Features:
- [x] Google Analytics 4 preparado
- [x] Event tracking (proyectos, social, formulario)
- [x] Scroll depth tracking
- [ ] Heatmaps con Hotjar/Clarity
- [ ] Session recording
- [ ] Conversion funnels
- [ ] A/B testing
- [ ] Error tracking con Sentry
- [ ] Performance monitoring
- [ ] Goal tracking (contacto, CV download)

**Tareas pendientes:**
```markdown
- [ ] Crear cuenta Google Analytics 4
- [ ] Obtener Measurement ID
- [ ] Reemplazar ID en scripts/analytics.js
- [ ] Descomentar script en index.html
- [ ] Configurar Microsoft Clarity (gratis)
- [ ] Crear cuenta Sentry para errores
- [ ] Definir conversiones clave
- [ ] Configurar embudos de conversión
- [ ] Dashboard personalizado en GA4
```

---

### 🎨 Epic 8: Assets y Contenido Visual
**Objetivo:** Imágenes profesionales, favicon, og:image

#### Features:
- [ ] Favicon en todos los tamaños
- [ ] Open Graph image (1200x630)
- [ ] Foto de perfil profesional
- [ ] Screenshots de proyectos
- [ ] Imágenes de blog
- [ ] Logos de tecnologías
- [ ] Iconos personalizados
- [ ] Animaciones Lottie (opcional)
- [ ] Video de presentación (opcional)

**Tareas pendientes:**
```markdown
- [ ] Diseñar favicon con logo MGV
- [ ] Generar favicon con realfavicongenerator.net
- [ ] Crear og-image.jpg (1200x630)
- [ ] Tomar foto profesional de perfil
- [ ] Screenshots de Flores Victoria
- [ ] Screenshots de Terminal History
- [ ] Crear placeholder images
- [ ] Optimizar todas las imágenes
- [ ] Convertir a WebP
- [ ] Añadir watermark a screenshots
```

**Estructura de assets:**
```
assets/
├── icons/
│   ├── favicon.ico
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
├── og-image.jpg
├── profile.jpg
├── profile.webp
├── projects/
│   ├── flores-victoria.jpg
│   ├── flores-victoria.webp
│   ├── terminal-history.jpg
│   ├── terminal-history.webp
│   └── ...
├── blog/
│   └── ...
└── tech/
    ├── javascript.svg
    ├── nodejs.svg
    ├── docker.svg
    └── ...
```

---

### 📧 Epic 9: Formulario de Contacto Funcional
**Objetivo:** Recibir mensajes de forma confiable y segura

#### Features:
- [x] Formulario HTML con validación
- [ ] Validación en tiempo real
- [ ] Integración con Formspree/EmailJS
- [ ] CAPTCHA (reCAPTCHA v3)
- [ ] Mensajes de éxito/error profesionales
- [ ] Auto-respuesta al remitente
- [ ] Notificaciones a tu email
- [ ] Rate limiting
- [ ] Honeypot anti-spam
- [ ] Integración con CRM (opcional)

**Tareas pendientes:**
```markdown
- [ ] Crear cuenta en Formspree (gratis)
  URL: https://formspree.io/
- [ ] O crear cuenta en EmailJS
  URL: https://www.emailjs.com/
- [ ] Implementar validación JS en tiempo real
- [ ] Añadir reCAPTCHA v3
- [ ] Diseñar mensajes de éxito/error
- [ ] Probar envío de emails
- [ ] Configurar auto-respuesta
- [ ] Añadir honeypot field
- [ ] Implementar rate limiting
```

**Opciones de implementación:**
1. **Formspree** (Recomendado - más simple)
   ```html
   <form action="https://formspree.io/f/{form-id}" method="POST">
   ```

2. **EmailJS** (Más control)
   ```javascript
   emailjs.send("service_id", "template_id", templateParams)
   ```

3. **Backend propio** (Máximo control)
   - Node.js + Nodemailer
   - Serverless function (Vercel/Netlify)

---

### 📝 Epic 10: Blog y Contenido
**Objetivo:** Demostrar expertise, mejorar SEO, generar tráfico

#### Features:
- [x] Estructura de blog
- [x] Sistema de categorías y tags
- [ ] Contenido de calidad (mínimo 5 posts)
- [ ] Markdown support para posts
- [ ] Syntax highlighting para código
- [ ] Comentarios (Disqus/Utterances)
- [ ] Compartir en redes sociales
- [ ] Tiempo de lectura estimado
- [ ] Posts relacionados
- [ ] Newsletter (opcional)
- [ ] RSS feed

**Ideas de posts:**
```markdown
1. "Cómo gestiono 1,000+ cambios/año sin morir en el intento"
2. "Arquitectura de microservicios: Lecciones de producción"
3. "DevOps + Compliance: No son enemigos"
4. "Automatización de Change Management con Jenkins + JIRA"
5. "De monolito a microservicios: Case study Flores Victoria"
6. "Service Workers: PWA desde cero"
7. "Docker Compose: Orquestando 4 bases de datos"
8. "Jaeger: Observabilidad distribuida en la práctica"
```

**Tareas pendientes:**
```markdown
- [ ] Escribir 5 posts iniciales
- [ ] Implementar Markdown parser (marked.js)
- [ ] Añadir syntax highlighting (Prism.js)
- [ ] Integrar Utterances para comentarios
- [ ] Botones de share social
- [ ] Generar RSS feed
- [ ] SEO por post (meta tags dinámicos)
- [ ] Schema.org Article markup
```

---

### 🚀 Epic 11: Proyectos Destacados
**Objetivo:** Showcase de trabajo real con detalles técnicos

#### Features:
- [x] Grid de proyectos con filtros
- [x] Flores Victoria destacado
- [ ] Case studies detallados
- [ ] Demos en vivo
- [ ] Repositorios públicos
- [ ] Documentación técnica
- [ ] Métricas de impacto
- [ ] Testimonios de clientes
- [ ] Video demos (opcional)

**Proyectos a documentar:**
```markdown
1. Flores Victoria (Enterprise E-commerce)
   - [ ] Case study completo
   - [ ] Diagrama de arquitectura
   - [ ] Métricas de performance
   - [ ] Screenshots
   - [ ] Demo en vivo

2. Terminal de Historia de Programación
   - [ ] Mejorar README
   - [ ] Añadir más comandos
   - [ ] Screenshots
   - [ ] Demo funcionando

3. Proyectos nuevos a añadir:
   - [ ] Dashboard de monitoreo (Grafana)
   - [ ] Pipeline CI/CD template
   - [ ] Terraform modules
   - [ ] Ansible playbooks
```

**Tareas pendientes:**
```markdown
- [ ] Escribir case study de Flores Victoria
- [ ] Crear diagramas de arquitectura
- [ ] Capturar screenshots profesionales
- [ ] Subir Flores Victoria a repo público (sanitizado)
- [ ] Crear demo en vivo (Vercel/Netlify)
- [ ] Documentar decisiones técnicas
- [ ] Añadir métricas de impacto
- [ ] Obtener testimonios
```

---

### 💼 Epic 12: Branding y Posicionamiento
**Objetivo:** Posicionamiento claro como DevOps Lead/SRE

#### Features:
- [ ] Elevator pitch refinado
- [ ] Título profesional optimizado
- [ ] LinkedIn sync
- [ ] GitHub profile README
- [ ] Stack Overflow profile
- [ ] Dev.to profile
- [ ] Medium articles
- [ ] Speaking engagements (si aplica)

**Títulos profesionales a probar:**
```markdown
Opción A: "DevOps Lead & SRE | 12+ años en Infraestructura Crítica Financiera"
Opción B: "Platform Architect & Change Management Expert | DevOps | Compliance"
Opción C: "Full Stack Developer & DevOps Lead | Microservices | Cloud-Native"
Opción D (Actual): "Especialista Senior en Gestión de Cambios TI, DevOps y Transformación Digital"
```

**Tareas pendientes:**
```markdown
- [ ] Definir elevator pitch de 30s
- [ ] A/B testing de títulos profesionales
- [ ] Actualizar LinkedIn con nuevo título
- [ ] Crear GitHub profile README
- [ ] Crear perfil en Stack Overflow
- [ ] Crear perfil en Dev.to
- [ ] Publicar 3 artículos en Medium
- [ ] Hablar en 1 meetup local (objetivo 2025)
```

---

## 🎯 Sprints y Roadmap

### 🔥 Sprint 1: Fundamentos (Semana 1) - **EN CURSO**
**Objetivo:** Base sólida, profesional, deployable

**Tareas:**
- [x] Implementar mejoras SEO
- [x] Implementar accesibilidad básica
- [x] Configurar PWA
- [x] Service Worker
- [x] Analytics preparado
- [ ] Crear favicon
- [ ] Crear og-image.jpg
- [ ] Lighthouse audit inicial
- [ ] Deploy a producción

**Definition of Done:**
- Lighthouse Performance: 80+
- Lighthouse Accessibility: 90+
- Lighthouse SEO: 95+
- PWA instalable
- Sin errores en consola

---

### 🚀 Sprint 2: Optimización (Semana 2)
**Objetivo:** Performance óptimo, assets completos

**Tareas:**
- [ ] Lazy loading de imágenes
- [ ] Optimizar todas las imágenes a WebP
- [ ] Minificar CSS y JS
- [ ] Critical CSS
- [ ] Preload de recursos críticos
- [ ] Configurar formulario con Formspree
- [ ] Añadir reCAPTCHA
- [ ] Screenshots de todos los proyectos

**Definition of Done:**
- Lighthouse Performance: 95+
- Todas las imágenes optimizadas
- Formulario funcional
- TTI < 3s
- FCP < 1.5s

---

### 📝 Sprint 3: Contenido (Semana 3)
**Objetivo:** Blog con contenido de valor

**Tareas:**
- [ ] Escribir 3 posts de blog
- [ ] Implementar Markdown parser
- [ ] Syntax highlighting
- [ ] Comentarios con Utterances
- [ ] Share buttons
- [ ] Schema.org Article markup
- [ ] Case study Flores Victoria
- [ ] Documentar 3 proyectos más

**Definition of Done:**
- Mínimo 3 posts publicados
- Sistema de comentarios funcionando
- SEO por post
- 5 proyectos documentados

---

### 📊 Sprint 4: Analytics y Growth (Semana 4)
**Objetivo:** Tracking completo, primeros insights

**Tareas:**
- [ ] Configurar Google Analytics 4
- [ ] Configurar Microsoft Clarity
- [ ] Configurar Sentry
- [ ] Google Search Console
- [ ] Enviar sitemap a Google/Bing
- [ ] Primeras métricas de tráfico
- [ ] A/B test de CTAs
- [ ] Optimización conversiones

**Definition of Done:**
- GA4 funcionando
- 100+ visitas orgánicas/mes
- 0 errores en Sentry
- Indexado en Google
- Conversión formulario: 2%+

---

## 📈 Backlog Priorizado

### 🔴 Alta Prioridad (Hacer primero)

| ID | Tarea | Epic | Esfuerzo | Impacto | Estado |
|----|-------|------|----------|---------|--------|
| HP-001 | Crear favicon e íconos PWA | Assets | 2h | Alto | ⏳ Pendiente |
| HP-002 | Crear og-image.jpg | Assets | 1h | Alto | ⏳ Pendiente |
| HP-003 | Lighthouse audit inicial | Performance | 0.5h | Alto | ⏳ Pendiente |
| HP-004 | Configurar Google Analytics | Analytics | 1h | Alto | ⏳ Pendiente |
| HP-005 | Lazy loading de imágenes | Performance | 2h | Alto | ⏳ Pendiente |
| HP-006 | Configurar formulario Formspree | Contacto | 1h | Alto | ⏳ Pendiente |
| HP-007 | Optimizar imágenes a WebP | Performance | 3h | Medio | ⏳ Pendiente |
| HP-008 | Escribir primer post de blog | Contenido | 4h | Alto | ⏳ Pendiente |
| HP-009 | Screenshots de proyectos | Proyectos | 2h | Medio | ⏳ Pendiente |
| HP-010 | Registrar en Search Console | SEO | 0.5h | Alto | ⏳ Pendiente |

---

### 🟡 Media Prioridad (Después de alta)

| ID | Tarea | Epic | Esfuerzo | Impacto | Estado |
|----|-------|------|----------|---------|--------|
| MP-001 | Minificar CSS y JS | Performance | 2h | Medio | ⏳ Pendiente |
| MP-002 | Critical CSS inline | Performance | 3h | Medio | ⏳ Pendiente |
| MP-003 | Implementar CSP header | Seguridad | 2h | Medio | ⏳ Pendiente |
| MP-004 | Añadir reCAPTCHA v3 | Contacto | 2h | Medio | ⏳ Pendiente |
| MP-005 | Markdown parser para blog | Blog | 3h | Alto | ⏳ Pendiente |
| MP-006 | Comentarios con Utterances | Blog | 1h | Bajo | ⏳ Pendiente |
| MP-007 | Case study Flores Victoria | Proyectos | 6h | Alto | ⏳ Pendiente |
| MP-008 | Configurar Microsoft Clarity | Analytics | 0.5h | Medio | ⏳ Pendiente |
| MP-009 | Página offline personalizada | PWA | 2h | Bajo | ⏳ Pendiente |
| MP-010 | Install prompt PWA | PWA | 3h | Medio | ⏳ Pendiente |

---

### 🟢 Baja Prioridad (Nice to have)

| ID | Tarea | Epic | Esfuerzo | Impacto | Estado |
|----|-------|------|----------|---------|--------|
| LP-001 | Micro-interacciones | Diseño | 4h | Bajo | ⏳ Pendiente |
| LP-002 | Parallax scrolling | Diseño | 3h | Bajo | ⏳ Pendiente |
| LP-003 | Cursor personalizado | Diseño | 2h | Bajo | ⏳ Pendiente |
| LP-004 | Easter eggs | Fun | 2h | Bajo | ⏳ Pendiente |
| LP-005 | Video de presentación | Contenido | 8h | Medio | ⏳ Pendiente |
| LP-006 | Newsletter signup | Marketing | 4h | Medio | ⏳ Pendiente |
| LP-007 | RSS feed | Blog | 2h | Bajo | ⏳ Pendiente |
| LP-008 | Animaciones Lottie | Diseño | 4h | Bajo | ⏳ Pendiente |
| LP-009 | Notificaciones push | PWA | 6h | Bajo | ⏳ Pendiente |
| LP-010 | Share API | PWA | 2h | Bajo | ⏳ Pendiente |

---

## 🐛 Bugs y Issues Conocidos

| ID | Descripción | Severidad | Estado | Asignado |
|----|-------------|-----------|--------|----------|
| BUG-001 | Falta favicon (404) | 🔴 Alta | ⏳ Pendiente | - |
| BUG-002 | Falta og-image.jpg (404) | 🔴 Alta | ⏳ Pendiente | - |
| BUG-003 | Imágenes proyectos no cargan | 🟡 Media | ⏳ Pendiente | - |
| BUG-004 | Formulario no envía emails | 🔴 Alta | ⏳ Pendiente | - |
| BUG-005 | Service Worker en localhost | 🟢 Baja | ✅ Resuelto | - |

---

## 📚 Documentación Técnica

### Arquitectura del Sitio
```
Portfolio (GitHub Pages)
│
├── Frontend (Vanilla JS)
│   ├── HTML5 Semántico
│   ├── CSS3 (Variables, Grid, Flexbox)
│   ├── JavaScript ES6+
│   └── Service Worker (PWA)
│
├── Assets
│   ├── Imágenes (WebP + JPG fallback)
│   ├── Iconos (SVG)
│   └── Fonts (Google Fonts)
│
├── SEO
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── Schema.org (JSON-LD)
│   └── Meta tags completos
│
└── Analytics
    ├── Google Analytics 4
    ├── Microsoft Clarity
    └── Sentry (error tracking)
```

### Stack Tecnológico Completo
```yaml
Frontend:
  - HTML5: Semántico, accesible
  - CSS3: Variables, Grid, Flexbox, Animations
  - JavaScript: ES6+, Modules, Async/Await
  
PWA:
  - Service Worker: Caching, Offline
  - Manifest: Installable app
  - Push Notifications: (Futuro)

Optimización:
  - Gzip: Compresión
  - Browser Cache: Expires headers
  - Lazy Loading: Imágenes
  - Code Splitting: (Futuro si crece)

SEO:
  - Meta tags: Complete
  - Open Graph: Social sharing
  - Schema.org: Rich snippets
  - Sitemap: XML
  - Robots: txt

Analytics:
  - Google Analytics 4: User behavior
  - Microsoft Clarity: Heatmaps
  - Sentry: Error tracking

Deployment:
  - GitHub Pages: Hosting
  - GitHub Actions: CI/CD (Futuro)
  - Custom domain: (Futuro)

Seguridad:
  - HTTPS: GitHub Pages
  - Security Headers: HSTS, X-Frame, CSP
  - Input Validation: Forms
  - CAPTCHA: reCAPTCHA v3
```

---

## 🎓 Recursos y Referencias

### Herramientas de Desarrollo
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/

### Validadores
- **HTML Validator:** https://validator.w3.org/
- **CSS Validator:** https://jigsaw.w3.org/css-validator/
- **WAVE (Accessibility):** https://wave.webaim.org/
- **Schema Markup Validator:** https://validator.schema.org/

### Generadores
- **Favicon Generator:** https://realfavicongenerator.net/
- **OG Image Generator:** https://www.opengraph.xyz/
- **Sitemap Generator:** https://www.xml-sitemaps.com/

### Servicios
- **Formspree:** https://formspree.io/
- **EmailJS:** https://www.emailjs.com/
- **Google Analytics:** https://analytics.google.com/
- **Microsoft Clarity:** https://clarity.microsoft.com/
- **Sentry:** https://sentry.io/

---

## 📞 Contacto y Soporte

**Desarrollador:** Mauricio Garay Veas  
**Email:** mauriciogarayveas@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/megaray/  
**GitHub:** https://github.com/laloaggro

---

## 📝 Notas de Versión

### v1.0.0 - 25 de octubre de 2025
**Inicial Release**
- ✅ Diseño Black & Gold completo
- ✅ SEO optimizado (robots.txt, sitemap.xml)
- ✅ Accesibilidad (skip links, ARIA)
- ✅ PWA (Service Worker, manifest)
- ✅ Performance (Gzip, cache headers)
- ✅ Analytics preparado
- ✅ Sección de Roles agregada
- ⏳ Pendiente: Assets (favicon, og-image)
- ⏳ Pendiente: Formulario funcional
- ⏳ Pendiente: Contenido de blog

---

**Este backlog es un documento vivo y se actualiza continuamente.**
