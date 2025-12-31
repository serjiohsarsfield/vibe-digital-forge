import { ArrowUpRight } from "lucide-react";
import RadialProgress from "./RadialProgress";
import MiniChart from "./MiniChart";
import PhoneFrame from "./PhoneFrame";

interface WorkCardProps {
  children: React.ReactNode;
  className?: string;
}

const WorkCard = ({ children, className = "" }: WorkCardProps) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-2xl 
        bg-glass border border-glass-border backdrop-blur-[16px]
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:border-foreground/40
        hover:shadow-[0_0_40px_hsl(263_70%_58%/0.15)]
        ${className}
      `}
    >
      {children}
      {/* Hover arrow */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};

const SelectedWorks = () => {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Selected <span className="gradient-text">Works</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {/* Card 1 - Feature Large (2 cols) */}
          <WorkCard className="md:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Dashboard
              </span>
              <h3 className="text-xl font-semibold mt-2">
                E-Commerce Analytics Dashboard
              </h3>
            </div>
            <div className="h-24 mt-4">
              <MiniChart />
            </div>
          </WorkCard>

          {/* Card 2 - Vertical (2 rows) */}
          <WorkCard className="md:row-span-2 p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Mobile
              </span>
              <h3 className="text-xl font-semibold mt-2">
                Fintech Mobile App
              </h3>
            </div>
            <div className="flex-1 flex items-center justify-center py-4">
              <PhoneFrame />
            </div>
          </WorkCard>

          {/* Card 3 - Small */}
          <WorkCard className="p-6 flex flex-col items-center justify-center text-center">
            <RadialProgress value={99} size={100} strokeWidth={6} />
            <p className="text-sm text-muted-foreground mt-4">
              Performance Score
            </p>
          </WorkCard>

          {/* Card 4 - Small with gradient accent */}
          <WorkCard className="p-6 flex flex-col justify-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Web3
            </span>
            <h3 className="text-lg font-semibold mt-2">
              NFT Marketplace
            </h3>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 text-xs rounded-full bg-violet/20 text-violet border border-violet/30">
                Solidity
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-cyan/20 text-cyan border border-cyan/30">
                React
              </span>
            </div>
          </WorkCard>

          {/* Card 5 - Full Width */}
          <WorkCard className="md:col-span-3 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Enterprise
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                SaaS Marketing Platform
              </h3>
              <p className="text-muted-foreground mt-2 text-sm max-w-md">
                Full-stack marketing automation with AI-powered analytics, email campaigns, and customer segmentation.
              </p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">10M+</div>
                <div className="text-xs text-muted-foreground mt-1">Emails Sent</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">45%</div>
                <div className="text-xs text-muted-foreground mt-1">Conv. Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-xs text-muted-foreground mt-1">Uptime</div>
              </div>
            </div>
          </WorkCard>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
