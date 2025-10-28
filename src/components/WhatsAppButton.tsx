import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = "905323011997"; // +90 532 301 1997
  const message = encodeURIComponent("Merhaba, bilgi almak istiyorum.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-border animate-fade-in">
        <p className="text-sm font-medium text-foreground whitespace-nowrap">
          {t("whatsapp.label")}
        </p>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce"
      >
        <Button
          size="lg"
          className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
