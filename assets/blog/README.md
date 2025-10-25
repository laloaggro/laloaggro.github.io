# Imágenes del Blog

Esta carpeta contiene las imágenes para los posts del blog.

## Especificaciones

- **Tamaño recomendado**: 1200x600px (ratio 2:1)
- **Formato**: JPG o WebP
- **Peso máximo**: 300KB
- **Nomenclatura**: kebab-case descriptivo (ej: `react-hooks-tutorial.jpg`)

## Optimizar Imágenes

```bash
# Con jpegoptim
jpegoptim --max=85 *.jpg

# Con ImageMagick (redimensionar + optimizar)
mogrify -resize 1200x600^ -gravity center -extent 1200x600 -quality 85 *.jpg
```

## Placeholders Temporales

Mientras consigues las imágenes, usa:
- https://via.placeholder.com/1200x600/0B0B0B/D4AF37?text=Post+Title
- https://picsum.photos/1200/600

## Generar con IA

Servicios recomendados:
- [DALL-E](https://openai.com/dall-e-2)
- [Midjourney](https://www.midjourney.com/)
- [Stable Diffusion](https://stability.ai/)

## Bancos de Imágenes Gratuitos

- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)
