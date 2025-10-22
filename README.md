# Sitio Personal de Mauricio Garay

Sitio web personal para mostrar mis habilidades, experiencia y proyectos como Especialista Senior en Gestión del Cambio, DevOps y Transformación Digital.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web modernas
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS basado en utilidades
- [GitHub Pages](https://pages.github.com/) - Hosting gratuito para sitios estáticos

## Estructura del Proyecto

```
.
├── src/
│   ├── app/                 # Páginas de la aplicación usando App Router
│   │   ├── about/           # Página "Sobre mí"
│   │   ├── contact/         # Página de contacto
│   │   ├── portfolio/       # Páginas del portfolio
│   │   │   ├── [id]/        # Páginas dinámicas para proyectos individuales
│   │   │   └── flores-victoria/ # Página específica del proyecto Flores Victoria
│   │   ├── services/        # Página de servicios
│   │   ├── layout.tsx       # Layout principal con Header y Footer
│   │   └── page.tsx         # Página de inicio
│   ├── components/          # Componentes reutilizables (Header, Footer)
│   └── data/                # Datos estáticos (proyectos, habilidades)
├── public/                  # Archivos estáticos (imágenes, favicon)
└── .github/workflows/       # Workflows de GitHub Actions para CI/CD
```

## Características del Sitio

- **Diseño Responsivo**: Funciona en dispositivos móviles, tablets y desktops
- **Navegación Intuitiva**: Menú de navegación con diseño responsive
- **Portfolio Técnico**: Mostrando proyectos destacados con detalles técnicos
- **SEO Optimizado**: Metadatos adecuados y estructura semántica
- **Despliegue Automático**: Integración con GitHub Actions para despliegue continuo

## Desarrollo Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/laloaggro/laloaggro.github.io.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Despliegue

El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions cuando se hace push a la rama `main`.

Para desplegar manualmente:
```bash
npm run deploy
```

## Páginas Principales

- **Inicio** (/) - Página principal con presentación general, logros clave y proyecto destacado
- **Sobre mí** (/about) - Información personal, experiencia profesional detallada y educación
- **Servicios** (/services) - Servicios ofrecidos con descripciones detalladas
- **Portfolio** (/portfolio) - Proyectos y trabajos destacados con enlaces a detalles técnicos
- **Contacto** (/contact) - Formulario de contacto y datos de contacto

## Proyecto Destacado: Flores Victoria

El proyecto más importante presentado es la plataforma de e-commerce Flores Victoria, que demuestra mis habilidades en:
- Arquitectura de microservicios
- DevOps y CI/CD
- Observabilidad y monitoreo
- Seguridad en aplicaciones web
- Despliegue en contenedores con Docker y Kubernetes

## Contribuciones

Este es un proyecto personal que muestra mi experiencia profesional. Si encuentras algún problema o tienes sugerencias, no dudes en abrir un issue.

## Licencia

Este proyecto es de código cerrado y pertenece a Mauricio Garay.