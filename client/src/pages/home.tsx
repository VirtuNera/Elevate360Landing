import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { WhatIsElevate360 } from "@/components/sections/what-is-elevate360";
import { KeyFeatures } from "@/components/sections/key-features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhoShouldUse } from "@/components/sections/who-should-use";
import { Highlights } from "@/components/sections/highlights";
import { AboutUs } from "@/components/sections/about-us";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhatIsElevate360 />
      <KeyFeatures />
      <HowItWorks />
      <WhoShouldUse />
      <Highlights />
      <AboutUs />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
