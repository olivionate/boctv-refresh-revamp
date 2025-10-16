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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-secondary">BOC TV</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The Body of Christ Television (BOC TV) is a Christian broadcasting ministry 
            dedicated to sharing the Gospel and bringing believers together in faith
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          {[
            { value: "24/7", label: "Broadcasting" },
            { value: "15+", label: "Programmes" },
            { value: "1M+", label: "Viewers" },
            { value: "100%", label: "Faith-Based" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
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
