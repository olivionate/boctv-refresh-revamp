import { Play, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="BOC TV Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-white text-xs sm:text-sm font-medium">
              <Radio className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              <span>NOW LIVE</span>
            </div>
            
            <div className="inline-block bg-gradient-to-br from-muted to-muted/50 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8 rounded-2xl shadow-strong mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-center">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  The Body of Christ TV
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              Experience transformative Christian television broadcasting in Kenya. 
              Join us for inspiring worship, powerful teachings, and life-changing testimonies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                asChild
              >
                <a href="#live">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Live TV
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 w-full sm:w-auto"
              >
                Explore Programmes
              </Button>
            </div>
          </div>

          {/* Live Stream Preview */}
          <div className="relative animate-fade-in delay-200">
            <a 
              href="#live"
              className="block"
            >
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden shadow-strong relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                    <p className="text-white font-medium text-base sm:text-lg">Live TV</p>
                  </div>
                </div>
              
                {/* Live indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  LIVE
                </div>
              </div>
            </a>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
