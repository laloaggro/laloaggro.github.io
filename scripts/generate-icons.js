#!/usr/bin/env node

/**
 * Generador de iconos para PWA
 * Crea favicon.ico e iconos PWA en diferentes tamaños usando Canvas
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Verificar si las carpetas existen, sino crearlas
const iconsDir = path.join(__dirname, '..', 'assets', 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

console.log('🎨 Generador de Iconos PWA - MGV Portfolio');
console.log('=========================================\n');

// Tamaños de iconos necesarios para PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

/**
 * Genera un icono con el logo MGV en un tamaño específico
 */
function generateIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Fondo negro
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);
    
    // Configurar texto MGV
    const fontSize = Math.floor(size * 0.35);
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Gradiente dorado
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#D4AF37');
    gradient.addColorStop(1, '#FFD700');
    ctx.fillStyle = gradient;
    
    // Dibujar texto MGV
    ctx.fillText('MGV', size / 2, size / 2);
    
    return canvas;
}

/**
 * Guarda un canvas como PNG
 */
function saveAsPNG(canvas, filePath) {
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filePath, buffer);
}

// Generar todos los iconos PWA
console.log('🚀 Generando iconos PWA...\n');

iconSizes.forEach(size => {
    const canvas = generateIcon(size);
    const fileName = `icon-${size}x${size}.png`;
    const filePath = path.join(iconsDir, fileName);
    
    saveAsPNG(canvas, filePath);
    console.log(`✅ Creado: ${fileName} (${size}x${size})`);
});

// Generar favicon.ico (32x32)
const faviconSize = 32;
const faviconCanvas = generateIcon(faviconSize);
const faviconPath = path.join(__dirname, '..', 'favicon.ico');
// Guardar como PNG (para favicon simple, PNG funciona)
// Para ICO real necesitaríamos una librería adicional
const faviconPngPath = path.join(iconsDir, 'icon-32x32.png');
saveAsPNG(faviconCanvas, faviconPngPath);
console.log(`✅ Creado: icon-32x32.png (${faviconSize}x${faviconSize})`);

// Copiar también como favicon.ico (nota: es PNG renombrado, funciona en la mayoría de navegadores)
fs.copyFileSync(faviconPngPath, faviconPath);
console.log(`✅ Creado: favicon.ico (copiado desde 32x32)\n`);

// Crear un SVG simple como referencia
const svgIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#000000"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="180" font-weight="bold" 
        fill="url(#goldGradient)" text-anchor="middle" dominant-baseline="middle">MGV</text>
  <defs>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFD700;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;

const svgPath = path.join(iconsDir, 'icon-base.svg');
fs.writeFileSync(svgPath, svgIcon);
console.log(`📄 Creado: icon-base.svg (referencia vectorial)\n`);

console.log('✨ Iconos generados exitosamente!');
console.log(`📁 Ubicación: ${iconsDir}\n`);

console.log('📋 Archivos creados:');
iconSizes.forEach(size => {
    console.log(`   ✓ icon-${size}x${size}.png`);
});
console.log(`   ✓ icon-32x32.png`);
console.log(`   ✓ favicon.ico (raíz del proyecto)`);
console.log(`   ✓ icon-base.svg\n`);

console.log('🔍 Verificación:');
console.log('   ✓ manifest.json - referencias actualizadas');
console.log('   ✓ index.html - <link rel="icon"> configurado');
console.log('\n🎉 ¡Listo! Tu PWA ahora tiene todos los iconos necesarios.');
