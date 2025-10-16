import missionImg from "@/assets/mission.jpg";
import visionImg from "@/assets/vision.jpg";
import globalReachImg from "@/assets/global-reach.jpg";
import communityImg from "@/assets/community.jpg";

const values = [
  {
    image: missionImg,
    title: "Our Mission",
    description: "To impact the Body of Christ for growth and development in unity, doctrine, knowledge of scriptures and a firm relationship with Jesus Christ who is our Lord and Savior."
  },
  {
    image: visionImg,
    title: "Our Vision",
    description: "To provide Christ-centered programming that edifies and equips the entire Body of Christ to be functional and effective in these last days of Revival and the End Times."
  },
  {
    image: globalReachImg,
    title: "Global Reach",
    description: "Broadcasting in English from Nairobi, Kenya with affiliations and partnerships from major Christian entities drawn from around the globe."
  },
  {
    image: communityImg,
    title: "Our Community",
    description: "An independent Christian broadcasting station dedicated to preparing the Bride for Christ through the Meat of the Word of God."
  }
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
            About <span className="text-secondary">BOC TV</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            The Body of Christ TV is a global Christian Broadcasting television station whose aim is to impact the Body of Christ for growth and development in unity, doctrine, knowledge of scriptures and a firm relationship with Jesus Christ. Broadcasting from Nairobi, Kenya with partnerships from major Christian entities around the globe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            return (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mt-12 sm:mt-16 animate-fade-in px-4" style={{ animationDelay: '400ms' }}>
          {[
            { value: "24/7", label: "Broadcasting" },
            { value: "15+", label: "Programmes" },
            { value: "1M+", label: "Viewers" },
            { value: "100%", label: "Faith-Based" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
