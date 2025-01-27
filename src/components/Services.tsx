import { motion } from "framer-motion";
import { Search, Palette, Truck } from "lucide-react";

const approaches = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Konzultáció és igényfelmérés",
    description: "Első lépésként felmérjük, mire van szüksége. Beszéljük át a céljait, az anyagok típusát, és az elképzeléseit, hogy biztosak legyünk abban, hogy pontosan azt kapja, amire szüksége van.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Tervezés és előkészítés",
    description: "A tervezéstől a színek pontos beállításáig mindent elintézünk. Ha még nincs kész terve, segítünk abban is, hogy az Ön márkájához illeszkedő, figyelemfelkeltő designokat készítsünk.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Nyomtatás és kiszállítás",
    description: "Miután minden készen áll, a legmodernebb digitális technológiával nyomtatunk. A gyors, megbízható és pontos teljesítés garantált. Az elkészült anyagokat gyorsan kiszállítjuk a kívánt címre.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4"
          >
            Hogyan dolgozunk együtt?
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            3 egyszerű lépés a sikeres nyomtatáshoz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="text-accent mb-4 mt-2">{approach.icon}</div>
              <h3 className="text-xl font-semibold font-serif mb-2">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;