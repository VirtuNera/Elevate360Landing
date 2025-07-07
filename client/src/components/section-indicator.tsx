import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'what-is', label: 'What is Elevate360' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => document.getElementById(section.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;
      
      for (const element of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + rect.height;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(element.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40 bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg">
      <div className="space-y-2">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === section.id 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            title={section.label}
          />
        ))}
      </div>
    </div>
  );
}