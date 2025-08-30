# Método 1: Usar el script de desarrollo
cd /home/t1/Documents/laloaggro.github.io/page3/server
./dev.sh

# Método 2: Iniciar servicios por separado
# Terminal 1:
npm run dev
# Terminal 2:
npm run serve# Crear el archivo dev.sh
cd /home/t1/Documents/laloaggro.github.io/page3/server
touch dev.sh
# Copiar el contenido anterior al archivo
nano dev.sh
# Dar permisos de ejecución
chmod +x dev.sh
