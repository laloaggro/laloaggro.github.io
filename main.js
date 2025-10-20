// Base de datos de hechos históricos de programación
const hechos = [
    {
        fecha: '01-01',
        titulo: 'Inicio de año en programación',
        contenido: 'Un nuevo año trae nuevas oportunidades para aprender y crear código.'
    },
    {
        fecha: '01-09',
        titulo: 'Nacimiento de Alan Turing',
        contenido: 'Alan Turing nació en 1912. Es considerado el padre de la computación moderna y fue fundamental en descifrar Enigma durante la Segunda Guerra Mundial.'
    },
    {
        fecha: '02-14',
        titulo: 'Lanzamiento de YouTube',
        contenido: 'YouTube fue lanzado el 14 de febrero de 2005, revolucionando la forma en que compartimos y consumimos video en línea.'
    },
    {
        fecha: '03-12',
        titulo: 'Creación de la World Wide Web',
        contenido: 'Tim Berners-Lee presentó su propuesta para la World Wide Web el 12 de marzo de 1989, cambiando el mundo para siempre.'
    },
    {
        fecha: '04-01',
        titulo: 'Fundación de Apple',
        contenido: 'Apple Computer fue fundada el 1 de abril de 1976 por Steve Jobs, Steve Wozniak y Ronald Wayne.'
    },
    {
        fecha: '04-04',
        titulo: 'Lanzamiento de Windows 95',
        contenido: 'Microsoft lanzó Windows 95 el 24 de agosto de 1995, marcando un hito en sistemas operativos con interfaz gráfica.'
    },
    {
        fecha: '05-23',
        titulo: 'Nacimiento de Java',
        contenido: 'Java fue lanzado públicamente el 23 de mayo de 1995 por Sun Microsystems. Su filosofía "Write Once, Run Anywhere" revolucionó el desarrollo.'
    },
    {
        fecha: '06-07',
        titulo: 'Lanzamiento del iPhone',
        contenido: 'El 29 de junio de 2007, Apple lanzó el primer iPhone, transformando la industria móvil y creando el ecosistema de apps.'
    },
    {
        fecha: '07-01',
        titulo: 'Mes del software libre',
        contenido: 'Julio celebra el espíritu del software libre y de código abierto, promoviendo la colaboración global.'
    },
    {
        fecha: '08-06',
        titulo: 'Primera página web',
        contenido: 'El 6 de agosto de 1991, Tim Berners-Lee publicó la primera página web, marcando el inicio de la web moderna.'
    },
    {
        fecha: '08-25',
        titulo: 'Nacimiento de Linux',
        contenido: 'El 25 de agosto de 1991, Linus Torvalds anunció la primera versión de Linux en un mensaje a comp.os.minix.'
    },
    {
        fecha: '09-04',
        titulo: 'Fundación de Google',
        contenido: 'Google fue fundado el 4 de septiembre de 1998 por Larry Page y Sergey Brin en un garaje de California.'
    },
    {
        fecha: '10-05',
        titulo: 'Nacimiento de Python',
        contenido: 'Python fue creado por Guido van Rossum. Su primera versión pública (0.9.0) fue lanzada en febrero de 1991.'
    },
    {
        fecha: '10-20',
        titulo: 'Día mundial de la estadística',
        contenido: 'Celebrado cada 5 años, reconoce la importancia de los datos en la toma de decisiones y el desarrollo de software.'
    },
    {
        fecha: '11-13',
        titulo: 'Primera versión de World Wide Web',
        contenido: 'El navegador WorldWideWeb (después renombrado Nexus) fue la primera aplicación para navegar la web.'
    },
    {
        fecha: '12-09',
        titulo: 'Nacimiento de Grace Hopper',
        contenido: 'Grace Hopper nació el 9 de diciembre de 1906. Pionera en programación, desarrolló el primer compilador y popularizó el término "bug".'
    },
    {
        fecha: '12-31',
        titulo: 'Nacimiento de UNIX',
        contenido: 'En 1969, Ken Thompson y Dennis Ritchie comenzaron el desarrollo de UNIX en los laboratorios Bell, uno de los sistemas operativos más influyentes.'
    }
];

