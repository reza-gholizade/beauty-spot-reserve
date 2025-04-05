
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Signature Facial",
    testimonial: "The signature facial was absolutely incredible! My skin has never looked so radiant. The staff was professional and made me feel comfortable throughout the entire experience.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Downtown Location",
  },
  {
    id: 2,
    name: "Michael Lewis",
    service: "Deep Tissue Massage",
    testimonial: "My chronic back pain has improved significantly since I started regular deep tissue massages here. The therapists are knowledgeable and adapt the pressure perfectly to my needs.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Westside Location",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    service: "Hair Styling & Color",
    testimonial: "I've finally found my go-to salon! The stylist listened carefully to what I wanted and offered expert advice. The color is perfect and the cut frames my face beautifully.",
    rating: 4,
    image: "/placeholder.svg",
    location: "Downtown Location",
  },
  {
    id: 4,
    name: "David Chen",
    service: "Luxury Manicure",
    testimonial: "The attention to detail in their manicure service is unparalleled. My hands not only look great but feel refreshed and moisturized even days later.",
    rating: 5,
    image: "/placeholder.svg",
    location: "Westside Location",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-beauty-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900">
            What Our Clients Say
          </h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            Real experiences from our valued clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`w-full flex-shrink-0 transition-all duration-500 transform ${
                  index === activeIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 absolute"
                }`}
              >
                <Card className="border-none bg-white shadow-lg rounded-xl p-2">
                  <CardContent className="pt-6 px-6">
                    <div className="flex items-center text-cream-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'fill-cream-500' : 'text-neutral-200'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-neutral-700 text-lg italic">"{testimonial.testimonial}"</p>
                  </CardContent>
                  <CardFooter className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex-shrink-0">
                      {/* Replace with actual image */}
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
                      <div className="text-sm text-neutral-500">
                        {testimonial.service} • {testimonial.location}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-beauty-600' : 'bg-neutral-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
