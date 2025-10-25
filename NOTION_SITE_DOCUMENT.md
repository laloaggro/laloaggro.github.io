# Sitio Web Profesional - laloaggro.github.io

## Descripción General

Este es el sitio web profesional personal construido con Next.js 13+ App Router. El sitio sirve como plataforma principal para mostrar servicios profesionales, portafolio de proyectos y blog técnico.

## Tecnologías Utilizadas

- **Framework**: Next.js 16
- **Lenguaje**: TypeScript/JavaScript
- **Estilos**: Tailwind CSS
- **Componentes**: React 19
- **Iconos**: React Icons
- **Despliegue**: GitHub Pages/Vercel

## Estructura del Proyecto

```
laloaggro.github.io/
├── .vscode/                  # Configuración de VSCode
├── public/                   # Archivos estáticos
├── src/
│   ├── app/                  # Páginas de la aplicación
│   │   ├── about/            # Página "Acerca de"
│   │   ├── api/              # APIs personalizadas
│   │   ├── approach/         # Página de enfoque/metodología
│   │   ├── blog/             # Blog y artículos
│   │   ├── contact/          # Página de contacto
│   │   ├── dashboard/        # Panel de control
│   │   ├── portfolio/        # Portafolio de proyectos
│   │   ├── resources/        # Recursos y herramientas
│   │   ├── services/         # Servicios ofrecidos
│   │   ├── testimonials/     # Testimonios
│   │   ├── layout.tsx        # Layout principal
│   │   └── page.tsx          # Página principal
│   ├── components/           # Componentes reutilizables
│   └── data/                 # Datos y contenido
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Páginas Principales

### Página Principal (Home)
- Hero section con presentación
- Destacado de servicios clave
- Vista previa del portafolio
- Enlaces a redes sociales

### Acerca de (About)
- Historia profesional
- Habilidades y experiencia
- Filosofía de trabajo

### Servicios (Services)
- Lista de servicios profesionales ofrecidos
- Descripción detallada de cada servicio

### Portafolio (Portfolio)
- Proyectos destacados
- Detalles de implementación
- Tecnologías utilizadas

### Blog
- Artículos técnicos
- Guías y tutoriales
- Reflexiones profesionales

### Contacto (Contact)
- Formulario de contacto
- Información de contacto
- Redes sociales

## Componentes Clave

- **Layout**: Estructura base del sitio
- **Header**: Navegación principal
- **Footer**: Información de pie de página
- **BlogPreview**: Vista previa de artículos de blog
- **ProjectCard**: Tarjetas de proyectos del portafolio

## APIs Personalizadas

- **Exchange**: API de tipo de cambio
- **Time**: API de zonas horarias
- **Weather**: API del clima

## Flujo de Trabajo

1. **Desarrollo**: `npm run dev` para el servidor de desarrollo
2. **Construcción**: `npm run build` para crear la versión de producción
3. **Despliegue**: Automático a GitHub Pages

## Integración con Notion

- Configuración de VSCode para exportar contenido a Notion
- Tareas automatizadas para sincronizar documentación
- Uso de REST Client para la API de Notion

## Mejoras Planificadas

- Optimización de SEO
- Implementación de modo oscuro
- Mejora de accesibilidad
- Ampliación del contenido del blog
- Actualización del portafolio con nuevos proyectos