import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: t('nav.home') },
    { id: "services", label: t('nav.services') },
    { id: "contact", label: t('nav.contact') },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-roboto ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-baseline gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl md:text-2xl font-bold text-primary">MOS</span>
            <span className="text-xs md:text-sm text-foreground font-medium">Personal Training Studio</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-border pl-6">
              <Globe size={18} className="text-muted-foreground" />
              <button
                onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {language === 'tr' ? 'EN' : 'TR'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="flex items-center gap-2 w-full text-left text-foreground hover:text-primary transition-colors py-2 font-medium border-t border-border pt-4 mt-2"
            >
              <Globe size={18} />
              <span>{language === 'tr' ? 'English' : 'Türkçe'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
