import Navigation from "@/components/Navigation";
import LiveTV from "@/components/LiveTV";
import Footer from "@/components/Footer";

const LiveTVPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <LiveTV />
      </main>
      <Footer />
    </div>
  );
};

export default LiveTVPage;
