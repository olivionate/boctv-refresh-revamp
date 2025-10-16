import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/boc-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Live TV", href: "#live" },
    { name: "Programmes", href: "#programmes" },
    { name: "Partnership", href: "#partnership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <img src={logo} alt="BOC TV Logo" className="h-36 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://7936.bamboo-video.com/channel/ChefTube/The%20Body%20of%20Christ%20TV/61efe2df06304441f316f923" target="_blank" rel="noopener noreferrer">
                <Tv className="mr-2 h-4 w-4" />
                Watch Live
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 w-full"
                asChild
              >
                <a href="https://7936.bamboo-video.com/channel/ChefTube/The%20Body%20of%20Christ%20TV/61efe2df06304441f316f923" target="_blank" rel="noopener noreferrer">
                  <Tv className="mr-2 h-4 w-4" />
                  Watch Live
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
