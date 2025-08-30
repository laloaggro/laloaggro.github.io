const projects = [
    {
        title: 'Terminal IA',
        description: 'Terminal interactiva con integración de IA para aprender historia de la programación.',
        image: 'assets/projects/terminal-ia.jpg',
        tech: ['JavaScript', 'Node.js', 'OpenAI API'],
        github: 'https://github.com/laloaggro/terminal-ia',
        demo: 'https://terminal-ia.demo.com'
    },
    // Agregar más proyectos aquí
];

export function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
            ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.github}" target="_blank">GitHub</a>
            <a href="${project.demo}" target="_blank">Demo</a>
        </div>
    `;
    return card;
}