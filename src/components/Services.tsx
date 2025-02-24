import { motion } from "framer-motion";
import { Search, Palette, Truck, Printer, Car, Scissors, Box, ScanLine, Sun } from "lucide-react";
import falgrafika from "../assets/Falgrafika-Skoda.jpg"

const services = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Nagyformátumú nyomtatás",
    description: "Kiváló minőségű nagyméretű nyomtatás különböző anyagokra."
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "UV Nyomtatás",
    description: "UV technológiával készült, tartós nyomtatás bármilyen felületre, akár átlátszó anyagokra is."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Autófóliázás",
    description: "Professzionális autófóliázás reklám és design célokra."
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Gravírozás",
    description: "Precíz gravírozás különböző anyagokra, egyedi igények szerint."
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "3D Nyomtatás",
    description: "Modern technológiával készült 3D nyomtatás prototípusokhoz és végtermékekhez."
  },
  {
    icon: <ScanLine className="w-8 h-8" />,
    title: "3D Szkennelés",
    description: "Pontos 3D szkennelés tervezéshez és dokumentációhoz."
  },
];

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
    <div className="bg-secondary">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-serif text-primary mb-4"
            >
              Szolgáltatásaink
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Széles körű nyomtatási és digitális gyártási megoldásokat kínálunk.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 py-12 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 max-w-64 mx-auto"
                >
                  <div className="text-accent mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 lg:p-24 md:px-16 px-4 py-16">
              <div className="text-left mb-16 ">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-serif text-white mb-4"
                >
                  Hogyan dolgozunk együtt?
                </motion.h2>
                <p className="text-white">
                  3 egyszerű lépés a sikeres nyomtatáshoz.
                </p>
              </div>

              <div className="flex flex-col gap-8 max-w-xl">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-serif mb-2">{approach.title}</h3>
                    <p className="text-gray-600">{approach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-full lg:w-1/2"
            >
              <img 
                src={falgrafika} 
                alt="Falgrafika Skode" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;