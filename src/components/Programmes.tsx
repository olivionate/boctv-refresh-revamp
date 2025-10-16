import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ministersBrookImg from "@/assets/programmes/ministers-brook.jpg";
import monumentalCrossroadsImg from "@/assets/programmes/monumental-crossroads.jpg";
import bibleExpositionImg from "@/assets/programmes/bible-exposition.jpg";
import heartOfWorshipImg from "@/assets/programmes/heart-of-worship.jpg";
import sacrificeOfPraiseImg from "@/assets/programmes/sacrifice-of-praise.jpg";
import breadOfLifeImg from "@/assets/programmes/bread-of-life.jpg";
import testimonyRoomImg from "@/assets/programmes/testimony-room.jpg";
import greatRevivalImg from "@/assets/programmes/great-revival.jpg";
import impactDocumentaryImg from "@/assets/programmes/impact-documentary.jpg";

const programmes = [
  {
    title: "The Minister's Brook",
    description: "A flagship programme to grow, develop, sharpen and nourish the Ministers of the Gospel, preparing the Bride for Christ",
    image: ministersBrookImg,
    time: "Saturday 6:00 PM"
  },
  {
    title: "Monumental Crossroads",
    description: "In-depth analysis of challenging doctrinal differences and controversies affecting the Church worldwide",
    image: monumentalCrossroadsImg,
    time: "Wednesday 8:30 PM"
  },
  {
    title: "Bible Exposition",
    description: "Eye-opening Bible study sessions from churches across the globe, thoroughly vetted for scriptural accuracy",
    image: bibleExpositionImg,
    time: "Saturday 3:00 PM"
  },
  {
    title: "The Heart of Worship",
    description: "Intimate worship sessions and prayer moments to deepen your relationship with God",
    image: heartOfWorshipImg,
    time: "Friday 7:00 PM"
  },
  {
    title: "The Sacrifice of Praise",
    description: "Powerful praise songs from music ministers worldwide - put on your dancing shoes and dance for the Lord",
    image: sacrificeOfPraiseImg,
    time: "Sunday 5:00 PM"
  },
  {
    title: "The Bread of Life",
    description: "Rhema Word from ministers of the Gospel, thoroughly vetted to ensure it edifies the church",
    image: breadOfLifeImg,
    time: "Tuesday 6:00 PM"
  },
  {
    title: "The Testimony Room",
    description: "Witness how brethren triumph through afflictions by God's grace - inspiring testimonies of victory",
    image: testimonyRoomImg,
    time: "Thursday 9:00 PM"
  },
  {
    title: "The Great Revival",
    description: "Detailed encounters of the End-Time Revival stirring among nations, from old days to now",
    image: greatRevivalImg,
    time: "Wednesday 7:30 PM"
  },
  {
    title: "Impact Documentary",
    description: "Historical and educational documentaries about the church and the Body of Christ at large",
    image: impactDocumentaryImg,
    time: "Monday 8:00 PM"
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
            Our programming is dynamic and Christ-centered, drawing from the Word of God. We feature Christian documentaries, testimonies, and inspiring stories of conquest through our Lord Jesus Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((programme, index) => {
            return (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={programme.image} 
                    alt={programme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
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
