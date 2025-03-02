import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import MetaTags from "@/components/MetaTags";
import lurdy1 from "../assets/lurdy1.jpg";
import lurdy2 from "../assets/lurdy2.jpg";
import lurdy3 from "../assets/lurdy3.jpg";
import lurdy4 from "../assets/lurdy4.jpg";
import lurdy5 from "../assets/lurdy5.jpg";
import lurdy6 from "../assets/lurdy6.jpg";
import lurdy7 from "../assets/lurdy7.jpg";
import lurdy8 from "../assets/lurdy8.jpg";

const Lurdy = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Lurdy Ház | Vinyl Grafik Stúdió";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="Lurdy Ház Projekt"
        description="Komplex vizuális megoldások és dekorációs elemek a Lurdy Ház számára. Modern és figyelemfelkeltő design megoldások."
        path="/projektek/lurdy-haz"
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
            <h1 className="text-3xl font-serif text-primary mb-12">LURDY Ház</h1>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 pb-4">
                Mivel közel 10 éven át üzemeltettük stúdiónkat a LURDY Házban, természetes volt, hogy a bevásárló központ és az ott található üzletek dekorációs munkáiba is aktívan részt vettünk.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Sokféle nyomdaipari és dekorációs felkérés érkezett hozzánk, és minden egyes részletre maximális figyelmet fordítottunk.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Legyen szó névjegykártyáról, szórólapról, plakátról, üzletdekorációról, molinóról, padlómatricáról vagy plasztikus betűkről, mindegyik alapvető szerepet játszott a vizuális kommunikáció erejének kiemelésében.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Rengeteg kreatív ötlettel és megvalósítással gazdagítottuk a LURDY Házat és annak üzleteit. A hosszú távú jelenlét lehetővé tette, hogy mély kapcsolatot alakítsunk ki a környezetünkkel, és szerves részévé váljunk annak.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A bevásárló központok dekorációja nemcsak a vizuális élményt fokozza, hanem elősegíti a vásárlók kényelmét és elégedettségét is.
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
                  src={lurdy1} 
                  alt="Lurdy Ház dekoráció" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={lurdy2} 
                  alt="Lurdy Ház belső" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={lurdy7} 
                  alt="Lurdy Ház belső tér" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={lurdy5} 
                  alt="Thai Wok" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={lurdy6} 
                  alt="Lurdy Ház üzlet" 
                  className="w-full h-auto object-cover rounded-xl"
                />

                <img 
                  src={lurdy8} 
                  alt="Lurdy Ház homlokzat" 
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

export default Lurdy; 
