import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceSkincare from "@/assets/service-skincare.jpg";

const Home = () => {
  const featuredServices = [
    {
      title: "Bridal Makeup",
      description: "Make your special day unforgettable with our expert bridal makeup services",
      image: serviceMakeup,
      price: "Starting from ₹8,000",
      link: "/services#Makeup",
    },
    {
      title: "Hair Spa & Styling",
      description: "Rejuvenate your hair with our premium spa treatments and expert styling",
      image: serviceHair,
      price: "Starting from ₹500",
      link: "/services#Hair Care",
    },
    {
      title: "Luxury Facials",
      description: "Experience radiant skin with our range of professional facial treatments",
      image: serviceSkincare,
      price: "Starting from ₹500",
      link: "/services#Skin Care",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The bridal makeup was absolutely stunning! I felt like a princess on my wedding day. Highly recommend!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      text: "Best salon in Vikaspuri! Professional service, great ambiance, and amazing results every time.",
      rating: 5,
    },
    {
      name: "Anjali Singh",
      text: "The hair spa treatment was incredibly relaxing and my hair feels so healthy now. Worth every penny!",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Star, label: "5-Star Rated", value: "1000+" },
    { icon: Sparkles, label: "Services Offered", value: "300+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Clock, label: "Open Daily", value: "9AM-9PM" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Look,
            <br />
            <span className="gradient-text">Elevate Your Beauty</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Premium beauty services in the heart of Vikaspuri. Where expertise meets elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="text-lg px-8 shadow-2xl hover-glow">
                Book Your Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular treatments designed to bring out your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover-scale transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-primary font-semibold">{service.price}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from our valued clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the GOOD LOOKS difference
          </p>
          <Link to="/booking">
            <Button size="lg" className="text-lg px-12 shadow-2xl hover-glow">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
