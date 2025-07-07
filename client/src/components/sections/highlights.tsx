import { Brain, Shield, Puzzle, Gamepad2, Plug, MapPin, BarChart3 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Highlights() {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Smart recommendations tailored to your unique goals and learning style.",
      color: "bg-blue-600"
    },
    {
      icon: Shield,
      title: "User-Owned Credentials",
      description: "Your achievements belong to you, verified and portable across platforms.",
      color: "bg-green-600"
    },
    {
      icon: Puzzle,
      title: "Modular & Scalable",
      description: "Flexible system that grows with your needs and aspirations.",
      color: "bg-purple-600"
    },
    {
      icon: Brain,
      title: "Rooted in Psychology",
      description: "Uses behavioral science to create engaging, habit-forming learning experiences that make professional development naturally rewarding.",
      color: "bg-yellow-600"
    },
    {
      icon: Plug,
      title: "LMS + Job Board Integration",
      description: "Seamlessly connect with existing learning and hiring platforms.",
      color: "bg-blue-600"
    },
    {
      icon: MapPin,
      title: "GPS-Based Discovery",
      description: "Find local opportunities and connect with nearby professionals.",
      color: "bg-green-600"
    },
    {
      icon: BarChart3,
      title: "Enterprise Analytics",
      description: "Comprehensive insights and governance for organizations.",
      color: "bg-purple-600"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Elevate360?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our platform the ultimate choice for professional development and growth.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.slice(0, 4).map((highlight, index) => (
            <AnimatedSection key={highlight.title} delay={index * 0.1}>
              <div className="text-center">
                <div className={`${highlight.color} bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <highlight.icon className={`h-8 w-8 ${highlight.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {highlights.slice(4).map((highlight, index) => (
            <AnimatedSection key={highlight.title} delay={(index + 4) * 0.1}>
              <div className="text-center">
                <div className={`${highlight.color} bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <highlight.icon className={`h-8 w-8 ${highlight.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
