import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [topPadding, setTopPadding] = useState(0);

  useEffect(() => {
    const updatePadding = () => {
      const header = document.querySelector('header');
      const socialIcons = document.querySelector('.social-icons-container');
      if (header && socialIcons) {
        const headerHeight = header.offsetHeight;
        const socialIconsBottom = socialIcons.getBoundingClientRect().bottom;
        setTopPadding(Math.max(headerHeight, socialIconsBottom) + 20); // Add 20px extra space
      }
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);

    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <div 
      className="min-h-screen bg-primary/30 overflow-y-auto"
      style={{ paddingTop: `${topPadding}px`, paddingBottom: '2rem' }}
    >
      <div className="container mx-auto h-full flex flex-col justify-start xl:justify-center px-4 xl:px-0">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl md:text-4xl xl:h2 mb-8 xl:mb-0"
        >
          Recommendations <span className="text-accent">Received.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
