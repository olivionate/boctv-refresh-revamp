import { Heart, Users, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const partnershipTiers = [
  {
    icon: Heart,
    title: "Prayer Partner",
    description: "Join our prayer team and support BOC TV through intercession",
    benefits: ["Weekly prayer updates", "Special prayer meetings", "Ministry updates"]
  },
  {
    icon: Users,
    title: "Ministry Partner",
    description: "Support our mission with regular monthly contributions",
    benefits: ["Exclusive content access", "Partner events", "Impact reports"]
  },
  {
    icon: Zap,
    title: "Impact Partner",
    description: "Make a significant impact through major support",
    benefits: ["Leadership meetings", "Strategic planning input", "VIP events"]
  }
];

const Partnership = () => {
  return (
    <section id="partnership" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>PARTNER WITH US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
            Join Our <span className="text-primary">Kingdom Mission</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Your partnership enables us to reach more souls with the Gospel and produce 
            life-transforming Christian content across Kenya and East Africa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partnershipTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {tier.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            Make a One-Time Gift
          </h3>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/90 px-4">
            Every contribution, no matter the size, makes a difference in spreading the Gospel
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 w-full sm:w-auto">
              Give Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 sm:px-8 w-full sm:w-auto">
              Learn About Impact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
