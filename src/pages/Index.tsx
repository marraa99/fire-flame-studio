import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsMarquee from "@/components/StatsMarquee";
import AlertBanner from "@/components/AlertBanner";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background scanlines">
      <Header />
      <HeroSection />
      <StatsMarquee />
      <AlertBanner />
      <FeaturesSection />
      <Footer />
    </main>
  );
};

export default Index;