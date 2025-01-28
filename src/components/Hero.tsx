import { motion } from "framer-motion";
import styles from './Hero.module.css';
import logo from '../assets/Favicon.svg';
const Hero = () => {
  return (
    <div className={styles.header}>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img src={logo} alt="Vinyl Grafik Studio" className="w-24 h-auto mx-auto mb-6" />
            <span className=" text-xl inline-block px-4 py-1 rounded-full bg-accent/10  font-medium mb-6">
              Vinyl Grafik Studio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-primary leading-tight mb-3">
              A sikerhez vezető nyomtatás.
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl italic font-serif mb-6"><span>Minden részlet számít.</span></h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Rugalmas, gyors és minőségi nyomtatási megoldások kisvállalkozások számára. Bízza ránk a reklámanyagainak elkészítését, és fókuszáljon a növekedésre.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Kérjen ajánlatot most!
            </motion.a>
          </motion.div>
        
      </div>
      </section>
      </div>
  );
};

export default Hero;