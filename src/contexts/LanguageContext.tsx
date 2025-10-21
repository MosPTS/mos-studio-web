import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.contact': 'İletişim',
    
    // Hero
    'hero.title': 'Küçük Gruplarda Kişiselleştirilmiş Fitness Antrenmanı',
    'hero.subtitle': 'Hedeflerinize Özel',
    'hero.cta': 'Yolculuğunuza Başlayın',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Hedeflerinize ulaşmanıza yardımcı olacak kapsamlı antrenman programları',
    'services.small.title': 'Küçük Grup Antrenmanı',
    'services.small.desc': 'Maksimum 4 kişilik gruplarla kişiselleştirilmiş dikkat ve bireysel hedeflerinize odaklanma.',
    'services.custom.title': 'Özel Programlar',
    'services.custom.desc': 'Kuvvet, kardiyo, esneklik ve genel sağlığı kapsayan beklentilerinize göre tasarlanmış antrenmanlar.',
    'services.equipment.title': 'Modern Ekipman',
    'services.equipment.desc': 'Son teknoloji ekipmanlarla donatılmış temiz ve ferah bir stüdyo ortamı.',
    'services.personal.title': 'Bire Bir Hizmet',
    'services.personal.desc': 'Optimal sonuçlar ve güvenlik için kişisel yaklaşım ve rehberlik.',
    
    // Contact
    'contact.title': 'İletişime Geçin',
    'contact.subtitle': 'Fitness yolculuğunuza bugün başlayın. Randevu için bize ulaşın.',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.instagram': 'Instagram',
    'contact.form.title': 'Randevu Talep Formu',
    'contact.form.name': 'Adınız',
    'contact.form.email': 'E-posta Adresiniz',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    'contact.form.success': 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.',
    'contact.form.error': 'Lütfen tüm alanları doldurun.',
    
    // Footer
    'footer.copyright': '© 2025 MOS Personal Training Studio. Tüm hakları saklıdır.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Personalized Fitness Training in Small Groups',
    'hero.subtitle': 'Tailored to Your Goals',
    'hero.cta': 'Start Your Journey',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive training programs designed to help you achieve your goals',
    'services.small.title': 'Small Group Training',
    'services.small.desc': 'Maximum 4-person groups ensuring personalized attention and focus on individual goals.',
    'services.custom.title': 'Custom Programs',
    'services.custom.desc': 'Training tailored to your expectations, covering strength, cardio, flexibility, and overall wellness.',
    'services.equipment.title': 'Modern Equipment',
    'services.equipment.desc': 'Clean, spacious studio environment equipped with state-of-the-art fitness equipment.',
    'services.personal.title': 'One-on-One Service',
    'services.personal.desc': 'Personal approach and guidance to ensure optimal results and safety.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Start your fitness journey today. Contact us to schedule an appointment.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    'contact.form.title': 'Appointment Request Form',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Your message has been sent! We will get back to you shortly.',
    'contact.form.error': 'Please fill in all fields.',
    
    // Footer
    'footer.copyright': '© 2025 MOS Personal Training Studio. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
