import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Rocket } from "lucide-react";

export function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector("#what-is");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Elevate<span className="text-yellow-400">360</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 font-light">
            The Future of Professional Growth
          </p>
          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto font-light">
            Unlock your potential with a modular, AI-powered professional development ecosystem that transforms how you learn, grow, and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all">
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
            <Button variant="outline" className="glass-morphism px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all border-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
