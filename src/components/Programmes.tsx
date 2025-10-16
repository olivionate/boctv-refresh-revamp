import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tv, Heart, BookOpen, Music, Users, Cross, Mic, MapPin, Coffee } from "lucide-react";

const programmes = [
  {
    title: "Impact Documentary",
    description: "Real stories of faith transforming lives across Kenya and beyond",
    icon: Tv,
    time: "Monday 8:00 PM"
  },
  {
    title: "The Great Revival",
    description: "Experience powerful revival services and spiritual awakening",
    icon: Cross,
    time: "Wednesday 7:30 PM"
  },
  {
    title: "The Testimony Room",
    description: "Witness miraculous testimonies of God's faithfulness",
    icon: Mic,
    time: "Thursday 9:00 PM"
  },
  {
    title: "The Bread of Life",
    description: "Deep biblical teaching for spiritual nourishment",
    icon: BookOpen,
    time: "Tuesday 6:00 PM"
  },
  {
    title: "The Sacrifice of Praise",
    description: "Contemporary worship and praise celebration",
    icon: Music,
    time: "Sunday 5:00 PM"
  },
  {
    title: "The Heart of Worship",
    description: "Intimate worship sessions and prayer moments",
    icon: Heart,
    time: "Friday 7:00 PM"
  },
  {
    title: "Bible Exposition",
    description: "Verse-by-verse exploration of Scripture",
    icon: BookOpen,
    time: "Saturday 3:00 PM"
  },
  {
    title: "Monumental Crossroads",
    description: "Addressing life's crucial decisions with biblical wisdom",
    icon: MapPin,
    time: "Wednesday 8:30 PM"
  },
  {
    title: "The Minister's Brook",
    description: "Refreshing conversations with ministry leaders",
    icon: Coffee,
    time: "Saturday 6:00 PM"
  }
];

const Programmes = () => {
  return (
    <section id="programmes" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
            Our <span className="text-primary">Programmes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Inspiring content designed to strengthen your faith, encourage your spirit, 
            and connect you with God's purpose for your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((programme, index) => {
            const Icon = programme.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {programme.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary/80">
                    {programme.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {programme.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programmes;
