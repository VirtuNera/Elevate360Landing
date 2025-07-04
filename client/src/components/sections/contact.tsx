import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Mail, Linkedin, Send } from "lucide-react";
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
      value: ["fadhli.abdulmateen@gmail.com", "virtunera.nads@gmail.com"],
      color: "bg-blue-600",
      isEmail: true
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Virtù Nera Company",
      link: "https://www.linkedin.com/company/virt%C3%B9-nera/",
      color: "bg-blue-700",
      isLink: true
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
                <div key={info.title} className="flex items-start">
                  <div className={`${info.color} rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">{info.title}</p>
                    {info.isEmail ? (
                      <div className="space-y-1">
                        {(info.value as string[]).map((email, index) => (
                          <p key={index} className="text-white opacity-90 text-sm">{email}</p>
                        ))}
                      </div>
                    ) : info.isLink ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline"
                      >
                        {info.value as string}
                      </a>
                    ) : (
                      <p className="text-white opacity-90">{info.value as string}</p>
                    )}
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
