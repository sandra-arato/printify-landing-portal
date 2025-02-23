import { motion } from "framer-motion";
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
          <h2 className="text-black text-3xl md:text-4xl  font-serif font-bold mb-4">Készen áll a növekedésre?</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Lépjen kapcsolatba velünk, és kezdjük el a közös munkát még ma!
          </p>
          <div className="p-8">
            <h3 className="text-center text-accent text-3xl md:text-4xl font-bold ">+36 1 218 14 75</h3>
          </div>
        </motion.div>
        <div className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-serif">Címünk</h3>
              <p className="text-gray-800 underline">
                <a href="https://maps.app.goo.gl/bieit55ZaYeatoB36" target="_blank" >
                  Vörösmarty u. 28b<br />
                  1201 Budapest
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-serif mb-4">Linkek</h3>
              <ul className="space-y-2">
                <Link to="/" className="text-gray-800 hover:text-primary block">Főoldal</Link>
                <Link to="/rolunk" className="text-gray-800 hover:text-primary block">Rólunk</Link>
                <a 
                  href="#portfolio"
                  onClick={(e) => handleClick(e, 'portfolio')}
                  className="text-gray-800 hover:text-primary block"
                >
                  Referenciák
                </a>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold font-serif mb-4">Facebook</h3>
              <div className="flex justify-center md:justify-start">
                <a href="https://www.facebook.com/VinylGrafikStudio" className="text-gray-800 hover:text-white m-0">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" fill="#333"><path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg>
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