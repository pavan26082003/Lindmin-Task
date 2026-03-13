import { Link } from "react-router-dom";
import { Anchor, Linkedin, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Anchor className="text-cyan-brand w-8 h-8" />
              <span className="text-white text-xl font-bold font-heading tracking-wide">
                Landmine Soft
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Defusing Complexity. Delivering Innovation. We build scalable software solutions that transform your business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-brand transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-brand transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-brand transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-brand transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Col 2: Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-cyan-brand transition-colors text-sm">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-cyan-brand transition-colors text-sm">Careers</Link></li>
              <li><Link to="#" className="hover:text-cyan-brand transition-colors text-sm">Blog</Link></li>
              <li><Link to="#" className="hover:text-cyan-brand transition-colors text-sm">Press</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-cyan-brand transition-colors text-sm">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-brand transition-colors text-sm">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-cyan-brand transition-colors text-sm">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-cyan-brand transition-colors text-sm">Backend & APIs</Link></li>
              <li><Link to="/services" className="hover:text-cyan-brand transition-colors text-sm">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Contact Us</h4>
            <address className="not-italic text-sm space-y-4">
              <p>123 Tech Park<br />Hyderabad, Telangana 500081</p>
              <p>
                <a href="mailto:hello@landminesoft.com" className="hover:text-cyan-brand transition-colors">
                  hello@landminesoft.com
                </a>
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-cyan-brand transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Landmine Soft. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
