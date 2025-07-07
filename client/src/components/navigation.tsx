import logoPath from "@assets/logo_1751556609804.png";

export function Navigation() {
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logoPath} 
                alt="Virtù Nera" 
                className="h-8 w-auto"
              />
            </div>
          </div>
          
          {/* Always visible navigation labels */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap"
                style={{ color: 'hsl(188, 100%, 85%)' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}