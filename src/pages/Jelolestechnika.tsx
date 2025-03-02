import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import MetaTags from "@/components/MetaTags";
import ipari1 from "../assets/ipari1.jpg";
import ipari2 from "../assets/ipari2.jpg";
import ipari3 from "../assets/ipari3.jpg";
import ipari4 from "../assets/ipari4.jpg";
import ipari5 from "../assets/ipari5.jpg";
import ipari6 from "../assets/ipari6.jpg";
import ipari7 from "../assets/ipari7.jpg";

const Jelolestechnika = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Jelöléstechnika | Vinyl Grafik Stúdió";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="Jelöléstechnika Projekt"
        description="Ipari jelöléstechnika és biztonsági jelölések. Professzionális megoldások ipari környezetben."
        path="/projektek/jelolestechnika"
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
            <h1 className="text-3xl font-serif text-primary mb-12">Ipari jelöléstechnika</h1>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 pb-4">
                Ez a terület ez a legszínesebb tevékenységi körünk.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Ipari jelöléstechnika alatt azokat a címkézési jelölési és azonosítási eljárásokat értjük, amelyeket ipari környezetben alkalmaznak a termékek, alkatrészek, gépek, rendszerek és munkaterületek nyomon követésére. E jelölések elengedhetetlenek a termelési folyamatok, karbantartás, biztonság és logisztika zökkenőmentes működéséhez, és széleskörűen alkalmazzák őket olyan iparágakban, mint a gyártás, építőipar, gépgyártás, vegyipar és autóipar.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Változatos kihívások, sokféle technikai megoldás. Legyen szó például a gyógyszeriparban alkalmazott, változó adatokat tartalmazó matricákról, UV nyomtatással készült sorszámozott RFID parkolókártyákról, műszerelőlapokról vagy notebook billentyűzetek lokalizálásáról, minden egyes feladatot a legmegfelelőbb technológiai megoldással közelítünk meg.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right image gallery - visible on mobile below content */}
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
                  src={ipari1} 
                  alt="Ipari jelölés" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={ipari2} 
                  alt="Biztonsági jelölés" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={ipari3} 
                  alt="Ipari matrica" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={ipari7} 
                  alt="Figyelmeztető jelzés" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={ipari4} 
                  alt="Veszélyjelzés" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={ipari5} 
                  alt="Munkavédelmi jelölés" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={ipari6} 
                  alt="Ipari útmutató" 
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

export default Jelolestechnika; 