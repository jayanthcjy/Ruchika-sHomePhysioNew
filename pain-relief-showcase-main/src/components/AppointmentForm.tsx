import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: "",
    problem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Dr. Ruchika,\nI would like to book an appointment:\n\nName: ${formData.name}\nlocation: ${formData.location}\nPreferred Date: ${formData.date}\nProblem: ${formData.problem}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918600970446?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Book Your Appointment Today
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Take the first step towards a pain-free life. Our experts are ready to help you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium text-foreground">
                  location  *
                </label>
                <Input
                  id="location"
                  type="text"
                  placeholder="Type your location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-foreground">
                  Preferred Date *
                </label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="problem" className="text-sm font-medium text-foreground">
                  Problem *
                </label>
                <Input
                  id="problem"
                  type="text"
                  placeholder="Describe your problem briefly"
                  value={formData.problem}
                  onChange={(e) => handleInputChange("problem", e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" variant="accent" size="lg" className="px-12 py-6 text-lg">
                Book via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;