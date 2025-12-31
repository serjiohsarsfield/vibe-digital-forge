import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
