import { useEffect, useRef } from "react";
import { Radio } from "lucide-react";
import liveTvBg from "@/assets/live-tv-background.jpg";

const LiveTV = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = playerRef.current;
    if (!container) return;
    container.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://cdn.bamboo-cloud.com/api/embed2?id=61efe2df06304441f316f923&uiconf_id=11709188&type=channel&newPlayer=true&iid=61efe2ac0630444d570f7b23";
    script.async = false;
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, []);
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
          <div className="rounded-2xl overflow-hidden shadow-strong relative" style={{ paddingBottom: 'calc(56.25%)', position: 'relative', width: '100%' }}>
            {/* Background Image */}
            <img 
              src={liveTvBg} 
              alt="Live TV Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Bamboo player container (script embed) */}
            <div
              ref={playerRef}
              className="absolute inset-0 w-full h-full z-10 [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:absolute [&_iframe]:inset-0"
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            If the player does not start, the channel may be off air.{" "}
            <a
              href="https://www.youtube.com/@thebodyofchristTVke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline"
            >
              Watch our latest programmes on YouTube
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
};

export default LiveTV;
