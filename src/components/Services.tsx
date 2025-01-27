import { motion } from "framer-motion";
import { Printer, Palette, Layout, Image } from "lucide-react";

const services = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Digital Printing",
    description: "High-quality prints for all your business needs",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design Services",
    description: "Professional design solutions tailored to your brand",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Layout & Format",
    description: "Expert layout design for maximum impact",
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: "Large Format",
    description: "Banners, posters, and large-scale printing",
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
            Our Services
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive printing solutions for all your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;