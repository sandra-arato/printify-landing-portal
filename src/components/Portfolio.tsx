import { motion } from "framer-motion";
import nyirfa from "../assets/1.png";
import isb from "../assets/2.png";
import oltokozpont from "../assets/3.png";

const projects = [
  {
    title: "Brand Identity",
    category: "Print Design",
    image: nyirfa,
  },
  {
    title: "Marketing Materials",
    category: "Digital Print",
    image: isb,
  },
  {
    title: "Corporate Stationery",
    category: "Print Design",
    image: oltokozpont,
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Akiknek már segítettünk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nézze meg, hogyan támogattuk ügyfeleinket egyedi nyomtatási megoldásokkal.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;