import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To spread the Gospel of Jesus Christ through quality Christian programming that inspires, educates, and transforms lives across Kenya and beyond."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading Christian television network in East Africa, bringing unity to the Body of Christ and impacting millions with the message of hope."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Faith, Excellence, Integrity, Unity, and Compassion guide everything we do as we serve the Body of Christ with passion and dedication."
  },
  {
    icon: Users,
    title: "Our Community",
    description: "Building a vibrant community of believers united in Christ, supporting one another, and working together to advance God's kingdom on earth."
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
            The Body of Christ Television (BOC TV) is a Christian broadcasting ministry 
            dedicated to sharing the Gospel and bringing believers together in faith
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
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
