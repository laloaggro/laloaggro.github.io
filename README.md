# Programming History Terminal

Un sitio web estilo terminal que muestra efemérides de programación importantes. Cada día se muestra un hecho histórico relevante en el campo de la programación y la informática.

## Características

- Interfaz minimalista estilo terminal
- Comandos interactivos:
  - `today` - Muestra el hecho del día
  - `random` - Muestra un hecho aleatorio
  - `help` - Muestra la ayuda
  - `facts` - Lista todos los hechos disponibles
  - `clear` - Limpia la pantalla
- Base de datos con hechos históricos de programación

## Cómo usar

Simplemente visita el sitio y automáticamente se mostrará el hecho del día. Puedes usar los comandos mencionados anteriormente escribiéndolos en el prompt del terminal.

## Despliegue

Este sitio está diseñado para funcionar con GitHub Pages. Simplemente coloque el archivo [index.html](./index.html) en la raíz del repositorio y configure GitHub Pages para servir desde la rama principal.

## Contribuciones

Si deseas agregar más hechos históricos, puedes hacerlo fácilmente editando el archivo [index.html](./index.html) y agregando entradas al array de `facts` en la sección de JavaScript.

### ¿Cómo contribuir?

1. Edita el archivo `index.html`.
2. Busca la sección de JavaScript donde está el array `facts`.
3. Agrega un nuevo objeto con la fecha, título y contenido del hecho histórico.
4. Guarda los cambios y prueba localmente abriendo `index.html` en tu navegador.
5. Haz un Pull Request con tu contribución.

¡Gracias por ayudar a mejorar este proyecto!

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.