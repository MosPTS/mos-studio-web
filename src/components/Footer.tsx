import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background/95 border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="MOS Personal Training Studio" 
              className="h-20 md:h-24 w-auto"
            />
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-roboto">
              {t('contact.title')}
            </h4>
            <div className="space-y-2">
              <a 
                href="tel:+905323011997" 
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors font-roboto"
              >
                <Phone className="w-4 h-4 mr-2" />
                +90 532 301 1997
              </a>
              <a 
                href="mailto:mospersonalcoaching@gmail.com" 
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors font-roboto"
              >
                <Mail className="w-4 h-4 mr-2" />
                mospersonalcoaching@gmail.com
              </a>
              <a 
                href="https://instagram.com/mos.personaltraining" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors font-roboto"
              >
                <Instagram className="w-4 h-4 mr-2" />
                @mos.personaltraining
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-roboto">
              {t('contact.address')}
            </h4>
            <div className="flex items-start text-sm text-muted-foreground font-roboto">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p>Demircikara Mahallesi</p>
                <p>1431 Sokak No:8/1</p>
                <p>Antalya-Muratpaşa, Turkey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground font-roboto">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
