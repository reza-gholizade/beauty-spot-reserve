
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/mock";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900">
            Visit Our Locations
          </h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            Find a BeautySpot salon near you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 hover:border-beauty-200 transition-all duration-300"
            >
              <div className="h-48 bg-neutral-200 relative">
                {/* Replace with actual location image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-neutral-400">Location Image</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-3">
                  {location.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-beauty-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-beauty-600 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-beauty-600 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{location.email}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-beauty-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      {location.openingHours.map((hours, index) => (
                        <div key={index} className="text-neutral-700">
                          <span className="font-medium">{hours.day}:</span> {hours.hours}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="border-beauty-600 text-beauty-600 hover:bg-beauty-50">
                    Get Directions
                  </Button>
                  
                  <Button className="bg-beauty-600 hover:bg-beauty-700 text-white" asChild>
                    <Link to="/book">Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
