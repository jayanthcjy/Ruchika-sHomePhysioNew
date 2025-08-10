import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import doctorHero from "@/assets/doctor-spine-hero.jpg";

const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.58-2.08.08-.76z" fill="#FBBC05"/>
    <path d="M12 5.16c1.56 0 2.95.55 4.06 1.66l3.14-3.14C17.45 1.99 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Expert Physiotherapy{" "}
                <span className="text-primary">At Your Doorstep</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience professional physiotherapy treatment by Dr. Rutika in the comfort of your home. 
                Personalized care and rehabilitation services that come to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open(`https://wa.me/918600970446`, '_blank')}
              >
                Book Home Visit
              </Button>
              <Button 
                variant="accent-outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>

            {/* Google Review Rating */}
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border inline-block">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <GoogleLogo />
                <p className="text-sm text-muted-foreground">
                  Based on <span className="font-semibold">500+</span> Google Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={doctorHero}
                alt="Professional doctor with spine illustration"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
