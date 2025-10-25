#!/bin/bash

# Definir rutas
NODE_BIN="$HOME/tools/node_modules/.bin"
DIST_DIR="dist"

# Crear estructura de directorios
echo "Creando estructura de directorios..."
mkdir -p $DIST_DIR/{styles,scripts,assets}

# Función para minificar CSS
minify_css() {
    echo "Minificando CSS..."
    for file in styles/*.css; do
        if [ -f "$file" ]; then
            filename=$(basename "$file")
            if [ -f "$NODE_BIN/cleancss" ]; then
                $NODE_BIN/cleancss -o "$DIST_DIR/styles/${filename%.css}.min.css" "$file"
            else
                cp "$file" "$DIST_DIR/styles/${filename%.css}.min.css"
                echo "Warning: cleancss no encontrado, copiando archivo original"
            fi
        fi
    done
}

# Función para minificar JS
minify_js() {
    echo "Minificando JavaScript..."
    for file in scripts/*.js; do
        if [ -f "$file" ]; then
            filename=$(basename "$file")
            if [ -f "$NODE_BIN/uglifyjs" ]; then
                $NODE_BIN/uglifyjs "$file" -c -m -o "$DIST_DIR/scripts/${filename%.js}.min.js"
            else
                cp "$file" "$DIST_DIR/scripts/${filename%.js}.min.js"
                echo "Warning: uglifyjs no encontrado, copiando archivo original"
            fi
        fi
    done
}

# Ejecutar funciones
minify_css
minify_js

echo "Optimización completada. Revisa la carpeta '$DIST_DIR'"
