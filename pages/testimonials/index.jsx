import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center relative">
      {/* Spacer div for mobile */}
      <div className="h-[100px] md:h-0 xl:h-0"></div>
      
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
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
      
      <style jsx>{`
        @media (max-width: 767px) {
          .container {
            padding-top: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
