import { Heart } from "lucide-react";
import logo from "@/assets/boc-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="BOC TV Logo" className="h-36 w-auto" />
            <p className="text-sm text-muted-foreground">
              One Body, United in Christ. Spreading the Gospel through quality Christian television.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Live TV", "Programmes", "Partnership"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
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
              <li>Nairobi, Kenya</li>
              <li>+254 (0) 700 000 000</li>
              <li>info@boctv.co.ke</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} BOC TV. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for the Body of Christ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
