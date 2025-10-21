import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern fitness training studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img 
          src={logo} 
          alt="MOS Personal Training Studio Logo" 
          className="w-64 md:w-80 lg:w-96 mx-auto mb-8 animate-fade-in"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-6 font-roboto">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-roboto font-light">
          {t('hero.subtitle')}
        </p>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={() => scrollToSection('contact')}
          className="animate-fade-in"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
