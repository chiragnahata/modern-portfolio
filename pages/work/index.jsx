import { motion } from "framer-motion";
import { useState } from "react";
import { 
  RiReactjsLine, 
  RiCodeSSlashLine,
  RiCpuLine,
  RiShieldLine,
  RiDatabase2Line,
  RiCloudLine
} from "react-icons/ri";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = [
    { name: "All", icon: RiCodeSSlashLine },
    { name: "Full Stack", icon: RiReactjsLine },
    { name: "AI/ML", icon: RiCpuLine },
    { name: "Cybersecurity", icon: RiShieldLine },
  ];

  const projectStats = [
    { number: "20+", label: "Projects" },
    { number: "8", label: "Live Apps" },
    { number: "100K+", label: "Code Lines" },
  ];

  return (
    <div className="min-h-screen bg-primary/30 py-32">
      <Circles />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-8"
        >
          <h2 className="h2 text-4xl md:text-5xl mb-4">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From AI-powered security platforms to innovative educational tools, 
            I've built enterprise-grade solutions spanning Full Stack Development, ML, and Cybersecurity.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto"
        >
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
            >
              <div className="text-2xl font-bold text-accent mb-1">{stat.number}</div>
              <div className="text-white/70 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedFilter(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-sm ${
                selectedFilter === category.name
                  ? "bg-accent border-accent text-white"
                  : "border-white/20 text-white/70 hover:border-accent hover:text-white"
              }`}
            >
              <category.icon className="text-lg" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Slider */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <WorkSlider filter={selectedFilter} />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-8 bg-gradient-to-r from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/30 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-2">Let's Collaborate!</h3>
          <p className="text-white/80 mb-4 text-sm">
            Open to discussing new projects and opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-xl font-semibold transition-all text-sm"
            >
              Start Project
            </a>
            <a
              href="https://github.com/chiragnahata"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-xl font-semibold border border-white/20 hover:border-accent transition-all text-sm"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;
