const PhoneFrame = () => {
  return (
    <div className="relative mx-auto w-32 h-64">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[24px] border-2 border-glass-border bg-background/50 backdrop-blur-sm overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-background rounded-full" />
        
        {/* Screen content */}
        <div className="absolute inset-3 top-8 rounded-xl bg-gradient-to-b from-violet/20 to-cyan/20 overflow-hidden">
          {/* Mock UI elements */}
          <div className="p-3 space-y-2">
            <div className="h-2 w-16 bg-foreground/20 rounded-full" />
            <div className="h-1.5 w-12 bg-foreground/10 rounded-full" />
          </div>
          
          {/* Card */}
          <div className="mx-2 p-2 rounded-lg bg-glass border border-glass-border">
            <div className="h-8 w-full rounded bg-gradient-to-r from-violet/30 to-cyan/30" />
            <div className="mt-2 space-y-1">
              <div className="h-1.5 w-full bg-foreground/10 rounded-full" />
              <div className="h-1.5 w-3/4 bg-foreground/10 rounded-full" />
            </div>
          </div>
          
          {/* Bottom nav */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-around">
            <div className="w-4 h-4 rounded-full bg-violet/40" />
            <div className="w-4 h-4 rounded-full bg-cyan/40" />
            <div className="w-4 h-4 rounded-full bg-foreground/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
