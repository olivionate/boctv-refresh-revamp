import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import prayerPartnerImg from "@/assets/partnership/prayer-partner.jpg";
import ministryPartnerImg from "@/assets/partnership/ministry-partner.jpg";
import impactPartnerImg from "@/assets/partnership/impact-partner.jpg";

const partnershipTiers = [
  {
    image: prayerPartnerImg,
    title: "Prayer Partner",
    description: "Join our prayer team and support BOC TV through intercession",
    benefits: ["Weekly prayer updates", "Special prayer meetings", "Ministry updates"]
  },
  {
    image: ministryPartnerImg,
    title: "Ministry Partner",
    description: "Support our mission with regular monthly contributions",
    benefits: ["Exclusive content access", "Partner events", "Impact reports"]
  },
  {
    image: impactPartnerImg,
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
            Partner with The Body of Christ TV to reach people wherever they are and on whatever device they are using, touching lives with the Good News of Jesus Christ. Your partnership has the power to change a life! Will you stand with us as a Media Missionary?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partnershipTiers.map((tier, index) => {
            return (
              <Card 
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={tier.image} 
                    alt={tier.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
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
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
            Make a Donation
          </h3>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/90 px-4">
            "A gift opens the way and ushers the giver into the presence of the great." - Proverbs 18:16<br />
            Call us on +254 721 658 788 or email info@boctv.co.ke
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 w-full sm:w-auto" asChild>
              <Link to="/contact">Give Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 sm:px-8 w-full sm:w-auto" asChild>
              <Link to="/contact">Learn About Impact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
