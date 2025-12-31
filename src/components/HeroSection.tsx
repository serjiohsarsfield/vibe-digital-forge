import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass backdrop-blur-glass mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="text-sm text-muted-foreground">Now accepting Q1 2025 projects</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          We Architect{" "}
          <span className="gradient-text">Digital Sovereignty.</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          The Premier Vibe Coding Agency. High-velocity software assets for the modern web.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button variant="gradient" size="xl" className="group">
            Start Your Build
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="hero" size="xl" className="group">
            <Play className="w-4 h-4" />
            View Portfolio
          </Button>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-glass-border opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects Shipped</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">99%</div>
            <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">24h</div>
            <div className="text-sm text-muted-foreground mt-1">Response Time</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
