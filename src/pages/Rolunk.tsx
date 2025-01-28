import { useEffect } from "react";

import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact";
import pult from "../assets/DSCF3446.jpg";
import pult2 from "../assets/DSCF3447.jpg";
import car from "../assets/DSCF3547.jpg";
import car2 from "../assets/DSCF3634.jpg";

const Rolunk = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
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
            <h3 className="text-white text-3xl font-serif">CSOPORT KEP?</h3>
          </motion.div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row">
        <section className="flex md:inline-flex flex-col max-w-2xl  px-8">
          <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl my-8 font-serif">
            Digitális nyomdaipari megoldások, amik többet nyújtanak a nyomtatásnál
          </h2>
          <p className="flex text-lg text-gray-600 pb-4">
            A szenvedélyünk az Ön üzenetének életre keltése. Tudjuk, hogy minden projekt mögött egy történet áll, és mi segítünk ezt a történetet látványosan elmesélni. Amikor velünk dolgozik, nem csupán egy szolgáltatót kap – olyan partnerre talál, aki érti és átérzi vállalkozása céljait.
          </p>
          <p className="flex text-lg text-gray-600 pb-4">
            Minden egyes munkánk során arra törekszünk, hogy az Ön víziója a lehető leghatásosabban jelenjen meg. Legyen szó akár egy figyelemfelkeltő molinóról az üzlete előtt, vagy egy teljes épület arculatának megtervezéséről, mi ugyanazzal a gondossággal és odafigyeléssel kezeljük projektjét.
          </p>

          <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif">
            A mi világunk a <span className="italic">vizuális kommunikáció</span>
          </h2>
          <p className="flex text-lg text-gray-600 pb-4">
            Plakátjaink nem egyszerűen papírra nyomtatott üzenetek – olyan kommunikációs eszközök, amelyek megállítják és megragadják az embereket. Amikor kültéri vagy beltéri plakátot készítünk, mindig szem előtt tartjuk, hogy annak nem csak látványosnak, de célravezetőnek is kell lennie.
          </p>
          <p className="flex text-lg text-gray-600 pb-4">
            Matricáink és fóliáink nem ismernek határokat. Legyen szó akár egy kirakat teljes beborításáról vagy egy apró logó elhelyezéséről, mindig a legmagasabb minőségben dolgozunk. UV-nyomtatási technológiánknak köszönhetően pedig szinte bármilyen felületre tudunk tartós és ellenálló grafikát készíteni.
          </p>
          <p className="flex text-lg text-gray-600 pb-4">
            Az autógrafikáink nem csupán dekorációk – mozgó reklámfelületek, amelyek város- és országszerte viszik az Ön üzenetét. Minden járműmatricánkat úgy tervezzük, hogy az ne csak figyelemfelkeltő legyen, hanem tökéletesen illeszkedjen az Ön márkájához is.
          </p>
          <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif">
            Értékteremtés minden részletben
          </h2>
          <p className="flex text-lg text-gray-600 pb-4">
            Roll Up-jaink és mobil display megoldásaink ideális társak kiállításokon és rendezvényeken. Könnyen szállíthatóak és pillanatok alatt felállíthatóak, mégis professzionális megjelenést biztosítanak bárhol, ahol Ön megjelenik.
          </p>
          <p className="flex text-lg text-gray-600 pb-4">
            Épületfeliratozási szolgáltatásunk során nem csak a technikai kivitelezésre figyelünk – megértjük az épület karakterét és az Ön márkáját, hogy olyan megoldást készítsünk, ami mindkettőt tökéletesen képviseli. Plasztikus betűinkkel pedig olyan háromdimenziós hatást érhetünk el, ami garantáltan megragadja a tekintetet.
          </p>
          <p className="flex text-lg text-gray-600 pb-4">
            A jelöléstechnika területén is professzionális megoldásokat kínálunk. Értjük, hogy az ipari környezetben a pontosság és a tartósság ugyanolyan fontos, mint az esztétikum, ezért minden projektünknél ezeket az szempontokat együttesen vesszük figyelembe.
          </p>
          <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif">
            A legkisebb is számít
          </h2>
          <p className="flex text-lg text-gray-600 pb-4">
            Névjegykártyáink és brossúráink esetében is a tökéletességre törekszünk. Tudjuk, hogy ezek a kis nyomtatott darabok gyakran az első fizikai kapcsolatot jelentik az Ön márkájával, ezért különös gondossággal kezeljük őket. Célunk, hogy minden névjegykártya és szórólap, amit a kezébe vesz, tükrözze az Ön professzionalizmusát.
          </p>
          <h2 className="text-lg md:text-xl text-left text-gray-700 max-w-2xl mb-8 mt-4 font-serif font-bold">
            Miért szeretnek velünk dolgozni partnereink?
          </h2>
          <p className="flex text-lg text-gray-600 pb-4">
            Megbízhatóságunk nem ígéret, hanem gyakorlat. Minden projektet határidőre és az ígért költségkereten belül szállítunk. Rugalmasságunknak köszönhetően pedig akkor is találunk megoldást, ha váratlan kihívásokkal találkozunk.
          </p>
          <p className="flex text-lg text-gray-600 pb-4">
            A minőség számunkra nem csak egy szó – ez az alapja minden munkánknak. Modern gépparkunk és szakértő csapatunk garantálja, hogy minden projekt a lehető legjobb minőségben készüljön el.
          </p>
          <p className="flex text-lg text-gray-600 pb-4 font-semibold mb-12">
            Vegyen részt Ön is ebben a kreatív utazásban! Keressen minket bizalommal, és együtt megtaláljuk a tökéletes megoldást az Ön egyedi igényeire.
          </p>
        </section>
      </div>

      <Contact />
    </div>
  );
};

export default Rolunk;