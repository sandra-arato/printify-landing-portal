import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../assets/Favicon.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash change on route navigation
  useEffect(() => {
    // Check if there's a hash in the URL after navigation
    if (location.hash) {
      // Remove the # from the hash to get the ID
      const id = location.hash.slice(1);
      // Add a small delay to ensure the new page content is rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [location]);

  // Handle smooth scrolling for hash links
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // Use React Router navigation instead of window.location
      await navigate(`/#${id}`);
    } else {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <Link to="/" className="font-medium" onClick={scrollToTop}>
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
              onClick={scrollToTop}
            >
              Rólunk
            </Link>
            <a 
              href="#services"
              onClick={(e) => handleClick(e, 'services')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Szolgáltatások
            </a>
            <a 
              href="#portfolio"
              onClick={(e) => handleClick(e, 'portfolio')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Referenciák
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Kapcsolat
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Ajánlatkérés
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 