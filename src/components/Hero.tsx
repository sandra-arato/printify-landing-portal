import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-accent inline-block px-4 py-1 rounded-full bg-accent/10 text-sm font-medium mb-6">
            Vinyl Grafik
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            A sikerhez vezető nyomtatás. <br />
            <br />
            <span className="text-accent">Minden részlet számít.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Rugalmas, gyors és minőségi nyomtatási megoldások kisvállalkozások számára. Bízza ránk a reklámanyagainak elkészítését, és fókuszáljon a növekedésre.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Kérjen ajánlatot most!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;