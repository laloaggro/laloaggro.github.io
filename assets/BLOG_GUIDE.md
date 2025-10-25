# 📝 Guía de Gestión del Blog

## Cómo Agregar Nuevos Posts

### 1. Agregar el Post en `data/portfolio.js`

Abre el archivo `data/portfolio.js` y añade un nuevo objeto al array `blog`:

```javascript
blog: [
    // ... posts existentes
    {
        id: 5, // ID único incremental
        title: 'Tu Título Aquí',
        excerpt: 'Resumen breve del artículo (2-3 líneas)',
        content: 'Contenido completo del artículo...',
        category: 'tutorial', // 'tutorial', 'noticia', o 'proyecto'
        date: '2024-10-22', // Formato YYYY-MM-DD
        author: 'Mauricio Garay Veas',
        image: 'assets/blog/nombre-imagen.jpg',
        tags: ['Tag1', 'Tag2', 'Tag3'],
        readTime: '5 min' // Tiempo estimado de lectura
    }
]
```

### 2. Categorías Disponibles

- **tutorial**: Para artículos educativos, guías paso a paso
- **noticia**: Para noticias del sector, actualizaciones
- **proyecto**: Para anunciar nuevos proyectos o casos de estudio

### 3. Agregar Imagen del Post

1. Guarda tu imagen en `assets/blog/`
2. Nombre sugerido: `nombre-descriptivo.jpg`
3. Tamaño recomendado: 1200x600px (ratio 2:1)
4. Peso: < 300KB (optimiza con TinyPNG)

**Comando para optimizar:**
```bash
jpegoptim --max=85 assets/blog/tu-imagen.jpg
```

### 4. Ejemplo de Post Completo

```javascript
{
    id: 5,
    title: 'Cómo Implementar Autenticación JWT en Node.js',
    excerpt: 'Aprende a implementar un sistema de autenticación seguro usando JSON Web Tokens en tus aplicaciones Node.js.',
    content: `
        En este tutorial aprenderás paso a paso cómo implementar un sistema de 
        autenticación robusto usando JWT (JSON Web Tokens).
        
        ## Requisitos Previos
        - Node.js v16+
        - Conocimientos básicos de Express
        
        ## Paso 1: Instalación
        \`\`\`bash
        npm install jsonwebtoken bcrypt
        \`\`\`
        
        ## Paso 2: Configuración...
        
        [Aquí iría el contenido completo]
    `,
    category: 'tutorial',
    date: '2024-10-22',
    author: 'Mauricio Garay Veas',
    image: 'assets/blog/jwt-auth-tutorial.jpg',
    tags: ['Node.js', 'Seguridad', 'JWT', 'Backend'],
    readTime: '8 min'
}
```

## Gestión de Imágenes

### Placeholder Temporal
Si aún no tienes imagen, usa:
```javascript
image: 'https://via.placeholder.com/1200x600/0B0B0B/D4AF37?text=Tu+Título'
```

### Generar con ImageMagick
```bash
convert -size 1200x600 xc:#0B0B0B -pointsize 48 -fill "#D4AF37" \
  -gravity center -annotate +0+0 "Título del Post" \
  assets/blog/mi-post.jpg
```

## Tips para Buenos Posts

### Título
- Claro y descriptivo (50-60 caracteres)
- Incluye palabras clave
- Evita clickbait

### Excerpt
- 2-3 líneas máximo
- Resume el valor del artículo
- Invita a leer más

### Content
- Usa Markdown para formato
- Incluye código con syntax highlighting
- Añade imágenes explicativas
- Estructura con headers (##, ###)

### Tags
- 3-5 tags relevantes
- Primera letra en mayúscula
- Tecnologías específicas

### Read Time
Calcula aproximadamente:
- 200-250 palabras por minuto
- Redondea al minuto más cercano
- Ejemplo: "5 min", "10 min"

## Orden de Posts

Los posts se muestran en el orden del array. Para destacar:
1. Coloca posts importantes al inicio
2. O implementa un campo `featured: true` y ordena por fecha

## Funcionalidad Futura

### Modal de Detalle
Actualmente `openBlogPost()` muestra un alert. Puedes mejorar:

```javascript
function openBlogPost(postId) {
    const post = portfolioData.blog?.find(p => p.id === postId);
    if (!post) return;
    
    // Crear modal dinámico
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">×</button>
            <article>
                <h1>${post.title}</h1>
                <div class="post-meta">
                    <span>${formatDate(post.date)}</span>
                    <span>${post.readTime}</span>
                </div>
                <img src="${post.image}" alt="${post.title}">
                <div class="post-content">${post.content}</div>
            </article>
        </div>
    `;
    document.body.appendChild(modal);
}
```

### Integración con CMS
Para un blog más robusto, considera:
- **Contentful**: CMS headless
- **Ghost**: Plataforma de blogging
- **Markdown files**: Archivos .md en carpeta `/posts`

## Publicación

Después de agregar posts:

```bash
# Verificar localmente
npm run dev

# Hacer commit
git add data/portfolio.js assets/blog/
git commit -m "feat: nuevo post sobre [tema]"

# Desplegar
npm run deploy
```

## Recursos

- [Markdown Guide](https://www.markdownguide.org/)
- [Unsplash](https://unsplash.com/) - Imágenes gratuitas
- [Carbon](https://carbon.now.sh/) - Capturas de código bonitas
- [TinyPNG](https://tinypng.com/) - Optimizar imágenes

---

**¡Listo!** Ahora puedes gestionar tu blog fácilmente. 🎉
