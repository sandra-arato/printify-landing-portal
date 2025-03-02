import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import isb1 from "../assets/isb-iskola-1.jpg";
import isb2 from "../assets/isb-iskola-2.jpg";
import isb3 from "../assets/isb-iskola-3.jpg";
import isb4 from "../assets/isb-iskola-4.jpg";
import isb5 from "../assets/isb-iskola-5.jpg";
import isb6 from "../assets/isb-iskola-6.jpg";
import isb7 from "../assets/isb-iskola-7.jpg";
import MetaTags from "@/components/MetaTags";

const ISB = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "International School of Budapest | Vinyl Grafik Stúdió";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="International School of Budapest"
        description="Komplex vizuális kommunikációs rendszer kialakítása az ISB számára. Modern oktatási környezet megteremtése dekorációs elemekkel, útbaigazító rendszerekkel."
        path="/projektek/international-school-of-budapest"
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
            <h1 className="text-3xl font-serif text-primary mb-12">International School of Budapest</h1>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 pb-4">
                Az International School of Budapest új helyszínre költözött.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Az iskola felújítása után igazán különleges feladatot jelentett számunkra a dekorációs elemek gyártása és kihelyezése.A projekt célja az International School of Budapest új helyszínének belső terei és külső megjelenése közötti harmonikus összhang megteremtése volt.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A belsőépítészekkel való szoros együttműködés során egy olyan inspiráló koncepció jött létre, amely a kreativitás és az együttműködés szellemét helyezte a fókuszba. A tervezés célja az volt, hogy a terek ne csak esztétikai élményt nyújtsanak, hanem támogassák a közösségi interakciókat és ösztönözzék a diákokat és tanárokat a közös gondolkodásra. Az iskola minden egyes részlete, a dekorációtól kezdve a praktikus elemekig, azt az üzenetet közvetítette, hogy a tanulás nemcsak a tudás megszerzéséről szól, hanem a kreatív, együttműködő folyamatokban való részvételről is.
              </p>
              <p className="text-lg text-gray-600 pb-4">A belső terekben elhelyezett ajtótáblák, 3D grafikák és a folyosókra tervezett feliratok nemcsak tájékoztató funkcióval bírnak, hanem az iskola közösségét is erősítik, miközben az iskolai környezet kreatív szellemét közvetítik. A kirakat grafikák különösen fontos szerepet kaptak, mivel céljuk az volt, hogy már kívülről megszólítsák a diákokat, és bemutassák az iskola dinamikus, fiatalos és innovatív oldalát.
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
                  src={isb1} 
                  alt="ISB épületdekoráció" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={isb2} 
                  alt="ISB belső tér" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={isb5} 
                  alt="ISB iskola szeptember" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={isb7} 
                  alt="ISB iskola szeptember 14" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={isb3} 
                  alt="ISB útbaigazító rendszer" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={isb4} 
                  alt="ISB faldekoráció" 
                  className="w-full h-auto object-cover rounded-xl"
                />
                <img 
                  src={isb6} 
                  alt="ISB iskola szeptember 14" 
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

export default ISB; 