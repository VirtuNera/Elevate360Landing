import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Elevate360?",
      answer: "Elevate360 is a comprehensive professional development ecosystem that combines learning, networking, credentialing, and career growth in one unified platform. Think of it as LinkedIn meets Duolingo meets a Digital Skills Passport — powered by AI and designed around human potential."
    },
    {
      question: "Who is Elevate360 for?",
      answer: "Elevate360 is designed for five key user groups: Learners & Professionals seeking growth, Trainers & Educators delivering content, Mentors & Peers providing guidance, Employers & Institutions validating skills, and Community Leaders identifying trends. Whether you're a student, professional, educator, or organization, there's a place for you in our ecosystem."
    },
    {
      question: "How does the Growth & Trust Cycle work?",
      answer: "The Growth & Trust Cycle is our core 5-step process: 🔍 Discover (find opportunities), 🎯 Connect (build relationships), ✅ Validate (earn credentials), 🌟 Showcase (display achievements), and 🚀 Grow (unlock new opportunities). This cycle continuously repeats, creating a momentum of growth and recognition that accelerates your professional development."
    },
    {
      question: "What makes Elevate360 unique?",
      answer: "Elevate360 stands out through its user-centric design, AI-powered personalization, modular architecture, and comprehensive ecosystem approach. Unlike traditional platforms that focus on single functions, we integrate learning, networking, credentialing, and career advancement into one seamless experience. Your credentials are owned by you, your growth is tracked holistically, and your professional identity evolves dynamically."
    },
    {
      question: "When will Elevate360 be available?",
      answer: "We're currently in development and planning a phased rollout throughout 2025. Early adopters and beta testers will get first access to our platform. Register now to be notified when we launch and to secure your spot in our growing community of forward-thinking professionals."
    }
  ];

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Elevate360 and how it can transform your professional journey.
          </p>
        </AnimatedSection>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-lg transition-all">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeItem === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeItem === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
