import Navigation from "@/components/Navigation";
import Programmes from "@/components/Programmes";
import Footer from "@/components/Footer";

const ProgrammesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <Programmes />
      </main>
      <Footer />
    </div>
  );
};

export default ProgrammesPage;
