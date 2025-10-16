import { Radio } from "lucide-react";

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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us for live worship, teachings, and inspiring testimonies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-strong bg-black">
            <iframe
              src="https://7936.bamboo-video.com/channel/ChefTube/The%20Body%20of%20Christ%20TV/61efe2df06304441f316f923"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="BOC TV Live Stream"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTV;
