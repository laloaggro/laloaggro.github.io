import Typed from 'typed.js';
import particlesJS from 'particles.js';

document.addEventListener('DOMContentLoaded', () => {
    // Configurar texto animado
    new Typed('.typed', {
        strings: [
            'Desarrollador Full Stack',
            'Especialista en JavaScript',
            'Apasionado por la Tecnología',
            'Creador de Soluciones'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Configurar partículas
    particlesJS.load('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#ffffff' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            }
        }
    });
});