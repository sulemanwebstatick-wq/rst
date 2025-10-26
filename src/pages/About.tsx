import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Beauty",
      description: "We believe beauty is an art form, and every client deserves to feel confident and radiant.",
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our team consists of certified professionals with years of experience in the beauty industry.",
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your satisfaction is our priority. We listen, understand, and deliver personalized services.",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "We use only the finest products and latest techniques to ensure exceptional results.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            About GOOD LOOKS Salon
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where tradition meets innovation in the world of beauty
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-scale-in">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src={heroImage}
              alt="GOOD LOOKS Salon Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Founded with a vision to redefine beauty standards in Vikaspuri, GOOD LOOKS Salon has been
              serving the community for over a decade. What started as a small neighborhood salon has grown
              into one of the most trusted names in beauty and wellness.
            </p>
            <p>
              Our journey has been driven by an unwavering commitment to excellence. We believe that every
              person who walks through our doors deserves to feel special, pampered, and beautiful. Whether
              it's a simple haircut or an elaborate bridal makeover, we approach each service with the same
              level of dedication and artistry.
            </p>
            <p>
              At GOOD LOOKS, we don't just follow trends – we set them. Our team stays updated with the
              latest techniques and products from around the world, ensuring that you receive nothing but
              the best. We take pride in creating a warm, welcoming environment where luxury meets comfort.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold mb-12 text-center animate-fade-in-up">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl font-bold mb-6 text-center">Our Expert Team</h2>
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Our team of certified professionals brings together years of expertise in makeup artistry,
                hair styling, skincare, and beauty therapy. Each member is passionate about their craft and
                committed to making you look and feel your absolute best.
              </p>
              <p className="text-muted-foreground">
                We regularly attend training sessions and workshops to stay ahead of industry trends,
                ensuring that you always receive the most advanced and effective treatments available.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <h2 className="font-display text-3xl font-bold mb-4">
            Experience the GOOD LOOKS Difference
          </h2>
          <p className="text-muted-foreground mb-6">
            Visit us today and discover why we're Vikaspuri's most trusted beauty destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="shadow-lg hover-glow">
                Book an Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
