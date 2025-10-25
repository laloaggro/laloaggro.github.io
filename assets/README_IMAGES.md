# 📸 Guía para Agregar Imágenes al Portfolio

## Ubicación de las Imágenes

El portafolio espera encontrar las siguientes imágenes en las carpetas respectivas:

### 1. **Iconos PWA** (`assets/icons/`)
Necesitas crear iconos en los siguientes tamaños:
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`
- `favicon.png` (16x16 o 32x32)

**Herramientas recomendadas:**
- [Favicon.io](https://favicon.io/) - Generar favicon y iconos PWA
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Generador completo

### 2. **Imágenes de Proyectos** (`assets/projects/`)
Agrega capturas de pantalla de tus proyectos:
- `terminal-history.jpg` (o .png)
- `ecommerce.jpg`
- `task-manager.jpg`
- `api-service.jpg`
- `dashboard.jpg`
- `chat-app.jpg`

**Especificaciones recomendadas:**
- Resolución: 1200x800px (ratio 3:2)
- Formato: JPG o PNG
- Peso: < 500KB (optimiza con [TinyPNG](https://tinypng.com/))

### 3. **Tecnologías** (`assets/tech/`)
Logos de las tecnologías que usas:
- `javascript.svg`
- `python.svg`
- `react.svg`
- `nodejs.svg`
- etc.

**Dónde conseguir logos:**
- [Simple Icons](https://simpleicons.org/) - Íconos SVG de marcas
- [Dev Icons](https://devicon.dev/) - Íconos de tecnologías
- [SVG Repo](https://www.svgrepo.com/) - Repositorio SVG gratuito

### 4. **Testimonios** (`assets/testimonials/`)
Fotos de personas que den testimonios (opcional):
- `juan.jpg`
- `maria.jpg`

## Método Rápido: Crear Placeholders

### Opción 1: Usar Placeholders Online
Mientras consigues las imágenes reales, puedes usar servicios de placeholder:

```html
<!-- En el código HTML, reemplaza temporalmente: -->
<img src="https://via.placeholder.com/400x300/0B0B0B/D4AF37?text=Proyecto+1" alt="Proyecto 1">
```

Servicios recomendados:
- https://via.placeholder.com/
- https://placehold.co/
- https://picsum.photos/ (fotos aleatorias)

### Opción 2: Generar Placeholders con ImageMagick

Si tienes ImageMagick instalado:

```bash
# Crear placeholder para proyecto
convert -size 1200x800 xc:#0B0B0B -pointsize 72 -fill "#D4AF37" -gravity center \
  -annotate +0+0 "Proyecto 1" assets/projects/placeholder.jpg

# Crear iconos PWA
for size in 72 96 128 144 152 192 384 512; do
  convert -size ${size}x${size} xc:#0B0B0B -pointsize 48 -fill "#D4AF37" \
    -gravity center -annotate +0+0 "MGV" assets/icons/icon-${size}x${size}.png
done
```

### Opción 3: Usar un Editor Online
- [Canva](https://www.canva.com/) - Diseño gráfico fácil
- [Photopea](https://www.photopea.com/) - Editor tipo Photoshop online
- [Figma](https://www.figma.com/) - Diseño UI/UX profesional

## Optimización de Imágenes

Antes de subir las imágenes al repositorio, optimízalas:

### Herramientas Online:
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Optimizador de imágenes de Google
- [ImageOptim](https://imageoptim.com/) - App para Mac

### Desde la Terminal:
```bash
# Instalar herramientas de optimización
sudo apt-get install optipng jpegoptim

# Optimizar PNGs
find assets -name "*.png" -exec optipng -o7 {} \;

# Optimizar JPGs
find assets -name "*.jpg" -exec jpegoptim --max=85 {} \;
```

## Actualizar Referencias en el Código

Una vez que tengas las imágenes, actualiza las rutas en `data/portfolio.js`:

```javascript
projects: [
    {
        title: 'Mi Proyecto',
        image: 'assets/projects/mi-proyecto.jpg', // Actualizar aquí
        // ...
    }
]
```

## Foto de Perfil (Opcional)

Si quieres agregar una foto de perfil en el Hero:

1. Agrega la imagen: `assets/profile.jpg`
2. Modifica el `index.html` para incluir:
   ```html
   <img src="assets/profile.jpg" alt="Mauricio Garay Veas" class="profile-image">
   ```

## Tips Adicionales

1. **Mantén un estilo consistente** - Usa el mismo ratio y estilo visual
2. **Usa formato WebP** cuando sea posible (mejor compresión)
3. **Agrega alt text** descriptivo para SEO y accesibilidad
4. **Lazy loading** - Las imágenes ya tienen loading="lazy" automático

---

**Nota:** El portafolio funcionará sin imágenes, mostrando gradientes de color como fallback.
