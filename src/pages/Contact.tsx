import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Navigation } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "223, DG-II Rd, opp. Budela Market",
        "Pocket DG 2, Vikaspuri",
        "Delhi, 110018",
      ],
    },
    {
      icon: Phone,
      title: "Contact Numbers",
      details: ["+91 98682 79123"],
      action: { label: "Call Now", href: "tel:+919868279123" },
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Monday - Sunday", "9:00 AM - 9:00 PM"],
    },
    {
      icon: Instagram,
      title: "Follow Us",
      details: ["@styledbygoodlooks"],
      action: {
        label: "Visit Instagram",
        href: "https://www.instagram.com/styledbygoodlooks",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Visit us or reach out via phone or WhatsApp
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-3">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                    {info.action && (
                      <a
                        href={info.action.href}
                        target={info.action.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-block mt-4"
                      >
                        <Button size="sm">{info.action.label}</Button>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map */}
        <div className="mb-16 animate-fade-in-up">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5741557822896!2d77.12234931508!3d28.64538928242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c3e9c3e3e3%3A0x1234567890abcdef!2sVikaspuri%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GOOD LOOKS Salon Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Directions CTA */}
        <div className="text-center animate-fade-in-up">
          <h2 className="font-display text-3xl font-bold mb-4">Visit Our Salon</h2>
          <p className="text-muted-foreground mb-6">
            Located in the heart of Vikaspuri, we're easy to find and always ready to welcome you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/dir//Vikaspuri,+Delhi,+110018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </a>
            <a
              href="https://wa.me/919868279123?text=Hi%20GOOD%20LOOKS%20Salon!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="shadow-lg hover-glow">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
