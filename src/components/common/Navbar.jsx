import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Anchor, Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Anchor className="text-cyan-brand w-8 h-8" />
            <span className="text-white text-xl font-bold font-heading tracking-wide">
              Landmine Soft
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-cyan-brand ${
                    isActive
                      ? "text-cyan-brand border-b-2 border-cyan-brand pb-1"
                      : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact">
              <Button variant="primary" size="sm">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light absolute top-20 left-0 w-full shadow-xl border-t border-white/10">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block text-base font-medium transition-colors hover:text-cyan-brand ${
                    isActive ? "text-cyan-brand font-bold" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact" className="mt-4">
              <Button variant="primary" size="md" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
