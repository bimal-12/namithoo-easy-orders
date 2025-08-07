import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }
    
    // For now, we'll just show a success message
    // The actual email integration requires Supabase backend
    toast({
      title: "Feedback Received! 📧",
      description: "Thank you for your feedback. We'll get back to you soon via email.",
      duration: 5000
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="feedback" className="py-20 bg-gradient-to-b from-background to-cream">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-spice-brown mb-4">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-muted-foreground">
            Your thoughts help us improve our pickles and service
          </p>
        </div>
        
        <Card className="shadow-warm border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Share Your Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="feedback-name">Name *</Label>
                  <Input
                    id="feedback-name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="bg-cream"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feedback-email">Email *</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="bg-cream"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedback-subject">Subject</Label>
                <Input
                  id="feedback-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="What's this about?"
                  className="bg-cream"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="feedback-message">Message *</Label>
                <Textarea
                  id="feedback-message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us what you think about our pickles..."
                  className="bg-cream min-h-32"
                />
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📧 We'll respond to:</p>
                <p className="font-medium text-foreground">namithoo@gmail.com</p>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                Send Feedback 📧
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-turmeric/10 to-lime-green/10 rounded-xl border border-border">
          <h3 className="font-semibold text-foreground mb-2">💡 Need Backend Integration?</h3>
          <p className="text-sm text-muted-foreground">
            To automatically send emails to namithoo@gmail.com and create an advanced chatbot, 
            connect your project to Supabase for backend functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;