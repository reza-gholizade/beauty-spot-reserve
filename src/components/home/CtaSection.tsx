
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-beauty-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            Ready to Experience the BeautySpot Difference?
          </h2>
          <p className="text-beauty-100 text-lg max-w-2xl mx-auto">
            Book your appointment today and treat yourself to our premium beauty and wellness services designed to enhance your natural beauty.
          </p>
          <div className="pt-4">
            <Button 
              className="bg-white text-beauty-600 hover:bg-beauty-50 hover:text-beauty-700 px-8 py-6" 
              size="lg"
              asChild
            >
              <Link to="/book">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
