# MOS Personal Training Studio

A modern, responsive website for MOS Personal Training Studio - a premium fitness center in Antalya, Turkey, specializing in personalized training in small groups.

## 🌟 Features

- **Bilingual Support**: Full Turkish and English language support with easy switching
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with cyan/blue color scheme
- **Contact Form**: Integrated appointment request system via Formspree
- **SEO Optimized**: Semantic HTML and proper meta tags

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mos-personal-training
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Configuration

### Contact Form Setup

The contact form uses Formspree. To configure:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form endpoint in `src/components/Contact.tsx`:
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

## 📝 Customization

### Colors
Edit the color scheme in `src/index.css` and `tailwind.config.ts`. All colors use HSL format.

### Translations
Add or modify translations in `src/contexts/LanguageContext.tsx`.

### Images
Replace images in `src/assets/` directory:
- `logo.png` - Main logo (transparent background)
- `hero-gym.jpg` - Hero section background

## 🌐 Deployment

### Deploy to Netlify/Vercel

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

This project includes automated GitHub Actions workflow for deployment.

**Setup Steps:**

1. Go to your GitHub repository Settings
2. Navigate to Pages (under "Code and automation")
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Push to main branch - deployment happens automatically!

**Important:** If your repository is not at the root of your GitHub account (e.g., `username.github.io/repository-name`), you need to update `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/repository-name/', // Add this line with your repo name
  // ... rest of config
}));
```

Your site will be available at: `https://username.github.io/repository-name/`

## 📞 Contact Information

- **Address**: Demircikara Mahallesi, 1431 Sokak No:8/1, Antalya-Muratpaşa, Turkey
- **Phone**: +90 532 301 1997
- **Email**: mospersonalcoaching@gmail.com
- **Instagram**: @mos.personaltraining

## 📄 License

© 2025 MOS Personal Training Studio. All rights reserved.

---

# MOS Personal Training Studio

Antalya, Türkiye'de küçük gruplarda kişiselleştirilmiş antrenman hizmeti sunan premium bir fitness merkezi için modern, responsive web sitesi.

## 🌟 Özellikler

- **İki Dilli Destek**: Kolay geçiş ile tam Türkçe ve İngilizce dil desteği
- **Responsive Tasarım**: Tüm cihazlar için optimize edilmiş (mobil, tablet, masaüstü)
- **Modern Arayüz**: Temiz, profesyonel tasarım ve cyan/mavi renk paleti
- **İletişim Formu**: Formspree ile entegre randevu talep sistemi
- **SEO Optimize**: Semantik HTML ve uygun meta etiketleri

## 🚀 Teknoloji Yığını

- **React 18** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenli geliştirme
- **Vite** - Hızlı build aracı
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Erişilebilir bileşen primitifleri
- **Lucide React** - Güzel ikonlar

## 📦 Kurulum

1. Depoyu klonlayın:
```bash
git clone <repo-url>
cd mos-personal-training
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Production için build edin:
```bash
npm run build
```

## 🔧 Yapılandırma

### İletişim Formu Kurulumu

İletişim formu Formspree kullanır. Yapılandırma için:

1. [Formspree.io](https://formspree.io) adresinden kayıt olun
2. Yeni bir form oluşturun
3. `src/components/Contact.tsx` dosyasındaki form endpoint'ini değiştirin:
```typescript
const response = await fetch("https://formspree.io/f/FORM_ID", {
```

## 📝 Özelleştirme

### Renkler
Renk şemasını `src/index.css` ve `tailwind.config.ts` dosyalarında düzenleyin. Tüm renkler HSL formatındadır.

### Çeviriler
`src/contexts/LanguageContext.tsx` dosyasında çevirileri ekleyin veya değiştirin.

### Görseller
`src/assets/` dizinindeki görselleri değiştirin:
- `logo.png` - Ana logo (şeffaf arka plan)
- `hero-gym.jpg` - Hero bölümü arka plan görseli

## 🌐 Deployment

### Netlify/Vercel'e Deploy

1. Kodunuzu GitHub'a gönderin
2. Repository'nizi Netlify veya Vercel'e bağlayın
3. Build komutu: `npm run build`
4. Publish dizini: `dist`

### GitHub Pages'e Deploy

Bu proje otomatik deployment için GitHub Actions workflow içerir.

**Kurulum Adımları:**

1. GitHub repository'nizin Settings'e gidin
2. Pages bölümüne gidin ("Code and automation" altında)
3. "Build and deployment" altında:
   - Source: "GitHub Actions" seçin
4. Main branch'e push yapın - deployment otomatik başlar!

**Önemli:** Repository'niz GitHub hesabınızın root'unda değilse (örn. `username.github.io/repository-name`), `vite.config.ts` dosyasını güncellemeniz gerekir:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/repository-name/', // Repo adınızla bu satırı ekleyin
  // ... diğer ayarlar
}));
```

Siteniz şu adreste olacak: `https://username.github.io/repository-name/`

## 📞 İletişim Bilgileri

- **Adres**: Demircikara Mahallesi, 1431 Sokak No:8/1, Antalya-Muratpaşa, Türkiye
- **Telefon**: +90 532 301 1997
- **E-posta**: mospersonalcoaching@gmail.com
- **Instagram**: @mos.personaltraining

## 📄 Lisans

© 2025 MOS Personal Training Studio. Tüm hakları saklıdır.
