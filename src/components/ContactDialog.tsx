import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";

interface ContactDialogProps {
  children?: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.scot-e.xyz/webhook/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          budget: formData.budget.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast({
        title: "Message Sent",
        description: "We'll be in touch within 24 hours.",
      });

      setFormData({ name: "", email: "", message: "", budget: "" });
      setOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: "Unable to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="gradient" size="xl" className="group">
            Start Your Build
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-glass backdrop-blur-glass border-glass-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Start Your Build</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your project. We'll respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/50 border-glass-border focus:border-cyan"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/50 border-glass-border focus:border-cyan"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget</Label>
            <Input
              id="budget"
              placeholder="e.g. $5,000 - $10,000"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="bg-background/50 border-glass-border focus:border-cyan"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background/50 border-glass-border focus:border-cyan resize-none"
            />
          </div>
          <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Initiating...
              </>
            ) : (
              <>
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
