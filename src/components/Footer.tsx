import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">The Light Mission</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Empowering African youth through faith, innovation, and digital excellence. One light at a time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-foreground/70 hover:text-primary transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-foreground/70 hover:text-primary transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Impact Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/get-involved" className="text-foreground/70 hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-foreground/70 hover:text-primary transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-foreground/70 hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Stay Connected</h4>
            <p className="text-sm text-foreground/70 mb-4">
              Subscribe to our newsletter for updates and inspiration.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background border-border"
              />
              <Button variant="hero" size="icon">
                <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} The Light Mission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
