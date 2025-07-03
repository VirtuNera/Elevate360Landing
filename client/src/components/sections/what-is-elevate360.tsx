import { Brain, Users, Puzzle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function WhatIsElevate360() {
  return (
    <section id="what-is" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What is <span className="text-blue-600">Elevate360</span>?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-12">
              Elevate360 is a revolutionary professional development ecosystem that combines the networking power of LinkedIn, the learning engagement of Duolingo, and the credential verification of a Digital Skills Passport — all powered by AI and designed around human potential.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-morphism p-8 rounded-2xl feature-card bg-white">
                <Brain className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
                <p className="text-gray-600">Intelligent algorithms personalize your learning journey and connect you with the right opportunities.</p>
              </div>
              <div className="glass-morphism p-8 rounded-2xl feature-card bg-white">
                <Users className="h-16 w-16 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Human-Centered</h3>
                <p className="text-gray-600">Built around real human needs, fostering genuine connections and meaningful professional growth.</p>
              </div>
              <div className="glass-morphism p-8 rounded-2xl feature-card bg-white">
                <Puzzle className="h-16 w-16 text-purple-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Modular Design</h3>
                <p className="text-gray-600">Flexible system that adapts to your unique career path and professional development needs.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
