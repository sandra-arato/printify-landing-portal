import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-primary text-white px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Készen áll a növekedésre?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lépjen kapcsolatba velünk, és kezdjük el a közös munkát még ma!
          </p>
          <div className="p-8">
            <h3 className="text-center text-yellow-400 text-3xl md:text-4xl font-bold ">+36 1 218 14 75</h3>
          </div>
        </motion.div>
        <div className="max-w-xl mx-auto">
          {/* <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-accent text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-accent/90 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cimunk</h3>
              <p className="text-gray-300">
                Vörösmarty u. 28b<br />
                1201 Budapest
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Linkek</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Főoldal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Rólunk</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Portfólió</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Socials</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;