import { Mail, Phone, MapPin, Clock } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Appointment", href: "#appointment" },
  ];

  const services = [
    "Home Visit Physiotherapy",
    "Neck & Back Pain Treatment",
    "Sports Injury Recovery",
    "Post-Surgery Rehabilitation",
    "Home Exercise Programs",
    "Geriatric Physiotherapy",
  ];

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <img src={clinicLogo} alt="Physio Clinic" className="h-16 w-auto" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:ruchikasphysio@gmail.com" className="hover:text-accent transition-colors">
                  ruchikasphysio@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href="tel:+918600970446"
                  className="hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("tel:+918600970446");
                  }}
                >
                  +91 86009 70446
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p>Mumbai, Maharashtra</p>
                  <p>Home Visit Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-accent transition-colors text-background/80 hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Visit Hours</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-medium">Home Visit Timings</span>
              </div>
              <div className="space-y-2 text-background/80">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                <p className="text-sm text-accent font-medium">
                  Book your home visit through WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Dr. Ruchika's Physiotherapy & Rehabilitation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
