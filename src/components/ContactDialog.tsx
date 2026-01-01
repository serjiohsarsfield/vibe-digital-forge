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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      const response = await fetch(
        "https://n8n.scot-e.xyz/webhook/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            budget: formData.budget,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast({
        title: "Project Started",
        description: "We've received your request. We'll be in touch within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        budget: "",
      });
      setOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Unable to submit. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button size="lg" className="group">
            Initiate Architecture
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sovereign-card sm:max-w-md border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Project Initialization
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Begin your sovereignty assessment. We'll generate a comprehensive
            infrastructure report.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="kicker">
              Name
            </Label>
            <Input
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-background border-border focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="kicker">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-background border-border focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" className="kicker">
              Budget
            </Label>
            <Select
              value={formData.budget}
              onValueChange={(value) =>
                setFormData({ ...formData, budget: value })
              }
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-2k">Under $2,000</SelectItem>
                <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-plus">$25,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="kicker">
              Project Details
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-background border-border focus:border-primary resize-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Start Project
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
