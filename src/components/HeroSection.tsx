import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactDialog from "./ContactDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Kicker */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/50 bg-card/50 backdrop-blur-md mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="kicker">Enterprise Architecture</span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up text-foreground"
          style={{ animationDelay: "0.2s" }}
        >
          We Architect{" "}
          <span className="text-primary">Digital Sovereignty.</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Scote Project's vision is to give infrastructure sovereignty to anyone through governed, intelligent, and resilient applications.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <ContactDialog>
            <Button size="lg" className="group">
              Start Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </ContactDialog>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Deployment Log
          </Button>
        </div>

        {/* Operational Status Trust Signal */}
        <div
          className="flex items-center justify-center gap-3 mt-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="status-online" />
          <span className="kicker">
            Operational Status: 99.9% Uptime (Self-Hosted Monitor)
          </span>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-border/50 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              12+
            </div>
            <div className="kicker mt-1">Sovereign Deployments</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              100%
            </div>
            <div className="kicker mt-1">Client Ownership</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              Zero
            </div>
            <div className="kicker mt-1">Vendor Lock-in</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <span className="kicker">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
