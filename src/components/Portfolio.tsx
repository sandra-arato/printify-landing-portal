import { motion } from "framer-motion";
import nyirfa from "../assets/1.png";
import isb from "../assets/2.png";
import oltokozpont from "../assets/3.png";

const projects = [
  {
    title: "Nyírfacukor",
    category: "Kereskedelem",
    description: "Autografika, kináló pultok és prototipusok",
    image: nyirfa,
    keyword: "nyirfacukor",
  },
  {
    title: "IBS",
    category: "Oktatás",
    description: "Ablakdekoráció, közterületi táblák és egyéb belső dekorációk",
    image: isb,
    keyword: "international-school-of-budapest",
  },
  {
    title: "Oltóközpont",
    category: "Egészségügy",
    description: "Konténer dekoráció, marketing anyagok, valamint változó adatú nyomtatás",
    image: oltokozpont,
    keyword: "oltokozpont",
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            Akiknek már segítettünk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nézze meg, hogyan támogattuk ügyfeleinket egyedi nyomtatási megoldásokkal.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden"
              href={`/projektek/${project.keyword.toLowerCase()}`}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 "
                />
              </div>
              <div>
                <div className="py-8">
                  <span className="bg-black text-white text-sm font-medium mb-4 p-2">{project.category}</span>
                  <h3 className="text-xl font-semibold inline font-serif mx-2 my-2">{project.title}</h3>
                  <p className="text-gray-600 font-display italic my-2 text-2xl group-hover:underline">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;