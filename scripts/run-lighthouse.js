#!/usr/bin/env node

/**
 * Script de auditoría Lighthouse
 * Ejecuta auditorías de rendimiento, accesibilidad, SEO y PWA
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🔍 Auditoría Lighthouse');
console.log('=======================\n');

// Verificar si lighthouse está instalado
exec('npx lighthouse --version', (error, stdout, stderr) => {
    if (error) {
        console.log('⚠️  Lighthouse no está instalado globalmente.\n');
        console.log('📦 Para ejecutar la auditoría, instala Lighthouse:');
        console.log('   npm install -g lighthouse\n');
        console.log('🔄 O usa npx (sin instalación global):');
        console.log('   npx lighthouse http://localhost:8080 --view\n');
        console.log('📊 Opciones de auditoría:');
        console.log('   --only-categories=performance,accessibility,seo,pwa');
        console.log('   --output=html --output-path=./lighthouse-report.html');
        console.log('   --view (abre el reporte automáticamente)\n');
        console.log('🎯 Comando completo recomendado:');
        console.log('   npx lighthouse http://localhost:8080 \\');
        console.log('     --only-categories=performance,accessibility,seo,pwa \\');
        console.log('     --output=html \\');
        console.log('     --output-path=./reports/lighthouse-report.html \\');
        console.log('     --view\n');
        console.log('📝 NOTA: Asegúrate de que el servidor esté corriendo (npm run dev)');
        return;
    }
    
    console.log(`✅ Lighthouse ${stdout.trim()} detectado\n`);
    
    // Crear carpeta de reportes
    const reportsDir = path.join(__dirname, '..', 'reports');
    if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    console.log('🚀 Ejecutando auditoría completa...\n');
    
    const lighthouse = exec(
        'npx lighthouse http://localhost:8080 ' +
        '--only-categories=performance,accessibility,best-practices,seo,pwa ' +
        '--output=html,json ' +
        '--output-path=./reports/lighthouse-report ' +
        '--chrome-flags="--headless"',
        { maxBuffer: 1024 * 1024 * 10 }
    );
    
    lighthouse.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
    
    lighthouse.stderr.on('data', (data) => {
        process.stderr.write(data);
    });
    
    lighthouse.on('close', (code) => {
        if (code === 0) {
            console.log('\n✅ Auditoría completada!');
            console.log('📊 Reportes generados en: ./reports/');
            console.log('   - lighthouse-report.html');
            console.log('   - lighthouse-report.json\n');
            console.log('🌐 Abre el reporte HTML en tu navegador para ver los resultados.');
        } else {
            console.log(`\n❌ Error al ejecutar Lighthouse (código ${code})`);
            console.log('💡 Verifica que el servidor esté corriendo en http://localhost:8080');
        }
    });
});
