import { Search, Users, Tag, Star, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "🔍 Discover",
      description: "Find personalized opportunities and resources tailored to your goals."
    },
    {
      icon: Users,
      title: "🎯 Connect",
      description: "Build meaningful professional relationships and learning networks."
    },
    {
      icon: Tag,
      title: "✅ Validate",
      description: "Earn verifiable credentials and receive trusted recognition."
    },
    {
      icon: Star,
      title: "🌟 Showcase",
      description: "Display your evolving professional identity and achievements."
    },
    {
      icon: Rocket,
      title: "🚀 Grow",
      description: "Unlock new opportunities and continue your growth journey."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Growth & Trust Cycle
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Experience continuous growth through our scientifically-backed 5-step cycle that transforms how you discover, connect, and succeed.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.1}>
              <div className="cycle-step text-center">
                <div className="glass-morphism rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white opacity-90">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        

      </div>
    </section>
  );
}
