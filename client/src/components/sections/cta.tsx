import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Rocket, Handshake, Bell } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function CTA() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/newsletter", { email }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing! We'll keep you updated on our launch.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <section id="cta" className="py-20 hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Future?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join the Elevate360 movement by Virtù Nera and start your personalized growth journey today. Connect with learners, mentors, and leaders who are already transforming their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all"
              onClick={() => window.open('https://forms.gle/M3P62bvmxqno7c436', '_blank')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Now
            </Button>
          </div>
          <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-white opacity-90 mb-6">
              Be the first to know about our launch, exclusive features, and early access opportunities.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <Button 
                type="submit" 
                disabled={newsletterMutation.isPending}
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
              >
                <Bell className="mr-2 h-5 w-5" />
                {newsletterMutation.isPending ? "Subscribing..." : "Notify Me"}
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
