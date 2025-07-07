import { AnimatedSection } from "@/components/ui/animated-section";
import sirFadImage from "@assets/sir_fad_1751855714092.jpg";
import sirHafizImage from "@assets/sir_hafiz_1751855714091.jpg";
import sirSpaxImage from "@assets/sir_spax_1751855714082.jpg";

export function AboutUs() {
  const leaders = [
    {
      name: "Zul-Fadhli Abdul Mateen",
      role: "CEO & Founder",
      description: "A tech entrepreneur with strategic thinking and a passion for community service. Regional changemaker and SEARCCT STORY 2025 1st Place Winner.",
      image: sirFadImage,
      roleColor: "text-green-400"
    },
    {
      name: "Hafiiz Ramlee",
      role: "CFO & COO",
      description: "Ensuring sustainable growth with financial expertise and operational excellence. Serial business owner and 2x Shell LiveWIRE Award Winner.",
      image: sirHafizImage,
      roleColor: "text-yellow-400"
    },
    {
      name: "Azmi Sabtu",
      role: "CMO",
      description: "Marketing strategist with a passion for community-led growth and proven PR expertise. Master Holder in Management and the visionary behind Elevate360.",
      image: sirSpaxImage,
      roleColor: "text-purple-400"
    }
  ];



  return (
    <section id="about" className="py-20" style={{ background: 'linear-gradient(135deg, hsl(222, 45%, 15%), hsl(222, 40%, 25%), var(--virtu-accent))' }}>
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
        
        {/* Leadership Team */}
        <AnimatedSection className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={leader.name} className="glass-morphism p-8 rounded-2xl text-center">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-semibold text-white mb-2">{leader.name}</h4>
                <p className={`${leader.roleColor} font-semibold mb-4`}>{leader.role}</p>
                <p className="text-white opacity-90 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>



        {/* Group Photo */}
        <AnimatedSection className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Team Photo</h3>
          <div className="glass-morphism p-8 rounded-2xl text-center">
            <div className="w-full h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-xl flex items-center justify-center border-2 border-dashed border-white/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white opacity-90 text-lg font-medium">Virtù Nera Team Photo</p>
                <p className="text-white opacity-70 text-sm mt-2">Our amazing team working together to build the future of professional development</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="text-center mt-16">
          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Our CEO's Message</h3>
            <p className="text-white opacity-90 text-lg italic">
              "Hi, I'm Zul-Fadhli Abdul Mateen — CEO & Founder of Virtù Nera and the visionary behind Elevate360. As a tech entrepreneur with a passion for community service and strategic innovation, I believe in creating systems that truly elevate human potential. Our mission is to build a movement that transforms fragmented professional growth into a unified, empowering journey for everyone."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
