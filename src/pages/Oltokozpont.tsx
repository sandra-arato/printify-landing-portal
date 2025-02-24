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
        image={olto1}
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
                Az Oltóközpont projekt különleges kihívást jelentett számunkra, hiszen a pandémia idején kellett gyorsan és hatékonyan létrehoznunk egy olyan vizuális rendszert, amely egyszerre professzionális és megnyugtató környezetet teremt az oltásra érkezők számára.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A konténerek külső dekorációjánál fontos szempont volt az egységes, tiszta megjelenés mellett az információk egyértelmű kommunikálása. A nagy méretű feliratozások és útmutatók segítették a páciensek tájékozódását, míg a választott színvilág a bizalom és a professzionalizmus érzetét erősítette.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A projekt során nem csak a külső dekorációra, hanem a belső terek kialakítására is nagy hangsúlyt fektettünk. Az oltópontok jelölései, a várakozási területek és az információs táblák mind-mind úgy lettek kialakítva, hogy segítsék a gördülékeny betegellátást és csökkentsék a várakozással járó stresszt.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A változó adatú nyomtatás technológiájának köszönhetően rugalmasan tudtuk kezelni az egyes oltópontok egyedi információs anyagait, miközben megtartottuk az egységes arculati megjelenést. Ez a megoldás lehetővé tette, hogy minden helyszín a saját speciális igényeinek megfelelő tájékoztatást kapjon.
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