import { Radio, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveTV = () => {
  return (
    <section id="live" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium mb-4">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>NOW LIVE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Watch Live Stream
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join us for live worship, teachings, and inspiring testimonies
          </p>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-8"
            asChild
          >
            <a href="https://7936.bamboo-video.com/channel/ChefTube/The%20Body%20of%20Christ%20TV/61efe2df06304441f316f923">
              <Radio className="mr-3 h-6 w-6 animate-pulse" />
              Watch Live Now
              <ExternalLink className="ml-3 h-5 w-5" />
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center mx-auto animate-pulse">
                <Radio className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold">Live Broadcast</h3>
              <p className="text-muted-foreground max-w-md">
                Click the button above to watch our live stream. Broadcasting 24/7 with inspiring Christian content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTV;
