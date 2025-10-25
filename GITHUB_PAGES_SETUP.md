# GitHub Pages Setup Guide

## 🚀 Deployment Adımları

### 1. GitHub Repository Ayarları

1. Repository'nize gidin: `https://github.com/mospts/mos-studio-web`
2. **Settings** > **Pages** sekmesine gidin
3. **Source** olarak **"GitHub Actions"** seçin
4. **Save** butonuna tıklayın

### 2. Otomatik Deployment

Proje her `main` branch'e push edildiğinde otomatik olarak deploy edilir:

```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

### 3. Deployment Kontrolü

1. **Actions** sekmesine gidin
2. **Deploy to GitHub Pages** workflow'unun çalıştığını kontrol edin
3. Yeşil tik işareti görünene kadar bekleyin

### 4. Site Erişimi

Deployment tamamlandıktan sonra:
- **URL**: https://mospts.github.io/mos-studio-web/
- **Yaklaşık süre**: 2-5 dakika

## 🔧 Sorun Giderme

### 404 Hataları
- Base path ayarları kontrol edildi: `/mos-studio-web/`
- GitHub Actions workflow güncellendi
- Build konfigürasyonu optimize edildi

### Build Hataları
```bash
# Yerel test için
npm run build:gh-pages
npm run check-build
```

### Cache Sorunları
- Tarayıcı cache'ini temizleyin: `Ctrl + Shift + R`
- GitHub Pages cache'i 5-10 dakika sürebilir

## 📁 Dosya Yapısı
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── favicon.ico
├── robots.txt
└── .nojekyll
```

## 🎯 Önemli Notlar

- **Base Path**: `/mos-studio-web/` (Vite config'de ayarlı)
- **Build Output**: `dist/` klasörü
- **Jekyll**: Devre dışı (`.nojekyll` dosyası ile)
- **Assets**: `assets/` klasöründe hash'li dosyalar
