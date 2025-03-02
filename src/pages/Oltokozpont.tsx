import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import MetaTags from "@/components/MetaTags";
import olto1 from "../assets/oltokozpont-konter-1.jpg";
import olto2 from "../assets/oltokozpont-konter-2.jpg";
import olto3 from "../assets/oltokozpont-busz-1.jpg";
import olto4 from "../assets/oltokozpont-busz-2.jpg";
import olto5 from "../assets/oltokozpont-buszok.jpg";
import olto6 from "../assets/oltokozpont-opel-1.jpg";
import olto7 from "../assets/oltokozpont-opel-2.jpg";

const Oltokozpont = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Oltóközpont | Vinyl Grafik Stúdió";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="Oltóközpont Projekt"
        description="Konténer dekoráció és információs rendszer kialakítása az oltóközpontok számára. Professzionális vizuális kommunikációs megoldások a pandémia idején."
        path="/projektek/oltokozpont"
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
            <h1 className="text-3xl font-serif text-primary mb-12">Oltóközpont</h1>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 pb-4">
                A Nemzetközi Oltóközpont olyan intézmény, amely a nemzetközi utazók és a különböző oltásokat igénylő személyek számára biztosít oltásokat és tanácsokat.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A különböző grafikai projektekkel keresnek meg minket, amelyek széles spektrumot ölelnek fel, a hagyományos nyomtatott anyagoktól kezdve a digitális vizuális megoldásokig.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Alternatívát nyújtunk különböző grafikai termékek gyártására, amelyek széleskörű alkalmazási lehetőségeket biztosítanak. Legyen szó oltási kiskönyvek tervezéséről és kivitelezéséről, plakátok, megállító táblák, autó- vagy buszgrafikák készítéséről, mobil konténerek dekorálásáról, vagy akár plasztikus világító betűk elhelyezéséről épületük homlokzatán, mindig a legmagasabb minőséget biztosítjuk.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Célunk, hogy minden egyes projekt során kreatív, figyelemfelkeltő és egyedi megoldásokat kínáljunk, amelyek erősítik a vizuális kommunikációt és hatékonyan közvetítik az üzeneteket.
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
                  src={olto1} 
                  alt="Covid konténer külső" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={olto2} 
                  alt="Covid konténer belső" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={olto3} 
                  alt="Covid konténer busz" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={olto6} 
                  alt="Opel Covid konténer" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={olto4} 
                  alt="Covid konténer busz részlet" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={olto5} 
                  alt="Covid konténer buszok" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={olto7} 
                  alt="Opel Covid konténer részlet" 
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

export default Oltokozpont; 