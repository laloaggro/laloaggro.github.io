export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  githubUrl?: string;
  featured?: boolean;
  year: number;
  category: 'DevOps' | 'Microservices' | 'Cloud' | 'Change Management' | 'Open Source';
}

export const projects: Project[] = [
  {
    id: "flores-victoria",
    title: "Flores Victoria - E-commerce Platform",
    description: "Plataforma de comercio electrónico nativa en la nube con arquitectura de microservicios",
    technologies: ["Docker", "Kubernetes", "Microservices", "Prometheus", "Grafana", "MongoDB", "PostgreSQL", "RabbitMQ", "Redis"],
    details: [
      "Arquitecté e implementé una plataforma de e-commerce con más de 13 microservicios",
      "Implementé stack completo de observabilidad con Prometheus, Grafana y ELK",
      "Desarrollé CI/CD pipelines con GitHub Actions",
      "Integré seguridad con JWT, TLS y gestión segura de secretos",
      "Logré auto-escalado y alta disponibilidad en entorno Docker/Kubernetes"
    ],
    githubUrl: "https://github.com/laloaggro/Flores-Victoria-",
    featured: true,
    year: 2025,
    category: "Microservices"
  },
  {
    id: "change-management-system",
    title: "Sistema de Gestión de Cambios Financieros",
    description: "Lideré la gestión de cambios en entornos financieros regulados para 7 países",
    technologies: ["JIRA", "ServiceNow", "ITIL", "CI/CD", "Audit Compliance", "Regulatory Standards"],
    details: [
      "Escalé la gobernanza de cambios en 7 países, gestionando más de 1.000 cambios anuales",
      "Reduje conflictos de despliegue en un 70% con calendario maestro en JIRA",
      "Automatizé el 50% de los procesos de cambio, reduciendo tiempos de aprobación de 2 días a 4 horas",
      "Logré cumplimiento del 100% en auditorías (CMF, PCI-DSS, ISO 27001)"
    ],
    featured: true,
    year: 2024,
    category: "Change Management"
  }
];