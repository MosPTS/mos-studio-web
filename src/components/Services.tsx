import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Dumbbell, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Users,
      title: t('services.small.title'),
      description: t('services.small.desc'),
    },
    {
      icon: Target,
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
    },
    {
      icon: Dumbbell,
      title: t('services.equipment.title'),
      description: t('services.equipment.desc'),
    },
    {
      icon: Heart,
      title: t('services.personal.title'),
      description: t('services.personal.desc'),
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-roboto">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-foreground font-roboto">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground font-roboto">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
