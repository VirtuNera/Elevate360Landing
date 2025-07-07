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
