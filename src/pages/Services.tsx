import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { services, primaryCategories, getServicesByCategory, getSubCategories, getServicesBySubCategory } from "@/data/services";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const category = decodeURIComponent(location.hash.substring(1));
      setSelectedCategory(category);
      setTimeout(() => {
        const element = document.getElementById(category);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const filteredServices = services.filter(
    (service) =>
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.primaryCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoriesToShow = searchTerm
    ? Array.from(new Set(filteredServices.map(s => s.primaryCategory)))
    : primaryCategories;

  return (
    <div className="min-h-screen pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our comprehensive range of premium beauty services
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-8">
          {categoriesToShow.map((category, catIndex) => {
            const subCategories = getSubCategories(category);
            const categoryServices = searchTerm
              ? filteredServices.filter(s => s.primaryCategory === category)
              : getServicesByCategory(category);

            if (categoryServices.length === 0) return null;

            return (
              <Card
                key={category}
                id={category}
                className="overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <CardHeader className="bg-muted/50">
                  <CardTitle className="font-display text-3xl">{category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {subCategories.map((subCategory) => {
                      const subCategoryServices = searchTerm
                        ? filteredServices.filter(
                            s => s.primaryCategory === category && s.subCategory === subCategory
                          )
                        : getServicesBySubCategory(category, subCategory);

                      if (subCategoryServices.length === 0) return null;

                      return (
                        <AccordionItem key={subCategory} value={subCategory}>
                          <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                            {subCategory}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3 pt-4">
                              {subCategoryServices.map((service) => (
                                <div
                                  key={service.serviceID}
                                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg bg-card hover:bg-muted/30 transition-colors group"
                                >
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                      {service.serviceName}
                                    </h4>
                                    <p className="text-primary font-bold text-lg">
                                      ₹{service.price.toLocaleString('en-IN')}
                                      {service.priceModifier && (
                                        <span className="text-sm text-muted-foreground ml-2">
                                          {service.priceModifier}
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                  <Link
                                    to={`/booking?service=${encodeURIComponent(
                                      `${service.subCategory} - ${service.serviceName}`
                                    )}&price=${service.price}`}
                                  >
                                    <Button size="sm" className="w-full sm:w-auto">
                                      Book Now
                                    </Button>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <p className="text-xl text-muted-foreground">
              No services found matching "{searchTerm}"
            </p>
            <Button onClick={() => setSearchTerm("")} className="mt-4">
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
