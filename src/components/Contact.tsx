import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle smooth scrolling for hash links
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      await navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <section className="py-24 bg-slate-200 opacity-90 mix-blend-multiply
                       text-slate-800 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-accent text-3xl md:text-4xl  font-serif font-bold mb-4">Készen áll a növekedésre?</h2>
          <p className="text-slate-800 max-w-md mx-auto text-lg md:text-2xl  mb-12 font-medium">
            Lépjen kapcsolatba velünk, és kezdjük el a közös munkát még ma!
          </p>
        </motion.div>
        <div className="max-w-xl mx-auto">
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start  px-4 lg:px-24">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 self-center"
            >
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-serif mb-2">Telefonszám</h2>
                  <a 
                    href="tel:+3612181475" 
                    className="text-gray-600 hover:text-primary transition-colors text-lg"
                  >
                    +36 1 218 14 75
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-serif mb-2">Címünk</h2>
                  <a 
                    href="https://maps.app.goo.gl/bieit55ZaYeatoB36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors text-lg"
                  >
                    1201 Budapest,<br />
                    Vörösmarty utca 28b
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-xl font-serif mb-2">E-mail</h2>
                  <a 
                    href="mailto:info@vinylgrafik.hu"
                    className="text-gray-600 hover:text-primary transition-colors text-lg"
                  >
                    info@vinylgrafik.hu
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative aspect-square md:aspect-video w-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.0028872835235!2d19.089435776892382!3d47.45459709608161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c37167650b6d%3A0x1b449e37c34c4c9!2zVsO2csO2c21hcnR5IHUuIDI4YiwgQnVkYXBlc3QsIDEyMDE!5e0!3m2!1sen!2shu!4v1710425847955!5m2!1sen!2shu"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-lg"
              />
            </motion.div>
          </div>
    </section>
  );
};

export default Contact;