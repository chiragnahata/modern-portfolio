import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";
import { RiLinkedinBoxFill, RiStarFill, RiUserHeartLine } from "react-icons/ri";

const Testimonials = () => {
  const stats = [
    { number: "50+", label: "Connections", icon: RiUserHeartLine },
    { number: "15+", label: "Recommendations", icon: RiStarFill },
    { number: "5", label: "Star Ratings", icon: RiStarFill },
  ];

  return (
    <div className="min-h-screen bg-primary/30 py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <RiLinkedinBoxFill className="text-4xl text-[#0A66C2]" />
            <h2 className="h2 text-4xl md:text-5xl">
              Professional <span className="text-accent">Recommendations</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and collaborators who have witnessed my work and dedication firsthand.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <stat.icon className="text-4xl text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-12 text-center"
        >
          <a
            href="https://www.linkedin.com/in/chirag-nahata/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(10,102,194,0.5)]"
          >
            <RiLinkedinBoxFill className="text-2xl" />
            <span>View All Recommendations on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
