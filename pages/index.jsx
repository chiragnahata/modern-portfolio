import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-primary/60 min-h-screen relative overflow-hidden">
      {/* Header (only for mobile) */}
      {isMobile && (
        <header className="bg-primary/80 backdrop-blur-sm p-4 sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-white">Chirag Nahata</h1>
        </header>
      )}

      {/* Main content */}
      <div className="w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10">
        <div className="text-center flex flex-col justify-center pt-20 md:pt-40 px-4 md:px-0 md:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm md:max-w-xl mx-auto md:mx-0 mb-10 text-sm md:text-base"
          >
            Hello there! 👋 I'm Chirag Nahata, a versatile developer on a perpetual journey of coding exploration. 
            From crafting robust software solutions to diving into the latest technologies, my work is a canvas reflecting my passion for innovation. 
            As a Full Stack Developer, Hackathon Enthusiast, Founder of Team codeARC and Digidenone, Entrepreneur, and Researcher, I bring a blend of creativity, efficiency, and commitment to lifelong learning. 
            Join me in the exciting world of code, where every project tells a story of growth and collaboration.
          </motion.p>

          {/* Projects button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center md:justify-start"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Background image */}
        <div
          role="img"
          className="bg-explosion bg-cover bg-center md:bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-30 md:opacity-100"
          aria-hidden
        />

        {/* Particles */}
        <div className="absolute inset-0">
          <ParticlesContainer />
        </div>

        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 right-0 md:-bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
