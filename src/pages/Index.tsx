import { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import MetaTags from "@/components/MetaTags";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Vinyl Grafik Stúdió | Látványos dekor megoldások";
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="Vinyl Grafik Stúdió | Látványos dekor megoldások"
        description="Vinyl Grafik Stúdió - Professzionális nyomdaipari és dekorációs megoldások. Nagyformátumú nyomtatás, autófóliázás, gravírozás és egyéb szolgáltatások."
        path="/"
      />
      <Navigation />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;