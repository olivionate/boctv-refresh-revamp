import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LiveTV from "@/components/LiveTV";
import About from "@/components/About";
import Programmes from "@/components/Programmes";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
      <Hero />
      <LiveTV />
        <About />
        <Programmes />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
