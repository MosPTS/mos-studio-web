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
    'hero.title': 'Hedeflerinize Özel, Profesyonel ve Kişiselleştirilmiş Fitness Yolculuğu',
    'hero.subtitle': '',
    'hero.cta': 'Yolculuğunuza Başlayın',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Hedeflerinize ulaşmanıza yardımcı olacak kapsamlı antrenman programları',
    'services.small.title': 'Bireysel Odaklı Özel Dersler',
    'services.small.desc': 'Maksimum 4 kişiye kadar sınırlı katılımla, tamamen size özel ve kişisel hedeflerinize yönelik profesyonel antremanlar.',
    'services.custom.title': 'Özel Programlar',
    'services.custom.desc': 'Kuvvet, kardiyo, esneklik ve genel sağlığı kapsayan beklentilerinize göre tasarlanmış antrenmanlar.',
    'services.equipment.title': 'Modern Ekipman',
    'services.equipment.desc': 'Son teknoloji ekipmanlarla donatılmış temiz ve ferah bir stüdyo ortamı.',
    'services.personal.title': 'Kişiye Özel Koçluk',
    'services.personal.desc': 'Bireysel ihtiyaçlarınıza odaklanan profesyonel rehberlik ve güvenli bir antrenman deneyimi.',
    
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
    'contact.form.success.title': 'Mesajınız Bize Ulaştı!',
    'contact.form.success.desc': 'En kısa zamanda size geri dönüş yapacağız. Teşekkür ederiz!',
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
    'hero.title': 'Professional and Personalized Fitness Journey Tailored to Your Goals',
    'hero.subtitle': '',
    'hero.cta': 'Start Your Journey',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive training programs designed to help you achieve your goals',
    'services.small.title': 'Individual Focused Private Lessons',
    'services.small.desc': 'Professional training sessions completely tailored to you and your personal goals, with limited participation of up to 4 people maximum.',
    'services.custom.title': 'Custom Programs',
    'services.custom.desc': 'Training tailored to your expectations, covering strength, cardio, flexibility, and overall wellness.',
    'services.equipment.title': 'Modern Equipment',
    'services.equipment.desc': 'Clean, spacious studio environment equipped with state-of-the-art fitness equipment.',
    'services.personal.title': 'Personalized Coaching',
    'services.personal.desc': 'Professional guidance focused on your individual needs and a safe training experience.',
    
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
    'contact.form.success.title': 'We Received Your Message!',
    'contact.form.success.desc': 'We will get back to you as soon as possible. Thank you!',
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
