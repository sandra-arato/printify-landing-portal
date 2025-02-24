import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import pult from "../assets/nyirfacukor-pult-1.jpg";
import pult2 from "../assets/nyirfacukor-pult-2.jpg";
import car from "../assets/nyirfacukor-auto-1.jpg";
import car2 from "../assets/nyirfacukor-auto-2.jpg";
import MetaTags from "@/components/MetaTags";

const Nyirfacukor = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Nyírfacukor | Vinyl Grafik Stúdió";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="Nyírfacukor Projekt"
        description="Autógrafika, kínáló pultok és prototípusok készítése a Nyírfacukor számára. Egyedi megjelenés tervezése és kivitelezése."
        image={pult}
        path="/projektek/nyirfacukor"
      />
      <Navigation />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="min-h-screen lg:grid lg:grid-cols-2">
        {/* Left scrolling content */}
        <div className="px-8 lg:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl font-serif text-primary mb-12">Nyírfacukor</h1>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 pb-4">
                A Nyírfacukor Kft. egy magyar vállalat, amely főként nyírfacukor (xilit) és egyéb alternatív édesítőszerek forgalmazásával foglalkozik. A cég célja, hogy egészségesebb alternatívákat kínáljon a hagyományos cukorral szemben, különös figyelmet fordítva a természetes alapanyagok felhasználására.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right image gallery - now visible on mobile below content */}
        <div className="lg:relative">
          <div className="lg:sticky lg:top-12 min-h-screen p-8 py-24 bg-white">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img 
                  src={car2} 
                  alt="Nyírfacukor autó grafika" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={pult} 
                  alt="Nyírfacukor pult" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={car} 
                  alt="Nyírfacukor autó grafika" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={pult2} 
                  alt="Nyírfacukor pult" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Nyirfacukor;