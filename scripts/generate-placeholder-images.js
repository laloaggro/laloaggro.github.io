#!/usr/bin/env node

/**
 * Generador de imágenes placeholder para proyectos
 * Crea SVG temporales mientras se obtienen las imágenes reales
 */

const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, '..', 'assets', 'projects');
if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
}

console.log('🖼️  Generador de Placeholders para Proyectos');
console.log('==========================================\n');

const projects = [
    { name: 'flores-victoria', title: 'Flores Victoria', icon: '🌹', color: '#8B4513' },
    { name: 'terminal-history', title: 'Terminal History', icon: '💻', color: '#2E7D32' },
    { name: 'task-manager', title: 'Task Manager', icon: '✅', color: '#1976D2' },
    { name: 'api-service', title: 'API Service', icon: '⚡', color: '#7B1FA2' },
    { name: 'dashboard', title: 'Analytics Dashboard', icon: '📊', color: '#D32F2F' },
    { name: 'chat-app', title: 'Real-time Chat', icon: '💬', color: '#0288D1' }
];

projects.forEach(project => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#1A1A1A"/>
  
  <!-- Gradient overlay -->
  <rect width="800" height="600" fill="url(#bgGradient)" opacity="0.4"/>
  
  <!-- Border -->
  <rect x="10" y="10" width="780" height="580" fill="none" stroke="${project.color}" stroke-width="3"/>
  
  <!-- Icon circle -->
  <circle cx="400" cy="250" r="80" fill="${project.color}" opacity="0.2"/>
  
  <!-- Icon text (emoji) -->
  <text x="400" y="280" font-size="100" text-anchor="middle">${project.icon}</text>
  
  <!-- Project title -->
  <text x="400" y="380" font-family="Arial, sans-serif" font-size="36" font-weight="bold" 
        fill="#D4AF37" text-anchor="middle">${project.title}</text>
  
  <!-- Subtitle -->
  <text x="400" y="420" font-family="Arial, sans-serif" font-size="18" 
        fill="#CCCCCC" text-anchor="middle">Proyecto Portfolio</text>
  
  <!-- Logo MGV en esquina -->
  <text x="740" y="560" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
        fill="#D4AF37" text-anchor="end" opacity="0.5">MGV</text>
  
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${project.color};stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:0.1" />
    </linearGradient>
  </defs>
</svg>`;

    const fileName = `${project.name}.svg`;
    const filePath = path.join(projectsDir, fileName);
    fs.writeFileSync(filePath, svgContent);
    console.log(`✅ Creado: ${fileName}`);
});

console.log('\n📝 NOTA: Estos son placeholders temporales en formato SVG.');
console.log('   Para producción, reemplázalos con capturas de pantalla reales de los proyectos.\n');

console.log('🔄 Actualizar extensiones en portfolio.js:');
console.log('   Cambia .jpg por .svg en las rutas de las imágenes.\n');

console.log('📸 Pasos para obtener imágenes reales:');
console.log('   1. Ejecuta cada proyecto en local');
console.log('   2. Toma capturas de pantalla (1200x800px recomendado)');
console.log('   3. Optimiza las imágenes a WebP con el script optimize-images.js');
console.log('   4. Reemplaza los placeholders SVG');
