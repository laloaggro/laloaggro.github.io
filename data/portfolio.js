export const portfolioData = {
    // Información personal
    personal: {
        name: 'Mauricio Eduardo Garay Veas',
        title: 'Especialista Senior en Gestión de Cambios TI, DevOps y Transformación Digital',
        tagline: '12+ años liderando cambios en infraestructura crítica financiera',
        bio: 'Profesional con más de 12 años de experiencia liderando la gestión de cambios, operaciones de plataforma y transformación digital en entornos financieros altamente regulados. Experto en gobernanza ITIL, automatización CI/CD, arquitecturas cloud-native y migraciones a microservicios. Enfocado en reducir riesgos operativos, garantizar cumplimiento regulatorio (CMF, PCI-DSS, ISO 27001) y acelerar la entrega segura de valor mediante prácticas DevOps, SRE e infraestructura como código.',
        email: 'mauriciogarayveas@gmail.com',
        emailSecondary: 'laloaggro@gmail.com',
        phone: '+56 9 6360 3177',
        location: 'Santiago, Chile',
        availability: '100% Remoto o Híbrido | Disponibilidad Inmediata',
        linkedin: 'https://www.linkedin.com/in/megaray/'
    },

    // Redes sociales
    social: {
        github: 'https://github.com/laloaggro',
        linkedin: 'https://www.linkedin.com/in/megaray/',
        twitter: 'https://twitter.com/laloaggro',
        email: 'mailto:mauriciogarayveas@gmail.com',
        phone: 'tel:+56963603177'
    },

    // Habilidades técnicas
    skills: [
        { name: 'JavaScript', level: 92, category: 'frontend', icon: '⚡' },
        { name: 'Node.js', level: 90, category: 'backend', icon: '�' },
        { name: 'Express', level: 88, category: 'backend', icon: '🚂' },
        { name: 'MongoDB', level: 85, category: 'database', icon: '🍃' },
        { name: 'PostgreSQL', level: 85, category: 'database', icon: '�' },
        { name: 'Redis', level: 82, category: 'database', icon: '🔴' },
        { name: 'RabbitMQ', level: 80, category: 'backend', icon: '�' },
        { name: 'Docker', level: 88, category: 'devops', icon: '🐳' },
        { name: 'Microservicios', level: 87, category: 'backend', icon: '�' },
        { name: 'React', level: 85, category: 'frontend', icon: '⚛️' },
        { name: 'TypeScript', level: 83, category: 'frontend', icon: '📘' },
        { name: 'Vue.js', level: 75, category: 'frontend', icon: '💚' },
        { name: 'PWA', level: 82, category: 'frontend', icon: '�' },
        { name: 'Jaeger', level: 78, category: 'devops', icon: '�' },
        { name: 'Jest', level: 85, category: 'tools', icon: '🧪' },
        { name: 'Git', level: 92, category: 'tools', icon: '📦' },
        { name: 'Lighthouse', level: 80, category: 'tools', icon: '🔍' },
        { name: 'Python', level: 78, category: 'backend', icon: '🐍' }
    ],

    // Proyectos destacados
    projects: [
        {
            id: 1,
            title: 'Flores Victoria - Florería Enterprise',
            description: 'Plataforma enterprise de comercio electrónico para florería con arquitectura de microservicios. Incluye API Gateway, 8 microservicios especializados, panel de administración con SSO, sistema de monitoreo distribuido con Jaeger, y PWA optimizada para Chile. Implementa 4 bases de datos (MongoDB, PostgreSQL, Redis, RabbitMQ) con orquestación Docker.',
            tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Jaeger', 'PWA', 'WebP'],
            image: 'assets/projects/flores-victoria.svg',
            github: 'https://github.com/laloaggro/Flores-Victoria-',
            live: 'http://localhost:5173',
            featured: true,
            category: 'fullstack',
            highlights: [
                '🏢 Arquitectura de microservicios escalable con API Gateway',
                '🔐 Seguridad enterprise: Helmet, Rate Limiting, JWT, Joi validation',
                '📊 Observabilidad completa: Jaeger tracing, logs centralizados, health checks',
                '🐳 Infraestructura Docker Compose con 4 bases de datos',
                '📱 PWA con soporte offline, optimización WebP y lazy loading',
                '🇨🇱 Localizado para Chile: validación CLP, RUT, código postal',
                '🧪 Testing robusto: Jest, Supertest, Lighthouse (95+ score)',
                '📚 Documentación exhaustiva: 50+ archivos de arquitectura y guías'
            ],
            metrics: {
                microservices: 8,
                databases: 4,
                testCoverage: '95%',
                lighthouseScore: '95+',
                documentation: '50+ files'
            }
        },
        {
            id: 2,
            title: 'Terminal de Historia de Programación',
            description: 'Sitio web interactivo estilo terminal que muestra efemérides y hechos históricos sobre programación. Incluye comandos personalizados, temas oscuro/claro y efectos visuales.',
            tech: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
            image: 'assets/projects/terminal-history.svg',
            github: 'https://github.com/laloaggro/programming-history-terminal',
            live: 'https://laloaggro.github.io/terminal',
            featured: true,
            category: 'web'
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones push y sincronización offline.',
            tech: ['Vue.js', 'Firebase', 'PWA', 'Vuex'],
            image: 'assets/projects/task-manager.svg',
            github: 'https://github.com/laloaggro/task-manager',
            live: 'https://taskmanager-demo.com',
            featured: true,
            category: 'web'
        },
        {
            id: 4,
            title: 'API RESTful Service',
            description: 'Servicio API completo con autenticación JWT, documentación Swagger, rate limiting y monitoreo de rendimiento.',
            tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
            image: 'assets/projects/api-service.svg',
            github: 'https://github.com/laloaggro/rest-api-service',
            live: 'https://api-docs.demo.com',
            featured: false,
            category: 'backend'
        },
        {
            id: 5,
            title: 'Portfolio Dashboard',
            description: 'Dashboard interactivo para visualización de datos con gráficos dinámicos, filtros avanzados y exportación de reportes.',
            tech: ['React', 'D3.js', 'Chart.js', 'Material-UI'],
            image: 'assets/projects/dashboard.svg',
            github: 'https://github.com/laloaggro/portfolio-dashboard',
            live: 'https://dashboard-demo.com',
            featured: false,
            category: 'frontend'
        },
        {
            id: 6,
            title: 'Chat Application',
            description: 'Aplicación de mensajería en tiempo real con salas de chat, mensajes privados, compartir archivos y videollamadas.',
            tech: ['Socket.io', 'WebRTC', 'React', 'Node.js', 'MongoDB'],
            image: 'assets/projects/chat-app.svg',
            github: 'https://github.com/laloaggro/realtime-chat',
            live: 'https://chat-demo.com',
            featured: false,
            category: 'fullstack'
        }
    ],

    // Experiencia profesional
    experience: [
        {
            id: 1,
            company: 'FIF Corporativo Regional — Banco Falabella',
            position: 'Líder de Gestión de Cambios y Garantía de Despliegues',
            period: 'Enero 2022 – Febrero 2025',
            location: 'Santiago, Chile (Regional - 7 países)',
            description: 'Responsable del proceso integral de cambios para infraestructura crítica que soporta operaciones en 7 países, gestionando 1.000+ cambios/año.',
            achievements: [
                'Gestioné estratégicamente más de 1.000 cambios anuales en infraestructura crítica para 7 países, logrando 100% de cumplimiento en auditorías CMF, PCI-DSS e ISO 27001',
                'Creé un calendario maestro de despliegues en JIRA con reglas de priorización, workflows automatizados y control de permisos, disminuyendo solapamientos en 70%',
                'Coordiné la preparación de evidencias y la interacción con auditores externos, asegurando cumplimiento del 100% en estándares regulatorios',
                'Definí e implementé KPIs clave (% cambios exitosos, % reversiones, MTTR, lead time) y dashboards para reportes ejecutivos y de auditoría',
                'Lideré mesas de cambio (CAB), revisiones post-despliegue y la estandarización de procedimientos de rollback y playbooks operativos'
            ],
            technologies: ['ITIL v4', 'ServiceNow', 'JIRA', 'Jenkins', 'GitLab CI', 'Auditoría CMF', 'PCI-DSS', 'ISO 27001']
        },
        {
            id: 2,
            company: 'Banco Falabella (CMR Chile)',
            position: 'Analista Senior – Plataformas Productivas y Gestión de Cambios',
            period: 'Octubre 2016 – Diciembre 2021',
            location: 'Santiago, Chile',
            description: 'Garantía de estabilidad y seguridad de ambientes productivos críticos (Core Bancario, CMR, APIs de pago).',
            achievements: [
                'Automaticé ~50% de los cambios estándar mediante pipelines y playbooks, reduciendo el tiempo promedio de aprobación de 48 horas a 4 horas',
                'Implementé validaciones automáticas y checklists integrados en los flujos de liberación, disminuyendo errores humanos en más del 60%',
                'Actué como enlace entre Desarrollo, QA, Seguridad y Operaciones para coordinar despliegues complejos y respuestas a incidentes',
                'Garanticé la estabilidad y seguridad de ambientes productivos críticos (Core Bancario, CMR, APIs de pago)'
            ],
            technologies: ['Jenkins', 'Ansible', 'Bash', 'Python', 'ServiceNow', 'JIRA', 'Git']
        },
        {
            id: 3,
            company: 'CMR Falabella',
            position: 'Analista de Aseguramiento de Calidad',
            period: 'Mayo 2014 – Septiembre 2016',
            location: 'Santiago, Chile',
            description: 'Implementación de prácticas de Control Management y gestión de flujos de liberación.',
            achievements: [
                'Implementé prácticas de Control Management en el 90% de los sistemas de la gerencia, mejorando trazabilidad y control de versiones',
                'Gestioné flujos de liberación entre ambientes de testing y producción con mayor rigor y documentación',
                'Mejoré procesos de QA y testing pre-producción'
            ],
            technologies: ['JIRA', 'SVN', 'Control Management', 'Testing', 'Documentación Técnica']
        },
        {
            id: 4,
            company: 'MUPOR (Proveedor externo - CMR Falabella)',
            position: 'Consultor SAT – Control de Versiones',
            period: 'Mayo 2013 – Abril 2014',
            location: 'Santiago, Chile',
            description: 'Mejora de procesos de Gestión de Configuración en repositorio SATIF para Chile y Perú.',
            achievements: [
                'Mejoré procesos de Gestión de Configuración en el repositorio SATIF para Chile y Perú',
                'Definí políticas de branching, merges y liberación alineadas con buenas prácticas de desarrollo',
                'Documenté y estandaricé procedimientos de control de versiones'
            ],
            technologies: ['SVN', 'Git', 'Control de Versiones', 'Gestión de Configuración']
        },
        {
            id: 5,
            company: 'IBM (Proveedor externo - Banco Santander)',
            position: 'Soporte Técnico IT (Nivel 1 y 2)',
            period: '2010 – 2013',
            location: 'Santiago, Chile',
            description: 'Soporte técnico para sistemas bancarios críticos, registro, escalamiento y documentación de incidentes según SLA.',
            achievements: [
                'Brindé soporte técnico para sistemas bancarios críticos, registrando, escalando y documentando incidentes según SLA',
                'Mantuve disponibilidad del 99.5% en sistemas de nivel 1 y 2',
                'Participé en la resolución de incidentes críticos fuera de horario'
            ],
            technologies: ['ServiceNow', 'Ticketing', 'Resolución de Incidentes', 'SLA Management']
        }
    ],

    // Educación
    education: [
        {
            institution: 'Instituto Profesional La Araucana',
            degree: 'Ingeniería en Sistemas Multimedia e Internet',
            period: '2009 – 2013',
            description: 'Título profesional en desarrollo de sistemas multimedia y tecnologías web.'
        },
        {
            institution: 'Universidad Tecnológica de Chile INACAP',
            degree: 'Ingeniería Civil Informática (2 años cursados)',
            period: '2006 – 2008',
            description: 'Estudios de ingeniería civil informática (programa parcial).'
        },
        {
            institution: 'Axelos',
            degree: 'ITIL v4 Foundation',
            period: '2020',
            description: 'Certificación oficial en gestión de servicios TI y mejores prácticas ITIL v4.'
        },
        {
            institution: 'CertiProf',
            degree: 'Scrum Foundation Professional Certificate (SFPC)',
            period: '2019',
            description: 'Certificación en fundamentos de metodología Scrum y gestión ágil de proyectos.'
        }
    ],

    // Testimonios (opcional)
    testimonials: [
        {
            name: 'Juan Pérez',
            position: 'CTO en Tech Solutions',
            text: 'Mauricio es un desarrollador excepcional. Su capacidad para resolver problemas complejos y su mentalidad de aprendizaje continuo lo hacen un activo invaluable para cualquier equipo.',
            avatar: 'assets/testimonials/juan.jpg'
        },
        {
            name: 'María García',
            position: 'Product Manager',
            text: 'Trabajar con Mauricio fue una experiencia fantástica. Siempre entrega código de alta calidad y está dispuesto a ir más allá para lograr los objetivos del proyecto.',
            avatar: 'assets/testimonials/maria.jpg'
        }
    ],

    // Blog y Noticias
    blog: [
        {
            id: 1,
            title: 'Flores Victoria: Arquitectura de Microservicios Enterprise',
            excerpt: 'Caso de estudio sobre la implementación de una plataforma enterprise con 8 microservicios, 4 bases de datos y observabilidad completa.',
            content: 'Flores Victoria es un proyecto enterprise que demuestra la implementación de una arquitectura de microservicios completa. El sistema incluye API Gateway, 8 microservicios especializados (productos, usuarios, pedidos, pagos, inventario, notificaciones, búsqueda, y analytics), orquestación con Docker Compose de 4 bases de datos (MongoDB, PostgreSQL, Redis, RabbitMQ), trazado distribuido con Jaeger, panel de administración con SSO, y testing robusto con Jest y Supertest alcanzando 95% de cobertura. La arquitectura sigue principios de Domain-Driven Design y permite escalado horizontal de cada servicio independiente.',
            category: 'proyecto',
            date: '2025-01-15',
            author: 'Mauricio Garay Veas',
            image: 'assets/blog/flores-victoria-architecture.jpg',
            tags: ['Microservicios', 'Node.js', 'Docker', 'Enterprise', 'Jaeger', 'MongoDB', 'PostgreSQL'],
            readTime: '8 min'
        },
        {
            id: 2,
            title: 'Introducción a React Hooks',
            excerpt: 'Aprende los fundamentos de React Hooks y cómo pueden simplificar tu código.',
            content: 'Los React Hooks revolucionaron la forma en que escribimos componentes...',
            category: 'tutorial',
            date: '2024-10-15',
            author: 'Mauricio Garay Veas',
            image: 'assets/blog/react-hooks.jpg',
            tags: ['React', 'JavaScript', 'Frontend'],
            readTime: '5 min'
        },
        {
            id: 3,
            title: 'Tendencias de JavaScript en 2024',
            excerpt: 'Las últimas novedades y tendencias que están moldeando el ecosistema de JavaScript.',
            content: 'El ecosistema JavaScript continúa evolucionando rápidamente...',
            category: 'noticia',
            date: '2024-10-05',
            author: 'Mauricio Garay Veas',
            image: 'assets/blog/js-trends.jpg',
            tags: ['JavaScript', 'Tendencias', 'Web Development'],
            readTime: '7 min'
        },
        {
            id: 4,
            title: 'Optimización de Performance en Node.js',
            excerpt: 'Tips y técnicas para mejorar el rendimiento de tus aplicaciones Node.js.',
            content: 'La optimización es clave para aplicaciones escalables...',
            category: 'tutorial',
            date: '2024-09-28',
            author: 'Mauricio Garay Veas',
            image: 'assets/blog/nodejs-performance.jpg',
            tags: ['Node.js', 'Backend', 'Performance'],
            readTime: '6 min'
        }
    ]
};