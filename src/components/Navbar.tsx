import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ContactDialog from "./ContactDialog";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Methodology", href: "#methodology" },
    { label: "Sovereign Work", href: "#work" },
    { label: "The Stack", href: "#stack" },
  ];

  const handleMobileNavClick = (href: string) => {
    setMobileOpen(false);
    // Small delay to let sheet close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-lg border border-border/50 bg-card/50 backdrop-blur-md px-6 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-foreground font-bold text-lg tracking-tight">
              Scote Project
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <ContactDialog>
              <Button variant="default" size="sm">
                Initiate Architecture
              </Button>
            </ContactDialog>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card border-border">
              <div className="flex flex-col gap-6 mt-8">
                <span className="text-foreground font-bold text-lg tracking-tight">
                  Scote Project
                </span>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleMobileNavClick(link.href)}
                      className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium py-2"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
                <ContactDialog>
                  <Button variant="default" size="lg" className="w-full mt-4">
                    Initiate Architecture
                  </Button>
                </ContactDialog>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
