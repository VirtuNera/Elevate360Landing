import { GraduationCap, Wallet, Handshake, TrendingUp, UserCircle, Bot, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function KeyFeatures() {
  const features = [
    {
      icon: GraduationCap,
      title: "Lifelong Learning Hub",
      description: "Access curated courses, workshops, and resources tailored to your career goals and interests.",
      color: "text-blue-600"
    },
    {
      icon: Wallet,
      title: "Credential Wallet",
      description: "Store and showcase your verified achievements, certifications, and skills in one secure location.",
      color: "text-green-600"
    },
    {
      icon: Handshake,
      title: "Mentorship & Networking",
      description: "Connect with industry experts, mentors, and peers to accelerate your professional growth.",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Insight Dashboard",
      description: "Track your progress, identify growth opportunities, and make data-driven career decisions.",
      color: "text-yellow-600"
    },
    {
      icon: UserCircle,
      title: "Smart Profile",
      description: "Showcase your evolving professional identity with AI-powered profile optimization.",
      color: "text-blue-600"
    },
    {
      icon: Bot,
      title: "AI Mentor",
      description: "Get personalized guidance and recommendations from your intelligent AI mentor.",
      color: "text-green-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Features & Services
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover the powerful modules that make Elevate360 your complete professional development ecosystem.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="rotating-border rounded-full w-16 h-16 flex items-center justify-center mb-6 bg-white">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="link" className="text-blue-600 font-semibold hover:text-green-600 transition-colors p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
