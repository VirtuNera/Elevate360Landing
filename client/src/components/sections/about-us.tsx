import { AnimatedSection } from "@/components/ui/animated-section";

export function AboutUs() {
  const leaders = [
    {
      name: "Zul-Fadhli Abdul Mateen",
      role: "CEO & Founder",
      description: "A tech entrepreneur with strategic thinking and a passion for community service. Regional changemaker and SEARCCT STORY 2025 1st Place Winner.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      roleColor: "text-green-400"
    },
    {
      name: "Hafiiz Ramle",
      role: "CFO & COO",
      description: "Ensuring sustainable growth with financial expertise and operational excellence. Serial business owner and 2x Shell LiveWIRE Award Winner.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      roleColor: "text-yellow-400"
    },
    {
      name: "Azmi Sabtu",
      role: "CMO",
      description: "Marketing strategist with a passion for community-led growth and proven PR expertise. Master Holder in Management and the visionary behind Elevate360.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      roleColor: "text-purple-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Virtù Nera
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
            "Strengthening Your Path To Success With Unwavering Excellence."
          </p>
          <p className="text-lg text-white opacity-80 max-w-4xl mx-auto">
            We are a team of passionate innovators dedicated to building Elevate360 as a trusted, innovative, and inclusive growth ecosystem that empowers professionals at every stage of their journey.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <AnimatedSection key={leader.name} delay={index * 0.1}>
              <div className="glass-morphism p-8 rounded-2xl text-center">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                <p className={`${leader.roleColor} font-semibold mb-4`}>{leader.role}</p>
                <p className="text-white opacity-90 text-sm">{leader.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-16">
          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Founder's Message</h3>
            <p className="text-white opacity-90 text-lg italic">
              "Hi, I'm Azmi Sabtu — CMO of Virtù Nera and one of the minds behind Elevate360. My passion lies in community-led innovation, purpose-driven growth, and designing systems where people are seen, supported, and elevated. Together with my team, we're building a movement that turns fragmented progress into a unified journey."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
