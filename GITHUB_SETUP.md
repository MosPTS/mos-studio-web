# GitHub'a Proje Yükleme Rehberi

Bu rehber, MOS Studio Web projenizi GitHub'a yüklemek ve GitHub Pages'te yayınlamak için gerekli adımları içerir.

## 🔧 Ön Gereksinimler

### 1. Git Kurulumu
Windows için Git'i kurun:
- [Git for Windows](https://git-scm.com/download/win) adresinden indirin
- Kurulum sırasında varsayılan ayarları kullanın
- Kurulum tamamlandıktan sonra PowerShell'i yeniden başlatın

### 2. GitHub Hesabı
- [GitHub.com](https://github.com) adresinden ücretsiz hesap oluşturun
- E-posta adresinizi doğrulayın

## 📋 Adım Adım Kurulum

### 1. Git Repository Başlatma
PowerShell'de proje klasöründe şu komutları çalıştırın:

```bash
# Git repository başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: MOS Studio Web project"
```

### 2. GitHub Repository Oluşturma
1. GitHub.com'a gidin ve "New repository" butonuna tıklayın
2. Repository adını `mos-studio-web` olarak girin
3. "Public" seçin (ücretsiz GitHub Pages için)
4. "Create repository" butonuna tıklayın

### 3. Local Repository'yi GitHub'a Bağlama
```bash
# GitHub repository'yi remote olarak ekle
git remote add origin https://github.com/KULLANICI_ADINIZ/mos-studio-web.git

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub'a gönder
git push -u origin main
```

### 4. GitHub Pages Ayarları
1. GitHub repository'nizde "Settings" sekmesine gidin
2. Sol menüden "Pages" seçin
3. "Source" altında "GitHub Actions" seçin
4. Ayarları kaydedin

## 🚀 Otomatik Deployment

Proje GitHub'a yüklendikten sonra:
1. GitHub Actions otomatik olarak çalışacak
2. Proje build edilecek
3. GitHub Pages'e deploy edilecek
4. Site şu adreste yayınlanacak: `https://KULLANICI_ADINIZ.github.io/mos-studio-web/`

## 🔄 Güncellemeler

Kodunuzda değişiklik yaptıktan sonra:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Update: açıklama"

# GitHub'a gönder
git push origin main
```

## ❗ Yaygın Hatalar ve Çözümleri

### 1. "git is not recognized" Hatası
- Git kurulumunu kontrol edin
- PowerShell'i yeniden başlatın
- PATH değişkenlerini kontrol edin

### 2. Authentication Hatası
```bash
# GitHub kimlik doğrulama için
git config --global user.name "Adınız"
git config --global user.email "email@example.com"
```

### 3. Push Hatası
```bash
# Önce pull yapın
git pull origin main

# Sonra push yapın
git push origin main
```

### 4. Build Hatası
- `npm install` komutunu çalıştırın
- Node.js versiyonunu kontrol edin (18+ gerekli)
- Dependencies'leri güncelleyin

## 📞 Yardım

Herhangi bir sorun yaşarsanız:
1. GitHub repository'nizin "Actions" sekmesini kontrol edin
2. Hata mesajlarını okuyun
3. Bu rehberi tekrar gözden geçirin

## ✅ Başarı Kontrolü

Proje başarıyla yayınlandıysa:
- GitHub repository'nizde "Actions" sekmesinde yeşil tik göreceksiniz
- "Pages" sekmesinde site URL'inizi göreceksiniz
- Site URL'ine giderek projenizi canlı olarak görebileceksiniz
