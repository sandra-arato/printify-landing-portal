import { useEffect } from "react";

import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ceramic from "../assets/ceramic.avif";
import MetaTags from "@/components/MetaTags";

const Rolunk = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.title = "Rólunk | Vinyl Grafik Stúdió";
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="Rólunk"
        description="Ismerje meg a Vinyl Grafik Stúdiót. Több éves szakmai tapasztalat, modern technológia és kreatív megoldások egy helyen."
        path="/rolunk"
      />
      <Navigation />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left scrolling content */}
        <div className="px-8 lg:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl font-serif text-primary mb-12">Rólunk</h1>
            
            <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl my-8 font-serif">
              Digitális nyomdaipari megoldások, amik többet nyújtanak a nyomtatásnál
            </h2>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 pb-4">
                A szenvedélyünk az Ön üzenetének életre keltése. Tudjuk, hogy minden projekt mögött egy történet áll, és mi segítünk ezt a történetet látványosan elmesélni. Amikor velünk dolgozik, nem csupán egy szolgáltatót kap – olyan partnerre talál, aki érti és átérzi vállalkozása céljait.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Minden egyes munkánk során arra törekszünk, hogy az Ön víziója a lehető leghatásosabban jelenjen meg. Legyen szó akár egy figyelemfelkeltő molinóról az üzlete előtt, vagy egy teljes épület arculatának megtervezéséről, mi ugyanazzal a gondossággal és odafigyeléssel kezeljük projektjét.
              </p>

              <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif">
                A mi világunk a <span className="italic">vizuális kommunikáció</span>
              </h2>
              <p className="text-lg text-gray-600 pb-4">
                Plakátjaink nem egyszerűen papírra nyomtatott üzenetek – olyan kommunikációs eszközök, amelyek megállítják és megragadják az embereket. Amikor kültéri vagy beltéri plakátot készítünk, mindig szem előtt tartjuk, hogy annak nem csak látványosnak, de célravezetőnek is kell lennie.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Matricáink és fóliáink nem ismernek határokat. Legyen szó akár egy kirakat teljes beborításáról vagy egy apró logó elhelyezéséről, mindig a legmagasabb minőségben dolgozunk. UV-nyomtatási technológiánknak köszönhetően pedig szinte bármilyen felületre tudunk tartós és ellenálló grafikát készíteni.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Az autógrafikáink nem csupán dekorációk – mozgó reklámfelületek, amelyek város- és országszerte viszik az Ön üzenetét. Minden járműmatricánkat úgy tervezzük, hogy az ne csak figyelemfelkeltő legyen, hanem tökéletesen illeszkedjen az Ön márkájához is.
              </p>
              <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif">
                Értékteremtés minden részletben
              </h2>
              <p className="text-lg text-gray-600 pb-4">
                Roll Up-jaink és mobil display megoldásaink ideális társak kiállításokon és rendezvényeken. Könnyen szállíthatóak és pillanatok alatt felállíthatóak, mégis professzionális megjelenést biztosítanak bárhol, ahol Ön megjelenik.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                Épületfeliratozási szolgáltatásunk során nem csak a technikai kivitelezésre figyelünk – megértjük az épület karakterét és az Ön márkáját, hogy olyan megoldást készítsünk, ami mindkettőt tökéletesen képviseli. Plasztikus betűinkkel pedig olyan háromdimenziós hatást érhetünk el, ami garantáltan megragadja a tekintetet.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A jelöléstechnika területén is professzionális megoldásokat kínálunk. Értjük, hogy az ipari környezetben a pontosság és a tartósság ugyanolyan fontos, mint az esztétikum, ezért minden projektünknél ezeket az szempontokat együttesen vesszük figyelembe.
              </p>
              <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif">
                A legkisebb is számít
              </h2>
              <p className="text-lg text-gray-600 pb-4">
                Névjegykártyáink és brossúráink esetében is a tökéletességre törekszünk. Tudjuk, hogy ezek a kis nyomtatott darabok gyakran az első fizikai kapcsolatot jelentik az Ön márkájával, ezért különös gondossággal kezeljük őket. Célunk, hogy minden névjegykártya és szórólap, amit a kezébe vesz, tükrözze az Ön professzionalizmusát.
              </p>
              <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif font-bold">
                Miért szeretnek velünk dolgozni partnereink?
              </h2>
              <p className="text-lg text-gray-600 pb-4">
                Megbízhatóságunk nem ígéret, hanem gyakorlat. Minden projektet határidőre és az ígért költségkereten belül szállítunk. Rugalmasságunknak köszönhetően pedig akkor is találunk megoldást, ha váratlan kihívásokkal találkozunk.
              </p>
              <p className="text-lg text-gray-600 pb-4">
                A minőség számunkra nem csak egy szó – ez az alapja minden munkánknak. Modern gépparkunk és szakértő csapatunk garantálja, hogy minden projekt a lehető legjobb minőségben készüljön el.
              </p>
              <p className="text-lg text-gray-600 pb-4 font-semibold mb-12">
                Vegyen részt Ön is ebben a kreatív utazásban! Keressen minket bizalommal, és együtt megtaláljuk a tökéletes megoldást az Ön egyedi igényeire.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right sticky image */}
        <div className="hidden lg:block relative">
          <div className="sticky top-0 h-screen">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img 
                src={ceramic} 
                alt="Vinyl Grafik Studio" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Rolunk;