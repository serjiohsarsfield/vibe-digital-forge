const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet opacity-20 blur-[128px] animate-float animate-pulse-glow"
      />
      <div 
        className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-cyan opacity-15 blur-[128px] animate-float-delayed animate-pulse-glow"
      />
      <div 
        className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-violet opacity-10 blur-[128px] animate-float-slow animate-pulse-glow"
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
