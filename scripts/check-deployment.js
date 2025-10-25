#!/usr/bin/env node

/**
 * GitHub Pages deployment kontrol scripti
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 GitHub Pages Deployment Kontrolü\n');

// 1. Vite config kontrolü
const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
  const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  if (viteConfig.includes("base: '/mos-studio-web/'")) {
    console.log('✅ Vite base path doğru ayarlanmış');
  } else {
    console.log('❌ Vite base path yanlış ayarlanmış');
  }
} else {
  console.log('❌ vite.config.ts bulunamadı');
}

// 2. GitHub Actions workflow kontrolü
const workflowPath = path.join(__dirname, '..', '.github', 'workflows', 'deploy.yml');
if (fs.existsSync(workflowPath)) {
  console.log('✅ GitHub Actions workflow mevcut');
} else {
  console.log('❌ GitHub Actions workflow bulunamadı');
}

// 3. .nojekyll dosyası kontrolü
const nojekyllPath = path.join(__dirname, '..', 'public', '.nojekyll');
if (fs.existsSync(nojekyllPath)) {
  console.log('✅ .nojekyll dosyası mevcut');
} else {
  console.log('❌ .nojekyll dosyası bulunamadı');
}

// 4. Package.json scripts kontrolü
const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log('✅ Build script mevcut');
  } else {
    console.log('❌ Build script bulunamadı');
  }
} else {
  console.log('❌ package.json bulunamadı');
}

console.log('\n📋 GitHub Pages Ayarları:');
console.log('1. Repository Settings > Pages > Source: GitHub Actions seçili olmalı');
console.log('2. Actions sekmesinde workflow çalıştığından emin olun');
console.log('3. Deploy tamamlandıktan sonra https://mospts.github.io/mos-studio-web/ adresini kontrol edin');
