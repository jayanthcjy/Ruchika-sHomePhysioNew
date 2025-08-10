import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesSection = () => {
  const services = [
    {
      id: "neck-pain",
      name: "Neck Pain",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1753427389/Trigger_tefvxp.png?auto=format&fit=crop&w=800&q=80",
      description: "Expert home treatment for cervical spine issues, including muscle tension and nerve compression. Dr. Rutika provides personalized care in the comfort of your home with evidence-based manual therapy and exercise prescription.",
      features: [
        "At-home cervical spine treatment",
        "Personalized exercise programs",
        "Posture correction guidance",
        "Home ergonomics assessment"
      ]
    },
    {
      id: "back-pain",
      name: "Back Pain",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1753434667/backpain_hwxioc.jpg?auto=format&fit=crop&w=800&q=80",
      description: "Home-based treatment for lower back pain, sciatica, and spinal conditions. Dr. Rutika brings advanced techniques to your doorstep for effective pain relief and functional improvement.",
      features: [
        "Home spinal therapy",
        "Customized exercise plans",
        "Pain management at home",
        "Daily activity modification"
      ]
    },
    {
      id: "sports-injury",
      name: "Sports Injury",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1753410205/sportsInjury_ducujw.png?auto=format&fit=crop&w=800&q=80",
      description: "Home-based rehabilitation for sports injuries. Dr. Rutika brings specialized treatment to athletes and active individuals, helping you recover in your own space.",
      features: [
        "At-home sports rehabilitation",
        "Performance recovery",
        "Injury prevention guidance",
        "Return-to-activity planning"
      ]
    },
    {
      id: "rehabilitation",
      name: "Rehabilitation",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1753411680/Rehab_tqgalh.png?auto=format&fit=crop&w=800&q=80",
      description: "In-home post-surgical and post-injury rehabilitation programs. Dr. Rutika provides comprehensive care at your home, ensuring optimal recovery in a comfortable environment.",
      features: [
        "Home-based recovery",
        "Functional improvement",
        "Movement training",
        "Home environment adaptation"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dr. Rutika brings expert physiotherapy services directly to your home. 
            Experience professional treatment in your comfortable environment with personalized care plans.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="neck-pain" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="text-sm font-medium"
                >
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {service.name} Treatment
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Treatment Includes:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      variant="accent" 
                      size="lg"
                      onClick={() => window.open(`https://wa.me/918600970446?text=Hi Dr. Rutika, I'm interested in ${service.name} treatment at home.`, '_blank')}
                    >
                      Book Home Visit
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={`${service.name} treatment`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;