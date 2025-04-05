
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-neutral-100 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="inline-block bg-beauty-100 text-beauty-700 px-4 py-1 rounded-full text-sm font-medium animate-fade-in">
              Premium Beauty & Wellness
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight animate-slide-in">
              Beauty & Relaxation <span className="text-beauty-600">Experience</span>
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl animate-slide-in" style={{ animationDelay: "100ms" }}>
              Indulge in our premium beauty and skincare treatments designed to enhance your natural beauty and provide the ultimate relaxation experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in" style={{ animationDelay: "200ms" }}>
              <Button className="bg-beauty-600 hover:bg-beauty-700 text-white px-8 py-6" size="lg" asChild>
                <Link to="/book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button variant="outline" className="border-beauty-600 text-beauty-600 hover:bg-beauty-50 px-8 py-6" size="lg" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] bg-neutral-200 rounded-xl overflow-hidden animate-fade-in">
            {/* Replace this with an actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-neutral-400 text-lg">Hero Image</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
