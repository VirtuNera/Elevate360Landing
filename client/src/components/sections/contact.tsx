import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Mail, Globe, Users, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@elevate360.com",
      color: "bg-blue-600"
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.elevate360.com",
      color: "bg-green-600"
    },
    {
      icon: Users,
      title: "Social Media",
      value: "@Elevate360Official",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Ready to learn more about Elevate360 or interested in partnership opportunities? We'd love to hear from you.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection>
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center">
                  <div className={`${info.color} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{info.title}</p>
                    <p className="text-white opacity-90">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Contact Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="organization" className="block text-white font-semibold mb-2">
                  Organization
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your organization (optional)"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="Tell us about your interest in Elevate360..."
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full btn-primary px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-lg transition-all"
              >
                <Send className="mr-2 h-5 w-5" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
