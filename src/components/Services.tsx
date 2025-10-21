import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Dumbbell, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Small Group Sessions",
      description: "Maximum 4-person groups ensure personalized attention and form correction for every exercise.",
    },
    {
      icon: Target,
      title: "Custom Programs",
      description: "Programs tailored to your individual goals, covering strength, cardio, flexibility, and mobility training.",
    },
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      description: "State-of-the-art equipment in a clean, spacious studio environment designed for optimal training.",
    },
    {
      icon: Heart,
      title: "One-on-One Service",
      description: "Personal approach ensuring optimal results, safety, and continuous support throughout your fitness journey.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-roboto">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto">
            Comprehensive fitness solutions designed around your unique needs and goals
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
