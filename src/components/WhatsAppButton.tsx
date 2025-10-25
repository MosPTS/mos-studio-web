import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "905323011997"; // +90 532 301 1997
  const message = encodeURIComponent("Merhaba, bilgi almak istiyorum.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
