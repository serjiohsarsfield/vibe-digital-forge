import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SelectedWorks from "@/components/SelectedWorks";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <SelectedWorks />
      </main>
      <Toaster />
    </div>
  );
};

export default Index;
