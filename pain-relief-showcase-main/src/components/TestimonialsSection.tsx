import { Star, Quote } from "lucide-react";

const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.58-2.08.08-.76z" fill="#FBBC05"/>
    <path d="M12 5.16c1.56 0 2.95.55 4.06 1.66l3.14-3.14C17.45 1.99 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      rating: 5,
      text: "I had chronic neck pain from working long hours at my computer. The physiotherapy treatment here was exceptional. Within just 4 weeks, I was completely pain-free. The staff is professional and truly cares about patient recovery."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Businessman",
      rating: 5,
      text: "After my knee surgery, I was worried about the recovery process. The rehabilitation program here exceeded my expectations. The personalized approach and state-of-the-art equipment made all the difference in my recovery."
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Teacher",
      rating: 5,
      text: "The team here is incredible. They not only treated my back pain but also educated me on prevention techniques. I'm now pain-free and have the knowledge to maintain my health. Highly recommended!"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border relative min-w-[80%] md:min-w-[45%] lg:min-w-[30%] mx-4"
              >
                <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
                <GoogleLogo />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground text-base leading-relaxed">
                  "{testimonial.text}"
                </p>

              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
