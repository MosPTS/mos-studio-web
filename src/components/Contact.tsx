import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Hata",
        description: t('contact.form.error'),
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Hata",
        description: "Lütfen geçerli bir e-posta adresi girin.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: t('contact.form.success.title'),
          description: t('contact.form.success.desc'),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Email gönderimi başarısız oldu");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Hata",
        description: "Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan bizimle iletişime geçin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: "Demircikara Mahallesi, 1431 Sokak No:8/1",
      subValue: "Antalya-Muratpaşa, Turkey",
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: "+90 532 301 1997",
      link: "tel:+905323011997",
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: "mospersonalcoaching@gmail.com",
      link: "mailto:mospersonalcoaching@gmail.com",
    },
    {
      icon: Instagram,
      label: t('contact.instagram'),
      value: "@mos.personaltraining",
      link: "https://instagram.com/mos.personaltraining",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-roboto">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-roboto">
              {t('contact.title')}
            </h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1 font-roboto">
                    {info.label}
                  </h4>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-muted-foreground hover:text-primary transition-colors font-roboto"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <>
                      <p className="text-muted-foreground font-roboto">{info.value}</p>
                      {info.subValue && (
                        <p className="text-muted-foreground font-roboto">{info.subValue}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 font-roboto">
              {t('contact.form.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder={t('contact.form.name') + ' *'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground font-roboto"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.form.email') + ' *'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground font-roboto"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t('contact.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground font-roboto"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.form.message') + ' *'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input/50 border-border text-foreground placeholder:text-muted-foreground min-h-[150px] font-roboto"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "..." : t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
