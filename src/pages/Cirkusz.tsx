import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import MetaTags from "@/components/MetaTags";
import cirkusz1 from "../assets/cirkusz1.jpg";
import cirkusz2 from "../assets/cirkusz2.jpg";

const Cirkusz = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Budapesti Nagycirkusz | Vinyl Grafik Stúdió";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="Budapesti Nagycirkusz"
        description="Kreatív vizuális megoldások és dekorációs elemek a Budapesti Nagycirkusz számára."
        path="/projektek/budapesti-nagycirkusz"
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
            <h1 className="text-3xl font-serif text-primary mb-12">Budapesti Nagycirkusz</h1>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 pb-4">
                A Budapesti Nagycirkusz egy ikonikus és híres cirkuszi helyszín Magyarországon, amely a műfaj legnagyobb és legszínvonalasabb előadásainak ad otthont. A cirkusz 1950 óta működik, és azóta is a cirkuszművészet egyik kiemelkedő központja az országban.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Feladatunk közé tartozik a folyamatosan frissített programkínálat vizuális kül- és beltéri eszközökön keresztüli megjelenítése.
              </p> 
              <p className="text-lg text-gray-600 pb-4">
                Ehhez olyan vizuális eszközöket alkalmazunk, mint plakátok, molinók, autógrafikák, amelyek folyamatosan frissülnek, biztosítva, hogy az érdeklődők mindig naprakész információkat kapjanak a legújabb programokkal kapcsolatban. Ezen eszközök segítenek abban, hogy a közönség könnyen és gyorsan hozzáférjen a legfrissebb eseményekhez és előadásokhoz, miközben a látványos dizájnok vonzó módon emelik ki a fontos hirdetéseket.
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
                  src={cirkusz1} 
                  alt="Budapesti Nagycirkusz dekoráció" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={cirkusz2} 
                  alt="Budapesti Nagycirkusz belső" 
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

export default Cirkusz; 