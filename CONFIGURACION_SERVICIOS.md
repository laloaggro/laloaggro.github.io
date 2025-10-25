# Guía de Configuración de Servicios Externos

Esta guía te ayudará a configurar los servicios externos necesarios para el portfolio.

## 📋 Índice
1. [Formspree - Formulario de Contacto](#formspree)
2. [Google Analytics 4](#google-analytics)
3. [Google Search Console](#google-search-console)
4. [Favicon y PWA Icons](#favicon-pwa-icons)

---

## 1. Formspree - Formulario de Contacto {#formspree}

### Paso 1: Crear cuenta en Formspree

1. Ve a [https://formspree.io/](https://formspree.io/)
2. Haz clic en **"Get Started"**
3. Regístrate con tu email: `mauriciogarayveas@gmail.com`
4. Verifica tu email

### Paso 2: Crear un nuevo formulario

1. En el dashboard, haz clic en **"+ New Form"**
2. Nombre del formulario: `Portfolio Contact Form`
3. Email donde recibirás mensajes: `mauriciogarayveas@gmail.com`
4. Copia el **Form ID** (algo como `mxxxxxxx`)

### Paso 3: Configurar en index.html

1. Abre `index.html`
2. Busca la línea:
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Reemplaza `YOUR_FORM_ID` con tu Form ID de Formspree
4. Ejemplo:
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/mxxxxxxx" method="POST">
   ```

### Paso 4: Configuración avanzada (opcional)

En el dashboard de Formspree:
- **Settings > Notifications**: Configura notificaciones por email
- **Settings > Reply-To**: Habilita responder directamente desde email
- **Settings > CAPTCHA**: Activa protección anti-spam
- **Settings > Custom Thank You Page**: URL de redirección después de enviar

### Paso 5: Prueba

1. Levanta el servidor: `npm run dev`
2. Abre http://localhost:8080
3. Ve a la sección **Contacto**
4. Envía un mensaje de prueba
5. Verifica que llegue a tu email

**Plan gratuito**: 50 envíos/mes (suficiente para portfolio personal)

**Alternativa: EmailJS**
- Más complejo pero más flexible
- [https://www.emailjs.com/](https://www.emailjs.com/)
- Tutorial: `scripts/configure-emailjs.md`

---

## 2. Google Analytics 4 {#google-analytics}

### Paso 1: Crear cuenta de Google Analytics

1. Ve a [https://analytics.google.com/](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Empezar a medir"**

### Paso 2: Configurar propiedad

1. **Nombre de la cuenta**: `MGV Portfolio`
2. **Nombre de la propiedad**: `laloaggro.github.io`
3. **Zona horaria**: `(GMT-04:00) Chile`
4. **Moneda**: `Peso chileno (CLP)`
5. Haz clic en **"Siguiente"**

### Paso 3: Configurar flujo de datos

1. Selecciona **"Web"**
2. **URL del sitio web**: `https://laloaggro.github.io`
3. **Nombre del flujo**: `Portfolio Website`
4. Haz clic en **"Crear flujo"**

### Paso 4: Obtener ID de medición

1. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)
2. Ejemplo: `G-ABC123DEF4`

### Paso 5: Configurar en scripts/analytics.js

1. Abre `scripts/analytics.js`
2. Busca la línea:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
3. Reemplaza con tu ID real:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-ABC123DEF4';
   ```

### Paso 6: Descomentar en index.html

1. Abre `index.html`
2. Busca cerca de `</body>`:
   ```html
   <!-- <script src="scripts/analytics.js" type="module"></script> -->
   ```
3. Descomenta:
   ```html
   <script src="scripts/analytics.js" type="module"></script>
   ```

### Paso 7: Configuración avanzada (opcional)

En Google Analytics:
- **Eventos > Crear evento personalizado**: Ya configurados en analytics.js
- **Explorar > Crear exploración**: Crea reportes personalizados
- **Administrar > Objetivos de conversión**: Define objetivos (ej: envío de formulario)

### Paso 8: Prueba

1. Levanta el servidor: `npm run dev`
2. Abre http://localhost:8080
3. Ve a Google Analytics > Informes en tiempo real
4. Verifica que se registre tu visita (en producción, no en localhost)

**Eventos personalizados configurados:**
- ✅ Clics en proyectos (`project_click`)
- ✅ Clics en redes sociales (`social_click`)
- ✅ Profundidad de scroll (`scroll_depth`)
- ✅ Envío de formulario (`form_submission`)

---

## 3. Google Search Console {#google-search-console}

### Paso 1: Agregar propiedad

1. Ve a [https://search.google.com/search-console](https://search.google.com/search-console)
2. Haz clic en **"Agregar propiedad"**
3. Selecciona **"Prefijo de URL"**
4. Ingresa: `https://laloaggro.github.io`

### Paso 2: Verificar propiedad

**Método 1: Etiqueta HTML (Recomendado)**
1. Copia la etiqueta meta de verificación
2. Pégala en `<head>` de `index.html`:
   ```html
   <meta name="google-site-verification" content="tu-codigo-de-verificacion" />
   ```
3. Haz commit y push a GitHub
4. Espera 1-2 minutos
5. Haz clic en **"Verificar"** en Search Console

**Método 2: Archivo HTML**
1. Descarga el archivo HTML de verificación
2. Súbelo a la raíz del repositorio
3. Haz clic en **"Verificar"**

### Paso 3: Enviar sitemap

1. En Search Console, ve a **"Sitemaps"**
2. Ingresa: `sitemap.xml`
3. Haz clic en **"Enviar"**
4. Espera 24-48 horas para indexación

### Paso 4: Monitorear

- **Rendimiento**: Clics, impresiones, CTR, posición promedio
- **Cobertura**: Páginas indexadas, errores
- **Mejoras**: Usabilidad móvil, experiencia en la página
- **Enlaces**: Backlinks, enlaces internos

---

## 4. Favicon y PWA Icons {#favicon-pwa-icons}

### Opción 1: Generadores HTML (Ya creados)

1. **Favicon e Iconos PWA:**
   ```bash
   # Abre en navegador
   http://localhost:8080/icon-generator.html
   ```
   - Haz clic en "Generar Iconos"
   - Descarga cada tamaño
   - Guarda en `assets/icons/`

2. **Open Graph Image:**
   ```bash
   # Abre en navegador
   http://localhost:8080/og-image-generator.html
   ```
   - Haz clic en "Generar Imagen"
   - Descarga como JPG
   - Guarda como `assets/og-image.jpg`

### Opción 2: Herramientas Online

**Favicon Generator:**
- [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
- Sube logo o imagen
- Descarga package completo
- Extrae archivos a raíz y `assets/icons/`

**PWA Icon Generator:**
- [https://www.pwabuilder.com/imageGenerator](https://www.pwabuilder.com/imageGenerator)
- Sube imagen 512x512
- Genera todos los tamaños
- Descarga y extrae a `assets/icons/`

**Open Graph Image Generator:**
- [https://www.opengraph.xyz/](https://www.opengraph.xyz/)
- Crea diseño personalizado 1200x630
- Descarga como `og-image.jpg`

### Opción 3: Scripts Node.js

```bash
# Generar placeholders SVG (ya ejecutado)
node scripts/generate-icons.js
node scripts/generate-og-image.js
```

**Nota:** Los SVG están creados pero necesitas convertirlos a PNG/ICO para compatibilidad total.

### Verificar instalación

✅ **Archivos necesarios:**
```
assets/
  icons/
    icon-72x72.png
    icon-96x96.png
    icon-128x128.png
    icon-144x144.png
    icon-152x152.png
    icon-192x192.png
    icon-384x384.png
    icon-512x512.png
  og-image.jpg (o .svg)
favicon.ico (raíz del proyecto)
```

✅ **Referencias en index.html:**
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="assets/icons/icon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/icons/icon-180x180.png">
```

✅ **Referencias en manifest.json:**
```json
{
  "icons": [
    { "src": "assets/icons/icon-72x72.png", "sizes": "72x72", "type": "image/png" },
    // ... más tamaños
  ]
}
```

---

## 📊 Checklist de Configuración

### Servicios Externos
- [ ] Formspree configurado y probado
- [ ] Google Analytics ID actualizado
- [ ] Analytics descomen en index.html
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a Search Console

### Assets
- [ ] Favicon.ico generado
- [ ] Iconos PWA (8 tamaños) generados
- [ ] Open Graph image creada
- [ ] Screenshots de proyectos reales

### Testing
- [ ] Formulario de contacto funcional
- [ ] Analytics rastreando eventos
- [ ] PWA instalable en móvil
- [ ] Iconos visibles en pestañas/home screen

---

## 🆘 Solución de Problemas

### Formulario no envía
- Verifica que el Form ID sea correcto
- Revisa la consola del navegador (F12)
- Asegúrate de estar en HTTPS (no localhost)
- Verifica que `method="POST"` esté presente

### Analytics no rastrea
- Verifica que el ID empiece con `G-` (GA4)
- Confirma que el script esté descomentado
- Prueba en incógnito (evita bloqueadores de ads)
- Espera 24-48 horas para datos en reportes

### PWA no instala
- Verifica que estés en HTTPS (GitHub Pages ✅)
- Revisa que Service Worker esté registrado (DevTools > Application)
- Confirma que todos los iconos existan
- Valida manifest.json en DevTools

### Iconos no se ven
- Verifica rutas relativas/absolutas
- Limpia caché del navegador
- Revisa que los archivos existan en las rutas correctas
- Usa DevTools > Network para ver 404s

---

## 📚 Recursos Adicionales

- [Formspree Documentation](https://help.formspree.io/)
- [Google Analytics 4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [PWA Icons Best Practices](https://web.dev/add-manifest/)
- [Open Graph Protocol](https://ogp.me/)

---

**Última actualización:** Octubre 2024
**Mantenedor:** Mauricio Garay Veas
