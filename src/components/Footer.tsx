import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  223, DG-II Rd, opp. Budela Market,<br />
                  Pocket DG 2, Vikaspuri,<br />
                  Delhi, 110018
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919868279123" className="hover:text-primary transition-colors">
                  +91 98682 79123
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Mon - Sun: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/styledbygoodlooks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@styledbygoodlooks</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 GOOD LOOKS Salon. All Rights Reserved.</p>
          <p className="font-display text-primary">made by XERIA AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
