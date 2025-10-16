import { Play, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>NOW LIVE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              One Body,
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                United in Christ
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Experience transformative Christian television broadcasting in Kenya. 
              Join us for inspiring worship, powerful teachings, and life-changing testimonies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Live Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                Explore Programmes
              </Button>
            </div>
          </div>

          {/* Live Stream Preview */}
          <div className="relative animate-fade-in delay-200">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden shadow-strong relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <p className="text-white font-medium text-lg">Click to Watch Live Stream</p>
                </div>
              </div>
              
              {/* Live indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </div>
            </div>
            
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
