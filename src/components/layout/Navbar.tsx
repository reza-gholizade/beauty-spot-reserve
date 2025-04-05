
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Calendar } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-beauty-600 font-heading text-2xl font-semibold">BeautySpot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-800 hover:text-beauty-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-neutral-800 hover:text-beauty-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/specialists" className="text-neutral-800 hover:text-beauty-600 font-medium transition-colors">
              Specialists
            </Link>
            <Link to="/locations" className="text-neutral-800 hover:text-beauty-600 font-medium transition-colors">
              Locations
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-beauty-600 text-beauty-600 hover:bg-beauty-50" asChild>
              <Link to="/login">
                <User className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button className="bg-beauty-600 hover:bg-beauty-700 text-white" asChild>
              <Link to="/book">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-neutral-600 hover:text-beauty-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-neutral-800 hover:text-beauty-600 py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-neutral-800 hover:text-beauty-600 py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/specialists"
                className="text-neutral-800 hover:text-beauty-600 py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Specialists
              </Link>
              <Link
                to="/locations"
                className="text-neutral-800 hover:text-beauty-600 py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <div className="pt-3 border-t flex flex-col space-y-3">
                <Button variant="outline" className="border-beauty-600 text-beauty-600 hover:bg-beauty-50 w-full" asChild>
                  <Link to="/login">
                    <User className="mr-2 h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button className="bg-beauty-600 hover:bg-beauty-700 text-white w-full" asChild>
                  <Link to="/book">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
