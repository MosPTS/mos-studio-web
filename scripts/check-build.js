#!/usr/bin/env node

/**
 * Build sonrası dosya kontrolü
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Build Sonrası Dosya Kontrolü\n');

const distPath = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distPath)) {
  console.log('❌ dist klasörü bulunamadı. Önce build yapın: npm run build');
  process.exit(1);
}

console.log('✅ dist klasörü mevcut');

// index.html kontrolü
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  console.log('✅ index.html mevcut');
  
  // Base path kontrolü
  if (indexContent.includes('/mos-studio-web/')) {
    console.log('✅ Base path doğru ayarlanmış');
  } else {
    console.log('❌ Base path yanlış ayarlanmış');
  }
} else {
  console.log('❌ index.html bulunamadı');
}

// Assets klasörü kontrolü
const assetsPath = path.join(distPath, 'assets');
if (fs.existsSync(assetsPath)) {
  console.log('✅ assets klasörü mevcut');
  
  const assets = fs.readdirSync(assetsPath);
  console.log(`📁 Assets dosyaları (${assets.length} adet):`);
  assets.forEach(file => {
    console.log(`  - ${file}`);
  });
} else {
  console.log('❌ assets klasörü bulunamadı');
}

// Public dosyalar kontrolü
const publicFiles = ['favicon.ico', 'robots.txt'];
publicFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} mevcut`);
  } else {
    console.log(`❌ ${file} bulunamadı`);
  }
});

console.log('\n📋 GitHub Pages için gerekli dosyalar:');
console.log('1. index.html (root seviyede)');
console.log('2. assets/ klasörü (CSS, JS dosyaları)');
console.log('3. public/ dosyaları (favicon.ico, robots.txt)');
console.log('4. .nojekyll dosyası (Jekyll devre dışı)');
