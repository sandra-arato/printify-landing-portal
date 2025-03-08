import { motion } from "framer-motion";
import styles from './Hero.module.css';
import logo from '../assets/VGSLogo.svg';
import girlBg from '../assets/ceramic.avif';

const Hero = () => {
  return (
    <div className={styles.header}>
      <section className="min-h-screen relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Content Side */}
          <div className="flex items-center px-8 lg:px-16 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <div className="flex items-center mb-12">
                <img src={logo} alt="Vinyl Grafik Studio" className="w-8/12 h-auto" />
                {/* <span className="text-4xl lg:text-5xl inline-block px-4 font-medium text-slate-800">
                  Vinyl Grafik Stúdió
                </span> */}
              </div>
            
              <p className="text-lg md:text-2xl text-slate-800 mb-12 font-medium">
                Rugalmas, gyors és minőségi nyomtatási megoldások kisvállalkozások számára. Bízza ránk a reklámanyagainak elkészítését, és fókuszáljon a növekedésre.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors inline-block"
              >
                Kérjen ajánlatot most!
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image Side */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img 
                src={girlBg} 
                alt="Vinyl Grafik Studio" 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;