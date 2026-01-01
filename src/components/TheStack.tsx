import { Unlock, Database, Workflow, Server, Bot, Shield } from "lucide-react";

interface StackCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StackCard = ({ icon, title, description }: StackCardProps) => {
  return (
    <div className="sovereign-card p-6 hover:border-primary/50 transition-colors duration-300">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const TheStack = () => {
  const stackItems = [
    {
      icon: <Unlock className="w-6 h-6" />,
      title: "Zero Vendor Lock-in",
      description:
        "We deploy to your private VPS. You hold the keys. No surprise pricing changes, no platform dependencies.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Residency",
      description:
        "Your user data never leaves your chosen jurisdiction. Full compliance with GDPR, CCPA, and regional data sovereignty laws.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Automated Governance",
      description:
        "Self-healing workflows that run 24/7 without manual oversight. Autonomous logic engines that scale with your business.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Self-Hosted Hosting",
      description:
        "Full VPS management with Coolify. Your infrastructure, your servers, your rules. Complete control over deployments.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Agent Integration",
      description:
        "Intelligent automation powered by n8n and LLM integrations. Custom AI workflows that enhance productivity.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "DDoS Protection",
      description:
        "Enterprise-grade edge security via Cloudflare. Global CDN caching and automated threat mitigation.",
    },
  ];

  return (
    <section id="stack" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="kicker mb-4 block">Technical Foundation</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            The Sovereign <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for complete operational
            independence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stackItems.map((item, index) => (
            <StackCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Technology Labels */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal-green" />
              <span className="kicker">Private Cloud Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal-green" />
              <span className="kicker">Sovereign Data Vault (PostgreSQL)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal-green" />
              <span className="kicker">Rapid Component Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-signal-green" />
              <span className="kicker">Autonomous Logic Engine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStack;
