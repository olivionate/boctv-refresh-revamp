import Navigation from "@/components/Navigation";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

const PartnershipPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <Partnership />
      </main>
      <Footer />
    </div>
  );
};

export default PartnershipPage;
