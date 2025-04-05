
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-beauty-400 font-heading text-2xl font-semibold">BeautySpot</span>
            </Link>
            <p className="text-neutral-300 text-sm mt-4">
              Premier beauty and wellness destination offering a range of services to enhance your natural beauty and promote relaxation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-beauty-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-beauty-300 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/specialists" className="text-neutral-300 hover:text-beauty-300 text-sm transition-colors">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-neutral-300 hover:text-beauty-300 text-sm transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-neutral-300 hover:text-beauty-300 text-sm transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-beauty-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 text-beauty-400" />
                <span className="text-neutral-300 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-beauty-400" />
                <span className="text-neutral-300 text-sm">contact@beautyspot.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-beauty-400" />
                <span className="text-neutral-300 text-sm">
                  123 Beauty Lane,<br />Downtown, City 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-beauty-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-beauty-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-beauty-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-beauty-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-6 text-center text-neutral-400 text-xs">
          <p>&copy; {new Date().getFullYear()} BeautySpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
