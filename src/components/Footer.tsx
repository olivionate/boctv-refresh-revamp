import { Heart } from "lucide-react";
import logo from "@/assets/boc-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <img src={logo} alt="BOC TV Logo" className="h-30 sm:h-40 md:h-45 w-auto mx-auto sm:mx-0" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              The Body of Christ TV: One Body, United in Christ. Spreading the Gospel through quality Christian television.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/live-tv" className="text-muted-foreground hover:text-primary transition-colors">
                  Live TV
                </a>
              </li>
              <li>
                <a href="#programmes" className="text-muted-foreground hover:text-primary transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#partnership" className="text-muted-foreground hover:text-primary transition-colors">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-display font-bold mb-4">Popular Shows</h4>
            <ul className="space-y-2 text-sm">
              {["Impact Documentary", "The Great Revival", "The Testimony Room", "Bible Exposition"].map((show) => (
                <li key={show}>
                  <a href="#programmes" className="text-muted-foreground hover:text-primary transition-colors">
                    {show}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>P.O Box 2097 – 00621</li>
              <li>Village Market – Nairobi, Kenya</li>
              <li>+254 736 325 788 / +254 721 658 788</li>
              <li>info@boctv.co.ke</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>
            © {currentYear} BOC TV. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" /> for the Body of Christ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
