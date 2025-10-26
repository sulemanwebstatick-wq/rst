import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceSkincare from "@/assets/service-skincare.jpg";
import heroImage from "@/assets/hero-salon.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Makeup", "Hair Care", "Skin Care", "Bridal"];

  const galleryImages = [
    { id: 1, src: serviceMakeup, category: "Makeup", title: "Bridal Makeup Perfection" },
    { id: 2, src: serviceHair, category: "Hair Care", title: "Professional Hair Styling" },
    { id: 3, src: serviceSkincare, category: "Skin Care", title: "Luxury Facial Treatment" },
    { id: 4, src: heroImage, category: "Bridal", title: "Complete Bridal Look" },
    { id: 5, src: serviceMakeup, category: "Makeup", title: "HD Makeup Artistry" },
    { id: 6, src: serviceHair, category: "Hair Care", title: "Color Transformation" },
    { id: 7, src: serviceSkincare, category: "Skin Care", title: "Glowing Skin Results" },
    { id: 8, src: heroImage, category: "Bridal", title: "Wedding Day Beauty" },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of stunning transformations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-scale-in">
          <Filter className="w-5 h-5 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="overflow-hidden group cursor-pointer hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-primary text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            See more of our work on Instagram
          </p>
          <a
            href="https://www.instagram.com/styledbygoodlooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              Follow @styledbygoodlooks
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
