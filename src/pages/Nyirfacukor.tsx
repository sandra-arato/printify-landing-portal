import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import pult from "../assets/DSCF3446.jpg";
import pult2 from "../assets/DSCF3447.jpg";
import car from "../assets/DSCF3547.jpg";
import car2 from "../assets/DSCF3634.jpg";

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

              <h2 className="text-2xl font-semibold font-serif text-gray-600 my-8">A feladat</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li className="py-2 marker:py-1">A megrendelő külső okok miatt szoros határidővel rendelkezett, és gyors, de hatékony és magas minőségű megoldásra volt szüksége.</li>
                <li className="py-2 marker:py-1">A WordPress alapú weboldalt részesítették előnyben, amelyhez WPEngine-t szerettek volna használni.</li>
                <li className="py-2 marker:py-1">A weboldalt teljesen át kellett alakítani, miközben fontos fejlesztéseket kellett eszközölni a felhasználói élmény javítása érdekében.</li>
                <li className="py-2 marker:py-1">A megrendelő a napi szintű weboldal-kezelés egyszerűsítésére törekedett, úgy, hogy közben javította a tartalomkezelő rendszert (CMS), anélkül hogy feláldozta volna a rugalmasságot.</li>
              </ul>

              <h2 className="text-2xl font-semibold font-serif text-gray-600 my-8">A megoldás</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li className="py-2 marker:py-1">A weboldal teljes átalakítása, beleértve a design, a tartalom és a funkcionalitások újragondolását.</li>
                <li className="py-2 marker:py-1">Az új weboldal elkészítése a WordPress alapú Divi Builder segítségével, amely lehetővé tette a gyors és hatékony munkát.</li>
                <li className="py-2 marker:py-1">Az oldal gyorsítása és optimalizálása a WPEngine szervereken, hogy a weboldal gyorsan és hatékonyan működjön.</li>
                <li className="py-2 marker:py-1">Az oldal tartalmának újragondolása és optimalizálása a keresőmotorok számára, hogy a Nyírfacukor Kft. könnyebben megtalálható legyen a Google keresőben.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right image gallery - now visible on mobile below content */}
        <div className="lg:relative">
          <div className="lg:sticky lg:top-24 h-screen p-8 bg-white">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="h-full grid grid-cols-2 gap-4 overflow-hidden"
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