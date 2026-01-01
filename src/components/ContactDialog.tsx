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
    infrastructurePreference: "",
    dataSensitivity: "",
    message: "",
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
            infrastructurePreference: formData.infrastructurePreference,
            dataSensitivity: formData.dataSensitivity,
            message: formData.message.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast({
        title: "Protocol Initiated",
        description: "Sovereignty report generation in progress. We'll be in touch within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        infrastructurePreference: "",
        dataSensitivity: "",
        message: "",
      });
      setOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Transmission Failed",
        description: "Unable to initiate protocol. Please try again.",
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
              Corporate Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@enterprise.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-background border-border focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="infrastructure" className="kicker">
              Infrastructure Preference
            </Label>
            <Select
              value={formData.infrastructurePreference}
              onValueChange={(value) =>
                setFormData({ ...formData, infrastructurePreference: value })
              }
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cloud">Private Cloud (VPS)</SelectItem>
                <SelectItem value="on-prem">On-Premises</SelectItem>
                <SelectItem value="hybrid">Hybrid Architecture</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sensitivity" className="kicker">
              Data Sensitivity Level
            </Label>
            <Select
              value={formData.dataSensitivity}
              onValueChange={(value) =>
                setFormData({ ...formData, dataSensitivity: value })
              }
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Business Data</SelectItem>
                <SelectItem value="sensitive">Sensitive / PII</SelectItem>
                <SelectItem value="regulated">Regulated (HIPAA/GDPR)</SelectItem>
                <SelectItem value="classified">Classified / NDA Required</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="kicker">
              Project Overview
            </Label>
            <Textarea
              id="message"
              placeholder="Describe your infrastructure requirements..."
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
                Generating Report...
              </>
            ) : (
              <>
                Generate Sovereignty Report
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
