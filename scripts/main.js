// ============================================
// MAIN.JS - Script Principal del Portfolio
// ============================================

// Importar datos del portfolio (si usas módulos)
// import { portfolioData } from '../data/portfolio.js';

// ============================================
// CONFIGURACIÓN Y VARIABLES GLOBALES
// ============================================

const portfolioData = {
    personal: {
        name: 'Mauricio Garay Veas',
        title: 'Desarrollador Full Stack',
        typingTexts: [
            'Desarrollador Full Stack',
            'Creador de Soluciones Web',
            'Entusiasta de JavaScript',
            'Apasionado por el Código Limpio'
        ]
    },
    skills: [
        { name: 'JavaScript', level: 90, category: 'frontend', icon: '⚡' },
        { name: 'React', level: 88, category: 'frontend', icon: '⚛️' },
        { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
        { name: 'Python', level: 82, category: 'backend', icon: '🐍' },
        { name: 'MongoDB', level: 80, category: 'database', icon: '🍃' },
        { name: 'Docker', level: 75, category: 'devops', icon: '🐳' }
    ],
    projects: [
        {
            id: 1,
            title: 'Terminal de Historia de Programación',
            description: 'Sitio web interactivo estilo terminal con efemérides de programación.',
            tech: ['JavaScript', 'HTML5', 'CSS3'],
            image: 'assets/projects/terminal.jpg',
            github: 'https://github.com/laloaggro',
            category: 'web',
            featured: true
        }
    ]
};

// ============================================
// THEME TOGGLE (Modo Oscuro/Claro)
// ============================================

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ============================================
// NAVEGACIÓN
// ============================================

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle menu móvil
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Scroll activo en navegación
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// TYPING EFFECT
// ============================================

function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const texts = portfolioData.personal.typingTexts || [
        'Desarrollador Full Stack',
        'Creador de Soluciones Web'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 2000; // Pausa antes de borrar
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, typingDelay);
    }
    
    type();
}

// ============================================
// SKILLS SECTION
// ============================================

function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    let currentFilter = 'all';
    const filterButtons = document.querySelectorAll('.skills-filter .filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderSkills(currentFilter);
        });
    });
    
    renderSkills(currentFilter);
}

function renderSkills(filter = 'all') {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    const skills = filter === 'all' 
        ? portfolioData.skills 
        : portfolioData.skills.filter(s => s.category === filter);
    
    skillsContainer.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
            <span class="skill-level">${skill.level}%</span>
        </div>
    `).join('');
    
    // Animar barras de progreso
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = bar.style.width;
        });
    }, 100);
}

// ============================================
// PROJECTS SECTION
// ============================================

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    let currentFilter = 'all';
    const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderProjects(currentFilter);
        });
    });
    
    renderProjects(currentFilter);
}

function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    const projects = filter === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category === filter);
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.style.display='none'">` : ''}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : ''}
                    ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link">Demo</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// EXPERIENCE TIMELINE
// ============================================

function loadExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline || !portfolioData.experience) return;
    
    timeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-date">${exp.period}</div>
            <div class="timeline-content">
                <h3 class="timeline-title">${exp.position}</h3>
                <p class="timeline-company">${exp.company} ${exp.location ? `• ${exp.location}` : ''}</p>
                <p class="timeline-description">${exp.description || ''}</p>
                ${exp.achievements ? `
                    <ul class="timeline-achievements">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                ` : ''}
                ${exp.technologies ? `
                    <div class="timeline-tech">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = document.getElementById('submit-text');
    const formMessage = document.getElementById('form-message');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Deshabilitar botón durante el envío
        submitBtn.disabled = true;
        submitText.textContent = 'Enviando...';
        formMessage.style.display = 'none';
        
        const formData = new FormData(form);
        
        // Validar honeypot (anti-spam)
        if (formData.get('botcheck')) {
            showMessage('Error: Spam detectado', 'error');
            submitBtn.disabled = false;
            submitText.textContent = 'Enviar Mensaje';
            return;
        }
        
        try {
            // Usar Web3Forms (servicio gratuito)
            // Alternativa: usar mailto directo o EmailJS
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                showMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                form.reset();
                
                // Enviar evento a Analytics si está configurado
                if (window.gtag) {
                    gtag('event', 'form_submission', {
                        event_category: 'Contact',
                        event_label: 'Contact Form'
                    });
                }
            } else {
                throw new Error(result.message || 'Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            
            // Fallback: abrir cliente de email
            const subject = encodeURIComponent(formData.get('subject'));
            const body = encodeURIComponent(
                `Nombre: ${formData.get('name')}\n` +
                `Email: ${formData.get('email')}\n\n` +
                `Mensaje:\n${formData.get('message')}`
            );
            const mailto = `mailto:mauriciogarayveas@gmail.com?subject=${subject}&body=${body}`;
            
            showMessage(
                'No se pudo enviar automáticamente. ' +
                '<a href="' + mailto + '" style="color: inherit; text-decoration: underline;">Haz clic aquí para enviar por email</a>',
                'error'
            );
        } finally {
            submitBtn.disabled = false;
            submitText.textContent = 'Enviar Mensaje';
        }
    });
    
    function showMessage(message, type) {
        formMessage.innerHTML = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Auto-ocultar después de 8 segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 8000);
    }
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Ejecutar al cargar
}

// ============================================
// PARTICLES BACKGROUND (Simple)
// ============================================

function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;
    
    // Crear partículas simples
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
    particle.style.background = 'rgba(212, 175, 55, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// BLOG SECTION
// ============================================

function loadBlog() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid || !portfolioData.blog) return;
    
    let currentFilter = 'all';
    const filterButtons = document.querySelectorAll('.blog-filter .filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderBlog(currentFilter);
        });
    });
    
    renderBlog(currentFilter);
}

function renderBlog(filter = 'all') {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid || !portfolioData.blog) return;
    
    const posts = filter === 'all' 
        ? portfolioData.blog 
        : portfolioData.blog.filter(p => p.category === filter);
    
    blogGrid.innerHTML = posts.map(post => `
        <article class="blog-card" data-category="${post.category}">
            <div class="blog-image" style="background-image: url('${post.image}');">
                ${!post.image ? '<div style="height: 200px; background: linear-gradient(135deg, #1A1A1A 0%, rgba(212,175,55,.25) 100%);"></div>' : ''}
            </div>
            <div class="blog-content">
                <span class="blog-category">${getCategoryName(post.category)}</span>
                <div class="blog-meta">
                    <span class="blog-date">📅 ${formatDate(post.date)}</span>
                    <span class="blog-read-time">⏱️ ${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                <div class="blog-footer">
                    <span class="blog-author">Por ${post.author}</span>
                    <a href="#" class="blog-read-more" onclick="openBlogPost(${post.id}); return false;" aria-label="Leer más sobre ${post.title}">
                        Leer más →
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function getCategoryName(category) {
    const categories = {
        'tutorial': 'Tutorial',
        'noticia': 'Noticia',
        'proyecto': 'Proyecto'
    };
    return categories[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

function openBlogPost(postId) {
    const post = portfolioData.blog?.find(p => p.id === postId);
    if (!post) return;
    
    // Aquí puedes implementar un modal o redirección a página de detalle
    alert(`Artículo: ${post.title}\n\n${post.content}\n\nEn una implementación completa, esto abriría una página detallada o modal.`);
    console.log('Abrir post:', post);
}

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio cargado correctamente');
    
    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('✅ Service Worker registrado:', registration.scope);
                })
                .catch(error => {
                    console.log('❌ Error al registrar Service Worker:', error);
                });
        });
    }
    
    // Inicializar todos los componentes
    initTheme();
    initNavigation();
    initTypingEffect();
    loadSkills();
    loadProjects();
    loadExperience();
    loadBlog();
    initContactForm();
    initScrollReveal();
    initParticles();
    
    // Agregar clase de loaded al body
    document.body.classList.add('loaded');
});

// ============================================
// EXPORT (si usas módulos)
// ============================================

// export { initTheme, loadProjects, loadSkills };
