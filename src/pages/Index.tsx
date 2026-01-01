import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DeploymentLog from "@/components/DeploymentLog";
import TheStack from "@/components/TheStack";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <DeploymentLog />
        <TheStack />
      </main>
      <Toaster />
    </div>
  );
};

export default Index;
