import { Button } from "@/components/ui/button";
import doctorOffice from "@/assets/doctor-office.jpg";

const ExpertsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Meet <span className="text-primary">Dr. Ruchika</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Dr. Ruchika brings years of experience and specialized training in physiotherapy, 
                providing high-quality care directly at your doorstep. Her expertise and dedication 
                ensure you receive the best possible treatment in the comfort of your home.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Professional Excellence
                </h3>
                <p className="text-muted-foreground text-sm">
                  Dr. Ruchika is a licensed physiotherapist who continuously updates her 
                  knowledge with the latest treatment methodologies and techniques.
                </p>
              </div>

              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Home Visit Specialist
                </h3>
                <p className="text-muted-foreground text-sm">
                  Specializing in home physiotherapy, Dr. Ruchika brings personalized 
                  treatment plans directly to your home, ensuring comfort and convenience.
                </p>
              </div>

              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Evidence-Based Treatment
                </h3>
                <p className="text-muted-foreground text-sm">
                  All treatments are based on the latest scientific research and proven 
                  methodologies, adapted for effective home-based care.
                </p>
              </div>
            </div>

            <Button variant="accent" size="lg">
              Meet Our Team
            </Button>
          </div>

          {/* Right - Doctor Image */}
          <div className="relative">
            <img
              src={doctorOffice}
              alt="Professional doctor in office"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/95 backdrop-blur-sm p-6 rounded-2xl border border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-xs text-muted-foreground">Patients Treated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;