// Configuración de la IA
const CONFIG_IA = {
    apiKey: process.env.OPENAI_API_KEY || 'tu-clave-api',
    modelo: 'gpt-3.5-turbo',
    maxTokens: 150
};

// Base de datos de hechos históricos
const hechos = [
    {
        fecha: '1969-12-31',
        titulo: 'Nacimiento de UNIX',
        contenido: 'Ken Thompson y Dennis Ritchie comienzan el desarrollo de UNIX en los laboratorios Bell.'
    },
    {
        fecha: '1991-08-25',
        titulo: 'Nacimiento de Linux',
        contenido: 'Linus Torvalds anuncia la primera versión de Linux en un mensaje a comp.os.minix.'
    }
];

// Sistema de comandos
const comandos = {
    'hoy': mostrarHechoHoy,
    'aleatorio': mostrarHechoAleatorio,
    'hechos': mostrarTodosHechos,
    'buscar': buscarConIA,
    'preguntar': preguntarIA,
    'ayuda': mostrarAyuda,
    'modo': cambiarTema,
    'limpiar': limpiarPantalla
};

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    iniciarEfectoMatrix();
    iniciarHistorialComandos();
    mostrarHechoHoy();
});

// Funciones principales
async function procesarComando(evento) {
    evento.preventDefault();
    const input = document.getElementById('command-input');
    const comando = input.value.trim();
    
    if (!comando) return;
    
    historialComandos.guardar(comando);
    input.value = '';
    
    const [accion, ...args] = comando.toLowerCase().split(' ');
    const parametros = args.join(' ');

    if (comandos[accion]) {
        await comandos[accion](parametros);
        Analytics.registrarComando(accion);
    } else {
        agregarSalida(`Comando no reconocido: ${accion}. Escribe 'ayuda' para ver los comandos disponibles.`);
    }
}

// Sistema de historial
const historialComandos = {
    posicion: -1,
    lista: [],

    guardar(comando) {
        this.lista.push(comando);
        this.posicion = this.lista.length;
        localStorage.setItem('historialComandos', JSON.stringify(this.lista));
    },

    navegar(direccion) {
        if (direccion === 'arriba' && this.posicion > 0) {
            this.posicion--;
        } else if (direccion === 'abajo' && this.posicion < this.lista.length) {
            this.posicion++;
        }

        const comando = this.lista[this.posicion] || '';
        document.getElementById('command-input').value = comando;
    }
};

// Efecto Matrix mejorado
function iniciarEfectoMatrix() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    
    const ajustarTamaño = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    ajustarTamaño();
    window.addEventListener('resize', ajustarTamaño);

    const caracteres = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    const columnas = canvas.width / 20;
    const gotas = Array(Math.floor(columnas)).fill(1);

    function dibujar() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = '15pt monospace';

        gotas.forEach((gota, i) => {
            const texto = caracteres[Math.floor(Math.random() * caracteres.length)];
            ctx.fillText(texto, i * 20, gota * 20);
            if (gota * 20 > canvas.height && Math.random() > 0.975) {
                gotas[i] = 0;
            }
            gotas[i]++;
        });
    }

    setInterval(dibujar, 50);
}

// Agregar después de iniciarEfectoMatrix()

function mejorarAccesibilidad() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('command-input').focus();
        }
    });

    // Agregar roles ARIA
    const terminal = document.getElementById('terminal');
    terminal.setAttribute('role', 'application');
    terminal.setAttribute('aria-label', 'Terminal de Programación');
}

// filepath: /home/t1/Documents/laloaggro.github.io/page3/sw.js
const CACHE_NAME = 'terminal-ia-v1';
const urlsToCache = [
  '/page3/',
  '/page3/index.html',
  '/page3/styles.css',
  '/page3/main.js',
  '/page3/manifest.json',
  '/page3/analytics.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});