import { GraduationCap, Presentation, Bus, Building, UserCog, Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function WhoShouldUse() {
  const userTypes = [
    {
      icon: GraduationCap,
      title: "Learners & Professionals",
      description: "Whether you're a jobseeker, student, freelancer, or entrepreneur, accelerate your career growth with personalized learning paths and professional networking.",
      benefits: [
        "Personalized skill development",
        "Career transition support",
        "Professional networking"
      ],
      color: "text-blue-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: Presentation,
      title: "Trainers & Educators",
      description: "Course creators, coaches, and institutions can deliver formal certification programs and reach a wider audience of motivated learners.",
      benefits: [
        "Content creation tools",
        "Learner analytics",
        "Certification management"
      ],
      color: "text-green-600",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: Bus,
      title: "Mentors & Peers",
      description: "Industry veterans and peer coaches can provide personalized guidance, share experiences, and build meaningful professional relationships.",
      benefits: [
        "Mentorship matching",
        "Impact tracking",
        "Community building"
      ],
      color: "text-purple-600",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: Building,
      title: "Employers & Institutions",
      description: "Organizations can validate skill relevance, identify top talent, and create internal development programs for their workforce.",
      benefits: [
        "Talent identification",
        "Skills validation",
        "Workforce development"
      ],
      color: "text-yellow-600",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: UserCog,
      title: "Community Leaders",
      description: "Influencers, advocates, and ecosystem builders can identify emerging trends and connect community members with future opportunities.",
      benefits: [
        "Trend identification",
        "Community curation",
        "Ecosystem building"
      ],
      color: "text-blue-600",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section id="who-should-use" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who Should Use Elevate360?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our ecosystem is designed for every professional at every stage of their growth journey.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <AnimatedSection key={userType.title} delay={index * 0.1}>
              <div className="user-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <img 
                  src={userType.image} 
                  alt={userType.title} 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className={`text-xl font-semibold mb-4 ${userType.color} flex items-center`}>
                  <userType.icon className="mr-2 h-6 w-6" />
                  {userType.title}
                </h3>
                <p className="text-gray-600 mb-4">{userType.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {userType.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
