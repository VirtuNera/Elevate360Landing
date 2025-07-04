import { GraduationCap, Wallet, Handshake, TrendingUp, UserCircle, Bot, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function KeyFeatures() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: GraduationCap,
      title: "Lifelong Learning Hub",
      description: "Access curated courses, workshops, and resources tailored to your career goals and interests.",
      expandedDescription: "Our Learning Hub goes beyond traditional courses by offering personalized learning paths that adapt to your career stage, industry trends, and skill gaps. Features include micro-learning modules, interactive workshops, peer collaboration spaces, and real-time progress tracking. Example: A marketing professional can access AI marketing courses, attend virtual networking events, and join industry-specific discussion groups.",
      color: "text-blue-600"
    },
    {
      icon: Wallet,
      title: "Credential Wallet",
      description: "Store and showcase your verified achievements, certifications, and skills in one secure location.",
      expandedDescription: "Your digital credential wallet uses blockchain technology to ensure authenticity and portability. It aggregates certifications from multiple sources, validates skills through peer endorsements, and creates shareable achievement portfolios. Example: All your certificates from Coursera, LinkedIn Learning, and company training programs are unified into one verifiable profile that you can share with employers or on professional networks.",
      color: "text-green-600"
    },
    {
      icon: Handshake,
      title: "Mentorship & Networking",
      description: "Connect with industry experts, mentors, and peers to accelerate your professional growth.",
      expandedDescription: "Our AI-powered matching system connects you with mentors based on career goals, industry experience, and personality compatibility. Features include structured mentorship programs, peer networking circles, virtual coffee chats, and group masterminds. Example: A junior developer gets matched with a senior engineer for technical guidance while joining a peer group of other junior developers for mutual support.",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Insight Dashboard",
      description: "Track your progress, identify growth opportunities, and make data-driven career decisions.",
      expandedDescription: "Advanced analytics provide insights into your learning patterns, skill development trends, and career trajectory. The dashboard offers personalized recommendations, market demand analysis, and competitive positioning insights. Example: The system identifies that your data analysis skills are 80% market-ready and suggests specific courses to close the gap, while showing local job market demand for your skill set.",
      color: "text-yellow-600"
    },
    {
      icon: UserCircle,
      title: "Smart Profile",
      description: "Showcase your evolving professional identity with AI-powered profile optimization.",
      expandedDescription: "Your Smart Profile dynamically updates based on your learning activities, achievements, and career goals. It optimizes visibility for relevant opportunities and provides personalized branding suggestions. Example: As you complete AI courses, the profile automatically highlights your emerging AI expertise and suggests networking opportunities with AI professionals in your area.",
      color: "text-blue-600"
    },
    {
      icon: Bot,
      title: "AI Mentor",
      description: "Get personalized guidance and recommendations from your intelligent AI mentor.",
      expandedDescription: "Your AI Mentor learns from your interactions, progress, and goals to provide contextual advice, learning recommendations, and career guidance. It offers 24/7 support, personalized content curation, and proactive opportunity alerts. Example: The AI Mentor notices you're struggling with a specific programming concept and automatically schedules additional practice sessions while connecting you with peers who've mastered that skill.",
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
                
                <AnimatePresence>
                  {expandedFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="text-gray-600 text-sm mb-4 pt-2 border-t border-gray-200">
                        {feature.expandedDescription}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <Button 
                  variant="link" 
                  className="text-blue-600 font-semibold hover:text-green-600 transition-colors p-0"
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  {expandedFeature === index ? "Show Less" : "Show More"} 
                  {expandedFeature === index ? 
                    <ChevronUp className="ml-1 h-4 w-4" /> : 
                    <ChevronDown className="ml-1 h-4 w-4" />
                  }
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
