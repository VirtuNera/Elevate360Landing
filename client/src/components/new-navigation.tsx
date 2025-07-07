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
      <div className="flex justify-center pt-4 pb-2" style={{ background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.9), rgba(30, 41, 59, 0.95))' }}>
        <div className="bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg">
          <img 
            src={logoPath} 
            alt="Virtù Nera" 
            className="h-10 w-auto"
          />
        </div>
      </div>
      
      {/* Navigation bar below logo */}
      <nav className="backdrop-blur-md border-b shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.85), rgba(30, 41, 59, 0.9))', borderColor: 'rgba(255, 255, 255, 0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-12">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-md ${
                    currentSection === item.href.replace('#', '')
                      ? 'text-white shadow-md' 
                      : 'text-white/85 hover:text-white hover:bg-white/15'
                  }`}
                  style={currentSection === item.href.replace('#', '') ? {
                    background: 'linear-gradient(135deg, var(--virtu-accent), var(--virtu-cyan))',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  } : {}}
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