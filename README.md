# Mauricio Garay Veas | Portfolio

Portfolio profesional de Mauricio Garay Veas - Desarrollador Full Stack especializado en JavaScript, Python y tecnologías web modernas.

## 🚀 Características

- ✨ Diseño moderno y responsive con tema Black & Gold
- 🎨 Animaciones fluidas y efectos visuales
- 📁 Sección de proyectos destacados con filtros
- 📝 Blog integrado para artículos y noticias
- 🔍 SEO optimizado con meta tags completos
- 📱 Progressive Web App (PWA)
- 🌙 Modo oscuro/claro
- ⚡ Carga dinámica de contenido
- 📊 Timeline de experiencia profesional
- 📞 Información de contacto completa

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express
- **Estilos**: CSS personalizado con animaciones
- **Herramientas**: GitHub Pages, PWA

## 📦 Estructura del Proyecto

```
.
├── index.html          # Página principal
├── components/         # Componentes reutilizables
├── data/              
│   └── portfolio.js   # Datos del portfolio (info personal, proyectos, blog)
├── scripts/           
│   ├── main.js        # Funcionalidad principal
│   ├── projects.js    # Módulo de proyectos
│   └── animations.js  # Animaciones
├── styles/            
│   ├── main.css       # Estilos principales (Black & Gold)
│   └── animations.css # Animaciones CSS
├── assets/            
│   ├── projects/      # Imágenes de proyectos
│   ├── blog/          # Imágenes del blog
│   ├── icons/         # Iconos PWA
│   └── tech/          # Logos de tecnologías
├── server/            # Servidor Node.js (opcional)
├── deploy.sh          # Script de despliegue
└── optimize-local.sh  # Optimización local
```

## 🚀 Instalación y Uso

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start
```

### Despliegue

```bash
# Desplegar a GitHub Pages
./deploy.sh
```

## 📝 Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## 📧 Contacto

- 📧 Email: laloaggro@gmail.com | mauriciogarayveas@gmail.com
- 📞 Teléfono: +56 9 6360 3177
- 📍 Ubicación: Santiago, Chile
- 💼 GitHub: [@laloaggro](https://github.com/laloaggro)
- 🌐 Portfolio: [laloaggro.github.io](https://laloaggro.github.io)

## 📝 Gestión de Contenido

### Actualizar Información Personal
Edita `data/portfolio.js` para cambiar:
- Información personal y contacto
- Habilidades y niveles
- Proyectos destacados
- Experiencia profesional
- Posts del blog

### Completar Información del CV

El portfolio incluye datos básicos. Para completar con tu experiencia real:

1. **Experiencia Profesional** (`data/portfolio.js` - sección `experience`):
   - Reemplaza los ejemplos con tus empleos reales
   - Incluye: empresa, cargo, período, ubicación, logros
   - Usa verbos de acción y métricas cuantificables

2. **Educación** (`data/portfolio.js` - sección `education`):
   - Agrega tus títulos, certificaciones y cursos
   - Incluye: institución, título, período, descripción

3. **Proyectos** (`data/portfolio.js` - sección `projects`):
   - Ya incluye **Flores Victoria** como proyecto destacado
   - Agrega otros proyectos relevantes de tu portafolio
   - Incluye capturas de pantalla en `assets/projects/`

4. **Blog** (`data/portfolio.js` - sección `blog`):
   - Incluye post sobre Flores Victoria
   - Agrega tus artículos técnicos o noticias profesionales
   - Consulta `assets/BLOG_GUIDE.md` para formato completo

### Agregar Posts al Blog
Consulta la guía completa en `assets/BLOG_GUIDE.md` para:
- Crear nuevos posts
- Gestionar imágenes
- Optimizar contenido
- Publicar actualizaciones