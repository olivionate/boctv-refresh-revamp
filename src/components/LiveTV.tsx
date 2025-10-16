import { Radio } from "lucide-react";

const LiveTV = () => {
  return (
    <section id="live" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Radio className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            <span>NOW LIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
            Watch Live Stream
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Join us for live worship, teachings, and inspiring testimonies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-strong bg-black" style={{ paddingBottom: 'calc(56.25%)', position: 'relative', width: '100%' }}>
            <iframe
              style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: 0, height: '100%', width: '100%' }}
              src="https://cdn.bamboo-video.com/api/embed?id=61efe2df06304441f316f923&uiconf_id=11688057&type=channel&iid=61efe2ac0630444d570f7b23&newPlayer=true"
              width="100%"
              height="100%"
              allow="autoplay *; fullscreen *; encrypted-media *"
              allowFullScreen
              frameBorder="0"
              title="BOC TV Live Stream"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTV;
