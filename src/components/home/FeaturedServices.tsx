
import { useRef } from "react";
import { services } from "@/data/mock";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -container.offsetWidth / 2 : container.offsetWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900">
              Our Featured Services
            </h2>
            <p className="text-neutral-600 mt-2">
              Discover our most popular treatments and services
            </p>
          </div>
          <div className="hidden md:flex space-x-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6 snap-x"
          >
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="min-w-[280px] sm:min-w-[340px] rounded-xl border border-neutral-200 hover:border-beauty-200 transition-all duration-300 snap-start"
              >
                <div className="h-48 bg-neutral-200 rounded-t-xl relative overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-neutral-400">Service Image</div>
                  </div>
                </div>
                
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-beauty-600 bg-beauty-50 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration} min
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-2">{service.name}</h3>
                  <p className="text-neutral-600 text-sm line-clamp-2">{service.description}</p>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between">
                  <span className="text-lg font-medium text-neutral-900">${service.price}</span>
                  <Button size="sm" className="bg-beauty-600 hover:bg-beauty-700" asChild>
                    <Link to={`/services/${service.id}`}>Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-beauty-600 text-beauty-600 hover:bg-beauty-50" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
