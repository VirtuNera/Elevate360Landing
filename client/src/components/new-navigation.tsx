import { useState, useEffect } from 'react';
import logoPath from "@assets/logo_1751556609804.png";

export function NewNavigation() {
  const [currentSection, setCurrentSection] = useState('home');

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#what-is", label: "What is Elevate360" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + rect.height;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section.id);
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
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Logo centered at top */}
      <div className="flex justify-center pt-4 pb-2">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-3">
          <img 
            src={logoPath} 
            alt="Virtù Nera" 
            className="h-10 w-auto"
          />
        </div>
      </div>
      
      {/* Navigation bar below logo */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-12">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap px-3 py-2 rounded-md ${
                    currentSection === item.href.replace('#', '')
                      ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                      : 'text-white/90 hover:text-cyan-300 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}