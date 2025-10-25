#!/usr/bin/env node

/**
 * Generador de imagen Open Graph (og-image.jpg)
 * Crea una imagen optimizada para redes sociales usando Canvas
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

console.log('🖼️  Generador de Open Graph Image');
console.log('=================================\n');

// Crear canvas de 1200x630 (tamaño estándar OG)
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fondo negro
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, width, height);

// Gradiente de fondo
const bgGradient = ctx.createLinearGradient(0, 0, width, height);
bgGradient.addColorStop(0, 'rgba(212, 175, 55, 0.15)');
bgGradient.addColorStop(0.5, 'rgba(26, 26, 26, 0)');
bgGradient.addColorStop(1, 'rgba(212, 175, 55, 0.15)');
ctx.fillStyle = bgGradient;
ctx.fillRect(0, 0, width, height);

// Borde decorativo
ctx.strokeStyle = '#D4AF37';
ctx.lineWidth = 2;
ctx.globalAlpha = 0.5;
ctx.strokeRect(30, 30, width - 60, height - 60);
ctx.globalAlpha = 1;

// Logo/Brand MGV
const logoGradient = ctx.createLinearGradient(0, 80, width, 80);
logoGradient.addColorStop(0, '#D4AF37');
logoGradient.addColorStop(1, '#FFD700');

ctx.fillStyle = logoGradient;
ctx.font = 'bold 100px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('MGV', width / 2, 140);

// Nombre
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 42px Arial, sans-serif';
ctx.fillText('Mauricio Eduardo Garay Veas', width / 2, 240);

// Título profesional
ctx.fillStyle = '#D4AF37';
ctx.font = '28px Arial, sans-serif';
ctx.fillText('DevOps Lead | SRE Expert', width / 2, 295);

// Especialidades
ctx.fillStyle = '#CCCCCC';
ctx.font = '20px Arial, sans-serif';
ctx.fillText('🚀 ITIL & Change Management', width / 2, 360);
ctx.fillText('☁️ Cloud-Native & Kubernetes', width / 2, 395);
ctx.fillText('🔧 CI/CD & Infrastructure as Code', width / 2, 430);

// Experiencia
const expGradient = ctx.createLinearGradient(0, 495, width, 495);
expGradient.addColorStop(0, '#D4AF37');
expGradient.addColorStop(1, '#FFD700');
ctx.fillStyle = expGradient;
ctx.font = 'bold 24px Arial, sans-serif';
ctx.fillText('12+ Años | Infraestructura Financiera Crítica', width / 2, 495);

// Footer
ctx.fillStyle = '#888888';
ctx.font = '18px Arial, sans-serif';
ctx.fillText('laloaggro.github.io', width / 2, 560);

// Guardar como JPG
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
const jpgPath = path.join(assetsDir, 'og-image.jpg');
fs.writeFileSync(jpgPath, buffer);
console.log(`✅ Creado: og-image.jpg (1200x630)`);

// Guardar también como SVG para referencia
const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#000000"/>
  
  <!-- Gradient overlay -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:0.15" />
      <stop offset="50%" style="stop-color:#1A1A1A;stop-opacity:0" />
      <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:0.15" />
    </linearGradient>
    
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFD700;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Border decoration -->
  <rect x="30" y="30" width="1140" height="570" fill="none" stroke="url(#textGradient)" stroke-width="2" opacity="0.5"/>
  
  <!-- Logo/Brand -->
  <text x="600" y="140" font-family="Arial, sans-serif" font-size="100" font-weight="bold" 
        fill="url(#textGradient)" text-anchor="middle">MGV</text>
  
  <!-- Name -->
  <text x="600" y="240" font-family="Arial, sans-serif" font-size="42" font-weight="bold" 
        fill="#FFFFFF" text-anchor="middle">Mauricio Eduardo Garay Veas</text>
  
  <!-- Title -->
  <text x="600" y="295" font-family="Arial, sans-serif" font-size="28" 
        fill="#D4AF37" text-anchor="middle">DevOps Lead | SRE Expert</text>
  
  <!-- Specialties -->
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="20" 
        fill="#CCCCCC" text-anchor="middle">🚀 ITIL &amp; Change Management</text>
  <text x="600" y="395" font-family="Arial, sans-serif" font-size="20" 
        fill="#CCCCCC" text-anchor="middle">☁️ Cloud-Native &amp; Kubernetes</text>
  <text x="600" y="430" font-family="Arial, sans-serif" font-size="20" 
        fill="#CCCCCC" text-anchor="middle">🔧 CI/CD &amp; Infrastructure as Code</text>
  
  <!-- Experience -->
  <text x="600" y="495" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
        fill="url(#textGradient)" text-anchor="middle">12+ Años | Infraestructura Financiera Crítica</text>
  
  <!-- Footer -->
  <text x="600" y="560" font-family="Arial, sans-serif" font-size="18" 
        fill="#888888" text-anchor="middle">laloaggro.github.io</text>
</svg>`;

const svgPath = path.join(assetsDir, 'og-image.svg');
fs.writeFileSync(svgPath, svgContent);
console.log(`✅ Creado: og-image.svg (referencia vectorial)\n`);

console.log('� Archivos creados:');
console.log(`   ✓ ${jpgPath}`);
console.log(`   ✓ ${svgPath}\n`);

console.log('� Uso en index.html:');
console.log('   <meta property="og:image" content="https://laloaggro.github.io/assets/og-image.jpg">');
console.log('   <meta property="twitter:image" content="https://laloaggro.github.io/assets/og-image.jpg">\n');

console.log('✨ ¡Listo! Tu sitio ahora tiene imagen Open Graph para redes sociales.');
console.log('🧪 Prueba en: https://www.opengraph.xyz/ o https://cards-dev.twitter.com/validator');
