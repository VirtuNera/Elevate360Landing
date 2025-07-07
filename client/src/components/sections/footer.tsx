import logoPath from "@assets/logo_1751556609804.png";

export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img 
            src={logoPath} 
            alt="Virtù Nera" 
            className="h-12 w-auto mx-auto mb-6"
          />
          <p className="text-white opacity-90 mb-6 text-lg">
            Strengthening Your Path To Success With Unwavering Excellence.
          </p>
          <div className="text-white opacity-70 text-sm space-y-2">
            <p>Contact us:</p>
            <p>
              <a href="mailto:fadhli.abdulmateen@gmail.com" className="hover:text-cyan-300 transition-colors">
                fadhli.abdulmateen@gmail.com
              </a>
              {" | "}
              <a href="mailto:virtunera.nads@gmail.com" className="hover:text-cyan-300 transition-colors">
                virtunera.nads@gmail.com
              </a>
            </p>
            <p>
              <a 
                href="https://www.linkedin.com/company/virt%C3%B9-nera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                LinkedIn Company Page
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white opacity-60 text-sm">
            © 2025 Virtù Nera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}