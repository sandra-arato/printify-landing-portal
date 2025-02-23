import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../assets/Favicon.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <Link to="/" className="font-medium">
            <div className={`flex items-center mb-12 ${isScrolled ? 'translate-y-6 opacity-100' : 'translate-y-30 opacity-0'} transition-all`}>
              <img src={logo} alt="Vinyl Grafik Studio" className="w-4 h-auto mr-2" />
              Vinyl Grafik Stúdió
              </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/rolunk" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Rólunk
            </Link>
            <Link 
              to="/#services" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Szolgáltatások
            </Link>
            <Link 
              to="/#portfolio" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Referenciák
            </Link>
            <Link 
              to="/#contact" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Kapcsolat
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/#contact"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Ajánlatkérés
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 