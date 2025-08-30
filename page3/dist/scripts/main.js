// Configuración de temas
const temaOscuro = {
    fondo: '#1a1a1a',
    texto: '#ffffff',
    primario: '#3498db'
};

const temaClaro = {
    fondo: '#f5f6fa',
    texto: '#333333',
    primario: '#2c3e50'
};

// Función para cargar el tema guardado
function cargarTema() {
    // Obtener tema guardado en localStorage
    const temaGuardado = localStorage.getItem('tema');
    
    // Aplicar tema guardado o tema por defecto
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('tema-oscuro');
        aplicarTema(temaOscuro);
    } else {
        aplicarTema(temaClaro);
    }
}

// Función para guardar preferencia de tema
function guardarTema() {
    const esOscuro = document.body.classList.contains('tema-oscuro');
    localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
}

// Función para aplicar tema
function aplicarTema(tema) {
    Object.entries(tema).forEach(([propiedad, valor]) => {
        document.documentElement.style.setProperty(`--color-${propiedad}`, valor);
    });
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Cargar tema guardado
    cargarTema();
    
    // Configurar cambio de tema
    document.getElementById('theme-toggle').onclick = cambiarTema;
    
    // Cargar contenido inicial
    cargarContenido();
});

// Función para cambiar tema
function cambiarTema() {
    document.body.classList.toggle('tema-oscuro');
    const esOscuro = document.body.classList.contains('tema-oscuro');
    aplicarTema(esOscuro ? temaOscuro : temaClaro);
    guardarTema();
}

// Función para cargar contenido
function cargarContenido() {
    const contenido = document.getElementById('contenido');
    if (!contenido) return;
    
    // Aquí puedes agregar la lógica para cargar las secciones
    console.log('Contenido cargado correctamente');
}

// Agregar manejo de errores para carga de recursos
window.addEventListener('error', function(e) {
    console.error('Error de carga:', e.target.src || e.target.href);
}, true);

// Datos de proyectos
const projects = [
    {
        title: 'Terminal IA',
        description: 'Terminal interactiva con integración de IA',
        tech: ['JavaScript', 'Node.js', 'OpenAI'],
        image: 'assets/projects/terminal-ia.jpg',
        link: 'https://github.com/laloaggro/terminal-ia'
    },
    // Agregar más proyectos
];

// Datos de habilidades
const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    // Agregar más habilidades
];

// Cargar contenido dinámicamente
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    initializeContactForm();
});

// Inicializar formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Implementar lógica de envío
        console.log('Formulario enviado');
    });
}