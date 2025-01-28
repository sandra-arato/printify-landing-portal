import { useEffect } from "react";

import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import pult from "../assets/DSCF3446.jpg";
import pult2 from "../assets/DSCF3447.jpg";
import car from "../assets/DSCF3547.jpg";
import car2 from "../assets/DSCF3634.jpg";


const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Digital Printing Services | Premium Quality Prints";
  }, []);

  return (
    <div className="">
      <section className="h-40 md:h-96 flex items-center justify-start relative overflow-hidden px-4 py-24 bg-accent">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-8"
          >
            <h3 className="text-white text-3xl font-serif">Nyírfacukor</h3>
          </motion.div>
        </div>
      </section>
      <div>
        <section>
          <p className="px-8 py-16 font-serif text-lg text-gray-600 max-w-2xl">A Nyírfacukor Kft. egy magyar vállalat, amely főként nyírfacukor (xilit) és egyéb alternatív édesítőszerek forgalmazásával foglalkozik. A cég célja, hogy egészségesebb alternatívákat kínáljon a hagyományos cukorral szemben, különös figyelmet fordítva a természetes alapanyagok felhasználására.</p>
          <div className="px-8 mb-16">
            <h2 className="text-2xl font-semibold font-serif text-gray-600 my-8">A feladat</h2>
            <p className="text-gray-600 max-w-2xl">
              <ul className="list-disc list-inside">
                <li className="py-2 marker:py-1">A megrendelő külső okok miatt szoros határidővel rendelkezett, és gyors, de hatékony és magas minőségű megoldásra volt szüksége.</li>
                <li className="py-2 marker:py-1">A WordPress alapú weboldalt részesítették előnyben, amelyhez WPEngine-t szerettek volna használni.</li>
                <li className="py-2 marker:py-1">A weboldalt teljesen át kellett alakítani, miközben fontos fejlesztéseket kellett eszközölni a felhasználói élmény javítása érdekében.</li>
                <li className="py-2 marker:py-1">A megrendelő a napi szintű weboldal-kezelés egyszerűsítésére törekedett, úgy, hogy közben javította a tartalomkezelő rendszert (CMS), anélkül hogy feláldozta volna a rugalmasságot.</li>
              </ul>
            </p>
            <h2 className="text-2xl font-semibold font-serif text-gray-600 my-8">A megoldás</h2>
            <p className="text-gray-600 max-w-2xl">
              <ul className="list-disc list-inside">
                <li className="py-2 marker:py-1">A weboldal teljes átalakítása, beleértve a design, a tartalom és a funkcionalitások újragondolását.</li>
                <li className="py-2 marker:py-1">Az új weboldal elkészítése a WordPress alapú Divi Builder segítségével, amely lehetővé tette a gyors és hatékony munkát.</li>
                <li className="py-2 marker:py-1">Az oldal gyorsítása és optimalizálása a WPEngine szervereken, hogy a weboldal gyorsan és hatékonyan működjön.</li>
                <li className="py-2 marker:py-1">Az oldal tartalmának újragondolása és optimalizálása a keresőmotorok számára, hogy a Nyírfacukor Kft. könnyebben megtalálható legyen a Google keresőben.</li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <div className="px-8 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             
              <img src={car2} alt="Gallery Image 4" className="w-full h-auto object-cover" />

              <img src={car} alt="Gallery Image 3" className="w-full h-auto object-cover" />
               <img src={pult} alt="Gallery Image 1" className="w-full h-auto object-cover" />
              <img src={pult2} alt="Gallery Image 2" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>
      </div>

      
      <Contact />
    </div>
  );
};

export default Index;