// Efecto de fondo Matrix
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/\\日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
    const charsArray = matrixChars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = charsArray[Math.floor(Math.random() * charsArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 35);

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Funciones de comandos
function showToday() {
    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaHoy = `${mes}-${dia}`;
    
    const hecho = hechos.find(h => h.fecha === fechaHoy);
    
    const contenedor = document.getElementById('content');
    const output = document.createElement('div');
    output.className = 'output';
    
    if (hecho) {
        output.innerHTML = `
            <div class="fact-title">${hecho.titulo}</div>
            <div>${hecho.contenido}</div>
            <div style="margin-top: 1rem; opacity: 0.7;">Fecha: ${hecho.fecha}</div>
        `;
    } else {
        output.innerHTML = `
            <div class="fact-title">Hoy, ${fechaHoy}</div>
            <div>No hay un hecho específico para hoy, pero cada día es una oportunidad para aprender algo nuevo en programación.</div>
        `;
    }
    
    contenedor.appendChild(output);
    contenedor.scrollTop = contenedor.scrollHeight;
}

function showRandom() {
    const hecho = hechos[Math.floor(Math.random() * hechos.length)];
    
    const contenedor = document.getElementById('content');
    const output = document.createElement('div');
    output.className = 'output';
    output.innerHTML = `
        <div class="fact-title">${hecho.titulo}</div>
        <div>${hecho.contenido}</div>
        <div style="margin-top: 1rem; opacity: 0.7;">Fecha: ${hecho.fecha}</div>
    `;
    
    contenedor.appendChild(output);
    contenedor.scrollTop = contenedor.scrollHeight;
}

function showAllFacts() {
    const contenedor = document.getElementById('content');
    const output = document.createElement('div');
    output.className = 'output';
    
    let html = '<div class="fact-title">Todos los hechos históricos</div>';
    hechos.forEach((hecho, index) => {
        html += `
            <div style="margin-bottom: 1.5rem; padding: 1rem; border-left: 2px solid var(--primary-color);">
                <div style="font-weight: bold; color: var(--primary-color);">${index + 1}. ${hecho.titulo}</div>
                <div>${hecho.contenido}</div>
                <div style="margin-top: 0.5rem; opacity: 0.7; font-size: 0.9rem;">Fecha: ${hecho.fecha}</div>
            </div>
        `;
    });
    
    output.innerHTML = html;
    contenedor.appendChild(output);
    contenedor.scrollTop = contenedor.scrollHeight;
}

function toggleCatalogSidebar() {
    const sidebar = document.getElementById('catalog-sidebar');
    sidebar.classList.toggle('active');
}

function goHome() {
    const contenedor = document.getElementById('content');
    contenedor.innerHTML = `
        <div class="output">
            <div>Bienvenido a la Terminal de Historia de la Programación v1.0</div>
            <div>Escribe "hoy" para ver el hecho de programación del día</div>
            <div>Escribe "aleatorio" para ver un hecho de programación aleatorio</div>
            <div>Escribe "hechos" para buscar en todos los hechos disponibles</div>
            <div>Escribe "ayuda" para ver todos los comandos disponibles</div>
            <div>Escribe "modo" para cambiar entre modo oscuro/claro</div>
        </div>
        <div class="output" id="monthly-fact-container">
            <div class="fact-title">Hecho del Mes</div>
            <div id="monthly-fact-content"></div>
        </div>
    `;
    showMonthlyFact();
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

function showMonthlyFact() {
    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    
    const hechosDelMes = hechos.filter(h => h.fecha.startsWith(mes));
    
    if (hechosDelMes.length > 0) {
        const hechoAleatorio = hechosDelMes[Math.floor(Math.random() * hechosDelMes.length)];
        const container = document.getElementById('monthly-fact-content');
        if (container) {
            container.innerHTML = `
                <div style="font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">${hechoAleatorio.titulo}</div>
                <div>${hechoAleatorio.contenido}</div>
            `;
        }
    }
}

// Manejo del input de comandos
const commandInput = document.getElementById('command-input');
if (commandInput) {
    commandInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            this.value = '';
            
            const contenedor = document.getElementById('content');
            const commandOutput = document.createElement('div');
            commandOutput.className = 'output';
            commandOutput.innerHTML = `<div style="color: var(--primary-color);">&gt; ${command}</div>`;
            contenedor.appendChild(commandOutput);
            
            switch(command) {
                case 'hoy':
                case 'today':
                    showToday();
                    break;
                case 'aleatorio':
                case 'random':
                    showRandom();
                    break;
                case 'hechos':
                case 'facts':
                    showAllFacts();
                    break;
                case 'ayuda':
                case 'help':
                    const helpOutput = document.createElement('div');
                    helpOutput.className = 'output';
                    helpOutput.innerHTML = `
                        <div class="fact-title">Comandos disponibles</div>
                        <div><strong>hoy</strong> - Muestra el hecho del día</div>
                        <div><strong>aleatorio</strong> - Muestra un hecho aleatorio</div>
                        <div><strong>hechos</strong> - Muestra todos los hechos</div>
                        <div><strong>modo</strong> - Cambia entre tema oscuro/claro</div>
                        <div><strong>limpiar</strong> - Limpia la pantalla</div>
                        <div><strong>ayuda</strong> - Muestra esta ayuda</div>
                    `;
                    contenedor.appendChild(helpOutput);
                    break;
                case 'modo':
                case 'theme':
                    toggleTheme();
                    const themeOutput = document.createElement('div');
                    themeOutput.className = 'output';
                    themeOutput.innerHTML = `<div>Tema cambiado exitosamente</div>`;
                    contenedor.appendChild(themeOutput);
                    break;
                case 'limpiar':
                case 'clear':
                    goHome();
                    break;
                default:
                    const errorOutput = document.createElement('div');
                    errorOutput.className = 'output';
                    errorOutput.innerHTML = `<div style="color: #ff6b6b;">Comando no reconocido: "${command}". Escribe "ayuda" para ver los comandos disponibles.</div>`;
                    contenedor.appendChild(errorOutput);
            }
            
            contenedor.scrollTop = contenedor.scrollHeight;
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initMatrix();
    showMonthlyFact();
    
    // Restaurar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
    }
    
    // Dar foco al input
    if (commandInput) {
        commandInput.focus();
    }
});