# GitHub Pages Deployment

Bu proje GitHub Pages'de yayınlanmaktadır.

## Deployment Adımları

1. **GitHub Actions Workflow**: `.github/workflows/deploy.yml` dosyası otomatik deployment sağlar
2. **Base Path**: Vite konfigürasyonunda `base: '/mos-studio-web/'` ayarı yapılmıştır
3. **Build Output**: `dist` klasörü GitHub Pages'e deploy edilir

## Manuel Deployment

Eğer manuel olarak deploy etmek isterseniz:

```bash
npm run build
```

Build edilen dosyalar `dist` klasöründe oluşur. Bu klasörü GitHub Pages'e yükleyebilirsiniz.

## Sorun Giderme

- 404 hataları genellikle base path ayarlarından kaynaklanır
- GitHub Pages ayarlarında "Source" olarak "GitHub Actions" seçili olmalıdır
- Repository Settings > Pages > Source: GitHub Actions
