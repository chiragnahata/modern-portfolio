import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowUpLine } from "react-icons/ri";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-[500px] z-40 bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg hidden xl:block"
          title="Back to Top"
        >
          <RiArrowUpLine className="text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
