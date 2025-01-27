import { motion } from "framer-motion";
import { Search, Palette, Truck } from "lucide-react";

const approaches = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discovery",
    description: "We begin by understanding your needs, goals, and vision to create the perfect printing solution",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design",
    description: "Our expert team crafts your ideas into stunning, print-ready designs that capture your brand",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Delivery",
    description: "We ensure high-quality printing and timely delivery of your materials to meet your deadlines",
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
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Our Approach
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple three-step process to bring your printing projects to life
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
              <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;