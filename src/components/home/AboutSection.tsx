
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] bg-neutral-200 rounded-xl overflow-hidden">
            {/* Replace this with an actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-neutral-400 text-lg">About Image</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block bg-beauty-100 text-beauty-700 px-4 py-1 rounded-full text-sm font-medium">
              About BeautySpot
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
              A Sanctuary for Beauty <span className="text-beauty-600">& Wellness</span>
            </h2>
            <p className="text-neutral-600">
              Founded in 2012, BeautySpot has grown to become the premier destination for beauty and skincare services. Our philosophy centers on enhancing your natural beauty while providing a relaxing and rejuvenating experience.
            </p>
            <p className="text-neutral-600">
              Our expert team of estheticians, massage therapists, hair stylists, and beauty professionals are dedicated to delivering exceptional service and personalized care to each client.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="font-heading text-3xl text-beauty-600 font-semibold">10+</div>
                <div className="text-neutral-600 text-sm">Years of Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="font-heading text-3xl text-beauty-600 font-semibold">15+</div>
                <div className="text-neutral-600 text-sm">Expert Specialists</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="font-heading text-3xl text-beauty-600 font-semibold">30+</div>
                <div className="text-neutral-600 text-sm">Beauty Services</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="font-heading text-3xl text-beauty-600 font-semibold">2</div>
                <div className="text-neutral-600 text-sm">Locations</div>
              </div>
            </div>
            
            <Button className="bg-beauty-600 hover:bg-beauty-700 text-white mt-4" asChild>
              <Link to="/specialists">
                Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
