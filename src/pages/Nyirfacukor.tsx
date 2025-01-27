import { useEffect } from "react";

import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Digital Printing Services | Premium Quality Prints";
  }, []);

  return (
    <div className="relative">
      hello world
      

    </div>
  );
};

export default Index;