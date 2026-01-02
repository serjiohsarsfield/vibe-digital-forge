import { ArrowUpRight, Lock } from "lucide-react";

interface Project {
  id: number;
  title: string;
  status: "Production" | "Building" | "Q1 2025 Architecture";
  tag: string;
  description: string;
  isConfidential?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Dashboard",
    status: "Building",
    tag: "Sovereign Data",
    description:
      "Real-time financial analytics platform with complete data residency compliance. Self-hosted PostgreSQL infrastructure.",
  },
  {
    id: 2,
    title: "Autonomous CRM",
    status: "Production",
    tag: "AI-Powered",
    description:
      "Self-hosted lead qualification engine. AI-driven sentiment analysis, automated scoring, and instant persona-driven responses. Complete data sovereignty with zero third-party handoff.",
  },
  {
    id: 3,
    title: "Logistics ERP",
    status: "Production",
    tag: "Private Cloud",
    description:
      "Enterprise resource planning system deployed on client-owned VPS. Zero third-party data access.",
  },
  {
    id: 4,
    title: "Premium Web Design",
    status: "Production",
    tag: "Design Excellence",
    description:
      "Aesthetic excellence combined with technical performance. Bespoke interfaces that elevate brand presence.",
  },
  {
    id: 5,
    title: "Confidential Client",
    status: "Q1 2025 Architecture",
    tag: "Under NDA",
    description:
      "Major enterprise deployment currently in architecture phase. Full details under non-disclosure agreement.",
    isConfidential: true,
  },
];

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className = "" }: ProjectCardProps) => {
  const isUpcoming = project.status === "Q1 2025 Architecture";
  const isBuilding = project.status === "Building";
  const isConfidential = project.isConfidential;

  const getStatusColor = () => {
    if (isUpcoming) return "bg-primary";
    if (isBuilding) return "bg-signal-orange";
    return "bg-signal-green";
  };

  return (
    <div
      className={`
        group relative overflow-hidden rounded-lg
        sovereign-card p-6
        transition-all duration-300 ease-out
        hover:border-primary/50
        ${isUpcoming ? "opacity-80" : ""}
        ${className}
      `}
    >
      {/* Confidential overlay */}
      {isConfidential && (
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
          <Lock className="w-8 h-8 text-muted-foreground mb-2" />
          <span className="kicker">Under NDA</span>
        </div>
      )}

      <div className={isConfidential ? "blur-sm" : ""}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="kicker">{project.tag}</span>
            <h3 className="text-xl font-semibold text-foreground mt-1">
              {project.title}
            </h3>
          </div>
          {!isConfidential && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Status */}
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${getStatusColor()} ${!isUpcoming && !isBuilding ? "animate-pulse-signal" : ""}`}
          />
          <span className={`kicker ${isBuilding ? "text-signal-orange" : ""}`}>
            {project.status.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

const DeploymentLog = () => {
  return (
    <section id="work" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="kicker mb-4 block">Deployment Log</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Sovereign <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Production-grade systems built with complete client ownership.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentLog;
